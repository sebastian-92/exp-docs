---
title: caub-chrome-auto-update-blocker
---

-e 
CAUB - chrome automatic update blocker
Notice: Only works on Chrome v85 or higher

I recommend using https://github.com/S-PScripts/chromebook-utilities/blob/main/Exploits/Chrome%20Auto%20Update%20Blocker%202 instead.

This exploit will help you keep your chromebook downgraded (or on the current version) without automatic updates screwing you over using onc files.
You can convince your chromebook that the wifi that you're connected to is pay-to-use (like a hotspot using data), and thus it will not check for updates.
This may not work on all wifis.

Instructions:
1. Go to chrome://network#state.
2. Scroll to the bottom of the page.
3. You should see a list of "favorite" wifis that you've connected to in the past - click the + sign next to the wifi name of each network that you commonly connect your chromebook to.
The more wifis you expand, the better, but note that they have to come from the "favorites" section.
4. Use ctrl+a and ctrl+c to copy all the text on the entire page.
5. Go to https://c-a-u-b.glitch.me
6. Paste the copied text into the textbox.
7. Press the "generate and download onc file" button below the textbox.
8. Once you have downloaded the file, go to chrome://network.
9. Click on the "import onc" button.
10. Import the newly downloaded file.
11. Your chromebook will no longer automatically update (as long as you are on a wifi that you used CAUB on).
Be careful not to stay on a wifi for too long without using CAUB on it.

Credits: Catakang#0987, Bypassi

If it doesn't work, use this version (Bypassi):
https://c-a-u-b.glitch.me/old.html

Changes:
Instead of copying all of the text on the page, you have to click the plus button for each wifi you want to CAUB and copy the data within that wifi.
On the CAUB website, click the + button to add a box to put another wifi's data in. You can click the minus button to remove the last box you added if you clicked the + button by mistake.

Notes:
You can use CAUB to find your school wifi's password!

ALTERNATE LINKS:
https://minies.pages.dev/caub/ (Bypassi)
https://minies.pages.dev/caub/old (Bypassi)

Credits to AshtonDavies for these ones:
https://caub.vercel.app
https://caub.netlify.app 
https://caub.pages.dev/
https://caub.onrender.com/ (unofficial)