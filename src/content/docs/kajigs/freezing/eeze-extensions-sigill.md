---
title: freeze-extensions-sigill
---

-e 
Sigill - a extension hanger exploit (works on v129)

Instructions:
1. Download the files:
https://www.mediafire.com/file/fln69sy8cedwnv2/index.html/file  
https://www.mediafire.com/file/225dj6xp4orcm08/emoji/file 
2. Insert the emoji file into the html file.
3. Click copy to clipboard.
4. Click on the extension you want to disable.
5. In a input/text field, do CTRL+V and after a second, do it again.
6. Immediately after, open a page related to the extension and keep it open to continue the exploit (like the manifest.json).
7. If you did it correctly, every page related to it should just hang and not load forever.

Notes: 
-> This only works on extensions that can be clicked on and have a place where you can input text. The page you're on has to also not be sand-boxed.
-> If you want to turn the extension back on, just remove the tab that is trying to load or go to the extension page, scroll down and switch "Allow access to file urls" on and then back off. 
-> If you don't succeed the first time, try pasting it a different amount of times (like 1-4 times), re-reading the instructions or just tinkering around with it until it works.

(Exploit is subject to change and should work across operating systems and even alternative versions of chrome/chromium. DM Ashtino if you have ways to make this exploit better.)

Credits:
Ashtino (AshtonDavies)
Hack Hive