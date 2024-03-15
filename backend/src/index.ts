import express, { Express, Request, Response } from "express";
const app: Express = express();
import imports from "./imports";
import loginMiddleware from "./middlewares/Authentication/login.middleware";
import httpExceptionMiddleware from "./middlewares/exceptions/http.middleware"

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
app.use(httpExceptionMiddleware); 

app.listen(9991, () => console.log("Server running"));