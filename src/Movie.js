import {motion} from 'framer-motion'

function Moive({movie}){
  return(
    <motion.div layout>
      <h2>{movie.title} <span>({movie.original_language})</span></h2>
      <h3>Release Date: {movie.release_date}</h3>
      <h4>Popularity: {movie.popularity}</h4>
      <div className="container">
      <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
      </div>
    </motion.div>
  )
}

export default Moive
