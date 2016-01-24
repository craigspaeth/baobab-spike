import Baobab from 'baobab'
import socket from '../client/socket'

let tree = new Baobab({ chats: [] })
let chats = tree.select('chats')

export { tree, chats }

if (typeof window != 'undefined') {
  socket.on('NEW_CHATS', (chats) => chats.set(chats))
}
