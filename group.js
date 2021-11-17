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
                try {
                pp_user = await ikyy.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await ikyy.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
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
	            buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURI(anu_user)}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://bit.ly/walpamikel`)
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
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURI(anu_user)}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://bit.ly/walpamikel`)                
                ikyy.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
/**const {
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
          try {
               var pp_user = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pp_user = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
                try {
                pp_grup = await ikyy.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
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
	            buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${timuu}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://camo.githubusercontent.com/66474cbb0782bf4b5cf5f8a1f74661c8d71daa64d9f78befe0db0bf6fb7a399b/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e64394763547246366679466f4743486d736d4f58576a46784958682d34363744316e526841346d5126757371703d434155`)
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
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${timuu}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://camo.githubusercontent.com/66474cbb0782bf4b5cf5f8a1f74661c8d71daa64d9f78befe0db0bf6fb7a399b/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e64394763547246366679466f4743486d736d4f58576a46784958682d34363744316e526841346d5126757371703d434155`)
                ikyy.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}**/