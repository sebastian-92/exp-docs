---
title: locked-mode-hack-bypass-ext
---

-e 
LoMoH
Formerly named "Locked Mode Hack," this Chrome OS exploit uses the locked mode feature to soft disable force-enabled extensions on managed accounts (Excluding Hapara Highlights and Read&Write if installed).

Javascript edition: Will only work on older versions of ChromeOS since Javascript was blocked in bookmarklets
javascript:(function(){if (location.hostname == 'docs.google.com') {document.body.innerHTML = document.body.innerHTML.replace('Locked mode is on', 'Are you ready to turn off extensions?%27);%20document.body.innerHTML%20=%20document.body.innerHTML.replace(%22You%20have%20already%20opened%20and%20closed%20this%20quiz.%20Opening%20this%20quiz%20again%20will%20notify%20the%20form%20owner%20by%20email.%22,%20%22This%20will%20reload%20all%20tabs%20in%20your%20browser%22);%20var%20button%20=%20document.getElementById(%27mG61Hd%27);%20button.innerHTML%20=%20button.innerHTML.replace(%22Start%20Quiz%22,%20%22Disable%20Extensions%22);%20button.addEventListener(%27click%27,%20function(event){window.close();})}%20else%20{window.open(%22https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5EYwrSUjmQhBOasMpORZy80eBCYb7qCpEwWNoRPUGyObGMA/startquiz%22);}})()

HTML edition:
https://ashtondavies.github.io/LoMoH?unlock
https://s-pscripts.github.io/LoMoH-ub/?opengate

You must create your link with the button on the page for locked mode to work within your organization/district.
If this is patched for you, you will get rickrolled attempting to perform this exploit. This is just a heads-up for those who do happen to read this.

Credits: 
https://github.com/AshtonDavies/LoMoH
https://github.com/AshtonDavies
https://chrose.netlify.app/detail/lomoh/