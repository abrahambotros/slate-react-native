
import React from 'react';
import findDeepestNode from './find-deepest-node'

/**
 * Get caret position from selection point.
 *
 * @param {String} key
 * @param {Number} offset
 * @param {State} state
 * @param {Editor} editor
 * @param {Element} el
 * @return {Object}
 */

function getCaretPosition(key, offset, state, editor) {
  const { document } = state
  const text = document.getDescendant(key)
  const schema = editor.getSchema()
  const decorators = document.getDescendantDecorators(key, schema)
  const ranges = text.getRanges(decorators)

  let a = 0
  let index
  let off

  ranges.forEach((range, i) => {
    const { length } = range.text
    a += length
    if (a < offset) return
    index = i
    off = offset - (a - length)
    return false
  })

  const Children = React.Children.toArray(editor.props.children);
  const input = Children.find(child => child.props.key = index);
  const node = findDeepestNode(input)
  return { node, offset: off }
}

/**
 * Export.
 *
 * @type {Function}
 */

export default getCaretPosition
