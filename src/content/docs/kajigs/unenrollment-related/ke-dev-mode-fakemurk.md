---
title: fake-dev-mode-fakemurk
---

-e 
Fakemurk - Mercury Workshop:
Fakemurk blends your Chromebook in with the rest in the Admin console.

Website: https://docs.google.com/document/d/1Pku_CbEG9SwQtnm0I188RtpdpW8nXQhiNdMp8PN7Mik/edit
Github: https://github.com/MercuryWorkshop/fakemurk

How do I use this?
For the best results, it is recommended to recover with a v107 recovery image before running the script. It makes things more consistent and less likely to fail.

First, you want to already have an unenrolled Chromebook and you want to turn dev mode on.  You also might want to prepare a USB with the Linux distro of your choice or Chrome OS Flex. 
Install MrChromebox's RW_LEGACY bios (https://mrchromebox.tech/#fwscript) if you haven't already. 

Next, head over to chrome-untrusted://crosh, type shell and then type out the following commands one by one:

sudo -i
bash <(curl -SLk https://github.com/MercuryWorkshop/fakemurk/releases/latest/download/fakemurk.sh)
        
Follow all of the directions given by the script. Your Chromebook should reboot.
        
Tip:
If you get an error about a filesystem being read-only run the following:

fsck -f $(rootdev) 

After this, reboot.
        
Important Note:
If you simply press ctrl-d on the dev mode screen and proceed as normal, there's a good chance you'll be stuck on the "enrolling device" screen forever, 
then get an enrollment error complaining about a certificate.
        
IF THIS HAPPENS, what you want to do is press refresh+power to reboot the Chromebook, 
when it gives you the OS verification screen press space to disable dev mode, and then press refresh+power. 

This will result in a "Chrome OS is missing or damaged" screen. THIS IS SUPPOSED TO HAPPEN!
Press escape+refresh+power, then ctrl+d and enter to reenable dev mode. 
When you get back to the "OS verification screen" press Ctrl-D to boot.
        
If you get another "Chrome OS is missing" screen, and you're absolutely sure that you didn't press space after the re-enable step, 
you might have run into a semi-common bug. 

We haven't pinned down the cause of this yet, but it can usually be fixed by downgrading/recovering to a 107 or 105 image, 
then restarting all the steps from the beginning, but make sure to omit the dev mode cycle steps above, and just keep dev mode on the entire time.

Also, DO NOT use the sign out button to sign out of ChromeOS, use Power + Refresh or Reboot in Crosh. 

If you use the sign out button there is a 90% chance your Chromebook will freeze then when it reboots, 
you will need to use Sh1mmer's disable block dev mode to remove the screen, don't worry. 

This is not the firmware blocking dev mode, just ChromeOS. So you can still use the Sh1mmer disable block dev mode on any CR50 version.
        
Note that if you have a "dedede" Chromebook, the steps for enabling and disabling dev mode are slightly different but you should already know or know how to google.

Version Reporting:
Fakemurk does not fake reporting what version you're on. The longer you stay on the same version with fakemurk, the more you could start to raise flags as your version will be much lower. 
After a few months, consider recovering with a v107 recovery image, then run sh1mmer to unenroll, then update to the latest stable version, then use fakemurk, and repeat on new releases. 
You only need to do this every once in a while.
        
How it Works:
Chrome OS interally uses a library called "crossystem" (Chrome OS system), which reports critical low-level information about the current state of the system, 
such as the hardware ID, and importantly here whether devmode is enabled or not. 

Since a lot of low level Chrome OS code is written in bash, it couldn't have crossystem be a c++ library, so it gets compiled to a static binary on the system instead. 
Crossystem isn't the only internal library written like this, but it's the most important one. Again, if you want to know more about how this works, look at the writeup.
(https://coolelectronics.me/blog/breaking-cros-3)

Since the system trusts this crossystem file to tell if dev mode is enabled and snitch about its status to the Google Admin Console, 
we can make our own version of this file that perpetually reports devmode being off, even though the system still lets us boot unverified versions of Chrome OS.
        
This limbo state, however, comes with strings attached. As the OS thinks we're in verified mode, typing shell into crosh, and escalating to root with sudo does not work. 

Luckily, since the firmware is in developer mode, we can disable rootfs verification and drop a backdoored sshd config, 
as well as replace any binary in the system with our own custom script. This is where mush comes into play.

mush is a drop-in replacement for crosh, offering various utilites such as a shell and more. mush is what really ties fakemurk together, making it more than just developer mode on verified boot. 

With mush, you have full OS control without leaving CrOS. This effectively means you are in a pseudo developer mode, where as far as the OS is concerned everything is normal, 
but you have full behind-the-scenes shell access.
        
Mush contains the following features:    
-> Extension disabler - allows you to toggle on and off any extension
-> Root shell - gives you a bash shell as root. If you don't know what bash is ignore this
-> Pollen editor - allows you to enable disable certain "policies" that administrators apply to your Chromebook. 
Note that any policies starting with "Device" cannot be modified by Pollen, and will require lilac instead.
-> Emergency revert - will immediately reverse changes made by fakemurk and go back to a normal verified mode enrolled Chromebook.

By default, the script will modify policies allowing you to do the following:
-> Install any extension from the chrome web store
-> Sign in to Google with any account type.
-> Install any APK on the Google Play Store. If the Google Play Store appears blank, download the Aurora Store APK 
(https://gitlab.com/AuroraOSS/AuroraStore/uploads/bbc1bd5a77ab2b40bbf288ccbef8d1f0/AuroraStore_4.1.1.apk) and sideload it with the package installer by right clicking on the file.
-> Attempt to install crostini (usually won't work, do not make an issue if this breaks)

Crosh Blocked:
Easy! While fakemurk is installed, go into your downloads folder (NOT GOOGLE DRIVE), make a folder and call it "disable-extensions". 

As long as that folder exists, no extension will be able to load and you'll be able to visit crosh, 
where you can then delete the folder and use mush to gain more fine-grain control over the specific extensions you want to enable.
        
Installing Help:
If this doesn't work, there's an 85% chance you did something really dumb while installing and need to read the directions more carefully.
You should NOT ping or dm any of the creators about your failure.
        
Now, there's also the chance that something is genuinely broken and if you get the text "THIS IS A BUG, REPORT IT HERE https://github.com/MercuryWorkshop/fakemurk/issues", 
you should do just that, but making sure you don't see any duplicates first. Follow the issue template: https://github.com/MercuryWorkshop/fakemurk/blob/main/ISSUE_TEMPLATE

Credits:
r58Playz#3467 - created bash emulators for vpd and crossystem, trawled through chromium source to find out what needed to be patched
CoolElectronics#4683 - initial idea for the project, created the installer
Rafflesia#8396 - found user policy modification, which is used here
The rest of the Mercury Workshop team - assistance with testing and miscellaneous files     
https://github.com/MercuryWorkshop/fakemurk
https://docs.google.com/document/d/1Pku_CbEG9SwQtnm0I188RtpdpW8nXQhiNdMp8PN7Mik/edit
