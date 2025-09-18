import fs from 'fs'

const VIDEOS_FILE = './gif_videos.json'

let handler = async (m,  conn, sender ) => 
  const id = sender.split('@')[0]
  const isOwner = global.owner.some(([num]) => id === num.split('@')[0])
  if (!isOwner) 
    return m.reply('No tienes permiso para usar este comando')
  

  if (!fs.existsSync(VIDEOS_FILE)) 
    return m.reply('✿ No hay videos/gifs agregados.')
  

  const data = JSON.parse(fs.readFileSync(VIDEOS_FILE, 'utf-8'))

  let mensaje = '✿ 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙂𝙞𝙛 ✿'
  for (const categoria in data) 
    mensaje += `🦋 *{categoria}*\n`
    data[categoria].forEach(item => {
      mensaje += `🦋 *item.hash*`
    )
    mensaje += ''
  

  m.reply(mensaje.trim())


handler.help = ['videolist']
handler.tags = ['owner']
handler.command = /^videolist/i
handler.rowner = false

export default handler