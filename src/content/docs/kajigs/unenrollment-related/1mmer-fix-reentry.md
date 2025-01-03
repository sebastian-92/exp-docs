---
title: sh1mmer-fix-reentry
---

-e 
Situation: 
You just updated your firmware and sh1mmer doesn't work at all

Output:
Allow downgrading to older versions through the Chrome recovery process as well as downgrade firmware 
and a bunch of fooling cros into thinking that the downgrade is legal!

Instructions:
Before updating, (caub), run the commands below. This script below works in chronos if you are in verified mode, however you need to somehow get a shell:
tpm_manager_client take_ownership
tpm_manager_client read_space --index=0x00001007 --file=/home/chronos/user/Downloads/ss.tpm 
tpm_manager_client read_space --index=0x00001008 --file=/home/chronos/user/Downloads/ss2.tpm 

This script below works only if you are root and in devmode:
sudo flashrom -r /home/chronos/user/Downloads/flash.bin

All output files, flash.bin and ss.tpm, ss2.tpm should be kept in a place (such as your Google Drive)  which won't be erased after update.
(Turns out all values other than flash.bin can be shared)

After updating and somehow getting a shell either through keeping developer mode or using chronos rce. 
It works on chronos so if you get a shell, you don't need devmode to run these commands!
tpm_manager_client take_ownership
tpm_manager_client write_space --file=<whereever you placed ss.tpm in stateful> --index 0x00001007 
tpm_manager_client write_space --file=<whereever you placed ss2.tpm in stateful> --index 0x00001008

Recovering with an image of your choice can be <112.

Notes:
-> MAKE SURE YOU IMMEDIATELY RECOVER, if the tpm is reset you are screwed, and must do it again.
-> If you recover, please note that this will downgrade your firmware version.
-> Make sure you recover right after you make changes.

Bricking:
A brick occurs when you downgrade too far, or downgrade after a firmware update. I'll explain the brick here:
The brick occurs because when the initramfs is replaced, during the reco process, its fw_ver_max is compared to the tpm value on index 0x00001007. 
If the tpm value is greater than the fw_ver_max, the boot process will be interrupted and it will go through the bootloop of trying to "update the firmware". 
It will also post a boot alert stating that the firmware is updating in that bootloop! However, CrOS doesn't really care if we manually change the values within the OS, and then recover from a different image. 
This bypasses the rollback prevention of firmware CrOS implements. This also applies to kernel updates.

https://docs.google.com/document/d/1PEO7M3i94xBAlp2aBSvY_8UM6UBUxG9NG8sb3LSkuzg/edit
However, we can easily change this using the tpm commands.

You might also assume that if an attacker somehow gets an rce, and they get a chronos shell, you might stay safe from a downgrade attack. That is completely false, as tpm_manager_client can be executed by chronos.

References:
https://chromium.googlesource.com/chromiumos/platform/initramfs/+/refs/heads/main/common/fw_rollback_check.sh#11

Credits:
profile_encryption | Writable
Titanium Network
