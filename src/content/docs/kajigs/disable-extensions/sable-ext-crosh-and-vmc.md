---
title: disable-ext-crosh-and-vmc
---

-e 
Here's a way to disable extensions with crosh. You need to have crosh unblocked to use this.
THIS IS PATCHED FROM CHROMEOS v123!

Testing if the method is possible:
Open crosh by hitting CTRL+ALT+T. If a command line pops up then you have crosh enabled and you can move on to step 2.
Test the VmManagementCliAllowed policy by running the vmc command. If a list of subcommands is shown, then you're good to go.

To begin...
1. Back up any data you want before the powerwash.
2. If you're disabling specific extensions, note down any extension IDs. 
You may also want to do this if you intend on disabling all extensions, 
since sometimes that will fail and require you to specify each extension you want to disable.
3. Powerwash by attempting to enable developer mode. Instructions are available at 
https://chromium.googlesource.com/chromiumos/docs/+/master/developer_mode.md#dev-mode
4. Log into your Google account as normal, but immediately disable your internet right after you sign in.
5. You should be logged into your account, but without any extensions installed due to being offline. 
Here the instructions are split, so follow the one for the method that you want to do.

Disable All Extensions:
1. Open up crosh by hitting CTRL+ALT+T or going to chrome-untrusted://crosh/.
2. Type in vmc create-extra-disk --size 1 /home/chronos/user/Extensions
3. Run that command.
4. If it fails with a "file exists" error, then you must individually specify each extension that you want to remove. 
Move to step 5 of the next section to do that.
5. Re-enable your internet, and no extensions should be installed.

Disable Specific Extensions:
1. Navigate to chrome://extensions.
2. Enable your internet, and immediately disable it when an extension is installed.
Assuming the installed extension was not one that you were trying to disable, move on to step 4. 
If it was, you'd have to powerwash to try again.
3. Open up crosh by hitting CTRL+ALT+T or going to chrome-untrusted://crosh/.
4. For each extension you want to disable, run this command:
vmc create-extra-disk --size 1 /home/chronos/user/Extensions/{extension_id}
5. Each command should look something like this: 
vmc create-extra-disk --size 1 /home/chronos/user/Extensions/cjpalhdlnbpafiamejdnhcphjbkeiagm
6. Re-enable your internet, and if you typed/pasted in the extension IDs correctly, 
those specific extensions should be blocked from ever being installed.

Credits: vk6, https://local.ading.dev/vmc.html
