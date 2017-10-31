/** @jsx h */

import React from 'react'
import { TextInput } from 'react-native'
import h from '../../helpers/h'

export const schema = {
  nodes: {
    code: (props) => {
      return (
          React.createElement(TextInput, { ...props.attributes }, props.children)
      )
    }
  }
}

export const state = (
  <state>
    <document>
      <code>
        word
      </code>
      <code>
        word
      </code>
      <code>
        word
      </code>
    </document>
  </state>
)
