import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import authenticate from './models/user.model';
import expressEjsLayouts from 'express-ejs-layouts';
import dotenv from 'dotenv';
import path from "path"
// import { rateLimit } from 'express-rate-limit'
dotenv.config(); 

// const limiter = rateLimit({
// 	windowMs: 30 * 1000, // 30 Seconds  
// 	limit: 20, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
// 	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
// 	// store: ... , // Use an external store for consistency across multiple server instances.
// }) 
 
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
  // app.use(limiter)
};

export default imports;