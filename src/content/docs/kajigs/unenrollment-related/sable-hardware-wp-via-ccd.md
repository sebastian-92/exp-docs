---
title: disable-hardware-wp-via-ccd
---

-e 
This method lets you disable hardware write protection (WP) on your Chromebook without needing to open it. 
This may not work on all devices and you also need to be unenrolled first or have FWMP off with Developer Mode on.

Requirements:
-> SuzyQ cable or adapter
   A guide of where to buy one of these will not be provided but if you would like to make one here are some schematics:  https://cdn.sparkfun.com/assets/9/e/f/8/2/951-00273-01_20180607_suzyqable_SCH_1.pdf

Instructions
1. Open a root shell on your Chromebook. This can be on a shim or within Crosh, it doesn't matter.

2. Run gsctool -a -o.henever it tells you to Press PP, press the power button.
-> At the end of that process, it'll restart and you'll be out of Developer Mode. Turn it back on and head back to the terminal.

3. Plug in your SuzyQ. On most devices, you'd use the Right USB C port and then plug the USB A in anywhere. Try your other ports if that doesn't work for you.
-> Once it's plugged in, in the lsusb command you should see the CR50 with an 18d1:5014 USB ID. If you don't see this try replugging.
-> Now that you see that, make sure that the TTY is open via running ls /dev/ttyUSB* - you should see TTY 0, 1, and 2.

4. To disable WP, run each of these one by one:
echo "wp false" > /dev/ttyUSB0
echo "wp false atboot" > /dev/ttyUSB0
echo "ccd reset factory" > /dev/ttyUSB0

5. Reboot. Once that's done, run the following:
flashrom --wp-disable

6. Run crossystem wpsw_cur - this should output 0.

7. You're done!

Credits:
akane | Titanium Network=