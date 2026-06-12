var e=`:root {\r
    --show-halo: 1;\r
    --show-spark: 1;\r
    --show-shadow: 1;\r
    --show-equipment-label: 1;\r
    --show-wishlist-label: 1;\r
    --show-locked-state: 1;\r
\r
    --item-size: 35px;\r
    --item-gap: 15px;\r
\r
    --label-equipped: "Equipped";\r
    --label-wanted: "Wanted";\r
    --label-questing: "Questing";\r
    --label-bought: "Bought";\r
    --label-donated: "Donated";\r
}\r
#id_equipment,\r
#id_wishlist {\r
    display: flex;\r
    flex-wrap: wrap;\r
    justify-content: center;\r
    gap: var(--item-gap);\r
    padding: 50px 40px;\r
    background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);\r
    border-radius: 50px;\r
    border: 1px solid rgba(255, 255, 255, 0.1);\r
    position: relative;\r
    overflow: hidden;\r
}\r
\r
#id_wishlist, #id_equipment {\r
    font-size: 0;\r
\r
    h2, .premium_sparkle, .glow, .private_checkmark {\r
        display: none;\r
    }\r
}\r
\r
#id_wishlist > div[style*="margin:4px"] {\r
    display: none;\r
}\r
\r
#id_equipment .item,\r
#id_wishlist .item {\r
    width: var(--item-size);\r
    height: var(--item-size);\r
    background: rgba(255, 255, 255, 0.1);\r
    border-radius: 50%;\r
    border: 1px solid rgba(255, 255, 255, 0.2);\r
    position: relative;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s ease, border-color 0.4s ease, filter 0.4s ease, opacity 0.4s ease;\r
    cursor: pointer;\r
    z-index: 2;\r
}\r
\r
#id_equipment .item:hover,\r
#id_wishlist .item:hover {\r
    transform: translateY(calc(-8px * var(--show-shadow))) scale(1.15);\r
    background: rgba(255, 255, 255, 0.2);\r
    border-color: #fff4bd;\r
}\r
\r
#id_equipment .item::before,\r
#id_wishlist .item::before {\r
    content: '';\r
    position: absolute;\r
    top: calc(var(--item-size) * -0.2);\r
    left: 50%;\r
    width: calc(var(--item-size) * 0.65);\r
    height: calc(var(--item-size) * 0.15);\r
    border: 1.5px solid #fff4bd;\r
    border-radius: 50%;\r
    transform: translateX(-50%) rotateX(65deg) scale(0);\r
    opacity: 0;\r
    pointer-events: none;\r
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\r
    box-shadow: 0 0 12px #fff4bd, inset 0 0 4px #fff4bd;\r
}\r
\r
#id_equipment .item:hover::before,\r
#id_wishlist .item:hover::before {\r
    opacity: var(--show-halo);\r
    transform: translateX(-50%) rotateX(65deg) scale(var(--show-halo));\r
    top: calc(var(--item-size) * -0.3);\r
    animation: halo-float 2s ease-in-out infinite alternate;\r
}\r
\r
#id_equipment .item::after,\r
#id_wishlist .item::after {\r
    content: '';\r
    position: absolute;\r
    bottom: calc(var(--item-size) * -0.1);\r
    left: 50%;\r
    width: calc(var(--item-size) * 0.45);\r
    height: calc(var(--item-size) * 0.1);\r
    background: #fff4bd;\r
    border-radius: 50%;\r
    transform: translateX(-50%) scale(0.5);\r
    filter: blur(4px);\r
    transition: all 0.6s ease;\r
    z-index: -1;\r
    opacity: 0;\r
}\r
\r
#id_equipment .item:hover::after,\r
#id_wishlist .item:hover::after {\r
    opacity: calc(0.4 * var(--show-shadow));\r
    transform: translateX(-50%) scale(calc(1.5 * var(--show-shadow)));\r
    bottom: calc(var(--item-size) * -0.35);\r
    box-shadow: 0 0 15px #fff4bd;\r
}\r
\r
#id_wishlist .item:has(a[title*='(Bought)']),\r
#id_wishlist .item:has(a[title*='(Donated)']) {\r
    filter: grayscale(calc(1 * var(--show-locked-state))) opacity(calc(0.4 + (0.6 * (1 - var(--show-locked-state)))));\r
    pointer-events: var(--show-locked-state, none);\r
    border-color: rgba(255, 255, 255, calc(0.05 * var(--show-locked-state)));\r
}\r
\r
#id_equipment .item_info,\r
#id_wishlist .item_info {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    position: relative;\r
}\r
\r
#id_equipment .item_info::after,\r
#id_wishlist .item_info::after {\r
    content: '';\r
    position: absolute;\r
    top: 130%;\r
    left: 50%;\r
    transform: translateX(-50%) translateY(-5px);\r
    padding: 2px 8px;\r
    background: rgba(255, 255, 255, 0.05);\r
    border: 1px solid rgba(255, 244, 189, 0.3);\r
    color: #fff4bd;\r
    font-family: 'Georgia', serif;\r
    font-size: 8px;\r
    font-weight: 400;\r
    letter-spacing: 1px;\r
    border-radius: 10px;\r
    opacity: 0;\r
    visibility: hidden;\r
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\r
    white-space: nowrap;\r
    pointer-events: none;\r
    z-index: 10;\r
    backdrop-filter: blur(2px);\r
}\r
\r
#id_equipment .item:hover .item_info::after,\r
#id_wishlist .item:hover .item_info::after {\r
    opacity: var(--show-equipment-label);\r
    visibility: visible;\r
    transform: translateX(-50%) translateY(0);\r
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\r
}\r
\r
#id_equipment .item_info::after { content: var(--label-equipped); }\r
#id_wishlist .item:has(a[title*='(Wanted)']) .item_info::after { content: var(--label-wanted); }\r
#id_wishlist .item:has(a[title*='(Questing)']) .item_info::after { content: var(--label-questing); }\r
#id_wishlist .item:has(a[title*='(Bought)']) .item_info::after { content: var(--label-bought); }\r
#id_wishlist .item:has(a[title*='(Donated)']) .item_info::after { content: var(--label-donated); }\r
\r
#id_equipment .item_info::before,\r
#id_wishlist .item_info::before {\r
    content: '';\r
    position: absolute;\r
    top: calc(var(--item-size) * -0.25);\r
    left: 50%;\r
    width: calc(var(--item-size) * 0.1);\r
    height: calc(var(--item-size) * 0.1);\r
    background: #ffffff;\r
    border-radius: 50%;\r
    filter: blur(1px);\r
    box-shadow: 0 0 10px 2px #ffffff;\r
    opacity: 0;\r
    pointer-events: none;\r
    z-index: 3;\r
}\r
\r
#id_equipment .item:hover .item_info::before,\r
#id_wishlist .item:hover .item_info::before {\r
    opacity: var(--show-spark);\r
    animation: spark-orbit 4s linear infinite;\r
}\r
\r
@keyframes halo-float {\r
    0% { transform: translateX(-50%) rotateX(65deg) translateY(0); }\r
    100% { transform: translateX(-50%) rotateX(65deg) translateY(-2px); }\r
}\r
\r
@keyframes spark-orbit {\r
    0% { transform: translateX(-50%) rotateX(65deg) rotateZ(0deg) translateY(calc(var(--item-size) * -0.35)); }\r
    100% { transform: translateX(-50%) rotateX(65deg) rotateZ(360deg) translateY(calc(var(--item-size) * -0.35)); }\r
}\r
\r
#id_equipment .item_info img,\r
#id_wishlist .item_info img {\r
    width: calc(var(--item-size) * 0.5);\r
    height: calc(var(--item-size) * 0.5);\r
    object-fit: contain;\r
    filter: brightness(0) invert(1) opacity(0.7);\r
    transition: filter 0.4s ease;\r
}\r
\r
#id_equipment .item:hover .item_info img,\r
#id_wishlist .item:hover .item_info img {\r
    filter: brightness(0) invert(1) opacity(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));\r
}`;export{e as default};