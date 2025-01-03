---
title: unenrollment-pencil-method
---

-e 
Pencil Method - Unenroll by bridging pins on the motherboard.
The proper guide was created by Darkn: https://blog.darkn.bio/blog/3-the-tsunami#bypassing-instructions
!!! This can harm your Chromebook if done incorrectly. Use at your own risk. !!!

Requirements:
-> Conductive material (staple, tin foil, paperclip, etc.)
-> Scissors
-> Tape (optional, recommended)
-> USB drive or SD card with Sh1mmer flashed
-> Screwdriver corresponding to the screws of your Chromebook

Dismantling Hardware & Bridging Pins - Instructions:
1. With a screwdriver, remove each screw from the bottom of your Chromebook.

2. Disconnect the battery. The battery cable placement varies between models.

3. On the motherboard, find the 8-pin chip with pins sticking out or in. It likely has winbond or GigaDevice branding, and it may show 25Q64[xx] or 25Q128[xx] below the branding. 
It may be located on the back of the motherboard.

4. Shape a piece of your conductive material long enough to connect to both sides of the chip and small enough to not make contact with multiple pins on either side of the chip.

5. Place one end of the conductive material on pin 3 (WP). [SOIC-8] [WSON-8]

6. Place the other end of the conductive material on pin 8 (VCC). [SOIC-8] [WSON-8]

7. If necessary, place tape on top of the chip to keep the conductive material on the pins. [SOIC-8] [WSON-8]

8. Connect the battery.

Performing the Exploit - Instructions:
1. Boot into Sh1mmer with the USB.

2. In the Sh1mmer menu, navigate to Utilities.

3. Select Un-Enroll Device. This is necessary even if the process fails.

4. In the Utilities menu, select Open Bash.

5. In the bash shell, run the following commands:
flashrom --wp-disable
/usr/share/vboot/bin/set_gbb_flags.sh 0x8090
If the commands fail, the pins are not bridged correctly.

6. Reboot the Chromebook by pressing Refresh ↻ + Power ⏻.

7. Press Ctrl + D to bypass the OS verification screen.

8. Boot into Chrome OS.

9. Press Ctrl + Alt + F2 to enter the VT2 shell.

10. Log in to the shell as root.

11. Run the following commands:
tpm_manager_client take_ownership
cryptohome --action=remove_firmware_management_parameters

12. Press Ctrl + Alt + F1 to exit the VT2 shell.

13. Press Ctrl+Alt+Shift+R.

14. Click Powerwash.

Credits:
Darkn | https://darkn.bio
https://chrose.netlify.app/detail/pencil%20method/ | AshtonDavies
