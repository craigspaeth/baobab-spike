import React from 'react'
import { tree, chats } from 'tree'
import functional from 'react-functional'

let { div, input } = React.DOM

let componentDidMount = (refs) => {
  refs.input.focus()
}

let submitName = (refs, e) => {
  if (e.which != 13) return
  tree.set('currentUserName', e.target.value)
  tree.set('closedAuthModal', true)
  refs.input
}

let render = (props, refs) => {
  if (tree.get().closedAuthModal) {
    return div({})
  } else {
    return (
    div({ style: styles.background },
      div({ style: styles.modal },
        input({
          placeholder: 'Enter your name',
          onKeyUp: submitName.bind(null, cmp.refs),
          ref: 'input'
        })))
    )
  }
}

let styles = {
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    zIndex: '2',
    textAlign: 'center'
  },
  modal: {
    background: 'white',
    width: `300px`,
    height: '200px',
    display: 'inline-block',
    marginTop: '50px'
  }
}

export default functional({ componentDidMount, submitName, render })
