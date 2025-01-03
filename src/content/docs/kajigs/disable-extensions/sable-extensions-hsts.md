---
title: disable-extensions-hsts
---

-e 
If a blocking system requires both an extension and a Chrome App to function, the extension may communicate with the Chrome App over HTTP on the lo (local) network interface. If that's the case, HSTS can most likely be used to bypass it.

Requirements:
-> Access to chrome://net-internals
-> A blocker extension that comes with a helper Chrome App

Known working extensions:
-> Cisco Umbrella
-> iBoss

Known not working extensions:
-> Securly
-> GoGuardian
-> Anything that doesn't have both a Chrome app and extension

Instructions:
1. Verify that you have an extension that's affected. If it's not in the list, you can still try HSTS since it's easy to undo.
2. Open chrome://net-internals on your school device.
3. Go to the Domain Security Policy tab.
4. Put 127.0.0.1 in the Add HSTS domain text box.
5. Click Add.
6. Repeat Steps 4 and 5, but use localhost instead of 127.0.0.1.
7. Open chrome://restart.

Notes:
-> If you have a force-installed extension and a force-installed Chrome App from the same developer, it's worth trying this exploit.
-> You might have to log out and back in for this to work with certain extensions (this may apply to iBoss).

How this works:
-> Most websites use HTTPS, but that's impossible on localhost, so they have to use HTTP (since they can't get a TLS certicate). 
-> Of course, when you start talking HTTPS with an HTTP server, it can't understand, so if you use this, the extension and the app are effectively firewalled from each other, so the extension can't ask the app whether a site should be blocked or not.

Credits:
9pfs
Titanium Network
