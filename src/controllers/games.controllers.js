const db = require('../database/firebase.js')
const { collection,getDocs, getDoc,doc, addDoc,updateDoc,deleteDoc } = require('firebase/firestore')

const getGames = async (req,res)=>{
    try
    {
        const querySnapshot = await getDocs(collection(db,"Videojuegos"))
        const games = []
        querySnapshot.forEach((doc) => {
            games.push({ id: doc.id,...doc.data() })
        });
        res.status(200).send(games)
    }catch(error)
    {
        res.status(500).send(error.message)
    }
}

const getGame = async (req,res)=>{
    try
    {
        const { id } = req.params
        const docRef = doc(db,"Videojuegos",id)
        const docSnap = await getDoc(docRef)
        if(!docSnap.exists())
            return res.status(404).send('Game not found')
        res.status(200).send(docSnap.data())
    }catch(error)
    {
        res.status(500).send(error.message)
    }
}

const createGame = async (req,res)=>{
    try
    {
        const { nombre,genero,compañia,año,url } = req.body;
        const docRef = await addDoc(collection(db,"Videojuegos"),{nombre,genero,compañia,año,url})

        res.status(201).send({ message: 'Game created', id: docRef.id })
    }catch(error)
    {
        res.status(500).send(error.message)
    }
}

const updateGame = async (req,res)=>{
    try
    {
        const { id } = req.params
        const { nombre,genero,compañia,año,url } = req.body;
        const docRef = doc(db,"Videojuegos",id)
        await updateDoc(docRef,{ nombre,genero,compañia,año,url })
        res.status(200).send({ message: 'Game updated' })
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

const deleteGame = async (req,res)=>{
    try
    {
        const { id } = req.params
        const docRef = doc(db,"Videojuegos",id)
        await deleteDoc(docRef)
        res.status(204).send({ message: 'Game deleted'})
    }catch(error)
    {
        res.status(500).send(error.message)
    }
 
}

module.exports = { getGames,getGame,createGame,updateGame,deleteGame }