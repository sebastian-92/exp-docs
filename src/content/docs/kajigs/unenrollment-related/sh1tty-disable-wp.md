---
title: crsh1tty-disable-wp
---

-e 
CRSH1TTY - Disable WP

-> CRSH1TTY is no longer supported! After digging around in Chromium Code Search, it was found that the CR50 was far more rate limited than expected, 
and it just lies about it. This means that CRSH1TTY most likely will NOT work at all, and all hope is lost.

Notes:
-> This is Whelement's first exploit.
-> This public beta is just for testing, do not expect this to work!
-> CRSH1TTY is an experimental exploit created by the Whelement team that theoretically would allow you to disable WP on an enrolled device, utilizing a bruteforcer & RMA unlocks.

The exploit for the truly desperate:
Disable WP on CR50 devices without opening it, just requires a chromebook in devmode and a ton of time.

Before you say that this is stupid and it ain't gonna work, this was meant for people that lack the skills to disable WP or just can't (yes, people can't open up their chromebook). 
Also, if it's going to make your chromebook laggy just leave it on standby. It's better to bruteforce the code then just not do anything. 
The exploit is literally dubbed "CRSH1TTY - The exploit for the truly desperate", deal with it.

Instructions:
On a Chromebook with WP and WIFI ON run:
cd /home/chronos/user/Downloads && curl -Lk https://raw.githubusercontent.com/Whelement/CRSH1TTY-public-beta/main/crsh1ttyb3.sh -o ./crsh1ttyb3.sh && bash ./crsh1ttyb3.sh
in a root shell

Disclaimer:
There have been no available auth codes found.

Credits
crossystem - developing the bruteforcer, testing, pioneering the idea of using RMA unlocks, researching the CR50 and RMA unlock, creating Whelement, writes all of the comments
TheTechFrog / TheSpiritOfDark - building shims, implimenting the brute forcer into shims, also researching the CR50 and RMA unlock, maintaining the github, looking into alternate methods of CRSH1TTY
CoolObivion759 - testing, researching, creating Whale, Inc. (Whelement members are not associated with wh4le in any way, shape, or form)
Windows XP - The logo for CRSH1TTY
boeing 747 - emotional support and motivation

Credits:
https://github.com/Whelement/CRSH1TTY-public-beta