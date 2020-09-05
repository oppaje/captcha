(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/setup/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/setup/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ext_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ext-components */ "./node_modules/ext-components/src/index.js");
/* harmony import */ var storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storage/storage */ "./src/storage/storage.js");
/* harmony import */ var utils_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/app */ "./src/utils/app.js");
/* harmony import */ var utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/common */ "./src/utils/common.js");
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/config */ "./src/utils/config.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    [ext_components__WEBPACK_IMPORTED_MODULE_2__["Button"].name]: ext_components__WEBPACK_IMPORTED_MODULE_2__["Button"],
    [ext_components__WEBPACK_IMPORTED_MODULE_2__["TextField"].name]: ext_components__WEBPACK_IMPORTED_MODULE_2__["TextField"]
  },
  data: function () {
    const urlParams = new URL(window.location.href).searchParams;
    const apiURL = new URL('http://127.0.0.1/api/v1');
    apiURL.port = urlParams.get('port');
    return {
      dataLoaded: false,
      apiUrl: apiURL.href,
      session: urlParams.get('session'),
      browser: '',
      appDir: '',
      manifestDir: '',
      manifestDirEditable: false,
      isInstalling: false,
      isInstallSuccess: false,
      isInstallError: false
    };
  },
  methods: {
    getText: utils_common__WEBPACK_IMPORTED_MODULE_5__["getText"],
    getExtensionId: function () {
      let id = webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.runtime.id;

      if (utils_config__WEBPACK_IMPORTED_MODULE_6__["targetEnv"] !== 'firefox') {
        const scheme = window.location.protocol;
        id = `${scheme}//${id}/`;
      }

      return id;
    },
    setLocation: async function () {
      try {
        await this.location();
      } catch (err) {
        this.isInstallError = true;
        console.log(err.toString());
      }
    },
    runInstall: async function () {
      this.isInstalling = true;

      try {
        await this.install();
      } catch (err) {
        this.isInstallError = true;
        console.log(err.toString());
      } finally {
        this.isInstalling = false;
      }

      if (this.isInstallSuccess) {
        const data = new FormData();
        data.append('session', this.session);
        await fetch(`${this.apiUrl}/setup/close`, {
          referrer: '',
          mode: 'cors',
          method: 'POST',
          body: data
        });
      }
    },
    location: async function () {
      const data = new FormData();
      data.append('session', this.session);
      data.append('browser', this.browser);
      data.append('targetEnv', utils_config__WEBPACK_IMPORTED_MODULE_6__["targetEnv"]);
      const rsp = await fetch(`${this.apiUrl}/setup/location`, {
        referrer: '',
        mode: 'cors',
        method: 'POST',
        body: data
      });
      const results = await rsp.json();

      if (rsp.status === 200) {
        this.appDir = results.appDir;
        this.manifestDir = results.manifestDir;
      } else {
        throw new Error(results.error);
      }
    },
    install: async function () {
      const data = new FormData();
      data.append('session', this.session);
      data.append('appDir', this.appDir);
      data.append('manifestDir', this.manifestDir);
      data.append('browser', this.browser);
      data.append('targetEnv', utils_config__WEBPACK_IMPORTED_MODULE_6__["targetEnv"]);
      data.append('extension', this.getExtensionId());
      const rsp = await fetch(`${this.apiUrl}/setup/install`, {
        referrer: '',
        mode: 'cors',
        method: 'POST',
        body: data
      });

      if (rsp.status === 200) {
        await Object(utils_app__WEBPACK_IMPORTED_MODULE_4__["pingClientApp"])();
        await storage_storage__WEBPACK_IMPORTED_MODULE_3__["default"].set({
          simulateUserInput: true
        }, 'sync');
        this.isInstallSuccess = true;
      } else {
        throw new Error((await rsp.json()).error);
      }
    }
  },
  created: async function () {
    this.browser = (await webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.runtime.sendMessage({
      id: 'getBrowser'
    })).name;
    await this.setLocation();
    const {
      os
    } = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.runtime.sendMessage({
      id: 'getPlatform'
    });

    if (os !== 'windows') {
      this.manifestDirEditable = true;
    }

    this.dataLoaded = true;
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/setup/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./src/setup/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/setup/App.vue?vue&type=template&id=95b38f34&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/setup/App.vue?vue&type=template&id=95b38f34& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.dataLoaded
    ? _c("div", { attrs: { id: "app" } }, [
        !_vm.isInstallSuccess && !_vm.isInstallError
          ? _c(
              "div",
              { staticClass: "wrap" },
              [
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.getText("pageContent_installTitle")) +
                      "\n    "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "desc" }, [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.getText("pageContent_installDesc")) +
                      "\n    "
                  )
                ]),
                _vm._v(" "),
                _c("v-textfield", {
                  attrs: { label: _vm.getText("inputLabel_appLocation") },
                  model: {
                    value: _vm.appDir,
                    callback: function($$v) {
                      _vm.appDir = typeof $$v === "string" ? $$v.trim() : $$v
                    },
                    expression: "appDir"
                  }
                }),
                _vm._v(" "),
                _vm.manifestDirEditable
                  ? _c("div", { staticClass: "manifest-desc" }, [
                      _vm._v(
                        "\n      " +
                          _vm._s(
                            _vm.getText("pageContent_manifestLocationDesc")
                          ) +
                          "\n    "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.manifestDirEditable
                  ? _c("v-textfield", {
                      attrs: {
                        label: _vm.getText("inputLabel_manifestLocation")
                      },
                      model: {
                        value: _vm.manifestDir,
                        callback: function($$v) {
                          _vm.manifestDir =
                            typeof $$v === "string" ? $$v.trim() : $$v
                        },
                        expression: "manifestDir"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("v-button", {
                  staticClass: "button install-button",
                  attrs: {
                    unelevated: true,
                    disabled:
                      _vm.isInstalling ||
                      !_vm.appDir ||
                      (_vm.manifestDirEditable && !_vm.manifestDir),
                    label: _vm.getText("buttonText_installApp")
                  },
                  on: { click: _vm.runInstall }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isInstallSuccess
          ? _c("div", { staticClass: "wrap" }, [
              _c("div", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.getText("pageContent_installSuccessTitle")))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "desc" }, [
                _vm._v(_vm._s(_vm.getText("pageContent_installSuccessDesc")))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "success-icon" }, [_vm._v("🎉")])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.isInstallError
          ? _c(
              "div",
              { staticClass: "wrap" },
              [
                _c("div", { staticClass: "title error-title" }, [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.getText("pageContent_installErrorTitle")) +
                      "\n    "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "desc" }, [
                  _vm._v(_vm._s(_vm.getText("pageContent_installErrorDesc")))
                ]),
                _vm._v(" "),
                _c("v-button", {
                  staticClass: "button error-button",
                  attrs: {
                    unelevated: true,
                    label: _vm.getText("buttonText_goBack")
                  },
                  on: {
                    click: function($event) {
                      _vm.isInstallError = false
                    }
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/setup/App.vue":
/*!***************************!*\
  !*** ./src/setup/App.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_95b38f34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=95b38f34& */ "./src/setup/App.vue?vue&type=template&id=95b38f34&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/setup/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "./src/setup/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_95b38f34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_95b38f34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/setup/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/setup/App.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/setup/App.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/setup/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/setup/App.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************!*\
  !*** ./src/setup/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js??ref--2-3!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/setup/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/setup/App.vue?vue&type=template&id=95b38f34&":
/*!**********************************************************!*\
  !*** ./src/setup/App.vue?vue&type=template&id=95b38f34& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_95b38f34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=95b38f34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/setup/App.vue?vue&type=template&id=95b38f34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_95b38f34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_95b38f34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/setup/main.js":
/*!***************************!*\
  !*** ./src/setup/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/setup/App.vue");




async function init() {
  try {
    await document.fonts.load('400 14px Roboto');
    await document.fonts.load('500 14px Roboto');
  } catch (e) {}

  const vm = new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
    el: '#app',
    render: h => h(_App__WEBPACK_IMPORTED_MODULE_2__["default"])
  });
} // only run in a frame


if (window.top !== window) {
  init();
}

/***/ })

},[["./src/setup/main.js","manifest","commons-ui"]]]);