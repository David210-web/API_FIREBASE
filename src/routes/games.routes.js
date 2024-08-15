const { Router } = require('express')
const { getGames, getGame, createGame, updateGame, deleteGame } = require('../controllers/games.controllers')
const router = Router()

router.get('/ping',(req,res)=>{
    res.status(200).send('pong')
})

router.get('/',getGames)
router.get('/:id',getGame)
router.post('/',createGame)
router.put('/:id',updateGame)
router.delete('/:id',deleteGame)

module.exports = router