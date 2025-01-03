---
title: skiovox-v118
---

-e 
Skiovox (v118):

Notes:
A compatible kiosk application is required to perform this exploit.
Kiosk applications have their own profiles. This exploit uses a kiosk profile for Chrome browsing. Extensions can be installed from the Chrome Web Store or with Skebstore.
You can view the abandoned legacy writeup for information on this exploit.
Your Chromebook must be properly connected to a Wi-Fi network before you begin.

Instructions:
1. On the sign-in screen, disconnect from your network.
2. If usernames and photos are shown on the sign-in screen, enter your password, but do not press ENTER. Otherwise, skip this step.
3. Launch one of your organization's kiosk applications. These can be found in the apps menu. Some might not work with this exploit.
4. Immediately press Alt + Shift + S. A toolbar should appear.
5. Wait for a Network Unavailable screen to appear.
6. In the toolbar, open the Accessibility menu.
7. Click the question mark (?) button. A network error page should appear.

If a back button is available:
1. Click Add other Wi-Fi network.
2. Immediately press Esc twice. The sign-in screen should appear with your password still entered.
3. Press Enter to sign in. This should be done within 4 seconds of clicking Add other Wi-Fi network.
4. If a Multiple sign-in has been disabled message appears, press Esc to bypass it.
5. If there is a window registered to your oranization's profile, close it. There should be a clean window behind it.
6. Open a new window from the current window. The new window should be less bugged.

If a back button is not available:
1. Click the Diagnose button. A diagnostics window should open invisibly.
2. Click Add other Wi-Fi network and wait for the diagnostics screen to appear. This step may be inconsistent. You may need to try it a few times or with other apps until it works or follow the other method for users without a back button.
3. Expand the Wi-Fi dropdown.
4. Click Open in Settings. A settings window should open.
5. Close the settings window. A browsing window should become focused.

If a back button is not available (ChromeVox Method):
1. Click Add other Wi-Fi network.
2. Wait until the kiosk app loads.
3. Press Ctrl + Alt + Z to enable ChromeVox text-to-speech. A sound may play when this shortcut is used.
4. While holding Search, press O, then press T.
5. Select Resources. Three links should appear.
6. Click any of the three links shown. A Chrome window should open.
7. Press Ctrl + Alt + Z to disable ChromeVox text-to-speech.

Once you've done the instructions, use Skiovox Helper!

Credits:
https://github.com/aka-but-nice | AkaButNice 
https://github.com/bypassiwastaken/ | Bypassi#7037
https://chrose.netlify.app/detail/skiovox/ | AshtonDavies | https://github.com/AshtonDavies
