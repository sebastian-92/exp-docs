---
title: downgrade-versions
---

-e 
Downgrading can be used for several exploits, to get to a version that does not have patches for certain exploits, such as LTBEEF. 
This is a built-in feature of ChromeOS. Please do note that downgrading on most devices up to a certain version is patched so 
this may not work for you.

Requirements:
- A USB thumb drive with at least 4GB of storage - 16GB is recommended.
- A personal computer with access to downloading extensions.

Setup:
1. Navigate to chrome://version on the Chromebook you wish to downgrade and check for your board under Platform. 
2. On your personal computer, navigate to https://chrome100.dev.
3. Do CTRL+F on your keyboard and type in your board.
4. Find and download the Chrome version you want to your personal computer.

Downgrading:
1. Install Chromebook Recovery Utility onto your personal computer. 
(https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm)
2. Open the extension, click on the settings button in the top right-hand corner, and click "Use local image".
3. Select the recovery image you downloaded from chrome100.
4. Plug in the USB you wish to use, and follow the prompts on the screen.
5. On your Chromebook, press Esc+Reload+Power and follow the prompts.
6. On the checking for updates screen, press Ctrl+Shift+E to skip it.

Help: https://docs.google.com/presentation/d/1NCXDfjsBVDSR3JrpRXy4C-jz48mkIFaBVntpcbnJX_0/edit#slide=id.g14696d35f7e_0_97

Credits: https://github.com/3kh0/ext-remover
