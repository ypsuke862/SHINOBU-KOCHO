import fs from 'fs'
let handler = async (m, { text, usedPrefix }) => {
	if (!text) m.reply(`Formato:\n ${usedPrefix}makeplug <name>|<code>`);
	let name = text.split('|')[0]
	let code = text.split('|')[1]
	if (!name) return m.reply(`Formato:\n ${usedPrefix}makeplug <name>|<code>`);
	if (!code) return m.reply(`Formato:\n ${usedPrefix}makeplug <name>|<code>`);

	fs.writeFileSync(`./plugins/${name}.js`, code)
	m.reply(`[⚠️] _Se ha creado el plugin ${name}.js, uselo con el comando: ${usedPrefix}${name}_`)
}
handler.help = ['makeplug <name> <code>']
handler.tags = ['main']
handler.command = /^makeplug$/i 
handler.register = true
handler.rowner = true
export default handler