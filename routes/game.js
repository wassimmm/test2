import express from 'express';

/**
 * Router est un objet de base sur le module express.
 * Cet objet a des methodes similaires (.get,.post, .patch,.delete)
 * a l´objet app de type "express()" que nous avons utilisés précédemment.
 */
 const app = express();

 const hostname = '127.0.0.1' ;
 const port = process.env.PORT || 9090 ;
const  router=express.Router();

class Game {
    constructor(name,year) {
        this.name = name;
        this.year = year;
    }
}
const games = [new Game("dmc5",2019),new Game("re8",2021),new Game("nfs",2019)];

// au lieu de l´app.get...
router.get('/game',(req ,res) => {
    res.status(200).json(games);
})

// au lieu de l´app.get...
router.get('/game/:name',(req ,res) => {
    res.status(200).json(games.find(val => val.name === req.params.name));
})

// au lieu de app.post
router.post('/game',(req,res)=>{
  const game = new Game(req.body.name, req.body.year);
  game.push(game);
  res.status(201).json({ message:"Created !", entity:game});
})

// au lieu de app.put
router.put('/game/:name',(req,res) => {
    res.status(200).json({ message:"Updated !",name:req.params.name});})

// au lieu de app.patch..
//router.patch('/game/')

export default router;