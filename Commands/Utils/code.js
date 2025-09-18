import fs from 'fs'

const CODES_FILE = './subbots.json'

function generarCodigo() {
  return Math.floor(10000000 + Math.random() * 90000000).toString()
}

let handler = async (m, { conn }) => {
  const id = m.sender
  const codigo = generarCodigo()
  const tiempoExpiracion = 60 * 1000 // 60 segundos

  let subbots = fs.existsSync(CODES_FILE)
    ? JSON.parse(fs.readFileSync(CODES_FILE))
    : {}

  subbots[codigo] = {
    owner: id,
    timestamp: Date.now(),
    active: false
  }

  fs.writeFileSync(CODES_FILE, JSON.stringify(subbots, null, 2))

  await m.reply(
`–  S E R B O T  -  S U B B O T –
┌  ✩  *Vincula este código para ser un Sub Bot*
│  ✩  Pasos para Vincular 
│  ✩  *1* : Haga click en más ajustes
│  ✩  *2* : Toque dispositivos vinculados
└  ✩  *3* : Copie y pegue el código en vincular con número de teléfono

> *Nota:* Este código expira en 60 segundos.

> *Código:* ${codigo}`
  )

  setTimeout(() => {
    if (subbots[codigo] && !subbots[codigo].active) {
      delete subbots[codigo]
fs.writeFileSync(CODES_FILE, JSON.stringify(subbots, null, 2))
    , tiempoExpiracion)


handler.command = /^code/i
handler.help = ['code']
handler.tags = ['subbot']

export default handler