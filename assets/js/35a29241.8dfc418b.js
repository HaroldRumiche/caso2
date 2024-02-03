"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[764],{4957:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>t});var s=n(5893),r=n(1151);const l={sidebar_position:1},c="Script local para linux",i={id:"instalacion/local",title:"Script local para linux",description:"Linux | Valet",source:"@site/docs/instalacion/local.md",sourceDirName:"instalacion",slug:"/instalacion/local",permalink:"/caso2/instalacion/local",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Manual",permalink:"/caso2/category/manual"},next:{title:"Instalar facturador",permalink:"/caso2/instalacion/factura"}},o={},t=[{value:"Linux | Valet",id:"linux--valet",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"script-local-para-linux",children:"Script local para linux"}),"\n",(0,s.jsx)(a.h2,{id:"linux--valet",children:"Linux | Valet"}),"\n",(0,s.jsx)(a.p,{children:'Si desea implementar sobre un servidor local Linux "desde cero" debe:'}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Contar con acceso root"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Instalar php 7.2 y todas las librer\xedas requeridas por el aplicativo y Laravel"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Instalar Git, Curl, Composer"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Ubuntu no cuenta con la versi\xf3n 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalaci\xf3n, ellos son:"}),"\n",(0,s.jsx)(a.p,{children:"Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get update\n"})}),"\n",(0,s.jsx)(a.p,{children:"Para poder agregar un PPA, ejecute los siguientes:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get install software-properties-common\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get install python-software-properties\n"})}),"\n",(0,s.jsx)(a.p,{children:"Para agregar el PPA, en algunos casos solicitar\xe1 confirmar con enter:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"add-apt-repository ppa:ondrej/php\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get update\n"})}),"\n",(0,s.jsx)(a.p,{children:"Procedemos a Instalar PHP, aunque se instalar algunas librer\xedas junto con PHP, se agregan para asegurar la instalaci\xf3n:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt\n"})}),"\n",(0,s.jsx)(a.p,{children:"Instalamos Mysql, phpmyadmin opcional:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin\n"})}),"\n",(0,s.jsx)(a.p,{children:"Se le solicitar\xe1 contrase\xf1a dos veces, con su confirmaci\xf3n, tanto para mysql como para phpmyadmin."}),"\n",(0,s.jsx)(a.p,{children:"Instalamos Curl y Git:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get install git\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get install curl\n"})}),"\n",(0,s.jsx)(a.p,{children:"Luego se procede a instalar Composer:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt-get install composer\n"})}),"\n",(0,s.jsx)(a.p,{children:"Dar permisos de lectura y escritura a la carpeta composer:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"chmod -R 777 ~/.composer\n"})}),"\n",(0,s.jsx)(a.p,{children:"Instalar librer\xedas cpriego de Valet:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"composer global require cpriego/valet-linux\n"})}),"\n",(0,s.jsx)(a.p,{children:"Ir a carpeta home /.profile y a\xf1adir la siguiente l\xednea al final del documento y guardar:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"nano ~/.profile\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'PATH= "HOME/.composer/vendor/bin:$PATH"\n'})}),"\n",(0,s.jsx)(a.p,{children:"Luego ejecutar en terminal:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"source ~/.profile\n"})}),"\n",(0,s.jsx)(a.p,{children:"Instalar las siguientes librer\xedas:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt install network-maneger libnss3-tools jq xsel\n"})}),"\n",(0,s.jsx)(a.p,{children:"Ya en este punto el sistema se encuentra listo para instalar Valet, pero antes debe asegurarse de tener libre el puerto :80. Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto."}),"\n",(0,s.jsx)(a.p,{children:"Detener servicios de apache2 si lo tienes instalado:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"services apache2 stop\n"})}),"\n",(0,s.jsx)(a.p,{children:"Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"apt install nginx\n"})}),"\n",(0,s.jsx)(a.p,{children:"Verificar que el servidor de nginx se est\xe1 ejecutando correctamente:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"systemctl status nginx\n"})}),"\n",(0,s.jsx)(a.p,{children:"Si todo est\xe1 ok instalar valet:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"valet install\n"})}),"\n",(0,s.jsx)(a.p,{children:"Con valet podemos tener nuestro c\xf3digo en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"mkdir ~/code\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"cd code\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"bashvalet park\n"})}),"\n",(0,s.jsx)(a.p,{children:"Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"git clone https://gitlab.com/b.mendoza/facturadorpro3.git\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Esto crear\xe1 una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con ",(0,s.jsx)(a.code,{children:"cd facturadorpro3"}),", dentro de ella puede ejecutar lo siguiente para configurar el archivo .env:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,s.jsx)(a.p,{children:"Donde APP_URL_BASE corresponde a su dominio, DB_DATABASE ser\xe1 el nombre que le de a la base de datos principal, DB_USERNAME y DB_PASSWORD equivalen al usuario creado anteriormente en la instalaci\xf3n de mysql."}),"\n",(0,s.jsx)(a.p,{children:"Seguidamente:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"php artisan key:generate\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"composer dump-autoload\n"})}),"\n",(0,s.jsx)(a.p,{children:"Luego deber\xe1 registrar la base de datos mediante phpmyadmin, accediendo a la ruta sudominio.com/phpmyadmin con el usuario root y contrase\xf1a agregada en la instalaci\xf3n."}),"\n",(0,s.jsx)(a.p,{children:"Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"composer install\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"php artisan migrate --seed\n"})}),"\n",(0,s.jsx)(a.p,{children:"Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrar\xe1 la base de datos creada y la derecha las tablas generadas."}),"\n",(0,s.jsx)(a.p,{children:"Con estos pasos podr\xe1 observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"chmod -R 755 storage\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"chmod -R 755 bootstrap/cache\n"})}),"\n",(0,s.jsx)(a.p,{children:"Tambi\xe9n es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"bashphp artisan storage:link\n"})}),"\n",(0,s.jsx)(a.p,{children:"Si todo se realiz\xf3 correctamente, ya tendr\xe1 las tablas del usuario principal creadas, y podr\xe1 acceder mediante la web, al proyecto."}),"\n",(0,s.jsx)(a.h1,{id:"accesos",children:"Accesos:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"Facturadorpro3.test",children:"Facturadorpro3.test"})}),"\n",(0,s.jsxs)(a.li,{children:["Usuario: ",(0,s.jsx)(a.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"})]}),"\n",(0,s.jsx)(a.li,{children:"Contrase\xf1a: 123456"}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>c});var s=n(7294);const r={},l=s.createContext(r);function c(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);