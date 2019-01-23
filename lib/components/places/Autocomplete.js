"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _defineProperty2 = require("babel-runtime/helpers/defineProperty")

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of")

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck")

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require("babel-runtime/helpers/createClass")

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn")

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require("babel-runtime/helpers/inherits")

var _inherits3 = _interopRequireDefault(_inherits2)

var _invariant = require("invariant")

var _invariant2 = _interopRequireDefault(_invariant)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _reactDom = require("react-dom")

var _reactDom2 = _interopRequireDefault(_reactDom)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = require("../../utils/MapChildHelper")

var _constants = require("../../constants")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.places.Autocomplete` without the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Autocomplete
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var Autocomplete = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Autocomplete, _React$PureComponent)

  function Autocomplete() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, Autocomplete)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          Autocomplete.__proto__ ||
          (0, _getPrototypeOf2.default)(Autocomplete)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = (0, _defineProperty3.default)(
        {},
        _constants.SEARCH_BOX,
        null
      )),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(Autocomplete, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _invariant2.default)(
          google.maps.places,
          'Did you include "libraries=places" in the URL?'
        )
        var element = _reactDom2.default.findDOMNode(this)
        /*
       * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Autocomplete
       */
        var searchBox = new google.maps.places.Autocomplete(
          element.querySelector("input") || element
        )
        ;(0, _MapChildHelper.construct)(
          Autocomplete.propTypes,
          updaterMap,
          this.props,
          searchBox
        )

        ;(0, _MapChildHelper.componentDidMount)(this, searchBox, eventMap)
        this.setState(
          (0, _defineProperty3.default)({}, _constants.SEARCH_BOX, searchBox)
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.SEARCH_BOX],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.Children.only(this.props.children)
      },

      /**
       * Returns the bounds to which predictions are biased.
       * @type LatLngBounds|undefined
       * @public
       */
    },
    {
      key: "getBounds",
      value: function getBounds() {
        return this.state[_constants.SEARCH_BOX].getBounds()
      },

      /**
       * Returns the fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see `[PlaceResult](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult)`.
       * @type Array<string>|undefined
       * @public
       */
    },
    {
      key: "getFields",
      value: function getFields() {
        return this.state[_constants.SEARCH_BOX].getFields()
      },

      /**
       * Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the `name` property set to the current value of the input field.
       * @type PlaceResult
       * @public
       */
    },
    {
      key: "getPlace",
      value: function getPlace() {
        return this.state[_constants.SEARCH_BOX].getPlace()
      },
    },
  ])
  return Autocomplete
})(_react2.default.PureComponent)

Autocomplete.displayName = "StandaloneAutocomplete"
Autocomplete.propTypes = {
  /**
   * @type LatLngBounds|LatLngBoundsLiteral|undefined
   */
  defaultBounds: _propTypes2.default.any,

  /**
   * @type ComponentRestrictions
   */
  defaultComponentRestrictions: _propTypes2.default.any,

  /**
   * @type Array<string>|undefined
   */
  defaultFields: _propTypes2.default.any,

  /**
   * @type AutocompleteOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type Array<string>
   */
  defaultTypes: _propTypes2.default.any,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral|undefined
   */
  bounds: _propTypes2.default.any,

  /**
   * @type ComponentRestrictions
   */
  componentRestrictions: _propTypes2.default.any,

  /**
   * @type Array<string>|undefined
   */
  fields: _propTypes2.default.any,

  /**
   * @type AutocompleteOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type Array<string>
   */
  types: _propTypes2.default.any,

  /**
   * function
   */
  onPlaceChanged: _propTypes2.default.func,
}
exports.default = Autocomplete

var eventMap = {
  onPlaceChanged: "place_changed",
}

var updaterMap = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds)
  },
  componentRestrictions: function componentRestrictions(
    instance,
    _componentRestrictions
  ) {
    instance.setComponentRestrictions(_componentRestrictions)
  },
  fields: function fields(instance, _fields) {
    instance.setFields(_fields)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  types: function types(instance, _types) {
    instance.setTypes(_types)
  },
}
