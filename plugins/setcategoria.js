import fs from 'fs'

const VIDEOS_FILE = './gif_videos.json'

let handler = async (m, { conn, sender, text }) => {
  const id = sender.split('@')[0]
  const isOwner = global.owner.some(([num]) => id === num.split('@')[0])
  if (!isOwner) {
    return m.reply('No tienes permiso para usar este comando')
  }

  if (!text) {
return m.reply('✿ Debes poner una categoría para agregar a la db')
  }

  const categoria = text.trim()

  let data = {}
  if (fs.existsSync(VIDEOS_FILE)) {
    data = JSON.parse(fs.readFileSync(VIDEOS_FILE, 'utf-8'))
  }

  if (data[categoria]) {
    return m.reply('✿ está categoría ya está agregada a mi base de datos')
  }

  data[categoria] = []

  fs.writeFileSync(VIDEOS_FILE, JSON.stringify(data, null, 2))

  m.reply(`✿ categoría \`categoriaàgregada exitosamente`)


handler.help = ['setcategoria <nombre>']
handler.tags = ['owner']
handler.command = /^setcategoria/i
handler.rowner = false

export default handler