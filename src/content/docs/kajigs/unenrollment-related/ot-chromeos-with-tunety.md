---
title: root-chromeos-with-tunety
---

-e 
Gaining Root on ChromeOS Using Tunety

A new exploit is here, tunety uses marking a partition as corrupt to cause a kernel panic in a certain way to get a VT2 root shell. 
It requires lots of luck, so it can take up to 50 reboots in extremely rare cases.

The Guide:
1. Download tunety.bin and flash it to a USB or SD card using ChromeOS Recovery Utility, Fedora Writer, Etcher, Rufus, or another application. Any of them will work fine.
2. Sign in on your Chromebook.
3. Plug in the USB drive or SD card.
4. Wait to be rebooted into a root shell.

If this does not work for you, try at least 25 times before complaining. 
It involves multiple race conditions, and is very unstable. Once the exploit is ran though, the shell is there until you close it.

To prevent Google from finding the method used for this exploit, there will be no release on how to produce this file.

Credits:
Crystal
https://omada.cafe/contact/crystals/blog/article/2024/12/11/