require('dotenv').config('../.env')
import 'module-alias/register';
import * as express from 'express';
import { projectRouter, authenticationRouter, userRouter } from './routes';
import {createContext} from '@utilities';
import { errorHandler, logError, authenticate } from '@middlewares';
import { debugRouter  } from './routes/debug';

// Connects to MongoDB Atlas
const connection = require('./data/connection');

const app = express();
const port:number = 3000;


app.use(express.json());
app.all('*', createContext);
// uncomment for debugging app.use("/debug", debugRouter()); 
app.use("/user", authenticationRouter());
app.all('/api/*', authenticate)
app.use("/api/project", projectRouter(1));
app.use("/api/user", userRouter(1)); 
app.use(logError);
app.use(errorHandler);


app.listen(port, ()=> console.log("App is listening to port" + port)); 

