/** @jsx h */

import h from '../../helpers/h'
import React from 'react'
import { TextInput } from 'react-native'

export const schema = {
  marks: {
    bold: (props) => {
      return (
        React.createElement(TextInput, {style: {fontWeight: 'bold'}, ...props.attributes }, props.children)
      )
    }
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