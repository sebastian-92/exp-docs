---
title: history-wiper
---

-e 
Wipe chrome history without powerwashing or using another device.

Requirements:
- A Chromebook capable of permission elevating to ChronOS level
- Ability to control sync
- Rudimentary knowledge of the chromeOS file system and Linux
- Crosh unblocked

Instructions:
1. Turn off sync for at least history (ideally everything) and encrypt with a password to prevent the sync of any data. 
2. To start the code, do set_cellular_ppp \';bash;exit;\' to give the permission to elevate to chronos. 
3. Type cd to change directories to main.
4. Next, run each of these commands and press enter:
chmod 777 History
rm -rf History
mkdir History
chmod 000 History 
chmod 777 History-journal
rm -rf History-journal
mkdir History-journal
chmod 000 History-journal

These commands make it so that a new 'dummy' directory is created, making it so chrome can no longer write any history to these fake directories so long as you don't powerwash.
Or, if you want to be quick about it, just do chmod 000 History;chmod 000 History-journal

Credits:
Fallenmoon8080
Titanium Network
