import { tmpdir } from 'os'
import path from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'

let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {
    if (!text) return conn.reply(m.chat, `_Ingresa la ruta y el nombre del archivo que deseas eliminar._`, m, rcanal)
    
    const file = text.trim()
    if (!existsSync(file)) return conn.reply(m.chat, `[❎] A_rchivo no encontrado._`, m, )
    
    unlinkSync(file)
    conn.reply(m.chat, `[✅] _El archivo *${file}* ha sido eliminado con éxito._`, m, )
}
handler.tags = ['owner']
handler.help = ['deletefile']
handler.command = /^(deletefile|df)$/i
handler.rowner = true

export default handler