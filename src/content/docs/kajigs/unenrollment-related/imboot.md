---
title: shimboot
---

-e 
Shimboot is a collection of scripts for patching a Chrome OS RMA shim to serve as a bootloader for a standard Linux distribution. 
It allows booting a full desktop Debian install without unenrolling modifying firmware.

Requirements:
-> A separate Linux PC for the build process (preferably something Debian-based)
==> WSL2 is supported if you are on Windows
==> Github Codespaces is not supported at the moment
-> A USB drive that is at least 8GB in size
-> At least 20GB of free disk space
-> An x86-based Chromebook

Build Instructions:
1. Find the board name of your Chromebook. You can search for the model name on https://chrome100.dev.
2. Clone this repository - https://github.com/ading2210/shimboot - and cd into it.
3. Run sudo ./build_complete.sh <board_name> to download the required data and build the disk image.

Alternatively, you can run each of the steps manually:
1. Grab a Chrome OS RMA Shim from somewhere. Most of them have already been leaked and aren't too difficult to find.
2. Download a Chrome OS recovery image (https://chromiumdash.appspot.com/serving-builds?deviceCategory=ChromeOS) for your board.
3. Unzip the shim and the recovery image if you have not done so already.
4. Run mkdir -p data/rootfs to create a directory to hold the rootfs.
5. Run sudo ./build_rootfs.sh data/rootfs bookworm to build the base rootfs.
6. Run sudo ./patch_rootfs.sh path_to_shim path_to_reco data/rootfs to patch the base rootfs and add any needed drivers.
7. Run sudo ./build.sh image.bin path_to_shim data/rootfs to generate a disk image at image.bin.

Prebuilt images (https://github.com/ading2210/shimboot/releases) are available if you don't have a suitable device to run the build on.

Booting the Image:
1. Obtain a shimboot image by downloading a prebuilt one (https://github.com/ading2210/shimboot/releases) or building it yourself.
2. Flash the shimboot image to a USB drive or SD card. Use the Chromebook Recovery Utility (https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) 
or dd (https://linux.die.net/man/1/dd) if you're on Linux.
3. Enable developer mode on your Chromebook. If the Chromebook is enrolled, follow the instructions on the sh1mmer website - https://sh1mmer.me/ (see the "Executing on Chromebook" section).
4. Plug the USB into your Chromebook and enter recovery mode. It should detect the USB and run the shimboot bootloader.
5. Boot into Debian and log in with the username and password that you configured earlier. The default username/password for the prebuilt images is user/user.
6. Expand the rootfs partition so that it fills up the entire disk by running sudo growpart /dev/sdX 4 (replacing sdX with the block device corresponding to your disk) to expand the partition, 
then running sudo resize2fs /dev/sdX4 to expand the filesystem.
7. Change the user password by running passwd user. The root user is disabled by default.

Credits:
ading2210/vk6 | https://github.com/ading2210
https://github.com/ading2210/shimboot
https://shimboot.ading.dev/
