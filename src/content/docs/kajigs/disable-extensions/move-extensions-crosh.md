---
title: remove-extensions-crosh
---

-e 
Permanently Remove Extensions (Past v106)

This exploit details another way to permanently delete extensions. Once done, you can update or restart your chromebook and the extensions will stay gone until you powerwash.

You need a usb for downgrading, and rudimentary knowledge of bash is recommended.

Instructions:
1. Downgrade to any version below 103. 

2. Hit ctrl+alt+t (chrome-untrusted://crosh) to open a crosh window.
-> If it’s blocked by extensions, use LTBEEF. 
-> If it’s policy blocked (“The person who set up this computer has chosen to block this site”) you can try downgrading to a version below 90, where crosh had a different URL.

3. Type in set_cellular_ppp \';bash;exit;\' and hit enter.
-> You now have access to a bash shell, logged in as chronos. More information about the permissions of this shell is at the bottom.

4. Type rm -rf ~/Extensions/*. 
-> THIS WILL BREAK EVERY EXTENSION ON YOUR CHROMEBOOK. If there are extensions you want to keep, they can be selectively removed by ID.

5. Run chmod 000 ~/Extensions. 
-> This marks the extension folder as read only, stopping it from updating in the future or any new extensions from being installed.

You can now restart chrome, allowing it to update to the latest version. 
Once rebooted onto the latest version, all removed extensions will have the default icon and won’t function at all.

You can also run set_cellular_ppp \'chmod 777 ~/Extensions;rm -rf ~/Extensions;mkdir ~/Extensions;chmod 000 ~/Extensions;echo done;exit\' in crosh to do it all in one step.

- https://discord.com/channels/419123358698045453/1033121753263771709 -

If you would like to have Root Access, do Root Escalation.
-> Root Escalation can allow you to run developer mode content, enable developer mode and bypass pretty much everything with one exploit. It will require the downgrade methods.
-> It has a lot of branches so its Kajig discussion has been linked. Check the pins in the TN Discord server.

- https://discord.com/channels/419123358698045453/1033537020854800434 -

Credits:
CoolElectronics/velzie
https://github.com/titaniumnetwork-dev/Oxide-Docs/blob/master/docs/kajigs.mdx
Titanium Network