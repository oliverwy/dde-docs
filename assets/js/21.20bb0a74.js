(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{415:function(a,e,s){"use strict";s.r(e);var t=s(46),l=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("strong",[a._v("DTK加载翻译文件")])]),a._v(" "),s("p",[s("code",[a._v("DTK")]),a._v("加载翻译文件的方式是通过"),s("code",[a._v("bool DApplication::loadTranslator(QList<QLocale> localeFallback)")]),a._v("函数实现的，"),s("code",[a._v("localeFallback")]),a._v("的默认参数是"),s("code",[a._v("QList<QLocale>() << QLocale::system()")]),a._v("，默认存放路径一般在系统路径和当前路径中。")]),a._v(" "),s("p",[a._v("比如我们的UOS有3个")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("“/home/deepin/.local/share/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ApplicationName")]),a._v("$/translations”,\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/usr/local/share/'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ApplicationName")]),a._v('$/translations"')]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/user/share/'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ApplicationName")]),a._v('$/translations"')]),a._v(",\n")])])]),s("p",[a._v("其中"),s("code",[a._v("$ApplicationName$")]),a._v("表示的是相应的应用程序名，如"),s("code",[a._v("dde-file-manager")]),a._v("的翻译文件可以放在")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("“/home/deepin/.local/share/dde-file-manager/translations”,\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/usr/local/share/dde-file-manager/translations"')]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/user/share/dde-file-manager/translations"')]),a._v(",\n")])])]),s("p",[a._v("以及和"),s("code",[a._v("dde-file-manager")]),a._v("可执行程序同目录的"),s("code",[a._v("“translations”")]),a._v("下。\n当然，我们也可以自定义翻译文件的路径，这就需要继承"),s("code",[a._v("DApplication")]),a._v("类并重写"),s("code",[a._v("bool")]),a._v(" "),s("code",[a._v("DApplication::loadTranslator(QList<QLocale> localeFallback)")]),a._v("函数。在重写"),s("code",[a._v("loadTranslator")]),a._v("时需要先调用"),s("code",[a._v("DApplication::loadTranslator")]),a._v("。")])])}),[],!1,null,null,null);e.default=l.exports}}]);