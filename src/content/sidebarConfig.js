// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "exp-docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Docs",
          items: [
            { label: "credits", slug: "credits-md" },
            { label: "index", slug: "index-md" },
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
                  slug: "kajigs/block-updates-among-us-exploit",
                },
                {
                  label: "CAUB---Chrome-Auto-Update-Blocker.",
                  slug: "kajigs/block-updates-caub-chrome-auto-update-blocker",
                },
                {
                  label: "CAUB-+-DNS-+-Proxy-Editor.html",
                  slug: "kajigs/block-updates-caub-dns-proxy-editor-html",
                },
                {
                  label: "CAUB-Flags.",
                  slug: "kajigs/block-updates-caub-flags",
                },
                {
                  label: "CAUB-on-Fentanyl.",
                  slug: "kajigs/block-updates-caub-on-fentanyl",
                },
              ],
            },
            {
              label: "device-edit",
              items: [
                {
                  label: 'Bypass-"reported-lost-or-stolen".',
                  slug: "kajigs/device-edit-bypass-reported-lost-or-stolen",
                },
                {
                  label: "Change-Background.",
                  slug: "kajigs/device-edit-change-background",
                },
                {
                  label: "Change-Wallpaper-(v99-v104).",
                  slug: "kajigs/device-edit-change-wallpaper-v99-v104",
                },
                { label: "Skebstore.", slug: "kajigs/device-edit-skebstore" },
                {
                  label: "Unblock-Crosh-(Ext.-or-Terminal)",
                  slug: "kajigs/device-edit-unblock-crosh-ext-or-terminal",
                },
                {
                  label: "Unblock-Crosh-(Kiosk-Apps).",
                  slug: "kajigs/device-edit-unblock-crosh-kiosk-apps",
                },
                {
                  label: "Unblocked-Dev-Tools-+-Flags.",
                  slug: "kajigs/device-edit-unblocked-dev-tools-flags",
                },
                {
                  label: "Unblock-Extensions-(Blank3r).",
                  slug: "kajigs/device-edit-unblock-extensions-blank3r",
                },
              ],
            },
            {
              label: "disable-extensions",
              items: [
                {
                  label: "Classroom.cloud-Disabler",
                  slug: "kajigs/disable-extensions-classroom-cloud-disabler",
                },
                {
                  label: "ContentKeeper-Remover.",
                  slug: "kajigs/disable-extensions-contentkeeper-remover",
                },
                {
                  label: "Corrupt-Extensions---Corkey.",
                  slug: "kajigs/disable-extensions-corrupt-extensions-corkey",
                },
                {
                  label: "Corrupt-Extensions---Crimson.",
                  slug: "kajigs/disable-extensions-corrupt-extensions-crimson",
                },
                {
                  label: "Disable-Ext.---Crosh-and-VMC",
                  slug: "kajigs/disable-extensions-disable-ext-crosh-and-vmc",
                },
                {
                  label: "Disable-Extensions---DPS.",
                  slug: "kajigs/disable-extensions-disable-extensions-dps",
                },
                {
                  label: "Disable-Extensions---HSTS.",
                  slug: "kajigs/disable-extensions-disable-extensions-hsts",
                },
                {
                  label: "Disable-Extensions-(with-Debug).",
                  slug: "kajigs/disable-extensions-disable-extensions-with-debug",
                },
                {
                  label: "Disable-Ext.---Laughing-Gas",
                  slug: "kajigs/disable-extensions-disable-ext-laughing-gas",
                },
                {
                  label: "Disable-Ext.---Task-Manager",
                  slug: "kajigs/disable-extensions-disable-ext-task-manager",
                },
                {
                  label: "Ext.-Corruption---Cookie-Dough",
                  slug: "kajigs/disable-extensions-ext-corruption-cookie-dough",
                },
                {
                  label: "Ext.-Killer---K1LL3R-SP1D3R",
                  slug: "kajigs/disable-extensions-ext-killer-k1ll3r-sp1d3r",
                },
                {
                  label: "Ext-Remover-(Exploit-Hub).",
                  slug: "kajigs/disable-extensions-ext-remover-exploit-hub",
                },
                {
                  label: "Offline-Ext.---BackAge",
                  slug: "kajigs/disable-extensions-offline-ext-backage",
                },
                {
                  label: "Remove-Extensions-(Crosh).",
                  slug: "kajigs/disable-extensions-remove-extensions-crosh",
                },
                {
                  label: "WH4LE-(BEST-EXPLOIT).",
                  slug: "kajigs/disable-extensions-wh4le-best-exploit",
                },
              ],
            },
            {
              label: "dns-stuff",
              items: [
                { label: "CauDNS.", slug: "kajigs/dns-stuff-caudns" },
                {
                  label: "CauDNS-(Name-Servers).",
                  slug: "kajigs/dns-stuff-caudns-name-servers",
                },
                {
                  label: "Chrome-DNS-(BYOD-only).",
                  slug: "kajigs/dns-stuff-chrome-dns-byod-only",
                },
                { label: "OmadaDNS.", slug: "kajigs/dns-stuff-omadadns" },
              ],
            },
            {
              label: "downgrade",
              items: [
                {
                  label: "Downgrade-for-Sh1mmer-(RARE).",
                  slug: "kajigs/downgrade-downgrade-for-sh1mmer-rare",
                },
                {
                  label: "Downgrade-(kernver-3).",
                  slug: "kajigs/downgrade-downgrade-kernver-3",
                },
                {
                  label: "Downgrade-Versions.",
                  slug: "kajigs/downgrade-downgrade-versions",
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
                      slug: "kajigs/extension-specific-goguardian-goguardian-anti-tab-close",
                    },
                    {
                      label: "GoGuardian-Browse-Lock-Bypass.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-browse-lock-bypass",
                    },
                    {
                      label: "GoGuardian-Bypass-(Limited).",
                      slug: "kajigs/extension-specific-goguardian-goguardian-bypass-limited",
                    },
                    {
                      label: "GoGuardian-Chat-Bypass.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-chat-bypass",
                    },
                    {
                      label: "GoGuardian-Cork.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-cork",
                    },
                    {
                      label: "GoGuardian-Crasher-(WebGL).",
                      slug: "kajigs/extension-specific-goguardian-goguardian-crasher-webgl",
                    },
                    {
                      label: "GoGuardian-Fever.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-fever",
                    },
                    {
                      label: "GoGuardian-Lock-Bypass-2.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-lock-bypass-2",
                    },
                    {
                      label: "GoGuardian-Lock-Bypass.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-lock-bypass",
                    },
                    {
                      label: "GoGuardian-Offliner.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-offliner",
                    },
                    {
                      label: "GoGuardian-Req-(NoGuardian).",
                      slug: "kajigs/extension-specific-goguardian-goguardian-req-noguardian",
                    },
                    {
                      label: "GoGuardian-Restart.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-restart",
                    },
                    {
                      label: "GoGuardian-Spam.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-spam",
                    },
                    {
                      label: "GoGuardian-Tab-Bypass-2.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-tab-bypass-2",
                    },
                    {
                      label: "GoGuardian-Tab-Bypass.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-tab-bypass",
                    },
                    {
                      label: "GoGuardian-uBlock.",
                      slug: "kajigs/extension-specific-goguardian-goguardian-ublock",
                    },
                  ],
                },
                {
                  label: "hapara",
                  items: [
                    {
                      label: "Hapara-and-iBoss-Alphabetic.",
                      slug: "kajigs/extension-specific-hapara-hapara-and-iboss-alphabetic",
                    },
                    {
                      label: "Hapara-Chaos.",
                      slug: "kajigs/extension-specific-hapara-hapara-chaos",
                    },
                    {
                      label: "Hapara-Focus-Session-Bypass.",
                      slug: "kajigs/extension-specific-hapara-hapara-focus-session-bypass",
                    },
                    {
                      label: "Hapara-Lock-Screen-Bypass.",
                      slug: "kajigs/extension-specific-hapara-hapara-lock-screen-bypass",
                    },
                    {
                      label: "Hapara-Portable-Searching.",
                      slug: "kajigs/extension-specific-hapara-hapara-portable-searching",
                    },
                  ],
                },
                {
                  label: "iboss",
                  items: [
                    {
                      label: "iBoss-and-Blocksi-UBoss.",
                      slug: "kajigs/extension-specific-iboss-iboss-and-blocksi-uboss",
                    },
                    {
                      label: "iBoss-Ingot-(LTBEEF).",
                      slug: "kajigs/extension-specific-iboss-iboss-ingot-ltbeef",
                    },
                    {
                      label: "iBoss---The-Link-Bypass.",
                      slug: "kajigs/extension-specific-iboss-iboss-the-link-bypass",
                    },
                  ],
                },
                {
                  label: "lightspeed",
                  items: [
                    {
                      label: "Lightspeed-Stealth.",
                      slug: "kajigs/extension-specific-lightspeed-lightspeed-stealth",
                    },
                  ],
                },
                {
                  label: "securly",
                  items: [
                    {
                      label: "Securly-Breaker-(Killcurly-2).",
                      slug: "kajigs/extension-specific-securly-securly-breaker-killcurly-2",
                    },
                    {
                      label: "Securly-Breaker-(Killcurly).",
                      slug: "kajigs/extension-specific-securly-securly-breaker-killcurly",
                    },
                    {
                      label: "Securly-(Insecurly).",
                      slug: "kajigs/extension-specific-securly-securly-insecurly",
                    },
                    {
                      label: "Securly-Javascript-(BetterCurly).",
                      slug: "kajigs/extension-specific-securly-securly-javascript-bettercurly",
                    },
                    {
                      label: "Securly---The-Link-Bypass-2.",
                      slug: "kajigs/extension-specific-securly-securly-the-link-bypass-2",
                    },
                    {
                      label: "Securly---The-Link-Bypass.",
                      slug: "kajigs/extension-specific-securly-securly-the-link-bypass",
                    },
                    {
                      label: "Securly-uBlock.",
                      slug: "kajigs/extension-specific-securly-securly-ublock",
                    },
                  ],
                },
                {
                  label: "The-Fog-Bypass-(E-Halcyon).",
                  slug: "kajigs/extension-specific-the-fog-bypass-e-halcyon",
                },
              ],
            },
            {
              label: "freezing",
              items: [
                {
                  label: "Freeze-Extensions---Dextensify.",
                  slug: "kajigs/freezing-freeze-extensions-dextensify",
                },
                {
                  label: "Freeze-Extensions---ExtHang3r.",
                  slug: "kajigs/freezing-freeze-extensions-exthang3r",
                },
                {
                  label: "Freeze-Extensions---Sigill.",
                  slug: "kajigs/freezing-freeze-extensions-sigill",
                },
                {
                  label: "LTETC",
                  items: [
                    { label: "baby", slug: "kajigs/freezing-ltetc-baby" },
                    { label: "flood", slug: "kajigs/freezing-ltetc-flood" },
                    {
                      label: "LTBEEF-(Disable-Extensions).",
                      slug: "kajigs/freezing-ltetc-ltbeef-disable-extensions",
                    },
                    {
                      label: "LTBEEF-Inspect.",
                      slug: "kajigs/freezing-ltetc-ltbeef-inspect",
                    },
                    {
                      label: "LTBEEF-Service-Workers-(JPCMG).",
                      slug: "kajigs/freezing-ltetc-ltbeef-service-workers-jpcmg",
                    },
                    {
                      label: "LTMEAT-(Disable-Extensions).",
                      slug: "kajigs/freezing-ltetc-ltmeat-disable-extensions",
                    },
                    {
                      label: "LTMEAT-(Easy).",
                      slug: "kajigs/freezing-ltetc-ltmeat-easy",
                    },
                    {
                      label: "LTMEAT-Flood-(Easy).",
                      slug: "kajigs/freezing-ltetc-ltmeat-flood-easy",
                    },
                    {
                      label: "LTMEAT-Flood.",
                      slug: "kajigs/freezing-ltetc-ltmeat-flood",
                    },
                    {
                      label: "LTMEAT-Print-(Anesthesia).",
                      slug: "kajigs/freezing-ltetc-ltmeat-print-anesthesia",
                    },
                    {
                      label: "LTMEAT-Temp.",
                      slug: "kajigs/freezing-ltetc-ltmeat-temp",
                    },
                    {
                      label: "LTVEGAN.",
                      slug: "kajigs/freezing-ltetc-ltvegan",
                    },
                    { label: "OG", slug: "kajigs/freezing-ltetc-og" },
                  ],
                },
              ],
            },
            {
              label: "mid",
              items: [
                {
                  label: "History-Deletion.",
                  slug: "kajigs/mid-history-deletion",
                },
                {
                  label: "History-Flooder.",
                  slug: "kajigs/mid-history-flooder",
                },
                { label: "History-Wiper.", slug: "kajigs/mid-history-wiper" },
              ],
            },
            {
              label: "run-scripts",
              items: [
                {
                  label: "Javascript-Executor.",
                  slug: "kajigs/run-scripts-javascript-executor",
                },
                {
                  label: "Point-Blank.",
                  slug: "kajigs/run-scripts-point-blank",
                },
                {
                  label: "Point-Blank-New-(Swamp).",
                  slug: "kajigs/run-scripts-point-blank-new-swamp",
                },
                {
                  label: "Run-Code-2-(uRun-for-uBlock).",
                  slug: "kajigs/run-scripts-run-code-2-urun-for-ublock",
                },
                {
                  label: "Run-Code-(Snap-and-Run).",
                  slug: "kajigs/run-scripts-run-code-snap-and-run",
                },
                {
                  label: "Run-Code-(with-uBlock).",
                  slug: "kajigs/run-scripts-run-code-with-ublock",
                },
                {
                  label: "Script-Runner---Tr3nch.",
                  slug: "kajigs/run-scripts-script-runner-tr3nch",
                },
              ],
            },
            {
              label: "skid-info",
              items: [
                {
                  label: "Board-Name-and-Model.",
                  slug: "kajigs/skid-info-board-name-and-model",
                },
                {
                  label: "ChromeOS-Boards.",
                  slug: "kajigs/skid-info-chromeos-boards",
                },
                {
                  label: "ChromeOS-Files.",
                  slug: "kajigs/skid-info-chromeos-files",
                },
                {
                  label: "Chromium-Info.",
                  slug: "kajigs/skid-info-chromium-info",
                },
                {
                  label: "Extension-IDs.",
                  slug: "kajigs/skid-info-extension-ids",
                },
                {
                  label: "Making-a-bookmarklet.",
                  slug: "kajigs/skid-info-making-a-bookmarklet",
                },
                { label: "Powerwash.", slug: "kajigs/skid-info-powerwash" },
                {
                  label: "View-Source-Bypass.",
                  slug: "kajigs/skid-info-view-source-bypass",
                },
              ],
            },
            {
              label: "unblocking",
              items: [
                {
                  label: "Allow-access-to-file-URLs-Exploit.",
                  slug: "kajigs/unblocking-allow-access-to-file-urls-exploit",
                },
                {
                  label: "BrowserAction-Crasher-(to-v123).",
                  slug: "kajigs/unblocking-browseraction-crasher-to-v123",
                },
                {
                  label: "ChromeOS-Terminal-Redirector.",
                  slug: "kajigs/unblocking-chromeos-terminal-redirector",
                },
                {
                  label: "Document-Exploit.",
                  slug: "kajigs/unblocking-document-exploit",
                },
                {
                  label: "Google-Translate-Unblocker.",
                  slug: "kajigs/unblocking-google-translate-unblocker",
                },
                { label: "SimplyVPN.", slug: "kajigs/unblocking-simplyvpn" },
                {
                  label: "SOT-Exploit---One-Tab.",
                  slug: "kajigs/unblocking-sot-exploit-one-tab",
                },
                {
                  label: "Tab-Group-Exploit.",
                  slug: "kajigs/unblocking-tab-group-exploit",
                },
              ],
            },
            {
              label: "unenrollment-related",
              items: [
                {
                  label: "CRSH1TTY-(Disable-WP).",
                  slug: "kajigs/unenrollment-related-crsh1tty-disable-wp",
                },
                {
                  label: "CRSH2TTY-(Unenrollment).",
                  slug: "kajigs/unenrollment-related-crsh2tty-unenrollment",
                },
                {
                  label: "Custom-User-Policy---Pollen.",
                  slug: "kajigs/unenrollment-related-custom-user-policy-pollen",
                },
                {
                  label: "Developer-Mode.",
                  slug: "kajigs/unenrollment-related-developer-mode",
                },
                {
                  label: "Disable-Hardware-WP-via-CCD.",
                  slug: "kajigs/unenrollment-related-disable-hardware-wp-via-ccd",
                },
                {
                  label: "Enterprise-Enrollment-Glitch.",
                  slug: "kajigs/unenrollment-related-enterprise-enrollment-glitch",
                },
                {
                  label: "Extension-Inactivity.",
                  slug: "kajigs/unenrollment-related-extension-inactivity",
                },
                {
                  label: "Fake-Dev-Mode-(Fakemurk).",
                  slug: "kajigs/unenrollment-related-fake-dev-mode-fakemurk",
                },
                {
                  label: "Grunt-Treeya-Unenrollment.",
                  slug: "kajigs/unenrollment-related-grunt-treeya-unenrollment",
                },
                {
                  label: "KVS-(Kernel-Version-Switcher).",
                  slug: "kajigs/unenrollment-related-kvs-kernel-version-switcher",
                },
                {
                  label: "Make-money-unenrolling-(Joke).",
                  slug: "kajigs/unenrollment-related-make-money-unenrolling-joke",
                },
                {
                  label: "Recovery-Images-(chrome100).",
                  slug: "kajigs/unenrollment-related-recovery-images-chrome100",
                },
                {
                  label: "RigTools-(v128).",
                  slug: "kajigs/unenrollment-related-rigtools-v128",
                },
                {
                  label: "Root-ChromeOS-with-Tunety.",
                  slug: "kajigs/unenrollment-related-root-chromeos-with-tunety",
                },
                {
                  label: "Sh1mmer-fix---Reentry.",
                  slug: "kajigs/unenrollment-related-sh1mmer-fix-reentry",
                },
                {
                  label: "Sh1mmer-v111---v113.",
                  slug: "kajigs/unenrollment-related-sh1mmer-v111-v113",
                },
                {
                  label: "Shimboot.",
                  slug: "kajigs/unenrollment-related-shimboot",
                },
                {
                  label: "Unenrollment---BadRecovery.",
                  slug: "kajigs/unenrollment-related-unenrollment-badrecovery",
                },
                {
                  label: "Unenrollment---BR1CK.",
                  slug: "kajigs/unenrollment-related-unenrollment-br1ck",
                },
                {
                  label: "Unenrollment-(Crosh)-(to-v100).",
                  slug: "kajigs/unenrollment-related-unenrollment-crosh-to-v100",
                },
                {
                  label: "Unenrollment---CryptoSmite.",
                  slug: "kajigs/unenrollment-related-unenrollment-cryptosmite",
                },
                {
                  label: "Unenrollment-Guide.",
                  slug: "kajigs/unenrollment-related-unenrollment-guide",
                },
                {
                  label: "Unenrollment---Icarus-(or-whatever-its-called).",
                  slug: "kajigs/unenrollment-related-unenrollment-icarus-or-whatever-its-called",
                },
                {
                  label: "Unenrollment---Pencil-Method.",
                  slug: "kajigs/unenrollment-related-unenrollment-pencil-method",
                },
                {
                  label: "Unenrollment---Sh1mmer.",
                  slug: "kajigs/unenrollment-related-unenrollment-sh1mmer",
                },
                {
                  label: "User-Policy-Bypass-(to-v101).",
                  slug: "kajigs/unenrollment-related-user-policy-bypass-to-v101",
                },
              ],
            },
            {
              label: "webviewish",
              items: [
                {
                  label: "ASH-(Skiovox-Downloaded).",
                  slug: "kajigs/webviewish-ash-skiovox-downloaded",
                },
                {
                  label: "Guest-Mode-(up-to-v130).",
                  slug: "kajigs/webviewish-guest-mode-up-to-v130",
                },
                {
                  label: "Guest-Mode-(v131+).",
                  slug: "kajigs/webviewish-guest-mode-v131",
                },
                {
                  label: "Incognito-(v105).",
                  slug: "kajigs/webviewish-incognito-v105",
                },
                {
                  label: "Incognito-(v123-v127).",
                  slug: "kajigs/webviewish-incognito-v123-v127",
                },
                {
                  label: "Incognito-(v128).",
                  slug: "kajigs/webviewish-incognito-v128",
                },
                {
                  label: "Incognito-(v81).",
                  slug: "kajigs/webviewish-incognito-v81",
                },
                {
                  label: "KIOSK-Exploit-(up-to-v85).",
                  slug: "kajigs/webviewish-kiosk-exploit-up-to-v85",
                },
                {
                  label: "Locked-Mode-Bypass---V4PL.",
                  slug: "kajigs/webviewish-locked-mode-bypass-v4pl",
                },
                {
                  label: "Locked-Mode-Bypass-X.",
                  slug: "kajigs/webviewish-locked-mode-bypass-x",
                },
                {
                  label: "Locked-Mode-Hack---Bypass-Ext.",
                  slug: "kajigs/webviewish-locked-mode-hack-bypass-ext",
                },
                {
                  label: "Outlook-Exploit.",
                  slug: "kajigs/webviewish-outlook-exploit",
                },
                {
                  label: "PowerR3SET-(Kiosk-Apps)-(<v131).",
                  slug: "kajigs/webviewish-powerr3set-kiosk-apps-v131",
                },
                {
                  label: "Shinxs-Lacros-Bypass-(v104).",
                  slug: "kajigs/webviewish-shinxs-lacros-bypass-v104",
                },
                {
                  label: "Skiovox-Breakout.",
                  slug: "kajigs/webviewish-skiovox-breakout",
                },
                {
                  label: "Skiovox-Helper.",
                  slug: "kajigs/webviewish-skiovox-helper",
                },
                {
                  label: "Skiovox-v118.",
                  slug: "kajigs/webviewish-skiovox-v118",
                },
                {
                  label: "Skiovox-v119---v120.",
                  slug: "kajigs/webviewish-skiovox-v119-v120",
                },
                {
                  label: "Skiovox-v121.",
                  slug: "kajigs/webviewish-skiovox-v121",
                },
                {
                  label: "Skiovox-v124.",
                  slug: "kajigs/webviewish-skiovox-v124",
                },
                {
                  label: "Skiovox-v125---v126.",
                  slug: "kajigs/webviewish-skiovox-v125-v126",
                },
                {
                  label: "Unrestricted-Browsing-(Skiovox).",
                  slug: "kajigs/webviewish-unrestricted-browsing-skiovox",
                },
                {
                  label: "Webview---Aptoide-on-now.gg",
                  slug: "kajigs/webviewish-webview-aptoide-on-now-gg",
                },
                {
                  label: "Webview---ASR.",
                  slug: "kajigs/webviewish-webview-asr",
                },
                {
                  label: "Webview---Chrome-Signin-2.",
                  slug: "kajigs/webviewish-webview-chrome-signin-2",
                },
                {
                  label: "Webview---Chrome-Signin.",
                  slug: "kajigs/webviewish-webview-chrome-signin",
                },
                {
                  label: "Webview---Classlink.",
                  slug: "kajigs/webviewish-webview-classlink",
                },
                {
                  label: "Webview---Coding-With-Chrome.",
                  slug: "kajigs/webviewish-webview-coding-with-chrome",
                },
                {
                  label: "Webview---College-Board.",
                  slug: "kajigs/webviewish-webview-college-board",
                },
                {
                  label: "Webview---Edcite.",
                  slug: "kajigs/webviewish-webview-edcite",
                },
                {
                  label: "Webview---Edulastic.",
                  slug: "kajigs/webviewish-webview-edulastic",
                },
                {
                  label: "Webview---FastBridge-Learning.",
                  slug: "kajigs/webviewish-webview-fastbridge-learning",
                },
                {
                  label: "Webview---Fusion360.",
                  slug: "kajigs/webviewish-webview-fusion360",
                },
                {
                  label: "Webview---Geogebra.",
                  slug: "kajigs/webviewish-webview-geogebra",
                },
                {
                  label: "Webview---Google-Apps.",
                  slug: "kajigs/webviewish-webview-google-apps",
                },
                {
                  label: "Webview---Illuminate-Secure.",
                  slug: "kajigs/webviewish-webview-illuminate-secure",
                },
                {
                  label: "Webview---Kahoot.",
                  slug: "kajigs/webviewish-webview-kahoot",
                },
                {
                  label: "Webview---Lego-Wedo.",
                  slug: "kajigs/webviewish-webview-lego-wedo",
                },
                {
                  label: "Webview---MyViewBoard.",
                  slug: "kajigs/webviewish-webview-myviewboard",
                },
                {
                  label: "Webview---Orbitnote.",
                  slug: "kajigs/webviewish-webview-orbitnote",
                },
                {
                  label: "Webview---QuickView.",
                  slug: "kajigs/webviewish-webview-quickview",
                },
                {
                  label: "Webview---Riverside-Data.",
                  slug: "kajigs/webviewish-webview-riverside-data",
                },
                {
                  label: "Webview---Side-Panel-(v108-v112).",
                  slug: "kajigs/webviewish-webview-side-panel-v108-v112",
                },
                {
                  label: "Webview---Star-Assessments-2.0",
                  slug: "kajigs/webviewish-webview-star-assessments-2-0",
                },
                {
                  label: "Webview---TestNav.",
                  slug: "kajigs/webviewish-webview-testnav",
                },
              ],
            },
            {
              label: "workarounds",
              items: [
                {
                  label: "Bookmarklet-Runner---Sh0vel.",
                  slug: "kajigs/workarounds-bookmarklet-runner-sh0vel",
                },
                {
                  label: "Connect-to-Wifi-Unenrolled.",
                  slug: "kajigs/workarounds-connect-to-wifi-unenrolled",
                },
                {
                  label: "ExtensionInstallAllowlist-Opener.",
                  slug: "kajigs/workarounds-extensioninstallallowlist-opener",
                },
                {
                  label: "Extension-Installer.",
                  slug: "kajigs/workarounds-extension-installer",
                },
                {
                  label: "IFrame-Runner-(with-Scratch).",
                  slug: "kajigs/workarounds-iframe-runner-with-scratch",
                },
                {
                  label: "Install-ext.---Lacros-Bypass-(v96)",
                  slug: "kajigs/workarounds-install-ext-lacros-bypass-v96",
                },
                {
                  label: "Network-Filter-Bypass-[DNS].",
                  slug: "kajigs/workarounds-network-filter-bypass-dns",
                },
                {
                  label: "New-Chrome,-Old-CrOS.",
                  slug: "kajigs/workarounds-new-chrome-old-cros",
                },
                {
                  label: "Personal-Account---OOBESCAPE.",
                  slug: "kajigs/workarounds-personal-account-oobescape",
                },
                {
                  label: "Play-Store-Bypass-(v106).",
                  slug: "kajigs/workarounds-play-store-bypass-v106",
                },
                {
                  label: "Search-Unblocked.",
                  slug: "kajigs/workarounds-search-unblocked",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
