---
title: powerr3set-kiosk-apps-v131
---

-e 
Patched on chromeOS v132
You must be willing to take apart your chromebook in order to do this.

Instructions:
1. Get the Mr. Chromebox Bios for your chromebook model.
2. Make sure your chromebook has UEFI Firmware (Full Rom) support.
3. Enter developer mode, then EC reset but add the esc key.
4. Use BR1CK.
5. Disable WP protection (Jumping chip, removing battery, or using a SUZY-Q cable)
On 117+, use Ctrl+Alt+f2 to enter VT2 and use chronos. On <116, use Crosh.
6. Run this script: cd; curl -LOk mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh
7. Download this chromeOS board image: https://chromiumdash.appspot.com/serving-builds?deviceCategory=Chrome%20OS%20Flex
8. Flash it to a USB.
9. Boot off of it.
10. Install.
11. Use a personal account.

You're UNENROLLED!
-> Reset to switch between accounts. 
-> There is no such thing as forced re-enrollment on chromeOS Flex.

WARNINGS:
1. While following steps 7-9, the already installed ChromeOS will be unusable.
2. You will need special hardware if you brick your computer.
3. There will be no Google Play.       

Credits:
Scutoid | thescutoid
Hack Hive
BLACKOUT NETWORK: https://discord.gg/kHTHhYuV2d