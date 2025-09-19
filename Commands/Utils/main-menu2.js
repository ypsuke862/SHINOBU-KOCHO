// Evento de mensaje
conn.ev.on('messages.upsert', async (m) => {
  try {
    const msg = m.messages[0];
    if (!msg.message) return;
    const from = msg.key.remoteJid;
    const type = Object.keys(msg.message)[0];
    const body =
      type === 'conversation'
        ? msg.message.conversation
        : type === 'imageMessage'
        ? msg.message.imageMessage.caption
        : type === 'videoMessage'
        ? msg.message.videoMessage.caption
        : type === 'extendedTextMessage'
        ? msg.message.extendedTextMessage.text
        : '';
    const command = body?.toLowerCase().trim() || '';

    // Menú 2
    if (command === '#menu2') {
      let menu2 = `
һ᥆ᥣᥲ! s᥆ᥡ *${botname}*  
ᥲ𝗊ᥙí 𝗍іᥱᥒᥱs ᥣᥲ ᥣіs𝗍ᥲ ძᥱ ᥴ᥆mᥲᥒძ᥆s
╭┈ ↷
│✐꒷ ᴄᴀɴᴀʟ ᴏғɪᴄɪᴀʟ» 
│https://whatsapp.com/channel/0029VbBWiQnDjiOZI4PeC20s
│✐꒷ ɢɪᴛʜᴜʙ» https://github.com/kobDanonino/SHINOBU-KOCHO
│© ᴘᴏᴡᴇʀ ʙʏ ᴅᴀɴɪ ᴠ𝟐
╰─────────────────

»  ⊹˚• \`Bot Info\` •˚⊹
ᰔᩚ *#help*  
_muestra la lista de comandos disponibles_

ᰔᩚ *#botinfo*  
_información básica del bot_

»  ⊹˚• \`Bots\` •˚⊹
ᰔᩚ *#setname*  
_cambia el nombre del bot_

ᰔᩚ *#setbanner*  
_define un banner personalizado_

ᰔᩚ *#setmoneda*  
_establece la moneda del bot (${moneda})_

ᰔᩚ *#setbotowner*  
_asigna al dueño principal del bot_

ᰔᩚ *#serbot*  
_conecta otro número como bot secundario_

ᰔᩚ *#code*  
_envía código QR para conectar_

ᰔᩚ *#bots*  
_lista los sub-bots conectados_

ᰔᩚ *#codeprem*  
_envía QR premium de conexión_

ᰔᩚ *#join*  
_el bot se une a un grupo por enlace_

»  ⊹˚• \`Group\` •˚⊹
ᰔᩚ *#promote*  
_da admin a un usuario_

ᰔᩚ *#demote*  
_quita admin a un usuario_

ᰔᩚ *#tag*  
_menciona a todos los miembros del grupo_

ᰔᩚ *#invite*  
_envía invitación al grupo_

ᰔᩚ *#kick*  
_elimina a un miembro del grupo_

ᰔᩚ *#delete*  
_borra un mensaje_

»  ⊹˚• \`Diversión\` •˚⊹
ᰔᩚ *#love*  
_calcula compatibilidad amorosa_

ᰔᩚ *#gay*  
_calcula porcentaje gay_

ᰔᩚ *#dance*  
_envía gif random de baile_

ᰔᩚ *#wallpaper*  
_envía wallpapers random_

ᰔᩚ *#image*  
_envía imágenes al azar_

ᰔᩚ *#neko*  
_imagen de neko_

ᰔᩚ *#shinobu*  
_imagen de Shinobu_

ᰔᩚ *#hentai*  
_contenido +18 random_

ᰔᩚ *#rule34*  
_busca imágenes de rule34_

ᰔᩚ *#follar*  
_juego de rol erótico_

ᰔᩚ *#top*  
_top random (ej: top pendejos)_

»  ⊹˚• \`Owner\` •˚⊹
ᰔᩚ *#setppbot*  
_cambia la foto del bot_

ᰔᩚ *#setpp*  
_cambia tu foto de perfil_

ᰔᩚ *#response*  
_crea respuestas automáticas_

ᰔᩚ *#afk*  
_activa modo ausente_

ᰔᩚ *#withmedia*  
_responde usando multimedia_

ᰔᩚ *#audio*  
_convierte video en audio_

ᰔᩚ *#video*  
_convierte audio en video_

ᰔᩚ *#getname*  
_obtiene el nombre de un usuario_

ᰔᩚ *#getprofile*  
_muestra foto de perfil de alguien_

ᰔᩚ *#igstalk*  
_busca información de un usuario de IG_

ᰔᩚ *#otag*  
_menciona con foto o sticker_

»  ⊹˚• \`Redes / Descargas\` •˚⊹
ᰔᩚ *#youtube*  
_descarga videos de YouTube_

ᰔᩚ *#ytsearch*  
_busca en YouTube_

ᰔᩚ *#play*  
_descarga música por nombre_

ᰔᩚ *#play2*  
_descarga video por nombre_

ᰔᩚ *#spotify*  
_descarga música de Spotify_

ᰔᩚ *#tiktok*  
_descarga videos de TikTok_

ᰔᩚ *#likee*  
_descarga videos de Likee_

ᰔᩚ *#ig*  
_descarga publicaciones de Instagram_

ᰔᩚ *#fb*  
_descarga videos de Facebook_

ᰔᩚ *#mediafire*  
_descarga archivos de Mediafire_

ᰔᩚ *#pinterest*  
_busca imágenes en Pinterest_

ᰔᩚ *#apk*  
_descarga archivos APK_

»  ⊹˚• \`Comandos Anime\` •˚⊹
ᰔᩚ *#cum*  
_gif de cumshot_

ᰔᩚ *#anal*  
_gif de sexo anal_

ᰔᩚ *#bj*  
_gif de blowjob_

ᰔᩚ *#angry*  
_gif de enojo_

ᰔᩚ *#eat*  
_gif de comer_

ᰔᩚ *#love*  
_gif de amor_

ᰔᩚ *#slap*  
_gif de cachetada_

ᰔᩚ *#punch*  
_gif de golpe_

ᰔᩚ *#run*  
_gif de correr_

ᰔᩚ *#seduce*  
_gif de seducción_

ᰔᩚ *#kiss*  
_gif de beso_

ᰔᩚ *#kisscheek*  
_gif de beso en la mejilla_

»  ⊹˚• \`Otros\` •˚⊹
ᰔᩚ *#addmeta*  
_agrega un metadato al bot_

ᰔᩚ *#hd*  
_mejora calidad de imagen_

ᰔᩚ *#afk*  
_modo ausente (también accesible aquí)_
      `;
      await conn.sendMessage(from, { text: menu2 }, { quoted: msg });
    }
  } catch (e) {
    console.log(e);
  }
});