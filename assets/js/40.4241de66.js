(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{287:function(e,t,a){"use strict";a.r(t);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=a(6),n=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"server-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Server Setup")]),e._v(" "),a("blockquote",[a("p",[e._v("To get Directus working on most servers all you need to do is ensure that traffic is routed to the correct files. Let's take a look at some common examples below.")])]),e._v(" "),a("h2",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),a("h3",{attrs:{id:"mod-rewrite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mod-rewrite","aria-hidden":"true"}},[e._v("#")]),e._v(" mod_rewrite")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://httpd.apache.org/docs/current/mod/mod_rewrite.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("mod_rewrite")]),a("OutboundLink")],1),e._v(" is an Apache module that uses a ruled-based rewriting engine to rewrite requested URLs.")]),e._v(" "),a("p",[e._v("Directus API requires "),a("code",[e._v("mod_rewrite")]),e._v(" to be enabled on Apache, because it uses the URL rewriting to maps all requested URLs to an internal endpoint unless it matches an actual file in the filesystem.")]),e._v(" "),a("p",[e._v("The rewrite rules are include in Directus API inside the "),a("code",[e._v("public")]),e._v(" directory in a "),a("code",[e._v(".htaccess")]),e._v(" file that serve as the front controller for all the endpoints.")]),e._v(" "),a("h4",{attrs:{id:"install-mod-rewrite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-mod-rewrite","aria-hidden":"true"}},[e._v("#")]),e._v(" Install mod_rewrite")]),e._v(" "),a("p",[e._v("Apache include "),a("code",[e._v("mod_rewrite")]),e._v(" by default. If that's not the case, how to install it will depends on your system and apache version, and the best option will be to go to the "),a("a",{attrs:{href:"http://httpd.apache.org/docs/trunk/en/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compiling and Installing"),a("OutboundLink")],1),e._v(" section on Apache and tries to compile and install "),a("code",[e._v("mod_rewrite")]),e._v(" individually.")]),e._v(" "),a("p",[e._v("Apache has a tool called "),a("a",{attrs:{href:"https://httpd.apache.org/docs/2.4/programs/apxs.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("apxs")]),a("OutboundLink")],1),e._v(" (APache eXtenSion) for lets you build and install modules this is a good option to install new modules from source.")]),e._v(" "),a("h4",{attrs:{id:"enable-mod-rewrite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-mod-rewrite","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable mod_rewrite")]),e._v(" "),a("p",[e._v("There's different way to enable a module after being installed. On ubuntu-based distribution can be enabled using "),a("code",[e._v("a2enmod")]),e._v(" script.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("a2enmod rewrite\n")])])]),a("p",[e._v("Make sure to reload all apache configuration.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("service apache2 reload\n")])])]),a("p",[e._v("If you are not using a ubuntu-based distribution or "),a("code",[e._v("a2enmod")]),e._v(" is not available in your system, you can go to your apache configuration, on ubuntu-based system are usually located in "),a("code",[e._v("/etc/apache2/conf/httpd.conf")]),e._v(", and add a line to load the rewrite module.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LoadModule rewrite_module modules/mod_rewrite.so\n")])])]),a("p",[a("code",[e._v("rewrite_module")]),e._v(" is the module name and "),a("code",[e._v("modules/mod_rewrite.so")]),e._v(" is the path where the module file is located. In this case the module file is relative to the "),a("code",[e._v("ServerRoot")]),e._v(" configured in your "),a("code",[e._v("httpd.conf")])]),e._v(" "),a("h4",{attrs:{id:"check-if-mod-rewrite-is-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-if-mod-rewrite-is-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" Check if mod_rewrite is enabled")]),e._v(" "),a("p",[e._v("Using the command line you can execute: "),a("code",[e._v("apachectl -M | grep 'rewrite'")]),e._v(" and it will filter all installed modules that matches "),a("code",[e._v("rewrite")]),e._v(", if "),a("code",[e._v("rewrite_module")]),e._v(" is returned, congratulations you already have installed and enabled "),a("code",[e._v("mod_rewrite")]),e._v(" in your system.")]),e._v(" "),a("h3",{attrs:{id:"allowoverride"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowoverride","aria-hidden":"true"}},[e._v("#")]),e._v(" AllowOverride")]),e._v(" "),a("p",[e._v("Directus API comes with "),a("code",[e._v(".htaccess")]),e._v(" files for the required configuration. These "),a("code",[e._v(".htaccess")]),e._v(" won't work until the "),a("code",[e._v("AllowOverride")]),e._v(" directive is set within a Directory block.")]),e._v(" "),a("ol",[a("li",[e._v("Go to your Apache virtual host configuration")]),e._v(" "),a("li",[e._v("Create a "),a("code",[e._v("<Directory>")]),e._v(" block that points to Directus API root")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("AllowOverride All")]),e._v(" inside the "),a("code",[e._v("<Directory>")]),e._v(" block to allow all directives in "),a("code",[e._v(".htaccess")]),e._v(" including the "),a("code",[e._v("mod_rewrite")]),e._v(" directives.")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Directus "),a("code",[e._v(".htaccess")]),e._v(" actually uses "),a("code",[e._v("FileInfo")]),e._v(" for rewriting and "),a("code",[e._v("Options")]),e._v(" to following symlinks")])]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<VirtualHost *:80>\n    ServerAdmin admin@example.com\n    ServerName example.com\n    ServerAlias www.example.com\n    DocumentRoot /var/www/directus/public\n    ErrorLog ${APACHE_LOG_DIR}/error.log\n    CustomLog ${APACHE_LOG_DIR}/access.log combined\n\n    <Directory /var/www/directus>\n      AllowOverride All\n    </Directory>\n</VirtualHost>\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[a("code",[e._v(".htaccess")]),e._v(" is the default filename for the "),a("code",[e._v("AccessFileName")]),e._v(" directive.")])]),e._v(" "),a("h2",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" NGINX")]),e._v(" "),a("h3",{attrs:{id:"directus-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-conf","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("directus.conf")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('server {\n    listen 80;\n    \n    # Change to corresponding location\n    root /projects/directus/public;\n\n    # Change virtual host if needed\n    server_name directus.local;\n    \n    index index.html index.htm index.nginx-debian.html index.php;\n\n    # disable_symlinks if_not_owner;\n\n    location / {\n        try_files $uri $uri/ /index.php$args;\n    }\n\n    location /admin {\n        try_files $uri $uri/ /admin/index.html$args;\n    }\n\n    location /thumbnail {\n        try_files $uri $uri/ /thumbnail/index.php$args;\n    }\n\n    # Deny direct access to php files in extensions\n    location /extensions/.+\\.php$ {\n        deny all;\n    }\n\n    # All uploads files (originals) cached for a year\n    location ~* /uploads/([^/]+)/originals/(.*) {\n        add_header Cache-Control "max-age=31536000";\n    }\n\n    # Serve php, html and cgi files as text file\n    location ~* /uploads/.*\\.(php|phps|php5|htm|shtml|xhtml|cgi.+)?$ {\n        add_header Content-Type text/plain;\n    }\n\n    # Deny access to any file starting with .ht,\n    # including .htaccess and .htpasswd\n    location ~ /\\.ht {\n        deny all;\n    }\n\n    # pass PHP scripts to FastCGI server\n    #\n    location ~ \\.php$ {\n        include snippets/fastcgi-php.conf;\n    \n        # With php-fpm (or other unix sockets):\n        # fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;\n        # With php-cgi (or other tcp sockets):\n        fastcgi_pass 127.0.0.1:9000;\n        fastcgi_param   SCRIPT_FILENAME $document_root$fastcgi_script_name;\n    }\n\n}\n')])])]),a("h2",{attrs:{id:"caddy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caddy","aria-hidden":"true"}},[e._v("#")]),e._v(" Caddy")]),e._v(" "),a("p",[e._v("Coming soon.")])])},[],!1,null,null,null);n.options.__file="server-setup.md";t.default=n.exports}}]);