import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) return m.reply(`_Ingresa la Ruta y el nombre del Archivo junto al comando._`)
try {
if (!m.quoted.text) return m.reply(`_Responder al mensaje._`)
let path = `${text}`
await fs.writeFileSync(path, m.quoted.text)
m.reply(`_Guardado en *${path}*._`)
} catch {
await m.reply(`_Responder al mensaje._`)
}}
handler.command = ["savefile", "savejs", "savecmd"]
handler.tags = ['owner']
handler.help = ['savefile']
handler.rowner = true
export default handler