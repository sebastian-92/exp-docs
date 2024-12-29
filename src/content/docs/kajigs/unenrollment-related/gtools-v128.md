---
title: rigtools-v128
---

-e 
Essentially, early 2024, Writable found a crbug that would allow you to gain code execution in the devtools://devtools (this does not mean debugger access, so you can't write other commands to devtools).

How to use RigTools (UPDATED):

Requirements:
-> A brain
-> A Chromebook on 128 or below
-> An internet connection
-> A blocking extension

Links:
-> devtools://devtools/bundled/devtools_app.html?experiments=true&ws=fprkr6-8080.csb.app
-> devtools://devtools/bundled/devtools_app.html?experiments=true&ws=rigtools.appleflyer.xyz:5506
-> devtools://devtools/bundled/devtools_app.html?experiments=true&wss=rig.ccsd.store
-> devtools://devtools/bundled/devtools_app.html?experiments=true&ws=sincereham222.cc:8080
-> devtools://devtools/bundled/devtools_app.html?experiments=true&ws=kdrdt4-8080.csb.app
-> devtools://devtools/bundled/devtools_app.html?experiments=true&wss=rwpk9g-8080.csb.app (updated UI)
Note: For links with the updated UI, only go to step 4 because the rest is self-explanatory. 
WARNING: Links may sometimes be down. If so, try a different one.

Instructions:
1. Open devtools://devtools/bundled/devtools_app.html
2. Open one of the links above in a new tab (if they are blocked, cry in a corner)
3. Double click the gray box found in the Network tab. 
4. Click the extension id button and paste in your blocking extension's id (it has to be installed by administrator and it has to have the ability to manage other extensions)
5. Click the fifth button (P5) to kill the current extension or click the third button (P3) and paste in the specific extension's id you want to kill.

Note: After using rigtools, the chrome.management page will always be located at filesystem:chrome-extension://ext-id/temporary/index.html. 
It is recommended to bookmark this page as it persists after shutdown and is only overwritten by using rigtools again.

Credits:
Writable (for FWSmasher): https://github.com/FWSmasher/rigtools
Guide by v0idk | average programmer (real)
https://rig.ccsd.store/