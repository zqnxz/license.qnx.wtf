import db from "../../utils/query.utils";
import OAuthClient from "disco-oauth";

export default {
  get: async (req: any, res: any) => {
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

      req.session.key = userKey;
      req.session.userId = User.id;
      req.session.username = User.username;
      req.session.avatar = User.avatarUrl(40);
      req.session.email = User.emailId;
      req.session.roles = [];

      const selfUser = await db("SELECT * FROM users WHERE discord_id = ?", [
        req.session.userId, 
      ]).then((rows: any[]) => rows[0] || null);
 
      if (selfUser) {
        req.session.roles = selfUser.role;
        req.session.panelId = selfUser.id;
        res.redirect("/");
        return;
      }

      await db(
        "INSERT INTO users (discord_id, username, email, role) VALUES (?, ?, ?, ?)",
        [req.session.userId, req.session.username, req.session.email, "User"]
      ).then(() => (req.session.roles = ["User"]));

      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};