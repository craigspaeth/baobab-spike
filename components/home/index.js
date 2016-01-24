import React from 'react'
import Chatbar from 'components/chatbar'
import AuthModal from 'components/auth-modal'
import { tree } from 'tree'

let { div, li, ul } = React.DOM

class Home extends React.Component {

  constructor() {
    super()
    this.state = tree.get()
  }

  componentDidMount() {
    tree.on('update', () => this.setState(tree.get()))
  }

  render () {
    return (
    div({},
      AuthModal({}),
      ul({}, this.state.chats.map((chat, i) => {
        return li({ key: i }, chat.name + ': ' + chat.message)
      })),
      Chatbar({}))
    )
  }
}

export default (props) => React.createElement(Home, props)
