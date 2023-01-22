const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const dotenv = require('dotenv'); 
dotenv.config();

const sleep = (ms) => {
    return new Promise((r) => setTimeout(r, ms));
}

if (process.env.TOKEN == null) {
    console.log("An discord token is empty.");
    sleep(60000).then(() => console.log("Service is getting stopped automatically"));
    return 0;
}

const discordLogin = async() => {
    try {
        await client.login(process.env.TOKEN);  
    } catch (TOKEN_INVALID) {
        console.log("An invalid token was provided");
        sleep(60000).then(() => console.log("Service is getting stopped automatically"));
    }
}


discordLogin();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
});

client.on("ready" , () => {
    console.log("각청이 일어났떠여!")
    client.user.setActivity('일' , { type: "PLAYING"})
    
});

  
client.on('messageCreate', msg => {

    try { 
        if (msg.content === process.env.PREFIX + '캐릭터 각청') msg.channel.send(`내 정보를 가져올께!\nhttps://genshin.jurie.tv/ko/characters/keqing/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 아야토') msg.channel.send(`카미사토 아야토에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/ayato/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 아야카') msg.channel.send(`카미사토 아야카에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/ayaka/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 알베도') msg.channel.send(`알베도에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/albedo/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 여행자') msg.channel.send(`여행자에 대한 정보야\n여행자(바람)\nhttps://genshin.jurie.tv/ko/characters/lumineAnemo/\n\n여행자(바위)\nhttps://genshin.jurie.tv/ko/characters/lumineGeo/\n\n여행자(번개)\nhttps://genshin.jurie.tv/ko/characters/lumineElectro/\n\n여행자(풀)\nhttps://genshin.jurie.tv/ko/characters/lumineDendro/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 카즈하') msg.channel.send(`카에데하라 카즈하에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/kazuha/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 치치') msg.channel.send(`치치에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/qiqi/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 진') msg.channel.send(`진에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/jean/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 행추') msg.channel.send(`행추에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/xingqiu/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 케이아') msg.channel.send(`케이야에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/kaeya/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 베넷') msg.channel.send(`베넷에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/bennett/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 다이루크') msg.channel.send(`다이루크에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/diluc/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 유라') msg.channel.send(`유라에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/eula/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 이토') msg.channel.send(`아라타키 이토에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/itto/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 사유') msg.channel.send(`사유에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/sayu/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 신염') msg.channel.send(`신염에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/xinyan/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 레이저') msg.channel.send(`레이저에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/razor/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 노엘') msg.channel.send(`노엘에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/noelle/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 중운') msg.channel.send(`중운에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/chongyun/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 북두') msg.channel.send(`북두에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/beidou/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 라이덴') msg.channel.send(`라이덴 쇼군에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/raiden/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 종려') msg.channel.send(`종려에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/zhongli/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 소') msg.channel.send(`소에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/xiao/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 신학') msg.channel.send(`신학에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/shenhe/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 운근') msg.channel.send(`운근에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/yunjin/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 호두') msg.channel.send(`호두에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/hutao/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 토마') msg.channel.send(`토마에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/thoma/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 로자리아') msg.channel.send(`로자리아에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/rosaria/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 향릉') msg.channel.send(`향릉에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/xiangling/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 요이미야') msg.channel.send(`요이미야에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/yoimiya/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 감우') msg.channel.send(`감우에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/ganyu/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 벤티') msg.channel.send(`벤티에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/venti/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 고로') msg.channel.send(`고로에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/gorou/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 타르탈리아') msg.channel.send(`타르탈리아에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/tartaglia/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 에일로이') msg.channel.send(`에일로이에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/aloy/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 사라') msg.channel.send(`쿠죠 사라에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/sara/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 디오나') msg.channel.send(`디오나에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/diona/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 피슬') msg.channel.send(`피슬에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/fischl/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 엠버') msg.channel.send(`엠버에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/amber/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 코코미') msg.channel.send(`산고노미야 코코미에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/kokomi/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 미코') msg.channel.send(`야에 미코에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/yae/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 클레') msg.channel.send(`클레에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/klee/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 연비') msg.channel.send(`연비에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/yanfei/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 모나') msg.channel.send(`모나에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/mona/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 설탕') msg.channel.send(`설탕에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/sucrose/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 응광') msg.channel.send(`응광에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/ningguang/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 리사') msg.channel.send(`리사에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/lisa/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 바바라') msg.channel.send(`바바라에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/barbara/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 야란') msg.channel.send(`야란에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/yelan/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 시노부') msg.channel.send(`시노부의 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/shinobu/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 헤이조') msg.channel.send(`헤이조의 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/heizou/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 타이나리') msg.channel.send(`타이나리에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/tighnari/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 콜레이') msg.channel.send(`콜레이에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/collei/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 도리') msg.channel.send(`도리에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/dori/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 사이노') msg.channel.send(`사이노에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/cyno/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 닐루') msg.channel.send(`닐루에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/nilou/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 나히다') msg.channel.send(`나히다에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/nahida/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 레일라') msg.channel.send(`레일라에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/Layla/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 캔디스') msg.channel.send(`캔디스에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/candace/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 파루잔') msg.channel.send(`파루잔에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/faruzan/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 방랑자') msg.channel.send(`방랑자에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/wanderer/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 요요') msg.channel.send(`방랑자에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/yaoyao/`);
        
        if (msg.content === process.env.PREFIX + '캐릭터 알하이탐') msg.channel.send(`알하이탐에 대한 정보야\nhttps://genshin.jurie.tv/ko/characters/alhaitam/`);
        
        if(msg.content === process.env.PREFIX + 'server') {
            msg.channel.send(`현재 서버의 이름은 ${msg.guild.name} 입니다.\n총 멤버 수는 ${msg.guild.memberCount} 명 입니다.`)
          }

        console.log(msg.content)
    } catch (e) {
        console.log(e);
    }
    
});
