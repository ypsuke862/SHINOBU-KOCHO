const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const from = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    const texto = msg.message.conversation || msg.message.extendedTextMessage?.text;

    if (texto?.startsWith('#espacioapk')) {
        const query = texto.replace('#espacioapk', '').trim();
        if (!query) {
            await sock.sendMessage(from, { text: '❌ Escribe el nombre de la app.' }, { quoted: msg });
            return;
        }

        await sock.sendMessage(from, { text: '📦 El archivo se está descargando, por favor espera un momento...' }, { quoted: msg });

        try {
            const searchUrl = `https://www.google.com/search?q=site:espacioapk.es+encodeURIComponent(query)`;
            const  data: searchData  = await axios.get(searchUrl, 
                headers:  'User-Agent': 'Mozilla/5.0' );

            const = cheerio.load(searchData);
            const links = [];

            ('a').each((i, el) =>
const href =(el).attr('href');
                const match = href.match(/\/url\?q=(https:\/\/espacioapk\.es\/[^&]+)/);
                if (match && match[1]) links.push(match[1]);
            });

            if (!links.length) {
                await sock.sendMessage(from, { text: '❌ No se encontró la app.' }, { quoted: msg });
                return;
            }

            const appUrl = links[0];
            const { data: appPage } = await axios.get(appUrl);
            const 
    = cheerio.load(appPage);
    
                const name =
('h1').text().trim() || query;
            const downloadLink = 
    ('a[href*=".apk"]').attr('href');
                const pesoTexto =
('p:contains("Tamaño")').text();
            const desc = 
    
('p:contains("Descripción")').text().replace('Descripción |', '').trim();
            const sizeMatch = pesoTexto.match(/Tamaño\s*\|\s*([\d.]+)\s*MB/i);
            const sizeMB = sizeMatch ? parseFloat(sizeMatch[1]) : null;

            if (!downloadLink || !sizeMB) {
                await sock.sendMessage(from, { text: '❌ No se pudo obtener el archivo.' }, { quoted: msg });
                return;
            }

            if (sizeMB > 300) {
await sock.sendMessage(from, { text: '⚠️ El archivo es demasiado pesado.' }, { quoted: msg });
                return;
            }

            const preview = `⏤͟͟͞͞𖤐 𝙀𝙎𝙋𝘼𝘾𝙄𝙊 𝘼𝙋𝙆 ✩
┆
┆🫗̸̷ᩙᮢ ⃘᷼] ɴᴀᴍᴇ: name
┆🫗̸̷ᩙᮢ ⃘᷼] ᴘᴇsᴏ:{sizeMB} MB
┆🫗̸̷ᩙᮢ ⃘᷼] ᴅᴇsᴄ: desc || 'Sin descripción'
┆🫗̸̷ᩙᮢ ⃘᷼] ʟɪɴᴋ:{appUrl}
⏝᳝࣭࣪֠ໍ𓇼֠݊֟͡  𝆬⌒᳝࣭࣪݊⌒᮫࣭𝆬   ࣭࣪֟͡𓇼᮫᳝࣭࣪⏝۟۟۟۟۟۟۟᷼ໍ᮫֠`;

            await sock.sendMessage(from, { text: preview }, { quoted: msg });

            const file = await axios.get(downloadLink, { responseType: 'arraybuffer' });
            await sock.sendMessage(from, {
                document: file.data,
                mimetype: 'application/vnd.android.package-archive',
                fileName: `${name}.apk`
            }, { quoted: msg });

        } catch (err) {
            console.error(err);
            await sock.sendMessage(from, { text: '❌ Ocurrió un error al procesar la solicitud.' }, { quoted: msg });
        }
    }
});
handler.help = ['espacio *<link apk>*']
handler.tags = ['downloader']
handler.command = ['espacioapk', 'espapk', 'apkdoc']
//handler.limit = 1
handler.register = true 

export default handler