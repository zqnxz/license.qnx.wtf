import db from "../../utils/query.utils";
import OAuthClient from "disco-oauth";
import { CustomRequest, CustomResponse } from "../../interfaces/express.interface";
import { CustomSessionData } from "../../interfaces/session.interface";

export default {
  get: async (req: CustomRequest, res: CustomResponse) => {
    let authClient = new OAuthClient(
      process.env.auth_clid!,
      process.env.auth_secret! 
    ); 

    authClient.setScopes(["identify", "email"]);
    authClient.setRedirect(process.env.redirect!);

    try {
      let code = req.query.code;
      if (code === undefined) return res.redirect("/login"); 

      let userKey = await authClient.getAccess(code); 
      let User = await authClient.getUser(userKey);

      (req.session as unknown as CustomSessionData).key = userKey;
      (req.session as unknown as CustomSessionData).userId = User.id; 
      (req.session as unknown as CustomSessionData).username = User.username;
      (req.session as unknown as CustomSessionData).avatar = User.avatarUrl(40);
      (req.session as unknown as CustomSessionData).email = User.emailId;
      (req.session as unknown as CustomSessionData).roles = [];

      const selfUser = await db("SELECT * FROM users WHERE discord_id = ?", [
        (req.session as unknown as CustomSessionData).userId, 
      ]).then((rows: any[]) => rows[0] || null);
 
      if (selfUser) {
        (req.session as unknown as CustomSessionData).roles = selfUser.role;
        (req.session as unknown as CustomSessionData).panelId = selfUser.id;
        res.redirect("/");
        return;
      }

      await db(
        "INSERT INTO users (discord_id, username, email, role) VALUES (?, ?, ?, ?)",
        [(req.session as unknown as CustomSessionData).userId, (req.session as unknown as CustomSessionData).username, (req.session as unknown as CustomSessionData).email, "User"]
      ).then(() => ((req.session as unknown as CustomSessionData).roles = ["User"]));

      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};