---
title: incognito-v128
---

-e 
https://s-pscripts.github.io/incognito-v128/

incognito-v128
v128 “incognito”.

Requirements:
-> Access to chrome://flags
-> Be on chromeOS v128

Notes before you begin
This is VERY buggy. I’m not sure how this exploit even works. It probably won’t work for you, but you should give it a go anyway.
Incognito captive portal
Getting set up:
Go to chrome://flags/#captive-portal-popup-window.
Enable it.
Restart.
If the flag didn’t reset, you can continue. Else you cannot.
Method A:
Go to Settings.
Click Wifi in the Network section.
Click your wifi.
Click Network.
Set Name servers to Custom name servers.
Set the boxes to 150.136.163.0.
A sign-in pop-up should appear from your wifi. Click Sign in.
Wait until the white screen goes. This may take a minute. A black background with red borders and yellow button should show.
Click the blue “Webview link for tests” text.
Set Name servers back to what it was before. You may also need to disconnect and reconnect to your wifi.
Wait until Google shows up. This may take a minute.
You have successfully completed this exploit.
Method B:
THIS WILL ONLY WORK IF YOU HAVE A CAPTIVE PORTAL WIFI THAT CAN GET TO GOOGLE. I AM USING EE WIFI IN THE UK.
Connect to EE Wifi.
A sign in pop up should appear from your Wifi. Click Sign in.
CTRL+T is pointless since it now opens a normal tab. You will need to follow the following instructions (and yes, this is the same as the ee-exploit).
Accept all cookies.
Click Buy Now. You can click any of them.
Change your Wifi back.
Click the EE icon at the top left of the page. You will be at EE’s hotspot home page.
Scroll to the bottom. You will see that you can go to the EE STORE. Click Shop now.
You will now be at the EE STORE home page. Accept all cookies.
Scroll to the bottom and click Privacy policy - this is under the Information header at the right.
Click “Please click here to view the BT Privacy Policy.”
You will now be at BT’s privacy policy page. Accept all cookies.
Click Contact BT at the bottom of the page - it’s at the bottom left.
At the bottom of this BT page, click the SMALL Youtube icon - it’s at the bottom right.
You are now on Youtube! You’re very close Click Accept all.
In Youtube’s sidebar, click Privacy.
Scroll to the bottom of Google’s privacy page.
Click the small Google text.
Click Accept Cookies on Google’s search page and you have successfully completed this exploit.
Method C:
Requirements:
-> Task manager and end process button unblocked.
-> The ability to change your DNS settings.

Go to chrome://flags.
Find the temporarily unexpire flag V126 and enable it. Once you’ve done that, restart.
Go back to chrome://flags and search for captive portal. Find the captive portal flag, enable it and restart again.
Use any DNS to get a captive portal. You can use the 150.136.163.0 DNS.
When you get to the captive portal page, go to task manager.
Find incognito tab.
Click it and click end process.
Go back to your wifi settings and change your DNS back.
Go back to the left open captive portal page which is dead because you killed it.
Click the blue Learn more button.
Go to privacy and policy.
Scroll all the way down until you find the Google thing on the bottom left.
Click that Google thing and you’re done.
Incognito ‘normal’ window
This probably won’t work for you
On the captive portal window, search for openallurls.
Go to openallurls.com
Put any link.
Click on Open all URLs, then click it again.
This will open the link as a tab in a normal window which isn’t incognito… but it will be unblocked anyway!
Cool facts/Notes:
Although the tab isn’t incognito, it will not show in history and like I said before it will be unblocked.
Reloading will not block it.
Going to other blocked pages on the same tab will not block.
Clicking on a blocked link that opens in a new tab on this tab will also unblock that blocked link.
Getting rid of the captive portal
Let’s say you don’t want to use the captive portal anymore to open each link. Here’s a quick bypass:

Open the link “openallurls.com” on openallurls.com on the captive portal.
You will have an openallurls.com tab, and like I mentioned earlier, if you go to a blocked link that opens in a new tab it will also be unblocked.
More notes:
You may notice that if you go to a website you are signed in normally (e.g. outlook) in openallurls.com, you will be signed out. It seems like the ‘normal’ tab in the window is some sort of hybrid between incognito and not incognito.
Credits
Credits in https://github.com/S-PScripts/incognito-v123
Credits to S-PScripts (me) for finding these new methods.
Credits to brandonprather4930 (Brandon Prather) for finding Method 3.