---
title: chromeos-terminal-redirector
---

-e 
This exploit lets you open nearly any page from the ChromeOS terminal, even when SSH is disabled.

Instructions:
1. Open the Terminal app on your ChromeOS laptop (doesn't matter if you can use SSH or not, it'll work anyway as long as you can open the Terminal app)
2. Create a new SSH connection with this configuration:
-> Command: chronos@127.0.0.1 (this part doesn't matter, just needs to follow the format for a SSH user@host)
-> SSH relay server options: --proxy-host=blocked_site_you_want_to_access.tld/path# --proxy-port=443 --use-ssl=true
4. Right-click on the Terminal app icon and select your new SSH connection.
4. Enjoy getting to access your site without blocking.

Example for SSH relay server options:
To access Discord, you would set it to --proxy-host=discord.com/app# --proxy-port=443 --use-ssl=true

Notes:
-> This only works for the first page load on a blocked site, subsequent page reloads will probably still be blocked
(e.g. if google.com is blocked and you do --proxy-host=google.com/#, it'll probably work, but once you search for something, that page will get blocked)
-> This might not work for all extensions

Working extensions:
- Securly

Non-working extensions:
- Cisco Umbrella
- Lightspeed

Partial working extensions:
- GoGuardian (blocks after about 5 minutes in most cases)

Credits
9pfs | Titanium Network
