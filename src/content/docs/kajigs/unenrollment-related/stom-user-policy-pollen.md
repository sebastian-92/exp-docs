---
title: custom-user-policy-pollen
---

-e 
Pollen - Mercury Workshop:
Github: https://github.com/MercuryWorkshop/Pollen

Pollen loads a custom user policy into Chrome OS. Developer mode must be enabled to perform this exploit.

Normal Method - Instructions:
1. Navigate to chrome-untrusted://crosh.
2. Run shell.
3. Run sudo su.
4. Run curl -Ls https://mercuryworkshop.github.io/Pollen/Pollen.sh | bash.
5. If the policies do not apply after a few seconds, press Alt+VolumeUp+X.

RootFS Method - Instructions: 
Warning: Disabling RootFS soft-bricks the Chromebook when booting back into normal mode.

1. Navigate to chrome-untrusted://crosh.
2. Run shell.
3. Run sudo su.
4. Run curl -Ls https://mercuryworkshop.github.io/Pollen/RootFS.sh | bash.
5. If the policies do not apply after a few seconds, press Alt+VolumeUp+X.
6. Reboot.
7. Complete steps 1-3 again.
8. Run curl -Ls https://mercuryworkshop.github.io/Pollen/PollenFS.sh | bash.

Afterwards, your Pollen configuration should be permanently applied.

Credits:
Pollen Developer - Scaratek
Discovery - Rafflesia
Original Script Developer - OlyB
Logo - Nitelite
Fixed Bug - r58playz
Added Policies - 5less-chromosones
