var e=`:root {\r
    --player-interface: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAB4CAAAAAD5vW4nAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEfUlEQVRo3u3abUyVZRzH8Z8csEzEhwTzcRG4bCIiR8OVrenOVpZTMB+wNWG+cE1dWUzrhaexyjSBxJxbR2vL+QDDmDLJTSkZ4TPMR2abZRK2HXBSPpBABt9enHOYYEltN1z32v17ce+c697OPtt13f///5wdyYkTe6fiRHKXlaNwJHTtrcDd3Ee6rEDo2nsK+OkFOyigKMYOCn5d2scGCqh40g4K7mT3tYECzqXYQUGbb4ANFFDtKOy0I3Y4nbZ4Uu1QtWxRwe3QzezQ2e0w5ZTfN/EdgcrQ1YkTJ06c/H8SU/WtdOiHwvkRBhHR50Otrm62UQTSSQDy+hhEILmSvH5go0FEYOwYVASkmUMEh5+wIrjcu0f06L1fW6TtBWOlqHpY2KsKOivauRYvrYEdJhVAoZQElwwrGqT+cNuw4po0AG4ZVhRIkwzvSBsN8ZK3t0/nkc6KnMI4aWADLDBdtVx74MdwwxV8cDG0zzHazcKS36sH8sx29koAcgx19nunnNpZJie+k2XSvku75obLiRMnTpzYId4/+S2lF4a1rq875wzgNa6oBz4zqEhKjZDrbYBrz0oxGYN6SvGghWE3uJofHCjb92xv5msTim10zUwDCv99ii0GFLMaAShJiHrpMgCnxhhQaPQV4FS4pHEtwG5Dv93tBFZKkr4DXpFpRSUw1wxi1M+ddmSXkR0Jnc4JUS8bPJ31tnhS7VG1ht3gau65YAUvNlXBNTE1Qq4sAP8zUkzGQCOKQBoMd/ZATgNrjCvW2GLic+LEiRMnFmW6xxMpKdnjGd71VpInmLiOpTqI6wnFcZgT+PjErrdKQ81gQ48rsuEjaQT4+/yjYnOPK6bCYWkefHnfrXi3uwA2ud1jelzhuk5TuPJg0d/dzYfV977vKYUKYaKO0RYtPf3qnDGS+rndk6TnPSn9A4pItztRmu5J6ac6iItdtjhSkkZlZL02zCpFJizt28wpjawC7q6TEqBZug4pAcU08Eu/Q6LqYFULXHhIWtEKtKZapHisna2T4QMdhO9vw8JuFHf8wHxNaKNxfzu/WPU17yynX4dpo+F8WDqUd6NIc1VDvtZCpsphikWK9fyxk5sR88CnWLgd9kBFs7QJ9qoIZmgjZFpVPaGFYq2EHA0FHn2g4o70PnyjckjRWnjDIkXfW8BSZcN6DQHiulOshmM6C8nKhnesekpKgFh9GFKM606xHE7oQrCuvmuV4k24ov+gWBxUXKyuri5Pt0qRATWSFz7WEODx7hRL4JCOg9vS6pkONdJbkK/h/+Z0Lofd2g/TNDUr07LqmQY10iz4SslQr3gg0nWzQ+GG1vCIlg7FOsjVVpgtLzxnlWIm1EjRrdxK2w07FNUOuSV0KEYA6w4QrFpbljTCi1oEe8efoS3GKsUMqJH0CQBNT0mHgaa1HQodB25sCCgaq4GrDyviDABfWHYuEsrKPpcUtqKqyV8yWdLY0isHp8T7fLFaVla2QHriQG3pxASfb6TW+7IGf3py33hJQzdfrK1YZfK/l06cWJC/AMToH788X1SMAAAAAElFTkSuQmCC');\r
    --primary-color: #C00000;\r
    --secondary-color: #0080FF;\r
    --neutral-color: #202020;\r
    --corner-radius: 3px;\r
}\r
\r
html, body {height: unset;}\r
html {background: url('https://images2.imgbox.com/56/80/11AMlsGN_o.png') fixed top center;}\r
\r
body {\r
    contain: layout;\r
    max-width: 1440px;\r
    margin: 0 auto;\r
    box-shadow: 0 0 5px 1px #000000;\r
}\r
body a {text-decoration: none !important;}\r
\r
#panel-details {\r
    background: url('https://i.imgur.com/H0OeWGR.jpg') no-repeat bottom center / cover;\r
    height: 100vh;\r
}\r
\r
::selection {\r
    background: var(--secondary-color);\r
    color: #FFFFFF;\r
}\r
\r
/* Fonts */\r
\r
@font-face {\r
    font-family: 'Open Sans';\r
    font-style: normal;\r
    font-weight: 300 800;\r
    src: url('https://fonts.gstatic.com/s/opensans/v44/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2') format('woff2');\r
}\r
\r
@font-face {\r
    font-family: 'Font Awesome';\r
    font-style: normal;\r
    font-weight: 900;\r
    src: url('https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.woff2') format('woff2');\r
}\r
\r
/* Header */\r
\r
#viewer #gaia_header, #viewer #gaia_header :is(ul, li, a) {\r
    display: flex !important;\r
    height: 35px !important;\r
}\r
\r
#viewer #gaia_header {\r
    background: #000000C0;\r
    justify-content: space-between;\r
    position: absolute !important;\r
\r
    ul, a {font: 600 0/32px 'Open Sans', sans-serif !important;}\r
    li.spacer {display: none !important;}\r
\r
    ul {\r
    background: none !important;\r
    width: auto !important;\r
\r
    a {\r
    color: #FFFFFF !important;\r
    font-size: 13px !important;\r
    text-transform: uppercase;\r
    padding: 0 7px;\r
    }\r
    a:hover {background: var(--primary-color);}\r
\r
    img {\r
    content: url('https://i.imgur.com/CSJ5JEA.png');\r
    width: 42px;\r
    height: 19px;\r
    align-self: center;\r
    }\r
    }\r
}\r
\r
/* Columns */\r
\r
#columns, #columns .column {\r
    font-size: 0;\r
    float: none;\r
}\r
#columns {position: unset;}\r
\r
#columns .column {\r
    contain: layout;\r
    margin: 0;\r
    width: unset;\r
}\r
#column_2 {background: #FFFFFF;}\r
\r
#column_1, #column_3 {\r
    background: #000000;\r
    padding: 40px;\r
}\r
\r
#column_1 {\r
    display: grid;\r
    gap: 10px;\r
    grid-template: max-content 160px 25px max-content / 130px 0 1fr;\r
\r
    #id_details h2, #id_contact {grid-area: 1/1/2/4;}\r
    #id_details .forum_userstatus {grid-area: 3/1/4/2;}\r
    #id_about {grid-area: 2/3/4/4;}\r
    #id_wishlist {grid-area: 4/1/5/4;}\r
}\r
\r
/* Panels */\r
\r
.panel, .panel h2 {\r
    background: none;\r
    box-sizing: border-box;\r
    margin: 0;\r
    padding: 0;\r
}\r
\r
.panel {font: 11px/1.75 'Open Sans', sans-serif;}\r
.panel h2 {color: inherit;}\r
.panel img:not(.avatarImage) {max-width: 100% !important;}\r
\r
#column_1 .panel, #column_3 .panel {color: #FFFFFF;}\r
#column_2 .panel {color: #000000;}\r
\r
#id_about, #id_wishlist {\r
    overflow: hidden scroll;\r
    padding-right: 20px;\r
    scrollbar-color: #FFFFFF var(--neutral-color);\r
}\r
#id_about h2, #id_wishlist h2 {display: none;}\r
\r
#id_about {\r
    padding: 1px 20px 2px 0;\r
    text-align: justify;\r
}\r
\r
.panel a {color: var(--primary-color);}\r
.panel a:hover {color: inherit;}\r
\r
/* Panel Headers */\r
\r
#id_details h2, #id_comments h2 {\r
    font: 700 42px/26px 'Open Sans', sans-serif;\r
    height: 43px;\r
    border-bottom: 3px solid currentColor;\r
}\r
#id_details h2 {margin-bottom: 10px;}\r
\r
#id_comments h2 {\r
    text-indent: -2px;\r
    margin: 40px;\r
}\r
\r
/* Contact Buttons */\r
\r
#id_contact {\r
    font-size: 0;\r
    justify-self: end;\r
    text-align: center;\r
}\r
#id_contact h2 {display: none;}\r
\r
#id_contact ul {\r
    display: flex;\r
    gap: 10px;\r
\r
    li * {\r
    display: block;\r
    background: #FFFFFF;\r
    width: 30px;\r
    height: 30px;\r
    color: #000000;\r
    border-radius: var(--corner-radius);\r
    }\r
\r
    a:hover {\r
    background: var(--primary-color);\r
    color: #FFFFFF;\r
    }\r
\r
    li *::before {font: 16px/30px 'Font Awesome';}\r
    li:nth-of-type(1) *::before {content: '';}\r
    li:nth-of-type(2) *::before {content: '';}\r
    li:nth-of-type(3) *::before {content: '';}\r
}\r
\r
/* Details */\r
\r
#id_details, #id_details p, .statuslinks {display: contents;}\r
#id_details img, .forum_userstatus {border-radius: var(--corner-radius);}\r
\r
#id_details img {\r
    background: var(--neutral-color);\r
    content: url('https://i.imgur.com/R1xRUyY.png');\r
    padding: 5px;\r
}\r
\r
.forum_userstatus, .pushBox {\r
    width: 130px;\r
    height: 25px;\r
}\r
.pushBox {display: none;}\r
\r
.forum_userstatus {\r
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALAQMAAAB4VV5mAAAABlBMVEX///8gICDDZZH0AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAFklEQVQI12OQYJBgYGCAkLeB0AbEBgAVsgKDu+xAYgAAAABJRU5ErkJggg==') top 7px right 5px no-repeat #FFFFFF;\r
    box-sizing: border-box;\r
    border: none;\r
    contain: layout;\r
    padding: 0;\r
\r
    span {\r
    color: #404040;\r
    font: 500 12px/14px 'Open Sans', sans-serif;\r
    margin: 5px !important;\r
    }\r
}\r
\r
/* Wish List */\r
\r
#id_wishlist {\r
    display: grid;\r
    gap: 10px;\r
    grid-template-columns: repeat(auto-fit, minmax(40px, auto));\r
    grid-auto-rows: 40px;\r
    scroll-snap-type: y mandatory;\r
\r
    .item {\r
    scroll-snap-align: start;\r
    scroll-snap-stop: always;\r
    }\r
    a[title$='(Bought)']::after, .owner_checkmark {position: absolute;}\r
    .premium_sparkle, .clear {display: none;}\r
\r
    a {\r
    display: block;\r
    background: var(--neutral-color);\r
    border-radius: var(--corner-radius);\r
    height: 30px;\r
    padding: 5px 0;\r
    position: relative;\r
    text-align: center;\r
    }\r
    a[title$='(Wanted)'] {background: rgb(from var(--primary-color) r g b / 50%);}\r
    a[title$='(Questing)'] {background: rgb(from var(--secondary-color) r g b / 50%);}\r
    a[title$='(Wanted)']:hover {background: var(--primary-color);}\r
    a[title$='(Questing)']:hover {background: var(--secondary-color);}\r
\r
    a[title$='(Bought)']::after {\r
    content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICA8ZyBmaWxsPSIjQzAwMDAwIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSwxNSwxNSkiPgogICAgPHJlY3Qgd2lkdGg9IjM5LjUiIGhlaWdodD0iNCIgcng9IjEiIHJ5PSIxIiB4PSItNC43NSIgeT0iMTMiPjwvcmVjdD4KICAgIDxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjM5LjUiIHJ4PSIxIiByeT0iMSIgeD0iMTMiIHk9Ii00Ljc1Ij48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4K');\r
    top: calc(50% - 15px);\r
    left: calc(50% - 15px);\r
    }\r
\r
    .owner_checkmark {\r
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAY0lEQVQ4y82SSwoAIAhE1VvW/e9huQjCPppBJNTKN402wMyJ45VQbkSESFUUCC7rrYBYDgs0WIvQ6ct64WTZ3MGDgLZpwYNA3+SBpyPoZitk0yU2yJPQ5S944/1HlLNsPHKELXDbjhi2ODcwAAAAAElFTkSuQmCC');\r
    bottom: 0;\r
    right: 0;\r
    }\r
\r
    height: 40px;\r
    margin-top: 10px;\r
}\r
\r
/* Comments */\r
\r
#id_comments {\r
    #alert_container {display: contents;}\r
    #alerts_banner, .deletecomment {display: none;}\r
    dt, dd {margin: 0 40px;}\r
\r
    dt:nth-of-type(odd), dd:nth-of-type(odd) {\r
    background: #F0F0F0;\r
    box-shadow: -40px 0 #F0F0F0, 40px 0 #F0F0F0;\r
    }\r
\r
    dt {\r
    height: unset;\r
    line-height: normal;\r
    padding: 16px 0 7px 0;\r
    border-bottom: 1px dotted #808080;\r
\r
    .date {\r
    display: inline-grid;\r
    grid-auto-flow: column;\r
    grid-template-columns: max-content 1fr max-content;\r
    width: 165px;\r
    }\r
    .date a {font-weight: normal;}\r
\r
    .date::before {\r
    content: ' ....................';\r
    background: #FFFFFF;\r
    color: #808080;\r
    grid-column: 2;\r
    letter-spacing: .2ex;\r
    overflow: hidden;\r
    white-space: pre;\r
    width: calc(100% + 1ex);\r
    z-index: 1;\r
    }\r
    }\r
    dt:nth-of-type(odd) .date::before {background: #F0F0F0;}\r
\r
    dd {\r
    display: grid;\r
    gap: 10px;\r
    grid-template: max-content / 50px calc(100% - 60px);\r
    padding: 9px 0 20px 0;\r
    }\r
\r
    .dropBox {\r
    background: var(--neutral-color);\r
    border: 1px solid transparent;\r
    border-radius: var(--corner-radius);\r
    overflow: hidden;\r
\r
    img {\r
    width: 120px;\r
    height: 150px;\r
    margin: -30px 0 0 -47px;\r
    }\r
\r
    width: 48px;\r
    height: 48px;\r
    margin-top: 1px;\r
    }\r
\r
    margin-bottom: 20px;\r
}\r
\r
/* Comments Links */\r
\r
#id_comments :is(h2 + div, h2 ~ p) {\r
    width: 140px;\r
    height: 30px;\r
    position: absolute;\r
    top: 0;\r
\r
    a {\r
    display: block;\r
    background: #000000;\r
    width: 100%;\r
    height: 100%;\r
    color: #FFFFFF;\r
    font: 700 0/29px 'Open Sans', sans-serif;\r
    text-align: center;\r
    border-radius: var(--corner-radius);\r
    }\r
    a:hover {background: var(--primary-color);}\r
}\r
#id_comments h2 + div {right: 190px;}\r
#id_comments h2 ~ p {right: 40px;}\r
\r
#id_comments :is(h2 + div, h2 ~ p) a::before {font-size: 11px;}\r
#id_comments h2 + div a::before {content: 'ADD A COMMENT';}\r
#id_comments h2 ~ p a::before {content: 'VIEW COMMENTS';}\r
\r
/* Media */\r
\r
.custom_panel a, .media_panel {background: #FFFFFF;}\r
.custom_panel a:hover, .media_panel:hover {background: var(--primary-color);}\r
\r
.custom_panel h2, .media_panel h2 {display: none;}\r
.media_panel, .media_panel iframe {position: absolute;}\r
\r
.custom_panel {\r
    background: var(--player-interface) -5px -25px no-repeat, var(--player-interface) top -55px right -5px no-repeat;\r
    border-top: 3px solid transparent;\r
    border-image: linear-gradient(to right, var(--primary-color), var(--secondary-color)) 3 0 0 0 / 3px 0 0 0;\r
    font: 500 14px/20px 'Open Sans', sans-serif;\r
    height: 33px !important;\r
\r
    h2 + div {\r
    display: flex;\r
    justify-content: space-between;\r
    padding: 10px 0 0 74px;\r
    }\r
    span:nth-of-type(2) {margin-right: 47px;}\r
\r
    a {\r
    mask: var(--player-interface) top -95px right -35px luminance;\r
    width: 65px;\r
    height: 20px;\r
    font-size: 0;\r
    margin-right: 30px;\r
    }\r
}\r
\r
.media_panel {\r
    mask: var(--player-interface) -5px -5px luminance;\r
    width: 28px !important;\r
    height: 20px !important;\r
    overflow: hidden;\r
\r
    iframe {\r
    width: 300px;\r
    height: 200px;\r
    top: -90px;\r
    left: -138px;\r
    opacity: .001;\r
    }\r
\r
    top: 53px;\r
    left: 40px;\r
}`;export{e as default};