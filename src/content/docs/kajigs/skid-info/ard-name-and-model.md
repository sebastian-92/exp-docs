---
title: board-name-and-model
---

-e 
Here's how to get your board name and your board model.

Method 1:
1. Go to chrome://version/
2. Check the Platform section and look at the end. This is your board name. For example, it could be octopus or dedede.
3. Check the Customization ID section. This is your board model. For example, it could be phaser360 or boten.

Method 2:
1. Go to chrome://system/
2. Wait until it finishes loading.

To find your board name, check one of these sections:
CHROMEOS_RELEASE_BOARD (board name at start)
CHROMEOS_RELEASE_BUILDER_PATH (board name at start)
CHROMEOS_RELEASE_DESCRIPTION (board name at end)
platform_identity_name

To find your board model, check one of these sections:
HWID (board model at start)
hardware_class (board model at start)
platform_identity_model

If chrome://system is blocked, do CTRL + SEARCH + I, enter anything in the description, click Continue, then click the blue System and app info text.
