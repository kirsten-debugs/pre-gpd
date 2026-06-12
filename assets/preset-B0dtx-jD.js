var e=`#id_equipment {\r
  display: flex !important;\r
  flex-wrap: wrap !important;\r
  justify-content: center !important;\r
  gap: 24px !important;\r
  padding: 50px !important;\r
  background: #040806 !important;\r
  border-radius: 30px !important;\r
  border: 1px solid #0f241a !important;\r
  position: relative !important;\r
  overflow: hidden !important;\r
  background-image: \r
    radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),\r
    radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.05) 0%, transparent 50%) !important;\r
}\r
\r
/* Firefly Effect */\r
#id_equipment::before {\r
  content: '' !important;\r
  position: absolute !important;\r
  inset: 0 !important;\r
  background-image: \r
    radial-gradient(2px 2px at 20% 30%, #4ade80, transparent),\r
    radial-gradient(2px 2px at 50% 10%, #22c55e, transparent),\r
    radial-gradient(1.5px 1.5px at 80% 40%, #4ade80, transparent),\r
    radial-gradient(2px 2px at 10% 80%, #22c55e, transparent),\r
    radial-gradient(1.5px 1.5px at 70% 90%, #4ade80, transparent) !important;\r
  background-size: 200% 200% !important;\r
  animation: firefly-drift 12s linear infinite, firefly-flicker 4s ease-in-out infinite alternate !important;\r
  pointer-events: none !important;\r
  z-index: 1 !important;\r
}\r
\r
#equipment_title {\r
  display: none !important;\r
}\r
\r
#id_equipment .item {\r
  width: 48px !important;\r
  height: 48px !important;\r
  background: rgba(15, 36, 26, 0.6) !important;\r
  border: 1px solid rgba(34, 197, 94, 0.2) !important;\r
  border-radius: 12px 2px 12px 2px !important;\r
  position: relative !important;\r
  display: flex !important;\r
  justify-content: center !important;\r
  align-items: center !important;\r
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;\r
  cursor: pointer !important;\r
  z-index: 2 !important;\r
}\r
\r
/* Bioluminescent Pulse on hover */\r
#id_equipment .item::before {\r
  content: '' !important;\r
  position: absolute !important;\r
  inset: -4px !important;\r
  border-radius: inherit !important;\r
  background: #22c55e !important;\r
  filter: blur(12px) !important;\r
  opacity: 0 !important;\r
  z-index: -1 !important;\r
  transition: opacity 0.4s ease !important;\r
}\r
\r
#id_equipment .item:hover {\r
  background: rgba(34, 197, 94, 0.15) !important;\r
  border-color: #22c55e !important;\r
  transform: scale(1.1) rotate(5deg) !important;\r
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3) !important;\r
}\r
\r
#id_equipment .item:hover::before {\r
  opacity: 0.5 !important;\r
  animation: bio-pulse 2s ease-in-out infinite !important;\r
}\r
\r
/* Growth Line Animation */\r
#id_equipment .item::after {\r
  content: '' !important;\r
  position: absolute !important;\r
  bottom: 0 !important;\r
  left: 0 !important;\r
  width: 0 !important;\r
  height: 2px !important;\r
  background: #4ade80 !important;\r
  box-shadow: 0 0 10px #4ade80 !important;\r
  transition: width 0.4s ease !important;\r
}\r
\r
#id_equipment .item:hover::after {\r
  width: 100% !important;\r
}\r
\r
#id_equipment .item_info {\r
  display: flex !important;\r
  justify-content: center !important;\r
  align-items: center !important;\r
  width: 100% !important;\r
  height: 100% !important;\r
}\r
\r
#id_equipment .item_info img {\r
  width: 26px !important;\r
  height: 26px !important;\r
  object-fit: contain !important;\r
  filter: sepia(1) saturate(2) hue-rotate(80deg) brightness(0.8) !important;\r
  transition: all 0.4s ease !important;\r
}\r
\r
#id_equipment .item:hover .item_info img {\r
  filter: sepia(0) saturate(1.2) brightness(1.2) drop-shadow(0 0 5px rgba(34, 197, 94, 0.6)) !important;\r
  transform: rotate(-5deg) !important;\r
}\r
\r
@keyframes firefly-drift {\r
  0% { background-position: 0% 0%; }\r
  100% { background-position: 100% 100%; }\r
}\r
\r
@keyframes firefly-flicker {\r
  0%, 100% { opacity: 0.2; }\r
  50% { opacity: 0.8; }\r
}\r
\r
@keyframes bio-pulse {\r
  0%, 100% { transform: scale(1); opacity: 0.3; }\r
  50% { transform: scale(1.2); opacity: 0.6; }\r
}\r
\r
.premium_sparkle, \r
#id_equipment .clear, \r
#id_equipment span {\r
  display: none !important;\r
}`;export{e as default};