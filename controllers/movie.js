import {Movie} from '../model/movies.js'


// add movie
export const addMovie =async (req,res)=>{
  
    const newMovie = await Movie.create(req.body)
    res.json({message:'movie addedd successfully',newMovie})
}

// get movie

export const getMovie = async(req,res)=>{
    const getMovies = await Movie.find()
    res.json({message:'getting movie successfully',getMovies})
}

// get movie by id

export const  getMovieById = async (req,res)=>{
    const id =  req.params.id
    const moviebyid = await Movie.findById(id)
    res.json({messsage:'movie find by id',moviebyid})

}

// find by id and update

export const findByIdandupdate = async(req,res)=>{
    const id = req.params.id

    const updateMovie = req.body

    const updatedmovie = await Movie.findByIdAndUpdate(id,updateMovie,{new:true})

   if (!Movie) return res.send({message:'indvlid movie id'})

    res.send({message:'new update is successfull',updatedmovie})
}

// delete by id

export const DeleteByid = async (req,res)=>{
    const id = req.params.id;

    const deleteMovie = await Movie.findByIdAndDelete(id)

    if(!deleteMovie) return res.send({message:'movie not found'})

        res.send({message:'movie deleted successfully'})
}