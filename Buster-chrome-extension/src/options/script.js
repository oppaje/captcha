(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
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
/* harmony import */ var utils_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/data */ "./src/utils/data.js");

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
    [ext_components__WEBPACK_IMPORTED_MODULE_2__["Select"].name]: ext_components__WEBPACK_IMPORTED_MODULE_2__["Select"],
    [ext_components__WEBPACK_IMPORTED_MODULE_2__["Switch"].name]: ext_components__WEBPACK_IMPORTED_MODULE_2__["Switch"],
    [ext_components__WEBPACK_IMPORTED_MODULE_2__["FormField"].name]: ext_components__WEBPACK_IMPORTED_MODULE_2__["FormField"],
    [ext_components__WEBPACK_IMPORTED_MODULE_2__["TextField"].name]: ext_components__WEBPACK_IMPORTED_MODULE_2__["TextField"]
  },
  data: function () {
    return {
      dataLoaded: false,
      selectOptions: Object(utils_app__WEBPACK_IMPORTED_MODULE_4__["getOptionLabels"])({
        speechService: ['witSpeechApiDemo', 'googleSpeechApi', 'witSpeechApi', 'ibmSpeechApi', 'microsoftSpeechApi'],
        ibmSpeechApiLoc: ['london', 'frankfurt', 'dallas', 'washington', 'sydney', 'tokyo'],
        microsoftSpeechApiLoc: ['eastAu', 'centralCa', 'centralUs', 'centralFr', 'centralIn', 'eastJp', 'centralKr', 'northCentralUs', 'southCentralUs', 'southUk', 'eastUs', 'eastUs2', 'westUs', 'westUs2', 'eastAsia', 'southeastAsia', 'westEu', 'northEu'],
        witSpeechApiLang: [...new Set(Object.values(utils_data__WEBPACK_IMPORTED_MODULE_7__["captchaWitSpeechApiLangCodes"]).filter(Boolean))].sort()
      }),
      witSpeechApiLang: '',
      witSpeechApis: [],
      showClientAppNotice: false,
      clientAppDownloadUrl: '',
      installGuideUrl: '',
      options: {
        speechService: '',
        googleSpeechApiKey: '',
        ibmSpeechApiLoc: '',
        ibmSpeechApiKey: '',
        microsoftSpeechApiLoc: '',
        microsoftSpeechApiKey: '',
        witSpeechApiKeys: {},
        loadEnglishChallenge: false,
        tryEnglishSpeechModel: false,
        simulateUserInput: false,
        autoUpdateClientApp: false
      }
    };
  },
  watch: {
    'options.simulateUserInput': async function (value) {
      if (value) {
        try {
          await Object(utils_app__WEBPACK_IMPORTED_MODULE_4__["pingClientApp"])();
        } catch (e) {
          if (!this.clientAppDownloadUrl) {
            const {
              os,
              arch
            } = await Object(utils_common__WEBPACK_IMPORTED_MODULE_5__["getPlatform"])();

            if (utils_data__WEBPACK_IMPORTED_MODULE_7__["clientAppPlatforms"].includes(`${os}/${arch}`)) {
              this.installGuideUrl = `https://github.com/dessant/buster-client/wiki/Installing-the-client-app#${os}`;
              this.clientAppDownloadUrl = `https://github.com/dessant/buster-client/releases/download/v${utils_config__WEBPACK_IMPORTED_MODULE_6__["clientAppVersion"]}/buster-client-setup-v${utils_config__WEBPACK_IMPORTED_MODULE_6__["clientAppVersion"]}-${os}-${arch}`;

              if (os === 'windows') {
                this.clientAppDownloadUrl += '.exe';
              }
            }
          }

          this.showClientAppNotice = true;
          return;
        }
      }

      this.showClientAppNotice = false;
    }
  },
  methods: {
    getText: utils_common__WEBPACK_IMPORTED_MODULE_5__["getText"],
    setWitSpeechApiLangOptions: function () {
      this.selectOptions.witSpeechApiLang = this.selectOptions.witSpeechApiLang.filter(item => !this.witSpeechApis.includes(item.id));
    },
    addWitSpeechApi: function () {
      this.witSpeechApis.push(this.witSpeechApiLang);
      this.witSpeechApiLang = '';
      this.setWitSpeechApiLangOptions();
    },
    saveWitSpeechApiKey: function (value, lang) {
      const apiKeys = this.options.witSpeechApiKeys;

      if (value) {
        this.options.witSpeechApiKeys = Object.assign({}, apiKeys, {
          [lang]: value
        });
      } else if (apiKeys[lang]) {
        delete apiKeys[lang];
        this.options.witSpeechApiKeys = Object.assign({}, apiKeys);
      }
    }
  },
  created: async function () {
    const options = await storage_storage__WEBPACK_IMPORTED_MODULE_3__["default"].get(utils_data__WEBPACK_IMPORTED_MODULE_7__["optionKeys"], 'sync');

    for (const option of Object.keys(this.options)) {
      this.options[option] = options[option];
      this.$watch(`options.${option}`, async function (value) {
        await storage_storage__WEBPACK_IMPORTED_MODULE_3__["default"].set({
          [option]: value
        }, 'sync');
      });
    }

    this.witSpeechApis = Object.keys(options.witSpeechApiKeys);
    this.setWitSpeechApiLangOptions();
    document.title = Object(utils_common__WEBPACK_IMPORTED_MODULE_5__["getText"])('pageTitle', [Object(utils_common__WEBPACK_IMPORTED_MODULE_5__["getText"])('pageTitle_options'), Object(utils_common__WEBPACK_IMPORTED_MODULE_5__["getText"])('extensionName')]);
    this.dataLoaded = true;
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./src/options/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=template&id=64f45072&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/App.vue?vue&type=template&id=64f45072& ***!
  \******************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "section" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "option-wrap" },
            [
              _c(
                "div",
                { staticClass: "option select" },
                [
                  _c("v-select", {
                    attrs: {
                      label: _vm.getText("optionTitle_speechService"),
                      options: _vm.selectOptions.speechService
                    },
                    model: {
                      value: _vm.options.speechService,
                      callback: function($$v) {
                        _vm.$set(_vm.options, "speechService", $$v)
                      },
                      expression: "options.speechService"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.options.speechService === "googleSpeechApi"
                ? _c(
                    "div",
                    { staticClass: "option text-field" },
                    [
                      _c("v-textfield", {
                        attrs: { label: _vm.getText("inputLabel_apiKey") },
                        model: {
                          value: _vm.options.googleSpeechApiKey,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.options,
                              "googleSpeechApiKey",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "options.googleSpeechApiKey"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.options.speechService === "ibmSpeechApi"
                ? _c(
                    "div",
                    { staticClass: "option select" },
                    [
                      _c("v-select", {
                        attrs: {
                          label: _vm.getText("optionTitle_ibmSpeechApiLoc"),
                          options: _vm.selectOptions.ibmSpeechApiLoc
                        },
                        model: {
                          value: _vm.options.ibmSpeechApiLoc,
                          callback: function($$v) {
                            _vm.$set(_vm.options, "ibmSpeechApiLoc", $$v)
                          },
                          expression: "options.ibmSpeechApiLoc"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.options.speechService === "ibmSpeechApi"
                ? _c(
                    "div",
                    { staticClass: "option text-field" },
                    [
                      _c("v-textfield", {
                        attrs: { label: _vm.getText("inputLabel_apiKey") },
                        model: {
                          value: _vm.options.ibmSpeechApiKey,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.options,
                              "ibmSpeechApiKey",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "options.ibmSpeechApiKey"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.options.speechService === "microsoftSpeechApi"
                ? _c(
                    "div",
                    { staticClass: "option select" },
                    [
                      _c("v-select", {
                        attrs: {
                          label: _vm.getText(
                            "optionTitle_microsoftSpeechApiLoc"
                          ),
                          options: _vm.selectOptions.microsoftSpeechApiLoc
                        },
                        model: {
                          value: _vm.options.microsoftSpeechApiLoc,
                          callback: function($$v) {
                            _vm.$set(_vm.options, "microsoftSpeechApiLoc", $$v)
                          },
                          expression: "options.microsoftSpeechApiLoc"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.options.speechService === "microsoftSpeechApi"
                ? _c(
                    "div",
                    { staticClass: "option text-field" },
                    [
                      _c("v-textfield", {
                        attrs: { label: _vm.getText("inputLabel_apiKey") },
                        model: {
                          value: _vm.options.microsoftSpeechApiKey,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.options,
                              "microsoftSpeechApiKey",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "options.microsoftSpeechApiKey"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.witSpeechApis, function(item) {
                return _vm.options.speechService === "witSpeechApi"
                  ? _c("v-textfield", {
                      key: item.id,
                      attrs: {
                        value: _vm.options.witSpeechApiKeys[item] || "",
                        label: _vm.getText("inputLabel_apiKeyType", [
                          _vm.getText("optionValue_witSpeechApiLang_" + item)
                        ])
                      },
                      on: {
                        input: function($event) {
                          _vm.saveWitSpeechApiKey($event.trim(), item)
                        }
                      }
                    })
                  : _vm._e()
              }),
              _vm._v(" "),
              _vm.options.speechService === "witSpeechApi"
                ? _c(
                    "div",
                    { staticClass: "wit-add-api" },
                    [
                      _c("v-select", {
                        attrs: {
                          options: _vm.selectOptions.witSpeechApiLang,
                          label: _vm.getText("optionTitle_witSpeechApiLang")
                        },
                        model: {
                          value: _vm.witSpeechApiLang,
                          callback: function($$v) {
                            _vm.witSpeechApiLang = $$v
                          },
                          expression: "witSpeechApiLang"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-button", {
                        attrs: {
                          outlined: true,
                          disabled: !_vm.witSpeechApiLang,
                          label: _vm.getText("buttonText_addApi")
                        },
                        on: { click: _vm.addWitSpeechApi }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "section" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "option-wrap" }, [
            _c(
              "div",
              { staticClass: "option" },
              [
                _c(
                  "v-form-field",
                  {
                    attrs: {
                      "input-id": "lec",
                      label: _vm.getText("optionTitle_loadEnglishChallenge")
                    }
                  },
                  [
                    _c("v-switch", {
                      attrs: { id: "lec" },
                      model: {
                        value: _vm.options.loadEnglishChallenge,
                        callback: function($$v) {
                          _vm.$set(_vm.options, "loadEnglishChallenge", $$v)
                        },
                        expression: "options.loadEnglishChallenge"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            !_vm.options.loadEnglishChallenge
              ? _c(
                  "div",
                  { staticClass: "option" },
                  [
                    _c(
                      "v-form-field",
                      {
                        attrs: {
                          "input-id": "esm",
                          label: _vm.getText(
                            "optionTitle_tryEnglishSpeechModel"
                          )
                        }
                      },
                      [
                        _c("v-switch", {
                          attrs: { id: "esm" },
                          model: {
                            value: _vm.options.tryEnglishSpeechModel,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.options,
                                "tryEnglishSpeechModel",
                                $$v
                              )
                            },
                            expression: "options.tryEnglishSpeechModel"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "option" },
              [
                _c(
                  "v-form-field",
                  {
                    attrs: {
                      "input-id": "si",
                      label: _vm.getText("optionTitle_simulateUserInput")
                    }
                  },
                  [
                    _c("v-switch", {
                      attrs: { id: "si" },
                      model: {
                        value: _vm.options.simulateUserInput,
                        callback: function($$v) {
                          _vm.$set(_vm.options, "simulateUserInput", $$v)
                        },
                        expression: "options.simulateUserInput"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "option" },
              [
                _vm.options.simulateUserInput
                  ? _c(
                      "v-form-field",
                      {
                        attrs: {
                          "input-id": "auc",
                          label: _vm.getText("optionTitle_autoUpdateClientApp")
                        }
                      },
                      [
                        _c("v-switch", {
                          attrs: { id: "auc" },
                          model: {
                            value: _vm.options.autoUpdateClientApp,
                            callback: function($$v) {
                              _vm.$set(_vm.options, "autoUpdateClientApp", $$v)
                            },
                            expression: "options.autoUpdateClientApp"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _vm.showClientAppNotice
              ? _c(
                  "div",
                  { staticClass: "client-download" },
                  [
                    _c("div", {
                      staticClass: "download-desc",
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.getText(
                            "pageContent_optionClientAppDownloadDesc",
                            [
                              "<a target='_blank' rel='noreferrer' href='" +
                                _vm.installGuideUrl +
                                "'>" +
                                _vm.getText("linkText_installGuide") +
                                "</a>"
                            ]
                          )
                        )
                      }
                    }),
                    _vm._v(" "),
                    !_vm.clientAppDownloadUrl
                      ? _c("div", { staticClass: "download-error" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(
                                _vm.getText(
                                  "pageContent_optionClientAppOSError"
                                )
                              ) +
                              "\n        "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("v-button", {
                      staticClass: "download-button",
                      attrs: {
                        unelevated: true,
                        disabled: !_vm.clientAppDownloadUrl,
                        label: _vm.getText("buttonText_downloadApp")
                      },
                      on: {
                        click: function($event) {
                          return _vm.$refs.dlLink.click()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("a", {
                      ref: "dlLink",
                      staticClass: "download-link",
                      attrs: {
                        target: "_blank",
                        rel: "noreferrer",
                        href: _vm.clientAppDownloadUrl
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _vm._v(
        "\n      " +
          _vm._s(_vm.getText("optionSectionTitle_services")) +
          "\n    "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _vm._v(
        "\n      " + _vm._s(_vm.getText("optionSectionTitle_misc")) + "\n    "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/options/App.vue":
/*!*****************************!*\
  !*** ./src/options/App.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_64f45072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=64f45072& */ "./src/options/App.vue?vue&type=template&id=64f45072&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/options/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "./src/options/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_64f45072___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_64f45072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/App.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/options/App.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/App.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************!*\
  !*** ./src/options/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js??ref--2-3!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/App.vue?vue&type=template&id=64f45072&":
/*!************************************************************!*\
  !*** ./src/options/App.vue?vue&type=template&id=64f45072& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_64f45072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=64f45072& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=template&id=64f45072&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_64f45072___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_64f45072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/main.js":
/*!*****************************!*\
  !*** ./src/options/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/options/App.vue");




async function init() {
  try {
    await document.fonts.load('400 14px Roboto');
    await document.fonts.load('500 14px Roboto');
  } catch (e) {}

  const vm = new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
    el: '#app',
    render: h => h(_App__WEBPACK_IMPORTED_MODULE_2__["default"])
  });
}

init();

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/*! exports provided: optionKeys, clientAppPlatforms, recaptchaChallengeUrlRx, captchaGoogleSpeechApiLangCodes, captchaIbmSpeechApiLangCodes, captchaMicrosoftSpeechApiLangCodes, captchaWitSpeechApiLangCodes, ibmSpeechApiUrls, microsoftSpeechApiUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionKeys", function() { return optionKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientAppPlatforms", function() { return clientAppPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recaptchaChallengeUrlRx", function() { return recaptchaChallengeUrlRx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaGoogleSpeechApiLangCodes", function() { return captchaGoogleSpeechApiLangCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaIbmSpeechApiLangCodes", function() { return captchaIbmSpeechApiLangCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaMicrosoftSpeechApiLangCodes", function() { return captchaMicrosoftSpeechApiLangCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaWitSpeechApiLangCodes", function() { return captchaWitSpeechApiLangCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ibmSpeechApiUrls", function() { return ibmSpeechApiUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "microsoftSpeechApiUrls", function() { return microsoftSpeechApiUrls; });
const optionKeys = ['speechService', 'googleSpeechApiKey', 'ibmSpeechApiLoc', 'ibmSpeechApiKey', 'microsoftSpeechApiLoc', 'microsoftSpeechApiKey', 'witSpeechApiKeys', 'loadEnglishChallenge', 'tryEnglishSpeechModel', 'simulateUserInput', 'autoUpdateClientApp'];
const clientAppPlatforms = ['windows/amd64', 'windows/386', 'linux/amd64', 'macos/amd64'];
const recaptchaChallengeUrlRx = /^https:\/\/www\.google\.com\/recaptcha\/api2\/bframe.*/; // https://developers.google.com/recaptcha/docs/language
// https://cloud.google.com/speech-to-text/docs/languages

const captchaGoogleSpeechApiLangCodes = {
  ar: 'ar-SA',
  // Arabic
  af: 'af-ZA',
  // Afrikaans
  am: 'am-ET',
  // Amharic
  hy: 'hy-AM',
  // Armenian
  az: 'az-AZ',
  // Azerbaijani
  eu: 'eu-ES',
  // Basque
  bn: 'bn-BD',
  // Bengali
  bg: 'bg-BG',
  // Bulgarian
  ca: 'ca-ES',
  // Catalan
  'zh-HK': 'cmn-Hans-HK',
  // Chinese (Hong Kong)
  'zh-CN': 'cmn-Hans-CN',
  // Chinese (Simplified)
  'zh-TW': 'cmn-Hant-TW',
  // Chinese (Traditional)
  hr: 'hr-HR',
  // Croatian
  cs: 'cs-CZ',
  // Czech
  da: 'da-DK',
  // Danish
  nl: 'nl-NL',
  // Dutch
  'en-GB': 'en-GB',
  // English (UK)
  en: 'en-US',
  // English (US)
  et: '',
  // Estonian
  fil: 'fil-PH',
  // Filipino
  fi: 'fi-FI',
  // Finnish
  fr: 'fr-FR',
  // French
  'fr-CA': 'fr-CA',
  // French (Canadian)
  gl: 'gl-ES',
  // Galician
  ka: 'ka-GE',
  // Georgian
  de: 'de-DE',
  // German
  'de-AT': 'de-DE',
  // German (Austria)
  'de-CH': 'de-DE',
  // German (Switzerland)
  el: 'el-GR',
  // Greek
  gu: 'gu-IN',
  // Gujarati
  iw: 'he-IL',
  // Hebrew
  hi: 'hi-IN',
  // Hindi
  hu: 'hu-HU',
  // Hungarian
  is: 'is-IS',
  // Icelandic
  id: 'id-ID',
  // Indonesian
  it: 'it-IT',
  // Italian
  ja: 'ja-JP',
  // Japanese
  kn: 'kn-IN',
  // Kannada
  ko: 'ko-KR',
  // Korean
  lo: 'lo-LA',
  // Laothian
  lv: 'lv-LV',
  // Latvian
  lt: 'lt-LT',
  // Lithuanian
  ms: 'ms-MY',
  // Malay
  ml: 'ml-IN',
  // Malayalam
  mr: 'mr-IN',
  // Marathi
  mn: '',
  // Mongolian
  no: 'nb-NO',
  // Norwegian
  fa: 'fa-IR',
  // Persian
  pl: 'pl-PL',
  // Polish
  pt: 'pt-PT',
  // Portuguese
  'pt-BR': 'pt-BR',
  // Portuguese (Brazil)
  'pt-PT': 'pt-PT',
  // Portuguese (Portugal)
  ro: 'ro-RO',
  // Romanian
  ru: 'ru-RU',
  // Russian
  sr: 'sr-RS',
  // Serbian
  si: 'si-LK',
  // Sinhalese
  sk: 'sk-SK',
  // Slovak
  sl: 'sl-SI',
  // Slovenian
  es: 'es-ES',
  // Spanish
  'es-419': 'es-MX',
  // Spanish (Latin America)
  sw: 'sw-TZ',
  // Swahili
  sv: 'sv-SE',
  // Swedish
  ta: 'ta-IN',
  // Tamil
  te: 'te-IN',
  // Telugu
  th: 'th-TH',
  // Thai
  tr: 'tr-TR',
  // Turkish
  uk: 'uk-UA',
  // Ukrainian
  ur: 'ur-IN',
  // Urdu
  vi: 'vi-VN',
  // Vietnamese
  zu: 'zu-ZA' // Zulu

}; // https://cloud.ibm.com/docs/services/speech-to-text?topic=speech-to-text-models#models

const captchaIbmSpeechApiLangCodes = {
  ar: 'ar-AR_BroadbandModel',
  // Arabic
  af: '',
  // Afrikaans
  am: '',
  // Amharic
  hy: '',
  // Armenian
  az: '',
  // Azerbaijani
  eu: '',
  // Basque
  bn: '',
  // Bengali
  bg: '',
  // Bulgarian
  ca: '',
  // Catalan
  'zh-HK': '',
  // Chinese (Hong Kong)
  'zh-CN': 'zh-CN_BroadbandModel',
  // Chinese (Simplified)
  'zh-TW': 'zh-CN_BroadbandModel',
  // Chinese (Traditional)
  hr: '',
  // Croatian
  cs: '',
  // Czech
  da: '',
  // Danish
  nl: 'nl-NL_BroadbandModel',
  // Dutch
  'en-GB': 'en-GB_BroadbandModel',
  // English (UK)
  en: 'en-US_BroadbandModel',
  // English (US)
  et: '',
  // Estonian
  fil: '',
  // Filipino
  fi: '',
  // Finnish
  fr: 'fr-FR_BroadbandModel',
  // French
  'fr-CA': 'fr-FR_BroadbandModel',
  // French (Canadian)
  gl: '',
  // Galician
  ka: '',
  // Georgian
  de: 'de-DE_BroadbandModel',
  // German
  'de-AT': 'de-DE_BroadbandModel',
  // German (Austria)
  'de-CH': 'de-DE_BroadbandModel',
  // German (Switzerland)
  el: '',
  // Greek
  gu: '',
  // Gujarati
  iw: '',
  // Hebrew
  hi: '',
  // Hindi
  hu: '',
  // Hungarian
  is: '',
  // Icelandic
  id: '',
  // Indonesian
  it: 'it-IT_BroadbandModel',
  // Italian
  ja: 'ja-JP_BroadbandModel',
  // Japanese
  kn: '',
  // Kannada
  ko: 'ko-KR_BroadbandModel',
  // Korean
  lo: '',
  // Laothian
  lv: '',
  // Latvian
  lt: '',
  // Lithuanian
  ms: '',
  // Malay
  ml: '',
  // Malayalam
  mr: '',
  // Marathi
  mn: '',
  // Mongolian
  no: '',
  // Norwegian
  fa: '',
  // Persian
  pl: '',
  // Polish
  pt: 'pt-BR_BroadbandModel',
  // Portuguese
  'pt-BR': 'pt-BR_BroadbandModel',
  // Portuguese (Brazil)
  'pt-PT': 'pt-BR_BroadbandModel',
  // Portuguese (Portugal)
  ro: '',
  // Romanian
  ru: '',
  // Russian
  sr: '',
  // Serbian
  si: '',
  // Sinhalese
  sk: '',
  // Slovak
  sl: '',
  // Slovenian
  es: 'es-ES_BroadbandModel',
  // Spanish
  'es-419': 'es-ES_BroadbandModel',
  // Spanish (Latin America)
  sw: '',
  // Swahili
  sv: '',
  // Swedish
  ta: '',
  // Tamil
  te: '',
  // Telugu
  th: '',
  // Thai
  tr: '',
  // Turkish
  uk: '',
  // Ukrainian
  ur: '',
  // Urdu
  vi: '',
  // Vietnamese
  zu: '' // Zulu

}; // https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#speech-to-text

const captchaMicrosoftSpeechApiLangCodes = {
  ar: 'ar-EG',
  // Arabic
  af: '',
  // Afrikaans
  am: '',
  // Amharic
  hy: '',
  // Armenian
  az: '',
  // Azerbaijani
  eu: '',
  // Basque
  bn: '',
  // Bengali
  bg: '',
  // Bulgarian
  ca: 'ca-ES',
  // Catalan
  'zh-HK': 'zh-HK',
  // Chinese (Hong Kong)
  'zh-CN': 'zh-CN',
  // Chinese (Simplified)
  'zh-TW': 'zh-TW',
  // Chinese (Traditional)
  hr: '',
  // Croatian
  cs: '',
  // Czech
  da: 'da-DK',
  // Danish
  nl: 'nl-NL',
  // Dutch
  'en-GB': 'en-GB',
  // English (UK)
  en: 'en-US',
  // English (US)
  et: '',
  // Estonian
  fil: '',
  // Filipino
  fi: 'fi-FI',
  // Finnish
  fr: 'fr-FR',
  // French
  'fr-CA': 'fr-CA',
  // French (Canadian)
  gl: '',
  // Galician
  ka: '',
  // Georgian
  de: 'de-DE',
  // German
  'de-AT': 'de-DE',
  // German (Austria)
  'de-CH': 'de-DE',
  // German (Switzerland)
  el: '',
  // Greek
  gu: 'gu-IN',
  // Gujarati
  iw: '',
  // Hebrew
  hi: 'hi-IN',
  // Hindi
  hu: '',
  // Hungarian
  is: '',
  // Icelandic
  id: '',
  // Indonesian
  it: 'it-IT',
  // Italian
  ja: 'ja-JP',
  // Japanese
  kn: '',
  // Kannada
  ko: 'ko-KR',
  // Korean
  lo: '',
  // Laothian
  lv: '',
  // Latvian
  lt: '',
  // Lithuanian
  ms: '',
  // Malay
  ml: '',
  // Malayalam
  mr: 'mr-IN',
  // Marathi
  mn: '',
  // Mongolian
  no: 'nb-NO',
  // Norwegian
  fa: '',
  // Persian
  pl: 'pl-PL',
  // Polish
  pt: 'pt-PT',
  // Portuguese
  'pt-BR': 'pt-BR',
  // Portuguese (Brazil)
  'pt-PT': 'pt-PT',
  // Portuguese (Portugal)
  ro: '',
  // Romanian
  ru: 'ru-RU',
  // Russian
  sr: '',
  // Serbian
  si: '',
  // Sinhalese
  sk: '',
  // Slovak
  sl: '',
  // Slovenian
  es: 'es-ES',
  // Spanish
  'es-419': 'es-MX',
  // Spanish (Latin America)
  sw: '',
  // Swahili
  sv: 'sv-SE',
  // Swedish
  ta: 'ta-IN',
  // Tamil
  te: 'te-IN',
  // Telugu
  th: 'th-TH',
  // Thai
  tr: 'tr-TR',
  // Turkish
  uk: '',
  // Ukrainian
  ur: '',
  // Urdu
  vi: '',
  // Vietnamese
  zu: '' // Zulu

};
const captchaWitSpeechApiLangCodes = {
  ar: 'arabic',
  // Arabic
  af: '',
  // Afrikaans
  am: '',
  // Amharic
  hy: '',
  // Armenian
  az: '',
  // Azerbaijani
  eu: '',
  // Basque
  bn: 'bengali',
  // Bengali
  bg: '',
  // Bulgarian
  ca: 'catalan',
  // Catalan
  'zh-HK': '',
  // Chinese (Hong Kong)
  'zh-CN': 'chinese',
  // Chinese (Simplified)
  'zh-TW': 'chinese',
  // Chinese (Traditional)
  hr: '',
  // Croatian
  cs: '',
  // Czech
  da: '',
  // Danish
  nl: 'dutch',
  // Dutch
  'en-GB': 'english',
  // English (UK)
  en: 'english',
  // English (US)
  et: '',
  // Estonian
  fil: '',
  // Filipino
  fi: 'finnish',
  // Finnish
  fr: 'french',
  // French
  'fr-CA': 'french',
  // French (Canadian)
  gl: '',
  // Galician
  ka: '',
  // Georgian
  de: 'german',
  // German
  'de-AT': 'german',
  // German (Austria)
  'de-CH': 'german',
  // German (Switzerland)
  el: '',
  // Greek
  gu: '',
  // Gujarati
  iw: '',
  // Hebrew
  hi: 'hindi',
  // Hindi
  hu: '',
  // Hungarian
  is: '',
  // Icelandic
  id: 'indonesian',
  // Indonesian
  it: 'italian',
  // Italian
  ja: 'japanese',
  // Japanese
  kn: 'kannada',
  // Kannada
  ko: 'korean',
  // Korean
  lo: '',
  // Laothian
  lv: '',
  // Latvian
  lt: '',
  // Lithuanian
  ms: 'malay',
  // Malay
  ml: 'malayalam',
  // Malayalam
  mr: '',
  // Marathi
  mn: '',
  // Mongolian
  no: '',
  // Norwegian
  fa: '',
  // Persian
  pl: 'polish',
  // Polish
  pt: 'portuguese',
  // Portuguese
  'pt-BR': 'portuguese',
  // Portuguese (Brazil)
  'pt-PT': 'portuguese',
  // Portuguese (Portugal)
  ro: '',
  // Romanian
  ru: 'russian',
  // Russian
  sr: '',
  // Serbian
  si: 'sinhala',
  // Sinhalese
  sk: '',
  // Slovak
  sl: '',
  // Slovenian
  es: 'spanish',
  // Spanish
  'es-419': 'spanish',
  // Spanish (Latin America)
  sw: '',
  // Swahili
  sv: 'swedish',
  // Swedish
  ta: 'tamil',
  // Tamil
  te: 'telugu',
  // Telugu
  th: 'thai',
  // Thai
  tr: 'turkish',
  // Turkish
  uk: '',
  // Ukrainian
  ur: 'urdu',
  // Urdu
  vi: 'vietnamese',
  // Vietnamese
  zu: '' // Zulu

}; // https://cloud.ibm.com/apidocs/speech-to-text#service-endpoint

const ibmSpeechApiUrls = {
  london: 'https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/v1/recognize',
  frankfurt: 'https://api.eu-de.speech-to-text.watson.cloud.ibm.com/v1/recognize',
  dallas: 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/v1/recognize',
  washington: 'https://api.us-east.speech-to-text.watson.cloud.ibm.com/v1/recognize',
  sydney: 'https://api.au-syd.speech-to-text.watson.cloud.ibm.com/v1/recognize',
  tokyo: 'https://api.jp-tok.speech-to-text.watson.cloud.ibm.com/v1/recognize'
}; // https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/rest-speech-to-text#regions-and-endpoints

const microsoftSpeechApiUrls = {
  eastAu: 'https://australiaeast.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  centralCa: 'https://canadacentral.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  centralUs: 'https://centralus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  centralFr: 'https://francecentral.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  centralIn: 'https://centralindia.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  eastJp: 'https://japaneast.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  centralKr: 'https://koreacentral.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  northCentralUs: 'https://northcentralus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  southCentralUs: 'https://southcentralus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  southUk: 'https://uksouth.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  eastUs: 'https://eastus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  eastUs2: 'https://eastus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  westUs: 'https://westus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  westUs2: 'https://westus2.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  eastAsia: 'https://eastasia.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  southeastAsia: 'https://southeastasia.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  westEu: 'https://westeurope.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1',
  northEu: 'https://northeurope.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1'
};


/***/ })

},[["./src/options/main.js","manifest","commons-ui"]]]);