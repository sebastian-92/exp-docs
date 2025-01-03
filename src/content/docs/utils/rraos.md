---
title: terraos
---

-e 
TerraOS allows booting Linux distros from an RMA shim. It does not modify the current installation.

Instructions:
1. Clone the TerraOS repository: https://github.com/r58Playz/terraos
   Run git clone https://github.com/r58Playz/terraos.git in a terminal.
2. Create a build directory in the cloned directory.
3. Run bash ../scripts/build_stage1.sh <defconfig> in the terminal.
   Use terraos as the defconfig if building for x86_64 Chromebooks.
   Use terraos_jacuzzi as the defconfig if building for jacuzzi board Chromebooks.
   Support for jacuzzi boards is experimental and may not work.
4. Run bash ../scripts/build_aur_packages.sh in the terminal.
5. Run bash ../scripts/build_all.sh <shim.bin> <board_recovery.bin> <reven_recovery.bin> in the terminal, replacing <shim.bin> with the path to a shim for your board, 
<board_recovery.bin> with the path to a recovery image for your board, and <reven_recovery.bin> with the path to a Chrome OS Flex recovery of the same version. 
This places a built bootloader image, SquashFS and tarballs of the arch RootFS, a bootloader image with the arch Rootfs, a bootloader image with TerraOS Chrome OS,
and a bootloader image with both the arch RootFS and TerraOS Chrome OS in the build directory.

The default arch RootFS user and password are terraos.

Credits:
https://github.com/r58Playz/terraos
r58Playz | https://github.com/r58Playz
https://raw.githubusercontent.com/r58Playz/terraos/rust-rewrite/src/main.rs
