import React, {useEffect} from "react";
import "../Post.css"

// import resources
import sentry from "./resource/sentry.jpg";
import native_libs from "./resource/native-libs.png";
import workflow from "./resource/debug-files-workflow.png";

const Post3 = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	  }, []);

  return (
	<>
	<section className='post'>
		<h1>Setting up self-hosted sentry server</h1>

		<div className='post-body'>
			<img src={sentry} alt="" style={{ marginBottom:"-10%"}}/>
			<p >
				Sentry is an open-source full-stack error tracking system which supports a wide range of platforms. Sentry is a paid 
				service that offers a lot of features but it also offers a free plan for developers with limited events and features. 
				The free plan is a good place to start experimenting with Sentry and its features. If you have an enormous amount 
				of projects connected to sentry, the free plan won't be sufficient anymore as it has a limit of 5000 events per 
				month. You can either upgrade to a paid plan or deploy Sentry on your own servers.
			<br />
			<br />
				Since Sentry is an open-source system, the code is available online to deploy on your own infrastructure. In this post 
				we will be going through the steps to deploy sentry on your own server using docker and nginx. 
			<br />
			<br />

			According to the <a target="_blank" href="https://github.com/getsentry/self-hosted" style={{color:"blue", textDecoration: "underline" }}> <strong>Github repository</strong></a> you will need the following requirements:
			<ul>
				<li><strong>Docker</strong> 19.03.6+</li>
				<li><strong>Compose</strong> 2.0.1+</li>
				<li><strong>4 CPU</strong> Cores</li>
				<li><strong>16 GB</strong> RAM</li>
				<li><strong>20 GB</strong> Free Disk Space</li>
			</ul>

			These are the most optimal server requirements.
			</p>

			<h2> Features of Sentry</h2>
			<ul>
				<li><strong>1. Alert System:</strong> Sentry provides an effective alert system that notifies developers about critical issues in real-time. This allows teams to proactively address problems, ensuring the application's stability and reducing downtime.</li>
				<li><strong>2. Error Reporting:</strong> Sentry's error reporting feature collects and aggregates errors from various sources, presenting them in a comprehensive and easily understandable manner. This helps developers identify and fix issues faster, improving application performance and user experience.</li>
				<li><strong>3. Application Performance Monitoring:</strong> Sentry's APM feature enables developers to track and monitor the performance of applications, making it easier to identify bottlenecks and optimize code for better performance.</li> 
			</ul>
			<br />
			<br />

			<h2> sentry workflow for crash detection and error-tracing</h2>
			<img src={workflow} alt="" />

			<br />
			<br />

			<h2> To implemnt above workflow below are the action items</h2>
			<ul>
				<li>Infrastructure setup using docker</li>
				<li>Setup platform specific SDK</li>
				<li>Configure and compile crashpad backend for linux</li>
				<li>Adapt crashpad handler in native code</li>
				<li>Upload data to sentry dashboard</li>
			</ul>
			<br />
			<br />

			<h2> 1.Infrastructure setup using docker</h2>
			<p>
				To get started with a default installation, download the source code <br />
				<code> $ wget https://github.com/getsentry/self-hosted/archive/refs/tags/23.4.0.zip </code>
				<br />
				<br />
				The above will download the zip file of src code So, first unzip it and then cd into the directory and run the 
				below command to start the installation process:
				<br />
				<code>
					$ unzip 23.4.0.zip <br />
					$ cd self-hosted-23.4.0 <br />
					$ chmod a+x install.sh <br />
					$ ./install.sh <br />
				</code>

				<br />
				<br />
				This will take a while, grab a cup of coffee in the meantime 😊. If the installation is successful you should see the output:
				<br />
				<code>
					----------------------------------------------------------------------- <br />
					You're all done! Run the following command to get sentry running: <br />
					    docker-compose up -d <br />
					----------------------------------------------------------------------- <br />
				</code>
				<br />

				Now run the following command to start sentry: <br />
				<code>
					$ docker compose run --rm web createuser <br />
					$ docker compose up -d <br />
				</code>
				<br />
				<br />

				<strong>We will set nginx server for reverse proxy to get open it in browser: </strong><br />
				Sentry Web Application is running on localhost:9000 and cannot be accessed from outside. We will install Nginx 
				along with Certbot to get SSL Certificate for our Sentry VM.
				<br />
				<code> $ start nginx </code>
			</p>

			<br />
			<br />
			<h2>2. Setup setry-native SDK </h2>

			<p>
				We will proceed further and download the sentry native source code to get <a style={{ fontWeight: "bold"}}>libsentry.so</a><br />
				<code>$ git clone https://github.com/getsentry/sentry-native.git</code> <br />
				<br />
				Now compile it using below commands <br />
				<code>
					$ cmake -B build -DCMAKE_BUILD_TYPE=RelWithDebInfo   <br />
					$ cmake --build build --parallel    <br />
					$ cmake --install build --prefix install --config RelWithDebInfo   <br />
				</code>
				<br />
				<br />
				resulting artifacts are installed in install dir, as show below: <br />
				<br />
				<img src={native_libs} alt="" />
			</p>

			<h2>3. Configure and compile crashpad handler for appliction running</h2>
			<p>
				Although crashpad_handler is generated as artifact in above stage but need some extra support libraries as well 
				to compile native C application running on Linux Platform.<br />

				So lets proceed to configure and compile crashpad handler backend for linux <br />

				<code> $ mkdir crashpad && cd crashpad </code> 
				<br />
				<br />

				clone the depot-tools source code <br />
				<code> $ git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git</code> 
				<br />
				<br />

				export the path of depot-tools <br />
				<code> $ sudo echo "export PATH=/home/prashant/crashpad/depot_tools:$PATH"</code> <br />
				<br />
				fetch the source code <br />
				<code> $ mkdir crashpad && cd crashpad</code> <br />
				<code> $ fetch crashpad && cd crashpad</code> <br />
				<br />

				compile the crashpad source <br />
				<code>
					$ gn gen out/Default     <br />
					$ ninja -C out/Default
				</code> 
				<br />
				<br />

				Among the output artifacts, Useful libs for linux apps:

				<ul>
					<li><strong>out/Default/obj/client/libc* </strong></li>
					<li><strong>out/Default/obj/util/libutil.a</strong></li>
					<li><strong>out/Default/obj/third_party/mini_chromium/mini_chromium/base/libbase.a :</strong> libbase.a needs to be 
											specified in the build arguments or the application will not build </li> 
					<li><strong>out/Default/crashpad_handler :</strong> needs to be deployed with the application and accessible at runtime. </li>
					<li><strong>depot_tools/crashpad/crashpad and 
						depot_tools/crashpad/crashpad/third_party/mini_chromium/mini_chromium:</strong> need to add as include dirs </li>
				</ul>
			</p>

			<h2>4. Adapt crashpad handler in native-code</h2>

			<p>
				sample C application code you can get in the <a target="_blank" href="https://github.com/prashantdivate/sentry-native-C-application/tree/main" style={{ color: "blue", fontWeight: "bold", textDecoration: "underline" }}>github repository</a> <br />
				Compile it using gcc and other supporting libraries generated in step-2 and step-3 and run the binary and check the log event on sentry dashboard.

				<br />
				<br />
				Below, step is optional step to upload the debug files to sentry server. Till this point our binary will trigger the log 
				event on sentry dashboard. But if you integrated crashpad_handler in your application code then you need to upload the 
				debug symbols of binary as well.
			</p>
			<br />


			<h2>5. Upload debug symbols to sentry dashboard</h2>
			<p>
			Run below sentry-cli docker image to flush the data to project hosted on sentry server. <br /> 
			<code>
				$ docker run --rm -v $(pwd):/work getsentry/sentry-cli \  <br />
				--url http://localhost:9000 \                           <br />
				--auth-token &lt;your-auth-token&gt; \                  <br />
				--org &lt;org-name&gt; \                                <br />
				--project &lt;project-name&gt; \                        <br />
				--log-level=debug \                                     <br />
				debug-files upload main.debug                           <br />
			</code>

			<br />
			<br />
			Hope you liked the content, stay tuned for such exciting features blog posts. <br />
			Feel free to reach out to me for any questions. <br />
			</p>
		</div>
	</section>
  </>
  );
};

export default Post3;
