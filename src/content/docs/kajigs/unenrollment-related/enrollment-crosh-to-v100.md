---
title: unenrollment-crosh-to-v100
---

-e 
This is very old and only works on chromeOS versions before v101. (go to chrome://version to check your version)

Instructions:
1. Open Crosh with CTRL+ALT+T or chrome-untrusted://crosh.
2. Run the code below:
set_cellular_ppp \';dbus-send${IFS}--system${IFS}--print-reply${IFS}--dest=org.chromium.SessionManager${IFS}/org/chromium/SessionManager${IFS}org.chromium.SessionManagerInterface.ClearForcedReEnrollmentVpd;exit;\'
3. Powerwash and you'll be unenrolled.

Chronos Version:
dbus-send --system --print-reply --dest=org.chromium.SessionManager /org/chromium/SessionManager org.chromium.SessionManagerInterface.ClearForcedReEnrollmentVpd

How to re-enroll:
1. Open a bash shell.
2. Run these one by one:
sudo -i
vpd -i RW_VPD -s check_enrollment=1
echo "fast safe" > /mnt/stateful_partition/factory_install_reset
reboot

Credits:
velzie/coolelectronics
https://coolelectronics.me/unroll (no longer up)