/* Developed by Ben Cheshire */
"use strict";const e=chrome.runtime?.id,t=(()=>{try{return window.self!==window.top}catch(e){return!0}})(),o=()=>!(chrome.runtime?.id),i=e=>null!=e&&""!==e,n=e=>{let t="";return e.classList.forEach(e=>{t+="."+e}),t+(""!==e.id?"#"+e.id:"")},r=(e,t)=>{const o=e=>{let t=[];return e.classList.forEach(e=>{t.push(e)}),t.sort()};return e.classList.length===t.classList.length&&0!==e.classList.length&&(i=o(e),n=o(t),i=Array.isArray(i)?i:[],n=Array.isArray(n)?n:[],i.length===n.length&&i.every((e,t)=>e===n[t]));var i,n},s=e=>{let t="";for(const o of e.attributes)t+=`,${o.localName}.`+o.value;return t.substring(1)},a=(e,t)=>t.test(e),c=(e,t,o=!1)=>{if(t=RegExp(`^(${t.source})$`,o?"":"i"),(typeof e).startsWith("o")){for(const o of e)if(t.test(o))return!0;return!1}return t.test(e)},l=(e,t)=>{for(const o of t)if(e===o)return!0;return!1},u=(e,t)=>{if(i(e)){e=e.toLowerCase();let o=0;return t.forEach(t=>{e.includes(t.toLowerCase())&&o++}),o}return 0},p=e=>document.getElementById(e),d=e=>document.getElementsByClassName(e),g=e=>document.getElementsByTagName(e),m=e=>document.querySelectorAll(e),h=e=>document.querySelector(e),f=()=>h("head")||h("*"),y=e=>e.style,v=(t,o="",i="")=>{const n=e+"_Styles",r=t.replace(/\./g,"-").replace(/ /g,"_")+i+n,a=""!==o?t+`{${o}}`:o;if(p(r))p(r).innerHTML!==a&&(p(r).innerHTML=a);else if(p(n))p(n).innerHTML+=`<style id='${r}'>${a}</style>`;else{const e=document.createElement("div");e.id=n,y(e).display="none",e.innerHTML=`<style id='${r}'>${a}</style>`,f().appendChild(e)}},k=e=>{o()||chrome.runtime.sendMessage({msg:e})},b=(e,t,o=!0)=>{o||(t=t.toUpperCase());const i=o?e.substring(e.indexOf(t)):e.substring(e.toUpperCase().indexOf(t));return i.length!==e.length||(o?i.startsWith(t):i.toUpperCase().startsWith(t))?i.substring(t.length):e},_=e=>{ut=e.preCSSselect,pt=e.badSelector,dt=e.unfilteredElemSelector,gt=e.postCSS,mt=e.postCSSobj,ht=e.notifHTML},w=()=>{if(null===document.doctype)try{if(!g("html"))return}catch(e){return}function e(){Et=!0,document.hidden||(j(),Tt&&!xt&&z(),U(!0))}chrome.storage.local.get(o=>{if(void 0===o.badSelector)return t?void setTimeout(()=>{w()},3e3):void chrome.storage.local.set({localInitialiserValidator:""},()=>{setTimeout(()=>{Kt=!0,chrome.runtime.sendMessage({initialise:""})},2e3)});_(o),l(document.readyState,["complete","interactive"])?e():document.addEventListener("DOMContentLoaded",t=>{e()})}),Et||I(),document.addEventListener("visibilitychange",L),chrome.storage.onChanged.addListener((e,t)=>{if("sync"===t)Mt=!0,document.hidden||L();else if(Kt){Kt=!1;try{$()}catch(e){}Et=!1,w()}})},E=e=>void 0!==y(e)&&"none"!==y(e).display,x=()=>{t&&(Bt+=it,Dt+=nt)},T=()=>!o()||($(),window.removeEventListener("focus",T),document.removeEventListener("visibilitychange",L),clearInterval(_t),!1),L=()=>{if(document.hidden)clearInterval(_t),xt&&(500>Nt&&(Ze=parseInt(Ze/Xe),M()),xt=!1,clearTimeout(tt));else{if(j(),!T()||A())return;Mt?(Mt=!1,chrome.storage.local.get(e=>{_(e),I()})):wt&&(Pt?Ot||2===Rt||(Tt&&!xt?Et&&(tt=setTimeout(()=>{z()},Ze)):U(!0)):I())}},S=e=>!a(e.outerHTML,Le),C=(e,t,o=!0)=>{const i=(void 0===t?n(e):t)+e.tagName;return Yt&&(a(i,Se)||o&&a(i,/footer|video-container/i)&&!a(i,Ce))},I=()=>{chrome.storage.sync.get(o=>{if(clearInterval(ot),so!==o.activityNotif&&(so=o.activityNotif,!so)){clearTimeout(vt);const t=p(e+"_notif");t&&document.body.removeChild(t.parentElement)}if(wt=o.enableCNB,wt){if(clearTimeout(at),oe(),!A()){if(t){if(a(Bt,/\.live\.|staticxx|connect\.facebook|googleapis/i)||null==f())return wt=!1,Rt=2,document.removeEventListener("visibilitychange",L),void $();if(!o.runAllFrames)return wt=!1,void $()}ot=setInterval(()=>{A()},t?6e3:1200);for(let e of o.whitelist)if(""!==e&&(Bt.startsWith(e)||qt.startsWith(e)||t&&it.startsWith(e)))return Ot=!0,$(),void F("D");if(Ot&&(Ot=!1,F("E")),zt!==(o.showElemsBlocked&&o.jsInject)&&(zt=o.showElemsBlocked&&o.jsInject,Pt=!1,eo=0,O(!0)),!Pt&&(a(Bt,je)||a(Dt,Ne)||a(Dt,/google\./i)&&Bt.includes("/search"))&&!a(Bt,/\/wiki\//i))return Rt=2,void $();if(o.cssInject_pre===St&&o.jsInject===Tt||$(),st!==o.blockOtherNotifications&&(void 0!==st&&$(),st=o.blockOtherNotifications),o.cssInject_pre?(St||(St=!0),ve()):W(),o.cssInject_post?(Ct||(Ct=!0,(Ut||Gt)&&ke()),U(!0)):(Ct=!1,Gt=!1,q()),jt=o.enableLockedFeatures,!Pt)if(Pt=!0,a(Dt,/mobile\.twitter|hotukdeals/i))Rt=.5;else{if(H())return Rt=1,void B(2);Rt=!1}a(Dt,/twitter|xbox/i)&&(Xt=!0),Yt!==o.strictFilters&&(Yt=o.strictFilters,B(3)),N(),et=-1,Vt!==o.clickDismissNotif&&(Vt=o.clickDismissNotif,Vt&&B(4)),j(),o.jsInject&&1>Rt?(Tt=!0,clearTimeout(tt),Et&&!document.hidden&&z()):B(5)}}else $()})},M=()=>{(isNaN(Ze)||400>Ze)&&N()},N=()=>{t?(Ze=400,Xe=1.5):(Ze=250,Xe=1.2)},j=()=>{clearInterval(_t),_t=setInterval(()=>{T()},4200),bt=!1,clearTimeout(kt),kt=setTimeout(()=>{bt=!0},2e4)},H=()=>(a(Dt,He)||a(Bt,Ae)||a(Bt,/setting/i)&&a(Bt,/privacy/i))&&!a(Dt,/theregister/i),A=()=>{if(location.href!==qt){j(),qt=location.href,Bt=b(qt,"://");for(let e of $t)if(!e[0]||E(e[0])){B(6),Pt=!1;break}if(Dt.startsWith(location.host)||(Dt=location.host,Pt=!1),!!p(e+"_cssInject_pre")!==St&&(St=!St,Pt=!1),H()&&(Pt=!1),x(),!Pt)return Nt>500&&(Lt=!0),document.hidden||I(),!0}return!1},$=()=>{Gt=!1,clearTimeout(at),W(),B(7),q(),O(!0)},W=()=>{Gt=!1,St&&(St=!1,P("cssInject_pre"))},q=e=>{if(It){for(let e of Wt)D(e);Wt=[]}!It||Ct&&Gt||(e||(Ct=!1),It=!1,P("cssInject_post"))},B=t=>{if(xt||Tt||$t.length>0){Tt=!1,Lt=!1,clearTimeout(tt),Gt=!1,q(!0);for(let e of $t)D(e);$t=[],At="",Ht="",xt=!1,Ft=[],Ut=!1,ro&&(ro=!1,yt.disconnect()),p(e+"_Styles")&&(p(e+"_Styles").innerHTML="")}O(!0)},D=e=>{e[0]&&(null==e[1]?e[0].removeAttribute("style"):e[0].setAttribute("style",e[1]))},F=e=>{t||k(e)},O=o=>{const n=$t.length+no||+Gt;if(n!==eo){if(!t&&so&&n>eo){const t=p(e+"_notif")||((e,t=document.body,o,n=t.lastElementChild.nextElementSibling)=>{if(void 0!==e.id&&p(e.id))return;const r=document.createElement(e.tagName||"div");for(const t in e)if("object"==typeof e[t])if(Array.isArray(e[t]))r[t]=e[t];else for(const o in e[t])r[t][o]=e[t][o];else"tagName"!==t&&("style"===t?r.setAttribute(t,e[t].replace(/\\n|\n\s*/gm,"")):r[t]=e[t]);return o&&r.setAttribute("style","all:unset!important;"+(a=r.getAttribute("style"),i(a)?(a.replace(/(;|)}/g,";}").replace(/(style="((.|\n)*?))"/g,'$1!important"').replace(/(style='((.|\n)*?))'/g,"$1!important'").replace(/;/g,"!important;").replace(/"]/g,'"i]')+(a.endsWith(";")||a.endsWith(">")||a.endsWith("}")?"":"!important")).replace(/((!important(;|)(((\s|\n)*?)|))*)!important(;|)/g,"!important;").replace(/\>(((\s|\n)*?)|)!important(;|)/g,">").replace(/important;}/g,"important}").replace(/important;"/g,'important"').replace(/important;'/g,"important'").replace(/}((\s|\n)*?)!important}/g,"}}"):"")),t.insertBefore(r,n),r;var a})({innerHTML:ht}).firstElementChild,o=e=>{((e,t)=>{const o=y(e);let i=(e.getAttribute("style")||"").trim();for(const e in t){const r=""!==t[e]?e+`:${t[e]}!important;`:"";RegExp(e+"((\\s|\\n)*?):").test(i)?i=i.replace(RegExp(e+`((\\s|\\n)*?):((\\s|\\n)*?)(${n=o[e],n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/\(\\\./g,"((0|).")}|)(.*?)(;|$)`,"gi"),r):i+=(i.endsWith(";")||""===i?"":";")+r}var n;e.setAttribute("style",i)})(t,{transform:`scale(${e})`})};clearTimeout(vt),""!==y(t)&&o(1),vt=setTimeout(()=>{o(1.1),vt=setTimeout(()=>{o(0),vt=setTimeout(()=>{document.body.removeChild(t.parentElement)},3e3)},200)},2e3)}eo=n,(zt||o)&&k(t?Ke+"i"+eo:zt?eo:0)}},P=t=>{var o=p(e+"_"+t);o&&o.parentNode.removeChild(o)},R=()=>!(!t||null!=document.body&&0!==document.body.textContent.length),U=o=>{clearTimeout(at),at=setTimeout(()=>{wt&&Et&&!document.hidden&&2>Rt&&!Ot&&!R()&&(St&&h(ut)&&(p(e+"_cssInject_pre")||(q(),I()),!Ct&&!zt||Gt||(Gt=!0,ke(),O())),U())},o?t?2e3:100:4e3)},z=()=>{if(xt=!0,et++,rt=[G()],!ro){if(ro=!0,void 0===yt){const e=e=>new Promise(t=>setTimeout(t,e));let t,o=10,i=0;yt=new MutationObserver(n=>{function r(n){if(E(n)){const e=n.tagName;l(e,["DIV","SPAN"])?ae(n,"h"):l(e,["H2","H3","H4","P"])?ae(n,"t"):"A"===e&&le(n),E(n)&&ee(n)}if(clearInterval(t),t=setInterval(()=>{o>10?(o--,i--):clearInterval(t)},50),i>=350||$t.length>=40)return e(1e3>o?o++:o);i++}n.forEach(async e=>{await r(e.target),E(e.target)&&e.addedNodes.forEach(async e=>{if(void 0!==e.tagName&&(await r(e),E(e)))for(let t of e.querySelectorAll("*"))await r(t)})}),U(!0)})}yt.observe(document.body,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}if(!(()=>{if(h('[href^="https://getadmiral.com/pb?utm_source="]'))return Rt=2,$(),!0;if(h('[data-api*="privacyportal-de.onetrust.com"]')||p("_evidon_banner")||h('[class*="jfoodo"i]'))return Rt=1,B(0),!0;if(Jt!==document.title){Jt=document.title;const e=Jt.replace(/-/gi,"").replace(/and/gi,"&").replace(/sign /gi,"sign").replace(/log /gi,"log");if(Yt&&a(e,Ie)&&!a(e,Me))return Rt=1,B(1),!0}return!1})())if(1>et?(U(!0),ct=1e3):ct=30,!R()||et>4){if(Qt=0,J(),fe(),J(),Q(),J(),Lt)return;Z(),J(),te(),J(),ce(),J(),setTimeout(()=>{se("div","h"),J(500),se("span","h"),J(),se("h2","t"),J(),se("h3","t"),J(),se("h4","t"),J(),se("p","t"),J(),se("policy-text","t"),J(),V()},500)}else V()},V=()=>{var e=0;if(rt.pop(),rt.forEach(t=>{e+=t[0]}),(e>200||Lt&&8e3>Ze||t&&(8e3>Ze||e>30)||et>4&&100*e>Ze&&5e3>Ze)&&(Ze=parseInt(Ze*Xe+(et>3||t?e:e>Ze?e-Ze:50)),(Ut||Gt)&&(Xe=parseFloat((Xe+.05).toFixed(3))),M()),clearTimeout(tt),(Ut&&e>1e3||.5===Rt)&&et>4&&!Lt)Lt=!0;else{if(e>3500&&et>0)return;if(Ze>15e3)return}Tt?Y():B(8)},Y=()=>{Tt&&xt&&!bt&&(tt=setTimeout(()=>{z()},Ze))},G=()=>parseInt(window.performance.now()),J=(e=0)=>{rt[rt.length-1]=[G()-e-rt[rt.length-1],rt.length],rt.push(G())},K=()=>{Ye.forEach(e=>{(e=h(e))&&a(Qe.t(e),xe)&&de(e)}),we.forEach(e=>{(e=h(e))&&5>e.innerHTML.length&&ye(e)})},Q=()=>{Ut&&($t.forEach(e=>{e[0]&&E(e[0])&&(y(e[0]).display="none",setTimeout(()=>{N(),he(e[0])},1e3))}),K()),X()},X=()=>{It&&mt.forEach(e=>{m(e[0]).forEach(t=>{const o=r(t);var n="";function r(e){const t=e.getAttribute("style");return i(t)?t.endsWith(";")?t:t+";":""}e[1].forEach(e=>{o.includes(e)||(y(t).removeProperty(e.split(":")[0]),n+=e+";")}),""!==n&&((()=>{for(let e of Wt)if(e[0]===t)return;Wt.push([t,""!==o?o:null])})(),t.setAttribute("style",r(t)+n))})})},Z=()=>{const e=m(pt);to<e.length||(to=0);for(var t=0,o=!0,i=to,n=e.length-to-1,r=e.length,a=-1;to<e.length&&25>Qt&&t++<ct;){const t=o?to++:e.length-to;(()=>{if(o){if(t>=r&&n>=t)return;a=t}else{if(t>=i&&a>=t)return;r=t}ee(e[t])})(),o=!o}},ee=e=>{if(ie(e)){const t=n(e);if(!C(e,t))if(re(t)){const o=t.split("#")[0];ne(o)||de(e,o)}else{const o=t.split("#")[0],i=s(e);(a(i,Oe)||st&&a(i,Pe))&&!ne(o)&&de(e,o)}}},te=()=>{null!=dt&&m(dt).forEach(e=>{Qt>24||ie(e)&&(()=>{for(var t=1;t<e.classList.length;t++)if(!e.classList[t].endsWith("-1-"))return;Qe.t(e)&&de(e)})()})},oe=()=>{},ie=e=>E(e)&&2e4>e.textContent.length,ne=t=>{return!(""===t||(o=t,!p(o.replace(/\./g,"-").replace(/ /g,"_")+e+"_Styles")));var o},re=e=>{if(e=e.replace(/_/gi,"-").replace(/-cmp(?!-)/gi,"cmp-"),a(e,Fe))return!1;if(!Yt&&a(e,Be))return!0;const t=u(e,Ge);return!!(t>1||a(e,Ue)&&t)},se=(e,t)=>{const o=g(e);void 0!==oo[e]&&oo[e][0]<o.length&&oo[e][1]>=o.length||(oo[e]=[0,o.length]);for(var i=0,n=!0,r=oo[e][0],a=o.length-oo[e][0]-1,s=o.length,c=-1;oo[e][0]<o.length&&25>Qt&&i++<ct;){const i=n?oo[e][0]++:o.length-oo[e][0];(()=>{if(n){if(i>=s&&a>=i)return;c=i}else{if(i>=r&&c>=i)return;s=i}ae(o[i],t)})(),n=!n}},ae=(e,t)=>{if(E(e)){const o=Qe[t](e);!(a(o,xe)||u(o,Ve)>1||st&&a(o.replace(/(a(n|) |)(ad(s|)|content)( |)block(er|)(s|)/gi,"adblock"),Te))||C(e)||d("conversationContainer")[0]&&!(()=>{for(let t of d("conversationContainer"))if(t.innerHTML.includes(e.outerHTML))return!1;return!0})()||de(e)}},ce=(e="a")=>{const t=g(e);void 0!==oo[e]&&oo[e][0]<t.length&&oo[e][1]>=t.length||(oo[e]=[0,t.length]);for(var o=0,i=!0,n=oo[e][0],r=t.length-oo[e][0]-1,a=t.length,s=-1;oo[e][0]<t.length&&25>Qt&&o++<ct;){const o=i?oo[e][0]++:t.length-oo[e][0];(()=>{if(i){if(o>=a&&r>=o)return;s=o}else{if(o>=n&&s>=o)return;a=o}le(t[o])})(),i=!i}},le=e=>{function t(t,o){return!(E(t)&&!C(t))||o&&!a(Qe.h(e),We)||!!a(Qe.h(t),Re)&&(de(t),!0)}null==e.parentElement||t(e.parentElement,!0)||null==e.parentElement.parentElement||t(e.parentElement.parentElement,!1)},ue=e=>e.innerText?e.innerText.length:0,pe=()=>null!==document.body?document.body.innerText:"",de=(e,t)=>{if(!Tt)return;if(!S(e))return;if(At.includes(e.outerHTML))return void(l()||ye(e,!0,!0));if(Yt&&void 0===t){const t=e.textContent.trim().toLowerCase();if(a(Jt,/sign/i)&&t.startsWith("i agree")&&(e.innerHTML.includes("<input")||null!=e.previousElementSibling&&"INPUT"===e.previousElementSibling.tagName||null!=e.nextElementSibling&&"INPUT"===e.nextElementSibling.tagName))return;if(t.startsWith("by signing up, you agree"))return}var o=ue(e);if((16>e.textContent.length||void 0===t)&&pe().length<o+20)return;var r=[];!function e(t,o){if(r.push(t),null!=t.parentElement&&5>o)return e(t.parentElement,o+1)}(e,0);const s=(()=>{if(Xt)return 0;for(var t=e.nextElementSibling;null!=t;)null!=t.innerText&&a(_e(t.innerText),Re)&&me(t,e,1e4)&&(o+=t.innerText.length,ye(t,!1,!0)),t=t.nextElementSibling;for(var i=1;i<r.length;i++){if("BODY"===r[i].tagName)return i-1;if(C(r[i]))return a(n(r[i-1]),Ce)&&!C(r[i],void 0,!1)?i-1:-1;if(!me(r[i],e,o))return i-1}return r.length-1})();if(s>-1)if(0===s)l()||ye(r[0],!1,!0);else{ye(r[s],!1,!0);for(var c=1;s>c;c++)ye(r[c],!0,!0);l()||ye(r[0],!0,!0)}function l(){if(i(t)){for(var e=0;e<Ft.length;e++)if(Ft[e][0]===t)return 4===Ft[e][1]?(v(t,Ee),!0):(Ft[e][1]++,!1);Ft.push([t,1])}return!1}},ge=e=>c(e.tagName,De)||c(e.id,Fe)||c(e.classList,Fe),me=(e,t,o)=>{if(!E(e)||ge(e)||pe().length<=ue(e)+50||!S(e))return!1;if(1===e.childElementCount||e.offsetHeight<t.offsetHeight+50&&ue(e)<o+50)return!0;if(e.childElementCount>4||e.innerHTML.length>2*t.outerHTML.replace(/style( |)=( |)("|')(.*?)("|')/gi,"").length){if(a(s(e),qe))return!0;const t=n(e);return!!a(t,Oe)||!!a(t,ze)}return!0},he=e=>{if(Xt)return!1;function t(e){if(E(e)){const t=s(e);if(a(t,qe))ye(e,!0);else if(i(e.textContent)){const o=e.textContent.trim().replace(/\n|[\s]{2,}/g," ").replace(/z/g,"s");(l(o,["Site Blocked","Customise Settings"])||50>o.length&&!ge(e)&&a(t,/heading|title|button-container|view|text-center|fot-fixd/i)&&(35>o.length&&a(o,$e)||a(o,/respects your data privacy|Set cookie preferences|Accept AllPrivacy and Cookies|Refuse Allow cookies/i)))&&de(e,n(e))}}}return null!=e.nextElementSibling&&(t(e.nextElementSibling),null!=e.nextElementSibling.nextElementSibling&&t(e.nextElementSibling.nextElementSibling)),null!=e.previousElementSibling&&(t(e.previousElementSibling),null!=e.previousElementSibling.previousElementSibling&&t(e.previousElementSibling.previousElementSibling)),!(null==e.parentElement||!E(e.parentElement)||ue(e.parentElement)>=10||ge(e.parentElement)||C(e.parentElement)||(ye(e.parentElement,!1),0))},fe=()=>{jt&&m('iframe[data-src*="youtube.com/embed"]:not([src]),[class*="video"]>iframe[data-src]:not([src])').forEach(e=>{e.src=e.getAttribute("data-src")})},ye=(e,o,i)=>{E(e)&&(i||S(e))&&(ge(e)||Tt&&($t.push([e,e.getAttribute("style")]),e.setAttribute("style",Ee),U(!0),bt&&(j(),Y()),o||he(e)||((()=>{if(!At.includes(e.outerHTML)){if(At+=e.outerHTML,!Vt)return;function t(e){function t(t){for(let o of e.getElementsByTagName(t)){const e=o.textContent.toLowerCase(),t=n(o)+o.getAttribute("aria-label")+e;if(!Ht.includes(o.outerHTML)&&!a(t,/accept|ok|yes|I consent/i)&&(a(t,/close|dismiss|cancel|not now/i)||"x"===e))return Ht+=o.outerHTML,o.click(),!0}return!1}t("button")||t("span")||t("div")}null!=e.parentElement&&3>e.parentElement.getElementsByTagName("button").length&&me(e.parentElement,e,ue(e))&&!(()=>{for(let t of e.parentElement.getElementsByTagName(e.tagName))if(r(t,e))return!0;return!1})()?t(e.parentElement):(t(e),null!=e.parentElement&&4>e.parentElement.childElementCount&&(null!=e.nextElementSibling&&20>e.nextElementSibling.textContent.length&&t(e.nextElementSibling),null!=e.previousElementSibling&&20>e.previousElementSibling.textContent.length&&t(e.previousElementSibling)))}})(),setTimeout(()=>{he(e)},1e3)),K(),O(),Ut||(Ut=!0,t&&document.title.toLowerCase().includes("notice message app")&&document.querySelector(".message-container")&&ye(document.querySelector(".message-container")),ke()),Qt++,window.dispatchEvent(new Event("resize")),fe(),clearTimeout(lt),lt=setTimeout(()=>{!t&&50>pe().length&&Zt>-1&&(B(9),0>--Zt||(2>Zt&&(Xt=!0),I()))},500)))},ve=()=>{be("pre",ut+`{${Ee}}`),U(!0)},ke=()=>{Ct&&(It=!0,Xt||(be("post",gt),Tt&&X()))},be=(t,o)=>{if(!p(e+"_cssInject_"+t)){var i=document.createElement("style");i.id=e+"_cssInject_"+t,y(i).display="none",i.innerHTML=o,f().appendChild(i)}},_e=e=>e.trim().replace(Je,"the site").replace(/ies/gi,"y").replace(/t(rusted|(ha|ex)t|(rack|arget)ing)|other|an(onymou|d our partner)s|s(ometimes|imilar|mall)|w(e( can|b)|hich)|are|files|c(ertain|an either)|brows((er('|)(s|))|ing)|p(roducts and|((ossibl|leas)e))|just|erience(s|)|(ver|directl|alit|nolog)y|[-_"',‘’]/gi,"").replace(/[\s]{2,}/g," ").replace(/z/gi,"s").replace(/is(e(d|ment|)|ation|ing)(s|)/gi,"").replace(/k(ie|y)/gi,"ki").replace(/(persona(l|)|tailor(ed|))( and|)/gi,"persona").replace(/you( a|)r(e|) /gi,"you ").replace(/you have|ensure you get|show you/gi,"give you").replace(/we( ha|)ve/gi,"we").replace(/uing/gi,"ue").replace(/th(is|ese)|us issue all/gi,"the").replace(/eneral data protection regulation/gi,"dpr").replace(/ad /gi,"ads ").replace(/content( and ad(vert|)(s|))|advert(s|)/gi,"ads").replace(/about( the|)/gi,"on").replace(/information|detail(s|)/gi,"info").replace(/and tech|\./gi,"").replace(/help us( to|)/gi,"").replace(/ our/gi," the").replace(/deliver/gi,"provide").replace(/in( |)line|custom/,"relevant").replace(/ting/gi,"t").replace(/such as/gi,"like").replace(/in order to|with/gi,"to").replace(/((se(rve|t)|browse)(s|)|(is |)us(e(s|)|ing)( a(n|)|)|navigate( on|)) /gi,"use ").replace(/us to use/gi,"use of").replace(/(thi|3)rd( |)party/gi,"3rdp").replace(/understand/gi,"agree").replace(/(the |)partners/gi,"we").replace(/[ ]{2,}/g," "),we=[".dimmed",".tp-backdrop",".origin-sitestripe-message-text"],Ee="display:none!important;visibility:hidden!important;opacity:0!important;height:0!important;width:0!important;pointer-events:none!important;",xe=/(?:we (?:use (?:cooki (?:to (?:improve (?:you (?:exp use the site|shopping exp)|the service for you)|en(?:sure we give you the best exp|hance you visit to the site)|help the site work and to agree how it is used|optim site function)|click privacy and cooki to learn how)|3rdp cooki)|(?:request you allow cooki to access all of the|continue to use you data to persona|will collect data and use cooki for) ads|(?:o(?:bligated to inform you we|perate globally and) use|and 3rdp sett) cooki|made some changes to the privacy and cooki policy)|c(?:ooki (?:re(?:quired for the function and security of the sit|member you so give you a better servic)e|to (?:develop statistical info and show relevant ads|give you the best exp)|for persona ads|notification)|(?:lick i agree to accept cooki and go to|hoices regarding cooki on) the site|an we use you data to persona ads)|you (?:agree (?:to (?:the privacy policy including cooki policy|cooki being used)|we may use cooki for purposes)|(?:happy to receive all|consent to the) cooki)|t(?:he site (?:collect data and use cooki to agree how you use the site|requires cooki and 3rdp services to function properly)|o see the content enable cooki)|u(?:pdated the terms of use and the privacy policy to important info on how we use you data|se cooki to (?:analyse ads of the sit|know mor)e)|(?:site (?:you agree to the use of|use)|find out more on) cooki|a(?:fter being presented to the cooki info|ccept ads cooki)|ensure you see relevant ads by storing cooki on you device|by enabling cooki you will fund the journalism you enjoy|i accept 3rdp cooki used to show me persona|d like permission to use cooki to track)/i,Te=/(?:(?:wed like to send you notifications for the latest new|mind unblocking u)s|(?:it looks like you use ads block|sign up for the daily newslett)er|d(?:ont miss out on the biggest news and offers from|isable adblock)|g(?:et notifications when give you new followers|ive you adblock on)|(?:by turning off you ads blocker on the sit|ads nt why you her)e|t(?:urn (?:off you adblock|adblock off)|ry microsoft edge)|(?:continue to|you use) adblock|keep adblock on)/i,Le=/(?:c(?:o(?:okie noti(?:fication|ce) blocker|nfectionery|conut)|h(?:err(?:ies|y)|ocolate))|b(?:l(?:ock cookie noti(?:fication|ce)|ueberry)|en(?: cheshire|chesh))|s(?:earch(?:[_-]form|result)|oft and chewy|crumptious|ign in|ugar)|your submission requires a privacy policy url|menu[_-]item[_-]privacy[_-]policy|i(?:d="settingswrap|ngredient)|<input type="search"|r(?:aisin|ecipe)|t(?:offee|asty)|dessert|flour|oats)/i,Se=/(?:(?:js[_-]stream[_-]twee|post[_-]layou)t|e(?:mbedded[_-]app|vidon)|lo(?:gin[_-]entry|cation)|navbar[_-]loginform|authportal[_-]main|gecko[_-]single)/i,Ce=/(?:cookie(?:s[_-][_-]banner|[_-]consent)|footer[_-]tc[_-]privacy|(?:onetrus|promp)t|bottom[_-]notice|not[_-]accepted|us[_-]cookies)/i,Ie=/(?:bank accounts, (?:mortgages, loans & saving|savings, loans & mortgage)s|p(?:ersonal banking, personal finances & bank accounts|rivacy policy)|terms (?:of (?:servic|us)e|& conditions)|(?:create|new) account|online banking|register|signup|legal)/i,Me=/(?:your (?:account|profile)|completely legal|(?:sign|log)in|the register)/i,Ne=/(?:c(?:onsent(?:[_-]pref\.trustarc)?\.|lkde\.tradedoubler)|(?:redirects\.tradedoubler|youtube)\.|doubleclick\.net)/i,je=/(?:(?:digidip\.net\/visi|privacy\/consen)t|co(?:llectconsent|nsent\.html)|\/gdpr[_-]consent\/|\.oath\.)/i,He=/(?:s(?:tack(?:exchange|overflow|apps)|e(?:cure\.checkou|rverfaul)t|harepoint\.|uperuser)|m(?:a(?:il\.google|thoverflow)|essenger\.)|(?:(?:docs|keep)\.googl|offic)e|a(?:ccounts\.nintendo|skubuntu)|pa(?:rtner\.microsoft|ypal)|(?:facebook|github)\.|b(?:itbucket\.|ank)|web\.whatsapp.|regex|tesco)/i,Ae=/(?:\/cookie[_-]notice|register|legal|oauth)/i,$e=/(?:re(?:view our cookie policy|ad the policies)|cookie (?:european law|preferences)|i understand|your privacy|our cookies)/i,We=/(?:cookie p(?:references|olicy)|(?:use of cooki|her)e|privacy policy)/i,qe=/(?:spotlight|overlay)/i,Be=/(?:t(?:rust(?:(?:[_-])?arc|e[_-])|ealium)|(?:didom|cook)i|[_-]truste|iubenda|optanon|gdpr)/i,De=/(?:s(?:cript|tyle)|h(?:eader|tml)|article|body|link|main|jsl|nav)/i,Fe=/(?:(?:h(?:as[_-]cookie[_-]bann|eaderuniversalhead)|privacy[_-]toggle[_-]contain)er|mod[_-]navigation|entry[_-]content|ion[_-]page|vjs[_-]|nav)/i,Oe=/(?:c(?:ookie(?:[_-](?:(?:law[_-]info[_-]ba|disclaime)r|(?:[_-]h[_-]sublin|notic)e|consent[_-]alert)|acknowledgement|consentmodal)|li[_-](?:popupbar[_-]overlay|modal[_-]backdrop)|c(?:[_-]stop[_-]overlay|gtm[_-]wrapper|cwrpad)|(?:[_-]cookieaccep|aptify[_-]widge)t|mp(?:[_-]container[_-]id|box)|ybotcookie)|s(?:i(?:te[_-]message[_-][_-]first[_-]pv[_-]consent|gnup[_-]wall[_-]wrapper)|ncmp[_-]container)|g(?:dpr(?:[_-]co(?:ntent|okie)|content|sticky|form)|uce[_-]inline[_-]consent)|m(?:o(?:dal[_-][_-]agreements[_-][_-]cookie|l[_-]ads[_-]cmp)|sccbanner)|n(?:otice(?:[_-][_-]cookie|cookiescontent)|av[_-][_-]cookie)|t(?:ealium(?:[_-]cookies|gdpr)|ruste[_-](?:overlay|box))|f(?:ooter[_-]tc[_-]privacy|c[_-]consent[_-]root)|privacy[_-](?:prompt[_-]wrapper|content)|qc[_-]cmp[_-](?:persistent|ui)|data[_-]tracking[_-]opt[_-]in|eu(?:(?:[_-])?cookie|popup)|onetrust[_-]consent[_-]sdk|lnk[_-]c[_-]modal|ub[_-]emb[_-]|ad[_-]optly|bbccookies|yoyocookie)/i,Pe=/(?:p(?:ushcrew[_-]chrome[_-]style[_-]notification|opup[_-]subcription[_-]background|aywall[_-]container[_-]com|romotionalpopup)|d(?:ialog[_-]modal[_-]valuesurvey|ata[_-]newsletter[_-]floater)|e(?:mail[_-]newsletter[_-]dialog|ngagement[_-]banner)|su(?:bscribe[_-]modal[_-]container|rvey[_-]prompt)|(?:onesignal[_-]popov|mfp[_-]newslett)er|newsletter(?:[_-]signup[_-])?[_-]popup|adblock(?:[_-]notice|ermessag|modal)|fbs[_-]auth[_-][_-]adblock)/i,Re=/(?:we (?:use (?:cooki(?: (?:to (?:improve (?:you (?:exp use the site|shopping exp)|the service for you)|en(?:sure we give you the best exp|hance you visit to the site)|help the site work and to agree how it is used|optim site function)|click privacy and cooki to learn how))?|3rdp cooki)|co(?:llect data and use cooki for ads persona measurement|ntinue to use you data to persona ads)|(?:request you allow cooki to access all of the|will collect data and use cooki for) ads|(?:o(?:bligated to inform you we|perate globally and) use|and 3rdp sett) cooki|made some changes to the privacy and cooki policy)|c(?:o(?:oki (?:re(?:quired for the function and security of the sit|member you so give you a better servic)e|to (?:develop statistical info and show relevant ads|give you the best exp|persona)|o(?:r device identifiers|n you device)|for (?:persona ad|analytic)s|notification)|n(?:sent to the use of the tech|tinue to use the site))|ho(?:ices regarding cooki on the site|ose to see generic ads)|lick i agree to accept cooki and go to the site|an we use you data to persona ads)|t(?:o(?: (?:(?:give you ads for services you might lik|improve you exp on the sit)e|p(?:rovide you to site services and persona|ersona the) ads|see the content enable cooki)|out modifying you cooki setts)|he (?:site (?:collect data and use cooki to agree how you use the site|requires cooki and 3rdp services to function properly)|cooki (?:policy|we use))|ech (?:to collect and process data|like cooki))|you (?:a(?:gree (?:to (?:the (?:privacy (?:policy including cooki policy|setts)|cooki notice)|cooki being used)|we may use cooki for purposes)|ccept the cooki)|(?:happy to (?:receive all|the)|consent to the) cooki|privacy is important to us|may see ads less relevant)|u(?:se (?:cooki (?:to (?:measure site performance and usag|analyse ads of the sit|know mor)|on the sit)e|of cooki)|pdated the (?:terms of use and the privacy policy to important info on how we use you data|privacy policy))|a(?:(?:fter being presented to the cooki|llow the collection of) info|ds (?:activity to support the services|relevant to you)|gree to the changes we made|ccept ads cooki)|p(?:ro(?:vide (?:ads relevant to you interest|persona ad)s|cesses you data and use cooki visit)|erform site and ads analytics)|by (?:(?:use the s(?:ervices or clicking i agre|it)|continue to us)e|enabling cooki you will fund the journalism you enjoy)|m(?:ore (?:info on cooki|relevant ads)|easuring traffic and preferences|ay collect data)|f(?:or more info (?:check the privacy policy|on the cooki usage)|ind out more on cooki)|en(?:sure you see relevant ads by storing cooki on you device|gages in 3rdp persona)|site (?:(?:you agree to the use of|use) cooki|values you privacy)|i accept 3rdp cooki used to show me persona|d like permission to use cooki to track|g(?:ive you relevant ads|dpr)|review you privacy setts|navigat the site)/i,Ue=/(?:b(?:(?:a(?:rri|nn)e|utterba)r|ox)|c(?:o(?:mpliance|ntainer)|hoice)|a(?:nnounce|ction|lert|pp)|p(?:latform|rompt|opup)|m(?:(?:essa|s)g|odal)|di(?:sclos|alog)|(?:flyou|hos)t|overlay|warning|topbar|notif|use)/i,ze=/(?:co(?:nsent[_-]b(?:lackba|anne)r|okiescript[_-]injected)|origin[_-]global[_-]sitestripe|modal[_-](?:consen|hos)t)/i,Ve=["to improve you exp on the site","use cooki on the site","by use the services or clicking I agree","by use the site","navigat the site","provide persona ads","to persona the ads","may collect data","allow the collection of info","by continue to use","use cooki to measure site performance and usage","more relevant ads","ads relevant to you","gdpr","ads activity to support the services","engages in 3rdp persona","to provide you to site services and persona ads","consent to the use of the tech","perform site and ads analytics","tech to collect and process data","measuring traffic and preferences","you may see ads less relevant","continue to use the site","agree to the changes we made","you accept the cooki","cooki or device identifiers","the cooki policy","we use cooki","give you relevant ads","cooki to persona","use of cooki","toout modifying you cooki setts","cooki for analytics","more info on cooki","tech like cooki","you happy to the cooki","the cooki we use","cooki on you device","for more info on the cooki usage","you agree to the privacy setts","you agree to the cooki notice","you privacy is important to us","review you privacy setts","updated the privacy policy","provide ads relevant to you interests","to give you ads for services you might like","processes you data and use cooki visit","we collect data and use cooki for ads persona measurement","choose to see generic ads","site values you privacy","For more info check the privacy policy"],Ye=["#modal-host","#modal-consent","origin-global-sitestripe",".consent-banner","#cookiescript_injected","#consent_blackbar"],Ge=["cooki","gdpr","didomi","optanon","truste-","-truste","trustarc","trust-arc","iubenda","tealium","policy","privacy","cmpc","cookie-consent-text","close-cookie-consent"],Je=RegExp((()=>{const e=location.hostname;return""!==e?(t=/([a-z-0-9]{2,63}).([a-z.]{2,5})$/.exec(e),null===t?"the site":t[1]+(""!==t[2]?`(.${t[2]}|)`:"")).replace(/\./g,"\\.").replace(/\//g,"\\/"):"the site";var t})(),"gi"),Ke=Math.floor(1e7*Math.random()),Qe={h(e){let t=e.innerHTML;const o=e.childElementCount;if(1===o){const o=e.getElementsByTagName("*")[0];o.outerHTML.length===t.length&&(t=o.innerHTML)}return 6>o&&1e3>e.textContent.length&&2500>t.length?o>0?(t=t.replace(/<((s(ty|c|e))|d|t|(ar)).+?<\/((s(ty|c|e))|d|t|(ar)).+?>/gims,""),3*t.length<e.innerHTML.length?"":_e(t.replace(/(<.*?>)|(\n)/gims,""))):_e(t):""},t:e=>_e(e.textContent)};let Xe,Ze,et,tt,ot,it,nt,rt,st,at,ct,lt,ut,pt,dt,gt,mt,ht,ft,yt,vt,kt,bt,_t,wt=!0,Et=!1,xt=!1,Tt=!1,Lt=!1,St=!1,Ct=!1,It=!1,Mt=!1,Nt=0,jt=!1,Ht="",At="",$t=[],Wt=[],qt=location.href,Bt=b(qt,"://"),Dt=location.host,Ft=[],Ot=!1,Pt=!1,Rt=!1,Ut=!1,zt=!0,Vt=!0,Yt=!0,Gt=!1,Jt=document.title,Kt=!1,Qt=0,Xt=!1,Zt=3,eo=0,to=0,oo={},io={},no=0,ro=!1,so=!1;t?chrome.runtime.sendMessage({getURL:""},e=>{it=b(e,"://"),nt=it.split("/")[0],x(),w()}):(w(),chrome.runtime.onMessage.addListener((e,t,o)=>{if(void 0!==e.iframeElemList){function i(){no=0;for(let e in io)no+=io[e];O()}io[e.iframeElemList.split("i")[0]]=parseInt(e.iframeElemList.split("i")[1]),i(),clearTimeout(ft),ft=setTimeout(()=>{i()},2e3)}o()})),window.addEventListener("focus",T);