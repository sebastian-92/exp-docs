---
title: unenrollment-br1ck
---

-e 
GO HERE INSTEAD: https://br1ck.vercel.app/

BR1CK By Copernicium [https://discord.gg/Pb6qUkacpj]

What is BR1CK?
BR1CK was an exploit released October 27th, 2024 which takes advantage of an oversight while creating FWMP in the TPM. 
It is capable of unenrolling all devices without platform FWMP on any version below v132.

How does it work?
The exploit works because of an issue that these chromebooks have when enrolling. 
If you EC reset[1] ↻+⏻ at just the right time, it will corrupt some data in the FWMP TPM space[2], resulting in an unreadable FWMP, meaning we can unenroll since we aren't under it's control[3] (besides WP). 
This allows us to boot into sh1mmer, unenroll, and fix the brick with gsctool -a -o

1. EC reset = the 2 keys used to forcefully restart the chromebook
2. FWMP TPM space = the data used by ChromeOS for enrollment related stuff
3. While FWMP is applied, protections are made to stop it from getting removed. These protections are from blocking debug cables to blocking resetting of the TPM (where it is stored)

How was this found?
While trying to do CRSH2TTY[1], Copernicium ended up bricking their device multiple times (a total of four). 
One time, they randomly tried to disable write protection while unbricking with a SuzyQ (debug cable), and surprisingly, it worked! 
This led to the discovery that FWMP doesn't apply while FWMP is corrupted. This functionality is stored in the read-only firmware, 
which means Google would have to produce updated Chromebooks with the fix to stop this.
All of their exploits have been made due to CRSH2TTY in some way.

1. CRSH2TTY was a (now patched) unenrollment exploit that required resetting at specific times, similar to BR1CK

What do you need to do this?
1. Luck (or skill, because you can get it consistently)

2. A board that is CR50 and not TI50
As of October 29, 2024, if you have one of the boards listed below, you cannot do the exploit:
brya, brask, cherry, guybrush, skyrim, rex, nissa (maybe?), corsola, staryu, geralt
How do I find my board name?
Go to chrome://version, click Ctrl + F and search for "stable-channel" the word after that is your board

3. (PREFERABLY) access to chrome://network#logs

4. A leaked shim, a USB drive, and another pc to flash it 
4.1. If you have a keyrolled dedede then you can buy a suzy qable [https://www.ebay.com/itm/335130747039]
(This seller is highly recommended, Copernicium bought from them and they're highly reputable) 
and use alternative steps Copernicium can provide/walk you through.

How do you perform this exploit?
-> Backup anything that is not sync'd to your google account (mainly files)
-> It is a good idea to read these instructions on another device like a phone, you will not be able to access this guide on the chromebook you are using

[RECOMMENDED] For users with chrome://network#logs (can't be policy blocked, can't use OOBESCAPE):
1. Go to the section below this one (finding the reset times), go through the process, and memorize the time it gives you, then continue
2. Powerwash again by signing out, pressing Ctrl+Alt+Shift+R
3. Proceed through the setup, when "Getting device ready" pops up, get a stopwatch ready and wait for the next "Enterprise enrollment" screen.
4. When "Enterprise enrollment" pops up, start your stopwatch.
5. Wait until you're in the ranges of time (I would go for the higher end) the file uploader gave you, perform an EC-Reset by ↻+⏻.
6. If chrome turns back on and you get one of the following screens (on website), proceed, otherwise, keep trying (this may take ages but most people can get it in 2-20 tries)
[if you click tab on either of these, under recovery reason it should say something about an error in the TPM]
7. Once bricked, get a shim (this guide will be using legacy)
If you don't know your board name and still went on with these steps, you can look it up by entering the model name at the bottom on a site like cros.tech
8. Press CTRL + D, then enter to enable developer mode (It doesn't matter if it's blocked), and then ESC + ↻ + ⏻ to enter recovery mode.
9. Plug in your shim USB
If you get a screen saying "the device does not contain ChromeOS"/"no valid image" you either chose the wrong shim for your board, didn't go into developer mode, bad flash, bad file, or you've been keyrolled (and cannot continue)
10. When the shim boots, type D to select "Deprovision"
11. Next, type B to open a bash shell, this is where we'll unbrick
12. Type the following command:
gsctool -a -o
Press the power button whenever it spams "Press PP button now!" (this will take awhile) whenever it says "Another press will be required" it is telling you to wait, you may have to wait for a minute or even more.
13. Once you're at the end of that process you should reboot and you'll be back at the "Welcome!" screen. (if you don't reboot/gsctool doesn't work, proceed to the bottom section, "errors while unbricking")
14. Get back into developer mode by pressing ESC + ↻ + ⏻, then CTRL + D, then enter.
15. Either press CTRL + D if you're on a "OS verification is OFF" white screen, or enter if you're on a "You are in developer mode" black screen. 
(keep this in mind if you want to stay in developer mode, you will have to do this each time you power it on)
16. You may get a "Your system is transitioning into Developer Mode" screen, wait for the 5 minute timer to finish, then follow step 15 again to boot into ChromeOS.
17. Start setting up your chromebook in OOBE by clicking Get Started, going through WiFi, and continuing. You should enroll.
18. Enter VT2 ctrl + alt + →
19. In VT2 type the following command: vpd -i RW_VPD -s check_enrollment=0
20. Powerwash or return to secure mode and once you go back through OOBE setup you should be unenrolled! 
If you aren't, contact byte (check the credits for where to contact) for help.

[REALLY HARD AND LUCK BASED] For users WITHOUT chrome://network#logs
1. Powerwash by signing out, pressing Ctrl+Alt+Shift+R, and following the instructions.
2. Proceed with the setup until you get to the "Getting device ready" screen.
3. Get a stopwatch ready and wait for the "Enterprise enrollment" screen.
3.5. Start your stopwatch and record how long it took for enrollment to finish
4. Take the time it took, take around 1-1.5 seconds off the time it took to enroll, proceed
5. Powerwash again by following step 1, go through the setup, and when you get to the "Enterprise enrollment" screen, start your stopwatch and wait for the time you got from step 4, perform an EC-Reset by ↻+⏻.
6. If chrome turns back on and you get one of the following screens (on website), proceed, otherwise, keep trying (this may take ages but most people can get it in 2-20 tries)
[if you click tab on either of these, under recovery reason it should say something about an error in the TPM]
7. Once bricked, get a shim (this guide will be using legacy)
If you don't know your board name and still went on with these steps, you can look it up by entering the model name at the bottom on a site like cros.tech
8. Press CTRL + D, then enter to enable developer mode (It doesn't matter if it's blocked), and then ESC + ↻ + ⏻ to enter recovery mode.
9. Plug in your shim USB
If you get a screen saying "the device does not contain ChromeOS"/"no valid image" you either chose the wrong shim for your board, didn't go into developer mode, bad flash, bad file, or you've been keyrolled (and cannot continue)
10. When the shim boots, type D to select "Deprovision"
11. Next, type B to open a bash shell, this is where we'll unbrick
12. Type the following command:
gsctool -a -o
Press the power button whenever it spams "Press PP button now!" (this will take awhile) whenever it says "Another press will be required" it is telling you to wait, you may have to wait for a minute or even more.
13. Once you're at the end of that process you should reboot and you'll be back at the "Welcome!" screen. (if you don't reboot/gsctool doesn't work, proceed to the bottom section, "errors while unbricking")
14. Get back into developer mode by pressing ESC + ↻ + ⏻, then CTRL + D, then enter.
15. Either press CTRL + D if you're on a "OS verification is OFF" white screen, or enter if you're on a "You are in developer mode" black screen. 
(keep this in mind if you want to stay in developer mode, you will have to do this each time you power it on)
16. You may get a "Your system is transitioning into Developer Mode" screen, wait for the 5 minute timer to finish, then follow step 15 again to boot into ChromeOS.
17. Start setting up your chromebook in OOBE by clicking Get Started, going through WiFi, and continuing. You should enroll.
18. Enter VT2 ctrl + alt + →
19. In VT2 type the following command: vpd -i RW_VPD -s check_enrollment=0
20. Powerwash or return to secure mode and once you go back through OOBE setup you should be unenrolled! 
If you aren't, contact byte (check the credits for where to contact) for help.

Finding the reset times:
How to use this?
1. Powerwash (this seems unnecessary but it'll remove potential errors and make it more accurate).
2. Go to chrome://network#logs.
2. Under the options section, check all of the boxes.
You can just select the bottom 2 options if you care.
3. Place the combined-logs.tar.gz file into the dropzone in the website at the top of this file.
IF YOU SEE "Could not parse for 'Show enrollment screen", PLEASE CHECK THE ERRORS SECTION. IF ISSUES PERSIST, PLEASE DM @appleflyer FOR THIS (other issues go to byte).
4. The reset timing will appear below the dropzone.
Please report bugs to @ubyte on discord

Errors:
Q: Could not parse for 'Show enrollment screen'
A: Powerwash and try again, if you continue to see this ask for help in Titanium Network [.gg/unblock] or Copernicium>

Q: gsctool -a -o immediately exits with no output and doesn't reboot
1. Run gsctool -a -k
2. Run gsctool -a -o

Q: gsctool -a -o isn't rebooting, but you went through the pp process
1. boot into the shim
2. go into the factory install part of sh1mmer with f + enter
3. select the option corressponding to tpm reset
4. do that twice
5. boot back into the shim
6. run the following: Deprovision, Disable Dev Block, Allow booting from USB
7. open the bash terminal with b
8. run gsctool -a -k followed by gsctool -a -o

Q: still enrolling after completing the guide
1. stay in dev mode (DON'T LEAVE OR U MIGHT BE COOKED!) 2. contact byte for help lol

HELP PLEASE I'M STUCK ON STEP 8
(check website for video)

if these don't work, please report the error to @ubyte on discord

Credits:
Byte - Pioneering the development of this, making the website, and coming up with the log consistency idea.
OlyB - Found out when we were supposed to restart, all we had left was figuring out when that was. 
silk - Reproducing the bug first and confirming Byte wasn't insane
Kilo - Even if he didn't reproduce, he tested SO much (literal hours), major respect to him 🫡
doxr - Existing (also cleaning up the website, don't read the source)
peap - Gave Byte logs which made it possible to reproduce (it was a whole second inaccurate before him)
appleflyer - Adding direct log archive parsing functionality for calculating timings and bytes emotional support + helping a lil :>
Windows XP - Making the guide easier to read and skid-friendly. Also a Whale Inc. member.
TNTCrazyError - That video.