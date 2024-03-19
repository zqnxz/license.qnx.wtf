// import requestYAHOBI from '../utils/Common/count.utils';
// import countHandler from '../utils/Common/count.utils.handler';
import query from '../utils/query.utils';
import ZeroSec, { ObfuscationPayload, ObfuscationResult } from 'zerosec'; 
import { CustomRequest, CustomResponse } from '../interfaces/express.interface';
import {licenses, licenseCount, memberStatus} from '../utils/statistics/user.statistics';

export default {
  get: async (req: CustomRequest, res: CustomResponse) => {
    res.render('pages/index', { user: req.user, licenses: licenses(req, res), licenseCount: licenseCount(req, res), status: memberStatus(req, res)});
  },   
   
  download: async (req: any, res: any) => {
    // const {code} = req.params
    const {id, code} = req.body
    const apiKey = process.env.ZEROSEC_API_KEY!;   
    const zeroSec = new ZeroSec(apiKey);  

    const isCodeAvailable = await query("SELECT * FROM licenses WHERE id = ? AND author = ?", [id, req.user.username]).then((rows: any[]) => rows[0] || false)
    if(!isCodeAvailable) return res.send("why exploit?")    
    
    const payload: ObfuscationPayload = {   
      script: `
      local math_random = math.random
      local os_time = os.time
      local string_sub = string.sub 
      local print = print 
      local pairs = pairs
      local getmetatable = getmetatable
      local debug = debug
      local setmetatable = setmetatable 
      local debug_getinfo = debug.getinfo
      local CreateThread = CreateThread
      local PerformHttpRequest = PerformHttpRequest 
      local json_encode = json.encode  
      local json_decode = json.decode  
      local io_popen = io.popen   
      local obj = CreateObject   
      local tostring = tostring   
      local pcall = pcall 
      local string_char = string.char
           
      local qnx = {};
      qnx.__index = qnx;     
      
      function qnx:exploit() 
        setmetatable(debug, {}) 
        function isProcessRunning(processName) 
          local command = 'tasklist /FI "IMAGENAME eq ' .. processName .. '"'
          local handle = io_popen(command, 'r')
         
          if handle then   
            local result = handle:read('*a')    
            handle:close()   
            return result:find(processName, 1, true) ~= nil 
          end  
        
          return false    
        end  
        
        local appName = 'HTTPDebuggerUI.exe' 
        if isProcessRunning(appName) then 
          return false;  
        end   
      
        AddEventHandler('__cfx_internal:httpResponse', function(token, status, body, headers, errorData)
          return false; 
        end) 
        
        local infos = {{
          thread = 1,
          isUnique = false
        }, { 
          thread = PerformHttpRequest,
          isUnique = ':--definableProps',
          source = '@citizen:/scripting/lua/scheduler.lua',
          what = 'Lua',
          short_src = 'citizen:/scripting/lua/scheduler.lua',
          linedefined = 405,
          lastlinedefined = 427 
        }, {
          thread = load,
          isUnique = false,
          source = '=[C]',
          what = 'C', 
          short_src = '[C]'
        }, {
          thread = assert,
          isUnique = false,
          source = '=[C]',
          what = 'C',
          short_src = '[C]'
        }, {
          thread = json.decode,
          isUnique = false,
          source = '=[C]',
          what = 'C',
          short_src = '[C]'     
        }, {
          thread = pcall,
          isUnique = false,  
          source = '=[C]',
          what = 'C',
          short_src = '[C]'
        }, {
          thread = tostring,
          isUnique = false,
          source = "=[C]", 
          what = "C",
          short_src	= "[C]",
        }, {      
          thread = debug.getinfo,   
          isUnique = false,
          source = "=[C]", 
          what = "C",
          short_src	= "[C]",
        }, {
          thread = 0, 
          isUnique = false,
          source = "=[C]", 
          what = "C",  
          short_src	= "[C]",
        }, {
          thread = json.encode,
          isUnique = false,
          source = '=[C]',
          what = 'C',
          short_src = '[C]'
        }, {
          thread = setmetatable, 
          isUnique = false,
          source = '=[C]',
          what = 'C',
          short_src = '[C]' 
        }, {
          thread = string.char, 
          isUnique = false,
          source = '=[C]',
          what = 'C',
          short_src = '[C]' 
        }, {
          thread = math.random, 
          isUnique = false,
          source = '=[C]',
          what = 'C',
          short_src = '[C]' 
        }}
        
        print("^4@license.qnx.wtf^0 » [1/3] Checking for Exploits^0")
        Wait(1000)
        
        for i = 1, #infos do  
          local info = infos[i];  
          local debug = debug_getinfo(info.thread);
          
          if info.isUnique == ':--definableProps' then
          if info.source ~= debug.source or info.what ~= debug.what or info.short_src ~= debug.short_src or info.linedefined ~=
          debug.linedefined or info.lastlinedefined ~= debug.lastlinedefined then
            return false;
          end 
        elseif info.thread == 1 then 
          if debug == nil then  
            return false;
          end 
        elseif info.isUnique ~= ':--definableProps' and info.thread ~= 1 then
        if info.source ~= debug.source or info.what ~= debug.what or info.short_src ~= debug.short_src then
          return false;
        end  
      end    
      end 
      
        if debug_getinfo(string.dump).source ~= "=[C]" or debug_getinfo(string.dump).lastlinedefined ~= -1 or debug_getinfo(string.dump).short_src ~= "[C]" or debug_getinfo(string.dump).what ~= "C" then
          return false;
        end 
      
      if debug_getinfo(Citizen.InvokeNative).source ~= "=[C]" or debug_getinfo(Citizen.InvokeNative).lastlinedefined ~= -1 or debug_getinfo(Citizen.InvokeNative).short_src ~= "[C]" or debug_getinfo(Citizen.InvokeNative).what ~= "C" then
        return false;
      end
      
      if getmetatable(debug) ~= nil then 
        return true      
      else        
        return false  
      end    
      
      if getmetatable(debug).__index ~= nil then
        return false     
      else       
        return true      
      end    
      
      if getmetatable(debug).__newindex ~= nil then 
        return false    
      else        
        return true     
      end   
      
      if debug.getinfo ~= nil then
        return true    
      else       
        return false   
      end
      
      if string.find(string.dump(PerformHttpRequest), "followLocation") then
        return true; 
      else
        return false
      end
      
      if string.find(string.dump(debug.getinfo), "debuggetinfo") then
        return true
      else 
        return false 
      end 
       
      return true;  
      end  
       
      local AuthConstants = {  
        url = 'http://45.131.111.218:9991/qnx/auth',        
      }      
        
      local randomValues = {}           
         
      for i = 1, 100 do   
        local random = tostring({}):sub(10)    
        table.insert(randomValues, random)                                     
      end
      
      local xyz = math_random(1337, 8642)   
      local abc = string_char(97, 98, 99)
      local nn = math_random(100, 10000000) 
      local w = string_char(math_random(97, 122)) 
          
      CreateThread(function()         
        if not qnx:exploit() then     
          print([[  
            ,---. 
            ,'_   _'.  
          {{ |o| |o| }}
         {{{ '-'O'-' }}}   
         {{( ('-.-') )}}   
          {{{.'---',}}}   
              '---'    Hands up Skid 
          ]])    
          return print('☁^0 » Authentication Failed^0');                    
        end            
                   
        pcall(function()           
          print("^4@license.qnx.wtf^0 » [2/3] Connecting to license server ...^0")
          PerformHttpRequest(AuthConstants.url, function(status, data, headers)  
            if AuthConstants.url ~= 'http://45.131.111.218:9991/qnx/auth' then
              print([[  
                        ,---.  
                    ,'_   _'.  
                  {{ |o| |o| }}
                {{{ '-'O'-' }}}   
                {{( ('-.-') )}}   
                  {{{.'---',}}}   
                      '---'    Hands up Skid 
                ]])     
                return print('☁^0 » Authentication Failed^0');               
              end
              if status == 200 then        
                Wait(1000) 
                local response, realData = pcall(function() return json_decode(data) end);        
                 
                if response and realData[1].status == "SKID?" and realData[1].message == "SKID?" and realData[1].a  == "SKID? " .. randomValues[3]
                and realData[1].b  == "SKID? " .. randomValues[4] and realData[1].c == "SKID? " .. randomValues[5]
                and realData[1].d  == "SKID? " .. randomValues[6] and realData[1].e == "SKID? " .. randomValues[7] 
                and realData[1].f == "SKID? " .. randomValues[8] and realData[1].g == "SKID? " .. randomValues[9]
                and realData[1].h  == "SKID? " .. randomValues[10] and realData[1].i == "SKID? " .. randomValues[11]     
                and realData[4].message == "REMEMBER, IAM BETTER!"  
                and realData[7] == 9219291 and realData[9] == 7329210 and realData[13].vv == 1e+24    
                and realData[14].message == "NOT AUTHED " .. randomValues[3] and realData[18].value == "SKIDCAM " .. randomValues[11]
                and realData[43].value == "SKIDCAM " .. randomValues[36] and realData[54].n == 1337 and realData[56].mega == "DIGGA MIT D!"
                and realData[57].kannst_du_nun_deutsch == "?" and realData[60].lolab == "NPASS-" .. randomValues[31] .. " " .. " - " .. randomValues[13]
                and realData[13].vk == 0.9824 and realData[1].net == "exposed" and realData[1].exposed == "net" and realData[11].zwei == 2 and realData[11].drei == 3
                and realData[11].vier == 4 and realData[101].ARGH == "who knows him?" and realData[103].execute == "os.random(math.random(os.exit(function() print('ergibt kein sinn') end))))"
                and realData[104].func == "os" and realData[100] == "durch gepimmelt" and realData[99].manmanman == "let me cook - so männer" and realData[97].cool == "cooL"
                and realData[99].w == "w" and realData[99].h == "h" and realData[99].a == "a" and realData[99].t == "t" and realData[99].y == "y" and realData[99].oo == "o"
                and realData[99].u == "u" and realData[99].d == "d" and realData[99].o == "o" and realData[99].i == "i" and realData[99].n == "n" and realData[99].g == "g"
                and realData[105].func == string.byte("test") and realData[106].func == string.byte("test") .. randomValues[4] and realData[104].func .. realData[104].scanner .. realData[104].reference == "os.exit()"
                and realData[133].b[4].v == string.byte("test") .. randomValues[4] and math.ceil(realData[135].v) == xyz and realData[136].v == abc and math.ceil(realData[140].v) == nn
                and realData[141].v == w then       
                      ${code}                                  
                      return print("^4@license.qnx.wtf^0 » [3/3] Successfully Authenticated^0")                                        
                  else                                     
                      return print('☁^0 Authentication Failed^0');                                       
                  end                                                              
              elseif status == 404 then                    
                  return print('☁^0 » Authentication Failed^0');                    
              else  
                  return print('☁^0 » Authentication Failed^0');             
              end                            
          end, 'POST', json_encode({                                                    
              code = randomValues,   
              vals = "NPASS-" .. randomValues[20] .. " " .. " - " .. randomValues[9],
              b = 69420, 
              c = 69421, 
              d = 69422, 
              e = 69423, 
              f = 69424,
              g = 69425, 
              h = 69426, 
              i = 69427,
              k = 69428, 
              l = 69429,
              m = 69430, 
              n = 69431,
              j = 69432, 
              o = 69433,
              p = 69434,
              z = 69435,
              rp = randomValues[4],
              char = string.byte("test"), 
              "disco disco yes yes, party party, im in your mind",
              skid = "lover88",
              valss = randomValues,
              vall = randomValues,
              r = randomValues[4],
              b = randomValues[22],
              indexOf = randomValues[99], 
              n = randomValues,
              nn = randomValues,
              cc = randomValues,
              bbbb = randomValues,
              secret = randomValues[88],
              xyz = xyz,
              offset = abc,
              nn = nn,
              w = w
          }, {
            skid = "😀🤡😃😁😄😔😚" 
          }, {
            "SHAKE YOUR BOOTY"
          }, {
            "REMEMBER, IAM BETTER!"
          }, {
            92847
          }, { 
            9219291
          }, {
            1948503
          }, {
            7329210
          }, {
            9943320 
          }, { 
            os.date()
          }, { 
            "N-PASS"
          }, {
            "N-PASS-2"
          }, {
            "N-PASS-3"
          }, {
            "N-PASS-4"
          }, { 
            "N-PASS-5"
          }, { 
            "N-PASS-6" 
          }), {         
            ['Content-Type'] = 'application/json',                       
            ['user-agent'] = 'why-u-lookin-here? :)'      
          });            
        end);          
      end);                  
      `,  
      platformLock: 'lua', 
    };

    if(code === null || code === undefined) return res.redirect("/")

    try { 
      const obfuscationResult: ObfuscationResult = await zeroSec.obfuscate(payload);
      console.log('Obfuscation successful:', obfuscationResult);
      // res.download("qnx-license.lua", obfuscationResult.script);
      res.set({ 
        'Content-Disposition': 'attachment; filename=qnx-license.lua',
        'Content-Type': 'text/plain'
      });  

      res.send(obfuscationResult.script);  
    } catch (error: any) { 
      console.error('Obfuscation error:', error.message); 
      res.redirect("/")
    }  
  }, 
  edit: async (req: any, res: any) => {
    const product = await query("SELECT * FROM licenses WHERE id = ? AND author = ?", [
      req.params.id,
      req.user.username 
    ]).then((rows: any[]) => rows[0] || []) 
    
    res.render('subviews/Licenses/edit', {
      layout: './pages/Licenses/edit',  
      user: req.user, 
      product: product       
    });   
  },
  delete: async (req: any, res: any) => {
    const {id} = req.params

    await query("DELETE FROM licenses WHERE id = ? AND author = ?", [
      id,
      req.user.username
    ]).then(() => {
      res.redirect("/") 
    });
  },
  editdone: async (req: any, res: any) => { 
    const {id} = req.params
    const { resource, ip, webhook, code } = req.body;

    await query("UPDATE licenses SET resource = ?, ip = ?, webhook = ?, code = ? WHERE id = ? AND author = ?", [
      resource, ip, webhook, code, id, req.user.username
    ]).then(() => { 
      res.redirect("/")
    });
  } 
}; 