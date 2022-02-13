var W=Object.defineProperty;var H=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var V=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,v=(e,t)=>{for(var s in t||(t={}))P.call(t,s)&&V(e,s,t[s]);if(H)for(var s of H(t))q.call(t,s)&&V(e,s,t[s]);return e};import{r as y,o as u,c as B,w as g,a as p,b as O,d as a,t as w,n as C,e as F,f as x,g as f,h as Y,u as i,i as Z,j as k,k as A,S as K,W as h,C as m,l as G,m as J,p as Q,q as X,s as ee,v as te,V as se}from"./vendor.9e4d640b.js";const ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&o(_)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};ae();var ne=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s},E="/images/logo.png";const oe=["src"],N={props:{routeString:Object,name:String},setup(e){return(t,s)=>{const o=y("NavLink"),n=y("router-link");return u(),B(n,{to:e.routeString,custom:""},{default:g(({href:r,route:_,navigate:c,isActive:d,isExactActive:R})=>[p(o,{active:d,class:C({"w-full flex gap-1 items-center cursor-pointer":!0,"dark:hover:text-special_dark hover:text-special":!d}),href:r,onClick:c},{default:g(()=>[O(t.$slots,"default",{},()=>[a("img",{class:"text-red-500",src:"/images/"+e.name+".svg",alt:""},null,8,oe)]),a("div",{class:C(["font-bold",{underline:d}])},w(e.name),3)]),_:2},1032,["active","class","href","onClick"])]),_:3},8,["to"])}}},re={class:"flex flex-col px-5 py-5 gap-4 bg-card dark:bg-card_dark items-center w-72 filter drop-shadow underline-offset-4"},ce=a("img",{class:"block dark:hidden w-min",src:E,alt:""},null,-1),ie=a("img",{class:"hidden dark:block w-min",src:E,alt:""},null,-1),le={class:"flex flex-col gap-4 items-start"},de=a("div",{class:"text-3xl w-full text-center"},"FTM Stable",-1),ue={class:"flex flex-col gap-4 pl-4 items-start"},pe=a("svg",{class:"fill-current",width:"20",height:"20",viewBox:"0 0 20 20"},[a("path",{d:"M9.99219 17.6172C10.5312 17.6172 10.9609 17.2031 10.9609 16.6719V9.72656C11.7344 9.35938 12.2734 8.57031 12.2734 7.66406C12.2734 6.75781 11.7344 5.96875 10.9609 5.60156V3.46094C10.9609 2.95312 10.5156 2.53906 9.99219 2.53906C9.48438 2.53906 9.02344 2.95312 9.02344 3.46094V5.60156C8.25 5.96875 7.71875 6.75781 7.71875 7.66406C7.71875 8.5625 8.25 9.35938 9.02344 9.72656V16.6719C9.02344 17.1953 9.47656 17.6172 9.99219 17.6172ZM13.3516 12.4766C13.3516 13.3828 13.8828 14.1719 14.6562 14.5391V16.6875C14.6562 17.1953 15.1094 17.6172 15.625 17.6172C16.1562 17.6172 16.5938 17.2031 16.5938 16.6875V14.5391C17.3672 14.1719 17.9062 13.3906 17.9062 12.4766C17.9062 11.5703 17.3672 10.7812 16.5938 10.4141V3.47656C16.5938 2.95312 16.1484 2.53906 15.625 2.53906C15.1172 2.53906 14.6562 2.95312 14.6562 3.47656V10.4219C13.8828 10.7812 13.3516 11.5703 13.3516 12.4766ZM2.08594 12.4766C2.08594 13.3828 2.625 14.1719 3.39844 14.5391V16.6875C3.39844 17.1953 3.84375 17.6172 4.36719 17.6172C4.89844 17.6172 5.33594 17.2031 5.33594 16.6875V14.5391C6.10938 14.1719 6.64062 13.3906 6.64062 12.4766C6.64062 11.5703 6.10938 10.7812 5.33594 10.4219V3.47656C5.33594 2.95312 4.89062 2.53906 4.36719 2.53906C3.85938 2.53906 3.39844 2.95312 3.39844 3.47656V10.4141C2.625 10.7812 2.08594 11.5703 2.08594 12.4766ZM8.94531 7.66406C8.94531 7.08594 9.41406 6.61719 9.99219 6.61719C10.5938 6.61719 11.0469 7.08594 11.0469 7.66406C11.0469 8.25781 10.5938 8.71094 9.99219 8.71094C9.41406 8.71094 8.94531 8.25781 8.94531 7.66406ZM14.5781 12.4766C14.5781 11.8984 15.0469 11.4297 15.625 11.4297C16.2266 11.4297 16.6797 11.8984 16.6797 12.4766C16.6797 13.0703 16.2266 13.5312 15.625 13.5312C15.0469 13.5312 14.5781 13.0703 14.5781 12.4766ZM3.3125 12.4766C3.3125 11.8984 3.78125 11.4297 4.36719 11.4297C4.96094 11.4297 5.41406 11.8984 5.41406 12.4766C5.41406 13.0703 4.96094 13.5312 4.36719 13.5312C3.78125 13.5312 3.3125 13.0703 3.3125 12.4766Z"})],-1),fe=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})],-1),_e=a("a",{class:C({"w-full flex gap-1 items-center cursor-pointer dark:hover:text-special_dark hover:text-special":!0}),href:"https://spookyswap.finance/swap?outputCurrency=0xeA4Ae1d6E153Acff12F751BFC5F7537978Cb2b5C"},[a("svg",{class:"fill-current",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M5.80469 18.8984H16.0078C16.4766 18.8984 16.8203 18.5547 16.8203 18.0859C16.8203 17.6641 16.5391 17.3984 16.2031 17.2266C15.2656 16.7656 15.0859 15.3906 16.0781 14.4922C16.5469 14.0938 16.8125 13.7031 16.8125 12.9062V4.50781C16.8125 2.77344 15.8906 1.83594 14.1641 1.83594H5.82031C4.09375 1.83594 3.17188 2.76562 3.17188 4.50781V16.2578C3.17188 17.9688 4.09375 18.8984 5.80469 18.8984ZM13.9766 3.625C14.6797 3.625 15.0234 3.99219 15.0234 4.66406V12.6172C15.0234 12.9609 14.8281 13.1562 14.4766 13.1562H7.04688V3.625H13.9766ZM4.96094 13.3906V4.66406C4.96094 4.03125 5.25781 3.67188 5.875 3.63281V13.1562C5.52344 13.1797 5.22656 13.2578 4.96094 13.3906ZM8.45312 7.07031H13.6094C13.9297 7.07031 14.1953 6.80469 14.1953 6.48438C14.1953 6.16406 13.9297 5.89844 13.6094 5.89844H8.45312C8.125 5.89844 7.85938 6.16406 7.85938 6.48438C7.85938 6.80469 8.125 7.07031 8.45312 7.07031ZM8.45312 9.27344H12.3594C12.6797 9.27344 12.9453 9.00781 12.9453 8.67969C12.9453 8.35938 12.6797 8.09375 12.3594 8.09375H8.45312C8.125 8.09375 7.85938 8.35938 7.85938 8.67969C7.85938 9.00781 8.125 9.27344 8.45312 9.27344ZM6.11719 17.2734C5.25 17.2734 4.80469 16.7578 4.80469 16.0156C4.80469 15.3125 5.30469 14.7812 6.16406 14.7812H13.7969C13.875 14.7812 13.9531 14.7734 14.0234 14.7578C13.625 15.6016 13.6562 16.5312 14.0781 17.2734H6.11719Z"})]),a("div",{class:"font-bold"}," Buy ")],-1),j={setup(e){return F(()=>localStorage.getItem("dark_theme")=="true"),x({document}),(t,s)=>(u(),f("div",re,[ce,ie,a("div",le,[de,a("div",ue,[p(N,{class:"mt-4",name:"Dashboard",routeString:{name:"dashboard"}},{default:g(()=>[pe]),_:1}),p(N,{class:"mt-4",name:"Migrate",routeString:{name:"migrate"}},{default:g(()=>[fe]),_:1}),_e])])]))}},z=e=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},he={class:""},me=a("svg",{class:"text-text dark:text-text_dark fill-current",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M1.31738 6.05078H17.6826C18.21 6.05078 18.6143 5.62012 18.6143 5.10156C18.6143 4.57422 18.21 4.15234 17.6826 4.15234H1.31738C0.798828 4.15234 0.385742 4.58301 0.385742 5.10156C0.385742 5.61133 0.798828 6.05078 1.31738 6.05078ZM3.11035 10.6035H15.916C16.4434 10.6035 16.8477 10.1641 16.8477 9.6543C16.8477 9.12695 16.4434 8.70508 15.916 8.70508H3.11035C2.5918 8.70508 2.17871 9.13574 2.17871 9.6543C2.17871 10.1641 2.5918 10.6035 3.11035 10.6035ZM4.87695 15.1562H14.1494C14.6768 15.1562 15.0811 14.7168 15.0811 14.207C15.0811 13.6797 14.6768 13.249 14.1494 13.249H4.87695C4.3584 13.249 3.94531 13.6885 3.94531 14.207C3.94531 14.708 4.3584 15.1562 4.87695 15.1562Z"})],-1),ge=[me],we={key:0,class:"absolute w-full flex h-full top-0 left-0 z-30"},Ce={setup(e){const t=x({open:!1});return Y(s=>{console.log(s,"route ubpdate"),t.open=!1}),(s,o)=>(u(),f("div",he,[a("button",{class:"block lg:hidden button-class",onClick:o[0]||(o[0]=n=>i(t).open=!0)},ge),i(t).open?(u(),f("div",we,[p(j,{onClick:o[1]||(o[1]=n=>i(t).open=!1),class:"h-full"}),a("div",{onClick:o[2]||(o[2]=n=>i(t).open=!1),class:"w-full h-full inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})])):Z("",!0)]))}},ve={class:"flex p-4 items-center gap-2.5 w-full bg-opacity-0"},xe=a("div",{class:"flex-grow"},null,-1),be=a("button",{class:"hidden sm:block button-class flex gap-1"},[a("span",null,"$FTMS")],-1),ye={key:0,href:"https://metamask.io/download/",target:"_blank",rel:"noopener noreferrer",class:"button-class"},ke=a("svg",{class:"block dark:hidden text-text fill-current",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M13.875 13.0781C9.64844 13.0781 6.94531 10.4297 6.94531 6.19531C6.94531 5.32031 7.15625 4.07031 7.4375 3.42188C7.50781 3.24219 7.52344 3.13281 7.52344 3.05469C7.52344 2.84375 7.36719 2.60938 7.0625 2.60938C6.97656 2.60938 6.78906 2.63281 6.61719 2.69531C3.72656 3.85156 1.78906 6.96094 1.78906 10.2344C1.78906 14.8281 5.28906 18.1094 9.86719 18.1094C13.2344 18.1094 16.1484 16.0703 17.1172 13.5234C17.1875 13.3438 17.2031 13.1562 17.2031 13.0859C17.2031 12.7969 16.9609 12.6016 16.7422 12.6016C16.6406 12.6016 16.5547 12.625 16.4062 12.6719C15.8047 12.8672 14.8359 13.0781 13.875 13.0781Z"})],-1),Ae=a("svg",{class:"hidden dark:block text-text_dark fill-current",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M10.6797 2.53125C10.6797 2.16406 10.3672 1.85156 9.99219 1.85156C9.625 1.85156 9.3125 2.16406 9.3125 2.53125V4.17188C9.3125 4.53906 9.625 4.85156 9.99219 4.85156C10.3672 4.85156 10.6797 4.53906 10.6797 4.17188V2.53125ZM13.8516 5.50781C13.5938 5.77344 13.5938 6.21094 13.8516 6.46875C14.1172 6.73438 14.5547 6.74219 14.8203 6.46875L15.9844 5.30469C16.25 5.03906 16.25 4.60156 15.9844 4.33594C15.7266 4.07812 15.2891 4.07812 15.0312 4.33594L13.8516 5.50781ZM5.16406 6.46875C5.42969 6.73438 5.86719 6.73438 6.125 6.46875C6.39062 6.21875 6.39062 5.76562 6.13281 5.50781L4.96875 4.33594C4.71875 4.08594 4.27344 4.07812 4.00781 4.33594C3.75 4.59375 3.75 5.03906 4 5.29688L5.16406 6.46875ZM9.99219 6.34375C7.8125 6.34375 6.00781 8.14844 6.00781 10.3281C6.00781 12.5078 7.8125 14.3203 9.99219 14.3203C12.1641 14.3203 13.9688 12.5078 13.9688 10.3281C13.9688 8.14844 12.1641 6.34375 9.99219 6.34375ZM17.7656 11.0078C18.1406 11.0078 18.4531 10.6953 18.4531 10.3281C18.4531 9.96094 18.1406 9.64844 17.7656 9.64844H16.1328C15.7656 9.64844 15.4531 9.96094 15.4531 10.3281C15.4531 10.6953 15.7656 11.0078 16.1328 11.0078H17.7656ZM2.21875 9.64844C1.85156 9.64844 1.53906 9.96094 1.53906 10.3281C1.53906 10.6953 1.85156 11.0078 2.21875 11.0078H3.85156C4.22656 11.0078 4.53906 10.6953 4.53906 10.3281C4.53906 9.96094 4.22656 9.64844 3.85156 9.64844H2.21875ZM14.8125 14.1953C14.5547 13.9375 14.1172 13.9375 13.8516 14.1953C13.5938 14.4531 13.5938 14.8906 13.8516 15.1562L15.0312 16.3281C15.2891 16.5859 15.7266 16.5781 15.9844 16.3203C16.25 16.0625 16.25 15.625 15.9844 15.3594L14.8125 14.1953ZM4 15.3516C3.74219 15.6094 3.74219 16.0547 3.99219 16.3125C4.25 16.5703 4.69531 16.5781 4.96094 16.3203L6.125 15.1562C6.39062 14.8984 6.39062 14.4609 6.13281 14.1953C5.875 13.9375 5.42969 13.9375 5.16406 14.1953L4 15.3516ZM10.6797 16.4844C10.6797 16.1172 10.3672 15.8047 9.99219 15.8047C9.625 15.8047 9.3125 16.1172 9.3125 16.4844V18.125C9.3125 18.4922 9.625 18.8047 9.99219 18.8047C10.3672 18.8047 10.6797 18.4922 10.6797 18.125V16.4844Z"})],-1),Se=[ke,Ae],$e={setup(e){const t=k(),s=x({darkMode:localStorage.getItem("dark_theme")=="true",wallet:""}),o=c=>{s.darkMode=c,localStorage.setItem("dark_theme",c),z(c)},n=async()=>{t.dispatch("system/initializeWalletAddress")},r=()=>(s.wallet=t.getters["system/currentAddress"],s.wallet?s.wallet.substring(0,6)+"..."+s.wallet.substring(s.wallet.length-4,s.wallet.length):"Connect Wallet"),_=()=>typeof window.ethereum!="undefined";return(()=>{s.wallet=t.getters["system/currentAddress"]})(),(c,d)=>(u(),f("div",ve,[p(Ce,{class:"block lg:hidden"}),xe,be,_()?i(t).getters["system/currentAddress"]&&!i(t).getters["system/isInOperatingChain"]?(u(),f("button",{key:1,class:"button-class",onClick:d[0]||(d[0]=R=>i(t).dispatch("system/switchChain"))},"Switch to Fantom")):(u(),f("button",{key:2,class:"button-class",onClick:n},w(r()),1)):(u(),f("a",ye,"Metamask required")),a("button",{class:"button-class h-full",onClick:d[1]||(d[1]=R=>o(!i(s).darkMode))},Se)]))}};const Me={class:"relative flex min-h-screen w-full text-text dark:text-text_dark"},Ee={class:"flex flex-col gap-4 w-full z-10"},Ie={setup(e){const t={background:{},fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"push"},resize:!1},modes:{bubble:{distance:800,duration:2,opacity:.8,size:100},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},collisions:{enable:!0},move:{direction:"up",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:3}},detectRetina:!0};return(s,o)=>{const n=y("Particles"),r=y("router-view");return u(),f("div",Me,[p(j,{class:"hidden lg:block z-10"}),p(n,{class:"absolute object-cover max-h-screen",id:"tsparticles",particlesInit:s.particlesInit,particlesLoaded:s.particlesLoaded,style:{width:"400px"}},null,8,["particlesInit","particlesLoaded"]),p(n,{id:"tsparticles",particlesInit:s.particlesInit,particlesLoaded:s.particlesLoaded,options:t},null,8,["particlesInit","particlesLoaded"]),a("div",Ee,[p($e),p(r)])])}}};const Te={class:C({"font-bold text-text dark:text-text_dark":!0})},U={props:{text:String},setup(e){return(t,s)=>(u(),f("div",Te,w(t.$store.getters["system/isConnectedInOperatingChain"]?e.text:"N/A"),1))}},De={class:"rounded-xl hover:drop-shadow-xl max-w-sm bg-card dark:bg-card_dark flex flex-col items-center p-4"},Le={class:"text-xl"},S={props:{name:String,value:Number,noValue:Boolean},setup(e){const t=e,s=F(()=>new Intl.NumberFormat().format((t.value/1e6).toFixed(2)));return(o,n)=>(u(),f("div",De,[a("div",Le,w(e.name),1),e.noValue?Z("",!0):(u(),B(U,{key:0,class:"text-4xl",text:"$"+i(s)+" USDC"},null,8,["text"])),O(o.$slots,"default")]))}},I="0xfa",Re={method:"wallet_addEthereumChain",params:[{chainId:I,chainName:"Fantom",rpcUrls:["https://rpc.ftm.tools/"],blockExplorerUrls:["https://ftmscan.com/"],nativeCurrency:{name:"FTM",symbol:"FTM",decimals:18}}]},T=A("0x417Fc682065b4Fc9aB8dC2C70bd1c4Ce5faD5C7F");A("0xeA4Ae1d6E153Acff12F751BFC5F7537978Cb2b5C");const $=A("0x457aBdEc37318f7311d22fBD4C292acfb633b748"),D=A("0x75b2D7987A422998e3F4Bd4e199Dd19aF1e78b42"),L=["function balanceOf(address account) external view returns (uint256)","function allowance(address _owner, address spender) external view returns (uint256)","function approveMax(address spender) external returns (bool)"],M=["function totalDividends() public view returns (uint256)","function getUnpaidEarnings(address shareholder) public view returns (uint256)","function shares(address) public view returns (uint256, uint256, uint256)","function claimDividend(bool compound) external"],He=["function swap() external"],Ve=K.mixin({});var l={alerts:{error:(e="Ops, something went wrong")=>({title:e,icon:"error"}),success:(e="Wohoo")=>({title:e,icon:"success"}),toast:(e="",t="success")=>({title:e,icon:t,toast:!0,showConfirmButton:!1,showCancelButton:!1,timer:3e3,position:"top-end"})},fire:(e,t={})=>Ve.fire(v(v({},e),t))};const Be={class:"flex flex-col gap-28 justify-center items-center w-full p-3 sm:p-10"},Oe={class:"grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-800px"},Fe={class:"flex gap-4 items-center justify-center"},Ze=a("div",{class:"flex gap-4 h-full items-center justify-center"},[a("form",{action:"https://debank.com/profile/0xdc2a06f057ef6727b8e3917994e61addac732df8",target:"_blank",type:"button"},[a("button",{type:"submit",class:"px-5 mt-4 py-2.5 bg-special dark:bg-special_dark rounded text-text_button dark:text-button_dark"}," Check at DeBank")])],-1),Ne=a("div",{id:"dexscreener-embed"},[a("iframe",{src:"https://dexscreener.com/fantom/0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c?embed=1&theme=dark&trades=0"})],-1),je={setup(e){const t=k(),s=async o=>{const r=new h(window.ethereum).getSigner(),_=new m($,M,r);try{const c=await _.claimDividend(o),d=await c.wait();d.status==1?(await l.fire(l.alerts.toast("Successful transaction")),console.log("TRUE")):(console.log("FALSE"),await l.fire(l.alerts.toast("Transaction failed","error"))),console.log(d,c,"rak tak tak")}catch(c){console.log("vizame tuk"),console.log(c),await l.fire(l.alerts.toast("Transaction failed","error"))}t.dispatch("system/updateDashboardInfo")};return(o,n)=>(u(),f("div",Be,[a("div",Oe,[p(S,{class:"w-full justify-self-center",name:"Total Reward Distributed",value:i(t).getters["system/dashboard"].dividends},null,8,["value"]),p(S,{class:"w-full justify-self-center",name:"Your Total Rewards",value:i(t).getters["system/dashboard"].pendingRewards+i(t).getters["system/dashboard"].shares},null,8,["value"]),p(S,{class:"w-full justify-self-center",name:"Pending Rewards",value:i(t).getters["system/dashboard"].pendingRewards},{default:g(()=>[a("div",Fe,[a("button",{class:"px-5 mt-4 py-2.5 bg-special dark:bg-special_dark rounded text-text_button dark:text-button_dark",onClick:n[0]||(n[0]=r=>s(!1))},"Claim")])]),_:1},8,["value"]),p(S,{class:"w-full justify-self-center",name:"Treasury","no-value":""},{default:g(()=>[Ze]),_:1})]),Ne]))}};const ze={class:"flex flex-col gap-4 w-full text-text dark:text-text_dark"},Ue=a("div",{class:"flex w-full justify-between items-center"},[a("div",{class:"flex gap-2 items-center justify-center w-full"},[a("img",{class:"w-8 h-8",src:E,alt:""}),a("div",{class:"font-bold text-2xl"},"Migrate")])],-1),We={class:"flex flex-col gap-4"},Pe={class:"grid grid-cols-2 justify-center items-center mt-4 text-xl"},qe={class:"flex flex-col items-center w-full gap-1"},Ye=a("div",{class:"text-second dark:text-second_dark text-lg"},"Your $FTMS v1 Balance",-1),Ke=a("div",{class:"flex flex-col items-center w-full gap-1"},[a("div",{class:"text-second dark:text-second_dark text-lg"},"Swap Ratio"),a("div",{class:"font-bold"},"1:1")],-1),Ge={class:"flex flex-col gap-4 mt-4"},Je={class:"flex flex-col gap-4 mt-4"},Qe={class:"w-full flex justify-center"},Xe=["disabled"],et=["disabled"],tt={setup(e){const t=k();G(),J(),x({bond:{},redeem:!1});const s=async()=>{const r=new h(window.ethereum).getSigner(),_=new m(T,L,r);try{const c=await _.approveMax(D),d=await c.wait();d.status==1?(await l.fire(l.alerts.toast("Successfully approved")),console.log("TRUE")):(console.log("FALSE"),await l.fire(l.alerts.toast("Transaction failed","error"))),console.log(d,c,"rak tak tak")}catch(c){console.log("vizame tuk"),console.log(c),await l.fire(l.alerts.toast("Transaction failed","error"))}t.dispatch("system/getIsApproved")},o=async()=>{const r=new h(window.ethereum).getSigner(),_=new m(D,He,r);try{const c=await _.swap(),d=await c.wait();d.status==1?(await l.fire(l.alerts.toast("Successfully swapped")),console.log("TRUE")):(console.log("FALSE"),await l.fire(l.alerts.toast("Transaction failed","error"))),console.log(d,c,"rak tak tak")}catch(c){console.log(c),await l.fire(l.alerts.toast("Transaction failed","error"))}t.dispatch("system/updateMigrateInfo")};return(n,r)=>(u(),f("div",ze,[Ue,a("div",We,[a("div",Pe,[a("div",qe,[Ye,p(U,{text:(i(t).getters["system/balance"]/1e6).toFixed(0)},null,8,["text"])]),Ke]),a("div",Ge,[a("div",Je,[a("div",Qe,[i(t).getters["system/allowance"]!="0x00"?(u(),f("button",{key:0,onClick:o,class:C(["px-10 py-2.5 bg-special dark:bg-special_dark rounded text-text_button dark:text-button_dark",{"opacity-60":!i(t).getters["system/isConnectedInOperatingChain"]}]),disabled:!i(t).getters["system/isConnectedInOperatingChain"]},w("Swap"),10,Xe)):(u(),f("button",{key:1,onClick:s,class:C(["px-10 py-2.5 bg-special dark:bg-special_dark rounded text-text_button dark:text-button_dark",{"opacity-60":!i(t).getters["system/isConnectedInOperatingChain"]}]),disabled:!i(t).getters["system/isConnectedInOperatingChain"]},w("Approve"),10,et))])])])])]))}};const st={class:"flex justify-center"},at={class:"flex flex-col w-800px gap-10 p-3 md:p-10"},nt={class:"w-full rounded-xl bg-card dark:bg-card_dark flex flex-col p-6"},ot={setup(e){return k(),x({stake:!0}),(t,s)=>(u(),f("div",st,[a("div",at,[a("div",nt,[p(tt)])])]))}};var rt=ne(ot,[["__scopeId","data-v-5fa41d14"]]),ct=[{path:"/",name:"dashboard",component:je},{path:"/",name:"migrate",component:rt}];const it=Q({history:X(),routes:ct}),lt=async function({commit:e,dispatch:t,getters:s}){if(typeof window.ethereum=="undefined")return;const n=(await window.ethereum.request({method:"eth_requestAccounts"}))[0];e("SET_CURRENT_ADDRESS",n);const r=await ethereum.request({method:"eth_chainId"});e("SET_CURRENT_CHAIN",r),console.log(n,r,"init"),t("updateMigrateInfo"),t("updateDashboardInfo")},dt=async({state:e})=>{if(typeof window.ethereum!="undefined")try{console.log(e),await ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:I}]})}catch(t){if(t.code===4902)try{await ethereum.request(Re)}catch(s){console.log(s)}console.log(t)}},ut=async({getters:e,commit:t})=>{if(typeof window.ethereum=="undefined")return;const s=new h(window.ethereum),n=await new m(T,L,s).allowance(e.currentAddress,D);console.log(n,n._hex,"allowance"),t("SET_ALLOWANCE",n._hex)},pt=async({getters:e,commit:t})=>{const s=new h(window.ethereum),n=await new m(T,L,s).balanceOf(e.currentAddress);console.log(n,"balance"),t("SET_BALANCE",n)},ft=async({getters:e,dispatch:t,commit:s})=>{typeof window.ethereum!="undefined"&&(!e.isConnectedInOperatingChain||(await pt({getters:e,commit:s}),t("getIsApproved")))},_t=async({commit:e})=>{const t=new h(window.ethereum),o=await new m($,M,t).totalDividends();e("SET_DASHBOARD",{dividends:parseInt(o._hex,16)}),console.log("dividends",parseInt(o._hex,16))},ht=async({commit:e,getters:t})=>{const s=new h(window.ethereum),n=await new m($,M,s).getUnpaidEarnings(t.currentAddress);e("SET_DASHBOARD",{pendingRewards:parseInt(n._hex,16)})},mt=async({commit:e,getters:t})=>{const s=new h(window.ethereum),n=await new m($,M,s).shares(t.currentAddress);e("SET_DASHBOARD",{shares:parseInt(n[2]._hex,16)})},gt=async e=>{typeof window.ethereum!="undefined"&&(!e.getters.isConnectedInOperatingChain||(_t(e),ht(e),mt(e)))};var wt={initializeWalletAddress:lt,switchChain:dt,updateMigrateInfo:ft,getIsApproved:ut,updateDashboardInfo:gt};const Ct=function(e,t){e.currentAddress=t},vt=function(e,t){e.balance=t},xt=function(e,t){e.currentChain=t},bt=(e,t)=>{e.allowance=t},yt=(e,t)=>{e.dashboard=v(v({},e.dashboard),t)};var kt={SET_CURRENT_ADDRESS:Ct,SET_BALANCE:vt,SET_CURRENT_CHAIN:xt,SET_ALLOWANCE:bt,SET_DASHBOARD:yt},At={state:{currentAddress:null,balance:"",allowance:"0x00",currentChain:-1,dashboard:{allowance:"0x00"},bonds:[{name:"ICE-MIM LP",img:"/images/logo.png",price:"$1.32",roi:"-14.36%",purchased:"$873,200.94"},{name:"ICE-MIM LP",img:"/images/logo.png",price:"$1.32",roi:"-14.36%",purchased:"$873,200.94"}]},getters:{currentAddress:e=>e.currentAddress,balance:e=>e.balance,bonds:e=>e.bonds,currentChain:e=>e.currentAddress,isInOperatingChain:e=>e.currentChain==I,isConnectedInOperatingChain:(e,t)=>!!t.currentAddress&&!!t.isInOperatingChain,allowance:e=>e.allowance,dashboard:e=>e.dashboard},actions:wt,mutations:kt,namespaced:!0},b=ee({modules:{system:At}});const St=te(Ie);z(Math.random()<.5);b.dispatch("system/initializeWalletAddress");typeof window.ethereum!="undefined"&&(window.ethereum.on("accountsChanged",e=>{b.commit("system/SET_CURRENT_ADDRESS",""),b.dispatch("system/initializeWalletAddress")}),window.ethereum.on("chainChanged",e=>{b.dispatch("system/initializeWalletAddress")}));St.use(se).use(it).use(b).mount("#app");
