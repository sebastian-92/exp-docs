---
title: caudns
---

-e 
cauDNS blocks requests for updates and certain extensions, and allows users to set custom name servers.
This DNS server is configured to networks by importing an ONC file.

Instructions:
1. Go to this website: https://caudns.vercel.app/
2. Navigate to chrome://network#state.
3. Locate the section for the Wi-Fi network that is currently connected.
4. Expand the section by clicking the plus (+).
5. Select all the text within the expanded part of the section.
6. Copy the selection from the context menu or by pressing Ctrl + C.
7. Paste the copied text into the input field on cauDNS by pressing Ctrl + V.
8. Click Download.

Notes:
If the main website is blocked, use one of these instead:
https://zekcurly.netlify.app/
data:text/html, <script src='https://cdn.jsdelivr.net/gh/dragon731012/caudns/jszip.js' defer></script> <script src='https://cdn.jsdelivr.net/gh/dragon731012/caudns/filesaver.js' defer></script> <script src='https://caudns.vercel.app/main.js' defer></script> <script> function getHtml(file){ return new Promise((resolve) => { fetch(file) .then((response) => { return response.text(); }) .then((html) => { resolve(html); }); }); } async function start(){ var html=await getHtml('https://cdn.jsdelivr.net/gh/dragon731012/caudns/data.txt'); html=html.toString(); console.log(html); document.body.innerHTML=html; } start(); </script>

Credits:
dragon73101 (Potato)
https://github.com/dragon731012/cauDNS

https://chrose.netlify.app/detail/caudns/
AshtonDavies
