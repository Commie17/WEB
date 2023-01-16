// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js_scripts/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.column = column;
exports.css = css;
exports.row = row;
exports.table = table;
function row(content) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class=\"row\" style=\"".concat(style, "\">").concat(content, "</div>");
}
function column(content) {
  return "<div class=\"col-sm\">".concat(content, "</div>");
}
function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (typeof styles === 'string') return styles;
  var toString = function toString(key) {
    return "".concat(key, ": ").concat(styles[key]);
  };
  return Object.keys(styles).map(toString).join(';');
}
function table(content) {
  return "<table class=\"table\">".concat(content, "</table>");
}
},{}],"js_scripts/classes/blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBlock = exports.Table = void 0;
var _utils = require("../utils");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Block = /*#__PURE__*/function () {
  function Block() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    _classCallCheck(this, Block);
    this.value = value;
    this.options = options;
  }
  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw "Error";
    }
  }]);
  return Block;
}();
var TextBlock = /*#__PURE__*/function (_Block) {
  _inherits(TextBlock, _Block);
  var _super = _createSuper(TextBlock);
  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);
    return _super.call(this, value, options);
  }
  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)((0, _utils.column)("<p>".concat(this.value, "</p>"), (0, _utils.css)(this.options.styles)));
    }
  }]);
  return TextBlock;
}(Block);
exports.TextBlock = TextBlock;
var Table = /*#__PURE__*/function (_Block2) {
  _inherits(Table, _Block2);
  var _super2 = _createSuper(Table);
  function Table(value, options) {
    _classCallCheck(this, Table);
    return _super2.call(this, value, options);
  }
  _createClass(Table, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)("".concat(this.value), (0, _utils.css)(this.options.styles));
    }
  }]);
  return Table;
}(Block);
exports.Table = Table;
},{"../utils":"js_scripts/utils.js"}],"js_scripts/parcer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValue = getValue;
function getValue(key) {
  var tableData = JSON.parse(window.localStorage.getItem(key));
  return tableData;
}
},{}],"js_scripts/tables/tables-utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOfSt = GetOfSt;
exports.GetPC = GetPC;
exports.GetSW = GetSW;
function GetPC(content) {
  return "<tr style=\"align-content: center;\">Computers</tr>\n                <tbody>\n                <tr>\n                    <th>\u2116 \u043F/\u043F</th>\n                    <th>\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</th>\n                    <th>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430</th>\n                    <th>\u041D\u043E\u043C\u0435\u0440 \u0430\u0434\u0443\u0438\u0442\u043E\u0440\u0438\u0438, \u0433\u0434\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440</th>\n                </tr>\n                ".concat(content, "\n                </tbody>\n                ");
}
function GetSW(content) {
  return "<tr style=\"align-content: center\">Software</tr>\n                <tbody>\n                <tr>\n                    <th>\u2116 \u043F/\u043F</th>\n                    <th>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430</th>\n                    <th>\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>\n                </tr>\n                ".concat(content, "\n                </tbody>\n                ");
}
function GetOfSt(content) {
  return "<tr style=\"align-content: center\">Office staff</tr>\n                <tbody>\n                <tr>\n                    <th>\u2116 \u043F/\u043F</th>\n                    <th>\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</th>\n                    <th>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430</th>\n                </tr>\n                ".concat(content, "\n                </tbody>\n                ");
}
},{}],"js_scripts/tables/table-builder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableBuilder = tableBuilder;
var _parcer = require("../parcer");
var _utils = require("../utils");
var _tablesUtils = require("./tables-utils");
function tableBuilder() {
  var dataKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'computersTable';
  var data = (0, _parcer.getValue)(dataKey);
  switch (dataKey) {
    case 'computersTable':
      return (0, _utils.row)((0, _utils.table)((0, _tablesUtils.GetPC)(createRows(data))));
    case 'softwareTable':
      return (0, _utils.row)((0, _utils.table)((0, _tablesUtils.GetSW)(createRows(data))));
    case 'officeStaffTable':
      return (0, _utils.row)((0, _utils.table)((0, _tablesUtils.GetOfSt)(createRows(data))));
    default:
      throw 'Error, please, verify key or code';
  }
}
function createRows(content) {
  var html = "";
  for (var i = 0; i < content.length; i++) {
    var data = createCells(content[i]);
    html = "".concat(html, "\n            <tr>\n                <td>").concat(i + 1, "</td>\n                ").concat(data, "\n            </tr>");
  }
  return html;
}
function createCells(row) {
  var html = "";
  for (var key in row) {
    html = "".concat(html, "\n              <td align=\"center\";valign=\"middle\">").concat(row[key], "</td>");
  }
  return html;
}
},{"../parcer":"js_scripts/parcer.js","../utils":"js_scripts/utils.js","./tables-utils":"js_scripts/tables/tables-utils.js"}],"js_scripts/classes/selector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectorToRedact = exports.SelectorToDelete = void 0;
var _utils = require("../utils");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SelectorToDelete = /*#__PURE__*/function () {
  function SelectorToDelete(selector, length) {
    _classCallCheck(this, SelectorToDelete);
    this.selector = selector;
    this.length = length;
  }
  _createClass(SelectorToDelete, [{
    key: "getVariants",
    value: function getVariants(size) {
      var html = "<option>1</option>";
      for (var i = 2; i <= size; i++) {
        html = "".concat(html, "\n                    <option>").concat(i, "</option>");
      }
      return html;
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)("<label for=\"".concat(this.selector, "\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0441\u0442\u0440\u043E\u043A\u0438 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F:</label><select id=\"").concat(this.selector, "\">").concat(this.getVariants(this.length), "</select>"));
    }
  }]);
  return SelectorToDelete;
}();
exports.SelectorToDelete = SelectorToDelete;
var SelectorToRedact = /*#__PURE__*/function () {
  function SelectorToRedact(tables, id) {
    _classCallCheck(this, SelectorToRedact);
    this.id = id;
    this.tables = tables;
  }
  _createClass(SelectorToRedact, [{
    key: "getVariants",
    value: function getVariants(content) {
      var html = "";
      for (var i = 0; i < content.length; i++) {
        html = "".concat(html, "\n                    <option>").concat(content[i], "</option>");
      }
      return html;
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)("<label for=\"".concat(this.id, "\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u043E\u043A\u0443 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F:</label><select id=\"").concat(this.id, "\">").concat(this.getVariants(this.tables), "</select>"));
    }
  }]);
  return SelectorToRedact;
}();
exports.SelectorToRedact = SelectorToRedact;
},{"../utils":"js_scripts/utils.js"}],"js_scripts/editor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Add = Add;
exports.Delete = Delete;
var _parcer = require("./parcer");
function Add(data, key) {
  var oldData = (0, _parcer.getValue)(key);
  console.log(data);
  oldData.push(data);
  console.log(oldData);
  window.localStorage.setItem(key, JSON.stringify(oldData));
}
function Delete(key) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var row = (0, _parcer.getValue)(key);
  if (row.length > 1) {
    row.splice(index - 1, 1);
    window.localStorage.setItem(key, JSON.stringify(row));
  } else {
    window.localStorage.setItem(key, JSON.stringify(row));
  }
}
},{"./parcer":"js_scripts/parcer.js"}],"js_scripts/handlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteEvent = DeleteEvent;
exports.UpdateEvent = UpdateEvent;
var _editor = require("./editor");
function DeleteEvent() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var selector_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var value = document.getElementById(selector_id).value;
  (0, _editor.Delete)(key, value);
}
function UpdateEvent(key, input_id, selector_id) {
  var value = document.getElementById(selector_id).value;
  var input = document.getElementById(input_id).value;
  console.log(input);
  var row = Array(input.split(','));
  switch (value) {
    case 'Software':
      (0, _editor.Add)(row, key[1]);
    case 'Computers':
      (0, _editor.Add)(row, key[0]);
    case 'Office staff':
      (0, _editor.Add)(row, key[2]);
  }
}
},{"./editor":"js_scripts/editor.js"}],"js_scripts/classes/buttons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditButton = exports.Button = void 0;
var _utils = require("../utils");
var _handlers = require("../handlers");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Button = /*#__PURE__*/function () {
  function Button(id, key, selector_id) {
    _classCallCheck(this, Button);
    this.id = id;
    this.key = key;
    this.selector_id = selector_id;
  }
  _createClass(Button, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)("<button id=\"".concat(this.id, "\" style=\"width: 200px;height: 20px;background: firebrick\" ></button>"));
    }
  }]);
  return Button;
}();
exports.Button = Button;
var EditButton = /*#__PURE__*/function () {
  function EditButton(id) {
    _classCallCheck(this, EditButton);
    this.id = id;
  }
  _createClass(EditButton, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)("<button id=\"".concat(this.id, "\" style=\"width: 200px;height: 20px;background: lightgreen\";></button>"));
    }
  }]);
  return EditButton;
}();
exports.EditButton = EditButton;
},{"../utils":"js_scripts/utils.js","../handlers":"js_scripts/handlers.js"}],"js_scripts/classes/inputField.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputField = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var InputField = /*#__PURE__*/function () {
  function InputField(id) {
    _classCallCheck(this, InputField);
    this.id = id;
  }
  _createClass(InputField, [{
    key: "toHTML",
    value: function toHTML() {
      return "<input type=\"text\" id=\"".concat(this.id, "\">");
    }
  }]);
  return InputField;
}();
exports.InputField = InputField;
},{}],"js_scripts/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;
var _blocks = require("./classes/blocks");
var _tableBuilder = require("./tables/table-builder");
var _parcer = require("./parcer");
var _selector = require("./classes/selector");
var _buttons = require("./classes/buttons");
var _inputField = require("./classes/inputField");
var _handlers = require("./handlers");
var _editor = require("./editor");
var computerTable = new _blocks.Table((0, _tableBuilder.tableBuilder)('computersTable'));
var softwareTable = new _blocks.Table((0, _tableBuilder.tableBuilder)('softwareTable'));
var officeStaffTable = new _blocks.Table((0, _tableBuilder.tableBuilder)('officeStaffTable'));
var computersSelector = new _selector.SelectorToDelete('computersSelector', (0, _parcer.getValue)('computersTable').length);
var softwareSelector = new _selector.SelectorToDelete('softwareSelector', (0, _parcer.getValue)('softwareTable').length);
var officeStSelector = new _selector.SelectorToDelete('officeStSelector', (0, _parcer.getValue)('officeStaffTable').length);
var deleteButton = new _buttons.Button('computersTableDel', 'computersTable', 'computersSelector');
var deleteButtonSoft = new _buttons.Button('softTableDel', 'softwareTable', 'softwareSelector');
var deleteButtonOfSt = new _buttons.Button('ofStTableDel', 'officeStaffTable', 'officeStSelector');
var input = new _inputField.InputField('input');
var editButton = new _buttons.EditButton('updateButton');
var editSelector = new _selector.SelectorToRedact(['Computers', 'Software', 'Office staff'], 'edit');
var text = new _blocks.TextBlock('Для редактирования строк выберите таблицу из выпадающего списка, запиши поле ввода через запятую параметр для каждого столбца и нажмите зелёную кнопку');
var model = [computerTable, computersSelector, deleteButton, softwareTable, softwareSelector, deleteButtonSoft, officeStaffTable, officeStSelector, deleteButtonOfSt, text, input, editSelector, editButton];
exports.model = model;
},{"./classes/blocks":"js_scripts/classes/blocks.js","./tables/table-builder":"js_scripts/tables/table-builder.js","./parcer":"js_scripts/parcer.js","./classes/selector":"js_scripts/classes/selector.js","./classes/buttons":"js_scripts/classes/buttons.js","./classes/inputField":"js_scripts/classes/inputField.js","./handlers":"js_scripts/handlers.js","./editor":"js_scripts/editor.js"}],"js_scripts/classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);
    this.$el = document.querySelector(selector);
  }
  _createClass(Site, [{
    key: "render",
    value: function render(model) {
      var _this = this;
      this.$el.innerHTML = '';
      model.forEach(function (block) {
        _this.$el.insertAdjacentHTML('beforeend', block.toHTML());
      });
    }
  }]);
  return Site;
}();
exports.Site = Site;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js_scripts/index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model");
var _site = require("./classes/site");
require("../main.css");
var _editor = require("./editor");
var _handlers = require("./handlers");
var site = new _site.Site('#site');
/*document.getElementById('computersTableDel').onclick=function (){
let value=document.getElementById('computersSelector').value
Delete('computersTable',value)
}*/
site.render(_model.model);
document.getElementById(_model.model[2].id).onclick = function () {
  var value = document.getElementById('computersSelector').value;
  (0, _editor.Delete)('computersTable', value);
};
document.getElementById(_model.model[5].id).onclick = function () {
  var value = document.getElementById('softwareSelector').value;
  (0, _editor.Delete)('softwareTable', value);
};
document.getElementById(_model.model[8].id).onclick = function () {
  var value = document.getElementById('officeStSelector').value;
  (0, _editor.Delete)('officeStaffTable', value);
};
document.getElementById(_model.model[_model.model.length - 1].id).onclick = function () {
  var value = document.getElementById('edit').value;
  var input = document.getElementById('input').value;
  if (input != '') {
    var row = input.split(',');
    if (value == 'Software') {
      (0, _editor.Add)(row, 'softwareTable');
    } else if (value == 'Computers') {
      (0, _editor.Add)(row, 'computersTable');
    } else if (value == 'Office staff') {
      (0, _editor.Add)(row, 'officeStaffTable');
    }
  } else throw "Error";
};
//document.getElementById(model[2].id).addEventListener("click",DeleteEvent('computersTable','computersSelector'))
//document.getElementById(model[5].id).addEventListener("click",DeleteEvent('softwareTable','softwareSelector'))
//document.getElementById(model[8].id).addEventListener("dblclick",DeleteEvent('officeStaffTable','officeStSelector'))
//document.getElementById(model[12].id).addEventListener("dbclick",UpdateEvent(['computersTable','softwareTable','officeStaffTable'],'input','edit'))
},{"./model":"js_scripts/model.js","./classes/site":"js_scripts/classes/site.js","../main.css":"main.css","./editor":"js_scripts/editor.js","./handlers":"js_scripts/handlers.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64913" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js_scripts/index.js"], null)
//# sourceMappingURL=/js_scripts.cd4443ae.js.map