export default {
    get: (req: any, res: any) => {
      req.session.key = null;
      res.redirect("/");
    },
  };