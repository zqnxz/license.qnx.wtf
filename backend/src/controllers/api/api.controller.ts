import query from '../../utils/query.utils';
import { CustomRequest, CustomResponse } from '../../interfaces/express.interface';

export default { 
  post: async (req: CustomRequest, res: CustomResponse) => {  
      const ip = (req.ip as string).replace("::ffff:", ""); 
      const {code, char, rp, xyz, offset, nn, w} = req.body; 

      /**  
       * @information used for preventing Postman requests...
       * @returns infinite loading 
       */ 
      if (req.body === undefined || req.body === null) { 
        return;          
      }     
    
      const isLicenseValid = await query("SELECT * FROM licenses WHERE ip = ?", [ 
        ip              
      ]).then((rows: any[]) => rows || [])     
  
      const isIpValid = isLicenseValid.filter((i: any): boolean => i.ip === ip) 
      const isExpired = isLicenseValid[0].ending < new Date().toISOString().split('T')[0]
    
      if (isIpValid.length > 0 && !isExpired) {                   
        res.status(200).send([        
          {   
            status: "SKID?",
            message: "SKID?", 
            a: "SKID? " + code[2],  
            69420: "🤛",   
            b: "SKID? " + code[3],
            69421: "✊", 
            c: "SKID? " + code[4], 
            69422: "👊",
            d: "SKID? " + code[5],  
            69423: "👎",
            e: "SKID? " + code[6],
            69424: "👅",
            f: "SKID? " + code[7],
            69425: "👃",
            g: "SKID? " + code[8],
            69426: "🦷",
            h: "SKID? " + code[9], 
            69427: "🦴",
            i: "SKID? " + code[10],
            69428: "👶",
            j: "LOL? " + code[11],
            69429: "👥",
            k: "LOL? " + code[12], 
            69430: "👤",
            l: "LOL? " + code[13],
            69431: "🗣",
            m: "LOL? " + code[14],
            69432: "👀",
            n: "LOL? " + code[15],
            69433: "👳‍♀️",
            o: "LOL? " + code[16],
            69434: "👮‍♀️",
            p: "LOL? " + code[17],
            69435: "👮",
            net: "exposed",
            exposed: "net"
          },
          {
            SKID: "😀🤡😃😁😄😔😚"   
          },
          {
            key: 1, 
            value: "SHAKE YOUR BOOTY" 
          }, 
          {
            key: 2,
            message: "REMEMBER, IAM BETTER!"
          },
          {
            key: 3,
            message: "☭⃠  𡎻 𝨔 𝓟"
          },
          {
            key: 3,
            value: 92847
          },
          9219291, 
          1948503,
          7329210,
          9943320, 
          {
            valueToCheck: new Date(),
            zwei: 2,
            drei: 3,
            vier: 4,
            fünf: 5,
            sechs: 6,
            sieben: 7,
            acht: 8,
            neun: 9,
            zehn: 10,
            elf: 11,
            zwölf: 12,
            dreizehn: 13,
            vierzehn: 14,
            fünfzehn: 15,         
          },
          `  
          🐶 
          🐱
          🐭
          🐹 
          🐰 
          🦊 
          🐻 
          🐼 
          🐨 
          🐯 
          🦁  
          🐮 
          🐷 
          🐽 
          🐸 
          🐵 
          🙈 
          🙉 
          🙊 
          🐒 
          🐔 
          🦜 
          🐧 
          🐦 
          🐤 
          🐣 
          🐥 
          🦆 
          🦢 
          🦅 
          🦚 
          🦉 
          🦇 
          🐺 
          🐗 
          🐴 
          🦄 
          🐝 
          🐛 
          🦋 
          🐌 
          🐚 
          🐞 
          🐜 
          🦟 
          🕷 
          🕸 
          🐢 
          🐍 
          🦎 
          🦂 
          🦀 
          🦑 
          🐙 
          🦐 
          🦞 
          🐠 
          🐟 
          🐡 
          🐬 
          🦈 
          🐳 
          🐋 
          🐊 
          🐆 
          🐅 
          🦛 
          🐃 
          🐂 
          🐄 
          🦌 
          🐪 
          🐫 
          🦘 
          🐘 
          🦏 
          🦍 
          🐎 
          🦙 
          🐖 
          🐐 
          🐏 
          🐑 
          🐕 
          🐩 
          🐈 
          🐓 
          🦃 
          🕊 
          🪶 
          🐇 
          🐁 
          🐀 
          🐿 
          🐾 
          🐉 
          🐲 
          🦖 
          🦕 
          🦒 
          🦔 
          🦓 
          🦗 
          🦧 
          🦮 
          🦥 
          🦦 
          🦡 
          🦨 
          🦩 
          🌵 
          🎄 
          🌲 
          🌳 
          🌴 
          🌱 
          🌿 
          ☘️ 
          🍀 
          🎍 
          🎋 
          🍃 
          🍂 
          🍁 
          🍄 
          🌾 
          💐 
          🌷 
          🌹 
          🥀 
          🌻 
          🌼 
          🌸 
          🌺 
          🌎 
          🌍 
          🌏 
          🌕 
          🌖 
          🌗 
          🌘  
          🌑 
          🌒 
          🌓 
          🌔 
          🌚 
          🌝 
          🌞 
          🌛 
          🌜 
          🌙 
          💫 
          ⭐️ 
          🌟 
          ✨ 
          ⚡️ 
          🔥 
          💥 
          ☄️ 
          🛸 
          ☀️ 
          🌤 
          ⛅️ 
          🌥 
          🌦 
          🌈 
          ☁️ 
          🌧 
          ⛈ 
          🌩 
          🌨 
          ☃️ 
          ⛄️ 
          ❄️ 
          🌬 
          💨 
          🌪 
          🌫 
          🌊 
          💧 
          💦 
          ☔️
          `,
          {
            k: code[2],
            v: code[10],
            vv: 999999999999999999999999,
            vk: 0.9824,
          },
          {
            message: "NOT AUTHED " + code[2],
          },
          {
            k: code[5],
            v: code[7],
            vv: 123243,
            vk: 9437,
          },
          {
            value: "HANDS UP SKID"
          },
          {
            value: "SCREENSHOT OF YOUR WEBCAM:"
          },
          {
            value: "SKIDCAM " + code[10]
          },
          {
            value: "SKIDCAM " + code[11]
          },
          {
            value: "SKIDCAM " + code[12]
          },
          {
            value: "SKIDCAM " + code[13]
          },
          {
            value: "SKIDCAM " + code[14]
          },
          {
            value: "SKIDCAM " + code[15]
          },
          {
            value: "SKIDCAM " + code[16]
          },
          {
            value: "SKIDCAM " + code[17]
          },
          {
            value: "SKIDCAM " + code[18]
          },
          {
            value: "SKIDCAM " + code[19]
          },
          {
            value: "SKIDCAM " + code[20]
          },
          {
            value: "SKIDCAM " + code[21]
          },
          {
            value: "SKIDCAM " + code[22]
          },
          {
            value: "SKIDCAM " + code[23]
          },
          {
            value: "SKIDCAM " + code[24]
          },
          {
            value: "SKIDCAM " + code[25]
          },
          {
            value: "SKIDCAM " + code[26]
          },
          {
            value: "SKIDCAM " + code[27]
          },
          {
            value: "SKIDCAM " + code[28]
          },
          {
            value: "SKIDCAM " + code[29]
          },
          {
            value: "SKIDCAM " + code[30]
          },
          {
            value: "SKIDCAM " + code[31]
          },
          {
            value: "SKIDCAM " + code[32]
          },
          {
            value: "SKIDCAM " + code[33]
          },
          {
            value: "SKIDCAM " + code[34]
          },
          {
            value: "SKIDCAM " + code[35]
          },
          {
            value: "SKIDCAM " + code[36]
          },
          {
            value: "SKIDCAM " + code[37]
          },
          {
            value: "SKIDCAM " + code[38] 
          },
          {
            value: "SKIDCAM " + code[39]
          },
          {
            value: "SKIDCAM " + code[40]
          },
          {
            s: new Date()
          },
          {
            s: new Date()
          },
          {
            value: `
            😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤮 🤧 😷 🤒 🤕 🤨 🤩 🤯 🧐 🤫 🤪 🥺 🤭 🥱 🥳 🥴 🥲 🥸 🥶 🥵 😈 👿 🤬 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 😿 😾 🙀 
            `
          },
          {
            value: `
            😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤮 🤧 😷 🤒 🤕 🤨 🤩 🤯 🧐 🤫 🤪 🥺 🤭 🥱 🥳 🥴 🥲 🥸 🥶 🥵 😈 👿 🤬 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 😿 😾 🙀 
            `
          },
          {
            value: ` 
            😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤮 🤧 😷 🤒 🤕 🤨 🤩 🤯 🧐 🤫 🤪 🥺 🤭 🥱 🥳 🥴 🥲 🥸 🥶 🥵 😈 👿 🤬 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 😿 😾 🙀 
            `
          },
          {
            n: 1337 
          }, 
          `  
          🐶 
          🐱
          🐭
          🐹 
          🐰 
          🦊 
          🐻 
          🐼  
          🐨 
          🐯 
          🦁 
          🐮 
          🐷 
          🐽 
          🐸 
          🐵 
          🙈 
          🙉 
          🙊 
          🐒 
          🐔 
          🦜 
          🐧 
          🐦 
          🐤 
          🐣 
          🐥 
          🦆 
          🦢 
          🦅 
          🦚 
          🦉 
          🦇 
          🐺 
          🐗 
          🐴 
          🦄 
          🐝 
          🐛 
          🦋 
          🐌 
          🐚 
          🐞 
          🐜 
          🦟 
          🕷 
          🕸 
          🐢 
          🐍 
          🦎 
          🦂 
          🦀 
          🦑 
          🐙 
          🦐 
          🦞 
          🐠 
          🐟 
          🐡 
          🐬 
          🦈 
          🐳 
          🐋 
          🐊 
          🐆 
          🐅 
          🦛 
          🐃 
          🐂 
          🐄 
          🦌 
          🐪 
          🐫 
          🦘 
          🐘 
          🦏 
          🦍 
          🐎 
          🦙 
          🐖 
          🐐 
          🐏 
          🐑 
          🐕 
          🐩 
          🐈 
          🐓 
          🦃 
          🕊 
          🪶 
          🐇 
          🐁 
          🐀 
          🐿 
          🐾 
          🐉 
          🐲 
          🦖 
          🦕 
          🦒 
          🦔 
          🦓 
          🦗 
          🦧 
          🦮 
          🦥 
          🦦 
          🦡 
          🦨 
          🦩 
          🌵 
          🎄 
          🌲 
          🌳 
          🌴 
          🌱 
          🌿 
          ☘️ 
          🍀 
          🎍 
          🎋 
          🍃 
          🍂 
          🍁 
          🍄 
          🌾 
          💐 
          🌷 
          🌹 
          🥀 
          🌻 
          🌼 
          🌸 
          🌺 
          🌎 
          🌍 
          🌏 
          🌕 
          🌖 
          🌗 
          🌘 
          🌑 
          🌒 
          🌓 
          🌔 
          🌚 
          🌝 
          🌞 
          🌛 
          🌜 
          🌙 
          💫 
          ⭐️ 
          🌟 
          ✨ 
          ⚡️ 
          🔥 
          💥 
          ☄️  
          🛸 
          ☀️ 
          🌤 
          ⛅️ 
          🌥 
          🌦 
          🌈 
          ☁️ 
          🌧 
          ⛈ 
          🌩 
          🌨 
          ☃️ 
          ⛄️ 
          ❄️ 
          🌬 
          💨 
          🌪 
          🌫 
          🌊 
          💧 
          💦 
          ☔️
          `,
          {
            mega: "DIGGA MIT D!"
          },
          {
            pferd: "🐎",
            hund: "🐕",
            katze: "🐈",
            maus: "🐁",
            vogel: "🐦",
            fisch: "🐟",
            kuh: "🐄",
            schwein: "🐖",
            schaf: "🐑",
            ziege: "🐐",
            hase: "🐇",
            huhn: "🐓",
            biene: "🐝",
            spinne: "🕷",
            schnecke: "🐌",
            elefant: "🐘",
            tiger: "🐅",
            löwe: "🦁",
            affe: "🐒",
            pinguin: "🐧",
            panda: "🐼",
            fuchs: "🦊",
            wolf: "🐺",
            krokodil: "🐊",
            drache: "🐉",
            dinosaurier: "🦖",
            fledermaus: "🦇", 
            kannst_du_nun_deutsch: "?"
          },
          `
          *
          / \
        / * \
        @@@@@@@
      (  @ @  )
        \  l  /
        \ 0 /
      __@@@@@__
      /    *    \
    / /|  *  |\ \
    / / |  *  | \ \
    ( (  |  *  |  ) )
    \ \ |  *  | / /
    \ \|#####|/ /
      &&|#####|&&
      %|##|##|%
        |##|##|
        (##|##)
        |##|##|
        |##|##|
      _|##|##|_
      (^^^^|^^^^)
      """""""""""
          `,
          `
          ⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⢰⡿⠋⠁⠀⠀⠈⠉⠙⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⢀⣿⠇⠀⢀⣴⣶⡾⠿⠿⠿⢿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⣀⣀⣸⡿⠀⠀⢸⣿⣇⠀⠀⠀⠀⠀⠀⠙⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
          ⠀⣾⡟⠛⣿⡇⠀⠀⢸⣿⣿⣷⣤⣤⣤⣤⣶⣶⣿⠇⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀
          ⢀⣿⠀⢀⣿⡇⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⠿⣿⡏⠀⠀⠀⠀⢴⣶⣶⣿⣿⣿⣆
          ⢸⣿⠀⢸⣿⡇⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⣿⡇⣀⣠⣴⣾⣮⣝⠿⠿⠿⣻⡟
          ⢸⣿⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠉⠀
          ⠸⣿⠀⠀⣿⡇⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀ 
          ⠀⠻⣷⣶⣿⣇⠀⠀⠀⢠⣼⣿⣿⣿⣿⣿⣿⣿⣛⣛⣻⠉⠁⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⢸⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⢸⣿⣀⣀⣀⣼⡿⢿⣿⣿⣿⣿⣿⡿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠙⠛⠛⠛⠋⠁⠀⠙⠻⠿⠟⠋⠑⠛⠋⠀ 
          `,
          {
            lolab: "NPASS-" + code[30] + " " + " - " + code[12]
          },
          {
            man: "evi mein sklave"
          },
          {
            ediz: "Der Schmale"
          },
          {
            so: "Männer"
          },
          {
            durch: "gerengelt"
          },
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          91,
          28,
          31,
          90.2,
          10,
          12.01,
          234,
          184,
          13,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          {
            random: "random",
            cooL: "cool",
            cool: "cooL",
            coom: "cool",
            coop: "cooL",
            cooi: "cool",
            cooI: "cooL",
          },
          {
            exam: "math",
            scanner: ".",
            ple: "random"
          },
          {
            w: "w", 
            h: "h",
            a: "a",
            t: "t",

            y: "y",
            oo: "o",
            u: "u",

            d: "d",
            o: "o",
            i: "i",
            n: "n",
            g: "g",

            man: "let me cook",
            manmanman: "let me cook - so männer"
          },
          "durch gepimmelt",
          {
            ARGH: "who knows him?"
          },
          "i know you see this, good luck cracking it",
          {
            stop: "exit",
            execute: "os.random(math.random(os.exit(function() print('ergibt kein sinn') end))))"
          },
          {
            func: "os",
            scanner: ".", 
            reference: "exit()"
          },
          {
            func: char
          },
          {
            func: char + rp
          },
          "got",
          "your",
          "ip",
          "let",
          "me",
          "dox",
          "u",
          "void:void",
          {
            v: "any:any:any:any:any:any:void"
          },
          {
            v: "void:void:void:void:void:void:any"
          }, 
          {
            v: "string:string:string:string:string:any" 
          },
          {
            v: "number:number:number:number:number:any"
          },
          {
            v: "re, r, y, a, bh, s, 00, 1, 22, 33, 44, 55, 66, 77, 88, 99, 21, 24, 61, 43, 21, 56, 12"
          },
          code,
          code,
          code,
          code,
          char,
          char,
          rp,
          char + rp,
          code + char + rp,
          {
            real: char + rp + code
          },
          {
            s: char + rp
          },
          {
            ss: code + char
          },
          {
            v: rp + code + char
          },
          {
            b: [
              {
                v: code
              },
              {
                v: char
              },
              {
                v: rp
              },
              {
                v: char + rp
              },
              {
                v: char + code
              },
              {
                v: rp + code
              },
              {
                v: code + rp
              }
            ],
          },
          code,
          { 
            v: Math.ceil(xyz)
          },
          {
            v: offset 
          },
          code,
          code,
          code, 
          {
            v: Math.ceil(nn) 
          },
          {
            v: w
          }
        ]   
        );              
      } else {                  
        res.status(404).send("Unauthorized");            
      }           
  },   
}; 
