(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{262:function(t,s,e){"use strict";e.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=e(6),o=Object(a.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h1",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Global events should be used only as a last resort when working with "),e("router-link",{attrs:{to:"./store.html"}},[t._v("the store")]),t._v(" or regular Vue events between child and parent components doesn't work for your usecase.")],1)]),t._v(" "),e("p",[t._v("The Directus app has a global event-bus you can use to send messages across the system. Right now, the only global event that's being used in this fashion is "),e("code",[t._v("error")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("The EventBus can be imported directly from the "),e("code",[t._v("./events/index.js")]),t._v(" file, or can be used in "),e("code",[t._v("this.$events")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" EventBus "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"./events/"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEventBus"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("on")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"event"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handlerFunction"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEventBus"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("off")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"event"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handlerFunction"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEventBus"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("once")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"event"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handlerFunction"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEventBus"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("emit")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"event"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"value"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"creating-a-new-global-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-global-event","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating a new global event")]),t._v(" "),e("p",[t._v("You should put all event handlers in the "),e("code",[t._v("/events")]),t._v(" folder and put all "),e("code",[t._v("EventBus.on")]),t._v(" statements in "),e("code",[t._v("./events/index.js")]),t._v(". It's near impossible to keep track of all global events if you don't.")]),t._v(" "),e("p",[t._v("If for whatever reason you need to listen to a global event from within a component, please add a note to the "),e("code",[t._v("./events/index.js")]),t._v(" file so we can keep track of when and why an event is used.")]),t._v(" "),e("h2",{attrs:{id:"used-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#used-events","aria-hidden":"true"}},[t._v("#")]),t._v(" Used Events")]),t._v(" "),e("p",[t._v("The following events are globally in use:")]),t._v(" "),e("h3",{attrs:{id:"error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error","aria-hidden":"true"}},[t._v("#")]),t._v(" Error")]),t._v(" "),e("h4",{attrs:{id:"when"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when","aria-hidden":"true"}},[t._v("#")]),t._v(" When")]),t._v(" "),e("p",[t._v("Something went wrong somewhere in the system")]),t._v(" "),e("h4",{attrs:{id:"what"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what","aria-hidden":"true"}},[t._v("#")]),t._v(" What")]),t._v(" "),e("p",[t._v("The global parent app will console.error the error and optionally show a notification to the user")]),t._v(" "),e("h4",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("notify")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Show a notification to the user")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("[String]")]),t._v(" "),e("td",[t._v("$t('something_went_wrong')")]),t._v(" "),e("td",[t._v("Message to show in the console / notification")])]),t._v(" "),e("tr",[e("td",[t._v("error")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("The error stacktrace or whatever error you want logged")])])])])])},[],!1,null,null,null);o.options.__file="events.md";s.default=o.exports}}]);