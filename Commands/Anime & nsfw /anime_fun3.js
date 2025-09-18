let handler = async (m, { conn, text, usedPrefix, command }) => {
  const from = m.chat
  const user = m.sender
  const mention = m.mentionedJid && m.mentionedJid[0]
  const userName = conn.getName(user)
  const mentionName = mention ? conn.getName(mention) : null

  // Función para obtener un gif aleatorio de la categoría
  function getRandomVideo(cat) {
    let videos = global.db.data.videos?.[cat] || []
    if (videos.length === 0) return null
    return videos[Math.floor(Math.random() * videos.length)]
  }

  if (!mention) {
    if (command === 'seduce') {
      await conn.reply(from, `*userName* está seduciendo sin decirle a nadie. (¬‿¬)`, m)
    
    if (command === 'run') 
      await conn.reply(from, `*{userName}* está corriendo sin destino fijo. (≧▽≦)`, m)
    }
  } else {
    if (command === 'seduce') {
      const video = getRandomVideo('seduce')
      if (video) await conn.sendMessage(from, { video: { url: video.url }, caption: `*userName* está seduciendo a *{mentionName}*. (⌒‿⌒)` }, { quoted: m })
else await conn.reply(from, `*userName* está seduciendo a *{mentionName}*. (⌒‿⌒)`, m)
    }
    if (command === 'run') {
      const video = getRandomVideo('run')
      if (video) await conn.sendMessage(from, { video: { url: video.url }, caption: `*userName* está corriendo con *{mentionName}*. (≧▽≦)` }, { quoted: m })
      else await conn.reply(from, `*userName* está corriendo con *{mentionName}*. (≧▽≦)`, m)
    }
  }
}

handler.help = ['seduce', 'run']
handler.tags = ['anime']
handler.command = /^(seduce|run)$/i

export default handler