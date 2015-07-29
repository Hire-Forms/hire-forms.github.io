(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.HireFormsAutocompleteList = f();
	}
})(function () {
	var define, module, exports;return (function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	})({ 1: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var keyValueMap = _react2["default"].PropTypes.shape({
				key: _react2["default"].PropTypes.string.isRequired,
				value: _react2["default"].PropTypes.string.isRequired
			});

			exports.keyValueMap = keyValueMap;
			// ARRAY OF

			var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

			exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
			var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

			exports.arrayOfStrings = arrayOfStrings;
			var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

			exports.arrayOfElements = arrayOfElements;
			// OR

			var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

			exports.stringOrArray = stringOrArray;
			var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

			exports.stringOrKeyValueMap = stringOrKeyValueMap;
			var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

			exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
			var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

			exports.elementOrArrayOfElement = elementOrArrayOfElement;
			var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

			exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
			var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
			exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
		}, { "react": "react" }], 2: [function (_dereq_, module, exports) {
			// TODO Fix filter options (remove values from options). Doesn't work, because AutoComplete has a cache for the async.
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			})();

			var _get = function get(_x, _x2, _x3) {
				var _again = true;_function: while (_again) {
					var object = _x,
					    property = _x2,
					    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
						var parent = Object.getPrototypeOf(object);if (parent === null) {
							return undefined;
						} else {
							_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
						}
					} else if ("value" in desc) {
						return desc.value;
					} else {
						var getter = desc.get;if (getter === undefined) {
							return undefined;
						}return getter.call(receiver);
					}
				}
			};

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var _hireFormsList = _dereq_("hire-forms-list");

			var _hireFormsList2 = _interopRequireDefault(_hireFormsList);

			var _hireFormsAutocomplete = _dereq_("hire-forms-autocomplete");

			var _hireFormsAutocomplete2 = _interopRequireDefault(_hireFormsAutocomplete);

			var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

			var AutocompleteList = (function (_React$Component) {
				_inherits(AutocompleteList, _React$Component);

				function AutocompleteList() {
					_classCallCheck(this, AutocompleteList);

					_get(Object.getPrototypeOf(AutocompleteList.prototype), "constructor", this).apply(this, arguments);
				}

				_createClass(AutocompleteList, [{
					key: "handleEditableListChange",
					value: function handleEditableListChange(values) {
						this.props.onChange(values);
					}
				}, {
					key: "handleAutocompleteChange",
					value: function handleAutocompleteChange(value) {
						this.props.values.push(value);
						this.props.onChange(this.props.values);

						// this.refs.autocomplete.clear();
					}
				}, {
					key: "render",
					value: function render() {
						// console.log(this.props.values);
						// let options = this.props.options.filter((option) => {
						// 	return !this.props.values.contains(option);
						// });

						return _react2["default"].createElement("div", { className: "hire-forms-autocomplete-list" }, _react2["default"].createElement(_hireFormsList2["default"], {
							editable: false,
							onChange: this.handleEditableListChange.bind(this),
							values: this.props.values }), _react2["default"].createElement(_hireFormsAutocomplete2["default"], {
							async: this.props.async,
							onChange: this.handleAutocompleteChange.bind(this),
							options: this.props.options,
							placeholder: this.props.placeholder,
							ref: "autocomplete" }));
					}
				}]);

				return AutocompleteList;
			})(_react2["default"].Component);

			AutocompleteList.defaultProps = {
				options: [],
				ordered: false,
				values: []
			};
			AutocompleteList.propTypes = {
				async: _react2["default"].PropTypes.func,
				onChange: _react2["default"].PropTypes.func.isRequired,
				options: _hireFormsPropTypes.arrayOfKeyValueMaps,
				ordered: _react2["default"].PropTypes.bool,
				placeholder: _react2["default"].PropTypes.string,
				values: _hireFormsPropTypes.arrayOfKeyValueMaps
			};

			exports["default"] = AutocompleteList;
			module.exports = exports["default"];
		}, { "hire-forms-autocomplete": 3, "hire-forms-list": 4, "hire-forms-prop-types": 1, "react": "react" }], 3: [function (_dereq_, module, exports) {
			(function (global) {
				"use strict";

				(function (f) {
					if (typeof exports === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.HireFormsAutocomplete = f();
					}
				})(function () {
					var define, module, exports;return (function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
								}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, l, l.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
					})({ 1: [function (_dereq_, module, exports) {
							/*!
         Copyright (c) 2015 Jed Watson.
         Licensed under the MIT License (MIT), see
         http://jedwatson.github.io/classnames
       */

							(function () {
								"use strict";

								function classNames() {

									var classes = "";

									for (var i = 0; i < arguments.length; i++) {
										var arg = arguments[i];
										if (!arg) continue;

										var argType = typeof arg;

										if ("string" === argType || "number" === argType) {
											classes += " " + arg;
										} else if (Array.isArray(arg)) {
											classes += " " + classNames.apply(null, arg);
										} else if ("object" === argType) {
											for (var key in arg) {
												if (arg.hasOwnProperty(key) && arg[key]) {
													classes += " " + key;
												}
											}
										}
									}

									return classes.substr(1);
								}

								if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
									// AMD. Register as an anonymous module.
									define(function () {
										return classNames;
									});
								} else if (typeof module !== "undefined" && module.exports) {
									module.exports = classNames;
								} else {
									window.classNames = classNames;
								}
							})();
						}, {}], 2: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var Input = _react2["default"].createClass({
								displayName: "Input",

								propTypes: {
									onChange: _react2["default"].PropTypes.func,
									onInvalid: _react2["default"].PropTypes.func,
									onKeyDown: _react2["default"].PropTypes.func,
									onKeyUp: _react2["default"].PropTypes.func,
									placeholder: _react2["default"].PropTypes.string,
									style: _react2["default"].PropTypes.object,
									valid: _react2["default"].PropTypes.bool,
									validate: _react2["default"].PropTypes.func,
									value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
								},

								getDefaultProps: function getDefaultProps() {
									return {
										value: ""
									};
								},

								getInitialState: function getInitialState() {
									return {
										focus: false,
										valid: true
									};
								},

								componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
									if (this.props.value === nextProps.value) {
										return;
									}

									if (nextProps.value === "") {
										if (!this.state.valid) {
											this.setState({ valid: true });
										}

										return;
									}

									if (this.props.validate) {
										var valid = this.props.validate(nextProps.value);

										this.setState({ valid: valid });

										if (!valid && this.props.onInvalid) {
											this.props.onInvalid(nextProps.value);
										}
									}
								},

								shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
									var propsValueChange = this.props.value !== nextProps.value;
									var stateFocusChange = this.state.focus !== nextState.focus;

									return propsValueChange || stateFocusChange;
								},

								toggleFocus: function toggleFocus() {
									this.setState({ focus: !this.state.focus });
								},

								handleKeyDown: function handleKeyDown(ev) {
									if (this.props.onKeyDown) {
										this.props.onKeyDown(ev);
									}
								},

								handleKeyUp: function handleKeyUp(ev) {
									if (this.props.onKeyUp) {
										this.props.onKeyUp(ev);
									}
								},

								handleChange: function handleChange(ev) {
									this.props.onChange(ev.currentTarget.value, ev);
								},

								render: function render() {
									return _react2["default"].createElement("input", {
										className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
										onBlur: this.toggleFocus,
										onChange: this.handleChange,
										onFocus: this.toggleFocus,
										onKeyDown: this.handleKeyDown,
										onKeyUp: this.handleKeyUp,
										placeholder: this.props.placeholder,
										style: this.props.style,
										value: this.props.value });
								}
							});

							exports["default"] = Input;
							module.exports = exports["default"];
						}, { "classnames": 1, "react": "react" }], 3: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var keyValueMap = _react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string.isRequired,
								value: _react2["default"].PropTypes.string.isRequired
							});

							exports.keyValueMap = keyValueMap;
							// ARRAY OF

							var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

							exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
							var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

							exports.arrayOfStrings = arrayOfStrings;
							var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

							exports.arrayOfElements = arrayOfElements;
							// OR

							var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

							exports.stringOrArray = stringOrArray;
							var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

							exports.stringOrKeyValueMap = stringOrKeyValueMap;
							var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

							exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
							var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

							exports.elementOrArrayOfElement = elementOrArrayOfElement;
							var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

							exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
							var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
							exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
						}, { "react": "react" }], 4: [function (_dereq_, module, exports) {

							/*
        * @param {Array} list
        * @returns {Boolean}
        */
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});
							exports.isListOfStrings = isListOfStrings;
							exports.isKeyValueMap = isKeyValueMap;
							exports.castArray = castArray;
							exports.castKeyValueArray = castKeyValueArray;

							function isListOfStrings(list) {
								if (!Array.isArray(list) || !list.length) {
									return false;
								}

								return list.every(function (item) {
									return typeof item === "string";
								});
							}

							/*
        * @param {Object} map
        * @returns {Boolean}
        */

							function isKeyValueMap(map) {
								if (map == null) {
									return false;
								}

								return map.hasOwnProperty("key") && map.hasOwnProperty("value");
							}

							/*
        * Always return an array.
        *
        * @param {String|Array} arr
        * @returns {Array}
        */

							function castArray(arr) {
								return Array.isArray(arr) ? arr : [arr];
							}

							;

							/*
        * Always return an array of key/value maps.
        *
        * @param {Number|String|Boolean|Array} list
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValueArray(list) {
								list = castArray(list);

								return list.map(function (item) {
									return isKeyValueMap(item) ? item : {
										key: item,
										value: item
									};
								});
							}
						}, {}], 5: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _hireFormsInput = _dereq_("hire-forms-input");

							var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

							var _hireFormsOptions = _dereq_("hire-forms-options");

							var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var _hireFormsUtils = _dereq_("hire-forms-utils");

							var Autocomplete = (function (_React$Component) {
								function Autocomplete(props) {
									_classCallCheck(this, Autocomplete);

									_get(Object.getPrototypeOf(Autocomplete.prototype), "constructor", this).call(this, props);

									this.cache = {};

									this.state = {
										options: [],
										query: props.value.value
									};
								}

								_inherits(Autocomplete, _React$Component);

								_createClass(Autocomplete, [{
									key: "componentWillReceiveProps",
									value: function componentWillReceiveProps(nextProps) {
										this.setState({
											query: nextProps.value.value,
											options: []
										});
									}
								}, {
									key: "handleInputChange",
									value: function handleInputChange(inputValue) {
										// Return empty options if inputValue length is beneath a treshold.
										if (inputValue.length < this.props.minLength) {
											return this.setState({
												query: inputValue,
												options: []
											});
										}

										// Return cache if inputValue is found in the cache.
										if (this.cache.hasOwnProperty(inputValue)) {
											return this.setState({
												query: inputValue,
												options: this.cache[inputValue]
											});
										}

										if (this.props.async == null) {
											this.filter(inputValue);
										} else {
											this.filterAsync(inputValue);
										}
									}
								}, {
									key: "filterAsync",
									value: function filterAsync(inputValue) {
										this.setState({ "query": inputValue });

										var done = function done(response) {
											// Add the options to the cache.
											this.cache[inputValue] = response;

											// Get the cache from the current (!!!) inputValue. The results trail behind
											// the user typing, so we have to pass the options of the current inputValue,
											// not the options of the inputValue of the fetch.
											var state = this.cache.hasOwnProperty(this.state.query) ? { options: this.cache[this.state.query] } : { options: [] };

											this.setState(state);
										};

										this.props.async(inputValue, done.bind(this));
									}
								}, {
									key: "filter",
									value: function filter(inputValue) {
										this.cache[inputValue] = inputValue === "" ? [] : this.props.options.filter(function (value) {
											if ((0, _hireFormsUtils.isKeyValueMap)(value)) {
												value = value.value;
											}

											return value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
										});

										this.setState({
											query: inputValue,
											options: this.cache[inputValue]
										});
									}
								}, {
									key: "handleInputKeyDown",
									value: function handleInputKeyDown(ev) {
										// Escape
										if (ev.keyCode === 27) {
											this.setState({
												options: [],
												query: ""
											});
										}

										if (this.refs.options == null) {
											return;
										}

										// Up
										if (ev.keyCode === 38) {
											this.refs.options.highlightPrev();
										}

										// Down
										if (ev.keyCode === 40) {
											this.refs.options.highlightNext();
										}

										// Enter
										if (ev.keyCode === 13) {
											this.refs.options.select();
										}
									}
								}, {
									key: "handleOptionsChange",

									/*
          * @param {Object} value Key/value map, ie: {key: "A", value: "A"}
          */
									value: function handleOptionsChange(value) {
										this.props.onChange(value);
									}
								}, {
									key: "render",
									value: function render() {
										var options = this.state.options.length !== 0 ? _react2["default"].createElement(_hireFormsOptions2["default"], {
											onChange: this.handleOptionsChange.bind(this),
											query: this.state.query,
											ref: "options",
											value: this.props.value,
											values: (0, _hireFormsUtils.castKeyValueArray)(this.state.options) }) : null;

										return _react2["default"].createElement("div", {
											className: "hire-forms-autocomplete",
											style: { position: "relative" } }, _react2["default"].createElement(_hireFormsInput2["default"], {
											onChange: this.handleInputChange.bind(this),
											onKeyDown: this.handleInputKeyDown.bind(this),
											placeholder: this.props.placeholder,
											ref: "input",
											value: this.state.query }), this.props.children, options);
									}
								}]);

								return Autocomplete;
							})(_react2["default"].Component);

							Autocomplete.propTypes = {
								async: _react2["default"].PropTypes.func,
								children: _react2["default"].PropTypes.element,
								minLength: _react2["default"].PropTypes.number,
								onChange: _react2["default"].PropTypes.func,
								options: _hireFormsPropTypes.arrayOfKeyValueMaps,
								placeholder: _react2["default"].PropTypes.string,
								value: _hireFormsPropTypes.keyValueMap
							};

							Autocomplete.defaultProps = {
								minLength: 1,
								value: {
									key: "",
									value: ""
								}
							};

							exports["default"] = Autocomplete;
							module.exports = exports["default"];
						}, { "hire-forms-input": 2, "hire-forms-options": 6, "hire-forms-prop-types": 3, "hire-forms-utils": 4, "react": "react" }], 6: [function (_dereq_, module, exports) {
							(function (global) {
								(function (f) {
									if (typeof exports === "object" && typeof module !== "undefined") {
										module.exports = f();
									} else if (typeof define === "function" && define.amd) {
										define([], f);
									} else {
										var g;if (typeof window !== "undefined") {
											g = window;
										} else if (typeof global !== "undefined") {
											g = global;
										} else if (typeof self !== "undefined") {
											g = self;
										} else {
											g = this;
										}g.HireFormsOptions = f();
									}
								})(function () {
									var define, module, exports;return (function e(t, n, r) {
										function s(o, u) {
											if (!n[o]) {
												if (!t[o]) {
													var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
												}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
													var n = t[o][1][e];return s(n ? n : e);
												}, l, l.exports, e, t, n, r);
											}return n[o].exports;
										}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
									})({ 1: [function (_dereq_, module, exports) {
											"use strict";

											Object.defineProperty(exports, "__esModule", {
												value: true
											});

											function _interopRequireDefault(obj) {
												return obj && obj.__esModule ? obj : { "default": obj };
											}

											var _react = _dereq_("react");

											var _react2 = _interopRequireDefault(_react);

											var keyValueMap = _react2["default"].PropTypes.shape({
												key: _react2["default"].PropTypes.string.isRequired,
												value: _react2["default"].PropTypes.string.isRequired
											});

											exports.keyValueMap = keyValueMap;
											// ARRAY OF

											var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

											exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
											var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

											exports.arrayOfStrings = arrayOfStrings;
											var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

											exports.arrayOfElements = arrayOfElements;
											// OR

											var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

											exports.stringOrArray = stringOrArray;
											var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

											exports.stringOrKeyValueMap = stringOrKeyValueMap;
											var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

											exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
											var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

											exports.elementOrArrayOfElement = elementOrArrayOfElement;
											var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

											exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
											var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
											exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
										}, { "react": "react" }], 2: [function (_dereq_, module, exports) {

											/*
            * @param {Array} list
            * @returns {Boolean}
            */
											"use strict";

											Object.defineProperty(exports, "__esModule", {
												value: true
											});
											exports.isListOfStrings = isListOfStrings;
											exports.isKeyValueMap = isKeyValueMap;
											exports.castArray = castArray;
											exports.castKeyValue = castKeyValue;
											exports.castKeyValueArray = castKeyValueArray;

											function isListOfStrings(list) {
												if (!Array.isArray(list) || !list.length) {
													return false;
												}

												return list.every(function (item) {
													return typeof item === "string";
												});
											}

											/*
            * @param {Object} map
            * @returns {Boolean}
            */

											function isKeyValueMap(map) {
												if (map == null) {
													return false;
												}

												return map.hasOwnProperty("key") && map.hasOwnProperty("value");
											}

											/*
            * Always return an array.
            *
            * @param {String|Array} arr
            * @returns {Array}
            */

											function castArray(arr) {
												return Array.isArray(arr) ? arr : [arr];
											}

											;

											/*
            * Always return a key/value map.
            *
            * @param {Number|String|Boolean|Object} item
            * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
            */

											function castKeyValue(item) {
												return isKeyValueMap(item) ? item : {
													key: item,
													value: item
												};
											}

											/*
            * Always return an array of key/value maps.
            *
            * @param {Number|String|Boolean|Array|Object} list
            * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
            */

											function castKeyValueArray(list) {
												list = castArray(list);

												return list.map(castKeyValue);
											}
										}, {}], 3: [function (_dereq_, module, exports) {
											// TODO move listitem to seperate component (so we don't have to store data-key and data-value as attributes)
											// Move util functions to seperate module

											"use strict";

											Object.defineProperty(exports, "__esModule", {
												value: true
											});

											var _createClass = (function () {
												function defineProperties(target, props) {
													for (var i = 0; i < props.length; i++) {
														var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
													}
												}return function (Constructor, protoProps, staticProps) {
													if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
												};
											})();

											var _get = function get(_x, _x2, _x3) {
												var _again = true;_function: while (_again) {
													var object = _x,
													    property = _x2,
													    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
														var parent = Object.getPrototypeOf(object);if (parent === null) {
															return undefined;
														} else {
															_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
														}
													} else if ("value" in desc) {
														return desc.value;
													} else {
														var getter = desc.get;if (getter === undefined) {
															return undefined;
														}return getter.call(receiver);
													}
												}
											};

											function _interopRequireDefault(obj) {
												return obj && obj.__esModule ? obj : { "default": obj };
											}

											function _classCallCheck(instance, Constructor) {
												if (!(instance instanceof Constructor)) {
													throw new TypeError("Cannot call a class as a function");
												}
											}

											function _inherits(subClass, superClass) {
												if (typeof superClass !== "function" && superClass !== null) {
													throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
												}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
											}

											var _react = _dereq_("react");

											var _react2 = _interopRequireDefault(_react);

											var _classnames = _dereq_("classnames");

											var _classnames2 = _interopRequireDefault(_classnames);

											var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

											var _hireFormsUtils = _dereq_("hire-forms-utils");

											var hasKeyValue = function hasKeyValue(list, item) {
												return list.filter(function (li) {
													return li.key === item.key;
												}).length > 0;
											};

											/**
            * Options are rendered beneath the autocomplete and select components.
            *
            * @class
            * @extends React.Component
            */

											var Options = (function (_React$Component) {
												_inherits(Options, _React$Component);

												function Options() {
													_classCallCheck(this, Options);

													_get(Object.getPrototypeOf(Options.prototype), "constructor", this).apply(this, arguments);
												}

												_createClass(Options, [{
													key: "componentDidMount",
													value: function componentDidMount() {
														var node = _react2["default"].findDOMNode(this);

														if (node) {
															node.style.zIndex = 1000;
														}
													}
												}, {
													key: "componentWillUnmount",
													value: function componentWillUnmount() {
														var node = _react2["default"].findDOMNode(this);
														node.style.zIndex = 0;
													}

													/**
              * Sort values on relevance. A result is more relevant when the search
              * query is more at the beginning of the string. In other words:
              * String.indexOf(props.query): lower is better.
              * @param {Array<Object>} value An array of key/value maps
              * @param {String} query A search query
              * @returns {Array<Object>} Sorted values on relevance
              */
												}, {
													key: "sortRelevance",
													value: function sortRelevance(values, query) {
														return values.sort(function (a, b) {
															a = a.value.toLowerCase();
															b = b.value.toLowerCase();

															var indexA = a.indexOf(query);
															var indexB = b.indexOf(query);

															if (indexA > indexB) {
																return 1;
															}

															if (indexA < indexB) {
																return -1;
															}

															if (indexA === indexB) {
																if (a > b) {
																	return 1;
																}

																if (a < b) {
																	return -1;
																}
															}

															return 0;
														});
													}

													/*
              * highlight the currently highlighted option.
              *
              * @param {Object} target An HTMLElement or event object
              * @param {String} className Name of the highlight class
              */
												}, {
													key: "highlight",
													value: function highlight(target, className) {
														// Check if target is an event object.
														if (target.hasOwnProperty("currentTarget")) {
															target = target.currentTarget;
														}

														target.classList.add(className);
													}

													/**
              * Unhighlight the currently highlighted option.
              *
              * @param {String} className Name of the highlight class
              * @return {Object} The unhighlighted HTMLElement
              */
												}, {
													key: "unhighlight",
													value: function unhighlight(className) {
														var el = undefined;
														var node = _react2["default"].findDOMNode(this);

														if (node) {
															el = node.querySelector("li." + className);

															if (el) {
																el.classList.remove(className);
															}
														}

														return el;
													}
												}, {
													key: "handleClick",
													value: function handleClick(ev) {
														this.props.onChange(this.getOptionData(ev.currentTarget));
													}
												}, {
													key: "highlightPrev",
													value: function highlightPrev() {
														var prev = undefined;
														var current = this.unhighlight(this.props.highlightClass);

														if (current) {
															prev = current.previousElementSibling;
														}

														// If current and prev aren't found, start at the top.
														// Current is not found if there is no list item highlighted.
														// Prev is not found if the first list item is highlighted.
														if (!prev) {
															prev = _react2["default"].findDOMNode(this).lastChild;
														}

														this.highlight(prev, this.props.highlightClass);
													}
												}, {
													key: "highlightNext",
													value: function highlightNext() {
														var next = undefined;
														var current = this.unhighlight(this.props.highlightClass);

														if (current) {
															next = current.nextElementSibling;
														}

														// If current and next aren't found, start at the top.
														// Current is not found if there is no list item highlighted.
														// Next is not found if the last list item is highlighted.
														if (!next) {
															next = _react2["default"].findDOMNode(this).firstChild;
														}

														this.highlight(next, this.props.highlightClass);
													}
												}, {
													key: "select",
													value: function select() {
														var current = this.unhighlight(this.props.highlightClass);

														if (current) {
															this.props.onChange(this.getOptionData(current));
														}
													}

													/**
              * Get the key (id) and value (display name) of an option DOM element.
              *
              * @param {Object} el - Option DOM element
              * @returns {Object}
              */
												}, {
													key: "getOptionData",
													value: function getOptionData(el) {
														return {
															key: el.getAttribute("data-key"),
															value: el.getAttribute("data-value")
														};
													}
												}, {
													key: "render",
													value: function render() {
														var _this = this;

														if (this.props.values.length === 0) {
															return null;
														}

														var values = this.props.sort || this.props.sortRelevance && this.props.query !== "" ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

														var listitems = values.map(function (data, index) {
															var displayValue = data.value;

															if (_this.props.query.length) {
																var re = new RegExp(_this.props.query, "ig");
																displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
															}

															return _react2["default"].createElement("li", {
																className: (0, _classnames2["default"])({
																	"hire-forms-option": true,
																	selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this.props.value), data)
																}),
																dangerouslySetInnerHTML: { __html: displayValue },
																"data-key": data.key,
																"data-value": data.value,
																key: index,
																onClick: _this.handleClick.bind(_this) });
														});

														return _react2["default"].createElement("ul", {
															className: "hire-options" }, listitems);
													}
												}]);

												return Options;
											})(_react2["default"].Component);

											Options.defaultProps = {
												highlightClass: "highlight",
												query: "",
												sort: false,
												sortRelevance: true,
												value: { key: "", value: "" },
												values: []
											};

											Options.propTypes = {
												highlightClass: _react2["default"].PropTypes.string,
												onChange: _react2["default"].PropTypes.func.isRequired,
												query: _react2["default"].PropTypes.string,
												sort: _react2["default"].PropTypes.bool,
												sortRelevance: _react2["default"].PropTypes.bool,
												value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
												values: _hireFormsPropTypes.arrayOfKeyValueMaps
											};

											exports["default"] = Options;
											module.exports = exports["default"];
										}, { "classnames": "classnames", "hire-forms-prop-types": 1, "hire-forms-utils": 2, "react": "react" }] }, {}, [3])(3);
								});
							}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
						}, { "classnames": 7, "hire-forms-prop-types": 8, "hire-forms-utils": 9, "react": "react" }], 7: [function (_dereq_, module, exports) {
							/*!
         Copyright (c) 2015 Jed Watson.
         Licensed under the MIT License (MIT), see
         http://jedwatson.github.io/classnames
       */

							(function () {
								"use strict";

								function classNames() {

									var classes = "";

									for (var i = 0; i < arguments.length; i++) {
										var arg = arguments[i];
										if (!arg) continue;

										var argType = typeof arg;

										if ("string" === argType || "number" === argType) {
											classes += " " + arg;
										} else if (Array.isArray(arg)) {
											classes += " " + classNames.apply(null, arg);
										} else if ("object" === argType) {
											for (var key in arg) {
												if (arg.hasOwnProperty(key) && arg[key]) {
													classes += " " + key;
												}
											}
										}
									}

									return classes.substr(1);
								}

								if (typeof module !== "undefined" && module.exports) {
									module.exports = classNames;
								} else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
									// AMD. Register as an anonymous module.
									define(function () {
										return classNames;
									});
								} else {
									window.classNames = classNames;
								}
							})();
						}, {}], 8: [function (_dereq_, module, exports) {
							arguments[4][3][0].apply(exports, arguments);
						}, { "dup": 3, "react": "react" }], 9: [function (_dereq_, module, exports) {

							/*
        * @param {Array} list
        * @returns {Boolean}
        */
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});
							exports.isListOfStrings = isListOfStrings;
							exports.isKeyValueMap = isKeyValueMap;
							exports.castArray = castArray;
							exports.castKeyValue = castKeyValue;
							exports.castKeyValueArray = castKeyValueArray;

							function isListOfStrings(list) {
								if (!Array.isArray(list) || !list.length) {
									return false;
								}

								return list.every(function (item) {
									return typeof item === "string";
								});
							}

							/*
        * @param {Object} map
        * @returns {Boolean}
        */

							function isKeyValueMap(map) {
								if (map == null) {
									return false;
								}

								return map.hasOwnProperty("key") && map.hasOwnProperty("value");
							}

							/*
        * Always return an array.
        *
        * @param {String|Array} arr
        * @returns {Array}
        */

							function castArray(arr) {
								return Array.isArray(arr) ? arr : [arr];
							}

							;

							/*
        * Always return a key/value map.
        *
        * @param {Number|String|Boolean|Object} item
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValue(item) {
								return isKeyValueMap(item) ? item : {
									key: item,
									value: item
								};
							}

							/*
        * Always return an array of key/value maps.
        *
        * @param {Number|String|Boolean|Array|Object} list
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValueArray(list) {
								list = castArray(list);

								return list.map(castKeyValue);
							}
						}, {}] }, {}, [5])(5);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, {}], 4: [function (_dereq_, module, exports) {
			(function (global) {
				"use strict";

				(function (f) {
					if (typeof exports === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.HireFormsMutableList = f();
					}
				})(function () {
					var define, module, exports;return (function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
								}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, l, l.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
					})({ 1: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var Input = _react2["default"].createClass({
								displayName: "Input",

								propTypes: {
									onChange: _react2["default"].PropTypes.func,
									onInvalid: _react2["default"].PropTypes.func,
									onKeyDown: _react2["default"].PropTypes.func,
									onKeyUp: _react2["default"].PropTypes.func,
									placeholder: _react2["default"].PropTypes.string,
									style: _react2["default"].PropTypes.object,
									valid: _react2["default"].PropTypes.bool,
									validate: _react2["default"].PropTypes.func,
									value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
								},

								getDefaultProps: function getDefaultProps() {
									return {
										value: ""
									};
								},

								getInitialState: function getInitialState() {
									return {
										focus: false,
										valid: true
									};
								},

								componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
									if (this.props.value === nextProps.value) {
										return;
									}

									if (nextProps.value === "") {
										if (!this.state.valid) {
											this.setState({ valid: true });
										}

										return;
									}

									if (this.props.validate) {
										var valid = this.props.validate(nextProps.value);

										this.setState({ valid: valid });

										if (!valid && this.props.onInvalid) {
											this.props.onInvalid(nextProps.value);
										}
									}
								},

								shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
									var propsValueChange = this.props.value !== nextProps.value;
									var stateFocusChange = this.state.focus !== nextState.focus;

									return propsValueChange || stateFocusChange;
								},

								toggleFocus: function toggleFocus() {
									this.setState({ focus: !this.state.focus });
								},

								handleKeyDown: function handleKeyDown(ev) {
									if (this.props.onKeyDown) {
										this.props.onKeyDown(ev);
									}
								},

								handleKeyUp: function handleKeyUp(ev) {
									if (this.props.onKeyUp) {
										this.props.onKeyUp(ev);
									}
								},

								handleChange: function handleChange(ev) {
									this.props.onChange(ev.currentTarget.value, ev);
								},

								render: function render() {
									return _react2["default"].createElement("input", {
										className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
										onBlur: this.toggleFocus,
										onChange: this.handleChange,
										onFocus: this.toggleFocus,
										onKeyDown: this.handleKeyDown,
										onKeyUp: this.handleKeyUp,
										placeholder: this.props.placeholder,
										style: this.props.style,
										value: this.props.value });
								}
							});

							exports["default"] = Input;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "react": "react" }], 2: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var keyValueMap = _react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string.isRequired,
								value: _react2["default"].PropTypes.string.isRequired
							});

							exports.keyValueMap = keyValueMap;
							// ARRAY OF

							var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

							exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
							var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

							exports.arrayOfStrings = arrayOfStrings;
							var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

							exports.arrayOfElements = arrayOfElements;
							// OR

							var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

							exports.stringOrArray = stringOrArray;
							var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

							exports.stringOrKeyValueMap = stringOrKeyValueMap;
							var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

							exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
							var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

							exports.elementOrArrayOfElement = elementOrArrayOfElement;
							var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

							exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
							var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
							exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
						}, { "react": "react" }], 3: [function (_dereq_, module, exports) {

							/*
        * @param {Array} list
        * @returns {Boolean}
        */
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});
							exports.isListOfStrings = isListOfStrings;
							exports.isKeyValueMap = isKeyValueMap;
							exports.castArray = castArray;
							exports.castKeyValue = castKeyValue;
							exports.castKeyValueArray = castKeyValueArray;

							function isListOfStrings(list) {
								if (!Array.isArray(list) || !list.length) {
									return false;
								}

								return list.every(function (item) {
									return typeof item === "string";
								});
							}

							/*
        * @param {Object} map
        * @returns {Boolean}
        */

							function isKeyValueMap(map) {
								if (map == null) {
									return false;
								}

								return map.hasOwnProperty("key") && map.hasOwnProperty("value");
							}

							/*
        * Always return an array.
        *
        * @param {String|Array} arr
        * @returns {Array}
        */

							function castArray(arr) {
								return Array.isArray(arr) ? arr : [arr];
							}

							;

							/*
        * Always return a key/value map.
        *
        * @param {Number|String|Boolean|Object} item
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValue(item) {
								return isKeyValueMap(item) ? item : {
									key: item,
									value: item
								};
							}

							/*
        * Always return an array of key/value maps.
        *
        * @param {Number|String|Boolean|Array|Object} list
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValueArray(list) {
								list = castArray(list);

								return list.map(castKeyValue);
							}
						}, {}], 4: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _listItem = _dereq_("./list-item");

							var _listItem2 = _interopRequireDefault(_listItem);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var _hireFormsUtils = _dereq_("hire-forms-utils");

							var List = (function (_React$Component) {
								function List(props) {
									_classCallCheck(this, List);

									_get(Object.getPrototypeOf(List.prototype), "constructor", this).call(this, props);

									this.state = { editItemIndex: null };
								}

								_inherits(List, _React$Component);

								_createClass(List, [{
									key: "handleListItemClick",
									value: function handleListItemClick(index, ev) {
										this.setState({ editItemIndex: index });

										if (this.props.onClick) {
											this.props.onClick(index, ev);
										}
									}
								}, {
									key: "handleListItemCancel",
									value: function handleListItemCancel() {
										this.setState({ editItemIndex: null });
									}
								}, {
									key: "handleListItemChange",
									value: function handleListItemChange(index, newValue) {
										this.setState({ editItemIndex: null });

										this.props.values[index] = newValue;
										this.props.onChange(this.props.values);
									}
								}, {
									key: "handleListItemRemove",
									value: function handleListItemRemove(index) {
										this.setState({ editItemIndex: null });

										this.props.values.splice(index, 1);
										this.props.onChange(this.props.values);
									}
								}, {
									key: "render",
									value: function render() {
										var _this = this;

										var list = this.props.values.map(function (item, index) {
											return _react2["default"].createElement(_listItem2["default"], {
												active: _this.state.editItemIndex === index,
												editable: _this.props.editable,
												key: index,
												onCancel: _this.handleListItemCancel.bind(_this, index),
												onChange: _this.handleListItemChange.bind(_this, index),
												onClick: _this.handleListItemClick.bind(_this, index),
												onRemove: _this.handleListItemRemove.bind(_this, index),
												removable: _this.props.removable,
												value: (0, _hireFormsUtils.castKeyValue)(item) });
										});

										list = list.length ? this.props.ordered ? _react2["default"].createElement("ol", null, list) : _react2["default"].createElement("ul", null, list) : _react2["default"].createElement("span", { className: "hire-empty-list" }, "The list is empty");

										return _react2["default"].createElement("div", { className: "hire-list" }, list);
									}
								}]);

								return List;
							})(_react2["default"].Component);

							List.defaultProps = {
								editable: false,
								ordered: false,
								removable: true,
								values: []
							};

							List.propTypes = {
								editable: _react2["default"].PropTypes.bool,
								onChange: _react2["default"].PropTypes.func,
								onClick: _react2["default"].PropTypes.func,
								options: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps,
								ordered: _react2["default"].PropTypes.bool,
								removable: _react2["default"].PropTypes.bool,
								values: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps
							};

							exports["default"] = List;
							module.exports = exports["default"];
						}, { "./list-item": 5, "hire-forms-prop-types": 2, "hire-forms-utils": 3, "react": "react" }], 5: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							var _extends = Object.assign || function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i];for (var key in source) {
										if (Object.prototype.hasOwnProperty.call(source, key)) {
											target[key] = source[key];
										}
									}
								}return target;
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
							}

							// TODO merge with static-list/list-item?
							// TODO move css to default css file

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var _hireFormsInput = _dereq_("hire-forms-input");

							var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var ext = function ext() {
								for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
									styles[_key] = arguments[_key];
								}

								return _extends.apply(undefined, [{}].concat(styles));
							};

							var liStyle = {
								cursor: "pointer"
							};

							var inputStyle = {
								width: "90%"
							};

							var buttonStyle = {
								width: "10%"
							};

							var spanStyle = {
								width: "90%"
							};

							var inlineBlockStyle = {
								display: "inline-block",
								boxSizing: "border-box",
								verticalAlign: "top"
							};

							var ListItem = (function (_React$Component) {
								function ListItem(props) {
									_classCallCheck(this, ListItem);

									_get(Object.getPrototypeOf(ListItem.prototype), "constructor", this).call(this, props);

									this.state = { value: props.value.value };
								}

								_inherits(ListItem, _React$Component);

								_createClass(ListItem, [{
									key: "componentWillUpdate",
									value: function componentWillUpdate(nextProps, nextState) {
										if (!nextProps.active) {
											nextState.value = nextProps.value.value;
										}
									}
								}, {
									key: "componentDidUpdate",
									value: function componentDidUpdate() {
										if (this.props.active && this.props.editable) {
											var node = _react2["default"].findDOMNode(this.refs.input);
											node.focus();
											node.value = node.value;
										}
									}
								}, {
									key: "onInputChange",
									value: function onInputChange(value) {
										this.setState({ value: value });
									}
								}, {
									key: "onInputKeyDown",
									value: function onInputKeyDown(ev) {
										// if keyCode is "enter" or "tab"
										if (ev.keyCode === 13 || ev.keyCode === 9) {
											if (this.state.value === this.props.value.value) {
												this.props.onCancel();
											} else {
												this.props.onChange(this.state.value);
											}
										}

										// if keyCode is "escape"
										if (ev.keyCode === 27) {
											this.props.onCancel();
										}
									}
								}, {
									key: "render",
									value: function render() {
										var remove = undefined;

										var el = this.props.active && this.props.editable ? _react2["default"].createElement(_hireFormsInput2["default"], {
											onChange: this.onInputChange.bind(this),
											onKeyDown: this.onInputKeyDown.bind(this),
											ref: "input",
											style: ext(inlineBlockStyle, inputStyle),
											value: this.state.value }) : _react2["default"].createElement("span", {
											className: "value",
											onClick: this.props.onClick.bind(this),
											style: ext(inlineBlockStyle, spanStyle) }, this.props.value.value);

										if (this.props.active && this.props.removable) {
											remove = _react2["default"].createElement("button", {
												className: "remove",
												onClick: this.props.onRemove,
												style: ext(inlineBlockStyle, buttonStyle) }, "x");
										}

										return _react2["default"].createElement("li", {
											className: (0, _classnames2["default"])("hire-list-item", { active: this.props.active }),
											style: liStyle }, el, remove);
									}
								}]);

								return ListItem;
							})(_react2["default"].Component);

							ListItem.defaultProps = {
								active: false,
								editable: false,
								removable: true
							};

							ListItem.propTypes = {
								active: _react2["default"].PropTypes.bool,
								editable: _react2["default"].PropTypes.bool,
								onCancel: _react2["default"].PropTypes.func,
								onChange: _react2["default"].PropTypes.func,
								onClick: _react2["default"].PropTypes.func,
								onRemove: _react2["default"].PropTypes.func,
								removable: _react2["default"].PropTypes.bool,
								value: _hireFormsPropTypes.keyValueMap
							};

							exports["default"] = ListItem;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "hire-forms-input": 1, "hire-forms-prop-types": 2, "react": "react" }] }, {}, [4])(4);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, {}] }, {}, [2])(2);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
"use strict";

(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.HireFormsAutocomplete = f();
	}
})(function () {
	var define, module, exports;return (function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	})({ 1: [function (_dereq_, module, exports) {
			/*!
     Copyright (c) 2015 Jed Watson.
     Licensed under the MIT License (MIT), see
     http://jedwatson.github.io/classnames
   */

			(function () {
				"use strict";

				function classNames() {

					var classes = "";

					for (var i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						if (!arg) continue;

						var argType = typeof arg;

						if ("string" === argType || "number" === argType) {
							classes += " " + arg;
						} else if (Array.isArray(arg)) {
							classes += " " + classNames.apply(null, arg);
						} else if ("object" === argType) {
							for (var key in arg) {
								if (arg.hasOwnProperty(key) && arg[key]) {
									classes += " " + key;
								}
							}
						}
					}

					return classes.substr(1);
				}

				if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
					// AMD. Register as an anonymous module.
					define(function () {
						return classNames;
					});
				} else if (typeof module !== "undefined" && module.exports) {
					module.exports = classNames;
				} else {
					window.classNames = classNames;
				}
			})();
		}, {}], 2: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var _classnames = _dereq_("classnames");

			var _classnames2 = _interopRequireDefault(_classnames);

			var Input = _react2["default"].createClass({
				displayName: "Input",

				propTypes: {
					onChange: _react2["default"].PropTypes.func,
					onInvalid: _react2["default"].PropTypes.func,
					onKeyDown: _react2["default"].PropTypes.func,
					onKeyUp: _react2["default"].PropTypes.func,
					placeholder: _react2["default"].PropTypes.string,
					style: _react2["default"].PropTypes.object,
					valid: _react2["default"].PropTypes.bool,
					validate: _react2["default"].PropTypes.func,
					value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
				},

				getDefaultProps: function getDefaultProps() {
					return {
						value: ""
					};
				},

				getInitialState: function getInitialState() {
					return {
						focus: false,
						valid: true
					};
				},

				componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
					if (this.props.value === nextProps.value) {
						return;
					}

					if (nextProps.value === "") {
						if (!this.state.valid) {
							this.setState({ valid: true });
						}

						return;
					}

					if (this.props.validate) {
						var valid = this.props.validate(nextProps.value);

						this.setState({ valid: valid });

						if (!valid && this.props.onInvalid) {
							this.props.onInvalid(nextProps.value);
						}
					}
				},

				shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
					var propsValueChange = this.props.value !== nextProps.value;
					var stateFocusChange = this.state.focus !== nextState.focus;

					return propsValueChange || stateFocusChange;
				},

				toggleFocus: function toggleFocus() {
					this.setState({ focus: !this.state.focus });
				},

				handleKeyDown: function handleKeyDown(ev) {
					if (this.props.onKeyDown) {
						this.props.onKeyDown(ev);
					}
				},

				handleKeyUp: function handleKeyUp(ev) {
					if (this.props.onKeyUp) {
						this.props.onKeyUp(ev);
					}
				},

				handleChange: function handleChange(ev) {
					this.props.onChange(ev.currentTarget.value, ev);
				},

				render: function render() {
					return _react2["default"].createElement("input", {
						className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
						onBlur: this.toggleFocus,
						onChange: this.handleChange,
						onFocus: this.toggleFocus,
						onKeyDown: this.handleKeyDown,
						onKeyUp: this.handleKeyUp,
						placeholder: this.props.placeholder,
						style: this.props.style,
						value: this.props.value });
				}
			});

			exports["default"] = Input;
			module.exports = exports["default"];
		}, { "classnames": 1, "react": "react" }], 3: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var keyValueMap = _react2["default"].PropTypes.shape({
				key: _react2["default"].PropTypes.string.isRequired,
				value: _react2["default"].PropTypes.string.isRequired
			});

			exports.keyValueMap = keyValueMap;
			// ARRAY OF

			var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

			exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
			var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

			exports.arrayOfStrings = arrayOfStrings;
			var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

			exports.arrayOfElements = arrayOfElements;
			// OR

			var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

			exports.stringOrArray = stringOrArray;
			var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

			exports.stringOrKeyValueMap = stringOrKeyValueMap;
			var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

			exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
			var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

			exports.elementOrArrayOfElement = elementOrArrayOfElement;
			var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

			exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
			var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
			exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
		}, { "react": "react" }], 4: [function (_dereq_, module, exports) {

			/*
    * @param {Array} list
    * @returns {Boolean}
    */
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.isListOfStrings = isListOfStrings;
			exports.isKeyValueMap = isKeyValueMap;
			exports.castArray = castArray;
			exports.castKeyValueArray = castKeyValueArray;

			function isListOfStrings(list) {
				if (!Array.isArray(list) || !list.length) {
					return false;
				}

				return list.every(function (item) {
					return typeof item === "string";
				});
			}

			/*
    * @param {Object} map
    * @returns {Boolean}
    */

			function isKeyValueMap(map) {
				if (map == null) {
					return false;
				}

				return map.hasOwnProperty("key") && map.hasOwnProperty("value");
			}

			/*
    * Always return an array.
    *
    * @param {String|Array} arr
    * @returns {Array}
    */

			function castArray(arr) {
				return Array.isArray(arr) ? arr : [arr];
			}

			;

			/*
    * Always return an array of key/value maps.
    *
    * @param {Number|String|Boolean|Array} list
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValueArray(list) {
				list = castArray(list);

				return list.map(function (item) {
					return isKeyValueMap(item) ? item : {
						key: item,
						value: item
					};
				});
			}
		}, {}], 5: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			})();

			var _get = function get(_x, _x2, _x3) {
				var _again = true;_function: while (_again) {
					var object = _x,
					    property = _x2,
					    receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
						var parent = Object.getPrototypeOf(object);if (parent === null) {
							return undefined;
						} else {
							_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
						}
					} else if ("value" in desc) {
						return desc.value;
					} else {
						var getter = desc.get;if (getter === undefined) {
							return undefined;
						}return getter.call(receiver);
					}
				}
			};

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var _hireFormsInput = _dereq_("hire-forms-input");

			var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

			var _hireFormsOptions = _dereq_("hire-forms-options");

			var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

			var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

			var _hireFormsUtils = _dereq_("hire-forms-utils");

			var Autocomplete = (function (_React$Component) {
				function Autocomplete(props) {
					_classCallCheck(this, Autocomplete);

					_get(Object.getPrototypeOf(Autocomplete.prototype), "constructor", this).call(this, props);

					this.cache = {};

					this.state = {
						options: [],
						query: props.value.value
					};
				}

				_inherits(Autocomplete, _React$Component);

				_createClass(Autocomplete, [{
					key: "componentWillReceiveProps",
					value: function componentWillReceiveProps(nextProps) {
						this.setState({
							query: nextProps.value.value,
							options: []
						});
					}
				}, {
					key: "handleInputChange",
					value: function handleInputChange(inputValue) {
						// Return empty options if inputValue length is beneath a treshold.
						if (inputValue.length < this.props.minLength) {
							return this.setState({
								query: inputValue,
								options: []
							});
						}

						// Return cache if inputValue is found in the cache.
						if (this.cache.hasOwnProperty(inputValue)) {
							return this.setState({
								query: inputValue,
								options: this.cache[inputValue]
							});
						}

						if (this.props.async == null) {
							this.filter(inputValue);
						} else {
							this.filterAsync(inputValue);
						}
					}
				}, {
					key: "filterAsync",
					value: function filterAsync(inputValue) {
						this.setState({ "query": inputValue });

						var done = function done(response) {
							// Add the options to the cache.
							this.cache[inputValue] = response;

							// Get the cache from the current (!!!) inputValue. The results trail behind
							// the user typing, so we have to pass the options of the current inputValue,
							// not the options of the inputValue of the fetch.
							var state = this.cache.hasOwnProperty(this.state.query) ? { options: this.cache[this.state.query] } : { options: [] };

							this.setState(state);
						};

						this.props.async(inputValue, done.bind(this));
					}
				}, {
					key: "filter",
					value: function filter(inputValue) {
						this.cache[inputValue] = inputValue === "" ? [] : this.props.options.filter(function (value) {
							if ((0, _hireFormsUtils.isKeyValueMap)(value)) {
								value = value.value;
							}

							return value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
						});

						this.setState({
							query: inputValue,
							options: this.cache[inputValue]
						});
					}
				}, {
					key: "handleInputKeyDown",
					value: function handleInputKeyDown(ev) {
						// Escape
						if (ev.keyCode === 27) {
							this.setState({
								options: [],
								query: ""
							});
						}

						if (this.refs.options == null) {
							return;
						}

						// Up
						if (ev.keyCode === 38) {
							this.refs.options.highlightPrev();
						}

						// Down
						if (ev.keyCode === 40) {
							this.refs.options.highlightNext();
						}

						// Enter
						if (ev.keyCode === 13) {
							this.refs.options.select();
						}
					}
				}, {
					key: "handleOptionsChange",

					/*
      * @param {Object} value Key/value map, ie: {key: "A", value: "A"}
      */
					value: function handleOptionsChange(value) {
						this.props.onChange(value);
					}
				}, {
					key: "render",
					value: function render() {
						var options = this.state.options.length !== 0 ? _react2["default"].createElement(_hireFormsOptions2["default"], {
							onChange: this.handleOptionsChange.bind(this),
							query: this.state.query,
							ref: "options",
							value: this.props.value,
							values: (0, _hireFormsUtils.castKeyValueArray)(this.state.options) }) : null;

						return _react2["default"].createElement("div", {
							className: "hire-forms-autocomplete",
							style: { position: "relative" } }, _react2["default"].createElement(_hireFormsInput2["default"], {
							onChange: this.handleInputChange.bind(this),
							onKeyDown: this.handleInputKeyDown.bind(this),
							placeholder: this.props.placeholder,
							ref: "input",
							value: this.state.query }), this.props.children, options);
					}
				}]);

				return Autocomplete;
			})(_react2["default"].Component);

			Autocomplete.propTypes = {
				async: _react2["default"].PropTypes.func,
				children: _react2["default"].PropTypes.element,
				minLength: _react2["default"].PropTypes.number,
				onChange: _react2["default"].PropTypes.func,
				options: _hireFormsPropTypes.arrayOfKeyValueMaps,
				placeholder: _react2["default"].PropTypes.string,
				value: _hireFormsPropTypes.keyValueMap
			};

			Autocomplete.defaultProps = {
				minLength: 1,
				value: {
					key: "",
					value: ""
				}
			};

			exports["default"] = Autocomplete;
			module.exports = exports["default"];
		}, { "hire-forms-input": 2, "hire-forms-options": 6, "hire-forms-prop-types": 3, "hire-forms-utils": 4, "react": "react" }], 6: [function (_dereq_, module, exports) {
			(function (global) {
				(function (f) {
					if (typeof exports === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.HireFormsOptions = f();
					}
				})(function () {
					var define, module, exports;return (function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
								}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, l, l.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
					})({ 1: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var keyValueMap = _react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string.isRequired,
								value: _react2["default"].PropTypes.string.isRequired
							});

							exports.keyValueMap = keyValueMap;
							// ARRAY OF

							var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

							exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
							var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

							exports.arrayOfStrings = arrayOfStrings;
							var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

							exports.arrayOfElements = arrayOfElements;
							// OR

							var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

							exports.stringOrArray = stringOrArray;
							var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

							exports.stringOrKeyValueMap = stringOrKeyValueMap;
							var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

							exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
							var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

							exports.elementOrArrayOfElement = elementOrArrayOfElement;
							var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

							exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
							var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
							exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
						}, { "react": "react" }], 2: [function (_dereq_, module, exports) {

							/*
        * @param {Array} list
        * @returns {Boolean}
        */
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});
							exports.isListOfStrings = isListOfStrings;
							exports.isKeyValueMap = isKeyValueMap;
							exports.castArray = castArray;
							exports.castKeyValue = castKeyValue;
							exports.castKeyValueArray = castKeyValueArray;

							function isListOfStrings(list) {
								if (!Array.isArray(list) || !list.length) {
									return false;
								}

								return list.every(function (item) {
									return typeof item === "string";
								});
							}

							/*
        * @param {Object} map
        * @returns {Boolean}
        */

							function isKeyValueMap(map) {
								if (map == null) {
									return false;
								}

								return map.hasOwnProperty("key") && map.hasOwnProperty("value");
							}

							/*
        * Always return an array.
        *
        * @param {String|Array} arr
        * @returns {Array}
        */

							function castArray(arr) {
								return Array.isArray(arr) ? arr : [arr];
							}

							;

							/*
        * Always return a key/value map.
        *
        * @param {Number|String|Boolean|Object} item
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValue(item) {
								return isKeyValueMap(item) ? item : {
									key: item,
									value: item
								};
							}

							/*
        * Always return an array of key/value maps.
        *
        * @param {Number|String|Boolean|Array|Object} list
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValueArray(list) {
								list = castArray(list);

								return list.map(castKeyValue);
							}
						}, {}], 3: [function (_dereq_, module, exports) {
							// TODO move listitem to seperate component (so we don't have to store data-key and data-value as attributes)
							// Move util functions to seperate module

							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var _hireFormsUtils = _dereq_("hire-forms-utils");

							var hasKeyValue = function hasKeyValue(list, item) {
								return list.filter(function (li) {
									return li.key === item.key;
								}).length > 0;
							};

							/**
        * Options are rendered beneath the autocomplete and select components.
        *
        * @class
        * @extends React.Component
        */

							var Options = (function (_React$Component) {
								_inherits(Options, _React$Component);

								function Options() {
									_classCallCheck(this, Options);

									_get(Object.getPrototypeOf(Options.prototype), "constructor", this).apply(this, arguments);
								}

								_createClass(Options, [{
									key: "componentDidMount",
									value: function componentDidMount() {
										var node = _react2["default"].findDOMNode(this);

										if (node) {
											node.style.zIndex = 1000;
										}
									}
								}, {
									key: "componentWillUnmount",
									value: function componentWillUnmount() {
										var node = _react2["default"].findDOMNode(this);
										node.style.zIndex = 0;
									}

									/**
          * Sort values on relevance. A result is more relevant when the search
          * query is more at the beginning of the string. In other words:
          * String.indexOf(props.query): lower is better.
          * @param {Array<Object>} value An array of key/value maps
          * @param {String} query A search query
          * @returns {Array<Object>} Sorted values on relevance
          */
								}, {
									key: "sortRelevance",
									value: function sortRelevance(values, query) {
										return values.sort(function (a, b) {
											a = a.value.toLowerCase();
											b = b.value.toLowerCase();

											var indexA = a.indexOf(query);
											var indexB = b.indexOf(query);

											if (indexA > indexB) {
												return 1;
											}

											if (indexA < indexB) {
												return -1;
											}

											if (indexA === indexB) {
												if (a > b) {
													return 1;
												}

												if (a < b) {
													return -1;
												}
											}

											return 0;
										});
									}

									/*
          * highlight the currently highlighted option.
          *
          * @param {Object} target An HTMLElement or event object
          * @param {String} className Name of the highlight class
          */
								}, {
									key: "highlight",
									value: function highlight(target, className) {
										// Check if target is an event object.
										if (target.hasOwnProperty("currentTarget")) {
											target = target.currentTarget;
										}

										target.classList.add(className);
									}

									/**
          * Unhighlight the currently highlighted option.
          *
          * @param {String} className Name of the highlight class
          * @return {Object} The unhighlighted HTMLElement
          */
								}, {
									key: "unhighlight",
									value: function unhighlight(className) {
										var el = undefined;
										var node = _react2["default"].findDOMNode(this);

										if (node) {
											el = node.querySelector("li." + className);

											if (el) {
												el.classList.remove(className);
											}
										}

										return el;
									}
								}, {
									key: "handleClick",
									value: function handleClick(ev) {
										this.props.onChange(this.getOptionData(ev.currentTarget));
									}
								}, {
									key: "highlightPrev",
									value: function highlightPrev() {
										var prev = undefined;
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											prev = current.previousElementSibling;
										}

										// If current and prev aren't found, start at the top.
										// Current is not found if there is no list item highlighted.
										// Prev is not found if the first list item is highlighted.
										if (!prev) {
											prev = _react2["default"].findDOMNode(this).lastChild;
										}

										this.highlight(prev, this.props.highlightClass);
									}
								}, {
									key: "highlightNext",
									value: function highlightNext() {
										var next = undefined;
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											next = current.nextElementSibling;
										}

										// If current and next aren't found, start at the top.
										// Current is not found if there is no list item highlighted.
										// Next is not found if the last list item is highlighted.
										if (!next) {
											next = _react2["default"].findDOMNode(this).firstChild;
										}

										this.highlight(next, this.props.highlightClass);
									}
								}, {
									key: "select",
									value: function select() {
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											this.props.onChange(this.getOptionData(current));
										}
									}

									/**
          * Get the key (id) and value (display name) of an option DOM element.
          *
          * @param {Object} el - Option DOM element
          * @returns {Object}
          */
								}, {
									key: "getOptionData",
									value: function getOptionData(el) {
										return {
											key: el.getAttribute("data-key"),
											value: el.getAttribute("data-value")
										};
									}
								}, {
									key: "render",
									value: function render() {
										var _this = this;

										if (this.props.values.length === 0) {
											return null;
										}

										var values = this.props.sort || this.props.sortRelevance && this.props.query !== "" ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

										var listitems = values.map(function (data, index) {
											var displayValue = data.value;

											if (_this.props.query.length) {
												var re = new RegExp(_this.props.query, "ig");
												displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
											}

											return _react2["default"].createElement("li", {
												className: (0, _classnames2["default"])({
													"hire-forms-option": true,
													selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this.props.value), data)
												}),
												dangerouslySetInnerHTML: { __html: displayValue },
												"data-key": data.key,
												"data-value": data.value,
												key: index,
												onClick: _this.handleClick.bind(_this) });
										});

										return _react2["default"].createElement("ul", {
											className: "hire-options" }, listitems);
									}
								}]);

								return Options;
							})(_react2["default"].Component);

							Options.defaultProps = {
								highlightClass: "highlight",
								query: "",
								sort: false,
								sortRelevance: true,
								value: { key: "", value: "" },
								values: []
							};

							Options.propTypes = {
								highlightClass: _react2["default"].PropTypes.string,
								onChange: _react2["default"].PropTypes.func.isRequired,
								query: _react2["default"].PropTypes.string,
								sort: _react2["default"].PropTypes.bool,
								sortRelevance: _react2["default"].PropTypes.bool,
								value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
								values: _hireFormsPropTypes.arrayOfKeyValueMaps
							};

							exports["default"] = Options;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "hire-forms-prop-types": 1, "hire-forms-utils": 2, "react": "react" }] }, {}, [3])(3);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, { "classnames": 7, "hire-forms-prop-types": 8, "hire-forms-utils": 9, "react": "react" }], 7: [function (_dereq_, module, exports) {
			/*!
     Copyright (c) 2015 Jed Watson.
     Licensed under the MIT License (MIT), see
     http://jedwatson.github.io/classnames
   */

			(function () {
				"use strict";

				function classNames() {

					var classes = "";

					for (var i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						if (!arg) continue;

						var argType = typeof arg;

						if ("string" === argType || "number" === argType) {
							classes += " " + arg;
						} else if (Array.isArray(arg)) {
							classes += " " + classNames.apply(null, arg);
						} else if ("object" === argType) {
							for (var key in arg) {
								if (arg.hasOwnProperty(key) && arg[key]) {
									classes += " " + key;
								}
							}
						}
					}

					return classes.substr(1);
				}

				if (typeof module !== "undefined" && module.exports) {
					module.exports = classNames;
				} else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
					// AMD. Register as an anonymous module.
					define(function () {
						return classNames;
					});
				} else {
					window.classNames = classNames;
				}
			})();
		}, {}], 8: [function (_dereq_, module, exports) {
			arguments[4][3][0].apply(exports, arguments);
		}, { "dup": 3, "react": "react" }], 9: [function (_dereq_, module, exports) {

			/*
    * @param {Array} list
    * @returns {Boolean}
    */
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.isListOfStrings = isListOfStrings;
			exports.isKeyValueMap = isKeyValueMap;
			exports.castArray = castArray;
			exports.castKeyValue = castKeyValue;
			exports.castKeyValueArray = castKeyValueArray;

			function isListOfStrings(list) {
				if (!Array.isArray(list) || !list.length) {
					return false;
				}

				return list.every(function (item) {
					return typeof item === "string";
				});
			}

			/*
    * @param {Object} map
    * @returns {Boolean}
    */

			function isKeyValueMap(map) {
				if (map == null) {
					return false;
				}

				return map.hasOwnProperty("key") && map.hasOwnProperty("value");
			}

			/*
    * Always return an array.
    *
    * @param {String|Array} arr
    * @returns {Array}
    */

			function castArray(arr) {
				return Array.isArray(arr) ? arr : [arr];
			}

			;

			/*
    * Always return a key/value map.
    *
    * @param {Number|String|Boolean|Object} item
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValue(item) {
				return isKeyValueMap(item) ? item : {
					key: item,
					value: item
				};
			}

			/*
    * Always return an array of key/value maps.
    *
    * @param {Number|String|Boolean|Array|Object} list
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValueArray(list) {
				list = castArray(list);

				return list.map(castKeyValue);
			}
		}, {}] }, {}, [5])(5);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
"use strict";

(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.HireFormsTextarea = f();
	}
})(function () {
	var define, module, exports;return (function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	})({ 1: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			})();

			var _get = function get(_x, _x2, _x3) {
				var _again = true;_function: while (_again) {
					var object = _x,
					    property = _x2,
					    receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
						var parent = Object.getPrototypeOf(object);if (parent === null) {
							return undefined;
						} else {
							_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
						}
					} else if ("value" in desc) {
						return desc.value;
					} else {
						var getter = desc.get;if (getter === undefined) {
							return undefined;
						}return getter.call(receiver);
					}
				}
			};

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var _classnames = _dereq_("classnames");

			var _classnames2 = _interopRequireDefault(_classnames);

			var Input = (function (_React$Component) {
				function Input(props) {
					_classCallCheck(this, Input);

					_get(Object.getPrototypeOf(Input.prototype), "constructor", this).call(this, props);

					this.state = {
						valid: true,
						invalidMessage: null
					};
				}

				_inherits(Input, _React$Component);

				_createClass(Input, [{
					key: "componentWillReceiveProps",
					value: function componentWillReceiveProps(nextProps) {
						if (this.props.value === nextProps.value) {
							return;
						}

						if (nextProps.value === "") {
							if (!this.state.valid) {
								this.setState({
									valid: true,
									invalidMessage: null
								});
							}

							return;
						} else if (this.props.validate) {
							var validator = this.props.validate(nextProps.value);

							this.setState({
								valid: validator.isValid,
								invalidMessage: validator.message
							});

							if (!validator.isValid && this.props.onInvalid) {
								this.props.onInvalid(validator.message, nextProps.value);
							}
						}
					}
				}, {
					key: "shouldComponentUpdate",
					value: function shouldComponentUpdate(nextProps, nextState) {
						return this.props.value !== nextProps.value;
					}
				}, {
					key: "handleKeyDown",
					value: function handleKeyDown(ev) {
						if (this.props.onKeyDown) {
							this.props.onKeyDown(ev);
						}
					}
				}, {
					key: "handleKeyUp",
					value: function handleKeyUp(ev) {
						if (this.props.onKeyUp) {
							this.props.onKeyUp(ev);
						}
					}
				}, {
					key: "handleChange",
					value: function handleChange(ev) {
						this.props.onChange(ev.currentTarget.value, ev);
					}
				}, {
					key: "render",
					value: function render() {
						var invalidMessage = this.state.invalidMessage ? _react2["default"].createElement("div", { className: "hire-forms-invalid-message" }, this.state.invalidMessage) : null;

						return _react2["default"].createElement("div", {
							className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }) }, _react2["default"].createElement("input", {
							onChange: this.handleChange.bind(this),
							onKeyDown: this.handleKeyDown.bind(this),
							onKeyUp: this.handleKeyUp.bind(this),
							placeholder: this.props.placeholder,
							style: this.props.style,
							value: this.props.value }), invalidMessage);
					}
				}]);

				return Input;
			})(_react2["default"].Component);

			Input.propTypes = {
				onChange: _react2["default"].PropTypes.func,
				onInvalid: _react2["default"].PropTypes.func,
				onKeyDown: _react2["default"].PropTypes.func,
				onKeyUp: _react2["default"].PropTypes.func,
				placeholder: _react2["default"].PropTypes.string,
				style: _react2["default"].PropTypes.object,
				valid: _react2["default"].PropTypes.bool,
				validate: _react2["default"].PropTypes.func,
				value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
			};

			Input.defaultProps = {
				value: ""
			};

			exports["default"] = Input;
			module.exports = exports["default"];
		}, { "classnames": "classnames", "react": "react" }] }, {}, [1])(1);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
"use strict";

(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.HireFormsTextarea = f();
	}
})(function () {
	var define, module, exports;return (function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	})({ 1: [function (_dereq_, module, exports) {
			/*!
     Copyright (c) 2015 Jed Watson.
     Licensed under the MIT License (MIT), see
     http://jedwatson.github.io/classnames
   */

			(function () {
				"use strict";

				function classNames() {

					var classes = "";

					for (var i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						if (!arg) continue;

						var argType = typeof arg;

						if ("string" === argType || "number" === argType) {
							classes += " " + arg;
						} else if (Array.isArray(arg)) {
							classes += " " + classNames.apply(null, arg);
						} else if ("object" === argType) {
							for (var key in arg) {
								if (arg.hasOwnProperty(key) && arg[key]) {
									classes += " " + key;
								}
							}
						}
					}

					return classes.substr(1);
				}

				if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
					// AMD. Register as an anonymous module.
					define(function () {
						return classNames;
					});
				} else if (typeof module !== "undefined" && module.exports) {
					module.exports = classNames;
				} else {
					window.classNames = classNames;
				}
			})();
		}, {}], 2: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var _classnames = _dereq_("classnames");

			var _classnames2 = _interopRequireDefault(_classnames);

			var Input = _react2["default"].createClass({
				displayName: "Input",

				propTypes: {
					onChange: _react2["default"].PropTypes.func,
					onInvalid: _react2["default"].PropTypes.func,
					onKeyDown: _react2["default"].PropTypes.func,
					onKeyUp: _react2["default"].PropTypes.func,
					placeholder: _react2["default"].PropTypes.string,
					style: _react2["default"].PropTypes.object,
					valid: _react2["default"].PropTypes.bool,
					validate: _react2["default"].PropTypes.func,
					value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
				},

				getDefaultProps: function getDefaultProps() {
					return {
						value: ""
					};
				},

				getInitialState: function getInitialState() {
					return {
						focus: false,
						valid: true
					};
				},

				componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
					if (this.props.value === nextProps.value) {
						return;
					}

					if (nextProps.value === "") {
						if (!this.state.valid) {
							this.setState({ valid: true });
						}

						return;
					}

					if (this.props.validate) {
						var valid = this.props.validate(nextProps.value);

						this.setState({ valid: valid });

						if (!valid && this.props.onInvalid) {
							this.props.onInvalid(nextProps.value);
						}
					}
				},

				shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
					var propsValueChange = this.props.value !== nextProps.value;
					var stateFocusChange = this.state.focus !== nextState.focus;

					return propsValueChange || stateFocusChange;
				},

				toggleFocus: function toggleFocus() {
					this.setState({ focus: !this.state.focus });
				},

				handleKeyDown: function handleKeyDown(ev) {
					if (this.props.onKeyDown) {
						this.props.onKeyDown(ev);
					}
				},

				handleKeyUp: function handleKeyUp(ev) {
					if (this.props.onKeyUp) {
						this.props.onKeyUp(ev);
					}
				},

				handleChange: function handleChange(ev) {
					this.props.onChange(ev.currentTarget.value, ev);
				},

				render: function render() {
					return _react2["default"].createElement("input", {
						className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
						onBlur: this.toggleFocus,
						onChange: this.handleChange,
						onFocus: this.toggleFocus,
						onKeyDown: this.handleKeyDown,
						onKeyUp: this.handleKeyUp,
						placeholder: this.props.placeholder,
						style: this.props.style,
						value: this.props.value });
				}
			});

			exports["default"] = Input;
			module.exports = exports["default"];
		}, { "classnames": 1, "react": "react" }], 3: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

			exports.stringOrArray = stringOrArray;
			var keyValueMap = _react2["default"].PropTypes.shape({
				key: _react2["default"].PropTypes.string.isRequired,
				value: _react2["default"].PropTypes.string.isRequired
			});

			exports.keyValueMap = keyValueMap;
			var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

			exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
			var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

			exports.arrayOfStrings = arrayOfStrings;
			var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

			exports.arrayOfElements = arrayOfElements;
			var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

			exports.stringOrKeyValueMap = stringOrKeyValueMap;
			var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

			exports.elementOrArrayOfElement = elementOrArrayOfElement;
			var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

			exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
			var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);
			exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
		}, { "react": "react" }], 4: [function (_dereq_, module, exports) {

			/*
    * @param {Array} list
    * @returns {Boolean}
    */
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.isListOfStrings = isListOfStrings;
			exports.isKeyValueMap = isKeyValueMap;
			exports.castArray = castArray;
			exports.castKeyValueArray = castKeyValueArray;

			function isListOfStrings(list) {
				if (!Array.isArray(list) || !list.length) {
					return false;
				}

				return list.every(function (item) {
					return typeof item === "string";
				});
			}

			/*
    * @param {Object} map
    * @returns {Boolean}
    */

			function isKeyValueMap(map) {
				if (map == null) {
					return false;
				}

				return map.hasOwnProperty("key") && map.hasOwnProperty("value");
			}

			/*
    * Always return an array.
    *
    * @param {String|Array} arr
    * @returns {Array}
    */

			function castArray(arr) {
				return Array.isArray(arr) ? arr : [arr];
			}

			;

			/*
    * Always return an array of key/value maps.
    *
    * @param {Number|String|Boolean|Array} list
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValueArray(list) {
				list = castArray(list);

				return list.map(function (item) {
					return isKeyValueMap(item) ? item : {
						key: item,
						value: item
					};
				});
			}
		}, {}], 5: [function (_dereq_, module, exports) {
			// TODO use visible state instead of options list

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			})();

			var _get = function get(_x, _x2, _x3) {
				var _again = true;_function: while (_again) {
					var object = _x,
					    property = _x2,
					    receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
						var parent = Object.getPrototypeOf(object);if (parent === null) {
							return undefined;
						} else {
							_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
						}
					} else if ("value" in desc) {
						return desc.value;
					} else {
						var getter = desc.get;if (getter === undefined) {
							return undefined;
						}return getter.call(receiver);
					}
				}
			};

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var _hireFormsInput = _dereq_("hire-forms-input");

			var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

			var _hireFormsOptions = _dereq_("hire-forms-options");

			var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

			var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

			var _hireFormsUtils = _dereq_("hire-forms-utils");

			var divStyle = { position: "relative" };

			var ListFilter = (function (_React$Component) {
				function ListFilter(props) {
					_classCallCheck(this, ListFilter);

					_get(Object.getPrototypeOf(ListFilter.prototype), "constructor", this).call(this, props);

					this.state = {
						options: this.props.options,
						query: ""
					};
				}

				_inherits(ListFilter, _React$Component);

				_createClass(ListFilter, [{
					key: "componentWillReceiveProps",
					value: function componentWillReceiveProps(nextProps) {
						this.setState({ options: nextProps.options });
					}
				}, {
					key: "handleInputChange",
					value: function handleInputChange(inputValue) {
						// Return empty options if inputValue length is beneath a treshold.
						if (inputValue.length < this.props.minLength) {
							return this.setState({
								inputValue: inputValue,
								options: []
							});
						}

						this.filter(inputValue);
					}
				}, {
					key: "filter",
					value: function filter(inputValue) {
						var options = this.props.options.filter(function (value) {
							if ((0, _hireFormsUtils.isKeyValueMap)(value)) {
								value = value.value;
							}

							return value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
						});

						this.setState({
							query: inputValue,
							options: options
						});
					}
				}, {
					key: "handleInputKeyDown",
					value: function handleInputKeyDown(ev) {
						// Up
						if (ev.keyCode === 38) {
							this.refs.options.highlightPrev();
						}

						// Down
						if (ev.keyCode === 40) {
							this.refs.options.highlightNext();
						}

						// Enter
						if (ev.keyCode === 13) {
							this.refs.options.select();
						}

						// Escape
						if (ev.keyCode === 27) {
							this.clear();
						}
					}
				}, {
					key: "handleOptionsChange",
					value: function handleOptionsChange(value) {
						var opts = this.props.options;

						if (typeof opts[0] === "string") {
							value = value.value;
						}

						this.props.onChange(value);
					}
				}, {
					key: "render",
					value: function render() {
						return _react2["default"].createElement("div", {
							className: "hire-list-filter",
							style: divStyle }, _react2["default"].createElement(_hireFormsInput2["default"], {
							onChange: this.handleInputChange.bind(this),
							onKeyDown: this.handleInputKeyDown.bind(this),
							placeholder: this.props.placeholder,
							ref: "input",
							value: this.state.query }), this.props.children, _react2["default"].createElement(_hireFormsOptions2["default"], {
							onChange: this.handleOptionsChange.bind(this),
							query: this.state.query,
							ref: "options",
							value: this.props.value,
							values: (0, _hireFormsUtils.castKeyValueArray)(this.state.options) }));
					}
				}]);

				return ListFilter;
			})(_react2["default"].Component);

			ListFilter.propTypes = {
				children: _react2["default"].PropTypes.element,
				minLength: _react2["default"].PropTypes.number,
				onChange: _react2["default"].PropTypes.func,
				options: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps,
				placeholder: _react2["default"].PropTypes.string,
				value: _hireFormsPropTypes.stringOrKeyValueMap
			};

			exports["default"] = ListFilter;
			module.exports = exports["default"];
		}, { "hire-forms-input": 2, "hire-forms-options": 6, "hire-forms-prop-types": 3, "hire-forms-utils": 4, "react": "react" }], 6: [function (_dereq_, module, exports) {
			(function (global) {
				(function (f) {
					if (typeof exports === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.HireFormsOptions = f();
					}
				})(function () {
					var define, module, exports;return (function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
								}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, l, l.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
					})({ 1: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

							exports.elementOrArrayOfElement = elementOrArrayOfElement;
							/**
        * A string or an object,
        * example: {key: "somekey", value: "somevalue"}.
        */
							var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string,
								value: _react2["default"].PropTypes.string
							})]);

							exports.stringOrKeyValue = stringOrKeyValue;
							var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

							exports.stringOrArray = stringOrArray;
							var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

							exports.stringOrArrayOfString = stringOrArrayOfString;
							var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string.isRequired,
								value: _react2["default"].PropTypes.string.isRequired
							}));

							exports.arrayOfKeyValue = arrayOfKeyValue;
							/**
        * An array of strings or an array of key/value objects,
        * example: [{key: "somekey", value: "somevalue"}].
        */
							var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string,
								value: _react2["default"].PropTypes.string
							}))]);
							exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;
						}, { "react": "react" }], 2: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var HIGHTLIGHT_CLASS = "highlight";

							/**
        * Options are rendered beneath the autocomplete and select components.
        *
        * @class
        * @extends React.Component
        */

							var Options = (function (_React$Component) {
								function Options() {
									_classCallCheck(this, Options);

									if (_React$Component != null) {
										_React$Component.apply(this, arguments);
									}
								}

								_inherits(Options, _React$Component);

								_createClass(Options, [{
									key: "componentDidMount",
									value: function componentDidMount() {
										var node = _react2["default"].findDOMNode(this);

										if (node) {
											node.style.zIndex = 1000;
										}
									}
								}, {
									key: "componentWillUnmount",
									value: function componentWillUnmount() {
										var node = _react2["default"].findDOMNode(this);
										node.style.zIndex = 0;
									}
								}, {
									key: "sortRelevance",

									/**
          * Sort props.values on relevance. A result is more relevant
          * when the search query is more at the beginning of the string.
          * String.indexOf(props.query): lower is better.
          *
          * @returns {Array<String>} Sorted values on relevance
          */
									value: function sortRelevance(values) {
										var _this = this;

										return values.sort(function (a, b) {
											a = a.value.toLowerCase();
											b = b.value.toLowerCase();

											var indexA = a.indexOf(_this.props.query);
											var indexB = b.indexOf(_this.props.query);

											if (indexA > indexB) {
												return 1;
											}

											if (indexA < indexB) {
												return -1;
											}

											if (indexA === indexB) {
												if (a > b) {
													return 1;
												}

												if (a < b) {
													return -1;
												}
											}

											return 0;
										});
									}
								}, {
									key: "highlight",
									value: function highlight(target) {
										// Check if target is an event object.
										if (target.hasOwnProperty("currentTarget")) {
											target = target.currentTarget;
										}

										target.classList.add(HIGHTLIGHT_CLASS);
									}
								}, {
									key: "unhighlight",

									/**
          * Unhighlight the currently highlighted option.
          *
          *
          */
									value: function unhighlight() {
										var el = undefined;
										var node = _react2["default"].findDOMNode(this);

										if (node) {
											el = node.querySelector("li.highlight");

											if (el) {
												el.classList.remove(HIGHTLIGHT_CLASS);
											}
										}

										return el;
									}
								}, {
									key: "handleClick",
									value: function handleClick(ev) {
										this.props.onChange(this.getOptionData(ev.currentTarget));
									}
								}, {
									key: "highlightPrev",
									value: function highlightPrev() {
										var prev = undefined;
										var current = this.unhighlight();

										if (current) {
											prev = current.previousElementSibling;
										}

										// If current and prev aren't found, start at the top.
										// Current is not found if there is no list item highlighted.
										// Prev is not found if the first list item is highlighted.
										if (!prev) {
											prev = _react2["default"].findDOMNode(this).lastChild;
										}

										this.highlight(prev);
									}
								}, {
									key: "highlightNext",
									value: function highlightNext() {
										var next = undefined;
										var current = this.unhighlight();

										if (current) {
											next = current.nextElementSibling;
										}

										// If current and next aren't found, start at the top.
										// Current is not found if there is no list item highlighted.
										// Next is not found if the last list item is highlighted.
										if (!next) {
											next = _react2["default"].findDOMNode(this).firstChild;
										}

										this.highlight(next);
									}
								}, {
									key: "select",
									value: function select() {
										var current = this.unhighlight();

										if (current) {
											this.props.onChange(this.getOptionData(current));
										}
									}
								}, {
									key: "getOptionData",

									/**
          * Get the key (id) and value (display name) of an option DOM element.
          *
          * @param {Object} el - Option DOM element
          * @returns {Object}
          */
									value: function getOptionData(el) {
										return {
											key: el.getAttribute("data-key"),
											value: el.getAttribute("data-value")
										};
									}
								}, {
									key: "render",
									value: function render() {
										var _this2 = this;

										if (this.props.values.length === 0) {
											return null;
										}

										var values = this.props.sortRelevance ? this.sortRelevance(this.props.values) : this.props.values;

										var listitems = values.map(function (data, index) {
											var displayValue = data.value;

											if (_this2.props.query.length) {
												var re = new RegExp(_this2.props.query, "ig");
												displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
											}

											var selectedValue = Array.isArray(_this2.props.value) ? _this2.props.value : [_this2.props.value];

											return _react2["default"].createElement("li", {
												className: (0, _classnames2["default"])({ selected: selectedValue.indexOf(data.value) > -1 }),
												dangerouslySetInnerHTML: { __html: displayValue },
												"data-key": data.key,
												"data-value": data.value,
												key: index,
												onClick: _this2.handleClick.bind(_this2),
												onMouseEnter: _this2.highlight.bind(_this2),
												onMouseLeave: _this2.unhighlight.bind(_this2) });
										});

										return _react2["default"].createElement("ul", {
											className: "hire-options" }, listitems);
									}
								}]);

								return Options;
							})(_react2["default"].Component);

							Options.defaultProps = {
								query: "",
								sortRelevance: true,
								value: "",
								values: []
							};

							Options.propTypes = {
								onChange: _react2["default"].PropTypes.func.isRequired,
								query: _react2["default"].PropTypes.string,
								sortRelevance: _react2["default"].PropTypes.bool,
								value: _hireFormsPropTypes.stringOrArrayOfString,
								values: _hireFormsPropTypes.arrayOfKeyValue
							};

							exports["default"] = Options;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "hire-forms-prop-types": 1, "react": "react" }] }, {}, [2])(2);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, { "classnames": 7, "hire-forms-prop-types": 8, "react": "react" }], 7: [function (_dereq_, module, exports) {
			arguments[4][1][0].apply(exports, arguments);
		}, { "dup": 1 }], 8: [function (_dereq_, module, exports) {
			arguments[4][3][0].apply(exports, arguments);
		}, { "dup": 3, "react": "react" }] }, {}, [5])(5);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
"use strict";

(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.HireFormsSelectList = f();
	}
})(function () {
	var define, module, exports;return (function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	})({ 1: [function (_dereq_, module, exports) {
			(function (global) {
				(function (f) {
					if (typeof exports === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.HireFormsMutableList = f();
					}
				})(function () {
					var define, module, exports;return (function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
								}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, l, l.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
					})({ 1: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var Input = _react2["default"].createClass({
								displayName: "Input",

								propTypes: {
									onChange: _react2["default"].PropTypes.func,
									onInvalid: _react2["default"].PropTypes.func,
									onKeyDown: _react2["default"].PropTypes.func,
									onKeyUp: _react2["default"].PropTypes.func,
									placeholder: _react2["default"].PropTypes.string,
									style: _react2["default"].PropTypes.object,
									valid: _react2["default"].PropTypes.bool,
									validate: _react2["default"].PropTypes.func,
									value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
								},

								getDefaultProps: function getDefaultProps() {
									return {
										value: ""
									};
								},

								getInitialState: function getInitialState() {
									return {
										focus: false,
										valid: true
									};
								},

								componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
									if (this.props.value === nextProps.value) {
										return;
									}

									if (nextProps.value === "") {
										if (!this.state.valid) {
											this.setState({ valid: true });
										}

										return;
									}

									if (this.props.validate) {
										var valid = this.props.validate(nextProps.value);

										this.setState({ valid: valid });

										if (!valid && this.props.onInvalid) {
											this.props.onInvalid(nextProps.value);
										}
									}
								},

								shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
									var propsValueChange = this.props.value !== nextProps.value;
									var stateFocusChange = this.state.focus !== nextState.focus;

									return propsValueChange || stateFocusChange;
								},

								toggleFocus: function toggleFocus() {
									this.setState({ focus: !this.state.focus });
								},

								handleKeyDown: function handleKeyDown(ev) {
									if (this.props.onKeyDown) {
										this.props.onKeyDown(ev);
									}
								},

								handleKeyUp: function handleKeyUp(ev) {
									if (this.props.onKeyUp) {
										this.props.onKeyUp(ev);
									}
								},

								handleChange: function handleChange(ev) {
									this.props.onChange(ev.currentTarget.value, ev);
								},

								render: function render() {
									return _react2["default"].createElement("input", {
										className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
										onBlur: this.toggleFocus,
										onChange: this.handleChange,
										onFocus: this.toggleFocus,
										onKeyDown: this.handleKeyDown,
										onKeyUp: this.handleKeyUp,
										placeholder: this.props.placeholder,
										style: this.props.style,
										value: this.props.value });
								}
							});

							exports["default"] = Input;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "react": "react" }], 2: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var keyValueMap = _react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string.isRequired,
								value: _react2["default"].PropTypes.string.isRequired
							});

							exports.keyValueMap = keyValueMap;
							// ARRAY OF

							var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

							exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
							var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

							exports.arrayOfStrings = arrayOfStrings;
							var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

							exports.arrayOfElements = arrayOfElements;
							// OR

							var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

							exports.stringOrArray = stringOrArray;
							var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

							exports.stringOrKeyValueMap = stringOrKeyValueMap;
							var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

							exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
							var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

							exports.elementOrArrayOfElement = elementOrArrayOfElement;
							var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

							exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
							var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
							exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
						}, { "react": "react" }], 3: [function (_dereq_, module, exports) {

							/*
        * @param {Array} list
        * @returns {Boolean}
        */
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});
							exports.isListOfStrings = isListOfStrings;
							exports.isKeyValueMap = isKeyValueMap;
							exports.castArray = castArray;
							exports.castKeyValue = castKeyValue;
							exports.castKeyValueArray = castKeyValueArray;

							function isListOfStrings(list) {
								if (!Array.isArray(list) || !list.length) {
									return false;
								}

								return list.every(function (item) {
									return typeof item === "string";
								});
							}

							/*
        * @param {Object} map
        * @returns {Boolean}
        */

							function isKeyValueMap(map) {
								if (map == null) {
									return false;
								}

								return map.hasOwnProperty("key") && map.hasOwnProperty("value");
							}

							/*
        * Always return an array.
        *
        * @param {String|Array} arr
        * @returns {Array}
        */

							function castArray(arr) {
								return Array.isArray(arr) ? arr : [arr];
							}

							;

							/*
        * Always return a key/value map.
        *
        * @param {Number|String|Boolean|Object} item
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValue(item) {
								return isKeyValueMap(item) ? item : {
									key: item,
									value: item
								};
							}

							/*
        * Always return an array of key/value maps.
        *
        * @param {Number|String|Boolean|Array|Object} list
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValueArray(list) {
								list = castArray(list);

								return list.map(castKeyValue);
							}
						}, {}], 4: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _listItem = _dereq_("./list-item");

							var _listItem2 = _interopRequireDefault(_listItem);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var _hireFormsUtils = _dereq_("hire-forms-utils");

							var List = (function (_React$Component) {
								function List(props) {
									_classCallCheck(this, List);

									_get(Object.getPrototypeOf(List.prototype), "constructor", this).call(this, props);

									this.state = { editItemIndex: null };
								}

								_inherits(List, _React$Component);

								_createClass(List, [{
									key: "handleListItemClick",
									value: function handleListItemClick(index, ev) {
										this.setState({ editItemIndex: index });

										if (this.props.onClick) {
											this.props.onClick(index, ev);
										}
									}
								}, {
									key: "handleListItemCancel",
									value: function handleListItemCancel() {
										this.setState({ editItemIndex: null });
									}
								}, {
									key: "handleListItemChange",
									value: function handleListItemChange(index, newValue) {
										this.setState({ editItemIndex: null });

										this.props.values[index] = newValue;
										this.props.onChange(this.props.values);
									}
								}, {
									key: "handleListItemRemove",
									value: function handleListItemRemove(index) {
										this.setState({ editItemIndex: null });

										this.props.values.splice(index, 1);
										this.props.onChange(this.props.values);
									}
								}, {
									key: "render",
									value: function render() {
										var _this = this;

										var list = this.props.values.map(function (item, index) {
											return _react2["default"].createElement(_listItem2["default"], {
												active: _this.state.editItemIndex === index,
												editable: _this.props.editable,
												key: index,
												onCancel: _this.handleListItemCancel.bind(_this, index),
												onChange: _this.handleListItemChange.bind(_this, index),
												onClick: _this.handleListItemClick.bind(_this, index),
												onRemove: _this.handleListItemRemove.bind(_this, index),
												removable: _this.props.removable,
												value: (0, _hireFormsUtils.castKeyValue)(item) });
										});

										list = list.length ? this.props.ordered ? _react2["default"].createElement("ol", null, list) : _react2["default"].createElement("ul", null, list) : _react2["default"].createElement("span", { className: "hire-empty-list" }, "The list is empty");

										return _react2["default"].createElement("div", { className: "hire-list" }, list);
									}
								}]);

								return List;
							})(_react2["default"].Component);

							List.defaultProps = {
								editable: false,
								ordered: false,
								removable: true,
								values: []
							};

							List.propTypes = {
								editable: _react2["default"].PropTypes.bool,
								onChange: _react2["default"].PropTypes.func,
								onClick: _react2["default"].PropTypes.func,
								options: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps,
								ordered: _react2["default"].PropTypes.bool,
								removable: _react2["default"].PropTypes.bool,
								values: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps
							};

							exports["default"] = List;
							module.exports = exports["default"];
						}, { "./list-item": 5, "hire-forms-prop-types": 2, "hire-forms-utils": 3, "react": "react" }], 5: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							var _extends = Object.assign || function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i];for (var key in source) {
										if (Object.prototype.hasOwnProperty.call(source, key)) {
											target[key] = source[key];
										}
									}
								}return target;
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
							}

							// TODO merge with static-list/list-item?
							// TODO move css to default css file

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var _hireFormsInput = _dereq_("hire-forms-input");

							var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var ext = function ext() {
								for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
									styles[_key] = arguments[_key];
								}

								return _extends.apply(undefined, [{}].concat(styles));
							};

							var liStyle = {
								cursor: "pointer"
							};

							var inputStyle = {
								width: "90%"
							};

							var buttonStyle = {
								width: "10%"
							};

							var spanStyle = {
								width: "90%"
							};

							var inlineBlockStyle = {
								display: "inline-block",
								boxSizing: "border-box",
								verticalAlign: "top"
							};

							var ListItem = (function (_React$Component) {
								function ListItem(props) {
									_classCallCheck(this, ListItem);

									_get(Object.getPrototypeOf(ListItem.prototype), "constructor", this).call(this, props);

									this.state = { value: props.value.value };
								}

								_inherits(ListItem, _React$Component);

								_createClass(ListItem, [{
									key: "componentWillUpdate",
									value: function componentWillUpdate(nextProps, nextState) {
										if (!nextProps.active) {
											nextState.value = nextProps.value.value;
										}
									}
								}, {
									key: "componentDidUpdate",
									value: function componentDidUpdate() {
										if (this.props.active && this.props.editable) {
											var node = _react2["default"].findDOMNode(this.refs.input);
											node.focus();
											node.value = node.value;
										}
									}
								}, {
									key: "onInputChange",
									value: function onInputChange(value) {
										this.setState({ value: value });
									}
								}, {
									key: "onInputKeyDown",
									value: function onInputKeyDown(ev) {
										// if keyCode is "enter" or "tab"
										if (ev.keyCode === 13 || ev.keyCode === 9) {
											if (this.state.value === this.props.value.value) {
												this.props.onCancel();
											} else {
												this.props.onChange(this.state.value);
											}
										}

										// if keyCode is "escape"
										if (ev.keyCode === 27) {
											this.props.onCancel();
										}
									}
								}, {
									key: "render",
									value: function render() {
										var remove = undefined;

										var el = this.props.active && this.props.editable ? _react2["default"].createElement(_hireFormsInput2["default"], {
											onChange: this.onInputChange.bind(this),
											onKeyDown: this.onInputKeyDown.bind(this),
											ref: "input",
											style: ext(inlineBlockStyle, inputStyle),
											value: this.state.value }) : _react2["default"].createElement("span", {
											className: "value",
											onClick: this.props.onClick.bind(this),
											style: ext(inlineBlockStyle, spanStyle) }, this.props.value.value);

										if (this.props.active && this.props.removable) {
											remove = _react2["default"].createElement("button", {
												className: "remove",
												onClick: this.props.onRemove,
												style: ext(inlineBlockStyle, buttonStyle) }, "x");
										}

										return _react2["default"].createElement("li", {
											className: (0, _classnames2["default"])("hire-list-item", { active: this.props.active }),
											style: liStyle }, el, remove);
									}
								}]);

								return ListItem;
							})(_react2["default"].Component);

							ListItem.defaultProps = {
								active: false,
								editable: false,
								removable: true
							};

							ListItem.propTypes = {
								active: _react2["default"].PropTypes.bool,
								editable: _react2["default"].PropTypes.bool,
								onCancel: _react2["default"].PropTypes.func,
								onChange: _react2["default"].PropTypes.func,
								onClick: _react2["default"].PropTypes.func,
								onRemove: _react2["default"].PropTypes.func,
								removable: _react2["default"].PropTypes.bool,
								value: _hireFormsPropTypes.keyValueMap
							};

							exports["default"] = ListItem;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "hire-forms-input": 1, "hire-forms-prop-types": 2, "react": "react" }] }, {}, [4])(4);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, {}], 2: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

			exports.elementOrArrayOfElement = elementOrArrayOfElement;
			/**
    * A string or an object,
    * example: {key: "somekey", value: "somevalue"}.
    */
			var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
				key: _react2["default"].PropTypes.string,
				value: _react2["default"].PropTypes.string
			})]);

			exports.stringOrKeyValue = stringOrKeyValue;
			var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

			exports.stringOrArray = stringOrArray;
			var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

			exports.stringOrArrayOfString = stringOrArrayOfString;
			var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
				key: _react2["default"].PropTypes.string.isRequired,
				value: _react2["default"].PropTypes.string.isRequired
			}));

			exports.arrayOfKeyValue = arrayOfKeyValue;
			/**
    * An array of strings or an array of key/value objects,
    * example: [{key: "somekey", value: "somevalue"}].
    */
			var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
				key: _react2["default"].PropTypes.string,
				value: _react2["default"].PropTypes.string
			}))]);
			exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;
		}, { "react": "react" }], 3: [function (_dereq_, module, exports) {
			(function (global) {
				(function (f) {
					if (typeof exports === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.HireFormsSelect = f();
					}
				})(function () {
					var define, module, exports;return (function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
								}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, l, l.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
					})({ 1: [function (_dereq_, module, exports) {
							(function (global) {
								(function (f) {
									if (typeof exports === "object" && typeof module !== "undefined") {
										module.exports = f();
									} else if (typeof define === "function" && define.amd) {
										define([], f);
									} else {
										var g;if (typeof window !== "undefined") {
											g = window;
										} else if (typeof global !== "undefined") {
											g = global;
										} else if (typeof self !== "undefined") {
											g = self;
										} else {
											g = this;
										}g.HireFormsOptions = f();
									}
								})(function () {
									var define, module, exports;return (function e(t, n, r) {
										function s(o, u) {
											if (!n[o]) {
												if (!t[o]) {
													var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
												}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
													var n = t[o][1][e];return s(n ? n : e);
												}, l, l.exports, e, t, n, r);
											}return n[o].exports;
										}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
									})({ 1: [function (_dereq_, module, exports) {
											"use strict";

											Object.defineProperty(exports, "__esModule", {
												value: true
											});

											function _interopRequireDefault(obj) {
												return obj && obj.__esModule ? obj : { "default": obj };
											}

											var _react = _dereq_("react");

											var _react2 = _interopRequireDefault(_react);

											var keyValueMap = _react2["default"].PropTypes.shape({
												key: _react2["default"].PropTypes.string.isRequired,
												value: _react2["default"].PropTypes.string.isRequired
											});

											exports.keyValueMap = keyValueMap;
											// ARRAY OF

											var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

											exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
											var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

											exports.arrayOfStrings = arrayOfStrings;
											var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

											exports.arrayOfElements = arrayOfElements;
											// OR

											var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

											exports.stringOrArray = stringOrArray;
											var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

											exports.stringOrKeyValueMap = stringOrKeyValueMap;
											var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

											exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
											var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

											exports.elementOrArrayOfElement = elementOrArrayOfElement;
											var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

											exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
											var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
											exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
										}, { "react": "react" }], 2: [function (_dereq_, module, exports) {

											/*
            * @param {Array} list
            * @returns {Boolean}
            */
											"use strict";

											Object.defineProperty(exports, "__esModule", {
												value: true
											});
											exports.isListOfStrings = isListOfStrings;
											exports.isKeyValueMap = isKeyValueMap;
											exports.castArray = castArray;
											exports.castKeyValue = castKeyValue;
											exports.castKeyValueArray = castKeyValueArray;

											function isListOfStrings(list) {
												if (!Array.isArray(list) || !list.length) {
													return false;
												}

												return list.every(function (item) {
													return typeof item === "string";
												});
											}

											/*
            * @param {Object} map
            * @returns {Boolean}
            */

											function isKeyValueMap(map) {
												if (map == null) {
													return false;
												}

												return map.hasOwnProperty("key") && map.hasOwnProperty("value");
											}

											/*
            * Always return an array.
            *
            * @param {String|Array} arr
            * @returns {Array}
            */

											function castArray(arr) {
												return Array.isArray(arr) ? arr : [arr];
											}

											;

											/*
            * Always return a key/value map.
            *
            * @param {Number|String|Boolean|Object} item
            * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
            */

											function castKeyValue(item) {
												return isKeyValueMap(item) ? item : {
													key: item,
													value: item
												};
											}

											/*
            * Always return an array of key/value maps.
            *
            * @param {Number|String|Boolean|Array|Object} list
            * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
            */

											function castKeyValueArray(list) {
												list = castArray(list);

												return list.map(castKeyValue);
											}
										}, {}], 3: [function (_dereq_, module, exports) {
											// TODO move listitem to seperate component (so we don't have to store data-key and data-value as attributes)
											// Move util functions to seperate module

											"use strict";

											Object.defineProperty(exports, "__esModule", {
												value: true
											});

											var _createClass = (function () {
												function defineProperties(target, props) {
													for (var i = 0; i < props.length; i++) {
														var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
													}
												}return function (Constructor, protoProps, staticProps) {
													if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
												};
											})();

											var _get = function get(_x, _x2, _x3) {
												var _again = true;_function: while (_again) {
													var object = _x,
													    property = _x2,
													    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
														var parent = Object.getPrototypeOf(object);if (parent === null) {
															return undefined;
														} else {
															_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
														}
													} else if ("value" in desc) {
														return desc.value;
													} else {
														var getter = desc.get;if (getter === undefined) {
															return undefined;
														}return getter.call(receiver);
													}
												}
											};

											function _interopRequireDefault(obj) {
												return obj && obj.__esModule ? obj : { "default": obj };
											}

											function _classCallCheck(instance, Constructor) {
												if (!(instance instanceof Constructor)) {
													throw new TypeError("Cannot call a class as a function");
												}
											}

											function _inherits(subClass, superClass) {
												if (typeof superClass !== "function" && superClass !== null) {
													throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
												}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
											}

											var _react = _dereq_("react");

											var _react2 = _interopRequireDefault(_react);

											var _classnames = _dereq_("classnames");

											var _classnames2 = _interopRequireDefault(_classnames);

											var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

											var _hireFormsUtils = _dereq_("hire-forms-utils");

											var hasKeyValue = function hasKeyValue(list, item) {
												return list.filter(function (li) {
													return li.key === item.key;
												}).length > 0;
											};

											/**
            * Options are rendered beneath the autocomplete and select components.
            *
            * @class
            * @extends React.Component
            */

											var Options = (function (_React$Component) {
												_inherits(Options, _React$Component);

												function Options() {
													_classCallCheck(this, Options);

													_get(Object.getPrototypeOf(Options.prototype), "constructor", this).apply(this, arguments);
												}

												_createClass(Options, [{
													key: "componentDidMount",
													value: function componentDidMount() {
														var node = _react2["default"].findDOMNode(this);

														if (node) {
															node.style.zIndex = 1000;
														}
													}
												}, {
													key: "componentWillUnmount",
													value: function componentWillUnmount() {
														var node = _react2["default"].findDOMNode(this);
														node.style.zIndex = 0;
													}

													/**
              * Sort values on relevance. A result is more relevant when the search
              * query is more at the beginning of the string. In other words:
              * String.indexOf(props.query): lower is better.
              * @param {Array<Object>} value An array of key/value maps
              * @param {String} query A search query
              * @returns {Array<Object>} Sorted values on relevance
              */
												}, {
													key: "sortRelevance",
													value: function sortRelevance(values, query) {
														return values.sort(function (a, b) {
															a = a.value.toLowerCase();
															b = b.value.toLowerCase();

															var indexA = a.indexOf(query);
															var indexB = b.indexOf(query);

															if (indexA > indexB) {
																return 1;
															}

															if (indexA < indexB) {
																return -1;
															}

															if (indexA === indexB) {
																if (a > b) {
																	return 1;
																}

																if (a < b) {
																	return -1;
																}
															}

															return 0;
														});
													}

													/*
              * highlight the currently highlighted option.
              *
              * @param {Object} target An HTMLElement or event object
              * @param {String} className Name of the highlight class
              */
												}, {
													key: "highlight",
													value: function highlight(target, className) {
														// Check if target is an event object.
														if (target.hasOwnProperty("currentTarget")) {
															target = target.currentTarget;
														}

														target.classList.add(className);
													}

													/**
              * Unhighlight the currently highlighted option.
              *
              * @param {String} className Name of the highlight class
              * @return {Object} The unhighlighted HTMLElement
              */
												}, {
													key: "unhighlight",
													value: function unhighlight(className) {
														var el = undefined;
														var node = _react2["default"].findDOMNode(this);

														if (node) {
															el = node.querySelector("li." + className);

															if (el) {
																el.classList.remove(className);
															}
														}

														return el;
													}
												}, {
													key: "handleClick",
													value: function handleClick(ev) {
														this.props.onChange(this.getOptionData(ev.currentTarget));
													}
												}, {
													key: "highlightPrev",
													value: function highlightPrev() {
														var prev = undefined;
														var current = this.unhighlight(this.props.highlightClass);

														if (current) {
															prev = current.previousElementSibling;
														}

														// If current and prev aren't found, start at the top.
														// Current is not found if there is no list item highlighted.
														// Prev is not found if the first list item is highlighted.
														if (!prev) {
															prev = _react2["default"].findDOMNode(this).lastChild;
														}

														this.highlight(prev, this.props.highlightClass);
													}
												}, {
													key: "highlightNext",
													value: function highlightNext() {
														var next = undefined;
														var current = this.unhighlight(this.props.highlightClass);

														if (current) {
															next = current.nextElementSibling;
														}

														// If current and next aren't found, start at the top.
														// Current is not found if there is no list item highlighted.
														// Next is not found if the last list item is highlighted.
														if (!next) {
															next = _react2["default"].findDOMNode(this).firstChild;
														}

														this.highlight(next, this.props.highlightClass);
													}
												}, {
													key: "select",
													value: function select() {
														var current = this.unhighlight(this.props.highlightClass);

														if (current) {
															this.props.onChange(this.getOptionData(current));
														}
													}

													/**
              * Get the key (id) and value (display name) of an option DOM element.
              *
              * @param {Object} el - Option DOM element
              * @returns {Object}
              */
												}, {
													key: "getOptionData",
													value: function getOptionData(el) {
														return {
															key: el.getAttribute("data-key"),
															value: el.getAttribute("data-value")
														};
													}
												}, {
													key: "render",
													value: function render() {
														var _this = this;

														if (this.props.values.length === 0) {
															return null;
														}

														var values = this.props.sort || this.props.sortRelevance && this.props.query !== "" ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

														var listitems = values.map(function (data, index) {
															var displayValue = data.value;

															if (_this.props.query.length) {
																var re = new RegExp(_this.props.query, "ig");
																displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
															}

															return _react2["default"].createElement("li", {
																className: (0, _classnames2["default"])({
																	"hire-forms-option": true,
																	selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this.props.value), data)
																}),
																dangerouslySetInnerHTML: { __html: displayValue },
																"data-key": data.key,
																"data-value": data.value,
																key: index,
																onClick: _this.handleClick.bind(_this) });
														});

														return _react2["default"].createElement("ul", {
															className: "hire-options" }, listitems);
													}
												}]);

												return Options;
											})(_react2["default"].Component);

											Options.defaultProps = {
												highlightClass: "highlight",
												query: "",
												sort: false,
												sortRelevance: true,
												value: { key: "", value: "" },
												values: []
											};

											Options.propTypes = {
												highlightClass: _react2["default"].PropTypes.string,
												onChange: _react2["default"].PropTypes.func.isRequired,
												query: _react2["default"].PropTypes.string,
												sort: _react2["default"].PropTypes.bool,
												sortRelevance: _react2["default"].PropTypes.bool,
												value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
												values: _hireFormsPropTypes.arrayOfKeyValueMaps
											};

											exports["default"] = Options;
											module.exports = exports["default"];
										}, { "classnames": "classnames", "hire-forms-prop-types": 1, "hire-forms-utils": 2, "react": "react" }] }, {}, [3])(3);
								});
							}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
						}, { "classnames": "classnames", "hire-forms-prop-types": 2, "hire-forms-utils": 3, "react": "react" }], 2: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var keyValueMap = _react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string.isRequired,
								value: _react2["default"].PropTypes.string.isRequired
							});

							exports.keyValueMap = keyValueMap;
							// ARRAY OF

							var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

							exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
							var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

							exports.arrayOfStrings = arrayOfStrings;
							var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

							exports.arrayOfElements = arrayOfElements;
							// OR

							var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

							exports.stringOrArray = stringOrArray;
							var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

							exports.stringOrKeyValueMap = stringOrKeyValueMap;
							var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

							exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
							var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

							exports.elementOrArrayOfElement = elementOrArrayOfElement;
							var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

							exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
							var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
							exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
						}, { "react": "react" }], 3: [function (_dereq_, module, exports) {

							/*
        * @param {Array} list
        * @returns {Boolean}
        */
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});
							exports.isListOfStrings = isListOfStrings;
							exports.isKeyValueMap = isKeyValueMap;
							exports.castArray = castArray;
							exports.castKeyValue = castKeyValue;
							exports.castKeyValueArray = castKeyValueArray;

							function isListOfStrings(list) {
								if (!Array.isArray(list) || !list.length) {
									return false;
								}

								return list.every(function (item) {
									return typeof item === "string";
								});
							}

							/*
        * @param {Object} map
        * @returns {Boolean}
        */

							function isKeyValueMap(map) {
								if (map == null) {
									return false;
								}

								return map.hasOwnProperty("key") && map.hasOwnProperty("value");
							}

							/*
        * Always return an array.
        *
        * @param {String|Array} arr
        * @returns {Array}
        */

							function castArray(arr) {
								return Array.isArray(arr) ? arr : [arr];
							}

							;

							/*
        * Always return a key/value map.
        *
        * @param {Number|String|Boolean|Object} item
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValue(item) {
								return isKeyValueMap(item) ? item : {
									key: item,
									value: item
								};
							}

							/*
        * Always return an array of key/value maps.
        *
        * @param {Number|String|Boolean|Array|Object} list
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValueArray(list) {
								list = castArray(list);

								return list.map(castKeyValue);
							}
						}, {}], 4: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var _hireFormsOptions = _dereq_("hire-forms-options");

							var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var _hireFormsUtils = _dereq_("hire-forms-utils");

							var Select = (function (_React$Component) {
								_inherits(Select, _React$Component);

								function Select(props) {
									_classCallCheck(this, Select);

									_get(Object.getPrototypeOf(Select.prototype), "constructor", this).call(this, props);

									this.state = {
										options: props.options,
										visible: false
									};
								}

								_createClass(Select, [{
									key: "componentDidMount",
									value: function componentDidMount() {
										var _this = this;

										if (this.props.async != null) {
											this.props.async(function (response) {
												_this.setState({
													options: response
												});
											});
										}
									}
								}, {
									key: "handleInputClick",
									value: function handleInputClick() {
										// Visible state shouldn't change when there are no options.
										if (this.state.options.length > 0) {
											this.setState({ visible: !this.state.visible });
										}
									}

									/**
          * @method
          * @param {object} value Map of key and value: {key: "somekey", value: "somevalue"}
          */
								}, {
									key: "handleOptionsChange",
									value: function handleOptionsChange(value) {
										this.setState({ visible: false });

										// If the options prop is an array of strings, return a string.
										if ((0, _hireFormsUtils.isListOfStrings)(this.state.options)) {
											value = value.value;
										}

										this.props.onChange(value);
									}
								}, {
									key: "render",
									value: function render() {
										var optionValues = undefined,
										    options = undefined;

										if (this.state.visible) {
											options = _react2["default"].createElement(_hireFormsOptions2["default"], {
												onChange: this.handleOptionsChange.bind(this),
												sort: this.props.sort,
												sortRelevance: this.props.sortRelevance,
												value: (0, _hireFormsUtils.castKeyValue)(this.props.value),
												values: (0, _hireFormsUtils.castKeyValueArray)(this.state.options) });
										}

										// If value prop is a key/value map, extract the value.
										var value = (0, _hireFormsUtils.isKeyValueMap)(this.props.value) ? this.props.value.value : this.props.value;

										// Create new var so we can check value in cx()
										var inputValue = value === "" ? this.props.placeholder : value;

										return _react2["default"].createElement("div", { className: "hire-select" }, _react2["default"].createElement("div", {
											className: "input-container",
											onClick: this.handleInputClick.bind(this) }, _react2["default"].createElement("div", { className: (0, _classnames2["default"])({
												"input": true,
												"placeholder": value === "" }) }, inputValue), _react2["default"].createElement("button", null, "▾")), options);
									}
								}]);

								return Select;
							})(_react2["default"].Component);

							Select.defaultProps = {
								options: [],
								value: ""
							};

							Select.propTypes = {
								async: _react2["default"].PropTypes.func,
								onChange: _react2["default"].PropTypes.func.isRequired,
								options: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps,
								placeholder: _react2["default"].PropTypes.string,
								sort: _react2["default"].PropTypes.bool,
								sortRelevance: _react2["default"].PropTypes.bool,
								value: _hireFormsPropTypes.stringOrKeyValueMap
							};

							exports["default"] = Select;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "hire-forms-options": 1, "hire-forms-prop-types": 2, "hire-forms-utils": 3, "react": "react" }] }, {}, [4])(4);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, { "classnames": "classnames", "hire-forms-options": 4, "hire-forms-prop-types": 5, "hire-forms-utils": 6, "react": "react" }], 4: [function (_dereq_, module, exports) {
			(function (global) {
				(function (f) {
					if (typeof exports === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.HireFormsOptions = f();
					}
				})(function () {
					var define, module, exports;return (function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
								}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, l, l.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
					})({ 1: [function (_dereq_, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var keyValueMap = _react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string.isRequired,
								value: _react2["default"].PropTypes.string.isRequired
							});

							exports.keyValueMap = keyValueMap;
							// ARRAY OF

							var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

							exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
							var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

							exports.arrayOfStrings = arrayOfStrings;
							var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

							exports.arrayOfElements = arrayOfElements;
							// OR

							var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

							exports.stringOrArray = stringOrArray;
							var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

							exports.stringOrKeyValueMap = stringOrKeyValueMap;
							var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

							exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
							var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

							exports.elementOrArrayOfElement = elementOrArrayOfElement;
							var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

							exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
							var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
							exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
						}, { "react": "react" }], 2: [function (_dereq_, module, exports) {

							/*
        * @param {Array} list
        * @returns {Boolean}
        */
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});
							exports.isListOfStrings = isListOfStrings;
							exports.isKeyValueMap = isKeyValueMap;
							exports.castArray = castArray;
							exports.castKeyValue = castKeyValue;
							exports.castKeyValueArray = castKeyValueArray;

							function isListOfStrings(list) {
								if (!Array.isArray(list) || !list.length) {
									return false;
								}

								return list.every(function (item) {
									return typeof item === "string";
								});
							}

							/*
        * @param {Object} map
        * @returns {Boolean}
        */

							function isKeyValueMap(map) {
								if (map == null) {
									return false;
								}

								return map.hasOwnProperty("key") && map.hasOwnProperty("value");
							}

							/*
        * Always return an array.
        *
        * @param {String|Array} arr
        * @returns {Array}
        */

							function castArray(arr) {
								return Array.isArray(arr) ? arr : [arr];
							}

							;

							/*
        * Always return a key/value map.
        *
        * @param {Number|String|Boolean|Object} item
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValue(item) {
								return isKeyValueMap(item) ? item : {
									key: item,
									value: item
								};
							}

							/*
        * Always return an array of key/value maps.
        *
        * @param {Number|String|Boolean|Array|Object} list
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValueArray(list) {
								list = castArray(list);

								return list.map(castKeyValue);
							}
						}, {}], 3: [function (_dereq_, module, exports) {
							// TODO move listitem to seperate component (so we don't have to store data-key and data-value as attributes)
							// Move util functions to seperate module

							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
							}

							var _react = _dereq_("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = _dereq_("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

							var _hireFormsUtils = _dereq_("hire-forms-utils");

							var hasKeyValue = function hasKeyValue(list, item) {
								return list.filter(function (li) {
									return li.key === item.key;
								}).length > 0;
							};

							/**
        * Options are rendered beneath the autocomplete and select components.
        *
        * @class
        * @extends React.Component
        */

							var Options = (function (_React$Component) {
								_inherits(Options, _React$Component);

								function Options() {
									_classCallCheck(this, Options);

									_get(Object.getPrototypeOf(Options.prototype), "constructor", this).apply(this, arguments);
								}

								_createClass(Options, [{
									key: "componentDidMount",
									value: function componentDidMount() {
										var node = _react2["default"].findDOMNode(this);

										if (node) {
											node.style.zIndex = 1000;
										}
									}
								}, {
									key: "componentWillUnmount",
									value: function componentWillUnmount() {
										var node = _react2["default"].findDOMNode(this);
										node.style.zIndex = 0;
									}

									/**
          * Sort values on relevance. A result is more relevant when the search
          * query is more at the beginning of the string. In other words:
          * String.indexOf(props.query): lower is better.
          * @param {Array<Object>} value An array of key/value maps
          * @param {String} query A search query
          * @returns {Array<Object>} Sorted values on relevance
          */
								}, {
									key: "sortRelevance",
									value: function sortRelevance(values, query) {
										return values.sort(function (a, b) {
											a = a.value.toLowerCase();
											b = b.value.toLowerCase();

											var indexA = a.indexOf(query);
											var indexB = b.indexOf(query);

											if (indexA > indexB) {
												return 1;
											}

											if (indexA < indexB) {
												return -1;
											}

											if (indexA === indexB) {
												if (a > b) {
													return 1;
												}

												if (a < b) {
													return -1;
												}
											}

											return 0;
										});
									}

									/*
          * highlight the currently highlighted option.
          *
          * @param {Object} target An HTMLElement or event object
          * @param {String} className Name of the highlight class
          */
								}, {
									key: "highlight",
									value: function highlight(target, className) {
										// Check if target is an event object.
										if (target.hasOwnProperty("currentTarget")) {
											target = target.currentTarget;
										}

										target.classList.add(className);
									}

									/**
          * Unhighlight the currently highlighted option.
          *
          * @param {String} className Name of the highlight class
          * @return {Object} The unhighlighted HTMLElement
          */
								}, {
									key: "unhighlight",
									value: function unhighlight(className) {
										var el = undefined;
										var node = _react2["default"].findDOMNode(this);

										if (node) {
											el = node.querySelector("li." + className);

											if (el) {
												el.classList.remove(className);
											}
										}

										return el;
									}
								}, {
									key: "handleClick",
									value: function handleClick(ev) {
										this.props.onChange(this.getOptionData(ev.currentTarget));
									}
								}, {
									key: "highlightPrev",
									value: function highlightPrev() {
										var prev = undefined;
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											prev = current.previousElementSibling;
										}

										// If current and prev aren't found, start at the top.
										// Current is not found if there is no list item highlighted.
										// Prev is not found if the first list item is highlighted.
										if (!prev) {
											prev = _react2["default"].findDOMNode(this).lastChild;
										}

										this.highlight(prev, this.props.highlightClass);
									}
								}, {
									key: "highlightNext",
									value: function highlightNext() {
										var next = undefined;
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											next = current.nextElementSibling;
										}

										// If current and next aren't found, start at the top.
										// Current is not found if there is no list item highlighted.
										// Next is not found if the last list item is highlighted.
										if (!next) {
											next = _react2["default"].findDOMNode(this).firstChild;
										}

										this.highlight(next, this.props.highlightClass);
									}
								}, {
									key: "select",
									value: function select() {
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											this.props.onChange(this.getOptionData(current));
										}
									}

									/**
          * Get the key (id) and value (display name) of an option DOM element.
          *
          * @param {Object} el - Option DOM element
          * @returns {Object}
          */
								}, {
									key: "getOptionData",
									value: function getOptionData(el) {
										return {
											key: el.getAttribute("data-key"),
											value: el.getAttribute("data-value")
										};
									}
								}, {
									key: "render",
									value: function render() {
										var _this = this;

										if (this.props.values.length === 0) {
											return null;
										}

										var values = this.props.sort || this.props.sortRelevance && this.props.query !== "" ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

										var listitems = values.map(function (data, index) {
											var displayValue = data.value;

											if (_this.props.query.length) {
												var re = new RegExp(_this.props.query, "ig");
												displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
											}

											return _react2["default"].createElement("li", {
												className: (0, _classnames2["default"])({
													"hire-forms-option": true,
													selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this.props.value), data)
												}),
												dangerouslySetInnerHTML: { __html: displayValue },
												"data-key": data.key,
												"data-value": data.value,
												key: index,
												onClick: _this.handleClick.bind(_this) });
										});

										return _react2["default"].createElement("ul", {
											className: "hire-options" }, listitems);
									}
								}]);

								return Options;
							})(_react2["default"].Component);

							Options.defaultProps = {
								highlightClass: "highlight",
								query: "",
								sort: false,
								sortRelevance: true,
								value: { key: "", value: "" },
								values: []
							};

							Options.propTypes = {
								highlightClass: _react2["default"].PropTypes.string,
								onChange: _react2["default"].PropTypes.func.isRequired,
								query: _react2["default"].PropTypes.string,
								sort: _react2["default"].PropTypes.bool,
								sortRelevance: _react2["default"].PropTypes.bool,
								value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
								values: _hireFormsPropTypes.arrayOfKeyValueMaps
							};

							exports["default"] = Options;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "hire-forms-prop-types": 1, "hire-forms-utils": 2, "react": "react" }] }, {}, [3])(3);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, { "classnames": "classnames", "hire-forms-prop-types": 5, "hire-forms-utils": 6, "react": "react" }], 5: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var keyValueMap = _react2["default"].PropTypes.shape({
				key: _react2["default"].PropTypes.string.isRequired,
				value: _react2["default"].PropTypes.string.isRequired
			});

			exports.keyValueMap = keyValueMap;
			// ARRAY OF

			var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

			exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
			var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

			exports.arrayOfStrings = arrayOfStrings;
			var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

			exports.arrayOfElements = arrayOfElements;
			// OR

			var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

			exports.stringOrArray = stringOrArray;
			var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

			exports.stringOrKeyValueMap = stringOrKeyValueMap;
			var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

			exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
			var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

			exports.elementOrArrayOfElement = elementOrArrayOfElement;
			var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

			exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
			var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
			exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
		}, { "react": "react" }], 6: [function (_dereq_, module, exports) {

			/*
    * @param {Array} list
    * @returns {Boolean}
    */
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.isListOfStrings = isListOfStrings;
			exports.isKeyValueMap = isKeyValueMap;
			exports.castArray = castArray;
			exports.castKeyValue = castKeyValue;
			exports.castKeyValueArray = castKeyValueArray;

			function isListOfStrings(list) {
				if (!Array.isArray(list) || !list.length) {
					return false;
				}

				return list.every(function (item) {
					return typeof item === "string";
				});
			}

			/*
    * @param {Object} map
    * @returns {Boolean}
    */

			function isKeyValueMap(map) {
				if (map == null) {
					return false;
				}

				return map.hasOwnProperty("key") && map.hasOwnProperty("value");
			}

			/*
    * Always return an array.
    *
    * @param {String|Array} arr
    * @returns {Array}
    */

			function castArray(arr) {
				return Array.isArray(arr) ? arr : [arr];
			}

			;

			/*
    * Always return a key/value map.
    *
    * @param {Number|String|Boolean|Object} item
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValue(item) {
				return isKeyValueMap(item) ? item : {
					key: item,
					value: item
				};
			}

			/*
    * Always return an array of key/value maps.
    *
    * @param {Number|String|Boolean|Array|Object} list
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValueArray(list) {
				list = castArray(list);

				return list.map(castKeyValue);
			}
		}, {}], 7: [function (_dereq_, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			})();

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
			}

			var _react = _dereq_("react");

			var _react2 = _interopRequireDefault(_react);

			var _hireFormsList = _dereq_("hire-forms-list");

			var _hireFormsList2 = _interopRequireDefault(_hireFormsList);

			var _hireFormsSelect = _dereq_("hire-forms-select");

			var _hireFormsSelect2 = _interopRequireDefault(_hireFormsSelect);

			var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

			var SelectList = (function (_React$Component) {
				function SelectList() {
					_classCallCheck(this, SelectList);

					if (_React$Component != null) {
						_React$Component.apply(this, arguments);
					}
				}

				_inherits(SelectList, _React$Component);

				_createClass(SelectList, [{
					key: "handleListChange",
					value: function handleListChange(values) {
						this.props.onChange(values);
					}
				}, {
					key: "handleSelectChange",
					value: function handleSelectChange(value) {
						// Use concat instead of push so we don't alter the this.props.
						var values = this.props.values.concat([value]);

						this.props.onChange(values);
					}
				}, {
					key: "render",
					value: function render() {
						return _react2["default"].createElement("div", { className: "hire-select-list" }, _react2["default"].createElement(_hireFormsList2["default"], {
							onChange: this.handleListChange.bind(this),
							values: this.props.values }), _react2["default"].createElement(_hireFormsSelect2["default"], {
							async: this.props.async,
							onChange: this.handleSelectChange.bind(this),
							options: this.props.options,
							placeholder: this.props.placeholder }));
					}
				}]);

				return SelectList;
			})(_react2["default"].Component);

			SelectList.defaultProps = {
				values: [],
				options: [],
				ordered: false
			};

			SelectList.propTypes = {
				async: _react2["default"].PropTypes.func,
				onChange: _react2["default"].PropTypes.func.isRequired,
				options: _hireFormsPropTypes.arrayOfStringOrArrayOfKeyValue,
				ordered: _react2["default"].PropTypes.bool,
				placeholder: _react2["default"].PropTypes.string,
				values: _hireFormsPropTypes.arrayOfStringOrArrayOfKeyValue
			};

			exports["default"] = SelectList;
			module.exports = exports["default"];
		}, { "hire-forms-list": 1, "hire-forms-prop-types": 2, "hire-forms-select": 3, "react": "react" }] }, {}, [7])(7);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
"use strict";

(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.HireFormsSelect = f();
	}
})(function () {
	var define, module, exports;return (function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	})({ 1: [function (require, module, exports) {
			(function (global) {
				(function (f) {
					if (typeof exports === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.HireFormsOptions = f();
					}
				})(function () {
					var define, module, exports;return (function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
								}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, l, l.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
					})({ 1: [function (require, module, exports) {
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							var _react = require("react");

							var _react2 = _interopRequireDefault(_react);

							var keyValueMap = _react2["default"].PropTypes.shape({
								key: _react2["default"].PropTypes.string.isRequired,
								value: _react2["default"].PropTypes.string.isRequired
							});

							exports.keyValueMap = keyValueMap;
							// ARRAY OF

							var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

							exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
							var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

							exports.arrayOfStrings = arrayOfStrings;
							var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

							exports.arrayOfElements = arrayOfElements;
							// OR

							var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

							exports.stringOrArray = stringOrArray;
							var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

							exports.stringOrKeyValueMap = stringOrKeyValueMap;
							var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

							exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
							var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

							exports.elementOrArrayOfElement = elementOrArrayOfElement;
							var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

							exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
							var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
							exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
						}, { "react": "react" }], 2: [function (require, module, exports) {

							/*
        * @param {Array} list
        * @returns {Boolean}
        */
							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});
							exports.isListOfStrings = isListOfStrings;
							exports.isKeyValueMap = isKeyValueMap;
							exports.castArray = castArray;
							exports.castKeyValue = castKeyValue;
							exports.castKeyValueArray = castKeyValueArray;

							function isListOfStrings(list) {
								if (!Array.isArray(list) || !list.length) {
									return false;
								}

								return list.every(function (item) {
									return typeof item === "string";
								});
							}

							/*
        * @param {Object} map
        * @returns {Boolean}
        */

							function isKeyValueMap(map) {
								if (map == null) {
									return false;
								}

								return map.hasOwnProperty("key") && map.hasOwnProperty("value");
							}

							/*
        * Always return an array.
        *
        * @param {String|Array} arr
        * @returns {Array}
        */

							function castArray(arr) {
								return Array.isArray(arr) ? arr : [arr];
							}

							;

							/*
        * Always return a key/value map.
        *
        * @param {Number|String|Boolean|Object} item
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValue(item) {
								return isKeyValueMap(item) ? item : {
									key: item,
									value: item
								};
							}

							/*
        * Always return an array of key/value maps.
        *
        * @param {Number|String|Boolean|Array|Object} list
        * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
        */

							function castKeyValueArray(list) {
								list = castArray(list);

								return list.map(castKeyValue);
							}
						}, {}], 3: [function (require, module, exports) {
							// TODO move listitem to seperate component (so we don't have to store data-key and data-value as attributes)
							// Move util functions to seperate module

							"use strict";

							Object.defineProperty(exports, "__esModule", {
								value: true
							});

							var _createClass = (function () {
								function defineProperties(target, props) {
									for (var i = 0; i < props.length; i++) {
										var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
									}
								}return function (Constructor, protoProps, staticProps) {
									if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
								};
							})();

							var _get = function get(_x, _x2, _x3) {
								var _again = true;_function: while (_again) {
									var object = _x,
									    property = _x2,
									    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
										var parent = Object.getPrototypeOf(object);if (parent === null) {
											return undefined;
										} else {
											_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
										}
									} else if ("value" in desc) {
										return desc.value;
									} else {
										var getter = desc.get;if (getter === undefined) {
											return undefined;
										}return getter.call(receiver);
									}
								}
							};

							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { "default": obj };
							}

							function _classCallCheck(instance, Constructor) {
								if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}

							function _inherits(subClass, superClass) {
								if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
								}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
							}

							var _react = require("react");

							var _react2 = _interopRequireDefault(_react);

							var _classnames = require("classnames");

							var _classnames2 = _interopRequireDefault(_classnames);

							var _hireFormsPropTypes = require("hire-forms-prop-types");

							var _hireFormsUtils = require("hire-forms-utils");

							var hasKeyValue = function hasKeyValue(list, item) {
								return list.filter(function (li) {
									return li.key === item.key;
								}).length > 0;
							};

							/**
        * Options are rendered beneath the autocomplete and select components.
        *
        * @class
        * @extends React.Component
        */

							var Options = (function (_React$Component) {
								_inherits(Options, _React$Component);

								function Options() {
									_classCallCheck(this, Options);

									_get(Object.getPrototypeOf(Options.prototype), "constructor", this).apply(this, arguments);
								}

								_createClass(Options, [{
									key: "componentDidMount",
									value: function componentDidMount() {
										var node = _react2["default"].findDOMNode(this);

										if (node) {
											node.style.zIndex = 1000;
										}
									}
								}, {
									key: "componentWillUnmount",
									value: function componentWillUnmount() {
										var node = _react2["default"].findDOMNode(this);
										node.style.zIndex = 0;
									}

									/**
          * Sort values on relevance. A result is more relevant when the search
          * query is more at the beginning of the string. In other words:
          * String.indexOf(props.query): lower is better.
          * @param {Array<Object>} value An array of key/value maps
          * @param {String} query A search query
          * @returns {Array<Object>} Sorted values on relevance
          */
								}, {
									key: "sortRelevance",
									value: function sortRelevance(values, query) {
										return values.sort(function (a, b) {
											a = a.value.toLowerCase();
											b = b.value.toLowerCase();

											var indexA = a.indexOf(query);
											var indexB = b.indexOf(query);

											if (indexA > indexB) {
												return 1;
											}

											if (indexA < indexB) {
												return -1;
											}

											if (indexA === indexB) {
												if (a > b) {
													return 1;
												}

												if (a < b) {
													return -1;
												}
											}

											return 0;
										});
									}

									/*
          * highlight the currently highlighted option.
          *
          * @param {Object} target An HTMLElement or event object
          * @param {String} className Name of the highlight class
          */
								}, {
									key: "highlight",
									value: function highlight(target, className) {
										// Check if target is an event object.
										if (target.hasOwnProperty("currentTarget")) {
											target = target.currentTarget;
										}

										target.classList.add(className);
									}

									/**
          * Unhighlight the currently highlighted option.
          *
          * @param {String} className Name of the highlight class
          * @return {Object} The unhighlighted HTMLElement
          */
								}, {
									key: "unhighlight",
									value: function unhighlight(className) {
										var el = undefined;
										var node = _react2["default"].findDOMNode(this);

										if (node) {
											el = node.querySelector("li." + className);

											if (el) {
												el.classList.remove(className);
											}
										}

										return el;
									}
								}, {
									key: "handleClick",
									value: function handleClick(ev) {
										this.props.onChange(this.getOptionData(ev.currentTarget));
									}
								}, {
									key: "highlightPrev",
									value: function highlightPrev() {
										var prev = undefined;
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											prev = current.previousElementSibling;
										}

										// If current and prev aren't found, start at the top.
										// Current is not found if there is no list item highlighted.
										// Prev is not found if the first list item is highlighted.
										if (!prev) {
											prev = _react2["default"].findDOMNode(this).lastChild;
										}

										this.highlight(prev, this.props.highlightClass);
									}
								}, {
									key: "highlightNext",
									value: function highlightNext() {
										var next = undefined;
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											next = current.nextElementSibling;
										}

										// If current and next aren't found, start at the top.
										// Current is not found if there is no list item highlighted.
										// Next is not found if the last list item is highlighted.
										if (!next) {
											next = _react2["default"].findDOMNode(this).firstChild;
										}

										this.highlight(next, this.props.highlightClass);
									}
								}, {
									key: "select",
									value: function select() {
										var current = this.unhighlight(this.props.highlightClass);

										if (current) {
											this.props.onChange(this.getOptionData(current));
										}
									}

									/**
          * Get the key (id) and value (display name) of an option DOM element.
          *
          * @param {Object} el - Option DOM element
          * @returns {Object}
          */
								}, {
									key: "getOptionData",
									value: function getOptionData(el) {
										return {
											key: el.getAttribute("data-key"),
											value: el.getAttribute("data-value")
										};
									}
								}, {
									key: "render",
									value: function render() {
										var _this = this;

										if (this.props.values.length === 0) {
											return null;
										}

										var values = this.props.sort || this.props.sortRelevance && this.props.query !== "" ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

										var listitems = values.map(function (data, index) {
											var displayValue = data.value;

											if (_this.props.query.length) {
												var re = new RegExp(_this.props.query, "ig");
												displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
											}

											return _react2["default"].createElement("li", {
												className: (0, _classnames2["default"])({
													"hire-forms-option": true,
													selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this.props.value), data)
												}),
												dangerouslySetInnerHTML: { __html: displayValue },
												"data-key": data.key,
												"data-value": data.value,
												key: index,
												onClick: _this.handleClick.bind(_this) });
										});

										return _react2["default"].createElement("ul", {
											className: "hire-options" }, listitems);
									}
								}]);

								return Options;
							})(_react2["default"].Component);

							Options.defaultProps = {
								highlightClass: "highlight",
								query: "",
								sort: false,
								sortRelevance: true,
								value: { key: "", value: "" },
								values: []
							};

							Options.propTypes = {
								highlightClass: _react2["default"].PropTypes.string,
								onChange: _react2["default"].PropTypes.func.isRequired,
								query: _react2["default"].PropTypes.string,
								sort: _react2["default"].PropTypes.bool,
								sortRelevance: _react2["default"].PropTypes.bool,
								value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
								values: _hireFormsPropTypes.arrayOfKeyValueMaps
							};

							exports["default"] = Options;
							module.exports = exports["default"];
						}, { "classnames": "classnames", "hire-forms-prop-types": 1, "hire-forms-utils": 2, "react": "react" }] }, {}, [3])(3);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, { "classnames": "classnames", "hire-forms-prop-types": 2, "hire-forms-utils": 3, "react": "react" }], 2: [function (require, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			var _react = require("react");

			var _react2 = _interopRequireDefault(_react);

			var keyValueMap = _react2["default"].PropTypes.shape({
				key: _react2["default"].PropTypes.string.isRequired,
				value: _react2["default"].PropTypes.string.isRequired
			});

			exports.keyValueMap = keyValueMap;
			// ARRAY OF

			var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

			exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
			var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

			exports.arrayOfStrings = arrayOfStrings;
			var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

			exports.arrayOfElements = arrayOfElements;
			// OR

			var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

			exports.stringOrArray = stringOrArray;
			var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

			exports.stringOrKeyValueMap = stringOrKeyValueMap;
			var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

			exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
			var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

			exports.elementOrArrayOfElement = elementOrArrayOfElement;
			var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

			exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
			var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
			exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
		}, { "react": "react" }], 3: [function (require, module, exports) {

			/*
    * @param {Array} list
    * @returns {Boolean}
    */
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.isListOfStrings = isListOfStrings;
			exports.isKeyValueMap = isKeyValueMap;
			exports.castArray = castArray;
			exports.castKeyValue = castKeyValue;
			exports.castKeyValueArray = castKeyValueArray;

			function isListOfStrings(list) {
				if (!Array.isArray(list) || !list.length) {
					return false;
				}

				return list.every(function (item) {
					return typeof item === "string";
				});
			}

			/*
    * @param {Object} map
    * @returns {Boolean}
    */

			function isKeyValueMap(map) {
				if (map == null) {
					return false;
				}

				return map.hasOwnProperty("key") && map.hasOwnProperty("value");
			}

			/*
    * Always return an array.
    *
    * @param {String|Array} arr
    * @returns {Array}
    */

			function castArray(arr) {
				return Array.isArray(arr) ? arr : [arr];
			}

			;

			/*
    * Always return a key/value map.
    *
    * @param {Number|String|Boolean|Object} item
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValue(item) {
				return isKeyValueMap(item) ? item : {
					key: item,
					value: item
				};
			}

			/*
    * Always return an array of key/value maps.
    *
    * @param {Number|String|Boolean|Array|Object} list
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValueArray(list) {
				list = castArray(list);

				return list.map(castKeyValue);
			}
		}, {}], 4: [function (require, module, exports) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			})();

			var _get = function get(_x, _x2, _x3) {
				var _again = true;_function: while (_again) {
					var object = _x,
					    property = _x2,
					    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
						var parent = Object.getPrototypeOf(object);if (parent === null) {
							return undefined;
						} else {
							_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
						}
					} else if ("value" in desc) {
						return desc.value;
					} else {
						var getter = desc.get;if (getter === undefined) {
							return undefined;
						}return getter.call(receiver);
					}
				}
			};

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { "default": obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var _react = require("react");

			var _react2 = _interopRequireDefault(_react);

			var _classnames = require("classnames");

			var _classnames2 = _interopRequireDefault(_classnames);

			var _hireFormsOptions = require("hire-forms-options");

			var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

			var _hireFormsPropTypes = require("hire-forms-prop-types");

			var _hireFormsUtils = require("hire-forms-utils");

			var Select = (function (_React$Component) {
				_inherits(Select, _React$Component);

				function Select(props) {
					_classCallCheck(this, Select);

					_get(Object.getPrototypeOf(Select.prototype), "constructor", this).call(this, props);

					this.state = {
						options: props.options,
						visible: false
					};
				}

				_createClass(Select, [{
					key: "componentDidMount",
					value: function componentDidMount() {
						var _this = this;

						if (this.props.async != null) {
							this.props.async(function (response) {
								_this.setState({
									options: response
								});
							});
						}
					}
				}, {
					key: "handleInputClick",
					value: function handleInputClick() {
						// Visible state shouldn't change when there are no options.
						if (this.state.options.length > 0) {
							this.setState({ visible: !this.state.visible });
						}
					}

					/**
      * @method
      * @param {object} value Map of key and value: {key: "somekey", value: "somevalue"}
      */
				}, {
					key: "handleOptionsChange",
					value: function handleOptionsChange(value) {
						this.setState({ visible: false });

						// If the options prop is an array of strings, return a string.
						if ((0, _hireFormsUtils.isListOfStrings)(this.state.options)) {
							value = value.value;
						}

						this.props.onChange(value);
					}
				}, {
					key: "render",
					value: function render() {
						var optionValues = undefined,
						    options = undefined;

						if (this.state.visible) {
							options = _react2["default"].createElement(_hireFormsOptions2["default"], {
								onChange: this.handleOptionsChange.bind(this),
								sort: this.props.sort,
								sortRelevance: this.props.sortRelevance,
								value: (0, _hireFormsUtils.castKeyValue)(this.props.value),
								values: (0, _hireFormsUtils.castKeyValueArray)(this.state.options) });
						}

						// If value prop is a key/value map, extract the value.
						var value = (0, _hireFormsUtils.isKeyValueMap)(this.props.value) ? this.props.value.value : this.props.value;

						// Create new var so we can check value in cx()
						var inputValue = value === "" ? this.props.placeholder : value;

						return _react2["default"].createElement("div", { className: "hire-select" }, _react2["default"].createElement("div", {
							className: "input-container",
							onClick: this.handleInputClick.bind(this) }, _react2["default"].createElement("div", { className: (0, _classnames2["default"])({
								"input": true,
								"placeholder": value === "" }) }, inputValue), _react2["default"].createElement("button", null, "▾")), options);
					}
				}]);

				return Select;
			})(_react2["default"].Component);

			Select.defaultProps = {
				options: [],
				value: ""
			};

			Select.propTypes = {
				async: _react2["default"].PropTypes.func,
				onChange: _react2["default"].PropTypes.func.isRequired,
				options: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps,
				placeholder: _react2["default"].PropTypes.string,
				sort: _react2["default"].PropTypes.bool,
				sortRelevance: _react2["default"].PropTypes.bool,
				value: _hireFormsPropTypes.stringOrKeyValueMap
			};

			exports["default"] = Select;
			module.exports = exports["default"];
		}, { "classnames": "classnames", "hire-forms-options": 1, "hire-forms-prop-types": 2, "hire-forms-utils": 3, "react": "react" }] }, {}, [4])(4);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"classnames":"classnames","hire-forms-options":7,"hire-forms-prop-types":8,"hire-forms-utils":9,"react":"react"}],7:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsOptions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}],2:[function(require,module,exports){

/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValue = castKeyValue;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
  if (!Array.isArray(list) || !list.length) {
    return false;
  }

  return list.every(function (item) {
    return typeof item === "string";
  });
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
  if (map == null) {
    return false;
  }

  return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return a key/value map.
 *
 * @param {Number|String|Boolean|Object} item
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValue(item) {
  return isKeyValueMap(item) ? item : {
    key: item,
    value: item
  };
}

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array|Object} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
  list = castArray(list);

  return list.map(castKeyValue);
}

},{}],3:[function(require,module,exports){
// TODO move listitem to seperate component (so we don't have to store data-key and data-value as attributes)
// Move util functions to seperate module

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsPropTypes = require("hire-forms-prop-types");

var _hireFormsUtils = require("hire-forms-utils");

var hasKeyValue = function hasKeyValue(list, item) {
	return list.filter(function (li) {
		return li.key === item.key;
	}).length > 0;
};

/**
 * Options are rendered beneath the autocomplete and select components.
 *
 * @class
 * @extends React.Component
 */

var Options = (function (_React$Component) {
	_inherits(Options, _React$Component);

	function Options() {
		_classCallCheck(this, Options);

		_get(Object.getPrototypeOf(Options.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Options, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var node = _react2["default"].findDOMNode(this);

			if (node) {
				node.style.zIndex = 1000;
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var node = _react2["default"].findDOMNode(this);
			node.style.zIndex = 0;
		}

		/**
   * Sort values on relevance. A result is more relevant when the search
   * query is more at the beginning of the string. In other words:
   * String.indexOf(props.query): lower is better.
   * @param {Array<Object>} value An array of key/value maps
   * @param {String} query A search query
   * @returns {Array<Object>} Sorted values on relevance
   */
	}, {
		key: "sortRelevance",
		value: function sortRelevance(values, query) {
			return values.sort(function (a, b) {
				a = a.value.toLowerCase();
				b = b.value.toLowerCase();

				var indexA = a.indexOf(query);
				var indexB = b.indexOf(query);

				if (indexA > indexB) {
					return 1;
				}

				if (indexA < indexB) {
					return -1;
				}

				if (indexA === indexB) {
					if (a > b) {
						return 1;
					}

					if (a < b) {
						return -1;
					}
				}

				return 0;
			});
		}

		/*
   * highlight the currently highlighted option.
   *
   * @param {Object} target An HTMLElement or event object
   * @param {String} className Name of the highlight class
   */
	}, {
		key: "highlight",
		value: function highlight(target, className) {
			// Check if target is an event object.
			if (target.hasOwnProperty("currentTarget")) {
				target = target.currentTarget;
			}

			target.classList.add(className);
		}

		/**
   * Unhighlight the currently highlighted option.
   *
   * @param {String} className Name of the highlight class
   * @return {Object} The unhighlighted HTMLElement
   */
	}, {
		key: "unhighlight",
		value: function unhighlight(className) {
			var el = undefined;
			var node = _react2["default"].findDOMNode(this);

			if (node) {
				el = node.querySelector("li." + className);

				if (el) {
					el.classList.remove(className);
				}
			}

			return el;
		}
	}, {
		key: "handleClick",
		value: function handleClick(ev) {
			this.props.onChange(this.getOptionData(ev.currentTarget));
		}
	}, {
		key: "highlightPrev",
		value: function highlightPrev() {
			var prev = undefined;
			var current = this.unhighlight(this.props.highlightClass);

			if (current) {
				prev = current.previousElementSibling;
			}

			// If current and prev aren't found, start at the top.
			// Current is not found if there is no list item highlighted.
			// Prev is not found if the first list item is highlighted.
			if (!prev) {
				prev = _react2["default"].findDOMNode(this).lastChild;
			}

			this.highlight(prev, this.props.highlightClass);
		}
	}, {
		key: "highlightNext",
		value: function highlightNext() {
			var next = undefined;
			var current = this.unhighlight(this.props.highlightClass);

			if (current) {
				next = current.nextElementSibling;
			}

			// If current and next aren't found, start at the top.
			// Current is not found if there is no list item highlighted.
			// Next is not found if the last list item is highlighted.
			if (!next) {
				next = _react2["default"].findDOMNode(this).firstChild;
			}

			this.highlight(next, this.props.highlightClass);
		}
	}, {
		key: "select",
		value: function select() {
			var current = this.unhighlight(this.props.highlightClass);

			if (current) {
				this.props.onChange(this.getOptionData(current));
			}
		}

		/**
   * Get the key (id) and value (display name) of an option DOM element.
   *
   * @param {Object} el - Option DOM element
   * @returns {Object}
   */
	}, {
		key: "getOptionData",
		value: function getOptionData(el) {
			return {
				key: el.getAttribute("data-key"),
				value: el.getAttribute("data-value")
			};
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			if (this.props.values.length === 0) {
				return null;
			}

			var values = this.props.sort || this.props.sortRelevance && this.props.query !== "" ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

			var listitems = values.map(function (data, index) {
				var displayValue = data.value;

				if (_this.props.query.length) {
					var re = new RegExp(_this.props.query, "ig");
					displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
				}

				return _react2["default"].createElement("li", {
					className: (0, _classnames2["default"])({
						"hire-forms-option": true,
						selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this.props.value), data)
					}),
					dangerouslySetInnerHTML: { __html: displayValue },
					"data-key": data.key,
					"data-value": data.value,
					key: index,
					onClick: _this.handleClick.bind(_this) });
			});

			return _react2["default"].createElement(
				"ul",
				{
					className: "hire-options" },
				listitems
			);
		}
	}]);

	return Options;
})(_react2["default"].Component);

Options.defaultProps = {
	highlightClass: "highlight",
	query: "",
	sort: false,
	sortRelevance: true,
	value: { key: "", value: "" },
	values: []
};

Options.propTypes = {
	highlightClass: _react2["default"].PropTypes.string,
	onChange: _react2["default"].PropTypes.func.isRequired,
	query: _react2["default"].PropTypes.string,
	sort: _react2["default"].PropTypes.bool,
	sortRelevance: _react2["default"].PropTypes.bool,
	value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
	values: _hireFormsPropTypes.arrayOfKeyValueMaps
};

exports["default"] = Options;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-prop-types":1,"hire-forms-utils":2,"react":"react"}]},{},[3])(3)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"classnames":"classnames","hire-forms-prop-types":8,"hire-forms-utils":9,"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}],9:[function(require,module,exports){

/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValue = castKeyValue;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
  if (!Array.isArray(list) || !list.length) {
    return false;
  }

  return list.every(function (item) {
    return typeof item === "string";
  });
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
  if (map == null) {
    return false;
  }

  return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return a key/value map.
 *
 * @param {Number|String|Boolean|Object} item
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValue(item) {
  return isKeyValueMap(item) ? item : {
    key: item,
    value: item
  };
}

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array|Object} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
  list = castArray(list);

  return list.map(castKeyValue);
}

},{}],10:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsMutableList = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Input = _react2["default"].createClass({
	displayName: "Input",

	propTypes: {
		onChange: _react2["default"].PropTypes.func,
		onInvalid: _react2["default"].PropTypes.func,
		onKeyDown: _react2["default"].PropTypes.func,
		onKeyUp: _react2["default"].PropTypes.func,
		placeholder: _react2["default"].PropTypes.string,
		style: _react2["default"].PropTypes.object,
		valid: _react2["default"].PropTypes.bool,
		validate: _react2["default"].PropTypes.func,
		value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			value: ""
		};
	},

	getInitialState: function getInitialState() {
		return {
			focus: false,
			valid: true
		};
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.value === nextProps.value) {
			return;
		}

		if (nextProps.value === "") {
			if (!this.state.valid) {
				this.setState({ valid: true });
			}

			return;
		}

		if (this.props.validate) {
			var valid = this.props.validate(nextProps.value);

			this.setState({ valid: valid });

			if (!valid && this.props.onInvalid) {
				this.props.onInvalid(nextProps.value);
			}
		}
	},

	shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
		var propsValueChange = this.props.value !== nextProps.value;
		var stateFocusChange = this.state.focus !== nextState.focus;

		return propsValueChange || stateFocusChange;
	},

	toggleFocus: function toggleFocus() {
		this.setState({ focus: !this.state.focus });
	},

	handleKeyDown: function handleKeyDown(ev) {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(ev);
		}
	},

	handleKeyUp: function handleKeyUp(ev) {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(ev);
		}
	},

	handleChange: function handleChange(ev) {
		this.props.onChange(ev.currentTarget.value, ev);
	},

	render: function render() {
		return _react2["default"].createElement("input", {
			className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
			onBlur: this.toggleFocus,
			onChange: this.handleChange,
			onFocus: this.toggleFocus,
			onKeyDown: this.handleKeyDown,
			onKeyUp: this.handleKeyUp,
			placeholder: this.props.placeholder,
			style: this.props.style,
			value: this.props.value });
	}
});

exports["default"] = Input;
module.exports = exports["default"];

},{"classnames":"classnames","react":"react"}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _listItem = _dereq_("./list-item");

var _listItem2 = _interopRequireDefault(_listItem);

var List = (function (_React$Component) {
	function List(props) {
		_classCallCheck(this, List);

		_get(Object.getPrototypeOf(List.prototype), "constructor", this).call(this, props);

		this.state = { editItemIndex: null };
	}

	_inherits(List, _React$Component);

	_createClass(List, [{
		key: "handleListItemClick",
		value: function handleListItemClick(index, ev) {
			this.setState({ editItemIndex: index });

			if (this.props.onClick) {
				this.props.onClick(index, ev);
			}
		}
	}, {
		key: "handleListItemCancel",
		value: function handleListItemCancel() {
			this.setState({ editItemIndex: null });
		}
	}, {
		key: "handleListItemChange",
		value: function handleListItemChange(index, newValue) {
			this.setState({ editItemIndex: null });

			this.props.values[index] = newValue;
			this.props.onChange(this.props.values);
		}
	}, {
		key: "handleListItemRemove",
		value: function handleListItemRemove(index) {
			this.setState({ editItemIndex: null });

			this.props.values.splice(index, 1);
			this.props.onChange(this.props.values);
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var list = this.props.values.map(function (item, index) {
				return _react2["default"].createElement(_listItem2["default"], {
					active: _this.state.editItemIndex === index,
					editable: _this.props.editable,
					key: index,
					onCancel: _this.handleListItemCancel.bind(_this, index),
					onChange: _this.handleListItemChange.bind(_this, index),
					onClick: _this.handleListItemClick.bind(_this, index),
					onRemove: _this.handleListItemRemove.bind(_this, index),
					removable: _this.props.removable,
					value: item });
			});

			list = list.length ? this.props.ordered ? _react2["default"].createElement(
				"ol",
				null,
				list
			) : _react2["default"].createElement(
				"ul",
				null,
				list
			) : _react2["default"].createElement(
				"span",
				{ className: "hire-empty-list" },
				"The list is empty"
			);

			return _react2["default"].createElement(
				"div",
				{ className: "hire-list" },
				list
			);
		}
	}]);

	return List;
})(_react2["default"].Component);

List.defaultProps = {
	editable: false,
	ordered: false,
	removable: true,
	values: []
};

List.propTypes = {
	editable: _react2["default"].PropTypes.bool,
	onChange: _react2["default"].PropTypes.func,
	onClick: _react2["default"].PropTypes.func,
	options: _react2["default"].PropTypes.array,
	ordered: _react2["default"].PropTypes.bool,
	removable: _react2["default"].PropTypes.bool,
	values: _react2["default"].PropTypes.array
};

exports["default"] = List;
module.exports = exports["default"];

},{"./list-item":3,"react":"react"}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

// TODO merge with static-list/list-item?
// TODO move css to default css file

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsInput = _dereq_("hire-forms-input");

var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

var ext = function ext() {
	for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
		styles[_key] = arguments[_key];
	}

	return _extends.apply(undefined, [{}].concat(styles));
};

var liStyle = {
	cursor: "pointer"
};

var inputStyle = {
	width: "90%"
};

var buttonStyle = {
	width: "10%"
};

var spanStyle = {
	width: "90%"
};

var inlineBlockStyle = {
	display: "inline-block",
	boxSizing: "border-box",
	verticalAlign: "top"
};

var ListItem = (function (_React$Component) {
	function ListItem(props) {
		_classCallCheck(this, ListItem);

		_get(Object.getPrototypeOf(ListItem.prototype), "constructor", this).call(this, props);

		this.state = { value: props.value };
	}

	_inherits(ListItem, _React$Component);

	_createClass(ListItem, [{
		key: "componentWillUpdate",
		value: function componentWillUpdate(nextProps, nextState) {
			if (!nextProps.active) {
				nextState.value = nextProps.value;
			}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			if (this.props.active && this.props.editable) {
				var node = _react2["default"].findDOMNode(this.refs.input);
				node.focus();
				node.value = node.value;
			}
		}
	}, {
		key: "onInputChange",
		value: function onInputChange(value) {
			this.setState({ value: value });
		}
	}, {
		key: "onInputKeyDown",
		value: function onInputKeyDown(ev) {
			// if keyCode is "enter" or "tab"
			if (ev.keyCode === 13 || ev.keyCode === 9) {
				if (this.state.value === this.props.value) {
					this.props.onCancel();
				} else {
					this.props.onChange(this.state.value);
				}
			}

			// if keyCode is "escape"
			if (ev.keyCode === 27) {
				this.props.onCancel();
			}
		}
	}, {
		key: "render",
		value: function render() {
			var remove = undefined;

			var input = _react2["default"].createElement(_hireFormsInput2["default"], {
				onChange: this.onInputChange.bind(this),
				onKeyDown: this.onInputKeyDown.bind(this),
				ref: "input",
				style: ext(inlineBlockStyle, inputStyle),
				value: this.state.value });

			var span = _react2["default"].createElement(
				"span",
				{
					className: "value",
					onClick: this.props.onClick.bind(this),
					style: ext(inlineBlockStyle, spanStyle) },
				this.props.value
			);

			var el = this.props.active && this.props.editable ? input : span;

			if (this.props.active && this.props.removable) {
				remove = _react2["default"].createElement(
					"button",
					{
						className: "remove",
						onClick: this.props.onRemove,
						style: ext(inlineBlockStyle, buttonStyle) },
					"x"
				);
			}

			return _react2["default"].createElement(
				"li",
				{
					className: (0, _classnames2["default"])("hire-list-item", { active: this.props.active }),
					style: liStyle },
				el,
				remove
			);
		}
	}]);

	return ListItem;
})(_react2["default"].Component);

ListItem.defaultProps = {
	active: false,
	editable: false,
	removable: true
};

ListItem.propTypes = {
	active: _react2["default"].PropTypes.bool,
	editable: _react2["default"].PropTypes.bool,
	onCancel: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func,
	onClick: _react2["default"].PropTypes.func,
	onRemove: _react2["default"].PropTypes.func,
	removable: _react2["default"].PropTypes.bool,
	value: _react2["default"].PropTypes.string
};

exports["default"] = ListItem;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-input":1,"react":"react"}]},{},[2])(2)
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsMutableList = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Input = _react2["default"].createClass({
	displayName: "Input",

	propTypes: {
		onChange: _react2["default"].PropTypes.func,
		onInvalid: _react2["default"].PropTypes.func,
		onKeyDown: _react2["default"].PropTypes.func,
		onKeyUp: _react2["default"].PropTypes.func,
		placeholder: _react2["default"].PropTypes.string,
		style: _react2["default"].PropTypes.object,
		valid: _react2["default"].PropTypes.bool,
		validate: _react2["default"].PropTypes.func,
		value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			value: ""
		};
	},

	getInitialState: function getInitialState() {
		return {
			focus: false,
			valid: true
		};
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.value === nextProps.value) {
			return;
		}

		if (nextProps.value === "") {
			if (!this.state.valid) {
				this.setState({ valid: true });
			}

			return;
		}

		if (this.props.validate) {
			var valid = this.props.validate(nextProps.value);

			this.setState({ valid: valid });

			if (!valid && this.props.onInvalid) {
				this.props.onInvalid(nextProps.value);
			}
		}
	},

	shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
		var propsValueChange = this.props.value !== nextProps.value;
		var stateFocusChange = this.state.focus !== nextState.focus;

		return propsValueChange || stateFocusChange;
	},

	toggleFocus: function toggleFocus() {
		this.setState({ focus: !this.state.focus });
	},

	handleKeyDown: function handleKeyDown(ev) {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(ev);
		}
	},

	handleKeyUp: function handleKeyUp(ev) {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(ev);
		}
	},

	handleChange: function handleChange(ev) {
		this.props.onChange(ev.currentTarget.value, ev);
	},

	render: function render() {
		return _react2["default"].createElement("input", {
			className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
			onBlur: this.toggleFocus,
			onChange: this.handleChange,
			onFocus: this.toggleFocus,
			onKeyDown: this.handleKeyDown,
			onKeyUp: this.handleKeyUp,
			placeholder: this.props.placeholder,
			style: this.props.style,
			value: this.props.value });
	}
});

exports["default"] = Input;
module.exports = exports["default"];

},{"classnames":"classnames","react":"react"}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _hireFormsList = _dereq_("hire-forms-list");

var _hireFormsList2 = _interopRequireDefault(_hireFormsList);

var _hireFormsInput = _dereq_("hire-forms-input");

var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

var MutableList = (function (_React$Component) {
	function MutableList(props) {
		_classCallCheck(this, MutableList);

		_get(Object.getPrototypeOf(MutableList.prototype), "constructor", this).call(this, props);

		this.state = {
			inputValue: ""
		};
	}

	_inherits(MutableList, _React$Component);

	_createClass(MutableList, [{
		key: "handleInputChange",
		value: function handleInputChange(value) {
			this.setState({ inputValue: value });
		}
	}, {
		key: "handleInputKeyDown",
		value: function handleInputKeyDown(ev) {
			if (ev.keyCode === 13 && this.state.inputValue.length > 0) {
				this.props.values.push(this.state.inputValue);
				this.props.onChange(this.props.values);

				this.setState({ inputValue: "" });
			}
		}
	}, {
		key: "handleChange",
		value: function handleChange(values) {
			this.props.onChange(values);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "hire-forms-mutable-list" },
				_react2["default"].createElement(_hireFormsList2["default"], {
					editable: this.props.editable,
					onChange: this.handleChange.bind(this),
					ordered: this.props.ordered,
					removable: this.props.removable,
					values: this.props.values }),
				_react2["default"].createElement(_hireFormsInput2["default"], {
					onChange: this.handleInputChange.bind(this),
					onKeyDown: this.handleInputKeyDown.bind(this),
					placeholder: this.props.placeholder,
					value: this.state.inputValue })
			);
		}
	}]);

	return MutableList;
})(_react2["default"].Component);

MutableList.defaultProps = {
	values: [],
	ordered: false
};

MutableList.propTypes = {
	editable: _react2["default"].PropTypes.bool,
	onChange: _react2["default"].PropTypes.func.isRequired,
	ordered: _react2["default"].PropTypes.bool,
	placeholder: _react2["default"].PropTypes.string,
	removable: _react2["default"].PropTypes.bool,
	values: _react2["default"].PropTypes.array
};

exports["default"] = MutableList;
module.exports = exports["default"];

},{"hire-forms-input":1,"hire-forms-list":3,"react":"react"}],3:[function(_dereq_,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsMutableList = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Input = _react2["default"].createClass({
	displayName: "Input",

	propTypes: {
		onChange: _react2["default"].PropTypes.func,
		onInvalid: _react2["default"].PropTypes.func,
		onKeyDown: _react2["default"].PropTypes.func,
		onKeyUp: _react2["default"].PropTypes.func,
		placeholder: _react2["default"].PropTypes.string,
		style: _react2["default"].PropTypes.object,
		valid: _react2["default"].PropTypes.bool,
		validate: _react2["default"].PropTypes.func,
		value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			value: ""
		};
	},

	getInitialState: function getInitialState() {
		return {
			focus: false,
			valid: true
		};
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.value === nextProps.value) {
			return;
		}

		if (nextProps.value === "") {
			if (!this.state.valid) {
				this.setState({ valid: true });
			}

			return;
		}

		if (this.props.validate) {
			var valid = this.props.validate(nextProps.value);

			this.setState({ valid: valid });

			if (!valid && this.props.onInvalid) {
				this.props.onInvalid(nextProps.value);
			}
		}
	},

	shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
		var propsValueChange = this.props.value !== nextProps.value;
		var stateFocusChange = this.state.focus !== nextState.focus;

		return propsValueChange || stateFocusChange;
	},

	toggleFocus: function toggleFocus() {
		this.setState({ focus: !this.state.focus });
	},

	handleKeyDown: function handleKeyDown(ev) {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(ev);
		}
	},

	handleKeyUp: function handleKeyUp(ev) {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(ev);
		}
	},

	handleChange: function handleChange(ev) {
		this.props.onChange(ev.currentTarget.value, ev);
	},

	render: function render() {
		return _react2["default"].createElement("input", {
			className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
			onBlur: this.toggleFocus,
			onChange: this.handleChange,
			onFocus: this.toggleFocus,
			onKeyDown: this.handleKeyDown,
			onKeyUp: this.handleKeyUp,
			placeholder: this.props.placeholder,
			style: this.props.style,
			value: this.props.value });
	}
});

exports["default"] = Input;
module.exports = exports["default"];

},{"classnames":"classnames","react":"react"}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _listItem = _dereq_("./list-item");

var _listItem2 = _interopRequireDefault(_listItem);

var List = (function (_React$Component) {
	function List(props) {
		_classCallCheck(this, List);

		_get(Object.getPrototypeOf(List.prototype), "constructor", this).call(this, props);

		this.state = { editItemIndex: null };
	}

	_inherits(List, _React$Component);

	_createClass(List, [{
		key: "handleListItemClick",
		value: function handleListItemClick(index, ev) {
			this.setState({ editItemIndex: index });

			if (this.props.onClick) {
				this.props.onClick(index, ev);
			}
		}
	}, {
		key: "handleListItemCancel",
		value: function handleListItemCancel() {
			this.setState({ editItemIndex: null });
		}
	}, {
		key: "handleListItemChange",
		value: function handleListItemChange(index, newValue) {
			this.setState({ editItemIndex: null });

			this.props.values[index] = newValue;
			this.props.onChange(this.props.values);
		}
	}, {
		key: "handleListItemRemove",
		value: function handleListItemRemove(index) {
			this.setState({ editItemIndex: null });

			this.props.values.splice(index, 1);
			this.props.onChange(this.props.values);
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var list = this.props.values.map(function (item, index) {
				return _react2["default"].createElement(_listItem2["default"], {
					active: _this.state.editItemIndex === index,
					editable: _this.props.editable,
					key: index,
					onCancel: _this.handleListItemCancel.bind(_this, index),
					onChange: _this.handleListItemChange.bind(_this, index),
					onClick: _this.handleListItemClick.bind(_this, index),
					onRemove: _this.handleListItemRemove.bind(_this, index),
					removable: _this.props.removable,
					value: item });
			});

			list = list.length ? this.props.ordered ? _react2["default"].createElement(
				"ol",
				null,
				list
			) : _react2["default"].createElement(
				"ul",
				null,
				list
			) : _react2["default"].createElement(
				"span",
				{ className: "hire-empty-list" },
				"The list is empty"
			);

			return _react2["default"].createElement(
				"div",
				{ className: "hire-list" },
				list
			);
		}
	}]);

	return List;
})(_react2["default"].Component);

List.defaultProps = {
	editable: false,
	ordered: false,
	removable: true,
	values: []
};

List.propTypes = {
	editable: _react2["default"].PropTypes.bool,
	onChange: _react2["default"].PropTypes.func,
	onClick: _react2["default"].PropTypes.func,
	options: _react2["default"].PropTypes.array,
	ordered: _react2["default"].PropTypes.bool,
	removable: _react2["default"].PropTypes.bool,
	values: _react2["default"].PropTypes.array
};

exports["default"] = List;
module.exports = exports["default"];

},{"./list-item":3,"react":"react"}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

// TODO merge with static-list/list-item?
// TODO move css to default css file

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsInput = _dereq_("hire-forms-input");

var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

var ext = function ext() {
	for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
		styles[_key] = arguments[_key];
	}

	return _extends.apply(undefined, [{}].concat(styles));
};

var liStyle = {
	cursor: "pointer"
};

var inputStyle = {
	width: "90%"
};

var buttonStyle = {
	width: "10%"
};

var spanStyle = {
	width: "90%"
};

var inlineBlockStyle = {
	display: "inline-block",
	boxSizing: "border-box",
	verticalAlign: "top"
};

var ListItem = (function (_React$Component) {
	function ListItem(props) {
		_classCallCheck(this, ListItem);

		_get(Object.getPrototypeOf(ListItem.prototype), "constructor", this).call(this, props);

		this.state = { value: props.value };
	}

	_inherits(ListItem, _React$Component);

	_createClass(ListItem, [{
		key: "componentWillUpdate",
		value: function componentWillUpdate(nextProps, nextState) {
			if (!nextProps.active) {
				nextState.value = nextProps.value;
			}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			if (this.props.active && this.props.editable) {
				var node = _react2["default"].findDOMNode(this.refs.input);
				node.focus();
				node.value = node.value;
			}
		}
	}, {
		key: "onInputChange",
		value: function onInputChange(value) {
			this.setState({ value: value });
		}
	}, {
		key: "onInputKeyDown",
		value: function onInputKeyDown(ev) {
			// if keyCode is "enter" or "tab"
			if (ev.keyCode === 13 || ev.keyCode === 9) {
				if (this.state.value === this.props.value) {
					this.props.onCancel();
				} else {
					this.props.onChange(this.state.value);
				}
			}

			// if keyCode is "escape"
			if (ev.keyCode === 27) {
				this.props.onCancel();
			}
		}
	}, {
		key: "render",
		value: function render() {
			var remove = undefined;

			var input = _react2["default"].createElement(_hireFormsInput2["default"], {
				onChange: this.onInputChange.bind(this),
				onKeyDown: this.onInputKeyDown.bind(this),
				ref: "input",
				style: ext(inlineBlockStyle, inputStyle),
				value: this.state.value });

			var span = _react2["default"].createElement(
				"span",
				{
					className: "value",
					onClick: this.props.onClick.bind(this),
					style: ext(inlineBlockStyle, spanStyle) },
				this.props.value
			);

			var el = this.props.active && this.props.editable ? input : span;

			if (this.props.active && this.props.removable) {
				remove = _react2["default"].createElement(
					"button",
					{
						className: "remove",
						onClick: this.props.onRemove,
						style: ext(inlineBlockStyle, buttonStyle) },
					"x"
				);
			}

			return _react2["default"].createElement(
				"li",
				{
					className: (0, _classnames2["default"])("hire-list", { active: this.props.active }),
					style: liStyle },
				el,
				remove
			);
		}
	}]);

	return ListItem;
})(_react2["default"].Component);

ListItem.defaultProps = {
	active: false,
	editable: false,
	removable: true
};

ListItem.propTypes = {
	active: _react2["default"].PropTypes.bool,
	editable: _react2["default"].PropTypes.bool,
	onCancel: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func,
	onClick: _react2["default"].PropTypes.func,
	onRemove: _react2["default"].PropTypes.func,
	removable: _react2["default"].PropTypes.bool,
	value: _react2["default"].PropTypes.string
};

exports["default"] = ListItem;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-input":1,"react":"react"}]},{},[2])(2)
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[2])(2)
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],12:[function(require,module,exports){

/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
	if (!Array.isArray(list) || !list.length) {
		return false;
	}

	return list.every(function (item) {
		return typeof item === "string";
	});
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
	if (map == null) {
		return false;
	}

	return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
	return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
	list = castArray(list);

	return list.map(function (item) {
		return isKeyValueMap(item) ? item : {
			key: item,
			value: item
		};
	});
}

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _immutable = require("immutable");

var _immutable2 = _interopRequireDefault(_immutable);

var _hireFormsMutableList = require("hire-forms-mutable-list");

var _hireFormsMutableList2 = _interopRequireDefault(_hireFormsMutableList);

var _hireFormsList = require("hire-forms-list");

var _hireFormsList2 = _interopRequireDefault(_hireFormsList);

// import Autocomplete from "hire-forms-autocomplete";

var _hireFormsInput = require("hire-forms-input");

var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

var _hireFormsSelect = require("hire-forms-select");

var _hireFormsSelect2 = _interopRequireDefault(_hireFormsSelect);

var _hireFormsSelectList = require("hire-forms-select-list");

var _hireFormsSelectList2 = _interopRequireDefault(_hireFormsSelectList);

var _hireFormsListFilter = require("hire-forms-list-filter");

var _hireFormsListFilter2 = _interopRequireDefault(_hireFormsListFilter);

var _hireFormsAutocomplete = require("hire-forms-autocomplete");

var _hireFormsAutocomplete2 = _interopRequireDefault(_hireFormsAutocomplete);

var _hireFormsAutocompleteList = require("hire-forms-autocomplete-list");

var _hireFormsAutocompleteList2 = _interopRequireDefault(_hireFormsAutocompleteList);

var _hireFormsUtils = require("hire-forms-utils");

var validateNumbersOnly = function validateNumbersOnly(value) {
	var re = /^\d+$/;
	var isValid = re.test(value);

	return {
		isValid: isValid,
		message: isValid ? "" : "Only numbers are allowed."
	};
};

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), "constructor", this).call(this, props);

		this.state = {
			value: "",
			keyvalue: {
				key: "",
				value: ""
			},
			values: [],
			keyvalues: [],
			options: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
		};
	}

	_createClass(App, [{
		key: "handleChange",
		value: function handleChange(value) {
			var state = value instanceof _immutable2["default"].List ? { list: value } : { value: value };

			this.setState(state);
		}
	}, {
		key: "handleValueChange",
		value: function handleValueChange(value) {
			this.setState({ value: value });
		}
	}, {
		key: "handleKeyValueChange",
		value: function handleKeyValueChange(value) {
			this.setState({ keyvalue: value });
		}
	}, {
		key: "handleKeyValueListChange",
		value: function handleKeyValueListChange(list) {
			this.setState({ keyvalues: list });
		}
	}, {
		key: "handleValuesChange",
		value: function handleValuesChange(values) {
			console.log(values);
			this.setState({ values: values });
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			return _react2["default"].createElement(
				"div",
				{ className: "showcase" },
				_react2["default"].createElement(
					"h1",
					null,
					"Hire Forms Showcase"
				),
				_react2["default"].createElement(
					"div",
					{ className: "elements" },
					_react2["default"].createElement(
						"h2",
						null,
						"Autocomplete"
					),
					_react2["default"].createElement(
						"div",
						{ className: "element-type inputs" },
						_react2["default"].createElement(
							"h3",
							null,
							"Default"
						),
						_react2["default"].createElement(
							"div",
							{ className: "input-container" },
							_react2["default"].createElement(_hireFormsAutocomplete2["default"], {
								onChange: this.handleKeyValueChange.bind(this),
								options: (0, _hireFormsUtils.castKeyValueArray)(this.state.options),
								placeholder: "Search...",
								value: this.state.keyvalue })
						)
					),
					_react2["default"].createElement(
						"h2",
						null,
						"Autocomplete List"
					),
					_react2["default"].createElement(
						"div",
						{ className: "element-type inputs" },
						_react2["default"].createElement(
							"h3",
							null,
							"Default"
						),
						_react2["default"].createElement(_hireFormsAutocompleteList2["default"], {
							onChange: this.handleKeyValueListChange.bind(this),
							options: (0, _hireFormsUtils.castKeyValueArray)(this.state.options),
							placeholder: "Search...",
							values: this.state.keyvalues })
					),
					_react2["default"].createElement(
						"h2",
						null,
						"List filter"
					),
					_react2["default"].createElement(
						"div",
						{ className: "element-type" },
						_react2["default"].createElement(_hireFormsListFilter2["default"], {
							onChange: this.handleChange.bind(this),
							options: this.state.options,
							placeholder: "Search list...",
							value: this.state.value })
					),
					_react2["default"].createElement(
						"h2",
						null,
						"Input"
					),
					_react2["default"].createElement(
						"div",
						{ className: "element-type" },
						_react2["default"].createElement(
							"h3",
							null,
							"Default"
						),
						_react2["default"].createElement(_hireFormsInput2["default"], {
							onChange: this.handleChange.bind(this),
							placeholder: "Enter value...",
							value: this.state.value }),
						_react2["default"].createElement(
							"h3",
							null,
							"With validation (numbers only)"
						),
						_react2["default"].createElement(_hireFormsInput2["default"], {
							onChange: this.handleChange.bind(this),
							placeholder: "Enter value...",
							validate: validateNumbersOnly,
							value: this.state.value })
					),
					_react2["default"].createElement(
						"h2",
						null,
						"Select"
					),
					_react2["default"].createElement(
						"div",
						{ className: "element-type" },
						_react2["default"].createElement(
							"h3",
							null,
							"Default"
						),
						_react2["default"].createElement(_hireFormsSelect2["default"], {
							onChange: this.handleChange.bind(this),
							options: this.state.options,
							placeholder: "Select value...",
							sortRelevance: false,
							value: this.state.value }),
						_react2["default"].createElement(
							"h3",
							null,
							"Async"
						),
						_react2["default"].createElement(_hireFormsSelect2["default"], {
							async: function (done) {
								setTimeout(function () {
									return done(_this.state.options);
								}, 2000);
							},
							onChange: this.handleChange.bind(this),
							placeholder: "Select value...",
							sortRelevance: false,
							value: this.state.value })
					),
					_react2["default"].createElement(
						"h2",
						null,
						"Select list"
					),
					_react2["default"].createElement(
						"div",
						{ className: "element-type lists" },
						_react2["default"].createElement(
							"h3",
							null,
							"String"
						),
						_react2["default"].createElement(_hireFormsSelectList2["default"], {
							onChange: this.handleValuesChange.bind(this),
							options: this.state.options,
							values: this.state.values }),
						_react2["default"].createElement(
							"h3",
							null,
							"Key/value"
						),
						_react2["default"].createElement(_hireFormsSelectList2["default"], {
							onChange: this.handleKeyValueListChange.bind(this),
							options: (0, _hireFormsUtils.castKeyValueArray)(this.state.options),
							values: this.state.keyvalues }),
						_react2["default"].createElement(
							"h3",
							null,
							"Async"
						),
						_react2["default"].createElement(_hireFormsSelectList2["default"], {
							async: function (done) {
								setTimeout(function () {
									return done((0, _hireFormsUtils.castKeyValueArray)(_this.state.options));
								}, 1000);
							},
							onChange: this.handleKeyValueListChange.bind(this),
							values: this.state.keyvalues })
					),
					_react2["default"].createElement(
						"h2",
						null,
						"List"
					),
					_react2["default"].createElement(
						"div",
						{ className: "element-type lists" },
						_react2["default"].createElement(
							"h3",
							null,
							"Default"
						),
						_react2["default"].createElement(_hireFormsList2["default"], { values: this.state.options }),
						_react2["default"].createElement(
							"h3",
							null,
							"Ordered"
						),
						_react2["default"].createElement(_hireFormsList2["default"], {
							ordered: true,
							values: this.state.options }),
						_react2["default"].createElement(
							"h3",
							null,
							"Editable"
						),
						_react2["default"].createElement(_hireFormsList2["default"], {
							editable: true,
							onChange: this.handleChange.bind(this),
							values: this.state.options })
					),
					_react2["default"].createElement(
						"h2",
						null,
						"Mutable list"
					),
					_react2["default"].createElement(
						"div",
						{ className: "element-type lists" },
						_react2["default"].createElement(
							"h3",
							null,
							"Default"
						),
						_react2["default"].createElement(_hireFormsMutableList2["default"], {
							onChange: this.handleChange.bind(this),
							placeholder: "Type something to add to the list...",
							values: this.state.values }),
						_react2["default"].createElement(
							"h3",
							null,
							"Ordered"
						),
						_react2["default"].createElement(_hireFormsMutableList2["default"], {
							onChange: this.handleChange.bind(this),
							ordered: true,
							placeholder: "Type something to add to the list...",
							values: this.state.values })
					)
				)
			);
		}
	}]);

	return App;
})(_react2["default"].Component);

exports["default"] = App;
module.exports = exports["default"];
/*
<ol className="menu">
	<li>Input</li>
	<li>Select</li>
	<li>Select list</li>
	<li>List</li>
	<li>Mutable list</li>
</ol>
*/ /*
   <h3>Async</h3>
   <div className="input-container">
   	<Autocomplete
   		async={this}
   		onChange={this.handleValueChange.bind(this)}
   		placeholder="Start typing for async suggestions..."
   		value={this.state.value} />
   </div>
   */

},{"hire-forms-autocomplete":2,"hire-forms-autocomplete-list":1,"hire-forms-input":3,"hire-forms-list":10,"hire-forms-list-filter":4,"hire-forms-mutable-list":11,"hire-forms-select":6,"hire-forms-select-list":5,"hire-forms-utils":12,"immutable":"immutable","react":"react"}],14:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

var routes = _react2["default"].createElement(_reactRouter.Route, { handler: _app2["default"], name: "/", path: "/" });

document.addEventListener("DOMContentLoaded", function () {
	return _reactRouter2["default"].run(routes, _reactRouter2["default"].HistoryLocation, function (Handler) {
		return _react2["default"].render(_react2["default"].createElement(Handler, null), document.body);
	});
});

},{"./app":13,"react":"react","react-router":"react-router"}]},{},[14]);
