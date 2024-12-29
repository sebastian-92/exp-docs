---
title: incognito-v123-v127
---

-e 
https://s-pscripts.github.io/incognito-v123/

incognito-v123
The incognito exploit is back on v123!

History:
-> This was found by https://github.com/s0urce-c0de from https://crbug.com/341245382.
-> https://github.com/s0urce-c0de wrote a writeup on it on 3kh0’s repo but it didn’t contain all the information.
-> I (https://github.com/S-PScripts) created a new writeup.

-> Option 1 is now on Titanium Network’s Oxide Docs! (without credit…)
-> I didn’t find the incognito myself, but they could’ve credited Cohen…

Requirements:
-> Access to chrome://flags
-> Be on chromeOS v123 - v127 (but you can still use ‘incognito’ on v128)

Instructions:
IF YOU ARE ON chromeOS v126-v127, GO TO THE v126-v127 SECTION!
IF YOU ARE ON chromeOS v128, GO TO THE v128 SECTION!
Go to chrome://flags/#captive-portal-popup-window.
-> If you’re on v126-v127, go to the v126-v127 section.
-> If you’re on v128, you need to downgrade to v123-v127 or use the v128 ‘incognito’ method.
Enable it.
Restart.
If the flag didn’t reset, you can continue. Else you cannot.
Now, follow one of the two methods:

Option 1:
Go to Settings.
Click Wifi in the Network section.
Click your wifi.
Click Network.
Set Name servers to Custom name servers.
Set the first box to detectportal.firefox.com OR captive.apple.com OR 150.136.163.0 (yes you can use the v105 dns)
A sign in pop up should appear from your wifi. Click Sign in.
Do CTRL+T and you’re now in Incognito mode!
-> You can also right click the top of the tab then click “Show as tab” to open Incognito.
Set Name servers back to what it was before. You will also need to disconnect and reconnect to your wifi.
Option 2:
If you have access to EE Wifi in the UK, connect to it.
A sign in pop up should appear from your WiFi. Click Sign in.
Do CTRL+T and you’re now in Incognito mode!
Reconnect to your normal Wifi.
-> You can also right click the top of the tab then click “Show as tab” to open Incognito.
Instructions (v127-v128):
Go to: -> chrome://flags#temporary-unexpire-flags-m124 if you are on v126
-> chrome://flags/#temporary-unexpire-flags-m125 if you are on v127 (or v126)
Enable it.
Restart.
Follow the rest of the original instructions.
Instructions (v128):
Please go to https://s-pscripts.github.io/incognito-v128/

Notes:
-> Extensions can’t block you!
-> No search history!

You can use CAUB to allow changing DNS/Name servers if policies like:
{ “NetworkConfigurations”: [ { “GUID”: “{}", "Name": "", "ProxySettings": { "Type": "Direct" }, "Type": "WiFi", "WiFi": { "AutoConnect": true, "HiddenSSID": false, "Passphrase": "", "SSID": "", "Security": "WPA-PSK" } } ] }

Credits:
https://crbug.com/341245382 (cohen) for the original post
https://github.com/s0urce-c0de for finding the post, writing the original writeup on 3kh0’s repo and adding CAUB to my writeup
https://github.com/S-PScripts (me) for finding a DNS that opens a captive portal window and writing this writeup
https://github.com/Brandon421-ops for reminding me that the temporary unexpire flags exist.
https://github.com/jee1mr/captive-portal because that’s where I found the DNS