---
title: hapara-portable-searching
---

-e 
This allows you to access a given site within other tabs. This bypasses Hapara!
You need to have the ability to use javascript in bookmarklets (this was patched in newer versions of ChromeOS).

Instructions: 
1. Create a bookmark.
2. Copy the provided code (bookmarklet) below after doing the following below:
- In order to use this exploit, you must supply your own proxy website link in the bookmarklet.
- You put the link that you want to unblock inside "WEBSITE HERE". You have to include https://
3. Paste the bookmarklet (code) in as the URL.
4. Name it whatever you want and click Save.

javascript:((function(){
var a,b,c;c="WEBSITE HERE",
b=document.createElement("iframe"),
b.setAttribute("src",c),b.setAttribute("id","rusic-modal"),
b.setAttribute("style","position: fixed; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999999999; background-color: #fff;"),
a=document.getElementsByTagName("body")[0],
a.appendChild(b)})).call(this)

To close the exploit, create another bookmark with this code:
javascript: var element = document.getElementById("rusic-modal"); element.parentNode.removeChild(element);

Credits:
https://github.com/titaniumnetwork-dev/Oxide-Docs/blob/master/docs/kajigs.mdx
Titanium Network
