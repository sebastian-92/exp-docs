---
title: extension-inactivity
---

-e 
Extensions become inactive...

Instructions:
1. Turn on developer mode (https://github.com/S-PScripts/chromebook-utilities/blob/main/Exploits/Developer%20Mode).
2. Add your wifi and sign in to your account.
3. Quickly turn off your wifi before extensions load.
4. Go to chrome://settings/signOut and click the blue button.
5. Turn your wifi back on and turn off sync and personalisation.
6. Extensions will no longer work. Log in with https://tinyurl.com/addsession to go to google websites but with no sync.

Workaround A:
1. Go to chrome://settings/resetProfileSettings.
2. Click Current Settings.
3. On the blank page (probably) run this code: javascript:opener.chrome.send("TurnOffSync");

Workaround B:
1. Go to chrome://settings/syncSetup/advanced.
2. Set the mode to "Customize Sync".
3. Turn sync off for extensions and apps.

Notes:
Do this at home so you don't get the popup about having to connect to the school wifi (or the long wait for dev mode to setup).
Do SIPE (after CAUB) or NPPE to find your wifi password (preferably before turning dev mode on).

Credits:
https://github.com/Brandon421-ops/Exploits-And-Hacks 
