import React from 'react'
import { tree, chats } from 'tree'
import functional from 'react-functional'

let { input, div } = React.DOM

let componentDidUpdate = (_, __, refs) => {
  if (tree.get().closedAuthModal) refs.input.focus()
}

let onKeyUp = (refs, e) => {
  if (e.which != 13) return
  chats.push({
    message: e.target.value,
    from: tree.get().currentUserName
  })
  refs.input.focus()
}

let onChange = (refs, e) => {
  tree.set('chatInputValue', refs.input.value)
}

let render = (props, cmp) => (
  div({ style: Object.assign({}, styles.divinput, styles.div) },
    input({
      style: Object.assign({}, styles.divinput, styles.input),
      placeholder: 'Type in a chat',
      onChange: onChange.bind(null, cmp.refs),
      onKeyUp: onKeyUp.bind(null, cmp.refs),
      value: tree.get().chatInputValue,
      ref: 'input' }))
)

let styles = {
  divinput: {
    height: '50px'
  },
  div: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '10px'
  },
  input: {
    width: 'calc(100% - 20px)'
  }
}

export default functional({ componentDidUpdate, onKeyUp, render, onChange })
