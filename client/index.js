import 'socket.io-client'
import Home from 'components/home'
import { render } from 'react-dom'
import { tree, chats } from 'tree'
import { data as sd } from 'sharify'
import socket from 'client/socket'
import _ from 'lodash'

localStorage.debug = sd.DEBUG
render(Home({ title: 'Hi' }), document.getElementById('main'))

socket.on('*', (event, data) => chats.push(data))
