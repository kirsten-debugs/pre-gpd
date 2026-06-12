var e=`:root {\r
  --show-equipment-label: 1;\r
  --show-wishlist-label: 1;\r
  \r
  --label-equipped: 'Equipped';\r
  --label-wanted: 'Wanted';\r
  --label-questing: 'Questing';\r
  --label-bought: 'Bought';\r
  --label-donated: 'Donated';\r
}\r
\r
#id_equipment,\r
#id_wishlist {\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: center;\r
  gap: 15px;\r
  padding: 40px;\r
  background: linear-gradient(180deg, #87ceeb 0%, #b0e2ff 100%);\r
  border-radius: 30px;\r
  border: 4px solid #ffffff;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
#id_equipment::before,\r
#id_wishlist::before {\r
  content: '';\r
  position: absolute;\r
  inset: -100px;\r
  background-image: \r
    radial-gradient(circle at 20% 30%, white 0%, transparent 20%),\r
    radial-gradient(circle at 70% 60%, white 0%, transparent 25%),\r
    radial-gradient(circle at 40% 80%, white 0%, transparent 15%);\r
  filter: blur(40px);\r
  opacity: 0.5;\r
  animation: cloud-drift 60s linear infinite;\r
  pointer-events: none;\r
  z-index: 0;\r
}\r
\r
#id_equipment::after,\r
#id_wishlist::after {\r
  content: '';\r
  position: absolute;\r
  bottom: 0;\r
  left: -50%;\r
  width: 200%;\r
  height: 40%;\r
  background: linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent);\r
  filter: blur(20px);\r
  animation: rolling-mist 12s ease-in-out infinite alternate;\r
  pointer-events: none;\r
  z-index: 1;\r
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
  width: 36px;\r
  height: 30px;\r
  background: #ffffff;\r
  border-radius: 50px 50px 30px 30px;\r
  position: relative;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s ease, filter 0.4s ease;\r
  cursor: pointer;\r
  z-index: 2;\r
  border: none;\r
}\r
\r
#id_equipment .item:hover,\r
#id_wishlist .item:hover {\r
  animation: float-bounce 0.8s ease-in-out infinite alternate;\r
  background: #ffffff;\r
  filter: drop-shadow(0 6px 10px rgba(255, 255, 255, 0.8));\r
}\r
\r
#id_equipment .item_info::after,\r
#id_wishlist .item_info::after {\r
  position: absolute;\r
  bottom: 150%;\r
  left: 50%;\r
  transform: translateX(-50%) translateY(10px);\r
  padding: 6px 14px;\r
  background: rgba(255, 255, 255, 0.95);\r
  backdrop-filter: blur(5px);\r
  color: #4fc3f7;\r
  font-family: "Helvetica Neue", sans-serif;\r
  font-size: 9px;\r
  font-weight: 700;\r
  letter-spacing: 0.5px;\r
  text-transform: none;\r
  white-space: nowrap;\r
  border-radius: 20px;\r
  border: 1px solid rgba(255, 255, 255, 0.5);\r
  filter: drop-shadow(0 4px 6px rgba(0, 150, 255, 0.2));\r
  opacity: 0;\r
  visibility: hidden;\r
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\r
  z-index: 100;\r
  pointer-events: none;\r
}\r
\r
#id_equipment .item:hover .item_info::after,\r
#id_wishlist .item:hover .item_info::after {\r
  opacity: 1;\r
  visibility: visible;\r
  transform: translateX(-50%) translateY(0);\r
}\r
\r
#id_equipment .item_info::after { content: var(--label-equipped); }\r
\r
#id_wishlist a[title*='(Wanted)']::after { content: var(--label-wanted); }\r
#id_wishlist a[title*='(Questing)']::after { content: var(--label-questing); }\r
#id_wishlist a[title*='(Bought)']::after { content: var(--label-bought); }\r
#id_wishlist a[title*='(Donated)']::after { content: var(--label-donated); }\r
\r
#id_equipment .item::after,\r
#id_wishlist .item::after {\r
  content: '';\r
  position: absolute;\r
  width: 4px;\r
  height: 8px;\r
  background: #4fc3f7;\r
  border-radius: 50% 50% 20% 20%;\r
  top: 100%;\r
  left: 50%;\r
  transform: translateX(-50%) scale(0);\r
  opacity: 0;\r
  pointer-events: none;\r
  z-index: 1;\r
}\r
\r
#id_equipment .item:active::after,\r
#id_wishlist .item:active::after {\r
  animation: fall-rain 0.6s ease-out;\r
}\r
\r
#id_equipment .item::before,\r
#id_wishlist .item::before {\r
  content: '';\r
  position: absolute;\r
  background: inherit;\r
  border-radius: 50%;\r
  z-index: -1;\r
  transition: all 0.4s ease;\r
  width: 18px;\r
  height: 18px;\r
  top: -8px;\r
  left: 3px;\r
}\r
\r
#id_equipment .item_info,\r
#id_wishlist .item_info {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  position: relative;\r
  z-index: 3;\r
}\r
\r
#id_equipment .item_info::before,\r
#id_wishlist .item_info::before {\r
  content: '';\r
  position: absolute;\r
  background: white;\r
  border-radius: 50%;\r
  z-index: -1;\r
  transition: all 0.4s ease;\r
  width: 22px;\r
  height: 22px;\r
  top: -10px;\r
  right: -10px;\r
}\r
\r
#id_equipment .item_info img,\r
#id_wishlist .item_info img {\r
  width: 18px;\r
  height: 18px;\r
  object-fit: contain;\r
  filter: grayscale(1) opacity(0.4);\r
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s ease;\r
}\r
\r
#id_equipment .item:hover .item_info img,\r
#id_wishlist .item:hover .item_info img {\r
  filter: grayscale(0) opacity(1) drop-shadow(0 1px 2px rgba(0,0,0,0.1));\r
  animation: icon-float 1s ease-in-out infinite alternate;\r
}\r
\r
@keyframes float-bounce {\r
  from { transform: translateY(0px) scale(1.02); }\r
  to { transform: translateY(-5px) scale(1.05); }\r
}\r
\r
@keyframes fall-rain {\r
  0% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }\r
  100% { transform: translateX(-50%) translateY(40px) scale(0.5); opacity: 0; }\r
}\r
\r
@keyframes icon-float {\r
  from { transform: translateY(1px) rotate(1deg); }\r
  to { transform: translateY(-2px) rotate(-1deg); }\r
}\r
\r
@keyframes cloud-drift {\r
  from { transform: translateX(0) translateY(0); }\r
  to { transform: translateX(100px) translateY(50px); }\r
}\r
\r
@keyframes rolling-mist {\r
  from { transform: translateX(-10%) opacity(0.4); }\r
  to { transform: translateX(10%) opacity(0.7); }\r
}\r
\r
.premium_sparkle, \r
#id_equipment .clear, #id_equipment span,\r
#id_wishlist .clear, #id_wishlist span {\r
  display: none;\r
}`;export{e as default};