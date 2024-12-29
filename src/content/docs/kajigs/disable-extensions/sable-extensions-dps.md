---
title: disable-extensions-dps
---

-e 
DPS is an exploit that disables extensions that use service workers similar to JPCMG except inspect element is disabled.

Requirements:
-> Access to chrome://serviceworker-internals
-> Inspect element disabled
   If you have inspect element, do JPCMG at https://github.com/S-PScripts/chromebook-utilities/blob/main/Exploits/LTBEEF%20Service%20Workers%20(JPCMG)

Instructions:
1. Go to chrome://serviceworker-internals.
2. Click the checkbox that says 'Open DevTools and pause JavaScript execution on Service Worker startup for debugging'.
3. Find the extension you want to disable.
4. Click stop (if stop does not appear, skip this step).
5. Click unregister.

The specifics:
-> Inspect element needs to be disabled, otherwise it would open a bunch of devtools pages that would get in the way.
-> This will cause some website not to function properly. UV proxies will not work as long as this exploit is activated. To re-enable the extension, click the checkbox mentioned in step 2.
-> Works on Blockfiletypes, LanSchool, and probably several others.

Credits:
theskid22
Titanium Network