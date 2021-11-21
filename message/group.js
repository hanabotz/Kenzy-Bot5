//////// WELCOME BIASA ////////////
const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
const moment = require("moment-timezone")

module.exports = welcome = async (ikyy, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
   
            
           
    
             
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
           
               
     
  
                var pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            
			
            if (anu.action == 'add' && mem.includes(ikyy.user.jid)) {
            ikyy.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(ikyy.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await ikyy.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	 num = anu.participants[0]
                let v = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                let p2 = await ikyy.getStatus(num)
        let p3 = `${p2? `${p2.status}` : '-'}`
        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                teks = `*Welcome @${num.split('@')[0]}* 

📛 : _${anu_user}_
💌 : _${p3}_
🔣 : _@${num.split('@')[0]}_
🥉 : _${memeg} Member (s)_
⏰ : _${timuu} Indonesian time_

\`\`\`Hope you like it and don't forget to read the group description\`\`\``;
	            buff = await getBuffer(`https://ziy.herokuapp.com/api/author/welcome1?pp=${pp_user}&nama=${anu_user}&namagc=${encodeURI(mdata.subject)}&ppgc=${pp_grup}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
		        ikyy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove' && !mem.includes(ikyy.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await ikyy.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                let p2 = await ikyy.getStatus(num)
        let p3 = `${p2? `${p2.status}` : '-'}`
        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                out = `◪ Goodbye @${num.split('@')[0]}
◪ Leave from group:
${mdata.subject}
│
└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}
GoodBye~~`;
                buff = await getBuffer(`https://ziy.herokuapp.com/api/author/goodbye1?pp=${pp_user}&nama=${anu_user}&namagc=${encodeURI(mdata.subject)}&ppgc=${pp_grup}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
                ikyy.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
