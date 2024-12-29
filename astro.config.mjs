//ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/nfig
export default defineConfig({
  integrations: [
    starlight({
      title: "exp-docs",
      social: {
        github: "https://github.com/withastro/arlight",
      },
      sidebar: [
        {
          label: "Docs",
          items: [
            { label: "credits", slug: "credits" },
            { label: "index", slug: "index" },
          ],
        },
        {
          label: "kajigs",
          items: [
            {
              label: "block-updates",
              items: [
                {
                  label: "Among-Us-Exploit-(ඞ).",
                  slug: "kajigs/block-updates/ong-us-exploit",
                },
                {
                  label: "CAUB---Chrome-Auto-Update-Blocker.",
                  slug: "kajigs/block-updates/ub-chrome-auto-update-blocker",
                },
                {
                  label: "CAUB-+-DNS-+-Proxy-Editor.html",
                  slug: "kajigs/block-updates/ub-dns-proxy-editor-html",
                },
                { label: "CAUB-Flags.", slug: "kajigs/block-updates/ub-flags" },
                {
                  label: "CAUB-on-Fentanyl.",
                  slug: "kajigs/block-updates/ub-on-fentanyl",
                },
              ],
            },
            {
              label: "device-edit",
              items: [
                {
                  label: 'Bypass-"reported-lost-or-stolen".',
                  slug: "kajigs/device-edit/pass-reported-lost-or-stolen",
                },
                {
                  label: "Change-Background.",
                  slug: "kajigs/device-edit/ange-background",
                },
                {
                  label: "Change-Wallpaper-(v99-v104).",
                  slug: "kajigs/device-edit/ange-wallpaper-v99-v104",
                },
                { label: "Skebstore.", slug: "kajigs/device-edit/ebstore" },
                {
                  label: "Unblock-Crosh-(Ext.-or-Terminal)",
                  slug: "kajigs/device-edit/block-crosh-ext-or-terminal",
                },
                {
                  label: "Unblock-Crosh-(Kiosk-Apps).",
                  slug: "kajigs/device-edit/block-crosh-kiosk-apps",
                },
                {
                  label: "Unblocked-Dev-Tools-+-Flags.",
                  slug: "kajigs/device-edit/blocked-dev-tools-flags",
                },
                {
                  label: "Unblock-Extensions-(Blank3r).",
                  slug: "kajigs/device-edit/block-extensions-blank3r",
                },
              ],
            },
            {
              label: "disable-extensions",
              items: [
                {
                  label: "Classroom.cloud-Disabler",
                  slug: "kajigs/disable-extensions/assroom-cloud-disabler",
                },
                {
                  label: "ContentKeeper-Remover.",
                  slug: "kajigs/disable-extensions/ntentkeeper-remover",
                },
                {
                  label: "Corrupt-Extensions---Corkey.",
                  slug: "kajigs/disable-extensions/rrupt-extensions-corkey",
                },
                {
                  label: "Corrupt-Extensions---Crimson.",
                  slug: "kajigs/disable-extensions/rrupt-extensions-crimson",
                },
                {
                  label: "Disable-Ext.---Crosh-and-VMC",
                  slug: "kajigs/disable-extensions/sable-ext-crosh-and-vmc",
                },
                {
                  label: "Disable-Extensions---DPS.",
                  slug: "kajigs/disable-extensions/sable-extensions-dps",
                },
                {
                  label: "Disable-Extensions---HSTS.",
                  slug: "kajigs/disable-extensions/sable-extensions-hsts",
                },
                {
                  label: "Disable-Extensions-(with-Debug).",
                  slug: "kajigs/disable-extensions/sable-extensions-with-debug",
                },
                {
                  label: "Disable-Ext.---Laughing-Gas",
                  slug: "kajigs/disable-extensions/sable-ext-laughing-gas",
                },
                {
                  label: "Disable-Ext.---Task-Manager",
                  slug: "kajigs/disable-extensions/sable-ext-task-manager",
                },
                {
                  label: "Ext.-Corruption---Cookie-Dough",
                  slug: "kajigs/disable-extensions/t-corruption-cookie-dough",
                },
                {
                  label: "Ext.-Killer---K1LL3R-SP1D3R",
                  slug: "kajigs/disable-extensions/t-killer-k1ll3r-sp1d3r",
                },
                {
                  label: "Ext-Remover-(Exploit-Hub).",
                  slug: "kajigs/disable-extensions/t-remover-exploit-hub",
                },
                {
                  label: "Offline-Ext.---BackAge",
                  slug: "kajigs/disable-extensions/fline-ext-backage",
                },
                {
                  label: "Remove-Extensions-(Crosh).",
                  slug: "kajigs/disable-extensions/move-extensions-crosh",
                },
                {
                  label: "WH4LE-(BEST-EXPLOIT).",
                  slug: "kajigs/disable-extensions/4le-best-exploit",
                },
              ],
            },
            {
              label: "dns-stuff",
              items: [
                { label: "CauDNS.", slug: "kajigs/dns-stuff/udns" },
                {
                  label: "CauDNS-(Name-Servers).",
                  slug: "kajigs/dns-stuff/udns-name-servers",
                },
                {
                  label: "Chrome-DNS-(BYOD-only).",
                  slug: "kajigs/dns-stuff/rome-dns-byod-only",
                },
                { label: "OmadaDNS.", slug: "kajigs/dns-stuff/adadns" },
              ],
            },
            {
              label: "downgrade",
              items: [
                {
                  label: "Downgrade-for-Sh1mmer-(RARE).",
                  slug: "kajigs/downgrade/wngrade-for-sh1mmer-rare",
                },
                {
                  label: "Downgrade-(kernver-3).",
                  slug: "kajigs/downgrade/wngrade-kernver-3",
                },
                {
                  label: "Downgrade-Versions.",
                  slug: "kajigs/downgrade/wngrade-versions",
                },
              ],
            },
            {
              label: "extension-specific",
              items: [
                {
                  label: "e-halycon",
                  items: [],
                },
                {
                  label: "goguardian",
                  items: [
                    {
                      label: "GoGuardian-Anti-Tab-Close.",
                      slug: "kajigs/extension-specific/goguardian/guardian-anti-tab-close",
                    },
                    {
                      label: "GoGuardian-Browse-Lock-Bypass.",
                      slug: "kajigs/extension-specific/goguardian/guardian-browse-lock-bypass",
                    },
                    {
                      label: "GoGuardian-Bypass-(Limited).",
                      slug: "kajigs/extension-specific/goguardian/guardian-bypass-limited",
                    },
                    {
                      label: "GoGuardian-Chat-Bypass.",
                      slug: "kajigs/extension-specific/goguardian/guardian-chat-bypass",
                    },
                    {
                      label: "GoGuardian-Cork.",
                      slug: "kajigs/extension-specific/goguardian/guardian-cork",
                    },
                    {
                      label: "GoGuardian-Crasher-(WebGL).",
                      slug: "kajigs/extension-specific/goguardian/guardian-crasher-webgl",
                    },
                    {
                      label: "GoGuardian-Fever.",
                      slug: "kajigs/extension-specific/goguardian/guardian-fever",
                    },
                    {
                      label: "GoGuardian-Lock-Bypass-2.",
                      slug: "kajigs/extension-specific/goguardian/guardian-lock-bypass-2",
                    },
                    {
                      label: "GoGuardian-Lock-Bypass.",
                      slug: "kajigs/extension-specific/goguardian/guardian-lock-bypass",
                    },
                    {
                      label: "GoGuardian-Offliner.",
                      slug: "kajigs/extension-specific/goguardian/guardian-offliner",
                    },
                    {
                      label: "GoGuardian-Req-(NoGuardian).",
                      slug: "kajigs/extension-specific/goguardian/guardian-req-noguardian",
                    },
                    {
                      label: "GoGuardian-Restart.",
                      slug: "kajigs/extension-specific/goguardian/guardian-restart",
                    },
                    {
                      label: "GoGuardian-Spam.",
                      slug: "kajigs/extension-specific/goguardian/guardian-spam",
                    },
                    {
                      label: "GoGuardian-Tab-Bypass-2.",
                      slug: "kajigs/extension-specific/goguardian/guardian-tab-bypass-2",
                    },
                    {
                      label: "GoGuardian-Tab-Bypass.",
                      slug: "kajigs/extension-specific/goguardian/guardian-tab-bypass",
                    },
                    {
                      label: "GoGuardian-uBlock.",
                      slug: "kajigs/extension-specific/goguardian/guardian-ublock",
                    },
                  ],
                },
                {
                  label: "hapara",
                  items: [
                    {
                      label: "Hapara-and-iBoss-Alphabetic.",
                      slug: "kajigs/extension-specific/hapara/para-and-iboss-alphabetic",
                    },
                    {
                      label: "Hapara-Chaos.",
                      slug: "kajigs/extension-specific/hapara/para-chaos",
                    },
                    {
                      label: "Hapara-Focus-Session-Bypass.",
                      slug: "kajigs/extension-specific/hapara/para-focus-session-bypass",
                    },
                    {
                      label: "Hapara-Lock-Screen-Bypass.",
                      slug: "kajigs/extension-specific/hapara/para-lock-screen-bypass",
                    },
                    {
                      label: "Hapara-Portable-Searching.",
                      slug: "kajigs/extension-specific/hapara/para-portable-searching",
                    },
                  ],
                },
                {
                  label: "iboss",
                  items: [
                    {
                      label: "iBoss-and-Blocksi-UBoss.",
                      slug: "kajigs/extension-specific/iboss/oss-and-blocksi-uboss",
                    },
                    {
                      label: "iBoss-Ingot-(LTBEEF).",
                      slug: "kajigs/extension-specific/iboss/oss-ingot-ltbeef",
                    },
                    {
                      label: "iBoss---The-Link-Bypass.",
                      slug: "kajigs/extension-specific/iboss/oss-the-link-bypass",
                    },
                  ],
                },
                {
                  label: "lightspeed",
                  items: [
                    {
                      label: "Lightspeed-Stealth.",
                      slug: "kajigs/extension-specific/lightspeed/ghtspeed-stealth",
                    },
                  ],
                },
                {
                  label: "securly",
                  items: [
                    {
                      label: "Securly-Breaker-(Killcurly-2).",
                      slug: "kajigs/extension-specific/securly/curly-breaker-killcurly-2",
                    },
                    {
                      label: "Securly-Breaker-(Killcurly).",
                      slug: "kajigs/extension-specific/securly/curly-breaker-killcurly",
                    },
                    {
                      label: "Securly-(Insecurly).",
                      slug: "kajigs/extension-specific/securly/curly-insecurly",
                    },
                    {
                      label: "Securly-Javascript-(BetterCurly).",
                      slug: "kajigs/extension-specific/securly/curly-javascript-bettercurly",
                    },
                    {
                      label: "Securly---The-Link-Bypass-2.",
                      slug: "kajigs/extension-specific/securly/curly-the-link-bypass-2",
                    },
                    {
                      label: "Securly---The-Link-Bypass.",
                      slug: "kajigs/extension-specific/securly/curly-the-link-bypass",
                    },
                    {
                      label: "Securly-uBlock.",
                      slug: "kajigs/extension-specific/securly/curly-ublock",
                    },
                  ],
                },
                {
                  label: "The-Fog-Bypass-(E-Halcyon).",
                  slug: "kajigs/extension-specific/e-fog-bypass-e-halcyon",
                },
              ],
            },
            {
              label: "freezing",
              items: [
                {
                  label: "Freeze-Extensions---Dextensify.",
                  slug: "kajigs/freezing/eeze-extensions-dextensify",
                },
                {
                  label: "Freeze-Extensions---ExtHang3r.",
                  slug: "kajigs/freezing/eeze-extensions-exthang3r",
                },
                {
                  label: "Freeze-Extensions---Sigill.",
                  slug: "kajigs/freezing/eeze-extensions-sigill",
                },
                {
                  label: "LTETC",
                  items: [
                    { label: "baby", slug: "kajigs/freezing/ltetc/by" },
                    { label: "flood", slug: "kajigs/freezing/ltetc/ood" },
                    {
                      label: "LTBEEF-(Disable-Extensions).",
                      slug: "kajigs/freezing/ltetc/beef-disable-extensions",
                    },
                    {
                      label: "LTBEEF-Inspect.",
                      slug: "kajigs/freezing/ltetc/beef-inspect",
                    },
                    {
                      label: "LTBEEF-Service-Workers-(JPCMG).",
                      slug: "kajigs/freezing/ltetc/beef-service-workers-jpcmg",
                    },
                    {
                      label: "LTMEAT-(Disable-Extensions).",
                      slug: "kajigs/freezing/ltetc/meat-disable-extensions",
                    },
                    {
                      label: "LTMEAT-(Easy).",
                      slug: "kajigs/freezing/ltetc/meat-easy",
                    },
                    {
                      label: "LTMEAT-Flood-(Easy).",
                      slug: "kajigs/freezing/ltetc/meat-flood-easy",
                    },
                    {
                      label: "LTMEAT-Flood.",
                      slug: "kajigs/freezing/ltetc/meat-flood",
                    },
                    {
                      label: "LTMEAT-Print-(Anesthesia).",
                      slug: "kajigs/freezing/ltetc/meat-print-anesthesia",
                    },
                    {
                      label: "LTMEAT-Temp.",
                      slug: "kajigs/freezing/ltetc/meat-temp",
                    },
                    { label: "LTVEGAN.", slug: "kajigs/freezing/ltetc/vegan" },
                    { label: "OG", slug: "kajigs/freezing/ltetc/og" },
                  ],
                },
              ],
            },
            {
              label: "mid",
              items: [
                {
                  label: "History-Deletion.",
                  slug: "kajigs/mid/story-deletion",
                },
                { label: "History-Flooder.", slug: "kajigs/mid/story-flooder" },
                { label: "History-Wiper.", slug: "kajigs/mid/story-wiper" },
              ],
            },
            {
              label: "run-scripts",
              items: [
                {
                  label: "Javascript-Executor.",
                  slug: "kajigs/run-scripts/vascript-executor",
                },
                { label: "Point-Blank.", slug: "kajigs/run-scripts/int-blank" },
                {
                  label: "Point-Blank-New-(Swamp).",
                  slug: "kajigs/run-scripts/int-blank-new-swamp",
                },
                {
                  label: "Run-Code-2-(uRun-for-uBlock).",
                  slug: "kajigs/run-scripts/n-code-2-urun-for-ublock",
                },
                {
                  label: "Run-Code-(Snap-and-Run).",
                  slug: "kajigs/run-scripts/n-code-snap-and-run",
                },
                {
                  label: "Run-Code-(with-uBlock).",
                  slug: "kajigs/run-scripts/n-code-with-ublock",
                },
                {
                  label: "Script-Runner---Tr3nch.",
                  slug: "kajigs/run-scripts/ript-runner-tr3nch",
                },
              ],
            },
            {
              label: "skid-info",
              items: [
                {
                  label: "Board-Name-and-Model.",
                  slug: "kajigs/skid-info/ard-name-and-model",
                },
                {
                  label: "ChromeOS-Boards.",
                  slug: "kajigs/skid-info/romeos-boards",
                },
                {
                  label: "ChromeOS-Files.",
                  slug: "kajigs/skid-info/romeos-files",
                },
                {
                  label: "Chromium-Info.",
                  slug: "kajigs/skid-info/romium-info",
                },
                {
                  label: "Extension-IDs.",
                  slug: "kajigs/skid-info/tension-ids",
                },
                {
                  label: "Making-a-bookmarklet.",
                  slug: "kajigs/skid-info/king-a-bookmarklet",
                },
                { label: "Powerwash.", slug: "kajigs/skid-info/werwash" },
                {
                  label: "View-Source-Bypass.",
                  slug: "kajigs/skid-info/ew-source-bypass",
                },
              ],
            },
            {
              label: "unblocking",
              items: [
                {
                  label: "Allow-access-to-file-URLs-Exploit.",
                  slug: "kajigs/unblocking/low-access-to-file-urls-exploit",
                },
                {
                  label: "BrowserAction-Crasher-(to-v123).",
                  slug: "kajigs/unblocking/owseraction-crasher-to-v123",
                },
                {
                  label: "ChromeOS-Terminal-Redirector.",
                  slug: "kajigs/unblocking/romeos-terminal-redirector",
                },
                {
                  label: "Document-Exploit.",
                  slug: "kajigs/unblocking/cument-exploit",
                },
                {
                  label: "Google-Translate-Unblocker.",
                  slug: "kajigs/unblocking/ogle-translate-unblocker",
                },
                { label: "SimplyVPN.", slug: "kajigs/unblocking/mplyvpn" },
                {
                  label: "SOT-Exploit---One-Tab.",
                  slug: "kajigs/unblocking/t-exploit-one-tab",
                },
                {
                  label: "Tab-Group-Exploit.",
                  slug: "kajigs/unblocking/b-group-exploit",
                },
              ],
            },
            {
              label: "unenrollment-related",
              items: [
                {
                  label: "CRSH1TTY-(Disable-WP).",
                  slug: "kajigs/unenrollment-related/sh1tty-disable-wp",
                },
                {
                  label: "CRSH2TTY-(Unenrollment).",
                  slug: "kajigs/unenrollment-related/sh2tty-unenrollment",
                },
                {
                  label: "Custom-User-Policy---Pollen.",
                  slug: "kajigs/unenrollment-related/stom-user-policy-pollen",
                },
                {
                  label: "Developer-Mode.",
                  slug: "kajigs/unenrollment-related/veloper-mode",
                },
                {
                  label: "Disable-Hardware-WP-via-CCD.",
                  slug: "kajigs/unenrollment-related/sable-hardware-wp-via-ccd",
                },
                {
                  label: "Enterprise-Enrollment-Glitch.",
                  slug: "kajigs/unenrollment-related/terprise-enrollment-glitch",
                },
                {
                  label: "Extension-Inactivity.",
                  slug: "kajigs/unenrollment-related/tension-inactivity",
                },
                {
                  label: "Fake-Dev-Mode-(Fakemurk).",
                  slug: "kajigs/unenrollment-related/ke-dev-mode-fakemurk",
                },
                {
                  label: "Grunt-Treeya-Unenrollment.",
                  slug: "kajigs/unenrollment-related/unt-treeya-unenrollment",
                },
                {
                  label: "KVS-(Kernel-Version-Switcher).",
                  slug: "kajigs/unenrollment-related/s-kernel-version-switcher",
                },
                {
                  label: "Make-money-unenrolling-(Joke).",
                  slug: "kajigs/unenrollment-related/ke-money-unenrolling-joke",
                },
                {
                  label: "Recovery-Images-(chrome100).",
                  slug: "kajigs/unenrollment-related/covery-images-chrome100",
                },
                {
                  label: "RigTools-(v128).",
                  slug: "kajigs/unenrollment-related/gtools-v128",
                },
                {
                  label: "Root-ChromeOS-with-Tunety.",
                  slug: "kajigs/unenrollment-related/ot-chromeos-with-tunety",
                },
                {
                  label: "Sh1mmer-fix---Reentry.",
                  slug: "kajigs/unenrollment-related/1mmer-fix-reentry",
                },
                {
                  label: "Sh1mmer-v111---v113.",
                  slug: "kajigs/unenrollment-related/1mmer-v111-v113",
                },
                {
                  label: "Shimboot.",
                  slug: "kajigs/unenrollment-related/imboot",
                },
                {
                  label: "Unenrollment---BadRecovery.",
                  slug: "kajigs/unenrollment-related/enrollment-badrecovery",
                },
                {
                  label: "Unenrollment---BR1CK.",
                  slug: "kajigs/unenrollment-related/enrollment-br1ck",
                },
                {
                  label: "Unenrollment-(Crosh)-(to-v100).",
                  slug: "kajigs/unenrollment-related/enrollment-crosh-to-v100",
                },
                {
                  label: "Unenrollment---CryptoSmite.",
                  slug: "kajigs/unenrollment-related/enrollment-cryptosmite",
                },
                {
                  label: "Unenrollment-Guide.",
                  slug: "kajigs/unenrollment-related/enrollment-guide",
                },
                {
                  label: "Unenrollment---Icarus-(or-whatever-its-called).",
                  slug: "kajigs/unenrollment-related/enrollment-icarus-or-whatever-its-called",
                },
                {
                  label: "Unenrollment---Pencil-Method.",
                  slug: "kajigs/unenrollment-related/enrollment-pencil-method",
                },
                {
                  label: "Unenrollment---Sh1mmer.",
                  slug: "kajigs/unenrollment-related/enrollment-sh1mmer",
                },
                {
                  label: "User-Policy-Bypass-(to-v101).",
                  slug: "kajigs/unenrollment-related/er-policy-bypass-to-v101",
                },
              ],
            },
            {
              label: "webviewish",
              items: [
                {
                  label: "ASH-(Skiovox-Downloaded).",
                  slug: "kajigs/webviewish/h-skiovox-downloaded",
                },
                {
                  label: "Guest-Mode-(up-to-v130).",
                  slug: "kajigs/webviewish/est-mode-up-to-v130",
                },
                {
                  label: "Guest-Mode-(v131+).",
                  slug: "kajigs/webviewish/est-mode-v131",
                },
                {
                  label: "Incognito-(v105).",
                  slug: "kajigs/webviewish/cognito-v105",
                },
                {
                  label: "Incognito-(v123-v127).",
                  slug: "kajigs/webviewish/cognito-v123-v127",
                },
                {
                  label: "Incognito-(v128).",
                  slug: "kajigs/webviewish/cognito-v128",
                },
                {
                  label: "Incognito-(v81).",
                  slug: "kajigs/webviewish/cognito-v81",
                },
                {
                  label: "KIOSK-Exploit-(up-to-v85).",
                  slug: "kajigs/webviewish/osk-exploit-up-to-v85",
                },
                {
                  label: "Locked-Mode-Bypass---V4PL.",
                  slug: "kajigs/webviewish/cked-mode-bypass-v4pl",
                },
                {
                  label: "Locked-Mode-Bypass-X.",
                  slug: "kajigs/webviewish/cked-mode-bypass-x",
                },
                {
                  label: "Locked-Mode-Hack---Bypass-Ext.",
                  slug: "kajigs/webviewish/cked-mode-hack-bypass-ext",
                },
                {
                  label: "Outlook-Exploit.",
                  slug: "kajigs/webviewish/tlook-exploit",
                },
                {
                  label: "PowerR3SET-(Kiosk-Apps)-(<v131).",
                  slug: "kajigs/webviewish/werr3set-kiosk-apps-v131",
                },
                {
                  label: "Shinxs-Lacros-Bypass-(v104).",
                  slug: "kajigs/webviewish/inxs-lacros-bypass-v104",
                },
                {
                  label: "Skiovox-Breakout.",
                  slug: "kajigs/webviewish/iovox-breakout",
                },
                {
                  label: "Skiovox-Helper.",
                  slug: "kajigs/webviewish/iovox-helper",
                },
                {
                  label: "Skiovox-v118.",
                  slug: "kajigs/webviewish/iovox-v118",
                },
                {
                  label: "Skiovox-v119---v120.",
                  slug: "kajigs/webviewish/iovox-v119-v120",
                },
                {
                  label: "Skiovox-v121.",
                  slug: "kajigs/webviewish/iovox-v121",
                },
                {
                  label: "Skiovox-v124.",
                  slug: "kajigs/webviewish/iovox-v124",
                },
                {
                  label: "Skiovox-v125---v126.",
                  slug: "kajigs/webviewish/iovox-v125-v126",
                },
                {
                  label: "Unrestricted-Browsing-(Skiovox).",
                  slug: "kajigs/webviewish/restricted-browsing-skiovox",
                },
                {
                  label: "Webview---Aptoide-on-now.gg",
                  slug: "kajigs/webviewish/bview-aptoide-on-now-gg",
                },
                {
                  label: "Webview---ASR.",
                  slug: "kajigs/webviewish/bview-asr",
                },
                {
                  label: "Webview---Chrome-Signin-2.",
                  slug: "kajigs/webviewish/bview-chrome-signin-2",
                },
                {
                  label: "Webview---Chrome-Signin.",
                  slug: "kajigs/webviewish/bview-chrome-signin",
                },
                {
                  label: "Webview---Classlink.",
                  slug: "kajigs/webviewish/bview-classlink",
                },
                {
                  label: "Webview---Coding-With-Chrome.",
                  slug: "kajigs/webviewish/bview-coding-with-chrome",
                },
                {
                  label: "Webview---College-Board.",
                  slug: "kajigs/webviewish/bview-college-board",
                },
                {
                  label: "Webview---Edcite.",
                  slug: "kajigs/webviewish/bview-edcite",
                },
                {
                  label: "Webview---Edulastic.",
                  slug: "kajigs/webviewish/bview-edulastic",
                },
                {
                  label: "Webview---FastBridge-Learning.",
                  slug: "kajigs/webviewish/bview-fastbridge-learning",
                },
                {
                  label: "Webview---Fusion360.",
                  slug: "kajigs/webviewish/bview-fusion360",
                },
                {
                  label: "Webview---Geogebra.",
                  slug: "kajigs/webviewish/bview-geogebra",
                },
                {
                  label: "Webview---Google-Apps.",
                  slug: "kajigs/webviewish/bview-google-apps",
                },
                {
                  label: "Webview---Illuminate-Secure.",
                  slug: "kajigs/webviewish/bview-illuminate-secure",
                },
                {
                  label: "Webview---Kahoot.",
                  slug: "kajigs/webviewish/bview-kahoot",
                },
                {
                  label: "Webview---Lego-Wedo.",
                  slug: "kajigs/webviewish/bview-lego-wedo",
                },
                {
                  label: "Webview---MyViewBoard.",
                  slug: "kajigs/webviewish/bview-myviewboard",
                },
                {
                  label: "Webview---Orbitnote.",
                  slug: "kajigs/webviewish/bview-orbitnote",
                },
                {
                  label: "Webview---QuickView.",
                  slug: "kajigs/webviewish/bview-quickview",
                },
                {
                  label: "Webview---Riverside-Data.",
                  slug: "kajigs/webviewish/bview-riverside-data",
                },
                {
                  label: "Webview---Side-Panel-(v108-v112).",
                  slug: "kajigs/webviewish/bview-side-panel-v108-v112",
                },
                {
                  label: "Webview---Star-Assessments-2.0",
                  slug: "kajigs/webviewish/bview-star-assessments-2-0",
                },
                {
                  label: "Webview---TestNav.",
                  slug: "kajigs/webviewish/bview-testnav",
                },
              ],
            },
            {
              label: "workarounds",
              items: [
                {
                  label: "Bookmarklet-Runner---Sh0vel.",
                  slug: "kajigs/workarounds/okmarklet-runner-sh0vel",
                },
                {
                  label: "Connect-to-Wifi-Unenrolled.",
                  slug: "kajigs/workarounds/nnect-to-wifi-unenrolled",
                },
                {
                  label: "ExtensionInstallAllowlist-Opener.",
                  slug: "kajigs/workarounds/tensioninstallallowlist-opener",
                },
                {
                  label: "Extension-Installer.",
                  slug: "kajigs/workarounds/tension-installer",
                },
                {
                  label: "IFrame-Runner-(with-Scratch).",
                  slug: "kajigs/workarounds/rame-runner-with-scratch",
                },
                {
                  label: "Install-ext.---Lacros-Bypass-(v96)",
                  slug: "kajigs/workarounds/stall-ext-lacros-bypass-v96",
                },
                {
                  label: "Network-Filter-Bypass-[DNS].",
                  slug: "kajigs/workarounds/twork-filter-bypass-dns",
                },
                {
                  label: "New-Chrome,-Old-CrOS.",
                  slug: "kajigs/workarounds/w-chrome-old-cros",
                },
                {
                  label: "Personal-Account---OOBESCAPE.",
                  slug: "kajigs/workarounds/rsonal-account-oobescape",
                },
                {
                  label: "Play-Store-Bypass-(v106).",
                  slug: "kajigs/workarounds/ay-store-bypass-v106",
                },
                {
                  label: "Search-Unblocked.",
                  slug: "kajigs/workarounds/arch-unblocked",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
