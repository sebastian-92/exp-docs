---
title: unblock-crosh-kiosk-apps
---

-e 
With this exploit, you might be able to use Crosh if it's blocked.

Instructions:
1. Sign out of your Chromebook and turn off wifi.
2. Sign in to a kiosk app. It should work with all of them, but this hasn't been tested fully.
3. When it comes to the Connect to wifi to continue screen, there should be a button in the top left that says < back.
4. Click the back button.
5. You should be at the sign-in screen without the apps button.
6. Sign in to your school account.
7. When you log in, you should (depending on your school's policy) see a browser in the background and a prompt that says Administrator has disabled multiple sign-ins. It should say to sign out.
8. Press Esc to bypass the prompt.
9. Scroll your mouse down to where it should pull up the taskbar, if it doesn't pull up, then you are good.
10. Navigate to the Omnibox of the browser, type Chrome-untrusted://crosh and press enter.
11. You should be in Crosh. If you are on a version with the set_cellular_ppp eval bug, you can use this to delete extensions and such. If you are in dev mode, you can use this to apply pollen from local storage.
Be aware that no online features will work, and killing the Chrome process via top will put you back into the kiosk app. Feel free to experiment with what else you can do in this limbo signed-in state!

Credits:
fallenmoon8080 | Titanium Network