---
title: locked-mode-bypass-v4pl
---

-e 
This is a Google Forms Locked Mode Bypass!

Before you start...
-> This is for educational purposes only. Only use this on forms that you own!

How does this work?
-> So, you want to know how the genie does his tricks, eh?  Well, I'll tell you...
-> G o o g l e   i s   d u m b
-> They forgot to add any checks to make sure locked mode is actually enabled 💀
-> All that happens when you open a locked Google Form is that it submits a form via POST request that responds with the test 
(which would usually be locked, but we skipped the part where it tells Chrome to lock itself).
-> The token sent with the POST request can easily be scrapped from the form login page.

What potential is there for issues by using this?
-> Every time you make the POST request after the first time, Google emails the owner of the form.
-> The form object on the page gets deleted when the "visibilitychanged" event is fired.
--> The "visibilitychanged" event is only fired by complete obfuscation, not partial or loss of focus.
-> You're screwed if you don't follow the directions.

Anyways, if you want to try this exploit, here's the tutorial:
https://tinyurl.com/LockedModeBypass2023c
(If TinyURL is blocked for you, go here: https://docs.google.com/spreadsheets/d/1kjsAdLZx20vcGVxvRW_ycq46hn23v3M1aimuWUC7abc/copy?usp=sharing)

Credits:
V4PL | https://github.com/v4pl