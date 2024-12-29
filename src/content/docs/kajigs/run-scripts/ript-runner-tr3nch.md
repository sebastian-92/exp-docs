---
title: script-runner-tr3nch
---

-e 
Tr3nch - run scripts in Chrome pages with SKIOVOX Breakout and Sh0vel!
Sh0vel is necessary for Tr3nch to perform most of its functions.

Finding Sh0vel - Instructions:

Check installed extensions:
1. Navigate to chrome://extensions.
2. Check if any installed extensions contain the "Read your browsing history" permission.
   -> Find an extension to check.
   -> Click Details in the extension card.

If necessary extensions are not installed:
1. Navigate to the Chrome Web Store. (https://chromewebstore.google.com/)
2. Find an extension that contains the "Read your browsing history" permission.
3. Navigate to the extension's Chrome Web Store details page.
4. Click Add to Chrome.

Get the extension ID:
1. Navigate to chrome://extensions.
2. Open the details page of the extension you installed.
3. Copy the 32-character extension ID from the address bar after ?id=.

1. Navigate to the manifest page of the extension you installed. (chrome-extension://extension_id_here/manifest.json)
2. Check if one of the following text occurrences (no quotes!) are present in the manifest file.
- "activeTab"
- "unsafe-eval" (NOT wasm-unsafe-eval, that WILL NOT WORK!)
- "browser_action" or "browserAction"
You can press Ctrl + F and enter one of the strings provided in this step to check.
3. If all of the previously listed text occurrences are present in the manifest file, that's great! 
The extension you're checking is vulnerable to Sh0vel! Use this extension when continuing with the guide.

Performing the Exploit - Instructions:
1. Enter a kiosk profile with SKIOVOX performed.
2. Navigate to the SKIOVOX Breakout GitHub repository. (https://github.com/MunyDev/skiovox-breakout)
3. Click the Code button.
4. Click Download ZIP.
5. If a download prompt opens, save the file to the Downloads folder.
6. Navigate to chrome://extensions.
7. Flip and enable the Developer Mode switch on the extensions page.
8. Click Load unpacked. An upload prompt should open.
9. When the upload prompt opens, right click the downloaded ZIP file.
10. Select Extract all.
11. In the extracted folder > skiovox-breakout-main, click Open in the bottom right of the prompt.
12. Navigate to chrome-untrusted://crosh.
13. Run vmc create-extra-disk --size=1 /home/chronos/user/MyFiles/Downloads/opener.txt. It should return "A raw disk is created at /home/chronos/user/MyFiles/Downloads/opener.txt."
14. Open a new tab.
15. If the default New Tab page loads, install the SKIOVOX Helper extension in a new tab before proceeding.
16. Click the folder  icon in the bottom right. The file manager should open.
17. In the file manager, navigate to Downloads.
18. Open the opener.txt file. A new window should open with a blank page tab. This window is managed by your organization.
19. Open a new tab.
20. Close the blank page tab.
21. Navigate to chrome://extensions.
22. Open the details page of the extension you previously chose to install in your managed profile.
23. Copy the extension ID as done previously.
24. Return to the regular window that is not managed by your organization.
25. Click the extensions extension icon in the toolbar.
26. Click and activate the Skiovox Breakout extension.
27. In the input field for the extension ID, enter the ID of the extension you previously chose to install in your managed profile.
28. Set the textarea text to the script you want to run.
29. Click Start injection.

Loading the Tr3nch Menu - Instructions:
You should load Tr3nch into an extension before proceeding.

1. Navigate to chrome://flags.
2. Locate and enable the extensions-on-chrome-urls flag.
3. Click Restart.
4. After the restart, navigate to chrome://os-settings, chrome://setttings, chrome://extensions, chrome://chrome-signin, chrome://inspect, chrome://file-manager, chrome://network, or chrome://oobe.
5. Click the extensions extension icon in the toolbar.
6. Click and activate the extension with the injected script. The Tr3nch menu should launch.

Credits:
Zeglol1234	Main developer
Writable	SKIOVOX Breakout implementations
Bypassi	Add Gmails exploit
NotBoeing747	Misc development & testing
Kxtz	Misc development & testing
Archimax	GUI inspiration
Kelsea	Logo
Katie	Testing

Links:
https://whelement.github.io/tr3nch.html
https://whelement.me/tr3nch
https://discord.com/channels/419123358698045453/1237166678685782087
https://raw.githubusercontent.com/Whelement/Tr3nch/main/tr3nch.js
https://chrose.netlify.app/detail/tr3nch/ - AshtonDavies