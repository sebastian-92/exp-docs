---
title: new-chrome-old-cros
---

-e 
With this exploit, you can run the newest versions of Google Chrome on older versions of ChromeOS!

Notes:
AS OF v119, YOU CAN ONLY DO #lacros-only. YOU CANNOT DO LACROS ALONGSIDE REGULAR.

If you want to stick to an older version of CrOS but get the latest browser version (get the latest security/feature updates), then you can use an OS flag called LaCrOS (Linux and ChromeOS.) 
This separates the ChromeOS system and the browser component, allowing for browser updates only.

Requirements:
-> A Chromebook which has access to #lacros flags.

Considerations:
-> If your Chromebook is enrolled and does not have access to #lacros flags, then you have to unenroll your Chromebook.

Instructions:
1. Go to chrome://flags.
2. Search for "#lacros" in the search field.
3. If your Chromebook has the ability, you should be able to see the option to enable Lacros. 
   You can either have the default browser alongside the Lacros browser, or you can toggle the #lacros-only flag to only have the Lacros browser.
 a) On older CrOS versions, you should probably install Lacros alongside the default browser because the feature most likely hasn't been developed that much yet, 
    but you can try completely replacing the Lacros browser.
 b) Keep in mind that not replacing the default browser makes it so that you have two Chrome icons in your app tray. One being the normal icon and Lacros being a yellow-ish icon. 
    Not good if you're trying to blend in with others.
4. Restart your Chromebook.
5. Profit.

Credits:
yappable
TitaniumNetwork