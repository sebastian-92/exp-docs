---
title: lightspeed-stealth
---

-e 
This only works with Lightspeed!

This trick is specifically for when your chromebook is "locked" by a teacher - this is when any site you go to gets closed instantly. 
This trick can also hide the tab from the teachers and get around the "[teacher's name] has blocked this site" screen.

The way it works is by letting you put an iframe inside of the new tab window - this is where most chrome extensions don't have permission. 
This means that if a page is "temporarily blocked" by a teacher or they lock your chromebook, you can still access almost every page that works in an iframe. 
It's unknown what it shows up as on the teacher screen, but they likely will just see the new tab and not the actual site.

Instructions:
1. Set your default search engine to bing
2. Open a new tab
3. Create a bookmarklet with this URL:
javascript:document.write(`<style> iframe{margin:0px; border:none; padding:0px; outline:none} body{margin:0px}</style><iframe src = "${prompt("enter url")}" width = ${window.innerWidth} height = ${window.innerHeight} />`)
4. Click on the bookmarklet you made.
5. Enter a url that you want to visit.

Notes:
-> This only works if bookmarklets are enabled (patched on later versions of chromeOS).

Credits:
https://github.com/titaniumnetwork-dev/Oxide-Docs/blob/master/docs/kajigs.mdx
velzie/CoolElectronics
Titanium Network