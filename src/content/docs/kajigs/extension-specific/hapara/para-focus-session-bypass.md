---
title: hapara-focus-session-bypass
---

-e 
This is an exploit that allows for access to sites outside of the Hapara Focus Session.

Instructions:
1. Create a bookmark named anything, head to the URL section, and paste this in it:
data:text/html,<!DOCTYPE html> <html> <head> <title>full screen iframe</title> <style type="text/css"> html { overflow: auto; } html, body, div, iframe { margin: 0px; padding: 0px; height: 100%; border: none; } iframe { display: block; width: 100%; border: none; overflow-y: auto; overflow-x: hidden; } </style> </head> <body> <iframe src="https://www.google.com" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="100%" scrolling="auto" id="google"> </iframe> </body> </html>
2. When you are in a focus session, click the bookmark, and it will open a Google tab. 
3. Enjoy not having to listen to a lecture from your teacher! 

Credit:
https://github.com/HeroLink6
https://github.com/HeroLink6/Hapara-Focus-Session-Bypass/tree/main

Notes:
Your teacher may be able to see your screen still, but they won't think you are doing anything wrong because of the focus session.
YOU MUST NEED data: LINKS ALLOWED, IF YOU DON'T HAVE THOSE ALLOWED, THIS WILL NOT WORK.

-> If the code at the top doesn't work, then you can download the Iframe and open it from your computer: 
https://github.com/3kh0/ext-remover/blob/main/HaparaBypass-Iframe.html
https://github.com/HeroLink6/Hapara-Focus-Session-Bypass/blob/main/Hapara-Iframe.html

-> Here's a better version that lets you use ANY link:
https://github.com/HeroLink6/Hapara-Focus-Session-Bypass/blob/main/Hapara-IframeV2.html

-> If none of the above work, try using this:
data:text/html;base64,PHNjcmlwdD4KdmFyIHdpbj13aW5kb3cub3BlbigiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tIikKICAgIHdpbi5kb2N1bWVudC53cml0ZShgCiAgICA8c3R5bGU+CiAgICAgICAgKnttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7fQogICAgICAgIGlmcmFtZXt3aWR0aDoxMDB2dztoZWlnaHQ6MTAwdmh9CiAgICA8L3N0eWxlPgogICAgPGlmcmFtZSBpZD0iZnJhbWUiPjwvaWZyYW1lPgogICAgPHNjcmlwdD4KICAgIHZhciBmcmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiZnJhbWUiKTsKICAgIGZyYW1lLnNldEF0dHJpYnV0ZSgic3JjIixwcm9tcHQoIkluc2VydCBsaW5rIHRvIGVtYmVkIDoiLCJpbnNlcnQgbGluayB0byB3ZWJzaXRlIikpCiAgICA8XC9zY3JpcHQ+CmApCiAgICB3aW5kb3cuY2xvc2UoKSAgICAKPC9zY3JpcHQ+