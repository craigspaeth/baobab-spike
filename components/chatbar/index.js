import React from 'react'
import { tree, chats } from 'tree'

let { input, div } = React.DOM

class Chatbar extends React.Component {

  componentDidUpdate() {
    if (tree.get().closedAuthModal) this.refs.input.focus()
  }

  onKeyUp(e) {
    if (e.which != 13) return
    chats.push({
      message: e.target.value,
      from: tree.get().currentUserName
    })
    this.refs.input.focus()
  }

  onChange(e) {
    tree.set('chatInputValue', this.refs.input.value)
  }

  render () {
    return (
      div({ style: Object.assign({}, styles.divinput, styles.div) },
        input({
          style: Object.assign({}, styles.divinput, styles.input),
          placeholder: 'Type in a chat',
          onChange: this.onChange.bind(this),
          onKeyUp: this.onKeyUp.bind(this),
          value: tree.get().chatInputValue,
          ref: 'input' }))
    )
  }
}

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

export default (props) => React.createElement(Chatbar, props)
