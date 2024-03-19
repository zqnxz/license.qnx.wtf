import { CustomRequest, CustomResponse } from "../../interfaces/express.interface";
import query from "../../utils/query.utils"

export default {
    get: (req: CustomRequest, res: CustomResponse) => {
        res.render('subviews/store/create-store', {
            layout: './pages/store/create-store'
        });  
    },
    create: async (req: CustomRequest, res: CustomResponse) => {
        const {name, domain} = req.body
        console.log(name, domain)

        const hasUserStore = await query("SELECT * FROM stores WHERE discord_id = ?", [req.user.discordId]).then((stores: any) => stores[0] || null)

        if(hasUserStore) {
            return res.send("You already have a store -> https://license.qnx.wtf/" + hasUserStore.domain)
        }

        await query("INSERT INTO stores (owner, discord_id, name, domain) VALUES (?, ?, ?, ?)", [req.user.username, req.user.discordId, name, domain])

        res.redirect("/store")    
    }
}