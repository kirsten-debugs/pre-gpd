var e=`#columns {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#column_1,
#column_2,
#column_3 {
    overflow: hidden;
    border: 1px dotted #64748b;
    height: 200px;
    width: 100%;
    box-sizing: border-box;

}

#column_1, #column_2 { margin-left: 0px; }



.clear {
    display: none;
}`;export{e as default};