import query from '../../utils/query.utils';

export default {
  get: async (req: any, res: any) => { 
    res.render('subviews/Licenses/createlicense', {
      layout: './pages/Licenses/createlicense',
      user: req.user,
    });       
  },  
  
  submit: async (req: any, res: any) => {
    const { resource, ip, webhook, code, ending } = req.body;
    console.log("CALLED")
    console.log(resource, ip, webhook, code, ending);  

    if (!resource || !ip || !webhook || !ending) return res.redirect("/createlicense");

    const userStatistics = await query("SELECT * FROM users WHERE username = ?", [
      req.user.username
    ]).then((rows: any[]) => rows || []);  
 
    const selfObfuscations = userStatistics.filter((obfCount: any) => obfCount.obfuscations >= process.env.OBFUSCATIONS_MEMBER_MAX!);
    console.log(selfObfuscations); 

    if (userStatistics[0].status === "Member" && selfObfuscations.length > 0) {
      return res.redirect("/"); 
    }

    await query("INSERT INTO licenses (resource, ip, webhook, code, ending, author, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)", [
      resource, ip, webhook, code, ending, req.user.username, new Date()
    ]); 

    await query("UPDATE users SET obfuscations = obfuscations + 1 WHERE username = ?", [req.user.username]);

    res.redirect("/");
  },
};
