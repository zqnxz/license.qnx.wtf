import express, { Express, Request, Response } from "express";
const app: Express = express();
import imports from "./imports";
import loginMiddleware from "./middlewares/Authentication/login.middleware";

imports(app); 

import routes from "./routes/routes";
routes.forEach((route) => {
  app.use(
    route.path,  
    [
      route.requireAuth ? loginMiddleware : route.component
    ],
    route.component
  );  
});

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