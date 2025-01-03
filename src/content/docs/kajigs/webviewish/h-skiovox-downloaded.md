---
title: ash-skiovox-downloaded
---

-e 
ASH (Skiovox Downloaded):

Requirements:
-> ChromeOS v119-120 (v121 may not work)
-> USB Drive
-> Kiosk App

Instructions:
1. Hold the power button and either sign out or continue to hold it.
2. Once signed out, click on the bottom right panel and turn off your wifi.
3. Click the Apps panel at the bottom left and go to any kiosk app. (80% chance of working.) 
4. When you click the kiosk app, press shift + alt + s.
5. After the kiosk app fails to boot, a panel should open now that you pressed the shortcut.
6. Within the panel, press the ? in the top. After pressing it, you'll want to sign in as an existing user.
7. After you put in your credentials, you may see: This administrator has disabled multiple sign-ins for this device. Ignore it by pressing ESC.
8. After pressing esc you should see your regular school chrome account. X out of the window and there should be one behind it.
9. After you're on this window, you're going to want to go to chrome://settings and go to the on startup. 
10. Select Open a specific page or set of pages and type in these urls: chrome://os-settings, chrome://file-manager
11. Restart your Chromebook by holding the power button and select Sign out all. 
12. Repeat steps 2-8. After you do this, close out of the default school account window.
13. You should now see the os settings and you should now be able to toggle the wifi back online.

Enabling Skiovox:
1. Go to skiovox-helper (https://github.com/bypassiwastaken/skiovox-helper)
2. Download the current version files and move them into a USB drive. After doing so, follow steps 2-8 again.
3. After youu're own the non-school account, go to the chrome://file-manager tab and right click (alt + click) on the zip file. 
4. Click on extract. It will now create a folder called whatever you named it. Drag it into the Downloads folder.
5. Go to the three dots in the top right corner of the window (where the x is) and click on New window.
6. Type in chrome://extensions and enable Developer mode. Click Load Unpacked. 
7. Go into the folder in Downloads and there should be another folder within that one. Select it but don't go into it. Click open.
8. After changing your shortcut, open a new tab and hit accept as Chrome will alert you about it being the new tab page.

Notes:
Make sure to always open a new window (three dots), as this will allow you to upload files to things (Discord etc).

Hotswapping (Swapping private & school account):
1. Go to Pixlr (https://pixlr.com/editor/)
2. Click on Create new and change the name to whatever you want.
3. Once the editor boots up, run ctrl + s then click on save as.
4. Name the file whatever but remove the .png at the end.
5. Open a new tab, go to files, and double click on the file. It will open your school account now.

Notes:
To swap back, delete the school account window.

Known issues:
-> Skiovox deleting itself from extensions (manifest).
To fix this problem, delete the current Skiovox file from your downloads, pull the Skiovox file from the USB drive back into the downloads and link it again.
-> ESC not working to bypass the message in Step 7. There is no fix for this currently.

You're finished! You now have Skiovox downloaded on this Kiosk app. Also, this can work with any Kiosk app now that you have Skiovox downloaded onto a USB drive.

Credits:
https://github.com/Brandon421-ops/Exploits-And-Hacks
