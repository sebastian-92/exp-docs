---
title: caub-on-fentanyl
---

-e 
CAUB On Fentanyl

This hard blocks updates by completely removing the updater from ChromeOS.

Requirements:
- chronos access or root access pref.
- pre-117 for sudo in crosh, or else you need to manually type the commands / cmd
- rootfs verification disabled

Instructions:
1) Open Crosh / VT2 (if post-117)
2) Run shell / login to chronos (if post-117 / VT2)
3) Run either the long command(s) (posted below) or the short command (posted below)
4) Reboot

LONG CMDS / MULTI-LINE:
sudo stop update-engine 
sudo rm -rf /usr/sbin/update_engine
sudo rm -rf /usr/bin/update_engine_client
sudo rm -rf /sbin/chromeos-firmwareupdate
sudo rm -rf /opt/google/cr50/firmware/* #this does not nuke your device. it removes the staged cr50 updates, preventing them from being flashed
sudo sed -i "/etc/lsb-release" -e "s/google.com/gooole.com/g"

SHORT CMD / 1 LINE:
sudo stop update-engine && sudo rm -rf /usr/sbin/update_engine && sudo rm -rf /usr/bin/update_engine_client && sudo rm -rf /sbin/chromeos-firmwareupdate && sudo rm -rf /opt/google/cr50/firmware/* && sudo sed -i "/etc/lsb-rel" -e "s/google.com/gooole.com/g"

Extra information:
You can zero ROOT-B if you really want to make sure you don't update. To do this, run these commands:
(This could nuke your root partition, please be careful when running these commands!)

root_dev=$(rootdev)
cleaned_dev="${root_dev//p[0-9]*/}"
sudo dd of=$(cleaned_dev)p4 if=/dev/zero bs=1M status=progress
sudo dd of=$(cleaned_dev)p5 if=/dev/zero bs=1M status=progress

Credits:
katelyn | Titanium Network