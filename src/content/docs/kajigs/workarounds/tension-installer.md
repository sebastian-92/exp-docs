---
title: extension-installer
---

-e 
A bookmarklet to install extensions!This exploit does not work with an extension blocklist.

Javascript code:
javascript:document.write("<center><head><h1>Extension Installer</h1></head><h3>Enter the ID, icon, and name of the extension to install.<br>The icon and name can be anything of your choice.</h3><p>Icon<br><input id='icon' placeholder='data:image/png;base64,...'><p>Name<br><input id='name' placeholder='Extension name'><p>ID<br><input id='extension' maxlength='32' placeholder='Extension ID'><p><button id='submit'>Add to Chrome</button></center>
<style>textarea{border-radius: 25px; margin: 1 auto; margin-center: auto; margin-center: auto; text-align: center; align: center; display: inline-block; height: 400px} body {padding: 13px; font-size: 110%; color: #fff;%20background-color:%20#2e2e31;%20user-select:%20none;}%20h1%20{text-align:%20center;%20font-size:%2070px}%20h2%20{text-align:left;font-size:175%}%20button,%20pre,%20select,%20textarea%20{border-radius:%20%2021px;%20%20color:%20white;%20font-size:15px}%20h1,%20h2,%20h3,%20h4,%20button,%20label,%20p,%20select%20{font-family:%20Roboto,%20sans-serif}%20hr%20{border:%20none;%20border-bottom:%203px%20solid%20#fff}%20input,%20kbd,%20pre,%20textarea%20{font-family:%20monospace;%20border:%20none}%20input,%20select,%20textarea%20{background-color:%20#fff;%20border-radius:%2025px;%20padding:%2013px%2017px;%20border:%20none}%20button{%20background-color:%20#0F52BA;%20padding:%2013px%2050px;%20margin:%2020%205px%205px%200}%20input%20{width:%20600px;%20border-radius:%2025px}%20textarea%20{white-space:%20pre;%20float:%20center;%20width:%2060%;%20border-radius:%2025px;%200%200%2010px;resize:%20none;%20background-color:%20#99edc3;%20margin-bottom:%2015px}%20pre%20{border-radius:25;%2010px%2010px%200;%20padding:%2013px;%20float:%20right;%20margin:%200%200%2025px;%20width:%2040%;%20overflow-y:%20scroll;%20word-break:%20break-all;%20white-space:%20pre-line;%20background-color:%20#1c8e40}%20button%20{border:%20none;%20border-radius:%2025px;%20cursor:%20pointer;%20transition:%20filter%20250ms}%20button:hover%20{filter:brightness(.8)}.gg{background-color:%20#99edc3}%20a%20{color:%20#99edc3;%20transition:color%20250ms}%20a:hover%20{color:%20#1c8e40}%3C/style%3E%20%22),%20document.getElementById(%22submit%22).addEventListener(%22click%22,function()%20{var%20empty%20=%20document.getElementById(%22extension%22).value;%20if%20(empty%20==%20%22%22)%20{alert(%22Enter%20an%20extension%20ID%22);}%20let%20icon%20=%20document.getElementById(%22icon%22).value;%20let%20name%20=%20document.getElementById(%22name%22).value;%20let%20extension%20=%20document.getElementById(%22extension%22).value;%20chrome.webstorePrivate.beginInstallWithManifest3({esbAllowlist:%20!0,%20iconUrl:%20%22%22%20+%20icon,%20id:%20%22%22%20+%20extension,%20localizedName:%20%22%22%20+%20name,%20manifest:%20'{
%22update_url%22:%20%22https://clients2.google.com/service/update2/crx%22,

%20%20%20%20%22manifest_version%22:%202,
%20%20%20%20%22content_security_policy%22:%20%22script-src%20\'self\';%20object-src%20\'self\';%22,
%20%20%20%20%22minimum_chrome_version%22:%20%2271.0.0.0%22,
%20%20%20%20%22offline_enabled%22:%20true,
%20%20%20%20%22content_scripts%22:
%20%20%20%20[
%20%20%20%20%20%20%20%20{
%20%20%20%20%20%20%20%20%20%20%20%20%22js%22:%20[
%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22page.js%22,
%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22content.js%22
%20%20%20%20%20%20%20%20%20%20%20%20],
%20%20%20%20%20%20%20%20%20%20%20%20%22matches%22:%20[%20%22file:///*%22,%20%22http://*/*%22,%20%22https://*/*%22%20],
%20%20%20%20%20%20%20%20%20%20%20%20%22run_at%22:%20%22document_start%22,
%20%20%20%20%20%20%20%20%20%20%20%20%22all_frames%22:%20true
%20%20%20%20%20%20%20%20}
%20%20%20%20],
%20%20%20%20%22browser_action%22:%20{
%20%20%20%20%20%20%20%20%22default_icon%22:%20{
%20%20%20%20%20%20%20%20%20%20%20%20%2219%22:%20%22images/icon_grey19.png%22,
%20%20%20%20%20%20%20%20%20%20%20%20%2238%22:%20%22images/icon_grey38.png%22,
%20%20%20%20%20%20%20%20%20%20%20%20%2216%22:%20%22images/icon_grey16.png%22,
%20%20%20%20%20%20%20%20%20%20%20%20%2224%22:%20%22images/icon_grey24.png%22,
%20%20%20%20%20%20%20%20%20%20%20%20%2232%22:%20%22images/icon_grey32.png%22
%20%20%20%20%20%20%20%20},
%20%20%20%20%20%20%20%20%22default_title%22:%20%22Tampermonkey%22,
%20%20%20%20%20%20%20%20%22default_popup%22:%20%22action.html%22
%20%20%20%20},
%20%20%20%20%22icons%22:%20{
%20%20%20%20%20%20%20%20%2232%22:%20%22images/icon.png%22,
%20%20%20%20%20%20%20%20%2248%22:%20%22images/icon48.png%22,
%20%20%20%20%20%20%20%20%22128%22:%20%22images/icon128.png%22
%20%20%20%20},
%20%20%20%20%22incognito%22:%20%22split%22,
%20%20%20%20%22name%22:%20%22Tampermonkey%22,
%20%20%20%20%22short_name%22:%20%22Tampermonkey%22,
%20%20%20%20%22version%22:%20%224.18.0%22,
%20%20%20%20%22description%22:%20%22The%20world\'s%20most%20popular%20userscript%20manager%22,
%20%20%20%20%22default_locale%22:%20%22en%22,
%20%20%20%20%22background%22:%20{
%20%20%20%20%20%20%20%22page%22:%20%22background.html%22
%20%20%20%20},
%20%20%20%20%22options_page%22:%20%22options.html%22,
%20%20%20%20%22options_ui%22:%20{
%20%20%20%20%20%20%20%20%22page%22:%20%22options.html%22,
%20%20%20%20%20%20%20%20%22chrome_style%22:%20false,
%20%20%20%20%20%20%20%20%22open_in_tab%22:%20true
%20%20%20%20},
%20%20%20%20%22commands%22:%20{
%20%20%20%20%20%20%20%20%22toggle-enable%22:%20{
%20%20%20%20%20%20%20%20%20%20%20%20%22description%22:%20%22Toggle%20enable%20state%22
%20%20%20%20%20%20%20%20},
%20%20%20%20%20%20%20%20%22open-dashboard%22:%20{
%20%20%20%20%20%20%20%20%20%20%20%20%22description%22:%20%22Open%20dashboard%22
%20%20%20%20%20%20%20%20},
%20%20%20%20%20%20%20%20%22open-dashboard-with-running-scripts%22:%20{
%20%20%20%20%20%20%20%20%20%20%20%20%22description%22:%20%22Open%20dashboard%20with%20the%20current%20tab\'s%20URL%20used%20as%20filter%22
%20%20%20%20%20%20%20%20},
%20%20%20%20%20%20%20%20%22open-new-script%22:%20{
%20%20%20%20%20%20%20%20%20%20%20%20%22description%22:%20%22Open%20new%20script%20tab%22
%20%20%20%20%20%20%20%20}
%20%20%20%20},
%20%20%20%20%22permissions%22:%20[
%20%20%20%20%20%20%20%20%22notifications%22,
%20%20%20%20%20%20%20%20%22unlimitedStorage%22,
%20%20%20%20%20%20%20%20%22tabs%22,
%20%20%20%20%20%20%20%20%22idle%22,
%20%20%20%20%20%20%20%20%22webNavigation%22,
%20%20%20%20%20%20%20%20%22webRequest%22,%20%22webRequestBlocking%22,
%20%20%20%20%20%20%20%20%22storage%22,
%20%20%20%20%20%20%20%20%22contextMenus%22,
%20%20%20%20%20%20%20%20%22chrome://favicon/%22,
%20%20%20%20%20%20%20%20%22clipboardWrite%22,
%20%20%20%20%20%20%20%20%22cookies%22,
%20%20%20%20%20%20%20%20%22declarativeContent%22,
%20%20%20%20%20%20%20%20%22%3Call_urls%3E%22
%20%20%20%20],
%20%20%20%20%22optional_permissions%22%20:%20[%20%22downloads%22%20]
}
',%20%20%20%20%20%20%20%20},%20%20%20%20%20%20%20%20function%20()%20{%20%20%20%20%20%20%20%20%20%20chrome.webstorePrivate.completeInstall(%22%22%20+%20extension,%20function%20()%20{%20%20%20%20%20%20%20%20%20%20%20%20console.log(arguments);%20%20%20%20%20%20%20%20%20%20});%20%20%20%20%20%20%20%20}%20%20%20%20%20%20);%20%20%20%20},%20%20%20%20!1%20%20);

Instructions:
1. Navigate to https://chrome.google.com/webstorex.
2. Create a bookmark with the URL as the javascript code above.
3. Run the bookmarklet.
4. Enter your preferred icon, id, and name of the extension you want to install.
5. Click the download button.

This is meant for users that have the Chrome Web Store blocked.

Credits:
AkaButNice - https://github.com/aka-but-nice
https://extension-installer.glitch.me/code.js