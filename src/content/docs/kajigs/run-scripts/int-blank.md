---
title: point-blank
---

-e 
Run bookmarklets on privileged pages with point-blank!
Bookmarklets must not be blocked by policy to perform this exploit.

Instructions:
1. Go to chrome://settings/resetProfileSettings.
2. Click current settings.
3. Run this as a bookmarklet: javascript:opener.alert()
4. You are now running code on the chrome://settings tab with only a bookmarklet!

Credits:
https://blog.bypassi.com/_/point-blank/
