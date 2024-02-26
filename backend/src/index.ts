import express, { Express, Request, Response } from "express";
const app: Express = express();
import imports from "./imports";
import loginMiddleware from "./middlewares/Authentication/login.middleware";
// import blacklistMiddleware from "./middlewares/isBlacklisted.middleware";
// import login from "./middlewares/Disco-OAuth/login.middleware";

imports(app);

import routes from "./routes/routes";
// import hasAccess from "./middlewares/Authentication/hasAccess.middleware";
routes.forEach((route) => {
  app.use(
    route.path, 
    [
      route.requireAuth ? loginMiddleware : route.component
    //   hasAccess(route.roles),
    ],
    route.component
  );  
});

// import indexRoute from "./routes/index.router";
// app.use("/", [loginMiddleware], indexRoute);

/**
 * @task catch non existing endpoints 
 */
app.use((req: Request, res: Response) => {
  res.status(404).send("NO SERVER CODE"); 
  // res.render("subviews/endpoint", { 
  //   layout: "./pages/error/endpoint",
  // });
});

app.listen(9991, () => console.log("Server running"));