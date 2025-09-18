import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) return m.react('✖️')
    if (conn.user.jid == conn.user.jid) {
    await m.reply('_Restart bot..._')
    process.send('reset')
  } else return m.react('✖️')
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 

handler.rowner = true

export default handler