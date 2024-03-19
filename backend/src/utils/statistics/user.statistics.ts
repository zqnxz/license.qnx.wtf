import query from "../query.utils"
import { CustomRequest, CustomResponse } from "../../interfaces/express.interface"

export const licenses = (async (req: CustomRequest, res: CustomResponse) => {
    return await query("SELECT * FROM licenses WHERE author = ?", [
        req.user.username
    ]).then((rows: any[]) => rows || [])   
})

export const licenseCount = (async (req: CustomRequest, res: CustomResponse) => {
    return await query("SELECT * FROM licenses WHERE author = ?", [
        req.user.username
    ]).then((rows: any[]) => rows.length || 0)
})

export const memberStatus = (async (req: CustomRequest, res: CustomResponse) => {
    return await query("SELECT * FROM users WHERE username = ?", [
        req.user.username
    ]).then((rows: any[]) => rows[0] || "Member")
})