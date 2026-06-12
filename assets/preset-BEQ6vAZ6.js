var e=`#columns {\r
    display: grid;\r
    grid-template-columns: 1fr;\r
    gap: 8px;\r
    width: 500px;\r
    position: fixed;\r
    top: 50%;\r
    left: 50%;\r
    transform: translate(-50%, -50%);\r
}\r
\r
#column_1,\r
#column_2,\r
#column_3 {\r
    overflow: hidden;\r
    border: 1px dotted #64748b;\r
    height: 200px;\r
    width: 100%;\r
    box-sizing: border-box;\r
\r
}\r
\r
#column_1, #column_2 { margin-left: 0px; }\r
\r
\r
\r
.clear {\r
    display: none;\r
}`;export{e as default};