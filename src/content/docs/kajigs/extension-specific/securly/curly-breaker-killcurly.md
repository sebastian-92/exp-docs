---
title: securly-breaker-killcurly
---

-e 
Break Securly with Killcurly! (v107+)

ORIGINAL: This doesn't work on chromeOS v112 and beyond.
1. Go to chrome://settings/signOut.
2. Click the blue button.
3. Do one of the following to restart Securly:
  a. Go to chrome://restart.
  b. Go to a Securly extension page such as chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/logo.svg, 
     then type chrome://kill or chrome://crash in Chrome's URL bar and press enter.
  c. Go to chrome://extensions and go to Securly's details, then click "Allow access to File URLs".
  d. Use task manager (Search+Esc) and kill Securly.
4. Go to tinyurl.com/addsession and add your school account back.

Workaround A: Works on and after chromeOS v112
1. Go to chrome://settings/resetProfileSettings.
2. Click Current Settings.
3. On the blank page (probably) run this code: javascript:opener.chrome.send("TurnOffSync");
4. Do chrome://restart.

Workaround B:
1. Go to chrome://settings/syncSetup/advanced.
2. Set the mode to "Customize Sync".
3. Turn sync off for extensions and apps.

How to undo:
Just do CTRL + SHIFT + Q twice to sign out or click the sign out button to do so.

Credits: Bypassi - https://blog.bypassi.com/_/killcurly/
If this doesn't work then try using the extension inactivity version.