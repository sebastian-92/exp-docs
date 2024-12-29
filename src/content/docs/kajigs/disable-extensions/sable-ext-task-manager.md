---
title: disable-ext-task-manager
---

-e 
Stop extensions from working with Task Manager!

Instructions:
1. Open Task Manager.
2. Press 'search' + 'esc'.
3. Scroll to the bottom and find your blocker extension and highlight it (click on it)
4. Click 'End Process' or press 'enter'.
5. Immediately go to your page and see that it's unblocked.
6. This will not last unless you use one of these bookmarklets: 
javascript:onbeforeunload=i=>1
javascript: onbeforeunload = (i) => 1;

Method 2: This method is for people who have Task Manager blocked.
1. Go to chrome-extension:// + your Extension ID + /_generated_background_page.html
-> You can find the Extension ID by doing the following:
--> Go to chrome://extensions/
--> Find your extension and click Details.
--> Copy the id in the URL.
-> For example, GoGuardian's would look like this: chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/_generated_background_page.html

2. Change the URL to chrome://kill.
-> You can also make chrome://kill a bookmark and click it.

Notes:
-> chrome://kill DOES NOT work on newer versions of chromeOS due to LTMEAT (another chromeOS exploit that could disable extensions) utilising it.
--> This means that Method 2 does not work on these new versions.

Credits:
https://github.com/titaniumnetwork-dev/Oxide-Docs/blob/master/docs/kajigs.mdx
TheGreatestGiant
Titanium Network