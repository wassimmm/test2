import express from 'express';
import { data } from './Streamgames.js';
import { readFile} from 'fs/promises';
import gameRoutes from './routes/game.js';
class Game {
    constructor(name,year) {
        this.name = name;
        this.year = year;
    }
}

// const http = require('http') ;
const app = express();
const hostname = '127.0.0.1' ;
const port = process.env.PORT || 9090 ;
app.use(express.json());
const o={'id':1};
/**
 * Créer un serveur HTTP
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */

// const server = app.createServer((req,res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello world');
// res.end(JSON.stringify(o));
// });
/**
 * Demander l´adresse (URL) de base '/'
 * a l'aide de la méthode GET de HTTP
 */

const games = [new Game("dmc5",2019),new Game("re8",2021),new Game("nfs",2019)];

// app.use(express.json());

// app.get('/game',(res,req) =>{
//     res.status(200).json(games);
// })

// app.get('/game/:name',(res,req) =>{
//     res.status(200).json(games.find(val => val.name === req.params.name));})


// app.post('/game',(req,res)=> {
//   const game = new Game(req.body.name,req.body.year);
//   game.push(game);
//   res.status(201).json({ message :"Created !",entity :game});
// })

// app.get('/',(req, res) => {
//     res.status(200).json('Hello world');
// })
/**
 * lorsqu´une demande arrive a '/game/n_importe_quoi'
 * a l´aide de la méthode GET de HTTP
 */
// app.get('/game/:name',(req,res) =>{
//     res.status(200).json({message :`This is the name of this game : ${req.params.name}`});
// })

/**
 * lorsqu´une demande arrive a 'entity'
 * a l´aide de la methode GET de HTTP
 */
//  app.get('/entity',(req,res) => {
//     const game = new Game("dmc5",2019);
//     res.status(200).json(game);
// });

// app.get('/game',(req, res) => {
//     let games = JSON.parse(data);
//     // games.filter(g=>g.nom=="cartes");
//     res.status(200).json(games);
// });

// app.get('/game/select/:year',(req, res) => {
//     let games = JSON.parse(data);
   
//     res.status(200).json(games.filter(g=>g.year>req.params.year));
// }); 

// app.get('/game/:name',(req, res) => {
//     let games = JSON.parse(data);
   
//     res.status(200).json(games.find(g=>g.nom == req.params.name).url);
// }); 

// const getGames = (clb) =>{
 

// } 

// app.get('/game',(req, res) => {
//    readFile("./StreamGames.json",(err,data)=>{
//     if(err){
//         return res.status(404).send('File not found')
//     }
//     const list = JSON.parse(data);
//     const games = list.map(el => new Game(el.Game,el.year,el.GameLink)
//     // res.json(games)

// }
//    )})

// app.post('/game',(req,res) =>{
//   const game = new Game(req.body.name,req.body.year);
//   games.push(game);
//   res.status(201).json({ message:"Created !",entity: game});
// })

// app.put('/game',(req,res) =>{
//     res.status(200).json({ message:"Updated !",name:req.params.name});})

// app.patch('/game',(req,res) =>{
//         res.status(200).json({ message:"Updated !",name:req.params.name});})

// app.delete('/game',(req,res) =>{
//             res.status(200).json({ message:"Deleted !",name:req.params.name});})
            

            

//TP3

//au lieu de l´app.get...
// app.get('/game',(req ,res) => {
//     try {res.status(200).json(games);}
//     catch(error){
//         console.log(error)
//     }
// })

// // au lieu de l´app.get...
// app.get('/game/:name',(req ,res) => {
//     res.status(200).json(games.find(val => val.name === req.params.name));
// })

// // au lieu de app.post
// app.post('/game',(req,res)=>{
//   const game = new Game(req.body.name, req.body.year);
//   games.push(game);
//   res.status(201).json({ message:"Created !", entity:game});
// })

// // au lieu de app.put
// app.put('/game/:name',(req,res) => {
//     res.status(200).json({ message:"Updated !",name:req.params.name});})

app.use(gameRoutes);

/**
 * Démarrer le serveur a l´ecoute des connexions
 **/
app.listen(9090, '0.0.0.0', () => {
    console.log(`Server is up at http://${hostname}:${port}/`);
})