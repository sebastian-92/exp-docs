---
title: goguardian-ublock
---

-e 
GoGuardian gets blocked by uBlock!

Requirements:
-> Being able to install uBlock Origin - not being blocked by policy
-> GoGuardian having a whitelist
-> uBlock's install page being one of the pages whitelisted (so you can actually install it)

Instructions:
1. Install uBlock Origin at https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm.
2. Go to uBlock's settings.
3. Go to the My filters tab (chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html#1p-filters.html). 
4. Type into the box "https://blocked.goguardian.com/" and "https://student.goguardian.com/teacher/blocked.html".
5. Apply the changes.
6. Go to any page that isn't on the whitelist. (Mash your keyboard and try going to that link)
7. GoGuardian and uBlock will keep redirecting until GoGuardian starts to fail. You can increase how long this effect lasts by duplicating the tab that is having a seizure.

Notes:
If you cannot install uBlock, try using other extensions like AdBlock Plus.
You could try this with redirector extensions by redirecting back to a blocked page, although it might not work

Credits:
https://github.com/Brandon421-ops/Exploits-And-Hacks/