---
title: run-code-2-urun-for-ublock
---

-e 
This is the original unnamed uBlock exploit but better since it has a GUI... uRun.

Requirements: uBlock Origin - https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm

Code:
/// urun.js
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
		var t = window.open("", "_blank", "width=500,height=300");
		var e = t.document.createElement("iframe");
		(e.src = "//inglan2.github.io/uRun/popup.html"),
			(e.style.cssText = "width:100%; height:100%; border:none;"),
			t.document.body.appendChild(e),
			t.document.title = "uRun",
			t.addEventListener("message", function (e) {
				e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
			});
	}
});

1. Make sure you have uBlock Origin installed.
2. Go to the extension's settings.
3. Under the settings tab, check the "I am an advanced user" box, then click on the small cog icon.
4. Find userResourcesLocation and change it from unset to the code above.
5. Go to the My filters tab of the settings and add the following line: *##+js(urun.js)

Usage
Simply press Ctrl + Shift + ` to open the menu and from there you can run and create scripts. 
To add a script, press the + button up the top right, and enter the code you would like to add (without the javascript: part).

Credits: 
Inglan2 - https://github.com/Inglan2
https://github.com/3kh0/ext-remover