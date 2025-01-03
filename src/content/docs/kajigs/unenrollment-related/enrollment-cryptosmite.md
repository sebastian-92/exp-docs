---
title: unenrollment-cryptosmite
---

-e 
CryptoSmite is an exploit capable of completely unenrolling enterprise-managed Chromebooks. It was found by FWSmasher and released on March 9th, 2024.
It uses stateful files to unenroll.

How it works:
It uses stateful backups that allow changing the encrypted contents of the stateful partition to arbritary contents. 
This data is useful for enrollment status, so it was changed to make the device appear unenrolled. 
On the OOBE, it starts the AutoEnrollmentController, which chains into the ash ownership system, and then the ownership system checks for a file. 
If this file exists, it removes firmware management parameters (FWMP).

This exploit has been patched since Chrome OS 120.
The kernel version of your Chromebook must end with 0, 1, or 2 to perform this exploit.

Finding Kernver:
If you're on v120 or higher, you need to downgrade in order to use CryptoSmite. To do this, you first need to check your kernver= in Recovery Mode.

1. Boot into Recovery Mode
-> Hold ESC + Refresh + Power for 2 or 3 seconds.
-> You should be on an "Insert Recovery Media" or "Let's step you through the recovery process" screen.

2. Press TAB and look at the last digit of the kernver= line

kernver= ends with a 0 or 1!
-> Congratulations, you can downgrade to any version! Follow the instructions on the file "Downgrade Versions" in this repo

kernver= ends with a 2!
-> Congratulations, you can downgrade to v112-v119! Follow the instructions on the file "Downgrade Versions" in this repo

kernver= ends with a 3!
-> Sorry, you can't downgrade to v119 or lower. Wait for a new unenrollment exploit or do a dangerous hardware modification (https://blog.darkn.bio/blog/3-the-tsunami).

Using CryptoSmite:
1. Download a SH1MMER Prebuilt image here: https://dl.darkn.bio/SH1mmer/Prebuilt/

2. Disable OS verification (blocked or not, doesn't matter), and boot into the shim.

3. Navigate to Payloads and navigate to CryptoSmite using the arrow keys, then press Enter.

4. Type in Y then press enter, and it'll automatically reboot upon completion.

5. Proceed through the setup partially till you get to the Add Account Screen.

-> If you see an update prompt, reboot then press CTRL + ALT + E on the Wi-Fi screen.
-> This should allow skipping the update, or make it not appear at all.

6. Powerwash the Chromebook at the "Add Account" screen. Afterwards, it'll be fully unenrolled.

Further Reading:
Repository: https://github.com/FWSmasher/CryptoSmite
Source: https://raw.githubusercontent.com/FWSmasher/CryptoSmite/main/cryptosmite.sh
Website: https://docs.google.com/presentation/d/1MciRMbDEb3RJomH2gYW9C5qRVjS4P92o2s4QepoCSgY
Official Blogspot: https://exploitingchromium.blogspot.com/
