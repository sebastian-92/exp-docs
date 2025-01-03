---
title: tab-disguiser
---

-e 
Disguise the icon and name of the tab you're on with the icon and name given in the code.
You need to have the ability to use javascript in bookmarklets (this was patched in newer versions of ChromeOS).

Instructions: 
1. Create a bookmark.
2. Copy the provided code below.
3. Paste it in as the URL.
4. Name it whatever you want and click Save.

Option 1:
javascript: (function () {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href =
    "https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico";
  document.title = "My Drive - Google Drive";
  console.log(document.title);
  document.getElementsByTagName("head")[0].appendChild(link);
})();

Option 2: This updates the disguise every second
javascript: function gcloak() {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href =
    "https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico";
  document.title = "My Drive - Google Drive";
  console.log(document.title);
  document.getElementsByTagName("head")[0].appendChild(link);
}
gcloak();
setInterval(gcloak, 1000);

The 2 scripts given use a Google Drive disguise as an example, but they can be customised:
-> To change the favicon, replace the link in line 4 with your own image link.
-> To change the title, replace the text in the ''s on line 5 with your own title.
-> To change the timing, replace the number in line 9 with your own timing (in milliseconds).

Credits:
https://github.com/titaniumnetwork-dev/Oxide-Docs/blob/master/docs/kajigs.mdx
Titanium Network
