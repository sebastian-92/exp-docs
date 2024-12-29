---
title: run-code-with-ublock
---

-e 
If your school allows the uBlock Origin chrome extension, then running any bookmarklet is possible.
Very helpful if you are on a later version of chromeOS that blocks javascript in bookmarks!

Requirements: uBlock Origin - https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm

Code:
/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      eval(prompt("Javascript code:"));
  }
})

1. Make sure you have uBlock Origin installed.
2. Go to the extension's settings.
3. Under the settings tab, check the "I am an advanced user" box, then click on the small cog icon.
4. Find userResourcesLocation and change it from unset to the code above.
5. Go to the My filters tab of the settings and add the following line: *##+js(execute_script.js)
6. Press Ctrl + Shift + ` to run code on the current page! Put the javascript in the pop-up.

Credits: https://github.com/3kh0/ext-remover