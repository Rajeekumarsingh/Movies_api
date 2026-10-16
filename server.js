import express from 'express'
import mongoose from 'mongoose';
import bodyparse from  'express'
import { addMovie,getMovie,getMovieById,findByIdandupdate,DeleteByid } from './controllers/movie.js';
const app = express();
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Movie_api').then(()=>{
       console.log('mongodb connected successsfully')
}).catch((err)=>{console.log(err.message)})


// movie get

app.get('/movie',getMovie)

// get movie by id

app.get('/movie/:id',getMovieById)

// movie add

app.post('/movie/add',addMovie);

// movie update
app.put('/movie/:id',findByIdandupdate)


// movie delete

app.delete('/movie/:id',DeleteByid)


app.listen(3000,()=>{
    console.log('server is running on port http://localhost:3000')
}) 