(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{250:function(t,a,e){"use strict";e.r(a);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=e(6),o=Object(n.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h1",{attrs:{id:"internationalization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internationalization","aria-hidden":"true"}},[t._v("#")]),t._v(" Internationalization")]),t._v(" "),e("blockquote",[e("p",[t._v("Directus is a platform created and used by people all over the world. Not only does Directus allow you to easily author and manage multilingual content, the App itself can also be made available in any language.")])]),t._v(" "),e("h2",{attrs:{id:"multilingual-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multilingual-app","aria-hidden":"true"}},[t._v("#")]),t._v(" Multilingual App")]),t._v(" "),e("p",[t._v("Directus supports internationalization across the entire suite. All collections, fields, settings, app text, and extensions can be offered in any number of languages.")]),t._v(" "),e("h3",{attrs:{id:"core-app-translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-app-translations","aria-hidden":"true"}},[t._v("#")]),t._v(" Core App Translations")]),t._v(" "),e("p",[t._v("The app uses "),e("a",{attrs:{href:"https://github.com/directus/app/tree/master/src/lang/locales",target:"_blank",rel:"noopener noreferrer"}},[t._v("locale files"),e("OutboundLink")],1),t._v(" for all text in the core codebase. One of the easiest and most helpful contributions you can make to Directus is adding support for another locale. Anyone can do it in a few simple steps:")]),t._v(" "),e("h4",{attrs:{id:"adding-new-languages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-languages","aria-hidden":"true"}},[t._v("#")]),t._v(" Adding New Languages")]),t._v(" "),e("ol",[e("li",[t._v("Duplicate the current "),e("a",{attrs:{href:"https://github.com/directus/app/blob/master/src/lang/locales/en-US.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("English locale file"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Rename it to a new "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Language_localisation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO language tag"),e("OutboundLink")],1),t._v(" (eg: "),e("code",[t._v("nl-NL.js")]),t._v(")")]),t._v(" "),e("li",[t._v("Translate the strings (everything in quotes) to the new language")]),t._v(" "),e("li",[t._v("Send us the file as a Pull Request")])]),t._v(" "),e("p",[t._v("If everything looks good we'll merge it in and mention you in the release notes!")]),t._v(" "),e("h3",{attrs:{id:"schema-translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema-translations","aria-hidden":"true"}},[t._v("#")]),t._v(" Schema Translations")]),t._v(" "),e("p",[t._v("One of the key concpets of Directus is "),e("router-link",{attrs:{to:"/guides/database.html#database-mirroring"}},[t._v("database mirroring")]),t._v(". Since the Collections and Fields of Directus are custom to your project, we can't include those in our core translation files. Instead, we've created JSON translation options at the schema level. This allows admins to provide translations for the names within their database architecture using: "),e("code",[t._v("directus_collections.translation")]),t._v(" and "),e("code",[t._v("directus_fields.translation")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"en-US"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"My Collection"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"nl-NL"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Mijn Collectie"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("API Field Keys")]),t._v(" "),e("p",[t._v("Regardless of your Collection and Field translations, the API always uses the actual column name for keys in responses.")])]),t._v(" "),e("h3",{attrs:{id:"extension-translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extension-translations","aria-hidden":"true"}},[t._v("#")]),t._v(" Extension Translations")]),t._v(" "),e("p",[t._v("Extensions can provide their own self-contained translations to extend those available within the core app. The "),e("code",[t._v("meta.json")]),t._v(" file of each extension has a "),e("code",[t._v("translation")]),t._v(" key that allows you to add new translations for use in the system.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token property"}},[t._v('"translation"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"en-US"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"color"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Color"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"palette"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Palette"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"palette_comment"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Add color options as hex values"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"nl-NL"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"color"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Kleur"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"palette"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Palet"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"palette_comment"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Voeg kleur keuzes toe als hex waardes"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("To avoid conflicts between packages, extension translations are namespaced as "),e("code",[t._v("<ext-type>-<name>-<string>")]),t._v(". To use the translations in the Color Interface example above, you would use "),e("code",[t._v("$t('interfaces-color-palette_only')")]),t._v(".")]),t._v(" "),e("p",[t._v("You can even use the translations in the "),e("code",[t._v("meta.json")]),t._v(" to translate values "),e("em",[t._v("in")]),t._v(" that same "),e("code",[t._v("meta.json")]),t._v(" key. So meta! This is especially useful to add translatable names for the extension and its options.")]),t._v(" "),e("h3",{attrs:{id:"rendering-translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rendering-translations","aria-hidden":"true"}},[t._v("#")]),t._v(" Rendering Translations")]),t._v(" "),e("p",[t._v("The core codebase uses the "),e("a",{attrs:{href:"https://github.com/kazupon/vue-i18n",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n"),e("OutboundLink")],1),t._v(" plugin to manage the translations across the platform. The language files and the init code are located in the "),e("code",[t._v("/src/lang/")]),t._v(" folder of the app repo. The plugin contains a "),e("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bunch of methods"),e("OutboundLink")],1),t._v(" to render these translations.")]),t._v(" "),e("p",[t._v("The one that is used most often is "),e("code",[t._v("$t")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('collections') }}"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"multilingual-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multilingual-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Multilingual API")]),t._v(" "),e("p",[t._v("Once you have your multilingual content in the database, you can then fetch it using the "),e("router-link",{attrs:{to:"/api-reference/reference.html#language"}},[t._v("API's "),e("code",[t._v("lang")]),t._v(" parameter")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"content-translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-translations","aria-hidden":"true"}},[t._v("#")]),t._v(" Content Translations")]),t._v(" "),e("p",[t._v("Directus uses a "),e("code",[t._v("translations")]),t._v(" interface to allow for managing content in as many languages as needed. Instead of simply creating new fields for each language, this interface stores translations relationally so your forms are not muddled with duplicate fields for each language. This also means that language-agnostic data such as dates or toggles can remain within the parent item.")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"/guides/relationships.html#translations"}},[t._v("Learn how to setup the Translations Interface")])],1),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Custom Interfaces")]),t._v(" "),e("p",[t._v("Because the Directus interface system is modular and extensible you can easily create your own "),e("router-link",{attrs:{to:"/extensions/interfaces.html"}},[t._v("custom interfaces")]),t._v(" with the "),e("code",[t._v("translation")]),t._v(" field type.")],1)])])},[],!1,null,null,null);o.options.__file="i18n.md";a.default=o.exports}}]);