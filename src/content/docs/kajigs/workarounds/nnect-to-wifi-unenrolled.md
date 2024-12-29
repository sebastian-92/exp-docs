---
title: connect-to-wifi-unenrolled
---

-e 
If you can't connect to your school's wifi because they strictly block nonschool devices, try this!

Requirements:
-> Knowledge on how to use Linux

Instructions:
1. Unenroll your chromebook and install Linux on your school Chromebook (or enable dev mode if it isn't blocked while enrolled to do so)
-> You can also boot a live installer from usb and install Linux onto that (you might want to shrink the installer partitions so that you have unallocated space))
2. Once your chosen Linux distro is installed, follow these directions: https://github.com/lakinduakash/linux-wifi-hotspot#installation
3. Once it's installed, open up the application. 
-> It's recommended to change the SSID and set a password, while making sure it isn't an open network. 
-> If you click the advanced dropdown and make it hidden, make sure to assign a channel. Also, make sure nobody sees your password, as it isn't hidden with any *s 
   (unless you are going to share it, which is not recommended but you can share it if you want to).
4. Finally, connect to it.

issues with this exploit:

Allocating problem -
If your device can't allocate any IPs, enter the below commands into the terminal, as firewalld (firewall daemon) is blocking the hotspot thing from working:
sudo firewall-cmd --permanent --zone=public --add-port=67/udp
sudo firewall-cmd --reload

Mac address filtering not saving and also crashing:
Doesn't work for some reason, it's unclear why

Credits:
Titanium Network