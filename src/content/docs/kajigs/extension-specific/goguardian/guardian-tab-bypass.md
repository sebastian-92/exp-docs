---
title: goguardian-tab-bypass
---

-e 
Bypass GoGuardian's tab limit!

Notes:
Teachers can still see your screen, but they can't block or close any of your tabs.
YOUR TEACHER NEEDS TO HAVE SET A TAB LIMIT. TRY OPENING TONS OF TABS TO CONVINCE THEM TO ENABLE TAB LIMITS.

Instructions:
1. Create a bookmark named anything with this code: javascript: window.onbeforeunload = ()=>{return false;}
2. Hold down CTRL and then SPAM CLICK the bookmark until you're well above the tab limit, opening a bunch of about:blank pages.
3. It might ask if you want to leave this page, this is GoGuardian trying to close it.
4. Say No and click Prevent from creating additional dialogues.
5. Enjoy your unblocked stay!

How to undo:
Close all of your about:blank tabs!

If the method above doesn't work, try this:
1. Create a bunch of tabs until you reach the tab limit.
2. Drag a tab that uses the onbeforeunload handler.
3. After that, duplicate the new tab next to it
4. Click No when a prompt comes up.
5. Profit.

Credits: 
https://github.com/py660 | py660
https://github.com/3kh0/ext-remover