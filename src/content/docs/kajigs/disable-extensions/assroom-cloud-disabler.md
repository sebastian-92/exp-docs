---
title: classroom-cloud-disabler
---

-e 
PATCHED MORE INFORMATION IN REPO
https://github.com/S-PScripts/classroom.cloud-exploit/

This exploit is for people that have the classroom.cloud extension. This was found by one of my friends.

Instructions:
1. During school, go to the Settings app.
2. Go to the "System preferences" section.
3. In the Date and Time section, click "Time Zone".
4. Change the option from "Set automatically" to "Choose from list".
5. Choose a time zone that would be a time that's not school hours. (choose the early times or late times compared to your time)

How this works:
-> During school hours, the extension will show as "Available".
-> When you are not in school hours, the extension will show as "Out of hours".
-> When "Out of hours", teachers are unable to use the extension to do anything to your Chromebook (such as viewing it or locking it).
-> Since this extension uses your device's clock, changing the time zone can change the status of the extension.

Note: This most likely works with the NetSupport extension too, considering that they're both by the same developers (NetSupport) and have most of the same features.

Externals:
https://chromewebstore.google.com/detail/classroomcloud-student/mpkdoimpgkhjcicmhmlmgboelebflpla
https://chromewebstore.google.com/detail/netsupport-school-student/gcjpefhffmcgplgklffgbebganmhffje?hl=en

Credits:
S-PScripts | https://github.com/S-PScripts
(not really me but I did the writeup for it)