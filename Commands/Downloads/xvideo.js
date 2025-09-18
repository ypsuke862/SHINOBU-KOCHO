
import { xvideosdl } from '@bochilteam/scraper'

let handlerXvideo = async (m, { conn, text }) => {
  if (!text) return m.reply('Por favor envía un link o nombre para buscar.')

  try {
    // Obtener datos con el scraper
    const data = await xvideosdl(text)

    if (!data || data.length === 0) {
      return m.reply('No se encontró ningún video con ese enlace o búsqueda.')
    }

    // Usamos el primer resultado (data[0])
    const video = data[0]

    let infoMsg = `≻── Ｘｖｉｄｅｏ  ──≺
︶꒷꒥꒷‧₊˚૮꒰˵•ᵜ•˵꒱ა‧₊˚꒷︶
︴ꨄ] ɴᴀᴍᴇ: video.uploader
︴ꨄ] ᴅᴇsᴄ:{video.title}
︴ꨄ] ᴜʀʟ: video.url`

    await conn.sendMessage(m.chat,  text: infoMsg ,  quoted: m )

    // Enviar video (la url del video está en video.video[0].url o video.video[0].url_video)
    await conn.sendMessage(m.chat, 
      video:  url: video.video[0].url ,
      caption: `Video de{video.uploader}`
    }, { quoted: m })

  } catch (error) {
    m.reply('Error al obtener video: ' + error.message)
  }
}

handlerXvideo.command = ['xvideo']
handlerXvideo.help = ['xvideo <link|nombre>']
handlerXvideo.tags = ['downloader']
export { handlerXvideo }