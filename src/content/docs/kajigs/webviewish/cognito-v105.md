---
title: incognito-v105
---

-e 
This utilises a mistake introduced in Chrome OS 105, allowing users to bypass filters and browse in Incognito mode by opening a window from the obscure captive portal window.
History is not recorded in Incognito mode. It is recommended to disconnect from the DNS for better browsing when the Incognito window is open.

This exploit has been patched for some time but it works on older versions.

IP addresses:
150.136.163.0 - CURRENT VERSION
158.101.114.159
129.213.58.41

52.207.185.90 
158.111.114.159

Steps:
1. Go to settings.
2. Click on the wifi name you are using and click it again.
3. Go to the 'Network' section and click it.
4. Scroll down until you find the 'Name servers' section.
5. Change the option to 'Custom Name Servers'.
6. Paste in 150.136.163.0 for the boxes.
7. There should be a notification saying 'Open a new tab'. Click that and now you should be in a small window.
8. As the window says, click the Browse Incognito button.
9. Go back to the network settings and change the custom name servers back to automatic name servers.

Notes:
If you close out of the Incognito Tab, you have to do all the steps again.
If the popup doesn't show, try again.

Sign-in screen version (Webview):
1. Make sure you are using a wifi with custom DNS capabilities.
2. Sign out of your Chromebook if you haven't already.
3. On the sign-in screen, click the settings button located at the top right of the WiFi panel.
4. Go to Name servers and set it to Custom name servers.
5. Set the IP server to 150.136.163.0 on at least one of the boxes. If it doesn't automatically save your modifications, disconnect and reconnect 1-3 times.

You can now do one of the following methods:
6. You will see a link in the normal district login window that says Visit this network's sign-in page.
7. Once you see the sign-in page with a black background, click on the link Webview link for tests.
8. You should now have an unblocked Google search page.

Notes:
-> The browser window will disappear after roughly one minute.

6. If it shows a Network not available page, click Sign in as an existing user and then the Back button until it shows your login page.
7. Under your login page, there should be a Sign in with Google account button. Click it, and then click "Forgot email?".
8. It should now show a 400 error page. On the page, there should be a clickable Google logo. Click it.
9. You should now have an unblocked Google search page.

Notes:
-> This isn't a browser, so you can't go back once you're on a page. The back button doesn't do much.

Credits:
NotGamerFromGamerTown#8823
SpaceSaver2000 (hosting)
Quartinal - https://github.com/Quartinal/ - Baghdad | SWAB
Brandon421-ops - https://github.com/Brandon421-ops/