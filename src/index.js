const express = require('express');
const cors = require('cors');
const app = express();
const gamesRoutes = require('./routes/games.routes.js')


app.use(express.json());

// Enable CORS
app.use(cors())
app.use('/api/games',gamesRoutes)

app.listen(3000,()=>{
    console.log('Server running on port 3000');
})