---
title: unblocked-dev-tools-flags
---

-e 
This is a guide on how to use chrome launch options.

Getting Started:
-> First of all, you will need some knowledge of bash, and you must know how to use vi.
-> This builds off of Permanently Remove Extensions (past v106).
-> Follow the instructions there, and stop once you have the bash shell.

Instructions:
1. Run cd ~/Downloads
2. Run vi exploit.sh to create a new shell file.
3. In this shell file, put the line pkill -9 chrome
4. After that, head over to chrome://version.
5. Next to "Command line:", copy the entire text.
6. Paste it into vi as a new line.

You can now add whatever launch options you want!
These are like the flags in chrome://flags, but there are way more available.

The full list is here: https://peter.sh/experiments/chromium-command-line-switches/
Some notable ones are: 
--force-devtools-available (devtools), 
--bwsi (guest mode), 
--kiosk (useless but funny), 
--oauth-client-id (breaks policy updating and profile syncing), 
--disable-extensions-except, 
--show-login-dev-overlay/--show-oobe-dev-overlay, 
--enable-hangout-services-extension-for-testing (adds a bunch of useless extensions),

To execute chrome with the launch options set, exit vi (impossible) and run sh <(cat exploit.sh) & disown

Credits:
https://github.com/titaniumnetwork-dev/Oxide-Docs/blob/master/docs/kajigs.mdx
CoolElectronics/velzie
Titanium Network
