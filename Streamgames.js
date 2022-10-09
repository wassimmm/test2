import { readFile } from'fs/promises';
import express from 'express';


export const data = await readFile("./Streamgames.json");
const app = express();
const hostname = '127.0.0.1' ;
const port = process.env.PORT || 9090 ;

