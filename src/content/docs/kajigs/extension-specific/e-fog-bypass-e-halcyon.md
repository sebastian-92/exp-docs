---
title: the-fog-bypass-e-halcyon
---

-e 
The Fog Bypass, E-Halcyon...

Instructions:
First of all, you'll need a linux PC or VM. WSL is not guaranteed to work.

Now, you'll need to boot into SH1MMER, and press the Un-Enroll option. It won't truly unenroll you if you've received the 112 update patching unenrollment and downgrading, 
but it is still a necessary step for the rest of this. If you've never used SH1MMER before or don't have an image lying around, 
make sure to follow all the instructions on https://sh1mmer.me for unenrollment before proceeding with the rest of the tutorial here.

Next, you need a version 107 recovery image corresponding to your board, which you can pick up from https://chrome100.dev. 
Once you've downloaded the right image for your board and have confirmed it's for version 107, unzip it and save it to a safe place. 
Now open up a terminal and type in the following commands (make sure to replace /path/to/recovery/image.bin with the actual path):

git clone https://github.com/MercuryWorkshop/RecoMod
cd RecoMod
chmod +x recomod.sh
sudo ./recomod.sh -i /path/to/recovery/image.bin --halcyon --rw_legacy

The script will modify the image in place, and it can now be flashed with a standard recovery tool onto a USB of your choice.

Enable developer mode and get to the dev mode block screen similarly to how you would with SH1MMER, then plug in the USB. 
The recovery screen will show up, and at this point you need to start spamming the E key on your keyboard. It will begin a 5 minute wait sequence, 
and near the end of the 5 minutes start spamming E again. You will only have to wait 5 minutes once, subsequent boots will have the 5 minute wait omitted.

The boot splash will show, and you will enter a special menu. Use arrow keys to navigate the cursor down to "activate halcyon environment" and press enter. 
Then navigate down to "Install halcyon semi-tethered" and wait for it to finish. Once it's finished, go back to "activate halcyon environment" and press "Boot halcyon semi-tethered" 
and you will be booted into a downgraded and unenrolled ChromeOS environment.

FAQ:
How does this work?
See the writeup (https://coolelectronics.me/blog/breaking-cros-5) for more information..

Can the admins see that I'm doing this?
No.

Why don't my history/cookies/etc save after a reboot?
Unfixable restriction of cryptohome. See the writeup for more information.

Why is my Chromebook "Missing or damaged?"
After installing E-Halcyon, you won't be able to boot Chrome OS normally. You'll have to keep the usb around to jumpstart the booting process.

Where do I report bugs?
The RecoMod GitHub (https://github.com/MercuryWorkshop/RecoMod).

Why does it say "E mode not activated" when I try to boot halcyon?
You spammed the E key when starting at the wrong time, or not at all.

Credits:
CoolElectronics - RecoMod, working switch_root, and everything else
OlyB - Insight and contributions to the RecoMod script
vk6 - Created this website

The instructions used to be here: https://fog.gay
Since the original website is no longer hosted, you can view the instructions here (but the instructions are on this document too):
https://e-halcyon.vercel.app/