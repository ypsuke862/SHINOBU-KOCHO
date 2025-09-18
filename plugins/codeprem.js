import fs from 'fs'

const DATA_FILE = './prem_tokens.json'
const DURACION_DIAS = 30

let handler = async (m, { text, isOwner }) => {
  if (!text) return m.reply('⚠️ Debes enviar un token.\nEjemplo: #codeprem 12C8tÑ7c')
  
  if (!isOwner) return m.reply('❌ Solo el owner puede generar códigos.')

  const token = text.trim()

  // Solo permitir tokens de 8 caracteres (puedes ajustar si quieres)
  if (token.length !== 8) {
    return m.reply('⚠️ Token inválido. Debe tener 8 caracteres.')
  }

  let data = {}

  try {
    if (fs.existsSync(DATA_FILE)) {
      data = JSON.parse(fs.readFileSync(DATA_FILE))
    }
  } catch (e) {
    console.error('Error leyendo archivo de tokens:', e)
    data = {}
  }

  if (!data[token]) {
    return m.reply('❌ El token no existe o no es válido. verifica que los dígitos sean los correctos.')
  }

  const diasPasados = (Date.now() - data[token].creado) / (1000 * 60 * 60 * 24)
  if (diasPasados > DURACION_DIAS) {
return m.reply('```El token que fue ingresado ya no es válido. verifica que los dígitos sean los correctos.```')
  }

  // Generar código aleatorio de 8 dígitos hex (puedes ajustar el formato)
  const nuevoCodigo = [...Array(8)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('')
    .toUpperCase()

  if (!data[token].codigos) data[token].codigos = []

  data[token].codigos.push({
    code: nuevoCodigo,
    generado: Date.now()
  })

  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
  } catch (e) {
    console.error('Error guardando archivo de tokens:', e)
    return m.reply('❌ Error interno guardando el código. Intenta de nuevo.')
  }

  m.reply(`✅ Código generado correctamente:\n\n*${nuevoCodigo}*\n\nEste código sirve para vincular tu bot premium.\nEl token es válido por 30 días desde su primer uso.`)
}

handler.help = ['codeprem <token>']
handler.tags = ['code']
handler.command = ['codeprem']
handler.rowner = true

export default handler