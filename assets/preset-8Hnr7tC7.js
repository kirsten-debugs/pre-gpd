var e=`:root {\r
  --menu-color-bg: #fdfbf7;\r
  --menu-color-border: #e6e0d4;\r
  --menu-color-text: #5a554a;\r
  --menu-color-accent: #94a37e;\r
  --menu-color-sep: #dcd7ca;\r
  --menu-padding: 5px;\r
  --menu-border-width: 1px;\r
\r
  --avatar-menu-min-width: 200px;\r
  --avatar-menu-border-radius: 8px;\r
  --avatar-menu-list-font-size: 9px;\r
  --avatar-menu-list-text-transform: lowercase;\r
  --avatar-menu-list-FontWeight: 700;\r
  --avatar-menu-list-PaddingTopBottom: 10px;\r
  --avatar-menu-list-PaddingLeftRight: 24px;\r
  --avatar-menu-headerText: 'Botanica';\r
  --avatar-menu-initialDeg: 5deg;\r
  --avatar-menu-finalDeg: 20deg;\r
}\r
\r
.forum_userstatus {\r
  margin: auto;\r
  left: 20px;\r
  top: 170px;\r
  background: var(--menu-color-bg);\r
  width: 114px;\r
  border: 1px solid var(--menu-color-border);\r
  padding: 3px;\r
  margin-bottom: 10px;\r
  border-radius: 4px;\r
}\r
\r
.forum_userstatus .statuslinks {\r
  background: none !important;\r
  text-align: left;\r
  height: 15px;\r
  padding: 0;\r
  position: relative;\r
}\r
\r
.pushBox::after {\r
  content: "";\r
  position: absolute;\r
  top: 2px;\r
  right: 2px;\r
  width: 8px;\r
  height: 8px;\r
  border: 1px solid var(--menu-color-accent);\r
  border-radius: 50% 0;\r
  transform: rotate(var(--avatar-menu-initialDeg));\r
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\r
  background: var(--menu-color-accent);\r
}\r
\r
.forum_userstatus:hover .pushBox::after {\r
  transform: rotate(var(--avatar-menu-finalDeg));\r
  background: transparent;\r
}\r
\r
.forum_userstatus .statuslinks a,\r
.forum_userstatus .statuslinks span {\r
  display: block;\r
  margin: 0;\r
  padding: 0;\r
  height: 15px;\r
  width: 100%;\r
  font-size: 11px;\r
  font-weight: normal;\r
  text-align: left;\r
  color: var(--menu-color-text);\r
}\r
\r
.forum_userstatus .statuslinks span.online,\r
.forum_userstatus .statuslinks span.offline {\r
  padding-left: 20px;\r
  width: 80px;\r
  height: 15px;\r
  float: left;\r
  position: relative;\r
  background: none !important;\r
}\r
\r
.forum_userstatus .statuslinks span.online::before,\r
.forum_userstatus .statuslinks span.offline::before {\r
  content: "";\r
  position: absolute;\r
  left: 4px;\r
  top: 4px;\r
  width: 6px;\r
  height: 6px;\r
  display: inline-block;\r
  transform: rotate(var(--avatar-menu-initialDeg));\r
  border: 1px solid var(--menu-color-accent);\r
}\r
\r
.forum_userstatus .statuslinks span.online::before {\r
  will-change: transform, background;\r
  animation: leaf-rotate-fill 4s infinite ease-in-out;\r
}\r
\r
@keyframes leaf-rotate-fill {\r
  0%, 100% { \r
    transform: rotate(var(--avatar-menu-initialDeg)); \r
    background: transparent;\r
  }\r
  50% { \r
    transform: rotate(225deg); \r
    background: var(--menu-color-accent);\r
  }\r
}\r
\r
#avatar_menu {\r
  white-space: nowrap;\r
  background: var(--menu-color-bg);\r
  border: var(--menu-border-width) solid var(--menu-color-border);\r
  padding: var(--menu-padding) 0;\r
  min-width: var(--avatar-menu-min-width);\r
  transform: translateX(calc(-50% + 50px + var(--menu-padding) + var(--menu-border-width)));\r
  border-radius: var(--avatar-menu-border-radius);\r
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5);\r
  margin-top: 13px;\r
}\r
\r
#avatar_menu::before {\r
  content: var(--avatar-menu-headerText);\r
  position: absolute;\r
  top: -10px;\r
  left: 12px;\r
  font-size: 7px;\r
  text-transform: uppercase;\r
  font-weight: 900;\r
  letter-spacing: 2.5px;\r
  background: var(--menu-color-accent);\r
  padding: 2px 8px;\r
  color: #fff;\r
  border-radius: 4px;\r
  box-shadow: 0 2px 4px rgba(148, 163, 126, 0.3);\r
}\r
\r
#avatar_menu::after {\r
  content: "";\r
  position: absolute;\r
  top: -8px;\r
  right: 10px;\r
  width: 14px;\r
  height: 14px;\r
  border: 1.5px solid var(--menu-color-accent);\r
  border-radius: 50% 0;\r
  background: var(--menu-color-bg);\r
  transform: rotate(var(--avatar-menu-initialDeg));\r
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);\r
}\r
\r
#avatar_menu:hover::after {\r
  transform: rotate(90deg) scale(1.1);\r
  background: var(--menu-color-accent);\r
}\r
\r
#avatar_menu li a {\r
  display: block;\r
  padding: var(--avatar-menu-list-PaddingTopBottom) var(--avatar-menu-list-PaddingLeftRight);\r
  color: var(--menu-color-text);\r
  text-decoration: none;\r
  font-size: var(--avatar-menu-list-font-size);\r
  text-transform: var(--avatar-menu-list-text-transform);\r
  font-weight: var(--avatar-menu-list-FontWeight);\r
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\r
  position: relative;\r
  box-sizing: border-box;\r
  border-left: 3px solid transparent;\r
}\r
\r
#avatar_menu li a:hover {\r
  background: rgba(148, 163, 126, 0.08);\r
  border-left: 2px solid var(--menu-color-accent);\r
  padding-left: 20px;\r
  scale: 1.1;\r
}\r
\r
#avatar_menu li a::after {\r
  content: "";\r
  position: absolute;\r
  right: 16px;\r
  top: 50%;\r
  width: 8px;\r
  height: 8px;\r
  background: var(--menu-color-sep);\r
  border-radius: 50% 0;\r
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\r
}\r
\r
/* Base alternating degrees */\r
#avatar_menu li:nth-child(even) a::after {\r
  transform: translateY(-50%) rotate(5deg);\r
}\r
#avatar_menu li:nth-child(odd) a::after {\r
  transform: translateY(-50%) rotate(90deg);\r
}\r
\r
/* Hover alternating degrees (swapped) */\r
#avatar_menu li:nth-child(even) a:hover::after {\r
  background: var(--menu-color-accent);\r
  transform: translateY(-50%) rotate(90deg) scale(1.3);\r
}\r
#avatar_menu li:nth-child(odd) a:hover::after {\r
  background: var(--menu-color-accent);\r
  transform: translateY(-50%) rotate(5deg) scale(1.3);\r
}\r
\r
#avatar_menu .menu_seperator {\r
  position: relative;\r
}\r
\r
#avatar_menu .menu_seperator::after {\r
  content: "";\r
  position: absolute;\r
  top: -2.5px;\r
  right: 0;\r
  width: 5px;\r
  height: 5px;\r
  border: 1px solid var(--menu-color-accent);\r
  transform: rotate(45deg);\r
  background: var(--menu-color-bg);\r
  margin-right: 1px;\r
}`;export{e as default};