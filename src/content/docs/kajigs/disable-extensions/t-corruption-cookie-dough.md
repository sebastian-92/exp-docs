---
title: ext-corruption-cookie-dough
---

-e 
This bookmarklet employs a for loop to screw over websites with the power of browser cookies and the interesting design of ChromeOS. 
Being a rather old exploit it is unclear whether or not this still works with modern Securly. However, this bookmarklet DOES work with Hapara currently and possibly more. 
It was initially leaked back when Trusted was a thing and well also the state of it being patched pretty much created the fun inactivity within Licenced today. 
Fun Yoct experiment back when he was messing with blobs and attempting to just lag Chromebooks to death. (old, old, old, OLD)

In theory, however, this bookmarklet could apply for all extensions due to its corruption abilities after a powerwash.

Original (clears upon device signout):
javascript:for(let _=new Blob;;)document.cookie=URL.createObjectURL(_)+'='+URL.createObjectURL(_),URL.revokeObjectURL(_),Notification.requestPermission()

Long Term (effects do not clear after signout):
javascript:var _;for(_=0;_<2e3;_++){let _=new Blob;document.cookie=URL.createObjectURL(_)+'='+URL.createObjectURL(_)+';expires='+new Date(2147483647e3).toUTCString(),URL.revokeObjectURL(_),Notification.requestPermission()}

Extension Corruption:
This process was an interesting process that Divide worked on. Essentially if you run Cookie Dough, remove your user or sign out after a powerwash there was a chance extensions would never load. 
But this was difficult to recreate.

Instructions:
1) Create a bookmark and paste the above inside.
2) Click on the bookmarklet on either one of these sites:
https://highlights-messaging.teacherdashboard.com (Hapara)
https://securly.com, https://api.securly.com OR ANY BLOCK PAGE
https://hapara.com
https://teacherdashboard.appspot.com
https://haparaview.appspot.com
3) Test by checking if sites are unblocked. If not, alternate between logging out after running the above or the Original + Long term variants.
4) If you get any errors, then it's possible the above is patched for Securly still. To revert any changes, just clear your browsing/history data (or cookies manually).

[Alternative Route]
Here is a creative route which Yoct came up with ages ago for running bookmarklets using the Omnibox. In theory, it is much more hidden than a traditional bookmarklet.

Instructions:
1) Head to chrome://settings/searchEngines
2) Create a Search Engine by using the Add buttom
3) Paste the following values (you can change this!)
--
Search engine: examplescript
Shortcut: examplekeywordthatiwilltypeinanomnibox
URL with %s in place of query: Paste any of the scripts above here OR any bookmarklet
--
4) Type in "examplekeywordthatiwilltypeinanomnibox" in your URL address bar or parts of it. You will notice the epic behaviour of it being linked directly to the pasted bookmarklet to run on whatever site.

Some devices may experience difficulties processing for loops hence why some users may prefer the Original version of Cookie Dough as it tends to be the least laggy on super low end Chromebooks. (edited)
Only ~160 cookies will actually save to each website, but thousands will show up in seconds upon click. 
Some servers actually can't process much more than 50 cookies, so a person may receive some error messages after the page is refreshed. 

Credits:
QuiteAFancyEmerald
YoctDonalds
OlyB
