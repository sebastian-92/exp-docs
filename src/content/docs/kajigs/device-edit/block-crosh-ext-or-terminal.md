---
title: unblock-crosh-ext-or-terminal
---

-e 
Unblock Crosh with Daybreak!

Method 1:
1) Download this extension: https://chrome.google.com/webstore/detail/secure-shell-dev/algkcnfjnajfhgimadimbjhmpaeohhln (or any other SSH extension)
2) Type anything in the username box
3) Type >crosh in the hostname box
4) Press ENTER.
5) You should now have a Crosh window open.

Method 2: 
1) Open the Terminal app and make a new SSH profile.
2) Type in ssh a@>crosh.
3) Save the profile.
4) Right-click your terminal app and click on the SSH profile you made.
5) Enjoy your Crosh window.

If either of these methods don't work, you can try downgrading to any version below v91.

Notes:
- It's not actually SSH, it just makes a Crosh instance using chrome.terminalPrivate.
- With the extension installed (the dev one linked is the better one, though the non-dev one works too), visit chrome-extension://algkcnfjnajfhgimadimbjhmpaeohhln/html/crosh.html
- The non-dev url is chrome-extension://iodihamcpbpeioajjeobimgagajmlibd/html/crosh.html
- Source: https://chromium.googlesource.com/apps/libapps/+/HEAD/nassh

Credits:
Kaitlin
OlyB
Titanium Network
