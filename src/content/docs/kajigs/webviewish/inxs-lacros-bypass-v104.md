---
title: shinxs-lacros-bypass-v104
---

-e 
Notes:
-> THIS METHOD DISABLES ALL EXTENSIONS AND MAKES THEM UNABLE TO BE TURNED ON UNTIL THE SESSION IS ENDED.
-> YOU HAVE TO DOWNGRADE TO 104

Instructions:
1. Go to chrome://flags and enable the flag "ignore lacros-availability policy". Once you've done this, restart your chromebook.
-> Ignore this step if the flag "lacros support" isn't missing.
2. Go back to chrome://flags and enable the flags "lacros support" and "lacros as the primary browser". Once you've done this, restart your chromebook again. 
-> If a canary (yellow-coloured) chrome browser shows on your shelf, this exploit is working!
3. Go back to chrome://flags and enable the flag "lacros-only". Once you've done this, restart your chromebook again. 
-> If a normal chrome logo shows on your shelf, this exploit is still working!.
4. Open Chrome and type in anything. If It doesn't load and says: "ERR_MANDATORY_PROXY_CONFIGURATION_FAILED", move To Step 5.
5. Go back to chrome://flags and disable the flag "lacros-only". Once you've done this, restart your chromebook.
6. Open the normal Chrome app and check bookmarks. If umbrella Is disabled, then this exploit has worked!

Notes:
-> After you sign out And log back in, you have to do steps 3 to 5 again.

Credits:
soggy
Titanium Network
