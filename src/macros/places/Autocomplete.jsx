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

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[SEARCH_BOX]"
}`

/**
 * A wrapper around `google.maps.places.Autocomplete` without the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Autocomplete
 */
class Autocomplete extends React.PureComponent {
  static displayName = "Autocomplete"

  static propTypes = {
    __jscodeshiftPlaceholder__: null,
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
}

export default Autocomplete

const eventMap = {}

const updaterMap = {}
