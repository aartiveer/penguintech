import React, {useEffect} from "react";
import "../Post.css"

// import resources
import flow from "./resource/boot.svg";

const Post2 = () => {

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	  }, []);

  return (
	<>
	<section className='post'>
		<h1>Embedded Linux booting process</h1>

		<div className='post-body'>
			<p >
				This article will walk you through every step of the process of Embedded Linux booting. This is meant for engineers who 
				are both new to working with embedded Linux, as well as those who are new to yocto project in general. No matter your 
				current skill level, every step of the process is explained in detail
			<br />
			<br />

				<strong>The Embedded Linux boot process involves the following steps:</strong>
			</p>

			<img src={flow} alt="" />

			<br />
			<br />

			<h2> 1.BOOT ROM</h2>
			<p>
				"Boot ROM" on chip includes code that the processor vendor develops and burns into the ROM. After a processor is reset, 
				it executes ROM startup code. The ROM startup code initializes the CPU, memory controller, and on-chip devices, and 
				it configures the memory map. It is also called as ROM Program Loader (RPL). The ROM code can load the SPL image 
				from any of the following devices:
			</p>

			<ul>
				<li>Memory booting with MMC</li>
				<li>Peripheral booting with UART</li>
			</ul>

			<br />
			<br />

			<h2> 2.SPL</h2>
			<p>
				The ROM copies content of "MLO" file (bootloader)to static static RAM. SRAM memory is limited (due to physical reasons),
				so we only have few KBs for bootloader. Usually regular bootloader (e.g. U-Boot) binary is bigger than that. So we need 
				to create some additional bootloader, which will initialize regular RAM and copy regular bootloader from MMC to RAM, 
				and then will jump to execute that regular bootloader. This additional bootloader is usually referred as uboot-SPL.
			</p>

			<h2>3. uboot</h2>
			<p>
				The bootloader decompresses the Linux kernel into RAM from Flash memory or a TFTP server transfer. It then 
				executes a jump to the kernel's first instruction. The kernel first configures microprocessor registers and then 
				invokes start_kernel, which is the architecture-independent starting point.
			<br />
			<br />

				Since embedded systems do not have a BIOS to perform the initial system configuration, the low level initialization 
				of microprocessors, memory controllers, and other board-specific hardware varies from board to board and from CPU 
				to CPU. These initializations must be performed before a Linux kernel image can execute.
			</p>

			<h2> 4. Kernel</h2>
			<p>
				Now the kernel is loaded into memory and initialized. The initrd image is compiled and mounted into the memory. 
				It serves as a temporary root file system and helps kernel to boot properly without mounting any root file system. 
				Now that all the drivers are loaded into memory, and kernel has booted, kernel mounts the root filesystem in 
				read only mode, and starts the first process.
			</p>

			<h2>5. init</h2>
			<p>
				'init' is the first process started by kernel (initialization process). It is parent of all processes. 
				The PID (Process ID) of init process is always 1. This process persists till the computer halts. It is 
				responsible for the whole state of system. The settings for this process are stored in its configuration file, 
				/etc/inittab (system initialization table). Before diving deeper into the details of this file and proceeding 
				any further with the boot process, let's discuss about runlevels.
			<br />
			<br />

				Runlevel is the state in which a system boots. It can boot in a single user mode, multiuser mode, with networking,
				and with graphics etc. Following are the default runlevels defined by Linux:
			</p>
			<code>
				0: Halt or shutdown the system<br />
				1: Single user mode<br />
				2: Multi-user mode, without networking<br />
				3: Full multi user mode, with NFS (typical for servers)<br />
				4: Officially not defined; Unused<br />
				5: Full multi user with NFS and graphics (typical for desktops)<br />
				6: Reboot<br />
			</code>

			<p>
				The executing init process loads shared runtime libraries. init reads its configuration file, /etc/inittab, and 
				executes scripts.
			<br />
			<br />

				'inittab' file from recipe-sysvinit is:
			</p>
			<pre>
				<code>
					<div># /etc/inittab: init(8) configuration.</div>
					<div># $Id: inittab,v 1.91 2002/01/25 13:35:21 miquels Exp $</div>
					<div># Boot-time system configuration/initialization script.</div>
					<div># This is run first except when booting in emergency (-b) mode.</div>
					<div>si::sysinit:/etc/init.d/rcS</div>
					<div># What to do in single-user mode.</div>
					<div>~~:S:wait:/sbin/sulogin</div>
					<div># /etc/init.d executes the S and K scripts upon change</div>
					<div># of runlevel.</div>
					<div>#</div>
					<div># Runlevel 0 is halt.</div>
					<div># Runlevel 1 is single-user.</div>
					<div># Runlevels 2-5 are multi-user.</div>
					<div># Runlevel 6 is reboot.</div>
					<div>l0:0:wait:/etc/init.d/rc 0</div>
					<div>l1:1:wait:/etc/init.d/rc 1</div>
					<div>l2:2:wait:/etc/init.d/rc 2</div>
					<div>l3:3:wait:/etc/init.d/rc 3</div>
					<div>l4:4:wait:/etc/init.d/rc 4</div>
					<div>l5:5:wait:/etc/init.d/rc 5</div>
					<div>l6:6:wait:/etc/init.d/rc 6</div>
					<div># Normally not reached, but fallthrough in case of emergency.</div>
					<div>z6:6:respawn:/sbin/sulogin</div>
					<div># The default runlevel.</div>
					<div>id:5:initdefault:</div>
				</code>
			</pre>
			
			<p>The general format of entries in this file is:</p>
			<code>id:runlevel(s):action:process</code>

			<p>
				Typically, init executes a startup script, /etc/rc.d/rcS, which configures and starts networking and other 
				system services. After all these scripts have been executed, then finally "/etc/rc.local" script runs. init 
				enters a runlevel where system duties can be performed or the login process can start, allowing for user sessions.
			</p>
		</div>
	</section>
  </>
  );
};

export default Post2;
