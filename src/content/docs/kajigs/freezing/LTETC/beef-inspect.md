---
title: ltbeef-inspect
---

-e 
LTBEEF but done by inspect element!

Instructions:
1. Go to chrome-extension://gndmhdcefbhlchkhipcnnbkcmicncehk/manifest.json.
2. Open Inspect Element and go to the console.
3. For each extension you want to disable, do chrome.management.setEnabled('<extension id here>', false)

How to undo:
Put chrome.management.setEnabled('<extension id here>', true) instead to re-enable!

Credits:
Bypassi (SprinkzMC#8421)