const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}!

*JOIN GC BOT*
https://chat.whatsapp.com/F960lCFoQOI5McAPFAOn7U
  
Follow https://instagram.com/thoriqazzikra_
    
_also owner number_ : wa.me/62895334950905
    
Berikut adalah beberapa fitur yang ada pada bot ini!✨

*_Most Used :_*

*${prefix}stc*
*${prefix}ttp*
*${prefix}sgif*
*${prefix}stickergiphy*
*${prefix}stmg*
*${prefix}meme*
*${prefix}nulis*
*${prefix}quotemaker*
*${prefix}rate*
*${prefix}kapan*
*${prefix}apakah*
*${prefix}bisakah*
*${prefix}infosurah*
*${prefix}surah*
*${prefix}tafsir*
*${prefix}ALaudio*
*${prefix}jsolat*
*${prefix}katakasar*
*${prefix}klasmen*
*${prefix}tiktokpic*
*${prefix}artinama*
*${prefix}cekjodoh*
*${prefix}zodiak*
*${prefix}motivasi*
*${prefix}urgay*
*${prefix}sreddit*
*${prefix}resep*
*${prefix}stalkig*
*${prefix}wiki*
*${prefix}cuaca*
*${prefix}chord*
*${prefix}lirik*
*${prefix}movie*
*${prefix}whatanime*
*${prefix}aiquote*
*${prefix}doggo*
*${prefix}fakta*
*${prefix}fakboy*
*${prefix}katabijak*
*${prefix}quote*
*${prefix}brainly*
*${prefix}cerpen*
*${prefix}cersex*
*${prefix}puisi*
*${prefix}anime*
*${prefix}kpop*
*${prefix}memes*
*${prefix}tts*
*${prefix}translate*
*${prefix}resi*
*${prefix}covidindo*
*${prefix}ceklokasi*
*${prefix}shortlink*
*${prefix}bapakfont*
*${prefix}linkgc*
*${prefix}adminList*
*${prefix}ownergc*
*${prefix}me*
*${prefix}listban*
*${prefix}listblock*
*${prefix}gcinfo*
*${prefix}dewabatch*
*${prefix}howmuch*
*${prefix}mtk*
*${prefix}google*
*${prefix}ptl*
*${prefix}grupbot*
*${prefix}read*
*${prefix}getpic @tagmember*
*${prefix}santet*
*${prefix}nyenye*
*${prefix}saylist*
*${prefix}addsay*
*${prefix}say*
*${prefix}delsay*
*${prefix}listbacot*
*${prefix}addbacot*
*${prefix}bacot*
*${prefix}delbacot*
*${prefix}jadian*
*${prefix}mystat*
*${prefix}infogempa*
*${prefix}tod*
*${prefix}kbbi*
*${prefix}pornhub*
*${prefix}infobmkg*
*${prefix}bucin*
*${prefix}ytsearch*
*${prefix}tahta*
*${prefix}artimimpi*
*${prefix}family100*
*${prefix}playstore*
*${prefix}shopee*
*${prefix}glitch*
*${prefix}distance*
*${prefix}emojisticker*
*${prefix}jadwalbola*
*${prefix}caklontong*
*${prefix}tebakgambar*
*${prefix}simi*
*${prefix}kusonime*
*${prefix}asupan*
*${prefix}stalktiktok*
*${prefix}logoff*
*${prefix}blackpink*
*${prefix}glowtext*
*${prefix}twitter*
*${prefix}quotesen*
*${prefix}gsmarena*
*${prefix}infoalamat*
*${prefix}detail*
*${prefix}findsticker*
*${prefix}film*
*${prefix}imgtourl*
*${prefix}myzodiak*
*${prefix}missing*
*${prefix}stalktwit*
*${prefix}silverpb*
*${prefix}goldpb*
*${prefix}darkjokes*


*_Downloader :_*

*${prefix}fb*
*${prefix}fb2*
*${prefix}ig*
*${prefix}ig2*
*${prefix}igstory*
*${prefix}play*
*${prefix}play2*
*${prefix}play3 [file]*
*${prefix}tiktok*
*${prefix}ytmp3*
*${prefix}ytmp4*
*${prefix}twitter*


*_Anime :_*

*${prefix}nhpdf [kodenuklir]*
*${prefix}anoboy* [ongoing anime]
*${prefix}rhug*
*${prefix}slap*
*${prefix}waifu*
*${prefix}nsfwgif*
*${prefix}bjgif*
*${prefix}cumgif*
*${prefix}kissgif*
*${prefix}rhentai*
*${prefix}pussy*
*${prefix}bjanime*
*${prefix}gifhentai*
*${prefix}boobs*
*${prefix}randomhentai*
*${prefix}randomhug*
*${prefix}baka*
*${prefix}animeavatar*
*${prefix}neko*
*${prefix}loli*
*${prefix}wallpaper*
*${prefix}wallpaper2*
*${prefix}wpanime*
*${prefix}nekonsfw*


*_Images :_*

*${prefix}ameliandani*
*${prefix}pictcogan*
*${prefix}pictcecan*
*${prefix}aesthetic*
*${prefix}images*


*_Tentang Bot :_*

*${prefix}tnc*
*${prefix}donasi*
*${prefix}botstat*
*${prefix}ownerbot*
*${prefix}join*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_
*_Owner Bot :_*

*${prefix}ban* - banned
*${prefix}bc* - promosi
*${prefix}leaveall* - keluar semua grup
*${prefix}clearall* - hapus semua chat
*${prefix}setstatus*
*${prefix}setpic*
*${prefix}screen*
*${prefix}addprem*
*${prefix}delprem*
    
*Author    : Aruga Z*
*Owner BOT : Thoriq*
    
https://github.com/thoriqazzikra/whatsapp-bot2
    
Hope you have a great day!✨`
}
    
    /*
    Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
    */
    
exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!
*${prefix}add*
*${prefix}kick* @tag
*${prefix}promote* @tag
*${prefix}demote* @tag
*${prefix}infoall*
*${prefix}del*
*${prefix}mutegrup on/off*
*${prefix}seticon*
*${prefix}revoke link gc*
*${prefix}setgroupname*
*${prefix}resend*
*${prefix}bokep*
*${prefix}antilink on/off*
*${prefix}edotensei*
    
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://trakteer.id/arugabot

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -ArugaZ`
}
