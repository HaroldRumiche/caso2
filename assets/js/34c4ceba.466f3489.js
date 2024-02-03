"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[864],{2672:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(5893),s=a(1151);const i={sidebar_position:2},t="Instalar facturador",l={id:"instalacion/factura",title:"Instalar facturador",description:"Docker | Linux | SSL Externo",source:"@site/docs/instalacion/factura.md",sourceDirName:"instalacion",slug:"/instalacion/factura",permalink:"/caso2/instalacion/factura",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Script local para linux",permalink:"/caso2/instalacion/local"},next:{title:"Script para Linux",permalink:"/caso2/instalacion/linux"}},o={},c=[{value:"Docker | Linux | SSL Externo",id:"docker--linux--ssl-externo",level:2},{value:"Pasos",id:"pasos",level:2},{value:"Importante",id:"importante",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"instalar-facturador",children:"Instalar facturador"}),"\n",(0,r.jsx)(n.h2,{id:"docker--linux--ssl-externo",children:"Docker | Linux | SSL Externo"}),"\n",(0,r.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Para instalar debe ejecutar el script evitando instalar el SSL, le ser\xe1 consultado en el proceso y deber\xe1 ingresar "n".'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Finalizada la instalaci\xf3n debe dirigirse a la ruta de instalaci\xf3n:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /root/facturadorpro31/\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Debe editar el archivo .env:\r\n",(0,r.jsx)(n.code,{children:"nano .env"}),"\r\nDentro del editor, ubique los par\xe1metros y c\xe1mbielos:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Antes:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"APP_URL=http://${APP_URL_BASE}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"FORCE_HTTPS=false\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Despu\xe9s:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"APP_URL=https://${APP_URL_BASE}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"FORCE_HTTPS=true\n"})}),"\n",(0,r.jsx)(n.p,{children:"Una vez finalizado, guarde y salga del editor."}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n:\r\n",(0,r.jsx)(n.code,{children:"php artisan config:Cache"}),"\r\nCon eso habr\xe1 completado el lado de la herramienta. En ese momento, hasta no tener un SSL configurado no podr\xe1 acceder a la herramienta."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"importante",children:"Importante"}),"\n",(0,r.jsx)(n.p,{children:"Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>t});var r=a(7294);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);