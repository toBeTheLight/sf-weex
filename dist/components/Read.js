// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 249);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports) {

module.exports = {
  "read": {
    "paddingTop": "40",
    "alignItems": "flex-start"
  },
  "page-header": {
    "display": "flex",
    "flexDirection": "row-reverse",
    "width": "750",
    "paddingRight": "40",
    "flexShrink": 0
  },
  "page-new": {
    "fontSize": "60",
    "color": "#009A61"
  },
  "read-header": {
    "paddingLeft": "40",
    "paddingRight": "40",
    "width": "750",
    "flexShrink": 0
  },
  "read-types": {
    "flexDirection": "row"
  },
  "read-type": {
    "color": "#757575",
    "fontSize": "80",
    "marginRight": "30"
  },
  "read-type_active": {
    "color": "#000000"
  },
  "read-query": {
    "height": "110",
    "marginTop": "20",
    "marginBottom": "20",
    "backgroundColor": "#eeeeee"
  },
  "read-sorts": {
    "flexDirection": "row"
  },
  "read-sort": {
    "marginRight": "20",
    "fontSize": "40",
    "paddingBottom": "20",
    "color": "#757575"
  },
  "read-sort_actived": {
    "color": "#000000",
    "borderBottomColor": "#000000",
    "borderBottomWidth": "3",
    "borderBottomStyle": "solid"
  },
  "read-list": {
    "paddingLeft": "40",
    "paddingRight": "40",
    "height": "1000",
    "width": "750"
  },
  "read-item": {
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "read-item-title": {
    "fontSize": "50"
  },
  "read-item-info": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "20"
  },
  "read-item-type": {
    "backgroundColor": "#eeeeee",
    "fontSize": "26",
    "marginRight": "20"
  },
  "read-item-agree": {
    "fontSize": "36",
    "marginRight": "20"
  },
  "read-item-answer": {
    "fontSize": "36"
  },
  "color333": {
    "color": "#333333"
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  data: function data() {
    return {
      readTypeList: ['推荐', '焦点', '最新'],
      readSortList: ['精选', '最新'],
      readList: [{
        id: 1,
        title: '如何定位图片中人物位置',
        type: '问答',
        agree: 3,
        answer: 3
      }, {
        id: 2,
        title: '如何定位图片中人物位置',
        type: '问答',
        agree: 3,
        answer: 3
      }, {
        id: 3,
        title: '用了 wxParse 的插件，小程序怎么循环列表呢？',
        type: '问答',
        agree: 3,
        answer: 3
      }, {
        id: 4,
        title: '用了 wxParse 的插件，小程序怎么循环列表呢？',
        type: '问答',
        agree: 3,
        answer: 3
      }, {
        id: 5,
        title: '如何定位图片中人物位置',
        type: '问答',
        agree: 3,
        answer: 3
      }, {
        id: 6,
        title: '如何定位图片中人物位置',
        type: '问答',
        agree: 3,
        answer: 3
      }],
      activeTypeIndex: 0,
      activeSort: 0,
      refreshing: false
    };
  },

  methods: {
    changeType: function changeType(i) {
      if (this.activeTypeIndex === i) {
        return;
      }
      this.activeTypeIndex = i;
    },
    changeSort: function changeSort(i) {
      if (this.activeSort === i) {
        return;
      }
      this.activeSort = i;
    },
    onrefresh: function onrefresh() {
      var _this = this;

      this.refreshing = true;
      setTimeout(function () {
        _this.refreshing = false;
      }, 2000);
    }
  }

};

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["nav-page", "read"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["read-header"]
  }, [_c('div', {
    staticClass: ["read-types"]
  }, _vm._l((_vm.readTypeList), function(item, index) {
    return _c('text', {
      key: index,
      staticClass: ["read-type"],
      class: [_vm.activeTypeIndex === index ? 'read-type_active' : ''],
      on: {
        "click": function($event) {
          _vm.changeType(index)
        }
      }
    }, [_vm._v(_vm._s(item))])
  })), _c('input', {
    staticClass: ["read-query"],
    attrs: {
      "type": "text",
      "placeholder": "告诉我你想搜索的内容",
      "autofocus": false,
      "value": ""
    },
    on: {
      "change": _vm.onchange,
      "input": _vm.oninput
    }
  }), _c('div', {
    staticClass: ["read-sorts"]
  }, _vm._l((_vm.readSortList), function(item, index) {
    return _c('text', {
      key: index,
      staticClass: ["read-sort"],
      class: [_vm.activeSort === index ? 'read-sort_actived' : ''],
      on: {
        "click": function($event) {
          _vm.changeSort(index)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]), _c('list', {
    staticClass: ["read-list"]
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh
    }
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v("刷新")]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })]), _vm._l((_vm.readList), function(item) {
    return _c('cell', {
      key: item.id,
      staticClass: ["read-item"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('text', {
      staticClass: ["read-item-title"]
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["read-item-info"]
    }, [_c('text', {
      staticClass: ["read-item-type", "color333"]
    }, [_vm._v(_vm._s(item.type))]), _c('text', {
      staticClass: ["read-item-agree", "color333"]
    }, [_vm._v(_vm._s(item.agree) + "赞同")]), _c('text', {
      staticClass: ["read-item-answer", "color333"]
    }, [_vm._v(_vm._s(item.answer) + "回答")])])])
  })], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["page-header"]
  }, [_c('text', {
    staticClass: ["page-new"]
  }, [_vm._v("+")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/light/git/sf-weex/src/components/Read.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ac3fe31c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });