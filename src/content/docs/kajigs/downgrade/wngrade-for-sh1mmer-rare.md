---
title: downgrade-for-sh1mmer-rare
---

-e 
Some chromebooks on v114 LTSC have their kernver set to something it's not supposed to be on. 
If you have one of the chromebooks with the same board, codename and kernver, you can downgrade to v107 and use SH1MMER to unenroll.

List of working chromebooks:
OCTOPUS BOBBA: 1
OCTOPUS PHASER360: 2
OCTOPUS BOBBA360: 5
JACUZZI WILLOW: 1
GRUNT BARLA: 2 

To check your board and codename:
1. Go to chrome://version
-> At the end of Platform is your board
-> The Customization ID is your codename
2. If you have the same board and codename as one in the list above, you can continue.

To check your kernver (this won't erase any of your data):
-> Boot into recovery mode (power + esc + reload).
-> Press tab.
-> Look through the info - the kernver should be in the "TPM" section. FWVER DOES NOT MATTER.

If the last number of kernver matches to the board and codename you have in the list above, that's great!
Use https://chrome100.dev/ to download a v107 image for your board, flash it with Chromebook Recovery Utility, downgrade, and unenroll in SH1MMER. 
You'll need to boot into verified mode first and go through the setup to enable developer mode. It is recommended to use the Pencil Method exploit immediately after you get into developer mode.

Credits:
crossystem | Titanium Network
