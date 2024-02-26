const OAuth2Middleware = async (req: any, res: any, next: any) => {
    try {
      let sessionKey = await req.session.key;
  
      if (!sessionKey) {
        let redirectUri = encodeURIComponent(process.env.redirect!);
        let scope = encodeURIComponent("identify email");
        let clientId = encodeURIComponent(process.env.auth_clid!);
        let url = `https://discord.com/oauth2/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`;
  
        return res.redirect(url);
      }
  
      next();
    } catch {
      return res.redirect("/");
    }
  };
  
  export default OAuth2Middleware;