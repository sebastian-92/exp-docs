---
title: history-flooder
---

-e 
Patched in new versions of ChromeOS - javascript was patched in bookmarks.

Instructions:
1. Copy the code below.
2. Make a bookmark.
3. The url is the code, name can be anything.
4. Go to a page.
5. Click the bookmark.
6. Put the amount of times you want the page to show up. (TOO MUCH CRASHES CHROME!)
7. That's it!

javascript:var num=prompt("How many times do you want this page to show up in your history?");done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("Flooding successful!
 "+window.location.href+" 
is now in your history "+num+(num==1?" time.":" Times. "))}
Fact: The history on your chromebook stays there for about 3 months. Watch out!

Made By BlazerHM
