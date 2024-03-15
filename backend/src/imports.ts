import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import authenticate from './models/user.model';
import expressEjsLayouts from 'express-ejs-layouts';
import dotenv from 'dotenv';
import path from "path"
dotenv.config(); 
 
const imports = (app: Express) => {
  app.use(
    session({ 
      secret: 'secret',  
      resave: false, 
      saveUninitialized: true, 
    })
  );
  app.set('view engine', 'ejs');
  app.set("layout", "./pages");
  app.set("views", path.join(__dirname, "../src/views"));
  app.use(cors());
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
    );
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(expressEjsLayouts);
  app.use(express.static('./src/public'));  
  app.use(authenticate);
};

export default imports;