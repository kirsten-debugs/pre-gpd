var e=`@font-face {\r
    font-family: 'Mukta';\r
    font-style: normal;\r
    font-weight: 400;\r
    font-display: swap;\r
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWKBXyXfDDVXbnBrXw.woff2) format('woff2');\r
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r
}\r
\r
@font-face {\r
    font-family: 'Mukta';\r
    font-style: normal;\r
    font-weight: 700;\r
    font-display: swap;\r
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbF6iGmd8WA.woff2) format('woff2');\r
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r
}\r
\r
:root {\r
    --username: 'overthinking ..';\r
\r
    --background: linear-gradient(30deg, rgba(133, 89, 136, 1) 0%, rgba(107, 73, 132, 1) 18%, rgba(72, 52, 117, 1) 35%, rgba(43, 47, 119, 1) 54%, rgba(20, 24, 82, 1) 73%, rgba(7, 11, 52, 1) 100%);\r
    --primary: white;\r
    --secondary: white;\r
    --transitions: .7s ease-in-out;\r
    --max-width: 400px;\r
    --max-height: 250px;\r
    --positionY: 300px;\r
    --font-size: 10px;\r
    --line-thickness: 1px;\r
    --DP: url(https://i.ibb.co/9wV6WJP/GTA-Ibaraki-Douji.png);\r
    --DP_size: 60px;\r
    --border-radius: 10px;\r
\r
    --media_outer_border: 3px double #F9F9F8;\r
    --media_inner_border: 3px solid #F9F9F8;\r
    --media_spin_speed: 15s;\r
    --media_size: 40px;\r
    --media_bottom: 15px;\r
    --media_left: 15px;\r
\r
    --light: 255, 255, 255, .1;\r
    --hover: 239, 207, 227, .5;\r
}\r
\r
* {\r
    cursor: url(https://i.ibb.co/LxzS0GM/cursor22.png), default !important;\r
    font-family: 'Mukta', sans-serif !important;\r
\r
    /* Do not touch */\r
    --Credit: 'Coded by Overthink @ GaiaOnline || Gaia Online Profiles @ notion.so';\r
    box-sizing: border-box !important;\r
\r
}\r
\r
body #columns {\r
    animation: 2s linear 1 animation;\r
}\r
\r
@keyframes animation {\r
    from {\r
        opacity: 0;\r
        max-height: 0%;\r
    }\r
\r
    to {\r
        opacity: 1;\r
        max-height: 100%;\r
    }\r
}\r
\r
html {\r
    background: url(https://i.ibb.co/BGX0xV1/Under-the-Clouds.png);\r
    background: var(--background);\r
    overflow: visible;\r
}\r
\r
body {\r
    background: url(https://i.ibb.co/kxG8j51/Firefly-100s-1084px.png) repeat center;\r
    animation: 20s sky linear infinite;\r
    user-select: none;\r
    -webkit-user-select: none;\r
    overflow: visible;\r
}\r
\r
@keyframes sky {\r
    100% {\r
        background-position: 0px 500px;\r
    }\r
}\r
\r
body #gaia_header {\r
    background: none;\r
}\r
\r
#gaia_header ul {\r
\r
    font-size: 0 !important;\r
    height: 0 !important;\r
}\r
\r
#gaia_header ul .spacer {\r
    display: none !important;\r
}\r
\r
#gaia_header #header_right {\r
    float: right !important;\r
}\r
\r
#gaia_header #header_left,\r
#gaia_header #header_right {\r
    --10px: 30px;\r
    margin: 0 var(--10px) !important;\r
}\r
\r
#gaia_header a {\r
    font-size: 9px;\r
    font-weight: normal;\r
    color: var(--primary) !important;\r
    letter-spacing: 1px;\r
    line-height: calc(var(--10px) + 40px);\r
    text-decoration: none;\r
    padding: 10px;\r
    background: rgba(var(--light));\r
    box-shadow: inset 0 0 0 0 rgba(var(--light));\r
    transition: box-shadow .5s ease-in-out;\r
}\r
\r
#gaia_header a:hover {\r
    box-shadow: inset 0 0 0 100px rgba(var(--hover));\r
}\r
\r
#gaia_header img {\r
    filter: invert(12%);\r
}\r
\r
#gaia_header #header_left li:nth-of-type(2) {\r
    pointer-events: none !important;\r
}\r
\r
#columns::before {\r
    content: var(--username);\r
    font-size: calc(var(--font-size) + 10px);\r
    color: var(--primary);\r
    writing-mode: vertical-rl;\r
    letter-spacing: 1px;\r
    position: absolute;\r
    right: 5px;\r
    top: 6px;\r
    transition: var(--transitions);\r
}\r
\r
#columns:hover::before {\r
    right: -50px;\r
}\r
\r
#columns::after {\r
    content: 'rrrrrr';\r
    box-shadow: 0em 0em 0.5em rgba(var(--hover)), 0 0 0.1em rgba(var(--hover));\r
    position: absolute;\r
    height: 100%;\r
    top: 0;\r
    left: 100%;\r
\r
}\r
\r
#columns {\r
    position: fixed;\r
    top: 50%;\r
    left: 50%;\r
    border-right: var(--line-thickness) solid var(--primary);\r
    width: var(--max-width);\r
    margin-left: calc(0px - var(--max-width));\r
    margin-top: calc(0px - 50px);\r
    transition: border-color var(--transitions);\r
}\r
\r
#columns:hover {\r
    border-color: var(--secondary);\r
}\r
\r
#column_1,\r
#column_2,\r
#column_3 {\r
    clear: both;\r
    font-size: 0px;\r
    margin: 0;\r
    width: var(--max-width);\r
}\r
\r
.panel:not(.media_panel) {\r
    max-width: var(--max-width);\r
    max-height: 0;\r
    overflow: auto;\r
    left: 100%;\r
    margin: 0;\r
    float: right;\r
    clear: both;\r
    background: none;\r
    font-family: 'Sen', sans-serif;\r
    color: var(--secondary);\r
    font-size: var(--font-size);\r
    letter-spacing: 1px;\r
    transition: max-height var(--transitions), left var(--transitions);\r
    scrollbar-width: thin;\r
    scrollbar-color: var(--primary) transparent;\r
}\r
\r
.panel:not(.media_panel):hover {\r
    max-height: var(--max-height);\r
    left: 0;\r
}\r
\r
.panel::-webkit-scrollbar {\r
    width: 10px\r
}\r
\r
.panel::-webkit-scrollbar-track {\r
    background: transparent\r
}\r
\r
.panel::-webkit-scrollbar-thumb {\r
    background: var(--primary) padding-box;\r
    border: 2px solid transparent;\r
}\r
\r
.panel:not(.media_panel) h2 {\r
    position: fixed;\r
    left: 50%;\r
    margin: -10px 0 0 0px;\r
    background: none;\r
    padding: 0 10px;\r
    font-family: 'Sen', sans-serif;\r
    color: var(--primary);\r
    text-transform: none;\r
    font-size: var(--font-size);\r
    font-weight: normal;\r
    transition: var(--transitions);\r
    letter-spacing: 1px;\r
}\r
\r
.panel:not(.media_panel):hover h2 {\r
    color: var(--secondary);\r
}\r
\r
.panel .postcontent {\r
    line-height: 13px;\r
}\r
\r
.panel:not(#id_wishlist, #id_contact) a {\r
    padding: 0 5px;\r
\r
}\r
\r
.panel:not(#id_wishlist, #id_contact) a,\r
#id_contact ul li a {\r
    text-decoration: none;\r
    background: rgba(var(--light));\r
    color: var(--primary);\r
    font-weight: normal;\r
}\r
\r
.panel:not(#id_wishlist) a:hover {\r
    opacity: 1;\r
    background: rgba(var(--hover));\r
    color: var(--secondary);\r
}\r
\r
.panel .user_img {\r
    max-width: calc(var(--max-width) - 35px);\r
}\r
\r
#id_contact ul li {\r
    display: inline;\r
\r
}\r
\r
#id_contact ul li a {\r
    padding: 5px 10px;\r
}\r
\r
#id_about {\r
    padding-left: calc(var(--DP_size) + 15px);\r
}\r
\r
#id_about::before {\r
    content: '';\r
    background: var(--DP) no-repeat center/cover;\r
    position: absolute;\r
    top: 0;\r
    left: 0;\r
    margin-top: 17px;\r
    border: 1px solid var(--secondary);\r
    border-radius: var(--border-radius);\r
    height: var(--DP_size);\r
    width: var(--DP_size);\r
}\r
\r
#id_comments {\r
    overflow-x: hidden;\r
}\r
\r
#id_comments h2~p {\r
    display: none;\r
}\r
\r
#alert_container {\r
    float: right;\r
}\r
\r
#alert_container a {\r
    padding: 10px;\r
    border-radius: var(--border-radius);\r
    font-size: 0;\r
}\r
\r
#alert_container a:before {\r
    content: '✎';\r
    font-size: 20px;\r
\r
}\r
\r
#id_comments dt {\r
    border: 0;\r
    margin-top: 30px;\r
    text-align: center;\r
}\r
\r
#id_comments dt:nth-of-type(1n+2) {\r
    margin-top: 100px;\r
}\r
\r
\r
\r
#id_comments .style1 dd p {\r
    margin: 0;\r
    width: 30px;\r
    font-size: 0;\r
    background: rgba(var(--light));\r
    padding: 10px;\r
    position: absolute;\r
    right: -20px;\r
    border-radius: var(--border-radius);\r
    opacity: 0;\r
    transition: all .5s;\r
}\r
\r
#id_comments .style1 dd:hover p {\r
    opacity: 1;\r
    right: 10px;\r
}\r
\r
#id_comments .deletecomment a:nth-of-type(1n):after {\r
    font-size: 9px;\r
    transition: font-size .3s;\r
}\r
\r
#id_comments .deletecomment a:nth-of-type(1n):hover:after {\r
    font-size: 15px;\r
}\r
\r
#id_comments .deletecomment a:nth-of-type(1):after {\r
    content: '✕';\r
}\r
\r
#id_comments .deletecomment a:nth-of-type(2):after {\r
    content: '✎';\r
}\r
\r
#id_comments .postcontent {\r
    border-left: 1px dotted white;\r
    border-radius: 20px 0 0 20px;\r
    margin-left: 17px;\r
    padding-left: 25px;\r
}\r
\r
#id_comments .dropBox {\r
    background: rgba(var(--light));\r
    width: 35px;\r
    height: 35px;\r
    border: 1px dotted white;\r
    border-radius: var(--border-radius);\r
    overflow: hidden;\r
}\r
\r
#id_comments .dropBox img {\r
    width: 60px;\r
    height: 75px;\r
    margin: -10px 0 0 -17px;\r
}\r
\r
#id_comments .postcontent img {\r
    max-width: 300px;\r
    border: 1px solid #fff;\r
    padding: 5px;\r
    border-radius: var(--border-radius);\r
}\r
\r
#id_comments iframe,\r
.custom_panel iframe {\r
    max-height: 100px;\r
    max-width: 180px;\r
    border: 1px solid #fff;\r
    padding: 5px;\r
    border-radius: var(--border-radius);\r
}\r
\r
\r
#avatar_menu {\r
    background: rgba(var(--light));\r
    border: 0;\r
    border-top: 5px solid transparent;\r
    border-bottom: 5px solid transparent;\r
    padding: 5px;\r
    transition: var(--transitions);\r
    margin-top: -175px;\r
    margin-left: -95px;\r
    border-radius: 0px 30px 0px 30px;\r
}\r
\r
#avatar_menu:hover {\r
    border-radius: 30px 0px 30px 0px;\r
}\r
\r
#avatar_menu a {\r
    color: var(--secondary);\r
    font-size: var(--font-size);\r
    text-align: center;\r
    transition: .2s ease-in-out;\r
    line-height: 7px;\r
    border: 3px solid transparent;\r
    box-shadow: inset 50px 0 0 0 rgba(var(--light));\r
    transition: .3s ease-in-out;\r
}\r
\r
#avatar_menu a:hover {\r
    background: none;\r
    letter-spacing: 1px;\r
    box-shadow: inset 100px 0 0 0 rgba(var(--hover));\r
}\r
\r
#id_details .pushBox {\r
    position: absolute;\r
    top: 0;\r
    left: 0;\r
    width: 55px;\r
    height: 20px;\r
    line-height: 20px;\r
    background: rgba(var(--light));\r
    border-radius: 0px 30px 0px 30px;\r
    transition: border-radius .3s;\r
}\r
\r
#id_details .pushBox:hover {\r
    border-radius: 0px 50px 0px 0px;\r
\r
}\r
\r
#id_details .pushBox::after {\r
    content: 'Menu';\r
    font-size: 10px;\r
    text-transform: uppercase;\r
    letter-spacing: 1px;\r
    padding-left: 12px;\r
}\r
\r
\r
#id_details .statuslinks span {\r
    position: absolute;\r
    top: 0px;\r
    left: 100%;\r
    margin-left: -20px;\r
    margin-top: 25px;\r
    transform-origin: 0 0;\r
    transform: rotate(90deg);\r
\r
}\r
\r
#id_details .forum_userstatus,\r
#id_details .statuslinks,\r
.forum_userstatus .statuslinks span.offline,\r
.forum_userstatus .statuslinks span.online {\r
    background: none;\r
    border: 0;\r
}\r
\r
.forum_userstatus .statuslinks span.online,\r
.forum_userstatus .statuslinks span.offline {\r
    animation: pulse 1s alternate-reverse infinite;\r
    color: white;\r
    font-size: 25px !important;\r
    letter-spacing: 2px;\r
    text-transform: uppercase;\r
    width: 100%;\r
    height: 100px;\r
}\r
\r
#id_details .forum_userstatus~p {\r
    background: rgba(var(--light));\r
    padding: 5px 10px;\r
    border-radius: 5px;\r
    text-align: center;\r
    text-transform: uppercase;\r
\r
}\r
\r
#id_details .forum_userstatus~p strong {\r
    font-weight: normal;\r
}\r
\r
#id_details .forum_userstatus~p:nth-last-child(1) {\r
    border-bottom: 0;\r
}\r
\r
#id_wishlist,\r
#id_equipment {\r
    font-size: 0;\r
}\r
\r
#id_wishlist .item,\r
#id_equipment .item {\r
    width: 35px;\r
    margin: 8px;\r
\r
}\r
\r
#id_wishlist .item a,\r
#id_equipment .item a {\r
    display: inline-block;\r
    width: 100%;\r
    max-height: 35px;\r
    text-align: center;\r
    border-radius: var(--border-radius);\r
    background: rgba(var(--light)) !important;\r
    border: 1px solid transparent;\r
}\r
\r
#id_wishlist .item a:hover,\r
#id_equipment .item a:hover {\r
    border-color: white;\r
\r
}\r
\r
.panel img {\r
    opacity: .8;\r
    transition: .3s;\r
}\r
\r
.panel img:hover {\r
    opacity: 1;\r
}\r
\r
#id_wishlist a[title*='Bought'] {\r
    opacity: .3;\r
    pointer-events: none;\r
}\r
\r
#id_wishlist .owner_checkmark {\r
    display: none;\r
}\r
\r
.media_panel h2 {\r
    display: none;\r
}\r
\r
@keyframes media_spin {\r
    from {\r
        transform: rotate(0deg);\r
    }\r
\r
    to {\r
        transform: rotate(360deg);\r
    }\r
}\r
\r
.media_panel {\r
    background: none;\r
    position: fixed;\r
    bottom: var(--media_bottom);\r
    left: var(--media_left);\r
    padding: 2px;\r
    margin: 0;\r
    border-radius: 100%;\r
    border: var(--media_outer_border);\r
    border-top-color: transparent;\r
    border-bottom-color: transparent;\r
    transition: border-width .1s;\r
    animation: linear media_spin var(--media_spin_speed) infinite;\r
    box-shadow: 0em 0em 1em rgba(var(--hover)), 0 0 1em rgba(var(--hover));\r
\r
}\r
\r
.media_panel:hover {\r
    border-width: 0px;\r
}\r
\r
.media_panel iframe {\r
    max-height: var(--media_size);\r
    max-width: var(--media_size);\r
    border-radius: 100%;\r
    border: var(--media_inner_border);\r
}\r
\r
.quote {\r
    background: none;\r
    border: 0;\r
    padding: 0 10px;\r
    color: #fff;\r
    background: rgba(var(--light));\r
    border-radius: var(--border-radius);\r
}\r
\r
.quoted {\r
    background: none !important;\r
    border: 1px solid white;\r
    font-style: italic;\r
    letter-spacing: 2px;\r
    line-height: 20px;\r
}\r
\r
.menu_seperator,\r
.premium_sparkle,\r
#id_comments #alerts_banner {\r
    display: none;\r
}`;export{e as default};