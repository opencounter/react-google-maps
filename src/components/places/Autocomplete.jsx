/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import invariant from "invariant"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { SEARCH_BOX } from "../../constants"

/**
 * A wrapper around `google.maps.places.Autocomplete` without the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Autocomplete
 */
class Autocomplete extends React.PureComponent {
  static displayName = "StandaloneAutocomplete"

  static propTypes = {
    /**
     * @type LatLngBounds|LatLngBoundsLiteral|undefined
     */
    defaultBounds: PropTypes.any,

    /**
     * @type ComponentRestrictions
     */
    defaultComponentRestrictions: PropTypes.any,

    /**
     * @type Array<string>|undefined
     */
    defaultFields: PropTypes.any,

    /**
     * @type AutocompleteOptions
     */
    defaultOptions: PropTypes.any,

    /**
     * @type Array<string>
     */
    defaultTypes: PropTypes.any,

    /**
     * @type LatLngBounds|LatLngBoundsLiteral|undefined
     */
    bounds: PropTypes.any,

    /**
     * @type ComponentRestrictions
     */
    componentRestrictions: PropTypes.any,

    /**
     * @type Array<string>|undefined
     */
    fields: PropTypes.any,

    /**
     * @type AutocompleteOptions
     */
    options: PropTypes.any,

    /**
     * @type Array<string>
     */
    types: PropTypes.any,

    /**
     * function
     */
    onPlaceChanged: PropTypes.func,
  }

  state = {
    [SEARCH_BOX]: null,
  }

  componentDidMount() {
    invariant(
      google.maps.places,
      `Did you include "libraries=places" in the URL?`
    )
    const element = ReactDOM.findDOMNode(this)
    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Autocomplete
     */
    const searchBox = new google.maps.places.Autocomplete(
      element.querySelector("input") || element
    )
    construct(Autocomplete.propTypes, updaterMap, this.props, searchBox)

    componentDidMount(this, searchBox, eventMap)
    this.setState({
      [SEARCH_BOX]: searchBox,
    })
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[SEARCH_BOX],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
  }

  render() {
    return React.Children.only(this.props.children)
  }

  /**
   * Returns the bounds to which predictions are biased.
   * @type LatLngBounds|undefined
   * @public
   */
  getBounds() {
    return this.state[SEARCH_BOX].getBounds()
  }

  /**
   * Returns the fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see `[PlaceResult](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult)`.
   * @type Array<string>|undefined
   * @public
   */
  getFields() {
    return this.state[SEARCH_BOX].getFields()
  }

  /**
   * Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the `name` property set to the current value of the input field.
   * @type PlaceResult
   * @public
   */
  getPlace() {
    return this.state[SEARCH_BOX].getPlace()
  }
}

export default Autocomplete

const eventMap = {
  onPlaceChanged: "place_changed",
}

const updaterMap = {
  bounds(instance, bounds) {
    instance.setBounds(bounds)
  },

  componentRestrictions(instance, componentRestrictions) {
    instance.setComponentRestrictions(componentRestrictions)
  },

  fields(instance, fields) {
    instance.setFields(fields)
  },

  options(instance, options) {
    instance.setOptions(options)
  },

  types(instance, types) {
    instance.setTypes(types)
  },
}
