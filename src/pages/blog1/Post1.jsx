import React, {useEffect} from "react";
import "../Post.css"

// import resources
import iomem from "./resource/iomem.png";
import kconf from "./resource/Kconfig.png";
import dts from "./resource/dts.png";
import t1 from "./resource/test-1.png";
import t2 from "./resource/test-2.png";
import t3 from "./resource/test-3.jpg";
import log1 from "./resource/log-1.png";
import log2 from "./resource/log-2.png";

const Post1 = () => {

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	  }, []);

  return (
	<>
	<section className='post'>
		<h1>Log kernel crash using ramoops/pstore persistent across reboot</h1>

		<div className='post-body'>
			<p >
				Even though the Linux kernel is among the most reliable, crashes can still happen, either because of a client or 
				proprietary driver whose stability hasn’t been tested or because of a fundamental bug that hasn’t been resolved yet. 
				Given how crucial logs and traces are to fixing these kinds of defects, we tested an in-kernel functionality for one 
				of our clients that creates persistent — or more accurately, semi-persistent — logs of the bugs in question.
				<br />

				The goal is to record kernel logs throughout the last stages of the system and preserve them so that they can be examined 
				at a later time. Persistent storage, or pstore, is the name of this feature. We shall examine this feature’s capabilities 
				in this blog article.
			</p>

			<h2>ramoops</h2>

			<p>
				The ramoops driver allows us to store kernel oopses, the kernel console output and user messages in a reserved memory 
				region inside RAM. In normal hardware designs RAM will not power off when we just do a reboot and therefore the data 
				will survive a restart. By defining a reserved memory region the kernel will not touch this memory area and therefore 
				not overwrite data stored there.
				<br />
				<br />
				We have to find a free memory region in RAM which we can use. For this you can use below command:
			</p>

			<img src={iomem} alt="" />

			<p>
				In the output of above command you may see some aeas are reserved and we have to choose the area which is not reserved 
				for our pstore (approx. 1MB)
			</p>

			<br />
			<br />

			<h2> Configuring linux kernel for pstore </h2>

			<p>
				Pstore was designed for systems that require a way to keep kernel-related logs intact during system reboots. For our 
				customer, this feature has been implemented on kernel version v5.4.Y. This version is sometimes referred to as Ramoops 
				because the logs are simply RAM backed. This indicates that it is expected that periodically, saved log files will be 
				relocated from the persistent store to another location in order to make room for future crashes. That could be 
				something a service is doing when it reboots.
				<br />
				<br />
				Back to the configuration, the followings are kernel options that need to be enabled to support this feature:
			</p>

			<img src={kconf} alt="" />

			<p>The followings are the explanations of each options that is enables in the previous configuration excerpt:</p>

			<ul>
				<li><b>CONFIG_PSTORE </b>: This is the main option that enables the pstore feature</li>
				<li><b>CONFIG_PSTORE_RAM</b>: This enables panic and oops messages to be logged to a circular buffer in RAM where 
				it can be read back at some later point</li>
			</ul>

			<br />

			<p>
				It might be interesting to have the kernel trace logs along with the OOPs, which could tell for example the last 
				function that was executed by the kernel before it gave its last breath. To do that, we have to enable the following 
				options:
			</p>

			<ul>
				<li> <b>CONFIG_FTRACE </b>: enables ftrace, the Linux kernel tracer, which will allow to select the next option.</li>
				<li> <b>CONFIG_FUNCTION_TRACER</b>: This will add the support for kernel function tracing and will 
						make <code> CONFIG_PSTORE_FTRACE</code> accessible</li>
				<li> <b>CONFIG_PSTORE_FTRACE </b>: With this option, the Linux kernel traces function calls into a persistent ram 
						buffer that can be decoded and dumped after reboot through pstore filesystem. Upon reboot, captured trace 
						will be available in <code>/sys/fs/pstore/ftrace-ramoops</code> file.</li>
			</ul>
			<br />

			<p>We could have extended our configuration with the following options:</p>
			<ul>
				<li><b>CONFIG_PSTORE_CONSOLE </b>: When the option is enabled, pstore will log all kernel messages, even if no oops 
						or panic occurred.</li>
				<li><b>CONFIG_PSTORE_PMSG</b>: When the option is enabled, pstore will export a character interface <code>/dev/pmsg0</code> 
						to log user space messages. Writes to <code>/dev/pmsg0</code> are appended to the buffer, and on reboot, 
						the persistent contents are available in <code>/sys/fs/pstore/pmsg-ramoops-[ID]</code>, where <code>[ID]</code> 
						is the record number of dumps of this same kind.</li>
			</ul>
			<br />

			<p>The following is the complete device tree node that describes our pstore memory regions and its different record sizes:</p>

			<img src={dts} alt="" />

			<br />

			<p>
				In the previous snippet, we have added some properties that are related to both the <code>console</code> and 
				<code>pmsg</code> (user message) pstore. The following are more details on each property:
			</p>

			<ul>
				<li><b>record-size </b>: Instructs ramoops to use up to 64kB per record to store kernel log messages when a 
						panic occurs. That is, each file storing such dump will be up to 64kB sized.
				</li>
				<li><b>console-size</b>: this is the maxim size per console output record, 64kB in our case. Do note that 
						when enabled, console output is stored even if a panic did not occur.
				</li>
				<li><b>pmsg-size </b>: this is the maximum record size per user message. In our case, it is up to 4kB. 
						It means when this size is reached, another file will be created in the pstore filesystem to store the 
						next incoming messages, and so on.
				</li>
			</ul>

			<br />

			<h2>Testing</h2>
			<p>
				Now that we have deployed the device tree and are sure that ramoops is enabled we reboot the module and check 
				if we can mount pstore.
			</p>

			<img src={t1} alt="" />
			<p>
				If we check the directory we will see that it is empty. The reason is that we didn't reboot yet with ramoops 
				enabled in the device tree and therefore don't have any messages available.
				To be able to test the Pstore mechanism, we need to manually trigger kernel panics.
			</p>

			<img src={t2} alt="" />

			<br />
			<p>
				Now, after reboot by remounting the pstore filesystem we will see a new <code>dmesg-ramoops-0</code> file, which 
				corresponds to the dump that has been captured during the previous kernel panic created under <code>/sys/fs/pstore/</code>
			</p>

			<img src={t3} alt="" />

			<br />
			<br />
			<h2>User message log test</h2>
			<p>While configuring pstore, we have seen that enabling <code>CONFIG_PSTORE_PMSG</code> will result in creating 
				a <code>/dev/pmsg0</code> character device, which allows to store (by simply echoing in to it) user messages 
				that will be persistent between reboots. The following is an example:
			</p>

			<img src={log1} alt="" />

			<br />
			<p>After the reboot we can read what we have stored before:</p>

			<img src={log2} alt="" />

			<br />
			<p>This feature is useful if we need to pass information to the next boot cycle. However, keep in mind that if a 
				power off would happen in between this information would be lost.
			</p>


		</div>
	</section>
  </>
  );
};

export default Post1;
