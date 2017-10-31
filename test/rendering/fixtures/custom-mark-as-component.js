/** @jsx h */

import h from '../../helpers/h'
import React from 'react'
import { TextInput } from 'react-native'

class Bold extends React.Component {

  render() {
    return (
        React.createElement(TextInput, {style: {fontWeight: 'bold'}, ...this.props.attributes }, this.props.children)
    )
  }

}

export const schema = {
  marks: {
    bold: Bold,
  }
}

export const state = (
  <state>
    <document>
      <paragraph>
        one<b>two</b>three
      </paragraph>
    </document>
  </state>
)
