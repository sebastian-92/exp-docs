---
title: ltbeef-service-workers-jpcmg
---

-e 
This is LTBEEF with service workers - JPCMG!

Requirements:
-> Access to chrome://serviceworker-internals
-> Inspect element enabled
   If you don't have inspect element, do DPS at https://github.com/S-PScripts/chromebook-utilities/blob/main/Exploits/DPS%20(Disable%20Extensions)

Instructions:
1. Go to chrome://serviceworker-internals.
2. Find your extension. Some extensions will not work with this exploit and some may not show in the list.
3. Hit the start button then the Inspect button.
4. Execute this line of code: chrome.management.setEnabled('<extension id here>',false)
5. All pages shouldn't be blocked now!

To undo: run chrome.management.setEnabled('<extension id here>',true)

Credits:
Nyaann#3881
https://github.com/3kh0/ext-remover
