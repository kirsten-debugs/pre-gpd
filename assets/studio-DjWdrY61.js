import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{A as t,B as n,Ct as r,F as i,Ft as a,H as o,I as s,It as c,L as l,Lt as u,M as d,Mt as f,N as p,Nt as m,O as h,P as g,R as _,Rt as v,T as y,a as b,c as x,d as S,f as C,h as w,i as T,j as E,k as D,l as O,lt as k,m as A,n as ee,o as te,p as ne,r as re,s as j,t as ie,u as ae,w as oe,z as se}from"./entry.client-BRN9rreO.js";import{t as M}from"./utils-DF2fVMEe.js";import{i as N,n as P,t as F}from"./tooltip-B5h4rg0i.js";import{n as I,r as L,t as ce}from"./vendor-motion-BmzKCacB.js";import{A as le,C as ue,D as de,G as fe,H as R,M as pe,N as me,O as he,P as ge,R as _e,T as ve,W as z,_ as ye,a as be,b as xe,c as Se,d as Ce,f as we,g as Te,h as Ee,j as De,k as Oe,l as ke,n as Ae,o as je,p as Me,s as Ne,t as Pe,u as Fe,v as Ie,w as Le,x as Re,z as ze}from"./vendor-icons-GZ1P6pS4.js";import{t as B}from"./button-zNwHQMqI.js";import{a as Be,i as Ve,n as He,o as Ue,r as V,s as H,t as We}from"./select-DSH136m7.js";import{t as Ge}from"./use-is-mobile-D6-J-ed-.js";import{a as U,c as Ke,d as qe,i as Je,l as Ye,n as Xe,o as Ze,r as Qe,s as W,t as $e,u as et}from"./vendor-editor-CtWYeUJH.js";import{a as tt,i as G,n as K,o as nt,r as rt,s as q,t as J}from"./dropdown-menu-CxwEY6G-.js";var it=e(u(),1),Y=e(v(),1),X=r();function at({className:e,...t}){return(0,X.jsx)(`label`,{"data-slot":`label`,className:M(`flex items-center gap-2 text-xs/relaxed leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`,e),...t})}var Z=n()(se(e=>({username:``,userId:``,avatarUrl:``,setProfile:t=>e(e=>({...e,...t}))}),{name:`gstudio-user`}));function ot({isOpen:e,onClose:t}){let n=Z(),r=e=>e.split(`?`)[0],[i,a]=(0,Y.useState)(n.username),[o,s]=(0,Y.useState)(n.userId),[c,l]=(0,Y.useState)(r(n.avatarUrl)),u=(0,Y.useMemo)(()=>n.username!==``||n.userId!==``||n.avatarUrl!==``,[n.username,n.userId,n.avatarUrl]);return(0,it.createPortal)((0,X.jsx)(L,{children:e&&(0,X.jsx)(I.div,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md`,children:(0,X.jsxs)(I.div,{className:`w-full max-w-lg bg-background/95 border border-primary/20 p-6 rounded-2xl shadow-2xl relative overflow-hidden`,children:[(0,X.jsx)(`div`,{className:`absolute -top-24 -right-24 size-48 bg-primary/10 rounded-full blur-3xl`}),(0,X.jsxs)(`div`,{className:`relative z-10 flex flex-col gap-6`,children:[(0,X.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,X.jsx)(`span`,{className:`text-xl font-black tracking-tighter text-primary`,children:`STUDIO`}),(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-8`,onClick:t,children:(0,X.jsx)(Pe,{className:`size-4`})})]}),(0,X.jsxs)(`div`,{className:`space-y-4`,children:[(0,X.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,X.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,X.jsx)(at,{className:`text-[9px] font-black uppercase tracking-widest text-muted-foreground`,children:`Username`}),(0,X.jsx)(H,{className:`bg-primary/5 border-primary/10`,placeholder:`gaia_user`,value:i,onChange:e=>a(e.target.value)})]}),(0,X.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,X.jsx)(at,{className:`text-[9px] font-black uppercase tracking-widest text-muted-foreground`,children:`User ID`}),(0,X.jsx)(H,{className:`bg-primary/5 border-primary/10`,placeholder:`0000`,value:o,onChange:e=>s(e.target.value)})]})]}),(0,X.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,X.jsx)(at,{className:`text-[9px] font-black uppercase tracking-widest text-muted-foreground`,children:`Avatar Source`}),(0,X.jsx)(H,{className:`bg-primary/5 border-primary/10 font-mono text-xs`,placeholder:`https://...`,value:c,onChange:e=>l(r(e.target.value))})]}),(0,X.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,X.jsx)(`div`,{className:`size-20 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0 overflow-hidden`,children:c?(0,X.jsx)(`img`,{src:c,alt:`Preview`,className:`size-full object-cover`}):(0,X.jsx)(be,{className:`size-6 text-primary/20`})}),(0,X.jsxs)(`div`,{className:`p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-2`,children:[(0,X.jsxs)(`div`,{className:`flex items-center gap-2 text-primary`,children:[(0,X.jsx)(je,{className:`size-4`}),(0,X.jsx)(`span`,{className:`text-[10px] font-black uppercase tracking-widest`,children:`Privacy Notice`})]}),(0,X.jsxs)(`p`,{className:`text-[10px] text-muted-foreground leading-relaxed`,children:[`These details are stored `,(0,X.jsx)(`strong`,{children:`locally in your browser`}),`. Your avatar URL is used for profile theme customization, while your username and ID are used to auto-generate theme credits in your CSS editor.`]})]})]})]}),(0,X.jsx)(B,{onClick:()=>{n.setProfile({username:i,userId:o,avatarUrl:c}),window.dispatchEvent(new Event(`profile-updated`)),t()},className:`w-full h-12 font-black uppercase tracking-widest gap-2 bg-primary text-primary-foreground hover:bg-primary/90`,children:u?(0,X.jsxs)(X.Fragment,{children:[` `,(0,X.jsx)(z,{className:`size-4`}),` Apply Changes `]}):(0,X.jsxs)(X.Fragment,{children:[` `,(0,X.jsx)(Fe,{className:`size-4`}),` Initialize Profile `]})})]})]})})}),document.body)}var st=(0,Y.memo)(({icon:e,label:t,active:n,onClick:r})=>{let[i,a]=(0,Y.useState)(!1);return(0,X.jsxs)(F,{open:i,children:[(0,X.jsx)(N,{children:(0,X.jsx)(B,{variant:n?`secondary`:`ghost`,size:`icon`,className:`size-8`,onClick:r,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:(0,X.jsx)(e,{className:`size-4`})})}),i&&(0,X.jsx)(P,{side:`right`,sideOffset:8,children:t})]})});function ct({className:e,children:t,...n}){return(0,X.jsxs)(_,{"data-slot":`scroll-area`,className:M(`relative`,e),...n,children:[(0,X.jsx)(l,{"data-slot":`scroll-area-viewport`,className:`size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1`,children:t}),(0,X.jsx)(lt,{}),(0,X.jsx)(g,{})]})}function lt({className:e,orientation:t=`vertical`,...n}){return(0,X.jsx)(s,{"data-slot":`scroll-area-scrollbar`,"data-orientation":t,orientation:t,className:M(`flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent`,e),...n,children:(0,X.jsx)(i,{"data-slot":`scroll-area-thumb`,className:`relative flex-1 rounded-full bg-border`})})}function ut({...e}){return(0,X.jsx)(y,{"data-slot":`context-menu`,...e})}function dt({className:e,...t}){return(0,X.jsx)(oe,{"data-slot":`context-menu-trigger`,className:M(`select-none`,e),...t})}function ft({className:e,align:n=`start`,alignOffset:r=4,side:i=`right`,sideOffset:a=0,...o}){return(0,X.jsx)(D,{children:(0,X.jsx)(h,{className:`isolate z-50 outline-none`,align:n,alignOffset:r,side:i,sideOffset:a,children:(0,X.jsx)(t,{"data-slot":`context-menu-content`,className:M(`z-50 max-h-(--available-height) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!`,e),...o})})})}function pt({...e}){return(0,X.jsx)(p,{"data-slot":`context-menu-group`,...e})}function mt({className:e,inset:t,...n}){return(0,X.jsx)(d,{"data-slot":`context-menu-label`,"data-inset":t,className:M(`px-2 py-1.5 text-xs text-muted-foreground data-inset:pl-7.5`,e),...n})}function ht({className:e,inset:t,variant:n=`default`,...r}){return(0,X.jsx)(E,{"data-slot":`context-menu-item`,"data-inset":t,"data-variant":n,className:M(`group/context-menu-item relative flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 data-[variant=destructive]:*:[svg]:text-destructive`,e),...r})}function gt({className:e,...t}){return(0,X.jsx)(o,{"data-slot":`context-menu-separator`,className:M(`-mx-1 my-1 h-px bg-border/50`,e),...t})}var _t=(e,t,n)=>{let r=t.lastIndexOf(`?`),i=e[r===-1||r<t.lastIndexOf(`/`)?t:t.slice(0,r)];return i?typeof i==`function`?i():Promise.resolve(i):new Promise((e,r)=>{(typeof queueMicrotask==`function`?queueMicrotask:setTimeout)(r.bind(null,Error(`Unknown variable dynamic import: `+t+(t.split(`/`).length===n?``:`. Note that variables only represent file names one level deep.`))))})},vt=(0,Y.createContext)(void 0),yt=(0,Y.createContext)(void 0);function bt({children:e}){let[t,n]=(0,Y.useState)(`v2`),[r,i]=(0,Y.useState)(``),[o,s]=(0,Y.useState)(`:root {
  --primary: #3b82f6;
}`),[c,l]=(0,Y.useState)(!1),[u,d]=(0,Y.useState)(null),[f,p]=(0,Y.useState)(!1),[m,h]=(0,Y.useState)(`background-color`),g=(0,Y.useRef)(null);(0,Y.useEffect)(()=>{let e=e=>{e.data?.type===`element-selected`&&d(e.data.selector)};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},[]);let _=(0,Y.useCallback)(async(e,t)=>{try{i((await _t(Object.assign({"../../presets/avatar_menu/Botanica/preset.css":()=>a(()=>import(`./preset-BdhCZpF-.js`),[],import.meta.url),"../../presets/columns/Left Sidebar/preset.css":()=>a(()=>import(`./preset-ARq4VN4w.js`),[],import.meta.url),"../../presets/columns/Top Wide/preset.css":()=>a(()=>import(`./preset-BGQSbA0P.js`),[],import.meta.url),"../../presets/columns/Vertical Stack/preset.css":()=>a(()=>import(`./preset-CoIwzN-J.js`),[],import.meta.url),"../../presets/columns/bottom-wide/preset.css":()=>a(()=>import(`./preset-5dgTcpTX.js`),[],import.meta.url),"../../presets/profile/meow/preset.css":()=>a(()=>import(`./preset-A9Xsp7NS.js`),[],import.meta.url),"../../presets/profile/test/preset.css":()=>a(()=>import(`./preset-DuJqmK_w.js`),[],import.meta.url),"../../presets/wishlist/angel/preset.css":()=>a(()=>import(`./preset-CCbzqXCs.js`),[],import.meta.url),"../../presets/wishlist/cloud/preset.css":()=>a(()=>import(`./preset-BjPTeGbZ.js`),[],import.meta.url),"../../presets/wishlist/test-wishlist/preset.css":()=>a(()=>import(`./preset-Dm_qmPiI.js`),[],import.meta.url)}),`../../presets/${t}/${e}/preset.css?raw`,6)).default)}catch(e){console.error(`Failed to load preset CSS:`,e)}},[]),v=(0,Y.useCallback)((e,t,n)=>{i(r=>{let i=e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),a=RegExp(`${i}\\s*{([^}]*)}`,`g`),o=!1,s=r.replace(a,(e,r)=>{o=!0;let i=RegExp(`${t}:\\s*[^;!]+(!important)?`,`g`),a=`${t}: ${n} !important`;return i.test(r)?e.replace(i,a):e.replace(`{`,`{ ${a};`)});return o?s:`${r}\n${e} { ${t}: ${n} !important; }`})},[]),y=(0,Y.useCallback)(e=>{l(!0),setTimeout(()=>{if(g.current){let t=g.current,n=t.state.doc,r=`${n.line(n.lines).text.trim().length>0?`
`:``}${e} {}\n`;t.dispatch({changes:{from:n.length,insert:r},selection:{anchor:n.length+r.length}}),t.focus()}},150)},[l]),b=(0,Y.useMemo)(()=>({version:t,setVersion:n,isCodeOpen:c,setIsCodeOpen:l,loadPreset:_,editorViewRef:g,insertCode:y,selectedElement:u,setSelectedElement:d,isSelectionMode:f,setIsSelectionMode:p,targetProperty:m,setTargetProperty:h,updateElementStyle:v,rootCss:o,setRootCss:s}),[t,c,_,y,u,f,m,v,o]),x=(0,Y.useMemo)(()=>({cssCode:r,setCssCode:i}),[r]);return(0,X.jsx)(vt.Provider,{value:b,children:(0,X.jsx)(yt.Provider,{value:x,children:e})})}var Q=()=>{let e=(0,Y.useContext)(vt);if(!e)throw Error(`useStudio must be used within a StudioProvider`);return e},xt=()=>{let e=(0,Y.useContext)(yt);if(!e)throw Error(`useCssCode must be used within a StudioProvider`);return e},St=`*(html, body(body #gaia_header(h1(h2(h3(a(a:hover(img(li(.clear(p(#header(* .yui-hidden(.journal-date(#column_1 img(#column_2 img(#column_3 img(#columns(#column_1(#column_2(#column_3(#column_1, #column_2, #column_3(FORM#profile li(FORM#profile ul.buttons li, FORM#profile ul.style1 li(#id_badges li, #id_equipment li, FORM#profile #id_badges li, FORM#profile #id_equipment li(#id_badges img(#id_equipment img(#id_equipment .clickable, #id_badges .clickable(#id_wishlist a(#find_friends_banner(#find_friends_banner a(#find_friends_banner a:hover(#modal, #modal .hd(#modal .hd h2(#modal .close(#modal iframe(#dialogArrow(.premium_sparkle(.owner_checkmark(.private_checkmark(.glow(.pushBox(.forum_userstatus(.forum_userstatus.trig .statuslinks(.forum_userstatus.hover .statuslinks(.forum_userstatus .statuslinks(.forum_userstatus .statuslinks a, .forum_userstatus .statuslinks span(.forum_userstatus .statuslinks span.online(.forum_userstatus .statuslinks span.offline(dd .dropBox(.dropBox(.deletecomment(#avatar_dropbox(#avatar_dropbox #trigger(#avatar_dropbox.trigger(#avatar_menu(#avatar_menu a(#avatar_menu a:hover(#avatar_menu li(#avatar_menu li.menu_seperator(#viewer #tooltip-badge .bd(#viewer #tooltip-badge .bd div(#viewer #tooltip-badge .bd img(#viewer img .clickable(.panel(.dd_panel(html>body .panel(.details_panel(.gifts_panel li(.gifts_panel li p(.gifts_panel img(.gifts_panel .gift_anonymous(.friends_panel .style1 li(.friends_panel .style2 li(.media_panel(.comments_panel #add_comment(.comments_panel #add_comment textarea(.comments_panel .style1 dt(.comments_panel .style1 dt .username(.comments_panel .style1 dd, .comments_panel .style2 dd(.comments_panel .style1 dd .avatar(.comments_panel .style1 dd p(.wish_list_panel .item(.equipped_list_panel .item(.house_panel(.house_panel .house_img img(.aquarium_panel(.aquarium_panel .aquarium_img img(.forums_panel(.signature_panel(.signature_panel h2(.interests_panel .interest_tags li(#friendGroup(#friendGroup ul(#friendGroup li(.decoration(.caption .caption_top(.caption p(.caption .caption_bottom_left(.caption .caption_bottom_right(.wish_list_decoration(.wish_list_decoration .decoration_content(.wish_list_decoration .decoration_content li(.equipped_list_decoration(.equipped_list_decoration .decoration_content(.equipped_list_decoration .decoration_content li(#gaia_header(#gaia_header #header_left(#gaia_header #header_left img(#gaia_header #header_right(#gaia_header #header_right img(#header_right li img(#gaia_header ul li(#gaia_header a(.spacer(div.postcontent .quote(div.postcontent .quote .cite(div.postcontent .quote .quoted(div.postcontent .clear(div.postcontent .code(div.postcontent ul(div.postcontent span.smilies(div.postcontent span.smilies b(div.postcontent span.smilies_biggrin(div.postcontent span.smilies_smile(div.postcontent span.smilies_redface(div.postcontent span.smilies_crying(div.postcontent span.smilies_stare(div.postcontent span.smilies_xd(div.postcontent span.smilies_3nodding(div.postcontent span.smilies_blaugh(div.postcontent span.smilies_gonk(div.postcontent span.smilies_scream(div.postcontent span.smilies_stressed(div.postcontent span.smilies_sweatdrop(div.postcontent span.smilies_heart(div.postcontent span.smilies_domokun(div.postcontent span.smilies_xp(div.postcontent span.smilies_whee(div.postcontent span.smilies_wink(div.postcontent span.smilies_sad(div.postcontent span.smilies_surprised(div.postcontent span.smilies_eek(div.postcontent span.smilies_confused(div.postcontent span.smilies_cool(div.postcontent span.smilies_lol(div.postcontent span.smilies_mad(div.postcontent span.smilies_razz(div.postcontent span.smilies_cry(div.postcontent span.smilies_evil(div.postcontent span.smilies_twisted(div.postcontent span.smilies_rolleyes(div.postcontent span.smilies_exclaim(div.postcontent span.smilies_question(div.postcontent span.smilies_idea(div.postcontent span.smilies_arrow(div.postcontent span.smilies_neutral(div.postcontent span.smilies_mrgreen(div.postcontent span.smilies_ninja(div.postcontent span.smilies_4laugh(div.postcontent span.smilies_rofl(div.postcontent span.smilies_pirate(div.postcontent span.smilies_talk2hand(div.postcontent span.smilies_burning_eyes(div.postcontent span.smilies_cheese_whine(div.postcontent span.smilies_dramallama(div.postcontent span.smilies_wahmbulance(div.postcontent span.smilies_emo(.genmed(.gensmall(.gensmallwhite(.gen, .genmed, .gensmall(a.gen, a.genmed, a.gensmall(a.gen:hover, a.genmed:hover, a.gensmall:hover(.code(.quote(#alerts_banner(#alerts_banner a(#alerts_banner a:hover(#alert_container(.yui-overlay, .yui-panel-container(.yui-tt(.yui-tt-shadow(* html body.masked select(* html div.yui-panel-container select(* html div.drag select(* html div.hide-select select(.mask(.hide-scrollbars, .hide-scrollbars *(.hide-scrollbars select(.show-scrollbars(.yui-panel-container.show-scrollbars(.yui-panel-container.show-scrollbars .underlay(.yui-panel-container .underlay(.yui-panel-container.matte(.yui-panel-container.shadow .underlay(.yui-panel-container.shadow .underlay.yui-force-redraw(.yui-effect-fade .underlay(.yui-panel(.yui-panel .hd(.yui-panel .bd(.yui-panel .bd p(.yui-panel .container-close(.yui-panel .ft(.yui-simple-dialog .bd .yui-icon(.yui-simple-dialog .bd span.blckicon(.yui-simple-dialog .bd span.alrticon(.yui-simple-dialog .bd span.hlpicon(.yui-simple-dialog .bd span.infoicon(.yui-simple-dialog .bd span.warnicon(.yui-simple-dialog .bd span.tipicon(.yui-dialog .ft, .yui-simple-dialog .ft(.yui-dialog form, .yui-simple-dialog form(.button-group button(.button-group button.default(.button-group button:hover, .button-group button.hover(.button-group button:active(.yui-override-padding(#equipped-list_mask(#equipped-list(#equipped-list a(#equipped-list .hd_equipped-list(#equipped-list .hd_equipped-list .leftCorner, #equipped-list .hd_equipped-list .rightCorner(#equipped-list .hd_equipped-list .leftCorner(#equipped-list .hd_equipped-list .rightCorner(#equipped-list .hd_equipped-list .titleBar(#equipped-list .hd_equipped-list .titleBar .title(#equipped-list .hd_equipped-list .titleBar #icon-close-list(#equipped-list .bd_equipped-list(#equipped-list .bd_equipped-list ul(#equipped-list .bd_equipped-list ul li(#equipped-list .bd_equipped-list ul li div.itemIcon(#equipped-list .bd_equipped-list ul li a.itemDesc(#equipped-list .bd_equipped-list ul li a.itemDesc:hover(#equipped-list .ft_equipped-list(#equipped-item-details_mask(#equipped-item-details(#equipped-item-details a(#equipped-item-details a:hover(#equipped-item-details .hd_equipped-details(#equipped-item-details .bd_equipped-details(#equipped-item-details .bd_equipped-details #icon-close-details(#equipped-item-details .bd_equipped-details div#itemIcon(#equipped-item-details .bd_equipped-details h1#itemTitle(#equipped-item-details .bd_equipped-details p#itemDesc, #equipped-item-details .bd_equipped-details p#itemAvail, #equipped-item-details .bd_equipped-details p#itemMarket, #equipped-item-details .bd_equipped-details p#itemBuyMarket(#equipped-item-details .bd_equipped-details p#itemDesc(#equipped-item-details .bd_equipped-details p#itemBuyMarket(#equipped-item-details .bd_equipped-details div.seperate(#equipped-item-details .bd_equipped-details div.itemBuy(#equipped-item-details .bd_equipped-details div.itemBuy span(#equipped-item-details .ft_equipped-details(#gotoShop, #addWishlist(#gotoShop:hover(#gaia_content #bd #playzomg, #gaia_content #bd .get-more-items(#gaia_content #bd #playzomg A, #gaia_content #bd #playzomg A:link, #gaia_content #bd #playzomg A:active, #gaia_content #bd .get-more-items A, #gaia_content #bd .get-more-items A:link, #gaia_content #bd .get-more-items A:active(#gaia_content #bd #playzomg A:hover, #gaia_content #bd .get-more-items A:hover(#gaia_content #bd #playzomg A:visited, #gaia_content #bd .get-more-items A:visited(#addWishlist(#addWishlist:hover(#itemMarket .deltaDown(#itemMarket .deltaUp(#itemMarket .deltaSame(.panel h2(html(body(#header a(#header_left(#header_right(#header_left img(#header_left ul(#header_right ul(#header_left li(#header_right li(#header_left a(#header_right a(.spoiler-wrapper(.spoiler-wrapper .spoiler-control(.spoiler-hidden > .spoiler-title > .spoiler-control-hide, .spoiler-revealed > .spoiler-title > .spoiler-control-show, .spoiler-hidden > .spoiler(.spoiler-revealed(.spoiler-revealed > .spoiler`.split(`(`),$={HOME:`home`,SELECTORS:`selectors`},Ct=[{id:$.HOME,icon:de,label:`Home`},{id:$.SELECTORS,icon:Le,label:`Selectors`}],wt=(0,Y.memo)(({selector:e,index:t})=>{let{insertCode:n}=Q();return(0,X.jsxs)(ut,{children:[(0,X.jsx)(dt,{children:(0,X.jsxs)(`button`,{onClick:()=>n(e),className:`w-full text-left flex gap-3 text-[11px] font-mono py-1.5 border-b border-border/20 hover:bg-secondary/50 focus:bg-secondary rounded items-start outline-none pr-3`,children:[(0,X.jsx)(`span`,{className:`text-muted-foreground/50 shrink-0 w-6 text-right font-sans`,children:t+1}),(0,X.jsx)(`span`,{className:`text-foreground wrap-break-words whitespace-normal`,children:e})]})}),(0,X.jsx)(ft,{className:`w-56`,children:(0,X.jsxs)(pt,{children:[(0,X.jsx)(mt,{className:`wrap-break-words whitespace-normal text-xs font-mono bg-muted/50 p-2 rounded-sm mb-1`,children:e}),(0,X.jsx)(gt,{}),(0,X.jsx)(ht,{onClick:()=>n(e),children:`Insert Selector`}),(0,X.jsx)(ht,{onClick:()=>n(`${e}::before`),children:`Insert with ::before`}),(0,X.jsx)(ht,{onClick:()=>n(`${e}::after`),children:`Insert with ::after`})]})})]})});wt.displayName=`SelectorItem`;var Tt=(0,Y.memo)(function(){let[e,t]=(0,Y.useState)(!1),[n,r]=(0,Y.useState)($.HOME),[i,a]=(0,Y.useState)(``),o=(0,Y.useMemo)(()=>St,[]),s=(0,Y.useMemo)(()=>{let e=i.toLowerCase();return o.filter(t=>t.toLowerCase().includes(e))},[o,i]),c=(0,Y.useCallback)(()=>t(e=>!e),[]),l=(0,Y.useCallback)(e=>{n===e?t(e=>!e):(r(e),t(!0))},[n]);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(`aside`,{className:`shrink-0 w-12 flex flex-col items-center py-4 gap-4 border-r border-border z-20 bg-background/50 backdrop-blur-sm`,children:[(0,X.jsxs)(F,{children:[(0,X.jsx)(N,{children:(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-8`,onClick:c,"aria-label":`Toggle Sidebar`,children:(0,X.jsx)(we,{className:`size-4`})})}),(0,X.jsx)(P,{side:`right`,children:`Toggle Sidebar`})]}),(0,X.jsx)(`div`,{className:`flex-1 flex flex-col gap-3 pt-4`,children:Ct.map(t=>(0,X.jsx)(st,{icon:t.icon,label:t.label,active:n===t.id&&e,onClick:()=>l(t.id)},t.id))})]}),(0,X.jsx)(I.aside,{initial:!1,animate:{width:e?256:0},className:`shrink-0 border-r border-border overflow-hidden z-20 bg-background/50 backdrop-blur-sm`,children:(0,X.jsxs)(`div`,{className:`w-64 flex flex-col h-screen`,children:[(0,X.jsx)(`div`,{className:`h-14 shrink-0 flex items-center px-4 border-b border-border`,children:(0,X.jsxs)(`h2`,{className:`font-semibold text-sm capitalize`,children:[n,` Menu`]})}),n===$.SELECTORS&&(0,X.jsxs)(`div`,{className:`flex flex-col flex-1 min-h-0`,children:[(0,X.jsxs)(`div`,{className:`p-4 shrink-0`,children:[(0,X.jsxs)(`div`,{className:`relative`,children:[(0,X.jsx)(Se,{className:`absolute left-2 top-1.5 size-3.5 text-muted-foreground`}),(0,X.jsx)(H,{placeholder:`Filter selectors...`,className:`pl-7`,value:i,onChange:e=>a(e.target.value)})]}),(0,X.jsxs)(`h3`,{className:`text-xs font-semibold text-muted-foreground uppercase mt-4 mb-2 px-1`,children:[`Selectors (`,s.length,`)`]})]}),(0,X.jsx)(`div`,{className:`flex-1 min-h-0 overflow-hidden`,children:(0,X.jsx)(ct,{className:`h-full w-full`,children:s.map((e,t)=>(0,X.jsx)(wt,{selector:e,index:t},e))})})]}),n===$.HOME&&(0,X.jsx)(`div`,{className:`p-4 text-sm text-muted-foreground`,children:`Home content goes here.`})]})})]})});function Et({...e}){return(0,X.jsx)(S,{"data-slot":`popover`,...e})}function Dt({...e}){return(0,X.jsx)(ae,{"data-slot":`popover-trigger`,...e})}function Ot({className:e,align:t=`center`,alignOffset:n=0,side:r=`bottom`,sideOffset:i=4,...a}){return(0,X.jsx)(O,{children:(0,X.jsx)(x,{align:t,alignOffset:n,side:r,sideOffset:i,className:`isolate z-50`,children:(0,X.jsx)(j,{"data-slot":`popover-content`,className:M(`z-50 flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-lg bg-popover p-2.5 text-xs text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,e),...a})})})}A([ne]);var kt=({color:e,onChange:t})=>{let n=w(e).toHex();return(0,X.jsxs)(Et,{children:[(0,X.jsx)(Dt,{children:(0,X.jsx)(`button`,{type:`button`,className:`size-5 rounded-full border border-border cursor-pointer transition-all hover:ring-2 hover:ring-primary/20 focus:outline-none focus:ring-2 focus:ring-primary`,style:{backgroundColor:e},"aria-label":`Pick a color`})}),(0,X.jsx)(Ot,{className:`w-auto p-0 border-none bg-transparent shadow-none`,align:`start`,children:(0,X.jsxs)(`div`,{className:`custom-layout p-0 rounded-xl backdrop-blur-md bg-background border flex flex-col`,children:[(0,X.jsx)(C,{color:n,onChange:t}),(0,X.jsx)(`input`,{type:`text`,className:`w-full px-3 py-1.5 rounded bg-muted text-foreground text-xs font-mono focus:outline-none`,value:n,onChange:e=>t(e.target.value),placeholder:`hex`})]})})]})};function At(e,t,n=.5){let r=(0,Y.useRef)(0);return te(({active:i,movement:[a],first:o})=>{o&&(r.current=e),i&&t(Math.round(r.current+a*n))},{filterTaps:!0})}var jt={FILE:`file`,SETTINGS:`settings`},Mt=[{id:jt.FILE,icon:le,label:`Files`},{id:jt.SETTINGS,icon:Ne,label:`Settings`}],Nt=(0,Y.memo)(function(){let[e,t]=(0,Y.useState)(!0),[n,r]=(0,Y.useState)(jt.FILE),{selectedElement:i,updateElementStyle:a}=Q(),[o,s]=(0,Y.useState)(0),[c,l]=(0,Y.useState)(100),[u,d]=(0,Y.useState)(1),f=(e,t)=>{i&&a(i,e,String(t))},p=At(o,e=>{let t=Math.max(0,Math.min(100,e));s(t),f(`border-radius`,`${t}%`)},.5),m=At(c,e=>{let t=Math.max(0,Math.min(100,e));l(t),f(`opacity`,t/100)},.2),h=At(u,e=>{let t=Math.max(0,e);d(t),f(`z-index`,t)},.1),g=(0,Y.useCallback)(()=>t(e=>!e),[]),_=(0,Y.useCallback)(e=>{n===e?t(e=>!e):(r(e),t(!0))},[n]);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(I.aside,{initial:!1,animate:{width:e?256:0},className:`shrink-0 border-l border-border overflow-hidden z-20 bg-background/50 backdrop-blur-sm`,children:(0,X.jsxs)(`div`,{className:`w-64 flex flex-col h-screen`,children:[(0,X.jsx)(`div`,{className:`h-14 shrink-0 flex items-center px-4 border-b border-border`,children:(0,X.jsxs)(`h2`,{className:`font-semibold text-sm capitalize`,children:[n,` Menu`]})}),(0,X.jsxs)(`div`,{className:`p-4 flex flex-col gap-6`,children:[(0,X.jsxs)(`div`,{children:[(0,X.jsxs)(`h3`,{className:`text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2`,children:[(0,X.jsx)(Ee,{className:`size-3`}),` Selected Element`]}),(0,X.jsx)(`div`,{className:`text-xs bg-muted p-2 rounded-md break-all font-mono`,children:i||`No element selected`})]}),i&&(0,X.jsxs)(`div`,{className:`space-y-6`,children:[(0,X.jsxs)(`div`,{className:`space-y-4`,children:[(0,X.jsxs)(`h3`,{className:`text-xs font-semibold text-muted-foreground flex items-center gap-2`,children:[(0,X.jsx)(Le,{className:`size-3`}),` Common Properties`]}),(0,X.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,X.jsxs)(`div`,{className:`space-y-1`,children:[(0,X.jsxs)(`label`,{className:`text-[10px] text-muted-foreground flex items-center gap-1`,children:[(0,X.jsx)(Ae,{className:`size-3`}),` Font`]}),(0,X.jsxs)(We,{onValueChange:e=>e&&f(`font-family`,e),children:[(0,X.jsx)(Ve,{className:`h-8 text-xs`,children:(0,X.jsx)(Be,{placeholder:`Family`})}),(0,X.jsxs)(He,{children:[(0,X.jsx)(V,{value:`sans-serif`,children:`Sans Serif`}),(0,X.jsx)(V,{value:`serif`,children:`Serif`}),(0,X.jsx)(V,{value:`monospace`,children:`Mono`})]})]})]}),(0,X.jsxs)(`div`,{className:`space-y-1`,children:[(0,X.jsxs)(`label`,{className:`text-[10px] text-muted-foreground flex items-center gap-1`,children:[(0,X.jsx)(Me,{className:`size-3`}),` Color`]}),(0,X.jsx)(kt,{color:`#000000`,onChange:e=>f(`color`,e)})]}),(0,X.jsxs)(`div`,{className:`space-y-1`,children:[(0,X.jsxs)(`label`,{className:`text-[10px] text-muted-foreground flex items-center gap-1`,children:[(0,X.jsx)(De,{className:`size-3`}),` Opacity`]}),(0,X.jsxs)(`div`,{className:`relative flex items-center`,children:[(0,X.jsx)(`div`,{...m(),className:`absolute left-2 z-10 text-[10px] text-muted-foreground font-bold uppercase cursor-ew-resize hover:text-foreground select-none touch-none`,children:`o`}),(0,X.jsx)(H,{type:`number`,value:c,onChange:e=>{let t=Math.min(100,Math.max(0,Number(e.target.value)));l(t),f(`opacity`,t/100)},className:`h-8 pl-6 text-xs`})]})]}),(0,X.jsxs)(`div`,{className:`space-y-1`,children:[(0,X.jsxs)(`label`,{className:`text-[10px] text-muted-foreground flex items-center gap-1`,children:[(0,X.jsx)(ve,{className:`size-3`}),` Z-Index`]}),(0,X.jsxs)(`div`,{className:`relative flex items-center`,children:[(0,X.jsx)(`div`,{...h(),className:`absolute left-2 z-10 text-[10px] text-muted-foreground font-bold uppercase cursor-ew-resize hover:text-foreground select-none touch-none`,children:`z`}),(0,X.jsx)(H,{type:`number`,value:u,onChange:e=>{let t=Math.max(0,Number(e.target.value));d(t),f(`z-index`,t)},className:`h-8 pl-6 text-xs`})]})]})]})]}),(0,X.jsxs)(`div`,{className:`pt-2 border-t border-border`,children:[(0,X.jsxs)(`h3`,{className:`text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2`,children:[(0,X.jsx)(fe,{className:`size-3`}),` Border Radius`]}),(0,X.jsxs)(`div`,{className:`relative flex items-center`,children:[(0,X.jsx)(`div`,{...p(),className:`absolute left-2 z-10 text-[10px] text-muted-foreground font-bold uppercase cursor-ew-resize hover:text-foreground select-none touch-none`,children:`r`}),(0,X.jsx)(H,{type:`number`,value:o,onChange:e=>{let t=Math.min(100,Math.max(0,Number(e.target.value)));s(t),f(`border-radius`,`${t}%`)},className:`h-8 pl-6 text-xs rounded-md`}),(0,X.jsx)(`span`,{className:`absolute right-3 text-xs text-muted-foreground pointer-events-none`,children:`%`})]})]})]})]})]})}),(0,X.jsxs)(`aside`,{className:`shrink-0 w-12 flex flex-col items-center py-4 gap-4 border-l border-border z-20 bg-background/50 backdrop-blur-sm`,children:[(0,X.jsxs)(F,{children:[(0,X.jsx)(N,{children:(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-8 rounded-md`,onClick:g,"aria-label":`Toggle Sidebar`,children:(0,X.jsx)(Ce,{className:`size-4`})})}),(0,X.jsx)(P,{side:`left`,children:`Toggle Sidebar`})]}),(0,X.jsx)(`div`,{className:`flex-1 flex flex-col gap-3 pt-4`,children:Mt.map(t=>(0,X.jsx)(st,{icon:t.icon,label:t.label,active:n===t.id&&e,onClick:()=>_(t.id)},t.id))})]})]})}),Pt=`(function() {
    // --- Avatar Menu Logic ---
    let menu = document.getElementById("avatar_menu");
    let hideTimer = null;

    if (!menu) {
        menu = document.createElement("ul");
        menu.id = "avatar_menu";
        document.body.appendChild(menu);
    }

    // Helper to fetch your local profile data
    const getLocalProfile = () => {
        try {
            const data = localStorage.getItem("gstudio-user");
            return data ? JSON.parse(data).state : {};
        } catch (e) {
            return {};
        }
    };

    const populate = (o) => {
        const myProfile = getLocalProfile();
        
        menu.innerHTML = \`
            <li id="viewposts"><a href="/gsearch/posthistory/\${o.id}">View Posts</a></li>
            <li><a href="/collections/show/\${o.id}">Favorites</a></li>
            <li><a href="/achievements/public/\${o.id}">Achievements</a></li>
            <li><a href="/profiles/\${encodeURIComponent(o.username)}/\${o.id}/">Profile</a></li>
            <li id="jointhem"><a href="/get/location?userid=\${o.id}">Join Them</a></li>
            <li id="journalentry"><a href="/journal/?mode=view&u=\${o.id}">Journal</a></li>
            <li id="addfriend"><a href="/friends/add/\${o.id}">Add as Friend</a></li>
            <li class="menu_seperator">&nbsp;</li>
            <li id="sendpm"><a href="/profile/privmsg.php?mode=post&u=\${o.id}">Send PM</a></li>
            <li id="viewstore"><a href="/marketplace/userstore/\${o.id}">View Store</a></li>
            <li id="sendim"><a href="javascript:void(0);">Send IM</a></li>
            <li class="menu_seperator">&nbsp;</li>
            <li id="trade"><a href="/gaia/bank.php?mode=trade&uid=\${o.id}">Trade</a></li>
            <li><a href="javascript:void(0);">View Equipped List</a></li>
            <li id="website"><a href="\${o.website}">My website</a></li>
            <li class="menu_seperator" id="ignoreline">&nbsp;</li>
            <li id="ignore"><a href="/friends/?hook=\${o.id}">Ignore</a></li>
        \`;
    };

    document.addEventListener("mouseover", (e) => {
        const pushbox = e.target.closest(".pushBox");
        
        if (pushbox) {
            clearTimeout(hideTimer);
            const container = pushbox.parentNode.parentNode;
            const rect = container.getBoundingClientRect();
            
            populate({
                id: pushbox.dataset.uid,
                username: pushbox.dataset.username,
                website: pushbox.dataset.website
            });

            menu.style.width = "120px";
            menu.style.top = (window.scrollY + rect.bottom - 1) + "px";
            menu.style.left = (window.scrollX + rect.left) + "px";
            menu.style.display = "block";
        } 
    });

    document.addEventListener("mouseout", (e) => {
        const pushbox = e.target.closest(".pushBox");
        const isMenu = e.target.closest("#avatar_menu");

        if (pushbox || isMenu) {
            hideTimer = setTimeout(() => {
                menu.style.display = "none";
            }, 300);
        }
    });

    menu.addEventListener("mouseover", () => {
        clearTimeout(hideTimer);
    });

    // --- Spoiler Toggle Logic ---
    document.addEventListener("click", (evt) => {
        const target = evt.target.closest("button.spoiler-control");
        if (!target) return;

        const wrapper = target.closest(".spoiler-wrapper");
        if (wrapper) {
            const isHidden = wrapper.classList.contains("spoiler-hidden");
            wrapper.classList.toggle("spoiler-hidden", !isHidden);
            wrapper.classList.toggle("spoiler-revealed", isHidden);
            
            evt.preventDefault();
        }
    });
})();`,Ft=`<body id="viewer" class="bbcode-swap-blocked-group  js">
    <div id="gaia_header">
        <ul id="header_left">
            <li class="spacer"></li>
            <li><a href="/"><img src="https://graphics.gaiaonline.com/images/profile/mini_gaialogo.gif" width="47"
                        height="23" alt="Gaia"></a></li>
            <li> <a href="/mygaia/">My Gaia</a> |</li>
            <li><a href="/market/">Shops</a></li>
            <li>| <a href="/forum/">Forums</a></li>
            <li>| <a href="/world/">World</a></li>
            <li>| <a href="/games/">Games</a></li>
        </ul>

        <ul id="header_right">
            <li><a href="https://www.gaiaonline.com/profiles/overthink/20150259/"><span class="profile-header-username"
                        title="Overthink">Overthink</span></a></li>
            <li>| <a href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=edit">Edit My Profile Layout</a>
            </li>
            <li>| <a href="/auth/logout/?user_id=20150259&amp;nonce=449471550.1780572918.1744231110">Sign Out</a></li>
            <li>| <a href="/gaia/report.php?r=22&amp;rpost=20150259">Report this Profile</a></li>
        </ul>
    </div>

    <div id="panel-details">
        <div class="hd">
            <h2></h2>
        </div>
        <div class="bd"></div>
        <div class="ft"></div>
    </div>

    <div id="columns">
        <div id="column_1" class="column focus_column">
            <div id="id_mycar" class="panel mycar_panel">
                <h2 id="mycar_title">My Car</h2>

                <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                    codebase=" //fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"
                    width="200" height="200" id="gcar" align="top">
                    <param name="allowScriptAccess" value="sameDomain">
                    <param name="movie"
                        value="https://graphics.gaiaonline.com/images/Gaia_Flash/auto/ModelPlayer.swf?userid=20150259&amp;gsiUrl=www">
                    <param name="menu" value="false">
                    <param name="quality" value="high">
                    <param name="allowScriptAccess" value="always">
                    <param name="scale" value="noscale">
                    <param name="salign" value="lt">
                    <param name="wmode" value="transparent">
                    <ruffle-embed
                        src="https://graphics.gaiaonline.com/images/Gaia_Flash/auto/ModelPlayer.swf?userid=20150259&amp;gsiUrl=www"
                        menu="false" quality="high" scale="noscale" salign="lt" wmode="transparent" bgcolor="#ffffff"
                        width="200" height="200" name="gcar" align="top" allowscriptaccess="sameDomain"
                        type="application/x-shockwave-flash"
                        pluginspage=" https://www.macromedia.com/go/getflashplayer"><template shadowrootmode="open"
                            shadowrootdelegatesfocus="">
                            <style>
                                :host {
                                    all: initial;
                                    pointer-events: inherit;
                                    --ruffle-blue: #37528c;
                                    --ruffle-blue-dark: #253559;
                                    --ruffle-orange: #ffad33;
                                    --modal-background: #fafafa;
                                    --modal-foreground-rgb: 0, 0, 0;
                                    --modal-foreground-filter: none;
                                    display: inline-block;
                                    font-family: Arial, sans-serif;
                                    height: 400px;
                                    letter-spacing: .4px;
                                    position: relative;
                                    touch-action: none;
                                    -webkit-user-select: none;
                                    -moz-user-select: none;
                                    user-select: none;
                                    width: 550px;
                                    -webkit-tap-highlight-color: transparent
                                }

                                :host(:-webkit-full-screen) {
                                    display: block;
                                    height: 100% !important;
                                    width: 100% !important
                                }

                                .hidden {
                                    display: none !important
                                }

                                #container,
                                #message-overlay,
                                #panic,
                                #play-button,
                                #splash-screen,
                                #unmute-overlay,
                                #unmute-overlay .background {
                                    inset: 0;
                                    position: absolute
                                }

                                #container {
                                    outline: none;
                                    overflow: hidden
                                }

                                #container canvas {
                                    height: 100%;
                                    width: 100%
                                }

                                #play-button,
                                #unmute-overlay {
                                    cursor: pointer;
                                    display: none
                                }

                                #unmute-overlay .background {
                                    background: #000;
                                    opacity: .7
                                }

                                #play-button .icon,
                                #unmute-overlay .icon {
                                    height: 50%;
                                    left: 50%;
                                    max-height: 384px;
                                    max-width: 384px;
                                    opacity: .8;
                                    position: absolute;
                                    top: 50%;
                                    transform: translate(-50%, -50%);
                                    width: 50%
                                }

                                #play-button:hover .icon,
                                #unmute-overlay:hover .icon {
                                    opacity: 1
                                }

                                #unmute-overlay-svg {
                                    scale: .8
                                }

                                #panic {
                                    align-items: center;
                                    background: linear-gradient(180deg, #fd3a40, #fda138);
                                    color: #fff;
                                    display: flex;
                                    flex-flow: column;
                                    font-size: 15px;
                                    gap: 8px;
                                    justify-content: center;
                                    overflow: auto;
                                    padding: 16px;
                                    text-align: center
                                }

                                #panic a {
                                    color: #fff;
                                    text-underline-offset: 2px
                                }

                                #panic-title {
                                    font-size: 30px;
                                    font-weight: 700;
                                    letter-spacing: -.5px
                                }

                                #panic-body {
                                    max-width: 480px;
                                    opacity: .85;
                                    width: 100%
                                }

                                #panic-details-modal {
                                    align-items: center;
                                    background: #0008;
                                    box-sizing: border-box;
                                    display: flex;
                                    inset: 0;
                                    justify-content: center;
                                    padding: 8px;
                                    position: absolute;
                                    z-index: 1
                                }

                                #panic-details-content {
                                    background-color: var(--modal-background);
                                    border-radius: 12px;
                                    box-shadow: 0 2px 6px 0 #0008;
                                    box-sizing: border-box;
                                    color: rgb(var(--modal-foreground-rgb));
                                    height: 80%;
                                    max-width: 720px;
                                    overflow: hidden;
                                    padding: 44px 12px 12px;
                                    position: relative;
                                    width: 100%
                                }

                                #panic-details-content .panic-copy-button {
                                    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240zm0-80h360v-480H360zM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80zm160-240v-480z"/></svg>');
                                    border-radius: 4px;
                                    cursor: pointer;
                                    filter: var(--modal-foreground-filter);
                                    height: 16px;
                                    opacity: .6;
                                    position: absolute;
                                    right: 40px;
                                    top: 14px;
                                    transition: opacity .15s, background-image 0s;
                                    width: 16px
                                }

                                :is(#panic-details-content .panic-copy-button):hover {
                                    opacity: 1
                                }

                                .copied:is(#panic-details-content .panic-copy-button) {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2322c55e' viewBox='0 -960 960 960'%3E%3Cpath d='M382-240 154-468l57-57 171 171 367-367 57 57z'/%3E%3C/svg%3E");
                                    cursor: default;
                                    filter: none;
                                    opacity: 1;
                                    pointer-events: none
                                }

                                #panic-details-content textarea {
                                    background: rgb(var(--modal-foreground-rgb), .07);
                                    border: none;
                                    border-radius: 8px;
                                    box-sizing: border-box;
                                    color: rgb(var(--modal-foreground-rgb));
                                    font-family: monospace;
                                    font-size: 12px;
                                    height: 100%;
                                    outline: none;
                                    padding: 10px;
                                    resize: none;
                                    width: 100%
                                }

                                #panic-details-content textarea::-webkit-scrollbar {
                                    width: 6px
                                }

                                #panic-details-content textarea::-webkit-scrollbar-thumb {
                                    background: rgb(var(--modal-foreground-rgb), .25);
                                    border-radius: 3px
                                }

                                #panic-details-content textarea::-webkit-scrollbar-track {
                                    background: transparent
                                }

                                #message-overlay {
                                    align-items: center;
                                    background: var(--ruffle-blue);
                                    color: var(--ruffle-orange);
                                    display: flex;
                                    justify-content: center;
                                    opacity: 1;
                                    overflow: auto;
                                    z-index: 2
                                }

                                #message-overlay .message {
                                    font-size: 20px;
                                    max-height: 100%;
                                    max-width: 100%;
                                    padding: 5%;
                                    text-align: center
                                }

                                #message-overlay p {
                                    margin: .5em 0
                                }

                                #message-overlay .message div {
                                    -moz-column-gap: 1em;
                                    column-gap: 1em;
                                    display: flex;
                                    flex-wrap: wrap;
                                    justify-content: center
                                }

                                #message-overlay a,
                                #message-overlay button {
                                    background: var(--ruffle-blue);
                                    border: 2px solid var(--ruffle-orange);
                                    border-radius: 8px;
                                    color: var(--ruffle-orange);
                                    cursor: pointer;
                                    font-family: inherit;
                                    font-size: 16px;
                                    font-weight: 700;
                                    margin: 8px 0;
                                    padding: 10px 16px;
                                    text-decoration: none;
                                    transition: background .15s
                                }

                                #panic ul {
                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: 8px;
                                    justify-content: center;
                                    list-style-type: none;
                                    margin: 0;
                                    padding: 0
                                }

                                :is(#panic ul) li a {
                                    background: transparent;
                                    border: 1px solid hsla(0, 0%, 100%, .7);
                                    border-radius: 8px;
                                    color: #fff;
                                    display: inline-block;
                                    font-family: inherit;
                                    font-size: 13px;
                                    font-weight: 700;
                                    padding: 8px 16px;
                                    text-decoration: none;
                                    transition: background .15s
                                }

                                :is(:is(#panic ul) li a):hover {
                                    background: hsla(0, 0%, 100%, .2)
                                }

                                #message-overlay a:hover,
                                #message-overlay button:hover {
                                    background: #ffffff4c
                                }

                                #context-menu-overlay,
                                .modal {
                                    height: 100%;
                                    position: absolute;
                                    width: 100%;
                                    z-index: 1
                                }

                                #context-menu {
                                    background-color: var(--modal-background);
                                    border-radius: 8px;
                                    box-shadow: 0 0 16px #0006;
                                    color: rgb(var(--modal-foreground-rgb));
                                    font-size: 14px;
                                    list-style: none;
                                    margin: 0;
                                    overflow: hidden;
                                    padding: 5px 0;
                                    position: absolute;
                                    text-align: start;
                                    white-space: nowrap
                                }

                                #context-menu .menu-item {
                                    padding: 7px 12px
                                }

                                #context-menu.has-checkmarks .menu-item {
                                    padding-inline-start: 32px;
                                    position: relative
                                }

                                #context-menu.has-checkmarks .menu-item.checked:before {
                                    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57z"/></svg>');
                                    background-repeat: no-repeat;
                                    background-size: contain;
                                    content: "";
                                    filter: var(--modal-foreground-filter);
                                    height: 16px;
                                    inset-inline-start: 8px;
                                    position: absolute;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    width: 16px
                                }

                                #context-menu .menu-item.disabled {
                                    color: rgb(var(--modal-foreground-rgb), .5);
                                    cursor: default
                                }

                                #context-menu .menu-item:not(.disabled):hover {
                                    background-color: rgb(var(--modal-foreground-rgb), .15)
                                }

                                #context-menu .menu-separator hr {
                                    border: none;
                                    border-bottom: 1px solid rgb(var(--modal-foreground-rgb), .2);
                                    margin: 4px 0
                                }

                                #splash-screen {
                                    align-items: center;
                                    background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center
                                }

                                .loadbar {
                                    background: var(--ruffle-blue-dark);
                                    height: 20%;
                                    max-height: 10px;
                                    max-width: 316px;
                                    width: 100%
                                }

                                .loadbar-inner {
                                    background: var(--ruffle-orange);
                                    height: 100%;
                                    max-width: 100%;
                                    width: 0
                                }

                                .logo {
                                    display: var(--logo-display, block);
                                    max-height: 150px;
                                    max-width: 380px
                                }

                                .loading-animation {
                                    aspect-ratio: 1;
                                    margin-bottom: 2%;
                                    max-height: 28px;
                                    max-width: 28px;
                                    width: 10%
                                }

                                .spinner {
                                    animation: a 1.5s linear infinite;
                                    stroke: var(--ruffle-orange);
                                    stroke-dasharray: 180;
                                    stroke-dashoffset: 135;
                                    transform-origin: 50% 50%
                                }

                                @keyframes a {
                                    to {
                                        transform: rotate(1turn)
                                    }
                                }

                                #virtual-keyboard {
                                    height: 1px;
                                    opacity: 0;
                                    position: absolute;
                                    top: -100px;
                                    width: 1px
                                }

                                .modal {
                                    background-color: #0008
                                }

                                .modal-area {
                                    background-color: var(--modal-background);
                                    border-radius: 12px;
                                    box-shadow: 0 2px 6px 0 #0008;
                                    color: rgb(var(--modal-foreground-rgb));
                                    left: 50%;
                                    padding: 8px 12px;
                                    position: relative;
                                    transform: translateX(-50%);
                                    width: -moz-fit-content;
                                    width: fit-content
                                }

                                #modal-area {
                                    height: 300px;
                                    width: 450px
                                }

                                .close-modal {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");
                                    cursor: pointer;
                                    filter: var(--modal-foreground-filter);
                                    height: 16px;
                                    width: 16px
                                }

                                .modal-button {
                                    background-color: rgb(var(--modal-foreground-rgb), .2);
                                    border-radius: 6px;
                                    color: rgb(var(--modal-foreground-rgb));
                                    cursor: pointer;
                                    display: inline-block;
                                    padding: 4px 8px;
                                    text-decoration: none
                                }

                                :not(#volume-controls)>.close-modal {
                                    position: absolute;
                                    right: 16px;
                                    top: 14px
                                }

                                .general-save-options {
                                    border-bottom: 2px solid rgb(var(--modal-foreground-rgb), .3);
                                    padding-bottom: 8px;
                                    text-align: center
                                }

                                #local-saves {
                                    border-collapse: collapse;
                                    color: inherit;
                                    display: block;
                                    height: calc(100% - 45px);
                                    min-height: 30px;
                                    overflow-y: auto
                                }

                                #local-saves td {
                                    border-bottom: 2px solid rgb(var(--modal-foreground-rgb), .15);
                                    height: 30px
                                }

                                #local-saves td:first-child {
                                    width: 100%;
                                    word-break: break-all
                                }

                                .save-option {
                                    cursor: pointer;
                                    display: inline-block;
                                    filter: var(--modal-foreground-filter);
                                    height: 24px;
                                    opacity: .4;
                                    vertical-align: middle;
                                    width: 24px
                                }

                                #local-saves>tr:hover .save-option {
                                    opacity: 1
                                }

                                #download-save {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")
                                }

                                #replace-save {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")
                                }

                                #delete-save {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")
                                }

                                .replace-save {
                                    display: none
                                }

                                #video-modal .modal-area {
                                    box-sizing: border-box;
                                    height: 95%;
                                    width: 95%
                                }

                                #video-holder {
                                    box-sizing: border-box;
                                    height: 100%;
                                    padding: 36px 4px 6px
                                }

                                #video-holder video {
                                    background-color: #000;
                                    height: 100%;
                                    width: 100%
                                }

                                #volume-controls {
                                    align-items: center;
                                    display: flex;
                                    gap: 6px
                                }

                                #mute-checkbox {
                                    display: none
                                }

                                label[for=mute-checkbox] {
                                    cursor: pointer;
                                    filter: var(--modal-foreground-filter);
                                    height: 24px;
                                    line-height: 0;
                                    width: 24px
                                }

                                #volume-mute {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")
                                }

                                #volume-min {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")
                                }

                                #volume-mid {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")
                                }

                                #volume-max {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")
                                }

                                #volume-slider-text {
                                    text-align: center;
                                    -webkit-user-select: none;
                                    -moz-user-select: none;
                                    user-select: none;
                                    width: 4.8ch
                                }

                                #hardware-acceleration-modal .modal-area {
                                    box-sizing: border-box;
                                    padding: 16px 48px;
                                    text-align: center;
                                    width: 95%
                                }

                                #acceleration-text {
                                    display: block;
                                    margin-bottom: 8px
                                }

                                #clipboard-modal h2 {
                                    margin-right: 36px;
                                    margin-top: 4px
                                }

                                #clipboard-modal p:last-child {
                                    margin-bottom: 2px
                                }

                                @media (prefers-color-scheme:light) {
                                    :host {
                                        --modal-background: #fafafa;
                                        --modal-foreground-rgb: 0, 0, 0;
                                        --modal-foreground-filter: none
                                    }
                                }

                                @media (prefers-color-scheme:dark) {
                                    :host {
                                        --modal-background: #282828;
                                        --modal-foreground-rgb: 221, 221, 221;
                                        --modal-foreground-filter: invert(90%)
                                    }
                                }
                            </style>
                            <style id="dynamic-styles"></style>
                            <div id="container" class="" tabindex="-1">
                                <div id="play-button" style="display: none;">
                                    <div class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" width="100%"
                                            height="100%">
                                            <defs xmlns="http://www.w3.org/2000/svg">
                                                <linearGradient xmlns="http://www.w3.org/2000/svg" id="a"
                                                    gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250"
                                                    spreadMethod="pad">
                                                    <stop xmlns="http://www.w3.org/2000/svg" offset="0%"
                                                        stop-color="#FDA138"></stop>
                                                    <stop xmlns="http://www.w3.org/2000/svg" offset="100%"
                                                        stop-color="#FD3A40"></stop>
                                                </linearGradient>
                                                <g xmlns="http://www.w3.org/2000/svg" id="b">
                                                    <path xmlns="http://www.w3.org/2000/svg" fill="url(#a)"
                                                        d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z">
                                                    </path>
                                                    <path xmlns="http://www.w3.org/2000/svg" fill="#FFF"
                                                        d="M87 55v140l100-70L87 55z"></path>
                                                </g>
                                            </defs>
                                            <use xmlns="http://www.w3.org/2000/svg" href="#b"></use>
                                        </svg></div>
                                </div>
                                <div id="unmute-overlay">
                                    <div class="background"></div>
                                    <div class="icon"><svg id="unmute-overlay-svg" xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid" viewBox="0 0 512 584" width="100%"
                                            height="100%">
                                            <path xmlns="http://www.w3.org/2000/svg" fill="#FFF" stroke="#FFF"
                                                d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z">
                                            </path>
                                            <path xmlns="http://www.w3.org/2000/svg" fill="#FFF" stroke="#FFF"
                                                d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z">
                                            </path>
                                            <path xmlns="http://www.w3.org/2000/svg" fill="#FFF" stroke="#FFF"
                                                d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z">
                                            </path><text xmlns="http://www.w3.org/2000/svg" id="unmute-text" x="256"
                                                y="560" text-anchor="middle" font-size="60px" fill="#FFF"
                                                stroke="#FFF">Click to unmute</text>
                                        </svg></div>
                                </div><input aria-hidden="true" id="virtual-keyboard" type="text" autocomplete="off"
                                    autocorrect="off" autocapitalize="none"><canvas width="400" height="400"
                                    style="touch-action: none; cursor: auto;"></canvas>
                            </div>
                            <div id="splash-screen" class="hidden"><svg xmlns="http://www.w3.org/2000/svg" class="logo"
                                    preserveAspectRatio="xMidYMid" viewBox="0 0 380 150">
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <path xmlns="http://www.w3.org/2000/svg" fill="#966214"
                                            d="M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z">
                                        </path>
                                        <path xmlns="http://www.w3.org/2000/svg" fill="var(--ruffle-orange)"
                                            d="M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z">
                                        </path>
                                    </g>
                                </svg><svg xmlns="http://www.w3.org/2000/svg" class="loading-animation"
                                    viewBox="0 0 66 66">
                                    <circle xmlns="http://www.w3.org/2000/svg" class="spinner" fill="none"
                                        stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                                </svg>
                                <div class="loadbar">
                                    <div class="loadbar-inner"></div>
                                </div>
                            </div>
                            <div id="save-manager" class="modal hidden">
                                <div id="modal-area" class="modal-area"><span class="close-modal"></span>
                                    <div class="general-save-options"><span class="modal-button">Download all save
                                            files</span></div>
                                    <table id="local-saves"></table>
                                </div>
                            </div>
                            <div id="volume-controls-modal" class="modal hidden">
                                <div class="modal-area">
                                    <div id="volume-controls"><input id="mute-checkbox" type="checkbox"><label
                                            id="volume-mute" for="mute-checkbox" title="Unmute"
                                            style="display: none;"></label><label id="volume-min" for="mute-checkbox"
                                            title="Mute" style="display: none;"></label><label id="volume-mid"
                                            for="mute-checkbox" title="Mute" style="display: none;"></label><label
                                            id="volume-max" for="mute-checkbox" title="Mute"
                                            style="display: inline;"></label><input id="volume-slider" type="range"
                                            min="0" max="100" step="1"><span id="volume-slider-text">100%</span><span
                                            class="close-modal"></span></div>
                                </div>
                            </div>
                            <div id="video-modal" class="modal hidden">
                                <div class="modal-area"><span class="close-modal"></span>
                                    <div id="video-holder"></div>
                                </div>
                            </div>
                            <div id="hardware-acceleration-modal" class="modal hidden">
                                <div class="modal-area"><span class="close-modal"></span><span id="acceleration-text">It
                                        looks like hardware acceleration is disabled. While Ruffle may work, it could be
                                        very slow. You can find out how to enable hardware acceleration by following the
                                        link below:</span><a
                                        href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration"
                                        target="_blank" class="modal-button">FAQ - Chrome Hardware Acceleration</a>
                                </div>
                            </div>
                            <div id="clipboard-modal" class="modal hidden">
                                <div class="modal-area"><span class="close-modal"></span>
                                    <h2>Copying and pasting in Ruffle</h2>
                                    <p id="clipboard-modal-description"></p>
                                    <p><b>Ctrl+C</b><span>⁨ ⁩ for copy</span></p>
                                    <p><b>Ctrl+X</b><span>⁨ ⁩ for cut</span></p>
                                    <p><b>Ctrl+V</b><span>⁨ ⁩ for paste</span></p>
                                </div>
                            </div>
                            <div id="context-menu-overlay" class="hidden">
                                <ul id="context-menu" dir="ltr"></ul>
                            </div>
                        </template></ruffle-embed>
                </object>
                <div align="center">
                    <a href="/launch/rally" class="header-launcher" data-launchtype="rally">Meet-up and
                        Rally</a><br><br>
                </div>
            </div>
            <div id="id_guilds" class="panel guilds_panel">

                <h2 id="guilds_title">Guilds</h2>


                <ul>
                </ul>
            </div>
            <div id="id_media_1394" class="panel media_panel">
                <h2 id="media_1394_title">Media</h2>
                <div class="clear"></div>
            </div>
            <div id="id_store" class="panel store_panel postcontent">
                <h2 id="store_title">Store</h2>
                <h3></h3>
                <div>Welcome!</div>
                <p>&nbsp;</p>
                <p><a href="/marketplace/userstore/20150259">View Store</a></p>
            </div>
            <div class="panel postcontent signature_panel" id="id_signature">
                <h2 id="signature_title">Signature</h2>

                <p></p>

                <div class="clear"></div>
            </div>
            <div class="panel comments_panel" id="id_comments">
                <h2 id="comments_title">Comments</h2>
                <div>
                    <span id="alert_container"><a
                            href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=addcomment">Add
                            Comment</a></span>
                    <span id="alerts_banner"><a href="https://www.gaiaonline.com/account/alerts">Alert Me of
                            Comments</a></span>
                    <div class="clear"></div>
                </div>
                <p><a href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=comments">View All Comments</a>
                </p>
                <dl class="style1">
                    <dt data-comment-id="3" data-user-id="20150259">
                        <span class="username">
                            <a href="https://www.gaiaonline.com/profiles/overthink/20150259/"
                                title="View Overthink's Profile">Overthink</a>
                        </span>
                        <span class="date"><a href="/gaia/report.php?r=30&amp;rpost=20150259_3">Report</a> | 06/02/2026
                            8:16 pm</span>
                    </dt>
                    <dd data-comment-id="3" data-user-id="20150259">
                        <p class="deletecomment"><a
                                href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=deletecomment&amp;cid=3"
                                class="profile-delete-comment">Delete</a><br>
                            <a href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=addcomment">Comment
                                Back</a>
                        </p>
                        <div class="dropBox">
                            <img src="https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e.png?t=1773418642_6_11" alt="Overthink" class="avatarImage" width="48" height="48">
                        </div>
                        <div class="postcontent">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu augue quis orci faucibus
                            congue. Aliquam eget ligula laoreet, ornare ligula id, tempus tellus. Donec pharetra aliquam
                            scelerisque. <br>
                            <br>
                            Fusce vehicula, arcu ac iaculis accumsan, quam dolor varius mi, eget pulvinar augue nunc ac
                            urna. Proin sed tellus a dolor lobortis interdum sed iaculis ipsum.
                        </div>
                    </dd>
                    <dt data-comment-id="2" data-user-id="20150259">
                        <span class="username">
                            <a href="https://www.gaiaonline.com/profiles/overthink/20150259/"
                                title="View Overthink's Profile">Overthink</a>
                        </span>
                        <span class="date"><a href="/gaia/report.php?r=30&amp;rpost=20150259_2">Report</a> | 01/15/2026
                            7:45 pm</span>
                    </dt>
                    <dd data-comment-id="2" data-user-id="20150259">
                        <p class="deletecomment"><a
                                href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=deletecomment&amp;cid=2"
                                class="profile-delete-comment">Delete</a><br>
                            <a href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=addcomment">Comment
                                Back</a>
                        </p>
                        <div class="dropBox">
                            <img src="https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e.png?t=1773418642_6_11"
                                alt="Overthink" class="avatarImage" width="48" height="48">
                        </div>
                        <div class="postcontent">
                            Test </div>
                    </dd>
                    <dt data-comment-id="1" data-user-id="20150259">
                        <span class="username">
                            <a href="https://www.gaiaonline.com/profiles/overthink/20150259/"
                                title="View Overthink's Profile">Overthink</a>
                        </span>
                        <span class="date"><a href="/gaia/report.php?r=30&amp;rpost=20150259_1">Report</a> | 01/15/2026
                            4:43 pm</span>
                    </dt>
                    <dd data-comment-id="1" data-user-id="20150259">
                        <p class="deletecomment"><a
                                href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=deletecomment&amp;cid=1"
                                class="profile-delete-comment">Delete</a><br>
                            <a href="https://www.gaiaonline.com/profiles/overthink/20150259/?mode=addcomment">Comment
                                Back</a>
                        </p>
                        <div class="dropBox">
                            <img src="https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e.png?t=1773418642_6_11"
                                alt="Overthink" class="avatarImage" width="48" height="48">
                        </div>
                        <div class="postcontent">
                            First theme I made <span class="smilies smilies_heart"> <b>heart</b> </span> </div>
                    </dd>
                </dl>
                <div class="clear"></div>
            </div>
            <div class="panel journal_panel postcontent" id="id_journal">
                <h2 id="journal_title">Journal</h2>
                <p><a href="/journal/?u=20150259">View Journal</a></p>
                <h3>CSS Snippets</h3>



                <p>CSS Snippets you can use.</p>
                <ul id="entries">

                    <li>&nbsp;</li>
                    <li><b>Note</b>: Your journal is private and only viewable by you!</li>

                </ul>
            </div>
            <div class="panel" id="id_footprints">
                <h2 id="footprints_title">Recent Visitors</h2>
                <div class="clear"></div>
            </div>
            <div id="id_custom_643" class="panel custom_panel postcontent">
                <h2 id="custom_643_title">Custom</h2>
                <div id="custom_643_content">
                    <div class="spoiler-wrapper spoiler-hidden">
                        <div class="spoiler-title"><button type="button"
                                class="spoiler-control spoiler-control-show cta-button-sm gray-button"><span>show
                                    spoiler</span></button><button type="button"
                                class="spoiler-control spoiler-control-hide cta-button-sm gray-button"><span>hide
                                    spoiler</span></button></div>
                        <div class="spoiler"><br>
                            <a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                                target="_blank">Instagram</a><br>
                            <a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                                target="_blank">Facebook</a><br>
                            <a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                                target="_blank">Deviant Art</a><br>
                            <a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                                target="_blank">Discordt</a><br>
                        </div>
                    </div>
                </div>

                <div class="clear"></div>
            </div>
            <div id="id_custom_642" class="panel custom_panel postcontent">
                <h2 id="custom_642_title">Custom</h2>
                <div id="custom_642_content"><img src="https://rstr.in/1jo6mv5p8ea7ef/gaia/cOs8ybB8drq" class="user_img"
                        alt="User Image"><br>
                    <br>
                    <span style="color: #b1">she/her | 28 | PH</span><br>
                    <br>
                    <div class="spoiler-wrapper spoiler-hidden">
                        <div class="spoiler-title"><button type="button"
                                class="spoiler-control spoiler-control-show cta-button-sm gray-button"><span>show
                                    spoiler</span></button><button type="button"
                                class="spoiler-control spoiler-control-hide cta-button-sm gray-button"><span>hide
                                    spoiler</span></button></div>
                        <div class="spoiler"><br>
                            <b>Die for you - Valorant</b><br>
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/h7MYJghRWt0?v=h7MYJghRWt0&amp;list=RDh7MYJghRWt0&amp;start_radio=1&amp;mute=1&amp;autoplay=0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen="" data-ruffle-polyfilled=""></iframe><br>
                            <ul>
                                <li>PLAY</li>
                                <li>VOL</li>
                            </ul><br>
                        </div>
                    </div><br>
                    <br>
                    <ul><br>
                        <li><a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                                target="_blank">Instagram</a><br>
                        </li>
                        <li><a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                                target="_blank">Facebook</a><br>
                        </li>
                        <li><a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                                target="_blank">Deviant Art</a><br>
                        </li>
                        <li><a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                                target="_blank">Discordt</a><br>
                        </li>
                    </ul>
                </div>

                <div class="clear"></div>
            </div>
            &nbsp;
        </div>
        <div id="column_2" class="column focus_column">
            <div id="id_custom_647" class="panel custom_panel postcontent">
                <h2 id="custom_647_title">Custom</h2>
                <div id="custom_647_content"></div>

                <div class="clear"></div>
            </div>

            <div class="panel" id="id_badges">
                <h2 id="badges_title">Badges</h2>

                <p>You don't have any badges!</p>

                <p>You can acquire badges by <a href="/games/zomg/" class="gaia_menuitem_zomg" target="_blank">playing
                        zOMG!</a></p>
            </div>
            <div id="id_forum" class="panel forums_panel">
                <h2 id="forum_title">Forums</h2>


                <p><strong>Posts per Day:</strong> 0.00</p>
                <p><strong>Total Posts:</strong> 0</p>

            </div>

            <div class="panel gifts_panel" id="id_gifts">
                <h2 id="gifts_title">Gifts</h2>

                <p class="total">0 gifts received</p>
                <ul>

                </ul>
                <div class="clear"></div>

            </div>
            <div class="panel details_panel" id="id_details">
                <h2 id="details_title" class="20150259">Your Username</h2>
                <input type="hidden" id="avatarnonce" value="566018147.1780572918.1254066521">
                <p><img src="https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e_flip.png?t=1773418642_6_11"
                        alt="Overthink's avatar" width="120" height="150"></p>
                <div class="forum_userstatus">
                    <div class="statuslinks">
                        <div class="pushBox" id="a_20150259" data-uid="20150259">&nbsp;</div><span
                            class="online">Online</span>
                    </div>
                </div>
                <p><strong>Last Login:</strong> 06/04/2026 3:26 am</p>
                <p><strong>Registered:</strong> 08/01/2023</p>
                <p><strong>Gender:</strong> Female</p>
                <p><strong>Location:</strong> Philippines</p>
                <p><strong>Birthday:</strong> 05/02</p>
                <p><strong>Occupation:</strong> Freelancer</p>
                <p><a target="top"
                        href="/gaia/redirect.php?r=https%3A%2F%2Fwww.gaiaonline.com%2Fprofiles%2Foverthink%2F20150259%2F">Personal
                        Website</a></p>
                <p><a target="top"
                        href="/gaia/redirect.php?r=https%3A%2F%2Fraster.app%2F1jo6mv5p8ea7ef%2Fgaia">Raster.app</a></p>
            </div>
            <div id="id_media_1355" class="panel media_panel">
                <h2 id="media_1355_title">Media</h2>
                <iframe width="470" height="264"
                    src="https://www.youtube.com/embed/h7MYJghRWt0?=&amp;mute=0&amp;autoplay=0" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
                    data-ruffle-polyfilled=""></iframe>
                <div class="clear"></div>
            </div>
            <div class="panel interests_panel" id="id_interests">
                <h2 id="interests_title">Interests</h2>
                <h3>Favorite Movies/Anime</h3>
                <ul class="interest_tags">
                    <li><a href="/gsearch/interests/harry-potter/">harry potter</a></li>
                    <li><a href="/gsearch/interests/fairy-tail/">Fairy Tail</a></li>
                    <li><a href="/gsearch/interests/solo-leveling/">Solo leveling</a></li>
                    <li><a href="/gsearch/interests/yakuza-fianc/">Yakuza Fiancé</a></li>
                </ul>
                <h3>Favorite TV Shows</h3>
                <ul class="interest_tags">
                    <li><a href="/gsearch/interests/supernatural/">supernatural</a></li>
                    <li><a href="/gsearch/interests/game-of-thrones/">game of thrones</a></li>
                    <li><a href="/gsearch/interests/the-rookie/">the rookie</a></li>
                    <li><a href="/gsearch/interests/suits/">suits</a></li>
                </ul>
                <h3>Favorite Reads</h3>
                <ul class="interest_tags">
                    <li><a href="/gsearch/interests/noblesse/">noblesse</a></li>
                    <li><a href="/gsearch/interests/and-many-more-i-dont-remember/">and many more (i dont remember)</a>
                    </li>
                </ul>
                <h3>Favorite Music/Bands</h3>
                <ul class="interest_tags">
                    <li><a href="/gsearch/interests/coldplay/">coldplay</a></li>
                    <li><a href="/gsearch/interests/before-you-exit/">before you exit</a></li>
                    <li><a href="/gsearch/interests/imagine-dragons/">imagine dragons</a></li>
                    <li><a href="/gsearch/interests/khalid/">khalid</a></li>
                    <li><a href="/gsearch/interests/one-ok-rock/">one ok rock</a></li>
                    <li><a href="/gsearch/interests/b1a4/">b1a4</a></li>
                    <li><a href="/gsearch/interests/snsd/">snsd</a></li>
                    <li><a href="/gsearch/interests/taeyang/">taeyang</a></li>
                    <li><a href="/gsearch/interests/ailee/">ailee</a></li>
                </ul>
                <h3>Hobbies/Interests</h3>
                <ul class="interest_tags">
                    <li><a href="/gsearch/interests/coding/">coding</a></li>
                    <li><a href="/gsearch/interests/travelling/">travelling</a></li>
                    <li><a href="/gsearch/interests/12-hour-sleep/">12 -hour sleep</a></li>
                    <li><a href="/gsearch/interests/grand-theft-auto/">grand theft auto</a></li>
                    <li><a href="/gsearch/interests/red-dead-redemption/">red dead redemption</a></li>
                    <li><a href="/gsearch/interests/dying-light/">dying light</a></li>
                    <li><a href="/gsearch/interests/where-winds-meet/">where winds meet</a></li>
                    <li><a href="/gsearch/interests/inzoi/">inzoi</a></li>
                    <li><a href="/gsearch/interests/sims/">sims</a></li>
                    <li><a href="/gsearch/interests/delta-force/">delta force</a></li>
                    <li><a href="/gsearch/interests/sky-children-of-the-light/">sky: children of the light</a></li>
                    <li><a href="/gsearch/interests/some-cute-and-horror-games/">some cute and horror games</a></li>
                </ul>
            </div>
            <div class="panel wish_list_panel profile" id="id_wishlist">
                <h2 id="wishlist_title">Wish List</h2>

                <div class="item">
                    <a href="/marketplace/itemdetail/7925" class="item_info" name="e6103eb2b38dc2d5c170bebcea37f467"
                        id="_7925" title="Ancient Katana - virtual item (Wanted)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/5ecfff3a1ef5.png"
                            title="Wanted - Ancient Katana" alt="Ancient Katana - virtual item (Wanted)" height="30"
                            width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="Ancient Katana - virtual item (Wanted)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/1537" class="item_info" name="a97a941dee218c65b8944cbc0aefafda"
                        id="_1537" title="Devil Tail - virtual item (Wanted)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/1163e3f4601.png"
                            title="Wanted - Devil Tail" alt="Devil Tail - virtual item (Wanted)" height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="Devil Tail - virtual item (Wanted)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/3366" class="item_info" name="e37d68d5a867dd1284d949b950b3139c"
                        id="_3366" title="KiKi Kitty Plushie - virtual item (Questing)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/5d3b69b8d26.png"
                            title="Questing - KiKi Kitty Plushie" alt="KiKi Kitty Plushie - virtual item (Questing)"
                            height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="KiKi Kitty Plushie - virtual item (Questing)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/1433" class="item_info" name="a94eaacb2dd25a1dd1b1307e7bef8a1a"
                        id="_1433" title="DJ Studio Headphones - virtual item (Bought)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/bd6bb178599.png"
                            title="Bought - DJ Studio Headphones" alt="DJ Studio Headphones - virtual item (Bought)"
                            height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="DJ Studio Headphones - virtual item (Bought)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/2316" class="item_info" name="dead24b03185fdcaf4514c94d1dd3cb4"
                        id="_2316" title="Horns of the Demon - virtual item (Donated)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/736ba66e90c.png"
                            title="Donated - Horns of the Demon" alt="Horns of the Demon - virtual item (Donated)"
                            height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="Horns of the Demon - virtual item (Donated)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/26035" class="item_info" name="32392a94262d00fee4a935c985233250"
                        id="_26035" title="The Lusty Scoundrel - virtual item (Donated)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/4f4d4a4165b3.png"
                            title="Donated - The Lusty Scoundrel" alt="The Lusty Scoundrel - virtual item (Donated)"
                            height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="The Lusty Scoundrel - virtual item (Donated)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/21261" class="item_info" name="81217eea08ab5bd993d8957c26d66273"
                        id="_21261" title="Inari's Beads - virtual item (Wanted)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/775a6502530d.png"
                            title="Wanted - Inari's Beads" alt="Inari's Beads - virtual item (Wanted)" height="30"
                            width="30">
                        <span class="private_checkmark glow">*</span> <img
                            src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_EI.gif"
                            alt="Inari's Beads - virtual item (Wanted)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/3863" class="item_info" name="9a768d5c6851e3aac36ad6ee09e71b1d"
                        id="_3863" title="Wind Security Blanket - virtual item (Wanted)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/68234dc2f17.png"
                            title="Wanted - Wind Security Blanket" alt="Wind Security Blanket - virtual item (Wanted)"
                            height="30" width="30">
                        <span class="private_checkmark glow">*</span> <img
                            src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="Wind Security Blanket - virtual item (Wanted)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/1586" class="item_info" name="9413e3f4949bf76f4cee1a5e5088f394"
                        id="_1586" title="OMG - virtual item (Questing)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/46c43a81632.png"
                            title="Questing - OMG" alt="OMG - virtual item (Questing)" height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="OMG - virtual item (Questing)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/2443" class="item_info" name="7bdc169c4445b4ef47c4e6bf0a17565c"
                        id="_2443" title="Golden Laurels - virtual item (Wanted)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/2ee1862398b.png"
                            title="Wanted - Golden Laurels" alt="Golden Laurels - virtual item (Wanted)" height="30"
                            width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="Golden Laurels - virtual item (Wanted)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/1404" class="item_info" name="914e39e4978523000f1526b1c9a088e4"
                        id="_1404" title="Angelic Halo - virtual item (Bought)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/7620e03a57c.png"
                            title="Bought - Angelic Halo" alt="Angelic Halo - virtual item (Bought)" height="30"
                            width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="Angelic Halo - virtual item (Bought)" class="premium_sparkle">
                    </a>
                </div>

                <div class="item">
                    <a href="/marketplace/itemdetail/2393" class="item_info" name="3af2df5b93a046b34cc0dfb76354475c"
                        id="_2393" title="Steel-plated Ninja Band - virtual item (Bought)">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/57d8ab73959.png"
                            title="Bought - Steel-plated Ninja Band"
                            alt="Steel-plated Ninja Band - virtual item (Bought)" height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="Steel-plated Ninja Band - virtual item (Bought)" class="premium_sparkle">
                    </a>
                </div>
                <div class="clear"></div>
                <div style="margin:4px"></div>
                Private items are marked by <span class="glow" style="font-size:15px;color:red">*</span>

            </div>
            <div id="id_custom_640" class="panel custom_panel postcontent">
                <h2 id="custom_640_title">Custom</h2>
                <div id="custom_640_content"><a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F"
                        rel="nofollow" target="_blank">Link 4</a><br>
                    <a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                        target="_blank">Link 5</a><br>
                    <a href="https://www.gaiaonline.com/gaia/redirect.php?r=http%3A%2F%2F" rel="nofollow"
                        target="_blank">Link 6</a>
                </div>

                <div class="clear"></div>
            </div>
            <div class="panel about_panel postcontent" id="id_about">
                <h2 id="about_title">About</h2>
                <span style="color: #a1">this is just a sandbox</span><br>
                <br>
                hey! this profile is basically just my sandbox for testing out new theme ideas and messin' around with
                CSS. i kept it filled with random BBCode bits and information so i can see how everything looks while
                i'm coding.<br>
                <br>
                if ur also working on a theme and need a dummy profile to test out your own layouts, feel free to use
                this as a reference! hope it makes your coding life a little easier.<br>
                <br>
                if you do end up using this to test your themes, you can leave a comment here. i'd love to know if it's
                actually helpful for anyone else plus it helps keep the comment panel filled for testing it too!<br>
                <br>
                Anyways, if you want to direct someone to a resource, you can use a <a href="https://www.gaiaonline.com"
                    rel="nofollow" target="_blank">URL Link</a> to make the text clickable. <br>
                <br>
                <b>Bold text</b> is great for emphasizing key terms, while <i>italics</i> help with book titles or inner
                thoughts. If you need to highlight a correction, you can use <span
                    style="text-decoration: underline">underline</span> or show a removal with <span
                    style="text-decoration: line-through">strikethrough</span>.<br>
                <br>
                <div class="quote">
                    <div class="cite">me</div>
                    <div class="quoted">
                        <div class="quote">
                            <div class="cite">my friend</div>
                            <div class="quoted">This is a Quote tag. It is used to respond to other users or cite
                                external sources while keeping the text contained in a neat box<div class="clear"></div>
                            </div>
                        </div>A quote inside a quote<div class="clear"></div>
                    </div>
                </div><br>
                <br>
                <div class="quote">
                    <div class="cite">Quote:</div>
                    <div class="quoted">another quote?<div class="quote">
                            <div class="cite">Quote:</div>
                            <div class="quoted">of course!<div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div><br>
                <br>
                <span style="color: #a1">This is a Codeblock. Use this for sharing CSS codes. Starter code
                    below:</span><br>
                <div class="code" style="word-break:break-all">/* Click me to highlight then Ctrl + C to copy */<br>
                    <br>
                    /* Reset some default browser styles */<br>
                    * {<br>
                    margin: 0;<br>
                    padding: 0;<br>
                    box-sizing: border-box;<br>
                    }<br>
                    <br>
                    /* Hide panels */<br>
                    .panel {display: none}<br>
                    <br>
                    /* Remove #column_1's left spacing*/<br>
                    #column_1 {margin-left: 0;}<br>
                    <br>
                    /* Make equipment or wish list items grid */<br>
                    #id_equipment, #id_wishlist {<br>
                    display: grid !important;<br>
                    grid-template-columns: repeat(auto-fill, 40px) !important;<br>
                    place-items: center !important;<br>
                    justify-content: center !important;<br>
                    gap: 8px !important;<br>
                    padding: 16px !important;<br>
                    border: 1px solid #e5e7eb !important;<br>
                    border-radius: 8px !important;<br>
                    position: relative !important;<br>
                    font-size: 0px;<br>
                    }<br>
                    <br>
                    /* Clears Gaia's internal floats that cause misalignment */<br>
                    .clear {<br>
                    display: none !important;<br>
                    }<br>
                    <br>
                    /* Remove things */<br>
                    .premium_sparkle, <br>
                    #id_wishlist span{<br>
                    display: none !important;<br>
                    }<br>
                    <br>
                    #id_wishlist {font-size: 0px;}<br>
                    .
                </div><br>
                <br>
                For sensitive information or long lists, a Spoiler keeps your post tidy.<br>
                <div class="spoiler-wrapper spoiler-hidden">
                    <div class="spoiler-title"><button type="button"
                            class="spoiler-control spoiler-control-show cta-button-sm gray-button"><span>show
                                spoiler</span></button><button type="button"
                            class="spoiler-control spoiler-control-hide cta-button-sm gray-button"><span>hide
                                spoiler</span></button></div>
                    <div class="spoiler">this is a spoiler hidden behind a button.</div>
                </div> <br>
                <br>
                <span style="color: #a3">Visual Layouts</span><br>
                <br>
                <img src="https://rstr.in/1jo6mv5p8ea7ef/gaia/jJt0IYzaUEM" class="user_img" alt="User Image"><br>
                <br>
                <br>
                <span style="color: #a4">Multimedia Integration</span><br>
                <br>
                Finally, the YouTube tag allows you to embed videos directly into the post for others to watch without
                leaving the page.<br>
                <br>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?v=dQw4w9WgXcQ&amp;mute=1&amp;autoplay=0"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="" data-ruffle-polyfilled=""></iframe>
                <div class="clear"></div>
            </div>
            <div class="panel equipped_list_panel" id="id_equipment">
                <h2 id="equipment_title">Equipped List</h2>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/off-white-loose-tank-top/i.8a7d92f6d02960e04ef4a516658ba2af/"
                        class="item_info" id="_10249777" name="8a7d92f6d02960e04ef4a516658ba2af"
                        title="Off-White Loose Tank Top - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/97bdbf2c9c6631.png"
                            alt="Off-White Loose Tank Top - virtual item" height="30" width="30">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/red-flannel-wrap/i.b7eaf818f32285fcc2aacf8b872f02f5/"
                        class="item_info" id="_10242611" name="b7eaf818f32285fcc2aacf8b872f02f5"
                        title="Red Flannel Wrap - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/35b9be739c4a33.png"
                            alt="Red Flannel Wrap - virtual item" height="30" width="30">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/navy-pyramid-bracelets/i.c91a787f9af0722eb730b0255c2a35c4/"
                        class="item_info" id="_10242119" name="c91a787f9af0722eb730b0255c2a35c4"
                        title="Navy Pyramid Bracelets - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/c06ecb3c9c4847.png"
                            alt="Navy Pyramid Bracelets - virtual item" height="30" width="30">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/classic-picnic-basket/i.d92a46e00fc692ae0eb14edf1c815963/"
                        class="item_info" id="_10256227" name="d92a46e00fc692ae0eb14edf1c815963"
                        title="Classic Picnic Basket - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/5b1307d79c7f63.png"
                            alt="Classic Picnic Basket - virtual item" height="30" width="30">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/onyx-kira-kira-earring-with-jewel/i.75d18aa58b7757eb14bd7afc27d0bc43/"
                        class="item_info" id="_23099" name="75d18aa58b7757eb14bd7afc27d0bc43"
                        title="Onyx Kira Kira Earring with Jewel - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/63c68a425a3b.png"
                            alt="Onyx Kira Kira Earring with Jewel - virtual item" height="30" width="30">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/warm-starter-boots/i.f2033533ad32c6c9c6e76205a7e75595/"
                        class="item_info" id="_7198" name="f2033533ad32c6c9c6e76205a7e75595"
                        title="Warm Starter Boots - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/887ad11c1e.png"
                            alt="Warm Starter Boots - virtual item" height="30" width="30">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/enchanted-strings/i.e6bc39a185628701eb3ce0927ce6146f/"
                        class="item_info" id="_13357" name="e6bc39a185628701eb3ce0927ce6146f"
                        title="Enchanted Strings - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/a351d200342d.png"
                            alt="Enchanted Strings - virtual item" height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_MC.gif"
                            alt="Enchanted Strings" class="premium_sparkle">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/hardhearted-passion/i.099eb5af9b65b8ea8914cc3bfd9a85a0/"
                        class="item_info" id="_10076691" name="099eb5af9b65b8ea8914cc3bfd9a85a0"
                        title="Hardhearted Passion - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/60d8de1c99c213.png"
                            alt="Hardhearted Passion - virtual item" height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_CS.gif"
                            alt="Hardhearted Passion" class="premium_sparkle">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/cafe-miam/i.ce356442234c0c9ff775570fd18ee206/"
                        class="item_info" id="_10008137" name="ce356442234c0c9ff775570fd18ee206"
                        title="Cafe Miam - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/fa4f49af98b649.png"
                            alt="Cafe Miam - virtual item" height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_EI.gif"
                            alt="Cafe Miam" class="premium_sparkle">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/loyalty-pin/i.973ba8c72156011ab5578d97d74649a5/"
                        class="item_info" id="_10027087" name="973ba8c72156011ab5578d97d74649a5"
                        title="Loyalty Pin - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/c12988f299004f.png"
                            alt="Loyalty Pin - virtual item" height="30" width="30">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/batty-march/i.a0d3452ec68e9ee1cba3e535aafc21e2/"
                        class="item_info" id="_10062651" name="a0d3452ec68e9ee1cba3e535aafc21e2"
                        title="Batty March - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/842b04de998b3b.png"
                            alt="Batty March - virtual item" height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_CS.gif"
                            alt="Batty March" class="premium_sparkle">
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.gaiaonline.com/virtual-items/gemstone-majoko-mariko-eyes/i.6ca33d14dd443836115e0fea2047c54e/"
                        class="item_info" id="_10034431" name="6ca33d14dd443836115e0fea2047c54e"
                        title="Gemstone Majoko Mariko Eyes - virtual item">
                        <img src="https://graphics.gaiaonline.com/images/thumbnails/4915ba22991cff.png"
                            alt="Gemstone Majoko Mariko Eyes - virtual item" height="30" width="30">
                        <img src="https://graphics.gaiaonline.com/images/premiumitems/premium_sparkle_RIG.gif"
                            alt="Gemstone Majoko Mariko Eyes" class="premium_sparkle">
                    </a>
                </div>
                <div class="clear"></div>
            </div>
            &nbsp;
        </div>
        <div id="column_3" class="column focus_column">
            <div id="id_house" class="panel house_panel">
                <h2 id="house_title">House</h2>
                <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="200" height="200" style="">
                    <param name="movie"
                        value="https://graphics.gaiaonline.com/images/housing/houseMain/House_Preview.swf?v=3">
                    <param name="width" value="200">
                    <param name="height" value="200">
                    <param name="AllowScriptAccess" value="always">
                    <param name="allowFullScreen" value="true">
                    <param name="flashvars" value="houseID=20150259&amp;g=house&amp;gver=3&amp;gsiUrl=www">
                    <!--[if !IE]>--><ruffle-object type="application/x-shockwave-flash"
                        data="https://graphics.gaiaonline.com/images/housing/houseMain/House_Preview.swf?v=3"
                        width="200" height="200" style=""><template shadowrootmode="open" shadowrootdelegatesfocus="">
                            <style>
                                :host {
                                    all: initial;
                                    pointer-events: inherit;
                                    --ruffle-blue: #37528c;
                                    --ruffle-blue-dark: #253559;
                                    --ruffle-orange: #ffad33;
                                    --modal-background: #fafafa;
                                    --modal-foreground-rgb: 0, 0, 0;
                                    --modal-foreground-filter: none;
                                    display: inline-block;
                                    font-family: Arial, sans-serif;
                                    height: 400px;
                                    letter-spacing: .4px;
                                    position: relative;
                                    touch-action: none;
                                    -webkit-user-select: none;
                                    -moz-user-select: none;
                                    user-select: none;
                                    width: 550px;
                                    -webkit-tap-highlight-color: transparent
                                }

                                :host(:-webkit-full-screen) {
                                    display: block;
                                    height: 100% !important;
                                    width: 100% !important
                                }

                                .hidden {
                                    display: none !important
                                }

                                #container,
                                #message-overlay,
                                #panic,
                                #play-button,
                                #splash-screen,
                                #unmute-overlay,
                                #unmute-overlay .background {
                                    inset: 0;
                                    position: absolute
                                }

                                #container {
                                    outline: none;
                                    overflow: hidden
                                }

                                #container canvas {
                                    height: 100%;
                                    width: 100%
                                }

                                #play-button,
                                #unmute-overlay {
                                    cursor: pointer;
                                    display: none
                                }

                                #unmute-overlay .background {
                                    background: #000;
                                    opacity: .7
                                }

                                #play-button .icon,
                                #unmute-overlay .icon {
                                    height: 50%;
                                    left: 50%;
                                    max-height: 384px;
                                    max-width: 384px;
                                    opacity: .8;
                                    position: absolute;
                                    top: 50%;
                                    transform: translate(-50%, -50%);
                                    width: 50%
                                }

                                #play-button:hover .icon,
                                #unmute-overlay:hover .icon {
                                    opacity: 1
                                }

                                #unmute-overlay-svg {
                                    scale: .8
                                }

                                #panic {
                                    align-items: center;
                                    background: linear-gradient(180deg, #fd3a40, #fda138);
                                    color: #fff;
                                    display: flex;
                                    flex-flow: column;
                                    font-size: 15px;
                                    gap: 8px;
                                    justify-content: center;
                                    overflow: auto;
                                    padding: 16px;
                                    text-align: center
                                }

                                #panic a {
                                    color: #fff;
                                    text-underline-offset: 2px
                                }

                                #panic-title {
                                    font-size: 30px;
                                    font-weight: 700;
                                    letter-spacing: -.5px
                                }

                                #panic-body {
                                    max-width: 480px;
                                    opacity: .85;
                                    width: 100%
                                }

                                #panic-details-modal {
                                    align-items: center;
                                    background: #0008;
                                    box-sizing: border-box;
                                    display: flex;
                                    inset: 0;
                                    justify-content: center;
                                    padding: 8px;
                                    position: absolute;
                                    z-index: 1
                                }

                                #panic-details-content {
                                    background-color: var(--modal-background);
                                    border-radius: 12px;
                                    box-shadow: 0 2px 6px 0 #0008;
                                    box-sizing: border-box;
                                    color: rgb(var(--modal-foreground-rgb));
                                    height: 80%;
                                    max-width: 720px;
                                    overflow: hidden;
                                    padding: 44px 12px 12px;
                                    position: relative;
                                    width: 100%
                                }

                                #panic-details-content .panic-copy-button {
                                    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240zm0-80h360v-480H360zM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80zm160-240v-480z"/></svg>');
                                    border-radius: 4px;
                                    cursor: pointer;
                                    filter: var(--modal-foreground-filter);
                                    height: 16px;
                                    opacity: .6;
                                    position: absolute;
                                    right: 40px;
                                    top: 14px;
                                    transition: opacity .15s, background-image 0s;
                                    width: 16px
                                }

                                :is(#panic-details-content .panic-copy-button):hover {
                                    opacity: 1
                                }

                                .copied:is(#panic-details-content .panic-copy-button) {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2322c55e' viewBox='0 -960 960 960'%3E%3Cpath d='M382-240 154-468l57-57 171 171 367-367 57 57z'/%3E%3C/svg%3E");
                                    cursor: default;
                                    filter: none;
                                    opacity: 1;
                                    pointer-events: none
                                }

                                #panic-details-content textarea {
                                    background: rgb(var(--modal-foreground-rgb), .07);
                                    border: none;
                                    border-radius: 8px;
                                    box-sizing: border-box;
                                    color: rgb(var(--modal-foreground-rgb));
                                    font-family: monospace;
                                    font-size: 12px;
                                    height: 100%;
                                    outline: none;
                                    padding: 10px;
                                    resize: none;
                                    width: 100%
                                }

                                #panic-details-content textarea::-webkit-scrollbar {
                                    width: 6px
                                }

                                #panic-details-content textarea::-webkit-scrollbar-thumb {
                                    background: rgb(var(--modal-foreground-rgb), .25);
                                    border-radius: 3px
                                }

                                #panic-details-content textarea::-webkit-scrollbar-track {
                                    background: transparent
                                }

                                #message-overlay {
                                    align-items: center;
                                    background: var(--ruffle-blue);
                                    color: var(--ruffle-orange);
                                    display: flex;
                                    justify-content: center;
                                    opacity: 1;
                                    overflow: auto;
                                    z-index: 2
                                }

                                #message-overlay .message {
                                    font-size: 20px;
                                    max-height: 100%;
                                    max-width: 100%;
                                    padding: 5%;
                                    text-align: center
                                }

                                #message-overlay p {
                                    margin: .5em 0
                                }

                                #message-overlay .message div {
                                    -moz-column-gap: 1em;
                                    column-gap: 1em;
                                    display: flex;
                                    flex-wrap: wrap;
                                    justify-content: center
                                }

                                #message-overlay a,
                                #message-overlay button {
                                    background: var(--ruffle-blue);
                                    border: 2px solid var(--ruffle-orange);
                                    border-radius: 8px;
                                    color: var(--ruffle-orange);
                                    cursor: pointer;
                                    font-family: inherit;
                                    font-size: 16px;
                                    font-weight: 700;
                                    margin: 8px 0;
                                    padding: 10px 16px;
                                    text-decoration: none;
                                    transition: background .15s
                                }

                                #panic ul {
                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: 8px;
                                    justify-content: center;
                                    list-style-type: none;
                                    margin: 0;
                                    padding: 0
                                }

                                :is(#panic ul) li a {
                                    background: transparent;
                                    border: 1px solid hsla(0, 0%, 100%, .7);
                                    border-radius: 8px;
                                    color: #fff;
                                    display: inline-block;
                                    font-family: inherit;
                                    font-size: 13px;
                                    font-weight: 700;
                                    padding: 8px 16px;
                                    text-decoration: none;
                                    transition: background .15s
                                }

                                :is(:is(#panic ul) li a):hover {
                                    background: hsla(0, 0%, 100%, .2)
                                }

                                #message-overlay a:hover,
                                #message-overlay button:hover {
                                    background: #ffffff4c
                                }

                                #context-menu-overlay,
                                .modal {
                                    height: 100%;
                                    position: absolute;
                                    width: 100%;
                                    z-index: 1
                                }

                                #context-menu {
                                    background-color: var(--modal-background);
                                    border-radius: 8px;
                                    box-shadow: 0 0 16px #0006;
                                    color: rgb(var(--modal-foreground-rgb));
                                    font-size: 14px;
                                    list-style: none;
                                    margin: 0;
                                    overflow: hidden;
                                    padding: 5px 0;
                                    position: absolute;
                                    text-align: start;
                                    white-space: nowrap
                                }

                                #context-menu .menu-item {
                                    padding: 7px 12px
                                }

                                #context-menu.has-checkmarks .menu-item {
                                    padding-inline-start: 32px;
                                    position: relative
                                }

                                #context-menu.has-checkmarks .menu-item.checked:before {
                                    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57z"/></svg>');
                                    background-repeat: no-repeat;
                                    background-size: contain;
                                    content: "";
                                    filter: var(--modal-foreground-filter);
                                    height: 16px;
                                    inset-inline-start: 8px;
                                    position: absolute;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    width: 16px
                                }

                                #context-menu .menu-item.disabled {
                                    color: rgb(var(--modal-foreground-rgb), .5);
                                    cursor: default
                                }

                                #context-menu .menu-item:not(.disabled):hover {
                                    background-color: rgb(var(--modal-foreground-rgb), .15)
                                }

                                #context-menu .menu-separator hr {
                                    border: none;
                                    border-bottom: 1px solid rgb(var(--modal-foreground-rgb), .2);
                                    margin: 4px 0
                                }

                                #splash-screen {
                                    align-items: center;
                                    background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center
                                }

                                .loadbar {
                                    background: var(--ruffle-blue-dark);
                                    height: 20%;
                                    max-height: 10px;
                                    max-width: 316px;
                                    width: 100%
                                }

                                .loadbar-inner {
                                    background: var(--ruffle-orange);
                                    height: 100%;
                                    max-width: 100%;
                                    width: 0
                                }

                                .logo {
                                    display: var(--logo-display, block);
                                    max-height: 150px;
                                    max-width: 380px
                                }

                                .loading-animation {
                                    aspect-ratio: 1;
                                    margin-bottom: 2%;
                                    max-height: 28px;
                                    max-width: 28px;
                                    width: 10%
                                }

                                .spinner {
                                    animation: a 1.5s linear infinite;
                                    stroke: var(--ruffle-orange);
                                    stroke-dasharray: 180;
                                    stroke-dashoffset: 135;
                                    transform-origin: 50% 50%
                                }

                                @keyframes a {
                                    to {
                                        transform: rotate(1turn)
                                    }
                                }

                                #virtual-keyboard {
                                    height: 1px;
                                    opacity: 0;
                                    position: absolute;
                                    top: -100px;
                                    width: 1px
                                }

                                .modal {
                                    background-color: #0008
                                }

                                .modal-area {
                                    background-color: var(--modal-background);
                                    border-radius: 12px;
                                    box-shadow: 0 2px 6px 0 #0008;
                                    color: rgb(var(--modal-foreground-rgb));
                                    left: 50%;
                                    padding: 8px 12px;
                                    position: relative;
                                    transform: translateX(-50%);
                                    width: -moz-fit-content;
                                    width: fit-content
                                }

                                #modal-area {
                                    height: 300px;
                                    width: 450px
                                }

                                .close-modal {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");
                                    cursor: pointer;
                                    filter: var(--modal-foreground-filter);
                                    height: 16px;
                                    width: 16px
                                }

                                .modal-button {
                                    background-color: rgb(var(--modal-foreground-rgb), .2);
                                    border-radius: 6px;
                                    color: rgb(var(--modal-foreground-rgb));
                                    cursor: pointer;
                                    display: inline-block;
                                    padding: 4px 8px;
                                    text-decoration: none
                                }

                                :not(#volume-controls)>.close-modal {
                                    position: absolute;
                                    right: 16px;
                                    top: 14px
                                }

                                .general-save-options {
                                    border-bottom: 2px solid rgb(var(--modal-foreground-rgb), .3);
                                    padding-bottom: 8px;
                                    text-align: center
                                }

                                #local-saves {
                                    border-collapse: collapse;
                                    color: inherit;
                                    display: block;
                                    height: calc(100% - 45px);
                                    min-height: 30px;
                                    overflow-y: auto
                                }

                                #local-saves td {
                                    border-bottom: 2px solid rgb(var(--modal-foreground-rgb), .15);
                                    height: 30px
                                }

                                #local-saves td:first-child {
                                    width: 100%;
                                    word-break: break-all
                                }

                                .save-option {
                                    cursor: pointer;
                                    display: inline-block;
                                    filter: var(--modal-foreground-filter);
                                    height: 24px;
                                    opacity: .4;
                                    vertical-align: middle;
                                    width: 24px
                                }

                                #local-saves>tr:hover .save-option {
                                    opacity: 1
                                }

                                #download-save {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")
                                }

                                #replace-save {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")
                                }

                                #delete-save {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")
                                }

                                .replace-save {
                                    display: none
                                }

                                #video-modal .modal-area {
                                    box-sizing: border-box;
                                    height: 95%;
                                    width: 95%
                                }

                                #video-holder {
                                    box-sizing: border-box;
                                    height: 100%;
                                    padding: 36px 4px 6px
                                }

                                #video-holder video {
                                    background-color: #000;
                                    height: 100%;
                                    width: 100%
                                }

                                #volume-controls {
                                    align-items: center;
                                    display: flex;
                                    gap: 6px
                                }

                                #mute-checkbox {
                                    display: none
                                }

                                label[for=mute-checkbox] {
                                    cursor: pointer;
                                    filter: var(--modal-foreground-filter);
                                    height: 24px;
                                    line-height: 0;
                                    width: 24px
                                }

                                #volume-mute {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")
                                }

                                #volume-min {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")
                                }

                                #volume-mid {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")
                                }

                                #volume-max {
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")
                                }

                                #volume-slider-text {
                                    text-align: center;
                                    -webkit-user-select: none;
                                    -moz-user-select: none;
                                    user-select: none;
                                    width: 4.8ch
                                }

                                #hardware-acceleration-modal .modal-area {
                                    box-sizing: border-box;
                                    padding: 16px 48px;
                                    text-align: center;
                                    width: 95%
                                }

                                #acceleration-text {
                                    display: block;
                                    margin-bottom: 8px
                                }

                                #clipboard-modal h2 {
                                    margin-right: 36px;
                                    margin-top: 4px
                                }

                                #clipboard-modal p:last-child {
                                    margin-bottom: 2px
                                }

                                @media (prefers-color-scheme:light) {
                                    :host {
                                        --modal-background: #fafafa;
                                        --modal-foreground-rgb: 0, 0, 0;
                                        --modal-foreground-filter: none
                                    }
                                }

                                @media (prefers-color-scheme:dark) {
                                    :host {
                                        --modal-background: #282828;
                                        --modal-foreground-rgb: 221, 221, 221;
                                        --modal-foreground-filter: invert(90%)
                                    }
                                }
                            </style>
                            <style id="dynamic-styles"></style>
                            <div id="container" class="" tabindex="-1">
                                <div id="play-button" style="display: none;">
                                    <div class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" width="100%"
                                            height="100%">
                                            <defs xmlns="http://www.w3.org/2000/svg">
                                                <linearGradient xmlns="http://www.w3.org/2000/svg" id="a"
                                                    gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250"
                                                    spreadMethod="pad">
                                                    <stop xmlns="http://www.w3.org/2000/svg" offset="0%"
                                                        stop-color="#FDA138"></stop>
                                                    <stop xmlns="http://www.w3.org/2000/svg" offset="100%"
                                                        stop-color="#FD3A40"></stop>
                                                </linearGradient>
                                                <g xmlns="http://www.w3.org/2000/svg" id="b">
                                                    <path xmlns="http://www.w3.org/2000/svg" fill="url(#a)"
                                                        d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z">
                                                    </path>
                                                    <path xmlns="http://www.w3.org/2000/svg" fill="#FFF"
                                                        d="M87 55v140l100-70L87 55z"></path>
                                                </g>
                                            </defs>
                                            <use xmlns="http://www.w3.org/2000/svg" href="#b"></use>
                                        </svg></div>
                                </div>
                                <div id="unmute-overlay">
                                    <div class="background"></div>
                                    <div class="icon"><svg id="unmute-overlay-svg" xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid" viewBox="0 0 512 584" width="100%"
                                            height="100%">
                                            <path xmlns="http://www.w3.org/2000/svg" fill="#FFF" stroke="#FFF"
                                                d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z">
                                            </path>
                                            <path xmlns="http://www.w3.org/2000/svg" fill="#FFF" stroke="#FFF"
                                                d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z">
                                            </path>
                                            <path xmlns="http://www.w3.org/2000/svg" fill="#FFF" stroke="#FFF"
                                                d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z">
                                            </path><text xmlns="http://www.w3.org/2000/svg" id="unmute-text" x="256"
                                                y="560" text-anchor="middle" font-size="60px" fill="#FFF"
                                                stroke="#FFF">Click to unmute</text>
                                        </svg></div>
                                </div><input aria-hidden="true" id="virtual-keyboard" type="text" autocomplete="off"
                                    autocorrect="off" autocapitalize="none"><canvas width="400" height="400"
                                    style="touch-action: none; cursor: auto;"></canvas>
                            </div>
                            <div id="splash-screen" class="hidden"><svg xmlns="http://www.w3.org/2000/svg" class="logo"
                                    preserveAspectRatio="xMidYMid" viewBox="0 0 380 150">
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <path xmlns="http://www.w3.org/2000/svg" fill="#966214"
                                            d="M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z">
                                        </path>
                                        <path xmlns="http://www.w3.org/2000/svg" fill="var(--ruffle-orange)"
                                            d="M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z">
                                        </path>
                                    </g>
                                </svg><svg xmlns="http://www.w3.org/2000/svg" class="loading-animation"
                                    viewBox="0 0 66 66">
                                    <circle xmlns="http://www.w3.org/2000/svg" class="spinner" fill="none"
                                        stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                                </svg>
                                <div class="loadbar">
                                    <div class="loadbar-inner" style="width: 100%;"></div>
                                </div>
                            </div>
                            <div id="save-manager" class="modal hidden">
                                <div id="modal-area" class="modal-area"><span class="close-modal"></span>
                                    <div class="general-save-options"><span class="modal-button">Download all save
                                            files</span></div>
                                    <table id="local-saves"></table>
                                </div>
                            </div>
                            <div id="volume-controls-modal" class="modal hidden">
                                <div class="modal-area">
                                    <div id="volume-controls"><input id="mute-checkbox" type="checkbox"><label
                                            id="volume-mute" for="mute-checkbox" title="Unmute"
                                            style="display: none;"></label><label id="volume-min" for="mute-checkbox"
                                            title="Mute" style="display: none;"></label><label id="volume-mid"
                                            for="mute-checkbox" title="Mute" style="display: none;"></label><label
                                            id="volume-max" for="mute-checkbox" title="Mute"
                                            style="display: inline;"></label><input id="volume-slider" type="range"
                                            min="0" max="100" step="1"><span id="volume-slider-text">100%</span><span
                                            class="close-modal"></span></div>
                                </div>
                            </div>
                            <div id="video-modal" class="modal hidden">
                                <div class="modal-area"><span class="close-modal"></span>
                                    <div id="video-holder"></div>
                                </div>
                            </div>
                            <div id="hardware-acceleration-modal" class="modal hidden">
                                <div class="modal-area"><span class="close-modal"></span><span id="acceleration-text">It
                                        looks like hardware acceleration is disabled. While Ruffle may work, it could be
                                        very slow. You can find out how to enable hardware acceleration by following the
                                        link below:</span><a
                                        href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration"
                                        target="_blank" class="modal-button">FAQ - Chrome Hardware Acceleration</a>
                                </div>
                            </div>
                            <div id="clipboard-modal" class="modal hidden">
                                <div class="modal-area"><span class="close-modal"></span>
                                    <h2>Copying and pasting in Ruffle</h2>
                                    <p id="clipboard-modal-description"></p>
                                    <p><b>Ctrl+C</b><span>⁨ ⁩ for copy</span></p>
                                    <p><b>Ctrl+X</b><span>⁨ ⁩ for cut</span></p>
                                    <p><b>Ctrl+V</b><span>⁨ ⁩ for paste</span></p>
                                </div>
                            </div>
                            <div id="context-menu-overlay" class="hidden">
                                <ul id="context-menu" dir="ltr"></ul>
                            </div>
                        </template>
                        <param name="movie"
                            value="https://graphics.gaiaonline.com/images/housing/houseMain/House_Preview.swf?v=3">
                        <param name="width" value="200">
                        <param name="height" value="200">
                        <param name="AllowScriptAccess" value="always">
                        <param name="allowFullScreen" value="true">
                        <param name="flashvars" value="houseID=20150259&amp;g=house&amp;gver=3&amp;gsiUrl=www">
                    </ruffle-object><!--<![endif]-->
                </object>
                <div align="center">
                    <a href="/launch/towns?house_location=20150259" class="header-launcher"
                        data-launchtype="towns">Visit My House</a><br><br>
                </div>
            </div>
            <div id="id_aquarium" class="panel aquarium_panel">
                <h2 id="aquarium_title">My Aquarium</h2>

                <h3 style="text-align:center;">Your aquarium is undergoing maintenance!</h3>
            </div>
            <div class="panel friends_panel" id="id_friends">
                <h2 id="friends_title">Friends</h2>

                <div>
                    <span id="find_friends_banner"><a href="https://www.gaiaonline.com/findfriends">Find
                            Friends</a></span>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="panel playlist_panel" id="id_playlist">
                <h2 id="playlist_title">My Playlist</h2>
                <p>You currently have zero playlists!</p>
            </div>
            <div class="panel contact_panel" id="id_contact">
                <h2 id="contact_title">Contact</h2>
                <ul>

                    <li><span>Add to Friends</span></li>
                    <li><a href="/profile/privmsg.php?mode=post&amp;u=20150259">Send Message</a></li>
                    <li><a href="/gaia/bank.php?mode=trade&amp;uid=20150259">Trade Items</a></li>
                </ul>
            </div>
            <div id="id_custom_641" class="panel custom_panel postcontent">
                <h2 id="custom_641_title">Gallery</h2>
                <div id="custom_641_content">
                    <div class="spoiler-wrapper spoiler-hidden">
                        <div class="spoiler-title"><button type="button"
                                class="spoiler-control spoiler-control-show cta-button-sm gray-button"><span>show
                                    spoiler</span></button><button type="button"
                                class="spoiler-control spoiler-control-hide cta-button-sm gray-button"><span>hide
                                    spoiler</span></button></div>
                        <div class="spoiler"><br>
                            <img src="https://rstr.in/1jo6mv5p8ea7ef/gaia/jJt0IYzaUEM" class="user_img"
                                alt="User Image"><br>
                            Scroll down for more information.<br>
                            <div class="code" style="word-break:break-all">/* Click me to highlight then Ctrl + C to
                                copy */<br>
                                <br>
                                /* Reset some default browser styles */<br>
                                * {<br>
                                margin: 0;<br>
                                padding: 0;<br>
                                box-sizing: border-box;<br>
                                }<br>
                                <br>
                                /* Hide panels */<br>
                                .panel {display: none}<br>
                                <br>
                                /* Remove #column_1's left spacing*/<br>
                                #column_1 {margin-left: 0;}<br>
                                <br>
                                /* Make equipment or wish list items grid */<br>
                                #id_equipment, #id_wishlist {<br>
                                display: grid !important;<br>
                                grid-template-columns: repeat(auto-fill, 40px) !important;<br>
                                place-items: center !important;<br>
                                justify-content: center !important;<br>
                                gap: 8px !important;<br>
                                padding: 16px !important;<br>
                                border: 1px solid #e5e7eb !important;<br>
                                border-radius: 8px !important;<br>
                                position: relative !important;<br>
                                font-size: 0px;<br>
                                }<br>
                                <br>
                                /* Remove things */<br>
                                .premium_sparkle, <br>
                                #id_wishlist span{<br>
                                display: none !important;<br>
                                }<br>
                                <br>
                                #id_wishlist {font-size: 0px;}<br>
                                .
                            </div><br>
                        </div>
                    </div><br>
                    <br>
                    <div class="spoiler-wrapper spoiler-hidden">
                        <div class="spoiler-title"><button type="button"
                                class="spoiler-control spoiler-control-show cta-button-sm gray-button"><span>show
                                    spoiler</span></button><button type="button"
                                class="spoiler-control spoiler-control-hide cta-button-sm gray-button"><span>hide
                                    spoiler</span></button></div>
                        <div class="spoiler"><br>
                            <img src="https://rstr.in/1jo6mv5p8ea7ef/gaia/jJt0IYzaUEM" class="user_img"
                                alt="User Image"><br>
                            <br>
                            <div class="code" style="word-break:break-all">/* Click me to highlight then Ctrl + C to
                                copy */<br>
                                <br>
                                /* Reset some default browser styles */<br>
                                * {<br>
                                margin: 0;<br>
                                padding: 0;<br>
                                box-sizing: border-box;<br>
                                }<br>
                                <br>
                                /* Hide panels */<br>
                                .panel {display: none}<br>
                                <br>
                                /* Remove #column_1's left spacing*/<br>
                                #column_1 {margin-left: 0;}<br>
                                <br>
                                /* Make equipment or wish list items grid */<br>
                                #id_equipment, #id_wishlist {<br>
                                display: grid !important;<br>
                                grid-template-columns: repeat(auto-fill, 40px) !important;<br>
                                place-items: center !important;<br>
                                justify-content: center !important;<br>
                                gap: 8px !important;<br>
                                padding: 16px !important;<br>
                                border: 1px solid #e5e7eb !important;<br>
                                border-radius: 8px !important;<br>
                                position: relative !important;<br>
                                font-size: 0px;<br>
                                }<br>
                                <br>
                                /* Remove things */<br>
                                .premium_sparkle, <br>
                                #id_wishlist span{<br>
                                display: none !important;<br>
                                }<br>
                                <br>
                                #id_wishlist {font-size: 0px;}<br>
                                .
                            </div><br>
                        </div>
                    </div><br>
                    <br>
                    <br>
                    <div class="spoiler-wrapper spoiler-hidden">
                        <div class="spoiler-title"><button type="button"
                                class="spoiler-control spoiler-control-show cta-button-sm gray-button"><span>show
                                    spoiler</span></button><button type="button"
                                class="spoiler-control spoiler-control-hide cta-button-sm gray-button"><span>hide
                                    spoiler</span></button></div>
                        <div class="spoiler"><br>
                            <img src="https://rstr.in/1jo6mv5p8ea7ef/gaia/jJt0IYzaUEM" class="user_img"
                                alt="User Image"><br>
                            <br>
                            <div class="code" style="word-break:break-all">/* Click me to highlight then Ctrl + C to
                                copy */<br>
                                <br>
                                /* Reset some default browser styles */<br>
                                * {<br>
                                margin: 0;<br>
                                padding: 0;<br>
                                box-sizing: border-box;<br>
                                }<br>
                                <br>
                                /* Hide panels */<br>
                                .panel {display: none}<br>
                                <br>
                                /* Remove #column_1's left spacing*/<br>
                                #column_1 {margin-left: 0;}<br>
                                <br>
                                /* Make equipment or wish list items grid */<br>
                                #id_equipment, #id_wishlist {<br>
                                display: grid !important;<br>
                                grid-template-columns: repeat(auto-fill, 40px) !important;<br>
                                place-items: center !important;<br>
                                justify-content: center !important;<br>
                                gap: 8px !important;<br>
                                padding: 16px !important;<br>
                                border: 1px solid #e5e7eb !important;<br>
                                border-radius: 8px !important;<br>
                                position: relative !important;<br>
                                font-size: 0px;<br>
                                }<br>
                                <br>
                                /* Remove things */<br>
                                .premium_sparkle, <br>
                                #id_wishlist span{<br>
                                display: none !important;<br>
                                }<br>
                                <br>
                                #id_wishlist {font-size: 0px;}<br>
                                .
                            </div><br>
                        </div>
                    </div><br>
                    <br>
                </div>

                <div class="clear"></div>
            </div>
            &nbsp;
        </div>
    </div>

    <div id="pictures_container">
    </div>
    <div id="texts_container">
    </div>
    <div id="footer"></div>



    <div id="avatar_dropbox">
        <div id="trigger">&nbsp;</div>
    </div>
    <ul id="avatar_menu"></ul>
</body>`,It=`/*! src/css/profiles/v2/common-min.css */
* {
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
    height: 100%;
}

body #gaia_header {
    font-size: 11px;
    font-family: Verdana, Helvetica, Arial, sans-serif;
}

h1 {
    font-size: 16px;
}

h2 {
    font-size: 14px;
    text-align: left;
}

h3 {
    font-size: 12px;
}

a {
    color: #BD8440;
    font-weight: bold;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

img {
    border: 0;
}

li {
    list-style-type: none;
}

.clear {
    clear: both;
}

p {
    margin-bottom: 10px;
}

#header {
    width: 100%;
    height: 170px;
    font-size: 10px;
    position: relative;
    top: 0;
    left: 0;
}

* .yui-hidden {
    display: none;
}

.journal-date {
    font-size: x-small;
}

#column_1 img {
    max-width: 205px;
    width: expression(this.width>205 ? 205:true);
}

#column_2 img {
    max-width: 475px;
    width: expression(this.width>475 ? 475:true);
}

#column_3 img {
    max-width: 205px;
    width: expression(this.width>205 ? 205:true);
}

#columns {
    position: absolute;
    top: 172px;
    overflow: hidden;
    float: left;
}

#column_1 {
    width: 230px;
    margin-left: 25px;
    display: inline;
}

#column_2 {
    width: 500px;
    margin: 0 10px;
}

#column_3 {
    width: 230px;
}

#column_1,
#column_2,
#column_3 {
    float: left;
    overflow: hidden;
}

FORM#profile li {
    float: none;
    margin: 0;
}

FORM#profile ul.buttons li,
FORM#profile ul.style1 li {
    float: left;
}

#id_badges li,
#id_equipment li,
FORM#profile #id_badges li,
FORM#profile #id_equipment li {
    float: left;
    margin: 0 3px;
}

#id_badges img {
    height: 60px;
    width: 60px;
}

#id_equipment img {
    height: 30px;
    width: 30px;
}

#id_equipment .clickable,
#id_badges .clickable {
    cursor: hand;
    cursor: pointer;
}

#id_wishlist a {
    text-decoration: none;
}

#find_friends_banner {
    background: url(https://graphics.gaiaonline.com/images/gaia_global/body/mygaia/ic_findfriendsm.gif) top left no-repeat;
    padding: 5px 0 10px 30px;
    margin-left: 10px;
    float: right;
    text-align: right;
}

#find_friends_banner a {
    font-weight: bold;
    text-decoration: none;
}

#find_friends_banner a:hover {
    text-decoration: underline;
}

#modal,
#modal .hd {
    background: #fff;
    border: 0;
}

#modal .hd h2 {
    color: #fff;
    background: #3d8ad0;
    font-weight: bold;
    font-size: 100%;
    text-transform: uppercase;
    padding: 3px;
}

#modal .close {
    background: url(https://graphics.gaiaonline.com/images/gaia_global/body/icons/ic_close_13x13.png) no-repeat;
    display: block;
    width: 13px;
    height: 13px;
    text-indent: -5000em;
    overflow: hidden;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
}

#modal iframe {
    width: 750px;
    height: 300px;
    border: 0;
}

#dialogArrow {
    margin: -2px 0 0 0 !important;
}

.premium_sparkle {
    position: absolute;
    z-index: 3;
    margin-left: -37px;
    margin-top: 3px;
}

.owner_checkmark {
    position: absolute;
    z-index: 3;
    margin-left: -12px;
    margin-top: 2px;
}

.private_checkmark {
    position: absolute;
    z-index: 3;
    margin-left: -10px;
    margin-top: 18px;
    font-size: 15px;
    color: red;
}

.glow {
    text-shadow: 0 0 4px #FF0, 0px 0 4px #FF0;
}

/*! src/css/profiles/v2/dropdown-min.css */
.pushBox {
    float: right;
    height: 15px;
    width: 12px;
    margin: 0;
    padding: 0;
    font-size: 1px;
    line-height: 1px;
}

.forum_userstatus {
    margin: auto;
    left: 20px;
    top: 170px;
    background: #FFF;
    width: 114px;
    border: 1px solid #BBB;
    padding: 3px;
    margin-bottom: 10px;
}

.forum_userstatus.trig .statuslinks {
    background: url(https://graphics.gaiaonline.com/images/template/icons/ic_avatar_dropdown.gif) right -15px no-repeat;
    text-align: left;
}

.forum_userstatus.hover .statuslinks {
    background: url(https://graphics.gaiaonline.com/images/template/icons/ic_avatar_dropdown.gif) right -15px no-repeat;
    text-align: left;
}

.forum_userstatus .statuslinks {
    background: url(https://graphics.gaiaonline.com/images/template/icons/ic_avatar_dropdown.gif) top right no-repeat;
    text-align: left;
    height: 15px;
    padding: 0;
}

.forum_userstatus .statuslinks a,
.forum_userstatus .statuslinks span {
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;
    height: 15px;
    width: 100%;
    font-size: 11px;
    font-weight: normal;
    text-align: left;
}

.forum_userstatus .statuslinks span.online {
    background: url(https://graphics.gaiaonline.com/images/template/icons/ic_status_smile.gif) no-repeat 0 0;
    padding-left: 20px;
    width: 80px;
    height: 15px;
    float: left;
    color: #333;
}

.forum_userstatus .statuslinks span.offline {
    background: url(https://graphics.gaiaonline.com/images/template/icons/ic_status_smile.gif) left -15px no-repeat;
    padding-left: 20px;
    width: 80px;
    color: #666;
    height: 15px;
    float: left;
}

/*! src/css/profiles/v2/viewer-min.css */
dd .dropBox {
    float: left;
}

.dropBox {
    margin: 0 auto;
}

.deletecomment {
    display: block;
    float: right;
}

#avatar_dropbox {
    position: absolute;
    z-index: 500;
    height: 52px;
    width: 65px;
    background: url(https://graphics.gaiaonline.com/images/template/dropdown/hoverbox_65x104.png) no-repeat;
    display: none;
}

#avatar_dropbox #trigger {
    height: 48px;
    width: 12px;
    float: right;
}

#avatar_dropbox.trigger {
    background: url(https://graphics.gaiaonline.com/images/template/dropdown/hoverbox_65x104.png) no-repeat 0 -52px;
}

#avatar_menu {
    background: #FFF;
    position: absolute;
    z-index: 500;
    display: none;
    margin: 0;
    list-style: none;
    border: 1px solid #bbb;
    border-right: 1px solid #777;
    border-bottom: 1px solid #777;
    width: 120px;
    font-size: 13px;
    font-family: Arial;
}

#avatar_menu a {
    color: #3E53A2;
    display: block;
    font-size: 85%;
    height: 1%;
    padding: 2px;
    margin: 1px;
    text-decoration: none;
    font-weight: normal;
    text-align: left;
}

#avatar_menu a:hover {
    background: #e7edf4;
}

#avatar_menu li {
    margin: 0;
    list-style: none;
}

#avatar_menu li.menu_seperator {
    width: 100%;
    height: 1px;
    font-size: 0;
    line-height: 0;
    margin: 3px 0;
    background: #bbb;
}

#viewer #tooltip-badge .bd {
    background: none;
    background-color: #ffd;
    width: 250px;
    height: auto;
}

#viewer #tooltip-badge .bd div {
    padding-left: 65px;
}

#viewer #tooltip-badge .bd img {
    height: 60px;
    width: 60px;
    float: left;
}

#viewer img .clickable {
    cursor: hand;
    cursor: pointer;
}

/*! src/css/profiles/v2/panels-min.css */
.panel {
    position: relative;
    margin-bottom: 10px;
    background: #FFF;
    font-size: 10px;
    font-family: Verdana, Helvetica, Arial, sans-serif;
    padding: 10px;
    height: 1%;
    word-wrap: break-word;
}

.dd_panel {
    background: #FFF no-repeat;
    margin-bottom: 10px;
    width: 200px;
    cursor: move;
    opacity: .35;
    -moz-opacity: .35;
    filter: alpha(opacity=35);
}

html>body .panel {
    height: auto;
}

.details_panel {
    text-align: center;
}

.gifts_panel li {
    float: left;
    text-align: center;
    padding: 0 5px 0 5px;
}

.gifts_panel li p {
    text-align: left;
}

.gifts_panel img {
    padding: 0 5px 0 5px;
}

.gifts_panel .gift_anonymous {
    color: #333;
}

.friends_panel .style1 li {
    float: left;
    width: 90px;
    height: 80px;
    text-align: center;
}

.friends_panel .style2 li {
    float: left;
    width: 90px;
    height: 20px;
    text-align: center;
}

.media_panel {
    text-align: center;
}

.comments_panel #add_comment {
    display: none;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    padding: 10px;
    margin: 10px 0;
}

.comments_panel #add_comment textarea {
    width: 100%;
    height: 120px;
}

.comments_panel .style1 dt {
    clear: left;
    border-bottom: 1px solid #000;
    height: 20px;
    line-height: 20px;
    padding: 0 4px;
    text-align: right;
}

.comments_panel .style1 dt .username {
    float: left;
    display: block;
}

.comments_panel .style1 dd,
.comments_panel .style2 dd {
    overflow: hidden;
    width: 100%;
    margin-bottom: 5px;
}

.comments_panel .style1 dd .avatar {
    float: left;
}

.comments_panel .style1 dd p {
    margin-left: 72px;
}

.wish_list_panel .item {
    float: left;
}

.equipped_list_panel .item {
    float: left;
}

.house_panel {
    text-align: center;
}

.house_panel .house_img img {
    width: 200px;
}

.aquarium_panel {
    text-align: center;
}

.aquarium_panel .aquarium_img img {
    width: 200px;
}

.forums_panel {
    text-align: center;
}

.signature_panel {
    text-align: center;
}

.signature_panel h2 {
    text-align: left;
}

.interests_panel .interest_tags li {
    display: inline;
}

#friendGroup {
    padding: 10px;
    top: 172px;
    margin-left: 25px;
    margin-right: 25px;
}

#friendGroup ul {
    margin-top: 10px;
}

#friendGroup li {
    float: left;
    text-align: center;
    width: 100px;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
}

/*! src/css/profiles/v2/decorations-min.css */
.decoration {
    position: absolute;
    min-height: 40px;
}

.caption .caption_top {
    background: url(https://graphics.gaiaonline.com/images/profiles/v2/caption_top.gif) no-repeat top left;
    width: 100px;
    height: 5px;
    position: absolute;
    top: -5px;
}

.caption p {
    background: url(https://graphics.gaiaonline.com/images/profiles/v2/caption_middle.gif) repeat-y top left;
    width: 100px;
    text-align: center;
}

.caption .caption_bottom_left {
    background: url(https://graphics.gaiaonline.com/images/profiles/v2/caption_bottom_left.gif) no-repeat;
    width: 100px;
    height: 21px;
    margin-top: -10px;
}

.caption .caption_bottom_right {
    background: url(https://graphics.gaiaonline.com/images/profiles/v2/caption_bottom_right.gif) no-repeat;
    width: 100px;
    height: 21px;
    margin-top: -10px;
}

.wish_list_decoration {
    width: 150px;
}

.wish_list_decoration .decoration_content {
    height: 80px;
    overflow-y: scroll;
}

.wish_list_decoration .decoration_content li {
    display: inline;
}

.equipped_list_decoration {
    width: 150px;
}

.equipped_list_decoration .decoration_content {
    height: 80px;
    overflow-y: scroll;
}

.equipped_list_decoration .decoration_content li {
    display: inline;
}

/*! src/css/profiles/v2/header-min.css */
#gaia_header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 25px;
    background: #000;
    z-index: 99999;
    margin: 0;
    padding: 0;
}

#gaia_header #header_left {
    background: #000;
    color: #fff;
    float: left;
    width: 49%;
    height: 25px;
    line-height: 24px;
}

#gaia_header #header_left img {
    top: 0;
    vertical-align: middle;
}

#gaia_header #header_right {
    background: #000;
    height: 25px;
    color: #fff;
    float: left;
    width: 49%;
    z-index: 9999;
    text-align: right;
    line-height: 24px;
}

#gaia_header #header_right img {
    top: 0;
    vertical-align: middle;
}

#header_right li img {
    padding-right: 4px;
}

#gaia_header ul li {
    display: inline;
}

#gaia_header a {
    color: #ccc !important;
}

.spacer {
    padding-left: 10px;
}

/*! src/css/profiles/v2/smilies-min.css */
div.postcontent .quote {
    padding-left: 20px;
    padding-top: 1em;
    padding-bottom: 1em;
    clear: both;
}

div.postcontent .quote .cite {
    font-weight: bold;
    font-size: 80%;
}

div.postcontent .quote .quoted {
    background: #efefef;
    border: 1px solid #ccc;
    padding: 10px;
}

div.postcontent .clear {
    clear: both;
}

div.postcontent .code {
    border: 1px solid #006;
    background: #ccc;
    font-family: Courier, "Courier New", monospace;
}

div.postcontent ul {
    margin-left: 15px;
}

div.postcontent span.smilies {
    padding-left: 2px;
    padding-bottom: 3px;
}

div.postcontent span.smilies b {
    visibility: hidden;
    font-size: 1px;
    padding-right: 12px;
}

div.postcontent span.smilies_biggrin {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_biggrin.gif) left top no-repeat;
}

div.postcontent span.smilies_biggrin {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_biggrin.gif) left top no-repeat;
}

div.postcontent span.smilies_biggrin {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_biggrin.gif) left top no-repeat;
}

div.postcontent span.smilies_smile {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_smile.gif) left top no-repeat;
}

div.postcontent span.smilies_smile {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_smile.gif) left top no-repeat;
}

div.postcontent span.smilies_smile {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_smile.gif) left top no-repeat;
}

div.postcontent span.smilies_redface {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_redface.gif) left top no-repeat;
}

div.postcontent span.smilies_crying {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_crying.gif) left top no-repeat;
}

div.postcontent span.smilies_stare {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_stare.gif) left top no-repeat;
}

div.postcontent span.smilies_xd {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_xd.gif) left top no-repeat;
}

div.postcontent span.smilies_3nodding {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_3nodding.gif) left top no-repeat;
}

div.postcontent span.smilies_blaugh {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_blaugh.gif) left top no-repeat;
}

div.postcontent span.smilies_gonk {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_gonk.gif) left top no-repeat;
}

div.postcontent span.smilies_scream {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_scream.gif) left top no-repeat;
}

div.postcontent span.smilies_stressed {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_stressed.gif) left top no-repeat;
}

div.postcontent span.smilies_sweatdrop {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_sweatdrop.gif) left top no-repeat;
}

div.postcontent span.smilies_heart {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_heart.gif) left top no-repeat;
}

div.postcontent span.smilies_domokun {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_domokun.gif) left top no-repeat;
}

div.postcontent span.smilies_xp {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_xp.gif) left top no-repeat;
}

div.postcontent span.smilies_whee {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_whee.gif) left top no-repeat;
}

div.postcontent span.smilies_wink {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_wink.gif) left top no-repeat;
}

div.postcontent span.smilies_wink {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_wink.gif) left top no-repeat;
}

div.postcontent span.smilies_wink {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_wink.gif) left top no-repeat;
}

div.postcontent span.smilies_sad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_sad.gif) left top no-repeat;
}

div.postcontent span.smilies_sad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_sad.gif) left top no-repeat;
}

div.postcontent span.smilies_sad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_sad.gif) left top no-repeat;
}

div.postcontent span.smilies_surprised {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_surprised.gif) left top no-repeat;
}

div.postcontent span.smilies_surprised {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_surprised.gif) left top no-repeat;
}

div.postcontent span.smilies_surprised {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_surprised.gif) left top no-repeat;
}

div.postcontent span.smilies_eek {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_eek.gif) left top no-repeat;
}

div.postcontent span.smilies_confused {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_confused.gif) left top no-repeat;
}

div.postcontent span.smilies_confused {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_confused.gif) left top no-repeat;
}

div.postcontent span.smilies_confused {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_confused.gif) left top no-repeat;
}

div.postcontent span.smilies_cool {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cool.gif) left top no-repeat;
}

div.postcontent span.smilies_cool {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cool.gif) left top no-repeat;
}

div.postcontent span.smilies_cool {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cool.gif) left top no-repeat;
}

div.postcontent span.smilies_lol {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_lol.gif) left top no-repeat;
}

div.postcontent span.smilies_mad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_mad.gif) left top no-repeat;
}

div.postcontent span.smilies_mad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_mad.gif) left top no-repeat;
}

div.postcontent span.smilies_mad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_mad.gif) left top no-repeat;
}

div.postcontent span.smilies_razz {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_razz.gif) left top no-repeat;
}

div.postcontent span.smilies_razz {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_razz.gif) left top no-repeat;
}

div.postcontent span.smilies_razz {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_razz.gif) left top no-repeat;
}

div.postcontent span.smilies_cry {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cry.gif) left top no-repeat;
}

div.postcontent span.smilies_evil {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_evil.gif) left top no-repeat;
}

div.postcontent span.smilies_twisted {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_twisted.gif) left top no-repeat;
}

div.postcontent span.smilies_rolleyes {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_rolleyes.gif) left top no-repeat;
}

div.postcontent span.smilies_exclaim {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_exclaim.gif) left top no-repeat;
}

div.postcontent span.smilies_question {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_question.gif) left top no-repeat;
}

div.postcontent span.smilies_idea {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_idea.gif) left top no-repeat;
}

div.postcontent span.smilies_arrow {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_arrow.gif) left top no-repeat;
}

div.postcontent span.smilies_neutral {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_neutral.gif) left top no-repeat;
}

div.postcontent span.smilies_neutral {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_neutral.gif) left top no-repeat;
}

div.postcontent span.smilies_neutral {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_neutral.gif) left top no-repeat;
}

div.postcontent span.smilies_mrgreen {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_mrgreen.gif) left top no-repeat;
}

div.postcontent span.smilies_ninja {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_ninja.gif) left top no-repeat;
}

div.postcontent span.smilies_4laugh {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_4laugh.gif) left top no-repeat;
}

div.postcontent span.smilies_rofl {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_rofl.gif) left top no-repeat;
}

div.postcontent span.smilies_pirate {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_pirate.gif) left top no-repeat;
}

div.postcontent span.smilies_talk2hand {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_talk2hand.gif) left top no-repeat;
}

div.postcontent span.smilies_burning_eyes {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_burning.gif) left top no-repeat;
}

div.postcontent span.smilies_cheese_whine {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cheese.gif) left top no-repeat;
}

div.postcontent span.smilies_dramallama {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_dramallama.gif) left top no-repeat;
}

div.postcontent span.smilies_wahmbulance {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_wahmbulance.gif) left top no-repeat;
}

div.postcontent span.smilies_emo {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_emo.gif) left top no-repeat;
}

/*! src/css/quote.css */
.genmed {
    font-size: 11px;
}

.gensmall {
    font-size: 10px;
}

.gensmallwhite {
    font-size: 11px;
    color: #FFFFFF;
}

.gen,
.genmed,
.gensmall {
    color: #437383;
}

a.gen,
a.genmed,
a.gensmall {
    color: #427184;
    text-decoration: none;
}

a.gen:hover,
a.genmed:hover,
a.gensmall:hover {
    color: #DD6900;
    text-decoration: underline;
}

/* Quote & Code blocks */
.code {
    font-family: Courier, 'Courier New', sans-serif;
    font-size: 11px;
    color: #006600;
    background-color: #FAFAFA;
    border: #D1D7DC;
    border-style: solid;
    border-left-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px
}

.quote {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 11px;
    color: #444444;
    line-height: 125%;
    background-color: #FAFAFA;
    border: #D1D7DC;
    border-style: solid;
    border-left-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px
}

/*! src/css/profiles/v2/alert-min.css */
#alerts_banner {
    background: url(https://graphics.gaiaonline.com/images/gaia_global/body/mygaia/ic_alerts_17x22.gif) no-repeat 0 0;
    padding: 5px 0 10px 30px;
    margin-left: 10px;
    float: right;
    text-align: right;
}

#alerts_banner a {
    font-weight: bold;
    text-decoration: none;
}

#alerts_banner a:hover {
    text-decoration: underline;
}

#alert_container {
    float: left;
    padding-top: 5px;
}

/*! src/yui/container/assets/container-min.css */
.yui-overlay,
.yui-panel-container {
    visibility: hidden;
    position: absolute;
    z-index: 2;
}

.yui-tt {
    visibility: hidden;
    position: absolute;
    color: #333;
    background-color: #FDFFB4;
    font-family: arial, helvetica, verdana, sans-serif;
    padding: 2px;
    border: 1px solid #FCC90D;
    font: 100% sans-serif;
    width: auto;
}

.yui-tt-shadow {
    display: none;
}

* html body.masked select {
    visibility: hidden;
}

* html div.yui-panel-container select {
    visibility: inherit;
}

* html div.drag select {
    visibility: hidden;
}

* html div.hide-select select {
    visibility: hidden;
}

.mask {
    z-index: 1;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    -moz-opacity: .5;
    opacity: .50;
    filter: alpha(opacity=50);
    background-color: #CCC;
}

.hide-scrollbars,
.hide-scrollbars * {
    overflow: hidden;
}

.hide-scrollbars select {
    display: none;
}

.show-scrollbars {
    overflow: auto;
}

.yui-panel-container.show-scrollbars {
    overflow: visible;
}

.yui-panel-container.show-scrollbars .underlay {
    overflow: auto;
}

.yui-panel-container .underlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.yui-panel-container.matte {
    padding: 3px;
    background-color: #fff;
}

.yui-panel-container.shadow .underlay {
    top: 3px;
    bottom: -3px;
    right: -3px;
    left: 3px;
    background-color: #000;
    opacity: .12;
    filter: alpha(opacity=12);
}

.yui-panel-container.shadow .underlay.yui-force-redraw {
    padding-bottom: 1px;
}

.yui-effect-fade .underlay {
    display: none;
}

.yui-panel {
    visibility: hidden;
    border-collapse: separate;
    position: relative;
    left: 0;
    top: 0;
    font: 1em Arial;
    background-color: #FFF;
    border: 1px solid #000;
    z-index: 1;
    overflow: hidden;
}

.yui-panel .hd {
    background-color: #3d77cb;
    color: #FFF;
    font-size: 100%;
    line-height: 100%;
    border: 1px solid #FFF;
    border-bottom: 1px solid #000;
    font-weight: bold;
    padding: 4px;
    white-space: nowrap;
}

.yui-panel .bd {
    overflow: hidden;
    padding: 4px;
}

.yui-panel .bd p {
    margin: 0 0 1em;
}

.yui-panel .container-close {
    position: absolute;
    top: 5px;
    right: 4px;
    z-index: 6;
    height: 12px;
    width: 12px;
    margin: 0;
    padding: 0;
    background: url(https://graphics.gaiaonline.com/images/template/profile/profile_close_btn.gif) no-repeat;
    cursor: pointer;
    visibility: inherit;
    text-indent: -10000em;
    overflow: hidden;
    text-decoration: none;
}

.yui-panel .ft {
    padding: 4px;
    overflow: hidden;
}

.yui-simple-dialog .bd .yui-icon {
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    float: left;
}

.yui-simple-dialog .bd span.blckicon {
    background: url("blck16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.alrticon {
    background: url("alrt16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.hlpicon {
    background: url("hlp16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.infoicon {
    background: url("info16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.warnicon {
    background: url("warn16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.tipicon {
    background: url("tip16_1.gif") no-repeat;
}

.yui-dialog .ft,
.yui-simple-dialog .ft {
    padding-bottom: 5px;
    padding-right: 5px;
    text-align: right;
}

.yui-dialog form,
.yui-simple-dialog form {
    margin: 0;
}

.button-group button {
    font: 100 76% verdana;
    text-decoration: none;
    background-color: #E4E4E4;
    color: #333;
    cursor: hand;
    vertical-align: middle;
    border: 2px solid #797979;
    border-top-color: #FFF;
    border-left-color: #FFF;
    margin: 2px;
    padding: 2px;
}

.button-group button.default {
    font-weight: bold;
}

.button-group button:hover,
.button-group button.hover {
    border: 2px solid #90A029;
    background-color: #EBF09E;
    border-top-color: #FFF;
    border-left-color: #FFF;
}

.button-group button:active {
    border: 2px solid #E4E4E4;
    background-color: #BBB;
    border-top-color: #333;
    border-left-color: #333;
}

.yui-override-padding {
    padding: 0 !important;
}

/*! src/css/equip/equip-min.css */
#equipped-list_mask {
    background: #000;
    opacity: .5;
    filter: alpha(opacity=50);
}

#equipped-list {
    width: 690px;
    border: 0;
    background: transparent;
    text-align: left;
    font-size: 13px;
}

#equipped-list a {
    font-weight: normal;
}

#equipped-list .hd_equipped-list {
    overflow: hidden;
    height: 32px;
}

#equipped-list .hd_equipped-list .leftCorner,
#equipped-list .hd_equipped-list .rightCorner {
    width: 10px;
    height: 32px;
}

#equipped-list .hd_equipped-list .leftCorner {
    background: url(https://graphics.gaiaonline.com/images/equip/rs_5a4564_title_corners.png) no-repeat;
    float: left;
}

#equipped-list .hd_equipped-list .rightCorner {
    background: url(https://graphics.gaiaonline.com/images/equip/rs_5a4564_title_corners.png) -10px 0 no-repeat;
    float: right;
}

#equipped-list .hd_equipped-list .titleBar {
    background: #5a4564 url(https://graphics.gaiaonline.com/images/equip/hd_equipped_items.png) left center no-repeat;
    float: left;
    height: 32px;
    width: 670px;
    color: #FFF;
    font-size: 85%;
}

#equipped-list .hd_equipped-list .titleBar .title {
    padding: 11px 0 0 135px;
    font-size: 100%;
}

#equipped-list .hd_equipped-list .titleBar #icon-close-list {
    background: url(https://graphics.gaiaonline.com/images/gaia_global/body/icons/ic_close_13x13.png);
    width: 13px;
    height: 13px;
    font-size: 0;
    line-height: 0;
    float: right;
    margin-top: 10px;
    cursor: pointer;
}

#equipped-list .bd_equipped-list {
    background: url(https://graphics.gaiaonline.com/images/equip/il_mannequin_equip_bd.png) bottom no-repeat #FFF;
    padding: 15px 15px 0;
    min-height: 163px;
    height: auto !important;
    height: 163px;
    overflow: hidden;
}

#equipped-list .bd_equipped-list ul {
    list-style: none;
}

#equipped-list .bd_equipped-list ul li {
    float: left;
    width: 220px;
    overflow: hidden;
}

#equipped-list .bd_equipped-list ul li div.itemIcon {
    float: left;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
}

#equipped-list .bd_equipped-list ul li a.itemDesc {
    padding: 0 3px;
    display: block;
    line-height: 32px;
    color: #3e53a2;
    font-size: 85%;
    text-decoration: none;
    height: 32px;
    overflow: hidden;
    cursor: pointer;
}

#equipped-list .bd_equipped-list ul li a.itemDesc:hover {
    text-decoration: underline;
}

#equipped-list .ft_equipped-list {
    background: url(https://graphics.gaiaonline.com/images/equip/il_mannequin_equip_ft.png) no-repeat;
    height: 20px;
}

#equipped-item-details_mask {
    opacity: .3;
    filter: alpha(opacity=30);
    background: #000;
    visibility: hidden;
}

#equipped-item-details {
    width: 271px;
    border: 0;
    text-align: left;
    font-size: 13px;
    font-family: Arial;
    overflow: visible;
    background: url(https://graphics.gaiaonline.com/images/equip/empty.png);
}

#equipped-item-details a {
    color: #3e53a2;
    text-decoration: none;
}

#equipped-item-details a:hover {
    text-decoration: underline;
}

#equipped-item-details .hd_equipped-details {
    background: url(https://graphics.gaiaonline.com/images/equip/rs_corners_5A4564_FFF_4.png) no-repeat;
    height: 4px;
    font-size: 0;
    line-height: 0;
}

#equipped-item-details .bd_equipped-details {
    background: #FFF url(https://graphics.gaiaonline.com/images/equip/rs_corners_5A4564_FFF_4.png) -271px 0 repeat-y;
    padding: 7px 11px;
    height: auto !important;
}

#equipped-item-details .bd_equipped-details #icon-close-details {
    background: url(https://graphics.gaiaonline.com/images/gaia_global/body/icons/ic_close_13x13.png) no-repeat;
    height: 13px;
    width: 13px;
    font-size: 0;
    line-height: 0;
    cursor: pointer;
    float: right;
}

#equipped-item-details .bd_equipped-details div#itemIcon {
    float: left;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
}

#equipped-item-details .bd_equipped-details h1#itemTitle {
    font-size: 108%;
    height: 30px;
    overflow: hidden;
    line-height: 30px;
    color: #5a4564;
    margin-left: 32px;
}

#equipped-item-details .bd_equipped-details p#itemDesc,
#equipped-item-details .bd_equipped-details p#itemAvail,
#equipped-item-details .bd_equipped-details p#itemMarket,
#equipped-item-details .bd_equipped-details p#itemBuyMarket {
    color: #000;
    font-size: 85%;
}

#equipped-item-details .bd_equipped-details p#itemDesc {
    max-height: 50px;
    overflow: auto;
}

#equipped-item-details .bd_equipped-details p#itemBuyMarket {
    font-weight: bold;
}

#equipped-item-details .bd_equipped-details div.seperate {
    height: 1px;
    background: #c3cdd5;
    font-size: 0;
    line-height: 0;
    margin: 10px 0;
}

#equipped-item-details .bd_equipped-details div.itemBuy {
    padding: 15px 0;
    text-align: center;
    overflow: hidden;
}

#equipped-item-details .bd_equipped-details div.itemBuy span {
    overflow: hidden;
    display: inline-block;
}

#equipped-item-details .ft_equipped-details {
    background: url(https://graphics.gaiaonline.com/images/equip/rs_corners_5A4564_FFF_4.png) 0 -4px no-repeat;
    height: 4px;
    font-size: 0;
    line-height: 0;
}

#gotoShop,
#addWishlist {
    display: block;
    background: url(https://graphics.gaiaonline.com/images/equip/btn_gotoshop.gif) no-repeat;
    height: 21px;
    width: 87px;
    overflow: hidden;
    line-height: 1000px;
    float: left;
    margin-right: 10px;
}

#gotoShop:hover {
    background: url(https://graphics.gaiaonline.com/images/equip/btn_gotoshop.gif) 0 -21px no-repeat;
}

#gaia_content #bd #playzomg,
#gaia_content #bd .get-more-items {
    margin-top: 4px;
}

#gaia_content #bd #playzomg A,
#gaia_content #bd #playzomg A:link,
#gaia_content #bd #playzomg A:active,
#gaia_content #bd .get-more-items A,
#gaia_content #bd .get-more-items A:link,
#gaia_content #bd .get-more-items A:active {
    background: transparent url(https://graphics.gaiaonline.com/images/gaia_global/body/arrows/ic_hyperlink_arrow_15x15.png) no-repeat scroll 0;
    bottom: 10px;
    color: #3e52a2;
    font-weight: bold;
    height: 25px;
    line-height: 25px;
    vertical-align: middle;
    font-size: 12px;
    padding: 0 0 0 18px;
    text-decoration: none;
    white-space: nowrap;
}

#gaia_content #bd #playzomg A:hover,
#gaia_content #bd .get-more-items A:hover {
    color: #29c;
    text-decoration: underline;
}

#gaia_content #bd #playzomg A:visited,
#gaia_content #bd .get-more-items A:visited {
    color: #3e52a2;
    text-decoration: none;
}

#addWishlist {
    background: url(https://graphics.gaiaonline.com/images/equip/btn_addtowishlist.gif) no-repeat;
    width: 110px;
    margin: 0;
}

#addWishlist:hover {
    background: url(https://graphics.gaiaonline.com/images/equip/btn_addtowishlist.gif) 0 -21px no-repeat;
}

#itemMarket .deltaDown {
    background: url(https://graphics.gaiaonline.com/images/marketplace/ic_arrow_falling_9x9.gif) left center no-repeat;
    padding-left: 12px;
    color: #BC0000;
    font-weight: bold;
}

#itemMarket .deltaUp {
    background: url(https://graphics.gaiaonline.com/images/marketplace/ic_arrow_rising_9x9.gif) left center no-repeat;
    padding-left: 12px;
    color: #009604;
    font-weight: bold;
}

#itemMarket .deltaSame {
    color: #124AAC;
    font-weight: bold;
}

#dialogArrow {
    display: block;
    width: 100%;
    position: relative;
    margin: -1px 0 0 0;
    text-align: center;
}


.panel {
    padding: 15px;
}

.panel h2 {
    margin: -5px -5px 10px -5px;
    padding: 5px 6px;
    background: #aaa;
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    font-size: 10px;
}

html {
    background: #191a68;
}

body {
    background: #191a68;
}

.panel h2 {
    background: #3D8AD0;
    color: #fff;
}

.panel {
    background: #fff;
    color: #000;
}

a {
    color: #D37B14;
}

#header a {
    color: #D37B14;
}

#gaia_header {
    display: block !important;
    position: relative !important;
    top: 0px !important;
    left: 0px !important;
    width: 100% !important;
    height: 25px !important;
    margin: 0 !important;
    padding: 0 !important;
    z-index: 9999 !important;
    font-size: 11px !important;
}

#header_left {
    display: block !important;
    position: relative !important;
    top: 0px !important;
    float: left !important;
    width: 49% !important;
    height: 25px !important;
    line-height: 24px !important;
    margin: 0 !important;
    padding: 0 !important;
    z-index: 9999 !important;
    font-size: 11px !important;
    text-align: left !important;
}

#header_right {
    display: block !important;
    position: relative !important;
    top: 0px !important;
    right: 0px !important;
    width: 49% !important;
    height: 25px !important;
    line-height: 24px !important;
    margin: 0 !important;
    padding: 0 !important;
    z-index: 9999 !important;
    font-size: 11px !important;
    text-align: right !important;
}

#header_left img {
    display: inline !important;
}

#header_left ul {
    display: inline !important;
}

#header_right ul {
    display: inline !important;
}

#header_left li {
    display: inline !important;
}

#header_right li {
    display: inline !important;
}

#header_left a {
    display: inline !important;
}

#header_right a {
    display: inline !important;
}


.spoiler-wrapper {
  padding: 1px;
}
.spoiler-wrapper .spoiler-control {
  cursor: pointer;
  display: inline;
}
.spoiler-hidden > .spoiler-title > .spoiler-control-hide, .spoiler-revealed > .spoiler-title > .spoiler-control-show, .spoiler-hidden > .spoiler {
  display: none;
}
.spoiler-revealed {
  border: 1px dotted #000;
}
.spoiler-revealed  > .spoiler {
  display: inherit;
}`,Lt=`<body id="extendedProfileBody" class=" bbcode-swap-blocked-group ">
    <div id="gaia_header">
    <ul id="header_left">
        <li class="spacer"></li>
        <li><a href="/"><img src="https://graphics.gaiaonline.com/images/profile/mini_gaialogo.gif" alt="Gaia" width="47" height="23"/></a></li>
            <li> <a href="/mygaia/">My Gaia</a> |</li>
        <li><a href="/market/">Shops</a></li>
        <li>| <a href="/forum/">Forums</a></li>
        <li>| <a href="/world/">World</a></li>
        <li>| <a href="/games/">Games</a></li>
    </ul>

    <ul id="header_right">
                <li><a href="https://www.gaiaonline.com/account/profileprefs">Profile Options</a></li>
            <li>| <a href="https://www.gaiaonline.com/auth/logout/?user_id=46362126&amp;nonce=1553677362.1780654017.636119496">Sign Out</a></li>
            <li>
                <a title="Add to favorites" class="possible_favorite favorites_add avatar" data-uid="46362126" data-username="Overthink" src="/collections/show">
                    <span>+</span>
                </a>
            </li>
            <li>| <a href="/gaia/report.php?r=22&amp;rpost=46362126">Report this Profile</a></li>
        <li class="spacer"><!-- --></li>
    </ul>

    <div class="clear"><!-- --></div>
    </div>

    <div id="site">
        <div id="header">
            <h1>Gaia Online</h1>
        </div>
        <div id="content">

    <div id="sidebar">

    <div id="profile" class="section">
        <h2><span class="profile-header-username" title="Overthink">Overthink</span></h2>

        <ul id="bar">
            <li id="onlineButton" title="Currently online">Currently online</li>
            <li id="addButton"><a href="/friends/add/46362126/" onclick="YAHOO.gaia.widgets.addFriend.click(event)" title="Add to Friends">Add to Friends</a></li>
            <li id="msgButton"><a href="/profile/privmsg.php?mode=post&amp;u=46362126" title="Send Message">Send Message</a></li>
            <li id="tradeButton"><a href="/gaia/bank.php?mode=trade&amp;uid=46362126" title="Trade Items">Trade Items</a></li>
            <li id="ignoreButton"><a href="/friends/?hook=46362126" title="Add to Ignored">Add to Ignored</a></li>
        </ul>
            <img   src="https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e_flip.png?t=1773418642_6_11" alt="Overthink's avatar" class="avatar" title="Overthink" />
            <ul class="items" id="equipped_id" title="46362126">
                        <li><a href="https://www.gaiaonline.com/virtual-items/off-white-loose-tank-top/i.8a7d92f6d02960e04ef4a516658ba2af/" title="Off-White Loose Tank Top - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/97bdbf2c9c6631.png" alt="Off-White Loose Tank Top - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/red-flannel-wrap/i.b7eaf818f32285fcc2aacf8b872f02f5/" title="Red Flannel Wrap - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/35b9be739c4a33.png" alt="Red Flannel Wrap - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/navy-pyramid-bracelets/i.c91a787f9af0722eb730b0255c2a35c4/" title="Navy Pyramid Bracelets - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/c06ecb3c9c4847.png" alt="Navy Pyramid Bracelets - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/classic-picnic-basket/i.d92a46e00fc692ae0eb14edf1c815963/" title="Classic Picnic Basket - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/5b1307d79c7f63.png" alt="Classic Picnic Basket - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/onyx-kira-kira-earring-with-jewel/i.75d18aa58b7757eb14bd7afc27d0bc43/" title="Onyx Kira Kira Earring with Jewel - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/63c68a425a3b.png" alt="Onyx Kira Kira Earring with Jewel - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/warm-starter-boots/i.f2033533ad32c6c9c6e76205a7e75595/" title="Warm Starter Boots - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/887ad11c1e.png" alt="Warm Starter Boots - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/enchanted-strings/i.e6bc39a185628701eb3ce0927ce6146f/" title="Enchanted Strings - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/a351d200342d.png" alt="Enchanted Strings - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/hardhearted-passion/i.099eb5af9b65b8ea8914cc3bfd9a85a0/" title="Hardhearted Passion - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/60d8de1c99c213.png" alt="Hardhearted Passion - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/cafe-miam/i.ce356442234c0c9ff775570fd18ee206/" title="Cafe Miam - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/fa4f49af98b649.png" alt="Cafe Miam - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/loyalty-pin/i.973ba8c72156011ab5578d97d74649a5/" title="Loyalty Pin - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/c12988f299004f.png" alt="Loyalty Pin - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/batty-march/i.a0d3452ec68e9ee1cba3e535aafc21e2/" title="Batty March - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/842b04de998b3b.png" alt="Batty March - virtual item" class="item" /></a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/gemstone-majoko-mariko-eyes/i.6ca33d14dd443836115e0fea2047c54e/" title="Gemstone Majoko Mariko Eyes - virtual item"><img   src="https://graphics.gaiaonline.com/images/thumbnails/4915ba22991cff.png" alt="Gemstone Majoko Mariko Eyes - virtual item" class="item" /></a></li>
            </ul>
    </div>

<div id="details" class="section postcontent">
    <h2>Details</h2>
        <dl id="stats">
<dt>Last Login</dt><dd>06/05/2026 12:32 am</dd><dt>Member Since</dt><dd>08/01/2023</dd>    </dl>

    <dl id="info">
<dt>Location</dt>
<dd>Philippines</dd><dt>Occupation</dt>
<dd>Freelancer</dd><dt>Gender</dt>
<dd>Female</dd><dt>Birthday</dt>
<dd>05/02</dd><dt>Website</dt>
<dd><a href="/gaia/redirect.php?r=https://www.gaiaonline.com/profiles/overthink/46362126/" target="top">Personal Website</a></dd>    </dl>

    <div class="clear"></div>
        <hr/>

        <h3>Interests</h3>
                <dl>
                    <dt><strong>Favorite Movies/Anime</strong></dt>
                    <dd>
                            <a href="/gsearch/interests/harry-potter/">harry potter</a>
                            <a href="/gsearch/interests/fairy-tail/">Fairy Tail</a>
                            <a href="/gsearch/interests/solo-leveling/">Solo leveling</a>
                            <a href="/gsearch/interests/yakuza-fianc/">Yakuza Fiancé</a>
                    </dd>
                </dl>
                <dl>
                    <dt><strong>Favorite TV Shows</strong></dt>
                    <dd>
                            <a href="/gsearch/interests/supernatural/">supernatural</a>
                            <a href="/gsearch/interests/game-of-thrones/">game of thrones</a>
                            <a href="/gsearch/interests/the-rookie/">the rookie</a>
                            <a href="/gsearch/interests/suits/">suits</a>
                    </dd>
                </dl>
                <dl>
                    <dt><strong>Favorite Reads</strong></dt>
                    <dd>
                            <a href="/gsearch/interests/noblesse/">noblesse</a>
                            <a href="/gsearch/interests/and-many-more-i-dont-remember/">and many more (i dont remember)</a>
                    </dd>
                </dl>
                <dl>
                    <dt><strong>Favorite Music/Bands</strong></dt>
                    <dd>
                            <a href="/gsearch/interests/coldplay/">coldplay</a>
                            <a href="/gsearch/interests/before-you-exit/">before you exit</a>
                            <a href="/gsearch/interests/imagine-dragons/">imagine dragons</a>
                            <a href="/gsearch/interests/khalid/">khalid</a>
                            <a href="/gsearch/interests/one-ok-rock/">one ok rock</a>
                            <a href="/gsearch/interests/b1a4/">b1a4</a>
                            <a href="/gsearch/interests/snsd/">snsd</a>
                            <a href="/gsearch/interests/taeyang/">taeyang</a>
                            <a href="/gsearch/interests/ailee/">ailee</a>
                    </dd>
                </dl>
                <dl>
                    <dt><strong>Hobbies/Interests</strong></dt>
                    <dd>
                            <a href="/gsearch/interests/coding/">coding</a>
                            <a href="/gsearch/interests/travelling/">travelling</a>
                            <a href="/gsearch/interests/12-hour-sleep/">12 -hour sleep</a>
                            <a href="/gsearch/interests/grand-theft-auto/">grand theft auto</a>
                            <a href="/gsearch/interests/red-dead-redemption/">red dead redemption</a>
                            <a href="/gsearch/interests/dying-light/">dying light</a>
                            <a href="/gsearch/interests/where-winds-meet/">where winds meet</a>
                            <a href="/gsearch/interests/inzoi/">inzoi</a>
                            <a href="/gsearch/interests/sims/">sims</a>
                            <a href="/gsearch/interests/delta-force/">delta force</a>
                            <a href="/gsearch/interests/sky-children-of-the-light/">sky: children of the light</a>
                            <a href="/gsearch/interests/some-cute-and-horror-games/">some cute and horror games</a>
                    </dd>
                </dl>

</div>
        <div id="wishlist" class="section">
            <h2>Wish List</h2>
            <ul class="items">
                        <li><a href="https://www.gaiaonline.com/virtual-items/ancient-katana/i.e6103eb2b38dc2d5c170bebcea37f467/" id="a_7925" title="Ancient Katana - virtual item (wanted)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/5ecfff3a1ef5.png" alt="Ancient Katana - virtual item (wanted)" class="item wanted" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/devil-tail/i.a97a941dee218c65b8944cbc0aefafda/" id="a_1537" title="Devil Tail - virtual item (wanted)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/1163e3f4601.png" alt="Devil Tail - virtual item (wanted)" class="item wanted" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/kiki-kitty-plushie/i.e37d68d5a867dd1284d949b950b3139c/" id="a_3366" title="KiKi Kitty Plushie - virtual item (questing)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/5d3b69b8d26.png" alt="KiKi Kitty Plushie - virtual item (questing)" class="item questing" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/dj-studio-headphones/i.a94eaacb2dd25a1dd1b1307e7bef8a1a/" id="a_1433" title="DJ Studio Headphones - virtual item (bought)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/bd6bb178599.png" alt="DJ Studio Headphones - virtual item (bought)" class="item bought" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/horns-of-the-demon/i.dead24b03185fdcaf4514c94d1dd3cb4/" id="a_2316" title="Horns of the Demon - virtual item (donated)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/736ba66e90c.png" alt="Horns of the Demon - virtual item (donated)" class="item donated" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/the-lusty-scoundrel/i.32392a94262d00fee4a935c985233250/" id="a_26035" title="The Lusty Scoundrel - virtual item (donated)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/4f4d4a4165b3.png" alt="The Lusty Scoundrel - virtual item (donated)" class="item donated" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/inari-s-beads/i.81217eea08ab5bd993d8957c26d66273/" id="a_21261" title="Inari's Beads - virtual item (wanted)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/775a6502530d.png" alt="Inari's Beads - virtual item (wanted)" class="item wanted" />
*                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/wind-security-blanket/i.9a768d5c6851e3aac36ad6ee09e71b1d/" id="a_3863" title="Wind Security Blanket - virtual item (wanted)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/68234dc2f17.png" alt="Wind Security Blanket - virtual item (wanted)" class="item wanted" />
*                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/omg/i.9413e3f4949bf76f4cee1a5e5088f394/" id="a_1586" title="OMG - virtual item (questing)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/46c43a81632.png" alt="OMG - virtual item (questing)" class="item questing" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/golden-laurels/i.7bdc169c4445b4ef47c4e6bf0a17565c/" id="a_2443" title="Golden Laurels - virtual item (wanted)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/2ee1862398b.png" alt="Golden Laurels - virtual item (wanted)" class="item wanted" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/angelic-halo/i.914e39e4978523000f1526b1c9a088e4/" id="a_1404" title="Angelic Halo - virtual item (bought)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/7620e03a57c.png" alt="Angelic Halo - virtual item (bought)" class="item bought" />
                        </a></li>
                        <li><a href="https://www.gaiaonline.com/virtual-items/steel-plated-ninja-band/i.3af2df5b93a046b34cc0dfb76354475c/" id="a_2393" title="Steel-plated Ninja Band - virtual item (bought)"><img   src="https://graphics.gaiaonline.com/images/thumbnails/57d8ab73959.png" alt="Steel-plated Ninja Band - virtual item (bought)" class="item bought" />
                        </a></li>
            </ul>
                Items with a '*' are private and only viewable by you.

        </div>
    </div>
    <div id="main">
<div id="about" class="section postcontent">
    <h2>About</h2>
    <ul class="links">
        <li><a href="https://www.gaiaonline.com/gsearch/posthistory/overthink/46362126/">[view posts]</a></li>
        <li><a href="/guilds/index.php?gmode=search&amp;user_id=46362126">[view guilds]</a></li>
        <li><a href="/marketplace/userstore/46362126">[view store]</a></li>
    </ul>

<span style="color: #a1">this is just a sandbox</span><br/>
<br/>
hey! this profile is basically just my sandbox for testing out new theme ideas and messin' around with CSS. i kept it filled with random BBCode bits and information so i can see how everything looks while i'm coding.<br/>
<br/>
if ur also working on a theme and need a dummy profile to test out your own layouts, feel free to use this as a reference! hope it makes your coding life a little easier.<br/>
<br/>
if you do end up using this to test your themes, you can leave a comment here. i'd love to know if it's actually helpful for anyone else plus it helps keep the comment panel filled for testing it too!<br/>
<br/>
Anyways, if you want to direct someone to a resource, you can use a <a href="https://www.gaiaonline.com" rel="nofollow" target="_blank" >URL Link</a> to make the text clickable. <br/>
<br/>
<b>Bold text</b> is great for emphasizing key terms, while <i>italics</i> help with book titles or inner thoughts. If you need to highlight a correction, you can use <span style="text-decoration: underline">underline</span> or show a removal with <span style="text-decoration: line-through">strikethrough</span>.<br/>
<br/>
<div class="quote"><div class="cite">me</div><div class="quoted"><div class="quote"><div class="cite">my friend</div><div class="quoted">This is a Quote tag. It is used to respond to other users or cite external sources while keeping the text contained in a neat box<div class="clear"></div></div></div>A quote inside a quote<div class="clear"></div></div></div><br/>
<br/>
<div class="quote"><div class="cite">Quote:</div><div class="quoted">another quote?<div class="quote"><div class="cite">Quote:</div><div class="quoted">of course!<div class="clear"></div></div></div><div class="clear"></div></div></div><br/>
<br/>
<span style="color: #a1">This is a Codeblock. Use this for sharing CSS codes. Starter code below:</span><br/>
<div class="code" style="word-break:break-all">/* Click me to highlight then Ctrl + C to copy */<br/>
<br/>
/* Reset some default browser styles */<br/>
* {<br/>
    margin: 0;<br/>
    padding: 0;<br/>
    box-sizing: border-box;<br/>
}<br/>
<br/>
/* Hide panels */<br/>
.panel {display: none}<br/>
<br/>
/* Remove #column_1's left spacing*/<br/>
#column_1 {margin-left: 0;}<br/>
<br/>
/* Make equipment or wish list items grid */<br/>
#id_equipment, #id_wishlist {<br/>
  display: grid !important;<br/>
  grid-template-columns: repeat(auto-fill, 40px) !important;<br/>
  place-items: center !important;<br/>
  justify-content: center !important;<br/>
  gap: 8px !important;<br/>
  padding: 16px !important;<br/>
  border: 1px solid #e5e7eb !important;<br/>
  border-radius: 8px !important;<br/>
  position: relative !important;<br/>
  font-size: 0px;<br/>
}<br/>
<br/>
/* Clears Gaia's internal floats that cause misalignment */<br/>
.clear {<br/>
    display: none !important;<br/>
}<br/>
<br/>
/* Remove things */<br/>
.premium_sparkle,  <br/>
#id_wishlist span{<br/>
  display: none !important;<br/>
}<br/>
<br/>
#id_wishlist {font-size: 0px;}<br/>
.</div><br/>
<br/>
For sensitive information or long lists, a Spoiler keeps your post tidy.<br/>
<div class="spoiler-wrapper spoiler-hidden"><div class="spoiler-title"><button type="button" class="spoiler-control spoiler-control-show cta-button-sm gray-button"><span>show spoiler</span></button><button type="button" class="spoiler-control spoiler-control-hide cta-button-sm gray-button"><span>hide spoiler</span></button></div><div class="spoiler">this is a spoiler hidden behind a button.</div></div> <br/>
<br/>
<span style="color: #a3">Visual Layouts</span><br/>
<br/>
<img src="https://rstr.in/1jo6mv5p8ea7ef/gaia/jJt0IYzaUEM" class="user_img" alt="User Image"  /><br/>
<br/>
<br/>
<span style="color: #a4">Multimedia Integration</span><br/>
<br/>
Finally, the YouTube tag allows you to embed videos directly into the post for others to watch without leaving the page.<br/>
<br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?v=dQw4w9WgXcQ&amp;mute=1&amp;autoplay=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    <div class="clear"></div>
</div>
        <div id="friends" class="section">
            <h2>Friends</h2>
            <ul class="links">
                    <li id="find_friends_banner"><a href="https://www.gaiaonline.com/findfriends/">Find Friends</a></li>
                <li>
                &nbsp;</li>
            </ul>
        </div>
            <div id="journal" class="section postcontent">
                <h2>Journal</h2>
                    <ul class="links">
                        <li><a href="/journal/?u=46362126">[view journal]</a></li>
                    </ul>

                    <h3>CSS Snippets</h3>


                    <p>CSS Snippets you can use.</p>
                    <br/>
            </div>


<div id="comments" class="section postcontent">
    <h2>Comments</h2>
    <div class="links">
        <div>
            <ul class="alert_container">
                    <li id="qa_addcomment"><a href="https://www.gaiaonline.com/profiles/overthink/46362126/?mode=addcomment">[add comment]</a></li>
                    <li><a href="https://www.gaiaonline.com/profiles/overthink/46362126/?mode=comments">[view comments]</a></li>
            </ul>
                <ul id="alerts_banner"><li><a href="/account/alerts">Alert Me of Comments</a></li></ul>
            <div class="clear"></div>
        </div>
    </div>
        <p>Viewing <strong>3</strong> of <strong>3</strong> comments.</p>

        <dl>

                <dt class="avatar" data-user-id="46362126">
                    <a href="https://www.gaiaonline.com/profiles/overthink/46362126/"><img   src="https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e_flip.png?t=1773418642_6_11" alt="Overthink" title="Overthink" /></a>
                </dt>
                <dd class="caption" data-user-id="46362126">
                    <div class="message">
                        <p class="date"><a href="/gaia/report.php?r=30&amp;rpost=46362126_3">Report</a> | 06/02/2026 8:16 pm</p>
                        <p><a href="https://www.gaiaonline.com/profiles/overthink/46362126/">Overthink</a></p>
                        <div class="postcontent">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu augue quis orci faucibus congue. Aliquam eget ligula laoreet, ornare ligula id, tempus tellus. Donec pharetra aliquam scelerisque. <br/>
<br/>
Fusce vehicula, arcu ac iaculis accumsan, quam dolor varius mi, eget pulvinar augue nunc ac urna. Proin sed tellus a dolor lobortis interdum sed iaculis ipsum.                        </div>
                        <div class="clear"></div>
                                <ul class="admin">
                                    <li><a href="https://www.gaiaonline.com/profiles/46362126/Overthink/?mode=deletecomment&amp;cid=3"><img   src="https://graphics.gaiaonline.com/images/profiles/v1/classic/delete_btn.gif" alt="Delete" title="Delete" /></a></li>
                                    <li><a href="https://www.gaiaonline.com/profiles/overthink/46362126/?mode=addcomment">Comment Back</a></li>
                                </ul>
                        </div>
                    </dd>

                <dt class="avatar2" data-user-id="46362126">
                    <a href="https://www.gaiaonline.com/profiles/overthink/46362126/"><img   src="https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e_flip.png?t=1773418642_6_11" alt="Overthink" title="Overthink" /></a>
                </dt>
                <dd class="caption2" data-user-id="46362126">
                    <div class="message">
                        <p class="date"><a href="/gaia/report.php?r=30&amp;rpost=46362126_2">Report</a> | 01/15/2026 7:45 pm</p>
                        <p><a href="https://www.gaiaonline.com/profiles/overthink/46362126/">Overthink</a></p>
                        <div class="postcontent">
Test                        </div>
                        <div class="clear"></div>
                                <ul class="admin">
                                    <li><a href="https://www.gaiaonline.com/profiles/46362126/Overthink/?mode=deletecomment&amp;cid=2"><img   src="https://graphics.gaiaonline.com/images/profiles/v1/classic/delete_btn.gif" alt="Delete" title="Delete" /></a></li>
                                    <li><a href="https://www.gaiaonline.com/profiles/overthink/46362126/?mode=addcomment">Comment Back</a></li>
                                </ul>
                        </div>
                    </dd>

                <dt class="avatar" data-user-id="46362126">
                    <a href="https://www.gaiaonline.com/profiles/overthink/46362126/"><img   src="https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e_flip.png?t=1773418642_6_11" alt="Overthink" title="Overthink" /></a>
                </dt>
                <dd class="caption" data-user-id="46362126">
                    <div class="message">
                        <p class="date"><a href="/gaia/report.php?r=30&amp;rpost=46362126_1">Report</a> | 01/15/2026 4:43 pm</p>
                        <p><a href="https://www.gaiaonline.com/profiles/overthink/46362126/">Overthink</a></p>
                        <div class="postcontent">
First theme I made <span class="smilies smilies_heart"> <b>heart</b> </span>                        </div>
                        <div class="clear"></div>
                                <ul class="admin">
                                    <li><a href="https://www.gaiaonline.com/profiles/46362126/Overthink/?mode=deletecomment&amp;cid=1"><img   src="https://graphics.gaiaonline.com/images/profiles/v1/classic/delete_btn.gif" alt="Delete" title="Delete" /></a></li>
                                    <li><a href="https://www.gaiaonline.com/profiles/overthink/46362126/?mode=addcomment">Comment Back</a></li>
                                </ul>
                        </div>
                    </dd>
        </dl>
</div>

    </div>
            <div class="clear"></div>
        </div>
    </div>



</body>`,Rt=`/*! src/css/profiles/v1/header-min.css */
#gaia_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #000;
    margin-bottom: 0;
    z-index: 99999;
}

#gaia_header #header_left {
    background: #000;
    color: #fff;
    float: left;
    width: 80%;
    height: 24px;
}

#gaia_header #header_left img {
    top: 0;
    vertical-align: middle;
}

#gaia_header #header_right {
    background: #000;
    height: 24px;
    color: #fff;
    float: left;
    width: 20%;
    z-index: 9999;
    text-align: right;
    line-height: 23px;
}

#gaia_header #header_right img {
    top: 0;
    vertical-align: middle;
}

#header_right li img {
    padding-right: 4px;
}

#gaia_header ul li {
    display: inline;
}

#gaia_header a {
    color: #ccc !important;
}

.spacer {
    padding-left: 10px;
}

/*! src/css/profiles/v1/common-min.css */
#header {
    margin-top: 25px;
    position: relative;
    border-right: 1px solid #666;
}

#header h1 {
    margin: 0;
    padding: 0;
    text-indent: -5000px;
    height: 150px;
}

#header #avatar {
    position: absolute;
    width: 120px;
    height: 25px;
    z-index: 1;
    left: 5px;
    top: -5px;
}

#header #wordBubble {
    position: absolute;
    width: 120px;
    height: 25px;
    z-index: 2;
    left: 130px;
    top: 0;
}

#site {
    width: 761px;
    margin: 5px;
}

#content {
    background: #FFF;
    padding-bottom: 10px;
    border-right: 1px solid #666;
}

#extendedProfileBody #header h1 {
    background: url(https://graphics.gaiaonline.com/images/pageheader/profile_banner_image.jpg) top right no-repeat;
}

body {
    background-color: #B6CAD5;
    color: #000;
    font-family: "Lucida Grande", Verdana, Arial, Helvetica, sans-serif;
    font-size: 12px;
    scrollbar-face-color: #DEE3E7;
    scrollbar-highlight-color: #FFF;
    scrollbar-shadow-color: #DEE3E7;
    scrollbar-3dlight-color: #D1D7DC;
    scrollbar-arrow-color: #C8DFF9;
    scrollbar-track-color: #EFEFEF;
    scrollbar-darkshadow-color: #98AAB1;
    margin: 0;
    padding: 0;
}

img {
    border: 0;
}

a:link,
a:active,
a:visited {
    color: #8997A1;
}

a:hover {
    text-decoration: underline;
    color: #DD6900;
}

* .yui-hidden {
    display: none;
}

.journal-date {
    font-size: x-small;
}

#allfriends #friendGroup li {
    float: left;
    width: 110px;
    height: 130px;
    text-align: center;
}

#allfriends #friendGroup li img {
    width: 96px;
    height: 96px;
}

#wishlist a {
    text-decoration: none;
}

#friends .links #find_friends_banner {
    background: url(https://graphics.gaiaonline.com/images/gaia_global/body/mygaia/ic_findfriendsm.gif) top left no-repeat;
    padding: 5px 0 10px 30px;
    margin-left: 10px;
    float: right;
    text-align: right;
}

#friends .links #find_friends_banner a {
    font-weight: bold;
    text-decoration: none;
}

#friends .links #find_friends_banner a:hover {
    text-decoration: underline;
}

.forum_userstatus {
    display: none;
}

#avatar_menu {
    background: #FFF;
    position: absolute;
    z-index: 500;
    display: none;
    margin: 0;
    list-style: none;
    border: 1px solid #bbb;
    border-right: 1px solid #777;
    border-bottom: 1px solid #777;
    width: 120px;
    font-size: 13px;
    font-family: Arial;
}

#avatar_menu li {
    margin: 0;
    list-style: none;
}

#avatar_menu a {
    color: #3E53A2;
    display: block;
    font-size: 85%;
    height: 1%;
    padding: 2px;
    margin: 1px;
    text-decoration: none;
    font-weight: normal;
    text-align: left;
}

#avatar_menu a:hover {
    background: #e7edf4;
}

#avatar_menu li.menu_seperator {
    width: 100%;
    height: 1px;
    font-size: 0;
    line-height: 0;
    margin: 3px 0;
    background: #bbb;
}

/*! src/layout/legacy/legacy-min.css */
table,
tr,
td {
    padding: 0;
    margin: 0;
}

.forumgaia,
.forumgaiab,
.forumcom,
.forumcomb,
.forumgame,
.forumgameb,
.forument,
.forumentb,
.forumart,
.forumartb,
.forummisc,
.forummiscb {
    font-size: 10px;
}

.forumgaia2,
.forumcom2,
.forumgame2,
.forument2,
.forumart2,
.forummisc2 {
    font-size: 14px;
}

.forumgaiab,
.forumgaia2,
.forumcomb,
.forumcom2,
.forumgameb,
.forumgame2,
.forumentb,
.forument2,
.forumartb,
.forumart2,
.forummiscb,
.forummisc2 {
    font-weight: bold;
}

.forumgaia,
.forumgaiab,
.forumgaia2 {
    color: #6d87dd;
}

.forumcom,
.forumcomb,
.forumcom2 {
    color: #25b5ab;
}

.forumgame,
.forumgameb,
.forumgame2 {
    color: #7071d2;
}

.forument,
.forumentb,
.forument2 {
    color: #b37ad9;
}

.forumart,
.forumartb,
.forumart2 {
    color: #d475a5;
}

.forummisc,
.forummiscb,
.forummisc2 {
    color: #ffbe93;
}

.forumgaiabg {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_gaia3.gif);
}

.forumgaiabgtl {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_gaia_tl3.gif);
}

.forumcommuntiybg {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_gaia_community.gif);
}

.forumcombgtl {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_gaia_community_tl3.gif);
}

.forumgamebg {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_gaming3.gif);
}

.forumgamebgtl {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_gaming_tl3.gif);
}

.forumentbg {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_ent3.gif);
}

.forumentbgtl {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_ent_tl3.gif);
}

.forumartbg {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_art3.gif);
}

.forumartbgtl {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_art_tl3.gif);
}

.forummiscbg {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_misc3.gif);
}

.forummiscbgtl {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_misc_tl3.gif);
}

.forumtitle {
    background: url(https://graphics.gaiaonline.com/images/template/bg/forum_gaia.gif) no-repeat;
}

#userTextAdsTopSpot {
    background: url(https://graphics.gaiaonline.com/images/template/bg/ad_bg_1a_blue.gif) top left repeat;
    font-size: 10px;
    padding: 5px;
}

#userTextAdsTopSpot a {
    text-decoration: none;
    color: #000;
}

td.row1 {
    background-color: #FFF;
}

td.row2 {
    background-color: #FFF;
}

td.row3 {
    background-color: #FFF;
}

td.row4 {
    background-color: #FEDAFF;
}

td.row_event {
    background-color: #F9C9E0;
}

td.rowpic {
    background-image: url(https://graphics.gaiaonline.com/images/template/cellpic-r.gif);
    background-repeat: repeat-y;
}

td.rowpic1 {
    background-image: url(https://graphics.gaiaonline.com/images/template/cellpic-l.gif);
    background-repeat: repeat-n;
    height: 28px;
}

th {
    color: #542F00;
    font-size: 11px;
    font-weight: bold;
    background-color: #C8DFF9;
    height: 25px;
    background-image: url(https://graphics.gaiaonline.com/images/template/cellpic3.gif);
}

td.cat,
td.catHead,
td.catSides,
td.catLeft,
td.catRight,
td.catBottom {
    background: #D1D7DC url(https://graphics.gaiaonline.com/images/template/cellpic1.gif);
    border: 1px solid #FFF;
    height: 30px;
}

td.cat,
td.catHead,
td.catBottom {
    height: 29px;
    border: 0;
}

th.thHead,
th.thSides,
th.thTop,
th.thLeft,
th.thRight,
th.thBottom,
th.thCornerL,
th.thCornerR {
    font-weight: bold;
    border: 1px solid #FFF;
    height: 20px;
}

td.row3Right,
td.spaceRow {
    background: #D1D7DC;
    border: 1px solid #FFF;
}

th.thHead,
td.catHead {
    font-size: 12px;
    border: 0;
}

th.thSides,
td.catSides,
td.spaceRow,
th.thRight,
td.catRight,
td.row3Right,
th.thLeft,
td.catLeft,
th.thBottom,
td.catBottom,
th.thTop,
th.thCornerL,
th.thCornerR {
    border: 0;
}

.code {
    font-family: Courier, 'Courier New', sans-serif;
    font-size: 11px;
    color: #060;
    background: #FAFAFA;
    border: 1px solid #D1D7DC;
}

td .name {
    font-size: 10px;
}

.postbody {
    font-family: 'Lucida Grande', LucidaGrande, Lucida, Verdana, Helvetica, Arial, sans-serif;
    font-size: 12px;
    color: #444;
}

.postcontent {
    text-align: center;
}

.postcontent .genmed {
    display: block;
    padding-top: 5px;
    color: #355080;
}

#content div.postcontent a:visited {
    color: #777;
}

.postcontent table {
    margin: 0 auto;
    text-align: left;
}

.postcontent table td {
    text-align: left;
}

.postcontent ul li,
.postcontent ol li {
    margin: 0 0 0 20px;
    margin: 0 0 0 25px;
}

.postbody {
    display: block;
    text-align: left;
}

.gaiaSig {
    text-align: center;
}

.gaiaSig span {
    display: block;
    width: 500px;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
}

.quote {
    font-family: 'Lucida Grande', LucidaGrande, Lucida, Verdana, Helvetica, Arial, sans-serif;
    font-size: 11px;
    color: #444;
    line-height: 125%;
    background: #FAFAFA;
    border: 1px solid #D1D7DC;
    padding: 5px;
}

.helpline {
    background-color: #DEE3E7;
    border-style: none;
}

.bodyline {
    border: 0 #3982f7 solid;
}

td.smiley {
    padding: 3px;
}

.maintitle,
.glowTitle {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    text-align: left;
}

.postdetails {
    font-size: 10px;
}

.topictitle {
    text-decoration: none;
}

.ie6-discontinued-wrapper {
    padding: 10px 15px 0 15px;
}

input.guild_modify,
textarea.guild_modify {
    width: 34.25em;
    border: 1px solid #a9a9a9;
}

textarea.guild_requestjoin {
    width: 34.25em;
    height: 200px;
    border: 2px solid #a9a9a9;
    margin-bottom: 5px;
}

input.tags {
    width: 12.25em;
    border: 1px solid #a9a9a9;
    margin-bottom: 1px;
}

/*! src/css/profiles/v1/smilies-min.css */
div.postcontent {
    text-align: left;
}

div.postcontent .quote {
    padding-left: 20px;
    padding-top: 1em;
    padding-bottom: 1em;
    clear: both;
}

div.postcontent .quote .cite {
    font-weight: bold;
    font-size: 80%;
}

div.postcontent .quote .quoted {
    background: #efefef;
    border: 1px solid #ccc;
    padding: 10px;
}

div.postcontent .clear {
    clear: both;
}

div.postcontent .code {
    border: 1px solid #006;
    background: #ccc;
    font-family: Courier, "Courier New", monospace;
}

div.postcontent ul {
    margin-left: 15px;
}

div.postcontent span.smilies {
    padding-left: 2px;
}

div.postcontent span.smilies b {
    visibility: hidden;
    font-size: 1px;
    padding-right: 12px;
}

div.postcontent span.smilies_biggrin {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_biggrin.gif) left top no-repeat;
}

div.postcontent span.smilies_biggrin {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_biggrin.gif) left top no-repeat;
}

div.postcontent span.smilies_biggrin {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_biggrin.gif) left top no-repeat;
}

div.postcontent span.smilies_smile {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_smile.gif) left top no-repeat;
}

div.postcontent span.smilies_smile {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_smile.gif) left top no-repeat;
}

div.postcontent span.smilies_smile {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_smile.gif) left top no-repeat;
}

div.postcontent span.smilies_redface {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_redface.gif) left top no-repeat;
}

div.postcontent span.smilies_crying {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_crying.gif) left top no-repeat;
}

div.postcontent span.smilies_stare {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_stare.gif) left top no-repeat;
}

div.postcontent span.smilies_xd {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_xd.gif) left top no-repeat;
}

div.postcontent span.smilies_3nodding {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_3nodding.gif) left top no-repeat;
}

div.postcontent span.smilies_blaugh {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_blaugh.gif) left top no-repeat;
}

div.postcontent span.smilies_gonk {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_gonk.gif) left top no-repeat;
}

div.postcontent span.smilies_scream {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_scream.gif) left top no-repeat;
}

div.postcontent span.smilies_stressed {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_stressed.gif) left top no-repeat;
}

div.postcontent span.smilies_sweatdrop {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_sweatdrop.gif) left top no-repeat;
}

div.postcontent span.smilies_heart {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_heart.gif) left top no-repeat;
}

div.postcontent span.smilies_domokun {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_domokun.gif) left top no-repeat;
}

div.postcontent span.smilies_xp {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_xp.gif) left top no-repeat;
}

div.postcontent span.smilies_whee {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_whee.gif) left top no-repeat;
}

div.postcontent span.smilies_wink {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_wink.gif) left top no-repeat;
}

div.postcontent span.smilies_wink {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_wink.gif) left top no-repeat;
}

div.postcontent span.smilies_wink {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_wink.gif) left top no-repeat;
}

div.postcontent span.smilies_sad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_sad.gif) left top no-repeat;
}

div.postcontent span.smilies_sad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_sad.gif) left top no-repeat;
}

div.postcontent span.smilies_sad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_sad.gif) left top no-repeat;
}

div.postcontent span.smilies_surprised {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_surprised.gif) left top no-repeat;
}

div.postcontent span.smilies_surprised {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_surprised.gif) left top no-repeat;
}

div.postcontent span.smilies_surprised {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_surprised.gif) left top no-repeat;
}

div.postcontent span.smilies_eek {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_eek.gif) left top no-repeat;
}

div.postcontent span.smilies_confused {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_confused.gif) left top no-repeat;
}

div.postcontent span.smilies_confused {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_confused.gif) left top no-repeat;
}

div.postcontent span.smilies_confused {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_confused.gif) left top no-repeat;
}

div.postcontent span.smilies_cool {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cool.gif) left top no-repeat;
}

div.postcontent span.smilies_cool {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cool.gif) left top no-repeat;
}

div.postcontent span.smilies_cool {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cool.gif) left top no-repeat;
}

div.postcontent span.smilies_lol {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_lol.gif) left top no-repeat;
}

div.postcontent span.smilies_mad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_mad.gif) left top no-repeat;
}

div.postcontent span.smilies_mad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_mad.gif) left top no-repeat;
}

div.postcontent span.smilies_mad {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_mad.gif) left top no-repeat;
}

div.postcontent span.smilies_razz {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_razz.gif) left top no-repeat;
}

div.postcontent span.smilies_razz {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_razz.gif) left top no-repeat;
}

div.postcontent span.smilies_razz {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_razz.gif) left top no-repeat;
}

div.postcontent span.smilies_cry {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cry.gif) left top no-repeat;
}

div.postcontent span.smilies_evil {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_evil.gif) left top no-repeat;
}

div.postcontent span.smilies_twisted {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_twisted.gif) left top no-repeat;
}

div.postcontent span.smilies_rolleyes {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_rolleyes.gif) left top no-repeat;
}

div.postcontent span.smilies_exclaim {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_exclaim.gif) left top no-repeat;
}

div.postcontent span.smilies_question {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_question.gif) left top no-repeat;
}

div.postcontent span.smilies_idea {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_idea.gif) left top no-repeat;
}

div.postcontent span.smilies_arrow {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_arrow.gif) left top no-repeat;
}

div.postcontent span.smilies_neutral {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_neutral.gif) left top no-repeat;
}

div.postcontent span.smilies_neutral {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_neutral.gif) left top no-repeat;
}

div.postcontent span.smilies_neutral {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_neutral.gif) left top no-repeat;
}

div.postcontent span.smilies_mrgreen {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_mrgreen.gif) left top no-repeat;
}

div.postcontent span.smilies_ninja {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_ninja.gif) left top no-repeat;
}

div.postcontent span.smilies_4laugh {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_4laugh.gif) left top no-repeat;
}

div.postcontent span.smilies_rofl {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_rofl.gif) left top no-repeat;
}

div.postcontent span.smilies_pirate {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_pirate.gif) left top no-repeat;
}

div.postcontent span.smilies_talk2hand {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_talk2hand.gif) left top no-repeat;
}

div.postcontent span.smilies_burning_eyes {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_burning.gif) left top no-repeat;
}

div.postcontent span.smilies_cheese_whine {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_cheese.gif) left top no-repeat;
}

div.postcontent span.smilies_dramallama {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_dramallama.gif) left top no-repeat;
}

div.postcontent span.smilies_wahmbulance {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_wahmbulance.gif) left top no-repeat;
}

div.postcontent span.smilies_emo {
    background: url(https://graphics.gaiaonline.com/images/common/smilies/icon_emo.gif) left top no-repeat;
}

/*! src/css/profiles/v1/alert-min.css */
#alerts_banner {
    padding-left: 20px;
    height: 30px;
    margin-left: 10px;
    float: right;
    background: url(https://graphics.gaiaonline.com/images/gaia_global/body/mygaia/ic_alerts_17x22.gif) top left no-repeat;
    text-align: right;
}

#alerts_banner a {
    font-weight: bold;
    text-decoration: none;
}

#alerts_banner a:hover {
    text-decoration: underline;
}

.alert_container {
    float: left;
}

/*! src/yui/container/assets/container-min.css */
.yui-overlay,
.yui-panel-container {
    visibility: hidden;
    position: absolute;
    z-index: 2;
}

.yui-tt {
    visibility: hidden;
    position: absolute;
    color: #333;
    background-color: #FDFFB4;
    font-family: arial, helvetica, verdana, sans-serif;
    padding: 2px;
    border: 1px solid #FCC90D;
    font: 100% sans-serif;
    width: auto;
}

.yui-tt-shadow {
    display: none;
}

* html body.masked select {
    visibility: hidden;
}

* html div.yui-panel-container select {
    visibility: inherit;
}

* html div.drag select {
    visibility: hidden;
}

* html div.hide-select select {
    visibility: hidden;
}

.mask {
    z-index: 1;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    -moz-opacity: .5;
    opacity: .50;
    filter: alpha(opacity=50);
    background-color: #CCC;
}

.hide-scrollbars,
.hide-scrollbars * {
    overflow: hidden;
}

.hide-scrollbars select {
    display: none;
}

.show-scrollbars {
    overflow: auto;
}

.yui-panel-container.show-scrollbars {
    overflow: visible;
}

.yui-panel-container.show-scrollbars .underlay {
    overflow: auto;
}

.yui-panel-container .underlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.yui-panel-container.matte {
    padding: 3px;
    background-color: #fff;
}

.yui-panel-container.shadow .underlay {
    top: 3px;
    bottom: -3px;
    right: -3px;
    left: 3px;
    background-color: #000;
    opacity: .12;
    filter: alpha(opacity=12);
}

.yui-panel-container.shadow .underlay.yui-force-redraw {
    padding-bottom: 1px;
}

.yui-effect-fade .underlay {
    display: none;
}

.yui-panel {
    visibility: hidden;
    border-collapse: separate;
    position: relative;
    left: 0;
    top: 0;
    font: 1em Arial;
    background-color: #FFF;
    border: 1px solid #000;
    z-index: 1;
    overflow: hidden;
}

.yui-panel .hd {
    background-color: #3d77cb;
    color: #FFF;
    font-size: 100%;
    line-height: 100%;
    border: 1px solid #FFF;
    border-bottom: 1px solid #000;
    font-weight: bold;
    padding: 4px;
    white-space: nowrap;
}

.yui-panel .bd {
    overflow: hidden;
    padding: 4px;
}

.yui-panel .bd p {
    margin: 0 0 1em;
}

.yui-panel .container-close {
    position: absolute;
    top: 5px;
    right: 4px;
    z-index: 6;
    height: 12px;
    width: 12px;
    margin: 0;
    padding: 0;
    background: url(https://graphics.gaiaonline.com/images/template/profile/profile_close_btn.gif) no-repeat;
    cursor: pointer;
    visibility: inherit;
    text-indent: -10000em;
    overflow: hidden;
    text-decoration: none;
}

.yui-panel .ft {
    padding: 4px;
    overflow: hidden;
}

.yui-simple-dialog .bd .yui-icon {
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    float: left;
}

.yui-simple-dialog .bd span.blckicon {
    background: url("blck16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.alrticon {
    background: url("alrt16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.hlpicon {
    background: url("hlp16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.infoicon {
    background: url("info16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.warnicon {
    background: url("warn16_1.gif") no-repeat;
}

.yui-simple-dialog .bd span.tipicon {
    background: url("tip16_1.gif") no-repeat;
}

.yui-dialog .ft,
.yui-simple-dialog .ft {
    padding-bottom: 5px;
    padding-right: 5px;
    text-align: right;
}

.yui-dialog form,
.yui-simple-dialog form {
    margin: 0;
}

.button-group button {
    font: 100 76% verdana;
    text-decoration: none;
    background-color: #E4E4E4;
    color: #333;
    cursor: hand;
    vertical-align: middle;
    border: 2px solid #797979;
    border-top-color: #FFF;
    border-left-color: #FFF;
    margin: 2px;
    padding: 2px;
}

.button-group button.default {
    font-weight: bold;
}

.button-group button:hover,
.button-group button.hover {
    border: 2px solid #90A029;
    background-color: #EBF09E;
    border-top-color: #FFF;
    border-left-color: #FFF;
}

.button-group button:active {
    border: 2px solid #E4E4E4;
    background-color: #BBB;
    border-top-color: #333;
    border-left-color: #333;
}

.yui-override-padding {
    padding: 0 !important;
}

* {
    margin: 0;
    padding: 0;
}

ul li {
    list-style-type: none;
}

dl dt {
    font-weight: bold;
}

#site {
    width: 760px;
    position: relative;
}

/* CONTENT */
#content {
    padding: 10px 0 10px 0;
}

#content #sidebar {
    position: absolute;
    width: 230px;
    left: 10px;
}

#content #main {
    margin-left: 230px;
    min-height: 500px;
    height: 500px;
    border-left: 2px solid #D8E9F3;
}

#content>#main {
    height: auto;
}

/* SECTION */
.section {
    padding: 0 10px 10px 10px;
    font-size: 12px;
}

.section h2 {
    font-size: 15px;
    margin: 0 -10px 0 -10px;
    height: 25px;
    margin-bottom: 10px;
    line-height: 25px;
    text-indent: -5000px;
    /* PHARK */
}

.section .clear {
    clear: both;
}

.section .head {
    width: 48px;
    height: 48px;
}

.section .torso {
    width: 96px;
    height: 96px;
}

.section .body {
    width: 120px;
    height: 150px;
}

.section .items li {
    display: inline;
}

.section .items li img {
    width: 30px;
    height: 30px;
}

.section .online {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/status_online.gif) top left no-repeat;
}

.section .offline {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/status_offline.gif) top left no-repeat;
}

.section .hidden {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/status_hidden.gif) top left no-repeat;
}

.section .links {
    margin-bottom: 10px;
}

.section .links li {
    display: inline;
}

.section .date {
    text-align: right;
    font-size: 10px;
    font-weight: normal;
    font-style: italic;
    margin: 0 0 3px 3px;
}

/* CAPTION */
.caption {
    border: 2px solid #6F7074;
    background: #FFF;
}

.caption2 {
    border: 2px solid #6F7074;
    background: #FFF;
}

.caption:before {
    display: block;
    margin: -2px -2px -2px -2px;
    content: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_tl.gif);
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_tr.gif) top right no-repeat;
    line-height: .1;
}

.caption:after {
    display: block;
    margin: -2px -2px -2px -2px;
    content: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_bl.gif);
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_br.gif) bottom right no-repeat;
    line-height: .1;
}

.caption2:before {
    display: block;
    margin: -2px -2px -2px -2px;
    content: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_tl.gif);
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_tr.gif) top right no-repeat;
    line-height: .1;
}

.caption2:after {
    display: block;
    margin: -2px -2px -2px -2px;
    content: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_bl.gif);
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_br.gif) bottom right no-repeat;
    line-height: .1;
}

.caption .message {
    position: relative;
    left: -22px;
    padding: 0 0 0 32px;
    min-height: 45px;
    margin: 0 -12px 0 0;
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_ml.gif) top left no-repeat;
    font-size: 13px;
    font-weight: normal;
    height: 45px;
}

.caption2 .message {
    position: relative;
    right: -22px;
    padding: 0 32px 0 0;
    min-height: 45px;
    margin: 0 0 0 -12px;
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/caption_mr.gif) top right no-repeat;
    font-size: 13px;
    font-weight: normal;
    height: 45px;
}

.caption>.message {
    height: auto;
}

.caption2>.message {
    height: auto;
}

/* ACCOUNT */
form {
    margin: 0 150px;
}

textarea {
    width: 100%;
    height: 100px;
}

.textfield {
    width: 100%;
}

label {
    font-weight: bold;
}

fieldset {
    margin-bottom: 10px;
}

#account ul li {
    display: inline;
}

/* Common Friends */
#commonFriends p {
    font-weight: bold;
}

#commonFriends ul {
    font-size: 10px;
    margin-bottom: 10px;
}

#commonFriends ul li {
    display: inline;
}

/* PROFILE BAR */
#bar {
    display: block;
    height: 22px;
    margin-left: 12px;
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/action_bar_frontcap.gif) top left no-repeat
}

#bar li {
    float: left;
}

#bar #onlineButton {
    width: 60px;
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_online.gif);
    text-indent: -5000px;
    height: 22px;
}

#bar #offlineButton {
    width: 60px;
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_offline.gif);
    text-indent: -5000px;
    height: 22px;
}

#bar #hiddenButton {
    width: 60px;
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_hidden.gif);
    text-indent: -5000px;
    height: 22px;
}

#bar #addButton {
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_addfriend.gif);
}

#bar #msgButton {
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_pm.gif);
}

#bar #tradeButton {
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_trade.gif);
}

#bar #ignoreButton {
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_ignore.gif);
}

#bar a {
    display: block;
    height: 0;
    padding-top: 22px;
    color: #000;
    overflow: hidden;
}

* html #bar a:link,
* html #bar a:visited {
    height: 22px;
    he\\ight: 0;
}

/* Add hover images here:-) */
#bar #addButton a {
    width: 33px;
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_addfriend.gif) -22px -90px no-repeat;
}

#bar #msgButton a {
    width: 29px;
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_pm.gif) -22px -90px no-repeat;
}

#bar #tradeButton a {
    width: 28px;
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_trade.gif) -22px -90px no-repeat;
}

#bar #ignoreButton a {
    width: 34px;
    background: transparent url(https://graphics.gaiaonline.com/images/profiles/v1/classic/bar_btn_ignore.gif) -22px -90px no-repeat;
}

#bar #addButton a:hover {
    background-position: 0 0;
    z-index: 50;
}

#bar #msgButton a:hover {
    background-position: 0 0;
    z-index: 50;
}

#bar #tradeButton a:hover {
    background-position: 0 0;
    z-index: 50;
}

#bar #ignoreButton a:hover {
    background-position: 0 0;
    z-index: 50;
}

* html #bar a:hover {
    height: 22px;
    height: 0;
}

/* PROFILE */
#profile {
    background: #FFF;
    position: relative;
}

#profile h2 {
    background: #185BC2;
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    /* UN-PHARK */
    text-indent: 0;
}

#profile .avatar {
    position: relative;
}

#profile .caption {
    position: absolute;
    top: 70px;
    left: 110px;
    width: 105px;
}

#profile .status {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/action_bar_frontcap.gif) top left no-repeat;
    margin-left: 10px;
}

/* DETAILS */
#details {
    background: #FFF url(https://graphics.gaiaonline.com/images/profiles/v1/classic/details_header_tile.gif) top left repeat-x;
}

#details h2 {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/details_header.gif) top left no-repeat;
}

#details #info {
    width: 97px;
}

#details #stats {
    float: right;
    width: 100px;
    margin: 0 0 10px 10px;
}

/* WISHLIST */
#wishlist {
    background: #FFF url(https://graphics.gaiaonline.com/images/profiles/v1/classic/wishlist_header_tile.gif) top left repeat-x;
}

#wishlist h2 {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/wishlist_header.gif) top left no-repeat;
}

#wishlist .questing {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/wishlist_questing.gif) top right no-repeat;
}

#wishlist .bought {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/wishlist_bought.gif) top right no-repeat;
}

#wishlist .donated {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/wishlist_donated.gif) top right no-repeat;
}

/* ABOUT */
#about {
    background: #FFF url(https://graphics.gaiaonline.com/images/profiles/v1/classic/about_header_tile.gif) top left repeat-x;
}

#about h2 {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/about_header.gif) top left no-repeat;
}

/* FRIENDS */
#friends {
    background: #FFF url(https://graphics.gaiaonline.com/images/profiles/v1/classic/friends_header_tile.gif) top left repeat-x;
}

#friends h2 {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/friends_header.gif) top left no-repeat;
}

#friends #friendGroup {
    margin-top: 10px;
}

#friends #friendGroup li {
    float: left;
    width: 110px;
    height: 130px;
    text-align: center;
    border-right: 2px solid #D8E9F3;
}

#friends #friendGroup li img {
    width: 96px;
    height: 96px;
}

/* JOURNAL */
#journal {
    background: #FFF url(https://graphics.gaiaonline.com/images/profiles/v1/classic/journal_header_tile.gif) top left repeat-x;
}

#journal h2 {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/journal_header.gif) top left no-repeat;
}

/* MULTIMEDIA */
#multimedia {
    background: #FFF url(https://graphics.gaiaonline.com/images/profiles/v1/classic/multimedia_header_tile.gif) top left repeat-x;
}

#multimedia h2 {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/multimedia_header.gif) top left no-repeat;
}

/* COMMENTS */
#comments {
    background: #FFF url(https://graphics.gaiaonline.com/images/profiles/v1/classic/comments_header_tile.gif) top left repeat-x;
}

#comments h2 {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/comments_header.gif) top left no-repeat;
}

#comments dl {
    padding-bottom: 90px;
}

#comments dl dt {
    position: relative;
    padding-top: 10px;
}

#comments dl dt.avatar img {
    position: absolute;
    left: 0;
}

#comments dl dt.avatar2 div {
    text-align: right;
}

#comments dl dt.avatar2 img {
    position: absolute;
    right: 0;
    width: 120px;
}

#comments dl dd {
    margin: 0 120px 0 100px;
}

#comments .delete {
    margin-top: 10px;
    text-align: right;
}

#comments #pagination li {
    display: inline;
}

#comments .admin li {
    text-align: right;
}

#comments form {
    margin: 0px;
}

#comments fieldset {
    padding: 10px;
}

/* SIGNATURE */
#signature {
    background: #FFF url(https://graphics.gaiaonline.com/images/profiles/v1/classic/signature_header_tile.gif) top left repeat-x;
}

#signature h2 {
    background: url(https://graphics.gaiaonline.com/images/profiles/v1/classic/signature_header.gif) top left no-repeat;
}

#signature p {
    text-align: center;
}`,zt=1920,Bt=1080,Vt=`https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e_flip.png`,Ht=(0,Y.memo)(function({isMaximized:e}){let{version:t,isSelectionMode:n,rootCss:r}=Q(),{cssCode:i}=xt(),{avatarUrl:a}=Z(),o=(0,Y.useRef)(null),s=(0,Y.useRef)(null),c=(0,Y.useMemo)(()=>`${r}\n${i}`,[r,i]),l=(0,Y.useMemo)(()=>t===`v1`?Lt:Ft,[t]),u=(0,Y.useMemo)(()=>t===`v1`?Rt:It,[t]),d=a||Vt,f=(0,Y.useMemo)(()=>`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <style id="base-styles">${u}</style>
      <style id="user-overrides"></style>
      <style id="avatar-styles"></style>
      <style>
        .highlight-hover { outline: 2px solid #94a3b8 !important; cursor: crosshair !important; }
        .highlight-selected { outline: 2px solid #3b82f6 !important; }
        #id_details img { opacity: 0; transition: opacity 0.15s ease-in; }
        .avatar-ready { opacity: 1 !important; }
      </style>
    </head>
    <body>
      <div id="base-layer">${l}</div>
      <script>
        ${Pt}
        const userStyleTag = document.getElementById('user-overrides');
        const avatarStyleTag = document.getElementById('avatar-styles');
        let lastSelected = null;
        let lastHovered = null;

        window.addEventListener('message', (e) => {
          if (e.data.type === 'update-css' && userStyleTag) {
            userStyleTag.textContent = e.data.css;
          }
          if (e.data.type === 'update-avatar') {
            const detailsPanel = document.getElementById('id_details');
            if (detailsPanel && e.data.avatarUrl) {
              const avatarImg = detailsPanel.querySelector('img');
              if (avatarImg) {
                const loader = new Image();
                loader.onload = () => {
                  avatarImg.src = e.data.avatarUrl;
                  avatarImg.classList.add('avatar-ready');
                };
                loader.src = e.data.avatarUrl;
              }
            }
            if (avatarStyleTag && e.data.avatarUrl) {
              avatarStyleTag.textContent = ':root { --user-avatar-url: url("' + e.data.avatarUrl + '"); } [data-avatar] { content: var(--user-avatar-url) !important; }';
            }
          }
        });

        window.parent.postMessage({ type: 'iframe-ready' }, '*');

        document.addEventListener('mouseover', (e) => {
          if (!window.parent.isSelectionModeActive) return;
          if (lastHovered) lastHovered.classList.remove('highlight-hover');
          lastHovered = e.target;
          lastHovered.classList.add('highlight-hover');
        });

        document.addEventListener('mouseout', (e) => {
          if (lastHovered) lastHovered.classList.remove('highlight-hover');
        });

        document.addEventListener('click', (e) => {
          if (!window.parent.isSelectionModeActive) return;
          e.preventDefault();
          e.stopPropagation();
          const target = e.target;
          if (lastSelected) lastSelected.classList.remove('highlight-selected');
          target.classList.add('highlight-selected');
          lastSelected = target;

          const path = [];
          let el = target;
          while (el && el !== document.body && el.id !== 'base-layer') {
            let selector = '';
            if (el.id) {
              selector = '#' + el.id;
            } else if (el.className && typeof el.className === 'string') {
              const classes = el.className.split(' ').filter(c => !c.includes('highlight'));
              if (classes.length > 0) selector = '.' + classes.join('.');
            }
            if (selector) path.unshift(selector);
            el = el.parentElement;
          }
          
          let selectorString = path.length > 0 ? path.join(' ') : 'body';
          if (selectorString === 'body') selectorString = 'html, body';
          
          window.parent.postMessage({ type: 'element-selected', selector: selectorString }, '*');
        });
      <\/script>
    </body>
  </html>
`,[l,u]);return(0,Y.useEffect)(()=>{window.isSelectionModeActive=n},[n]),(0,Y.useEffect)(()=>{let e=e=>{e.data.type===`iframe-ready`&&s.current?.contentWindow&&(s.current.contentWindow.postMessage({type:`update-css`,css:c},`*`),s.current.contentWindow.postMessage({type:`update-avatar`,avatarUrl:d},`*`))};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},[c,d]),(0,Y.useEffect)(()=>{s.current?.contentWindow&&(s.current.contentWindow.postMessage({type:`update-css`,css:c},`*`),s.current.contentWindow.postMessage({type:`update-avatar`,avatarUrl:d},`*`))},[c,d,t]),(0,Y.useEffect)(()=>{let t=new ResizeObserver(()=>{let t=o.current,n=s.current;if(!t||!n)return;if(e){n.style.width=`100%`,n.style.height=`100%`,n.style.transform=`none`;return}let r=Math.min(1,t.clientWidth/zt,t.clientHeight/Bt);n.style.width=`${zt}px`,n.style.height=`${Bt}px`,n.style.transform=`scale(${r})`,n.style.transformOrigin=`center center`});return o.current&&t.observe(o.current),()=>t.disconnect()},[e]),(0,X.jsx)(`div`,{ref:o,className:`w-full h-full flex items-center justify-center overflow-hidden bg-transparent`,children:(0,X.jsx)(`iframe`,{ref:s,title:`Gaia Preview`,srcDoc:f,sandbox:`allow-scripts allow-same-origin`,className:`block border-none shrink-0`})})});function Ut({className:e,size:t=`default`,...n}){return(0,X.jsx)(b,{"data-slot":`avatar`,"data-size":t,className:M(`group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten`,e),...n})}function Wt({className:e,...t}){return(0,X.jsx)(T,{"data-slot":`avatar-image`,className:M(`aspect-square size-full rounded-full object-cover`,e),...t})}function Gt({className:e,...t}){return(0,X.jsx)(re,{"data-slot":`avatar-fallback`,className:M(`flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs`,e),...t})}var Kt=(0,Y.memo)(function({onOpenProfile:e}){let t=Z(e=>e.username),n=Z(e=>e.userId),r=Z(e=>e.avatarUrl),i=t||`Guest`,a=n||`No ID`,o=t?.[0]?.toUpperCase()||`U`;return(0,X.jsxs)(J,{children:[(0,X.jsx)(q,{children:(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-8 rounded-full`,"aria-label":`User menu`,children:(0,X.jsx)(Ut,{className:`relative size-8 overflow-hidden`,children:r?(0,X.jsx)(Wt,{src:r,alt:i,loading:`lazy`,className:`h-[110px] w-20 max-w-none -ml-[18px] -mt-6`}):(0,X.jsx)(Gt,{children:o})})})}),(0,X.jsxs)(K,{align:`end`,className:`w-56`,children:[(0,X.jsx)(rt,{children:(0,X.jsxs)(tt,{className:`flex flex-col`,children:[(0,X.jsx)(`span`,{className:`text-sm font-medium`,children:i}),(0,X.jsx)(`span`,{className:`text-xs font-normal text-muted-foreground`,children:a})]})}),(0,X.jsx)(nt,{}),(0,X.jsxs)(rt,{children:[(0,X.jsx)(G,{onClick:e,children:t?`Edit Local Profile`:`Setup Local Profile`}),(0,X.jsx)(G,{children:`Settings`})]})]})]})});function qt(e,t={}){let[n,r]=(0,Y.useState)(!1),[i,a]=(0,Y.useState)(null),o=(0,Y.useRef)(t);(0,Y.useEffect)(()=>{o.current=t},[t]);let s=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled);(0,Y.useEffect)(()=>{let e=()=>{let e=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement,t=!!e;r(t),a(e),t?o.current.onEnter?.():o.current.onExit?.()},t=()=>{o.current.onError?.(Error(`Failed to enter fullscreen mode`))};return document.addEventListener(`fullscreenchange`,e),document.addEventListener(`webkitfullscreenchange`,e),document.addEventListener(`mozfullscreenchange`,e),document.addEventListener(`MSFullscreenChange`,e),document.addEventListener(`fullscreenerror`,t),document.addEventListener(`webkitfullscreenerror`,t),document.addEventListener(`mozfullscreenerror`,t),document.addEventListener(`MSFullscreenError`,t),e(),()=>{document.removeEventListener(`fullscreenchange`,e),document.removeEventListener(`webkitfullscreenchange`,e),document.removeEventListener(`mozfullscreenchange`,e),document.removeEventListener(`MSFullscreenChange`,e),document.removeEventListener(`fullscreenerror`,t),document.removeEventListener(`webkitfullscreenerror`,t),document.removeEventListener(`mozfullscreenerror`,t),document.removeEventListener(`MSFullscreenError`,t)}},[]);let c=(0,Y.useCallback)(async t=>{if(!s)throw Error(`Fullscreen API is not supported`);let n=t||e?.current||document.documentElement;if(!n)throw Error(`No element provided for fullscreen`);try{if(n.requestFullscreen)await n.requestFullscreen();else if(n.webkitRequestFullscreen)await n.webkitRequestFullscreen();else if(n.mozRequestFullScreen)await n.mozRequestFullScreen();else if(n.msRequestFullscreen)await n.msRequestFullscreen();else throw Error(`Fullscreen API is not supported`)}catch(e){throw o.current.onError?.(e),e}},[s,e]),l=(0,Y.useCallback)(async()=>{if(!s)throw Error(`Fullscreen API is not supported`);try{if(document.exitFullscreen)await document.exitFullscreen();else if(document.webkitExitFullscreen)await document.webkitExitFullscreen();else if(document.mozCancelFullScreen)await document.mozCancelFullScreen();else if(document.msExitFullscreen)await document.msExitFullscreen();else throw Error(`Fullscreen API is not supported`)}catch(e){throw o.current.onError?.(e),e}},[s]);return{isFullscreen:n,isSupported:s,enter:c,exit:l,toggle:(0,Y.useCallback)(async e=>{n?await l():await c(e)},[n,c,l]),element:i}}function Jt(){let[e,t]=(0,Y.useState)(!1),{isFullscreen:n,toggle:r}=qt((0,Y.useRef)(null));return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(`header`,{className:`h-14 shrink-0 border-b border-border flex items-center justify-between px-4 bg-background/50 backdrop-blur-sm`,children:[(0,X.jsx)(`h1`,{className:`font-medium text-sm`,children:`Studio Workspace`}),(0,X.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,X.jsx)(`button`,{onClick:()=>r(),className:`p-2 hover:bg-accent rounded-md transition-colors`,"aria-label":`Toggle fullscreen`,children:n?(0,X.jsx)(ye,{className:`w-4 h-4`}):(0,X.jsx)(xe,{className:`w-4 h-4`})}),(0,X.jsx)(Kt,{onOpenProfile:()=>t(!0)})]})]}),(0,X.jsx)(ot,{isOpen:e,onClose:()=>t(!1)})]})}function Yt({isMaximized:e,setIsMaximized:t}){let{isCodeOpen:n,setIsCodeOpen:r,isSelectionMode:i,setIsSelectionMode:a}=Q();return(0,X.jsxs)(`div`,{className:`absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-background/80 backdrop-blur-md p-1 rounded-lg border border-border`,children:[(0,X.jsxs)(B,{variant:i?`secondary`:`ghost`,size:`sm`,className:`gap-2 px-3`,onClick:()=>a(!i),children:[(0,X.jsx)(Ee,{className:`size-4`}),(0,X.jsx)(`span`,{children:`Select Element`})]}),(0,X.jsxs)(B,{variant:n?`secondary`:`ghost`,size:`sm`,className:`gap-2 px-3`,onClick:()=>r(!n),children:[(0,X.jsx)(_e,{className:`size-4`}),(0,X.jsx)(`span`,{children:`Code`})]}),(0,X.jsx)(`div`,{className:`w-px h-6 bg-border mx-1`}),(0,X.jsx)(B,{variant:`ghost`,size:`sm`,className:`gap-2 px-3`,onClick:()=>t(!e),children:e?(0,X.jsx)(Ie,{className:`size-4`}):(0,X.jsx)(Re,{className:`size-4`})})]})}var Xt=async(e,t=!1)=>{let n=ee(e=>{e.walkDecls(e=>{if([`expression`,`behavior`,`-moz-binding`].some(t=>e.value.toLowerCase().includes(t))){e.remove();return}if(t){let t=e.prop===`background`||e.prop===`background-image`;e.value.toLowerCase().includes(`url(`)&&!t&&e.remove()}})});try{return(await n.process(e,{from:void 0})).css}catch{return e}};function Zt(e,t){let[n,r]=(0,Y.useState)(null),[i,a]=(0,Y.useState)(!1),[o,s]=(0,Y.useState)(null);return(0,Y.useEffect)(()=>{if(typeof window>`u`)return;let n=indexedDB.open(e,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(t)||e.createObjectStore(t,{keyPath:`id`})},n.onsuccess=()=>s(n.result),n.onerror=()=>r(`Failed to open database`)},[e,t]),{error:n,loading:i,getAll:(0,Y.useCallback)(async()=>o?new Promise(e=>{let n=o.transaction(t,`readonly`).objectStore(t).getAll();n.onsuccess=()=>e(n.result)}):[],[o,t]),putItem:(0,Y.useCallback)(async e=>{if(o)return new Promise((n,r)=>{let i=o.transaction(t,`readwrite`).objectStore(t).put(e);i.onsuccess=()=>n(),i.onerror=()=>r(i.error)})},[o,t]),deleteItem:(0,Y.useCallback)(async e=>{if(o)return new Promise((n,r)=>{let i=o.transaction(t,`readwrite`).objectStore(t).delete(e);i.onsuccess=()=>n(),i.onerror=()=>r(i.error)})},[o,t]),clear:(0,Y.useCallback)(async()=>{if(o)return new Promise(e=>{let n=o.transaction(t,`readwrite`).objectStore(t).clear();n.onsuccess=()=>e()})},[o,t])}}var Qt=n(e=>({snippets:[],isInitialized:!1,setInitialized:t=>e({isInitialized:t}),setSnippets:t=>e({snippets:t}),upsertSnippet:t=>e(e=>({snippets:e.snippets.some(e=>e.id===t.id)?e.snippets.map(e=>e.id===t.id?t:e):[...e.snippets,t]})),deleteSnippet:t=>e(e=>({snippets:e.snippets.filter(e=>e.id!==t)}))})),$t=(0,Y.memo)(function({editorRef:e,code:t,setCode:n,snippetsOpen:r,setSnippetsOpen:i}){let{snippets:o,isInitialized:s,setInitialized:c,setSnippets:l,upsertSnippet:u,deleteSnippet:d}=Qt(),{getAll:f,putItem:p,deleteItem:m}=Zt(`gstudio`,`snippets`),[h,g]=(0,Y.useState)(!1),[_,v]=(0,Y.useState)(!0),[y,b]=(0,Y.useState)(null),[x,S]=(0,Y.useState)(``),[C,w]=(0,Y.useState)(``),[T,E]=(0,Y.useState)(``),[D,O]=(0,Y.useState)(``),[A,ee]=(0,Y.useState)([]);(0,Y.useEffect)(()=>{(async()=>{let e=Object.assign({"./default-snippets/hide-unnecessities.txt":()=>a(()=>import(`./hide-unnecessities-CeX91jN3.js`).then(e=>e.default),[],import.meta.url),"./default-snippets/stars-background.txt":()=>a(()=>import(`./stars-background-CyZln2O_.js`).then(e=>e.default),[],import.meta.url)}),t=[];for(let n in e){let r=await e[n](),i=n.split(`/`).pop()?.replace(`.txt`,``).replace(/-/g,` `)||`Untitled`;t.push({id:Date.now()+Math.random(),name:i.charAt(0).toUpperCase()+i.slice(1),code:r})}ee(t)})()},[]),(0,Y.useEffect)(()=>{(async()=>{s||(l(await f()),c(!0))})()},[f,l,s,c]);let te=(0,Y.useCallback)(async()=>{if(!T||!D)return;let e=await Xt(D,!0),t={id:Date.now(),name:T,code:e};await p(t),u(t),E(``),O(``),g(!1),k.success(`Snippet created`)},[T,D,p,u]),ne=(0,Y.useCallback)(async e=>{let t={id:e,name:x,code:await Xt(C,!0)};await p(t),u(t),b(null),k.success(`Snippet updated`)},[x,C,p,u]),re=(0,Y.useCallback)(async e=>{let r=t;await m(e),d(e),k(`Snippet deleted`,{action:{label:`Undo`,onClick:()=>{n(r),k.info(`Action undone`)}}})},[m,d,t,n]),j=(0,Y.useCallback)(async(r,i)=>{let a=e.current,o=await Xt(i.code,!0),s=t;r===`cursor`&&a?(a.dispatch(a.state.replaceSelection(o)),a.focus()):r===`append`?n(`${t}\n${o}`):r===`prepend`?n(`${o}\n${t}`):r===`replace`&&n(o),k(`Inserted ${i.name}`,{action:{label:`Undo`,onClick:()=>{n(s),k.info(`Action undone`)}}})},[e,n,t]);return(0,X.jsx)(L,{mode:`wait`,children:r&&(0,X.jsxs)(I.div,{initial:{width:0,opacity:0},animate:{width:300,opacity:1},exit:{width:0,opacity:0},transition:{type:`spring`,bounce:0,duration:.3},className:`flex flex-col h-full overflow-hidden border-r border-border`,children:[(0,X.jsxs)(`div`,{className:`h-12 px-4 border-b border-border flex items-center justify-between shrink-0`,children:[(0,X.jsxs)(B,{variant:`ghost`,size:`sm`,className:`h-8 gap-1 px-1`,onClick:()=>i(!1),children:[(0,X.jsx)(R,{className:`size-3 rotate-180`}),(0,X.jsx)(`span`,{className:`text-xs font-semibold`,children:`Snippets`})]}),(0,X.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-6 ${_?`bg-secondary`:``}`,onClick:()=>v(!_),children:(0,X.jsx)(me,{className:`size-3`})}),(0,X.jsxs)(Et,{children:[(0,X.jsx)(Dt,{children:(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-6`,children:(0,X.jsx)(ze,{className:`size-3`})})}),(0,X.jsxs)(Ot,{className:`w-72 p-4 text-xs`,side:`left`,children:[(0,X.jsx)(`h4`,{className:`font-semibold`,children:`Snippets`}),(0,X.jsx)(`p`,{className:`text-foreground`,children:`Save CSS pieces to reuse.`})]})]}),(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-6`,onClick:()=>g(!h),children:(0,X.jsx)(I.div,{animate:{rotate:h?45:0},children:(0,X.jsx)(ke,{className:`size-3`})})})]})]}),(0,X.jsx)(L,{initial:!1,children:h&&(0,X.jsx)(I.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},className:`overflow-hidden border-b border-border shrink-0`,children:(0,X.jsxs)(`div`,{className:`p-3 bg-background/50 flex flex-col gap-2`,children:[(0,X.jsx)(H,{placeholder:`Name`,value:T,onChange:e=>E(e.target.value),className:`h-8 text-xs`}),(0,X.jsx)(Ue,{placeholder:`CSS Code`,value:D,onChange:e=>O(e.target.value),className:`h-32 text-xs p-2`}),(0,X.jsx)(B,{size:`sm`,onClick:te,className:`w-full h-8 text-xs`,children:`Add Snippet`})]})})}),(0,X.jsx)(`div`,{className:`flex-1 overflow-hidden`,children:(0,X.jsx)(ct,{className:`h-full w-full`,children:(0,X.jsx)(`div`,{className:`p-2 flex flex-col gap-2`,children:(0,X.jsxs)(I.div,{layout:!0,className:`flex flex-col gap-2`,children:[_&&A.map(e=>(0,X.jsx)(I.div,{layout:`position`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,X.jsx)(`div`,{className:`group p-2 rounded-lg hover:bg-secondary border border-transparent hover:border-border`,children:(0,X.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer`,onClick:()=>j(`cursor`,e),children:[(0,X.jsxs)(`div`,{className:`flex flex-col truncate w-48`,children:[(0,X.jsx)(`span`,{className:`text-xs font-semibold`,children:e.name}),(0,X.jsx)(`span`,{className:`text-[10px] text-muted-foreground font-mono truncate`,children:e.code.split(`
`)[0]})]}),(0,X.jsx)(`div`,{onClick:e=>e.stopPropagation(),children:(0,X.jsxs)(J,{children:[(0,X.jsx)(q,{children:(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-6`,children:(0,X.jsx)(pe,{className:`size-4`})})}),(0,X.jsxs)(K,{align:`end`,children:[(0,X.jsx)(G,{onClick:()=>j(`replace`,e),children:`Replace`}),(0,X.jsx)(G,{onClick:()=>j(`prepend`,e),children:`Prepend`}),(0,X.jsx)(G,{onClick:()=>j(`append`,e),children:`Append`})]})]})})]})})},e.id)),o.map(e=>(0,X.jsx)(I.div,{layout:`position`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,X.jsx)(`div`,{className:`group p-2 rounded-lg hover:bg-secondary border border-transparent hover:border-border`,children:y===e.id?(0,X.jsxs)(`div`,{className:`flex flex-col gap-2 p-2`,children:[(0,X.jsx)(H,{value:x,onChange:e=>S(e.target.value),className:`h-8 text-xs`}),(0,X.jsx)(Ue,{value:C,onChange:e=>w(e.target.value),className:`h-32 text-xs p-2`}),(0,X.jsxs)(B,{size:`sm`,onClick:()=>ne(e.id),className:`w-full h-8 text-xs`,children:[(0,X.jsx)(z,{className:`size-3 mr-2`}),` Save`]})]}):(0,X.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer`,onClick:()=>j(`cursor`,e),children:[(0,X.jsxs)(`div`,{className:`flex flex-col truncate w-48`,children:[(0,X.jsx)(`span`,{className:`text-xs font-semibold`,children:e.name}),(0,X.jsx)(`span`,{className:`text-[10px] text-muted-foreground font-mono truncate`,children:e.code.split(`
`)[0]})]}),(0,X.jsx)(`div`,{onClick:e=>e.stopPropagation(),children:(0,X.jsxs)(J,{children:[(0,X.jsx)(q,{children:(0,X.jsx)(B,{variant:`ghost`,size:`icon`,className:`size-6`,children:(0,X.jsx)(pe,{className:`size-4`})})}),(0,X.jsxs)(K,{align:`end`,children:[(0,X.jsx)(G,{onClick:()=>j(`replace`,e),children:`Replace`}),(0,X.jsx)(G,{onClick:()=>j(`prepend`,e),children:`Prepend`}),(0,X.jsx)(G,{onClick:()=>j(`append`,e),children:`Append`}),(0,X.jsx)(nt,{}),(0,X.jsx)(G,{onClick:()=>{b(e.id),S(e.name),w(e.code)},children:`Edit`}),(0,X.jsx)(G,{className:`text-destructive`,onClick:()=>re(e.id),children:`Delete`})]})]})})]})})},e.id))]})})})})]})})}),en=$e({theme:`dark`,settings:{background:`transparent`,foreground:`var(--foreground)`,caret:`var(--foreground)`,selection:`color-mix(in srgb, var(--primary), transparent 90%)`,lineHighlight:`color-mix(in srgb, var(--primary), transparent 90%)`,gutterBackground:`transparent`,gutterForeground:`color-mix(in srgb, var(--foreground), transparent 60%)`},styles:[{tag:[U.keyword,U.modifier],color:`var(--chart-2)`},{tag:[U.variableName,U.tagName],color:`var(--chart-1)`},{tag:[U.string,U.url],color:`var(--chart-3)`},{tag:[U.number,U.bool,U.unit],color:`var(--chart-4)`},{tag:U.comment,color:`var(--chart-5)`},{tag:[U.propertyName,U.attributeName],color:`var(--chart-2)`},{tag:[U.className],color:`var(--chart-1)`},{tag:U.atom,color:`var(--chart-4)`}]}),tn=W.theme({"&.cm-editor":{backgroundColor:`transparent`},".cm-scroller":{backgroundColor:`transparent`},".cm-panel.cm-search":{backgroundColor:`var(--muted)`,color:`var(--foreground)`,borderBottom:`none`,fontSize:`0.90rem`,padding:`.70rem`},".cm-search input":{backgroundColor:`transparent`,color:`var(--foreground)`,border:`1px solid var(--primary)`,borderRadius:`var(--radius)`,fontSize:`0.60rem`},".cm-search .cm-button":{backgroundColor:`var(--primary)`,backgroundImage:`none`,color:`var(--primary-foreground)`,fontSize:`0.60rem`,border:`1px solid var(--primary)`,borderRadius:`var(--radius)`},".cm-search .cm-button:hover":{backgroundColor:`var(--secondary)`,color:`var(--secondary-foreground)`},".cm-search button[name=close]":{color:`var(--primary)`,background:`var(--primary)`},".cm-search input[type='checkbox']":{accentColor:`var(--chart-1)`,cursor:`pointer`,width:`0.60rem`,height:`0.60rem`},".cm-tooltip":{position:`absolute`,zIndex:`100000 !important`},".cm-tooltip.cm-tooltip-autocomplete":{backgroundColor:`var(--background)`,border:`1px solid var(--border)`,borderRadius:`0.75rem`,padding:`0.25rem`,overflow:`hidden`,minWidth:`200px`,boxShadow:`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`},".cm-tooltip.cm-tooltip-autocomplete ul":{maxHeight:`250px`,overflowY:`auto`,padding:`0`,margin:`0`,"&::-webkit-scrollbar":{width:`6px`},"&::-webkit-scrollbar-track":{background:`transparent`},"&::-webkit-scrollbar-thumb":{background:`var(--border)`,borderRadius:`9999px`,transition:`background 0.2s`},"&::-webkit-scrollbar-thumb:hover":{background:`var(--muted-foreground)`}},".cm-tooltip.cm-tooltip-autocomplete ul li":{borderRadius:`var(--radius)`,padding:`0.4rem 0.6rem`,color:`var(--secondary-foreground)`,cursor:`pointer`},".cm-tooltip.cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:`var(--accent)`,color:`var(--accent-foreground)`},".cm-foldPlaceholder":{backgroundColor:`transparent`,color:`var(--foreground)`,border:`none`,padding:`0 4px`},"&.cm-editor.cm-focused":{outline:`none`}}),nn=c();A([ne]);function rn({initialColor:e,onCommit:t}){let[n,r]=(0,Y.useState)(e),[i,a]=(0,Y.useState)(!1);return(0,X.jsxs)(S,{open:i,onOpenChange:e=>{i&&!e&&t(n),a(e)},children:[(0,X.jsx)(ae,{className:`size-3 mr-1 rounded-full border border-border cursor-pointer transition-all hover:ring-2 hover:ring-primary/20 focus:outline-none focus:ring-2 focus:ring-primary`,style:{backgroundColor:n},onClick:e=>e.stopPropagation(),"aria-label":`Pick a color`}),(0,X.jsx)(O,{children:(0,X.jsx)(x,{className:`z-9999`,sideOffset:8,children:(0,X.jsxs)(j,{className:`custom-layout p-0 rounded-xl backdrop-blur-md bg-background border flex flex-col shadow-xl`,onClick:e=>e.stopPropagation(),children:[(0,X.jsx)(C,{color:w(n).toHex(),onChange:r}),(0,X.jsx)(`input`,{type:`text`,className:`w-full px-3 py-1.5 rounded bg-muted text-foreground text-xs font-mono focus:outline-none border-t border-border`,value:n,onChange:e=>r(e.target.value),placeholder:`hex`})]})})})]})}var an=class extends Ye{color;from;to;view;root=null;constructor(e,t,n,r){super(),this.color=e,this.from=t,this.to=n,this.view=r}toDOM(){let e=document.createElement(`span`);return e.className=`cm-custom-color-trigger`,e.setAttribute(`contenteditable`,`false`),requestAnimationFrame(()=>{this.root=(0,nn.createRoot)(e),this.root.render((0,X.jsx)(rn,{initialColor:this.color,onCommit:e=>{this.view.dispatch({changes:{from:this.from,to:this.to,insert:e}})}}))}),e}destroy(e){this.root&&=(this.root.unmount(),null)}eq(e){return e.from===this.from&&e.to===this.to}},on=Ke.fromClass(class{decorations;constructor(e){this.decorations=this.buildDeco(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=this.buildDeco(e.view))}buildDeco(e){let t=new qe,n=/#([a-fA-F0-9]{3,6})/g;for(let{from:r,to:i}of e.visibleRanges){let a=e.state.doc.sliceString(r,i),o;for(;o=n.exec(a);){let n=r+o.index,i=n+o[0].length;t.add(n,n,Ze.widget({widget:new an(o[0],n,i,e),side:-1}))}}return t.finish()}},{decorations:e=>e.decorations}),sn=e(ie(),1),cn={type:`spring`,stiffness:400,damping:25},ln=0,un=4,dn=450,fn=300,pn=350;function mn(){let[e,t]=(0,Y.useState)(!1),[n,r]=(0,Y.useState)(!1),[i,a]=(0,Y.useState)(!1),[o,s]=(0,Y.useState)(!1),{isCodeOpen:c,editorViewRef:l,rootCss:u,setRootCss:d}=Q(),{cssCode:f,setCssCode:p}=xt(),m=(0,Y.useRef)(null),h=ce();(0,Y.useEffect)(()=>{s(!0)},[]);let g=(0,Y.useMemo)(()=>o?[Xe(),et({parent:document.body}),Je({activateOnTyping:!0}),en,tn,on,W.lineWrapping,W.theme({"&":{height:`100%`},".cm-scroller":{overflow:`visible !important`}})]:[Xe()],[o]),_=(0,Y.useCallback)(()=>{navigator.clipboard.writeText(f),a(!0);let e=setTimeout(()=>a(!1),2e3);return()=>clearTimeout(e)},[f]),v=(0,Y.useMemo)(()=>(0,sn.default)(e=>console.log(`Canvas updated:`,e),300),[]),y=(0,Y.useCallback)((e,t)=>{p(e),v(e),m.current=t.state.selection.main},[p,v]),b=e=>{let t=l.current;t&&(t.dispatch({selection:{anchor:e===`start`?0:t.state.doc.length},scrollIntoView:!0}),t.focus())};return!c||!o?null:(0,X.jsxs)(I.div,{drag:!0,dragListener:!1,dragControls:h,dragMomentum:!1,initial:{opacity:0,scale:.9,y:0},animate:{opacity:1,scale:1,y:0,width:(n?pn:0)+dn+(e?fn:0)+un*4},exit:{opacity:0,scale:.9,y:0},transition:cn,className:`absolute bottom-16 left-1/2 -translate-x-1/2 h-96 bg-background border border-border rounded-3xl flex overflow-visible z-50 p-${ln} px-${un}`,children:[(0,X.jsxs)(I.div,{initial:{opacity:0,width:0},animate:{opacity:+!!n,width:n?pn:0},transition:cn,className:`shrink-0 border-r border-border h-full overflow-hidden flex flex-col`,children:[(0,X.jsx)(`div`,{className:`h-12 shrink-0 border-b border-border flex items-center px-3 text-xs font-bold uppercase tracking-wider`,children:`Variables`}),(0,X.jsx)(`div`,{className:`flex-1 w-full overflow-hidden`,children:(0,X.jsx)(Qe,{value:u,onChange:d,extensions:g})})]}),(0,X.jsxs)(`div`,{className:`flex flex-col h-full grow w-full min-w-96`,children:[(0,X.jsxs)(`div`,{className:`h-12 shrink-0 border-b border-border flex items-center justify-between px-2 cursor-grab active:cursor-grabbing`,onPointerDown:e=>h.start(e),children:[(0,X.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,X.jsx)(Oe,{className:`size-4 text-muted-foreground`}),(0,X.jsxs)(B,{variant:`ghost`,size:`sm`,onClick:()=>r(!n),className:`gap-2 h-7 text-xs`,children:[(0,X.jsx)(he,{className:`size-3`}),` :root`]})]}),(0,X.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,X.jsx)(B,{variant:`ghost`,size:`sm`,onClick:_,className:`gap-2 h-7 text-xs`,children:i?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(z,{className:`size-3 text-emerald-500`}),` `,(0,X.jsx)(`span`,{children:`Copied!`})]}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(ge,{className:`size-3`}),` `,(0,X.jsx)(`span`,{children:`Copy`})]})}),(0,X.jsxs)(B,{variant:`ghost`,size:`sm`,onClick:()=>t(!e),className:`h-7 text-xs`,children:[(0,X.jsx)(ue,{className:`size-3 mr-2`}),` Snippets`]})]})]}),(0,X.jsxs)(`div`,{className:`flex-1 w-full overflow-hidden flex flex-col`,children:[(0,X.jsx)(ct,{className:`flex-1 w-full min-h-0`,style:{overflow:`visible`},children:(0,X.jsx)(Qe,{value:f,onChange:y,extensions:g,onCreateEditor:e=>{l.current=e}})}),(0,X.jsxs)(`div`,{className:`h-8 shrink-0 border-t border-border flex items-center justify-end px-2 gap-1 bg-background/50`,children:[(0,X.jsx)(B,{size:`icon`,variant:`ghost`,className:`size-6 rounded-full`,onClick:()=>b(`start`),children:(0,X.jsx)(R,{className:`size-3 -rotate-90`})}),(0,X.jsx)(B,{size:`icon`,variant:`ghost`,className:`size-6 rounded-full`,onClick:()=>b(`end`),children:(0,X.jsx)(R,{className:`size-3 rotate-90`})})]})]})]}),(0,X.jsx)(I.div,{initial:{opacity:0,width:0},animate:{opacity:+!!e,width:e?fn:0},transition:cn,className:`shrink-0 border-l border-border h-full overflow-hidden`,children:e&&(0,X.jsx)($t,{editorRef:l,selectionRef:m,code:f,setCode:p,snippetsOpen:e,setSnippetsOpen:t})})]})}function hn(){let[e]=f(),[t,n]=(0,Y.useState)(!1),{isCodeOpen:r,setIsCodeOpen:i,loadPreset:a}=Q();return(0,Y.useEffect)(()=>{let t=e.get(`id`),n=e.get(`category`);t&&n&&a(t,n).then(()=>i(!0))},[e,a,i]),(0,X.jsxs)(`div`,{className:`fixed inset-0 flex w-screen h-screen bg-background overflow-hidden`,children:[!t&&(0,X.jsx)(Tt,{}),(0,X.jsxs)(`main`,{className:`flex-1 flex flex-col min-w-0 bg-transparent relative z-10`,children:[!t&&(0,X.jsx)(Jt,{}),(0,X.jsxs)(`div`,{className:M(`flex-1 w-full h-full relative overflow-hidden flex items-center justify-center`,!t&&`p-8`),children:[!t&&(0,X.jsx)(`div`,{className:`absolute inset-0 z-0 opacity-10 mask-[linear-gradient(to_bottom,white,transparent)]`,style:{backgroundImage:`linear-gradient(#9C92AC 1px, transparent 1px), linear-gradient(90deg, #9C92AC 1px, transparent 1px)`,backgroundSize:`20px 20px`}}),(0,X.jsx)(Yt,{isMaximized:t,setIsMaximized:n}),(0,X.jsx)(Ht,{isMaximized:t})]}),(0,X.jsx)(L,{children:r&&(0,X.jsx)(mn,{})})]}),!t&&(0,X.jsx)(Nt,{})]})}var gn=()=>{let[e,t]=(0,Y.useState)(!1),[n,r]=(0,Y.useState)(!0);return(0,Y.useEffect)(()=>{let e=()=>{let e=window.matchMedia(`(min-width: 769px) and (max-width: 1024px)`),n=navigator.userAgent.toLowerCase(),i=[`ipad`,`tablet`,`kindle`,`silk`,`playbook`,`nexus 7`,`nexus 9`,`nexus 10`,`galaxy tab`,`sm-t`,`gt-p`,`gt-n`].some(e=>n.includes(e)),a=/ipad|macintosh/.test(n)&&`ontouchend`in document;t(e.matches||i||a||window.innerWidth>=769&&window.innerWidth<=1024&&`ontouchstart`in window),r(!1)};e();let n=window.matchMedia(`(min-width: 769px) and (max-width: 1024px)`),i=()=>e();return n.addEventListener?n.addEventListener(`change`,i):n.addListener(i),window.addEventListener(`resize`,e),()=>{n.removeEventListener?n.removeEventListener(`change`,i):n.removeListener(i),window.removeEventListener(`resize`,e)}},[]),{isTablet:e,isLoading:n}},_n=m(function(){let[e,t]=(0,Y.useState)(!1),[n,r]=(0,Y.useState)(!1),{isMobile:i,isLoading:a}=Ge(),{isTablet:o,isLoading:s}=gn();return(0,Y.useEffect)(()=>{a||s||(localStorage.getItem(`studio_visited`)?t(!0):r(!0))},[a,s]),a||s?null:i||o?(0,X.jsxs)(`div`,{className:`fixed inset-0 flex flex-col items-center justify-center p-4 text-center bg-background`,children:[(0,X.jsx)(Te,{className:`mb-4 size-12 text-muted-foreground`}),(0,X.jsx)(`p`,{className:`text-muted-foreground`,children:`The Studio is currently optimized for desktop use only.`})]}):!e&&!n?(0,X.jsx)(`div`,{className:`fixed inset-0 bg-background`}):(0,X.jsxs)(bt,{children:[e&&(0,X.jsx)(hn,{}),(0,X.jsx)(ot,{isOpen:n,onClose:()=>{localStorage.setItem(`studio_visited`,`true`),r(!1),t(!0)}})]})});export{_n as default};