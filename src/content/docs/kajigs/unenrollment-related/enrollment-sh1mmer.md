---
title: unenrollment-sh1mmer
---

-e 
Sh1mmer - Mercury Workshop
Website: https://sh1mmer.me/
GitHub: https://github.com/MercuryWorkshop/sh1mmer

Shim downloading has been taken down by Google. Use this rehosted link - https://dl.darkn.bio/ - to get a shim for your board.

Shady Hacking 1nstrument Makes Machine Enrollment Retreat:
-> SH1MMER is an exploit capable of completely unenrolling enterprise-managed Chromebooks. 
-> It was found by the Mercury Workshop team and was released on January, Friday the 13th, 2023. For more info, check out the Writeup.
-> If this isn't working for you, you're probably on v111+. If you are on v111 - v113, use https://github.com/S-PScripts/chromebook-utilities/blob/main/Exploits/Sh1mmer%20v111%20-%20v113

What you will need:
-> A USB with at least 8GB of storage
-> A personal computer or chromebook; note that you need admin perms on Windows/MacOS

Writing to USB:
-> First, you'll need to find your managed Chromebook's board name. 
This can be done by going to chrome://version on your Chromebook and copying the word after stable-channel, or with a variety of other methods.

-> If your board name is in the list below, your board has a publicly leaked RMA shim. If it's not, you'll have to source it on your own.
brask, brya, clapper, coral, corsola, dedede, enguarde, glimmer, grunt, hana, hatch, jacuzzi, kukui, nami, octopus, orco, pyro, reks, sentry, stout, strongbad, tidus, ultima, volteer, zork

-> First, you need to download a SH1MMER bin. Download a shim at dl.sh1mmer.me, and build it with the SH1MMER web builder.

-> Once you've obtained a MODIFIED SHIM (NOT A RAW SHIM), you can continue.

-> Download the Chromebook Recovery Utility extension on your personal computer as well.

-> Once the downloads are complete, launch the recovery utility and plug your USB into your personal computer.

-> Note: Your USB will be completely cleared and partitioned.

-> In the recovery utility window, click the settings icon and press "Use local image".

-> Select your shim file, identify your USB, and start the writing process. This will take about 10 minutes.

Executing on Chromebook:
-> Once writing is complete, enter recovery mode on your Chromebook. 
This is done by pressing the power button (⏻), reload key (↻), and escape key at the same time.

-> Press Ctrl+D on this screen, then press enter.

-> It will now say something about "returning to secure mode" or that "OS verification is off". 
You will most likely not actually be in dev mode, but the exploit will work regardless.

-> On this screen, press the power button (⏻), reload key (↻), and ESC key at the same time again! This is very important and cannot be skipped.

-> Once it re-shows the original recovery screen, plug your shimmed USB into your Chromebook, and press the power button (⏻), reload key (↻), and ESC key again. 
After a brief black-and-white loading screen, you should be in the SH1MMER menu.

-> Play around with the UI, exit, and reboot.

Aftermath:
-> You will now be able to, among other things, unenroll your Chromebook. It will now behave entirely as if it is a personal computer and no longer contain spyware or blocker extensions. 
After you do this and get past the "determining device configuration" screen, you will be able to actually turn dev mode on.

-> Note that while unenrolled, it is recommended to add your personal account first, then add your school account, then switch between the two as needed. 
Mercury Workshop does not condone the use of SH1MMER or unenrolling to cheat in school.

-> The biggest challenges with unenrolling are connecting to the school network and taking state or national exams (since there are no kiosk apps anymore).

-> There are many methods to get a school Wi-Fi password while enrolled, including the policy netlog trick. 
While on a school account and unenrolled, you can bypass Wi-Fi blocks by using a secure DNS such as Cloudflare 1.1.1.1 from chrome://os-settings/osPrivacy.
It is also recommended to enable "MAC Address Randomization" in chrome://flags to stay hidden.

-> To take a kiosk exam, the safest option is to re-enroll temporarily. Instructions for doing that are hosted at https://sh1mmer.me/kiosks.txt. 
Saving a copy of this file for future reference is probably a smart move.
