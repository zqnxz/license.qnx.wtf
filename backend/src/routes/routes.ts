import indexRoute from "./index.router";
import loginRoute from "./Authentication/login.router";
import logoutRoute from "./Authentication/logout.router"
import createLicenseRoute from "./Licenses/license.router";
import apiRoute from "./api/api.router";

const routes: any[] = [
  {
    path: "/login",
    component: loginRoute,
    requireAuth: false, 
    roles: [""], 
  },
  {
    path: "/logout",
    component: logoutRoute,
    requireAuth: false, 
    roles: [""], 
  }, 
  {
    path: "/",
    component: indexRoute,  
    requireAuth: false,
    roles: [""],
  },
  {
    path: "/createlicense",  
    component: createLicenseRoute, 
    requireAuth: true,
    roles: [""],
  },
  {
    path: "/qnx/auth",   
    component: apiRoute, 
    requireAuth: false, 
    roles: [""],
  }
]; 

export default routes;