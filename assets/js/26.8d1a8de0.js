(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{266:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(6),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"helpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helpers","aria-hidden":"true"}},[t._v("#")]),t._v(" Helpers")]),t._v(" "),a("blockquote",[a("p",[t._v("Utility functions and microlibraries that are being used across the App are being stored and managed in the "),a("code",[t._v("/helpers")]),t._v(" folder. Every function is in a separate file, and is being bundled into "),a("code",[t._v("this.$helpers")]),t._v(" in the "),a("code",[t._v("/helpers/index.js")]),t._v(" file.")])]),t._v(" "),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("h3",{attrs:{id:"title-formatter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title-formatter","aria-hidden":"true"}},[t._v("#")]),t._v(" Title Formatter")]),t._v(" "),a("p",[t._v("Most (raw) values in Directus are being displayed in title case. We try to prevent showing users raw (db) names like "),a("code",[t._v("image_gallery")]),t._v(', instead we want to show "Image Gallery". This formatter function is available to all Vue components. The function is available in the '),a("code",[t._v("$helper")]),t._v(" directive with the method name "),a("code",[t._v("formatTitle")]),t._v(":")]),t._v(" "),a("blockquote",[a("p",[t._v("This package converts any string into title case. This means only using capital letters for the principal words. Articles, conjunctions, and prepositions do not get capital letters unless they start the title.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("formatTitle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"hello_world"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Hello World")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("formatTitle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"iphone_storageSolution"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// iPhone Storage Solution")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("formatTitle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'snowWhiteAndTheSevenDwarfs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Snow White and the Seven Dwarfs")]),t._v("\n")])])]),a("p",[t._v("This function is alternatively available as a stand-alone npm package: "),a("a",{attrs:{href:"https://npmjs.com/@directus/format-title",target:"_blank",rel:"noopener noreferrer"}},[t._v("@directus/format-title"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date","aria-hidden":"true"}},[t._v("#")]),t._v(" Date")]),t._v(" "),a("p",[t._v("Convert SQL datetime string to JavaScript Date object, or vise versa:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sqlToDate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-19 15:36:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Date")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dateToSql")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// => "2018-07-19 15:36:00"')]),t._v("\n")])])]),a("h3",{attrs:{id:"componentexists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentexists","aria-hidden":"true"}},[t._v("#")]),t._v(" componentExists")]),t._v(" "),a("p",[t._v("Check if a component is registered in the global Vue instance")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("componentExists")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"v-checkbox"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h3",{attrs:{id:"formatfilters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatfilters","aria-hidden":"true"}},[t._v("#")]),t._v(" formatFilters")]),t._v(" "),a("p",[t._v("The API uses filters in the URL in a URL-safe syntax: "),a("code",[t._v("filters[field][operator]=value")]),t._v(". While this works great in the URL, it's not the most useful to process and use in JavaScript, for example when rendering the filter on the listing view. In order work with filters more efficiently, the app uses a proprietary JSON format for filters:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"field"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"age"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"operator"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"eq"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"value"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"22"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("formatFilters")]),t._v(" helper function converts that format to the API readable format:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" filters "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    field"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"age"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    operator"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"eq"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"22"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("formatFilters")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filters"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => filters[age][eq]=22")]),t._v("\n")])])]),a("h2",{attrs:{id:"micro-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#micro-libraries","aria-hidden":"true"}},[t._v("#")]),t._v(" Micro Libraries")]),t._v(" "),a("h3",{attrs:{id:"micromustache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#micromustache","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/micromustache",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("micromustache")]),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("String interpolation using an object.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  first"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Michael'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  last"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Jackson'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("micromustache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Search for {{first}} {{ last }} songs!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" person"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Search for Michael Jackson songs!")]),t._v("\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('this.$helpers.micromustache.render(\n  "Hello {{text}}!",\n  { text: "World" }\n);\n')])])]),a("h3",{attrs:{id:"shortid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shortid","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/shortid",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("shortid")]),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("ShortId creates amazingly short non-sequential url-friendly unique ids. Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shortid"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("generate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => PPBqWA9")]),t._v("\n")])])]),a("h3",{attrs:{id:"date-fns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-fns","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/date-fns",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("date-fns")]),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$helpers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dateFns"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);r.options.__file="helpers.md";s.default=r.exports}}]);