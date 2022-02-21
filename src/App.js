import { useState,useEffect } from 'react';
import Movie from './Movie'
import { Filter } from './Filter';
import './App.css';
import {motion} from 'framer-motion'


function App() {
  const [popular,setPopular] = useState([])
  const [filter,setFiltered] = useState([])
  const [activeGenre,setActiveGenre] =useState(0)
  const [page,setPage] =useState(2)
  const moreUrl = `https://api.themoviedb.org/3/movie/popular?api_key=5ccb4dc1331390ae3d3382eb5aacbd75&language=en-US&page=${page}`

  //when load up the page,fetch the api
  useEffect(()=>{
  fetctPopular()
  },[])
  //fetch data from the api
  const fetctPopular = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5ccb4dc1331390ae3d3382eb5aacbd75&language=en-US&page=1')
    const movies = await data.json()
    console.log(movies)
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  //Load more movies
  const moreMoives = async ()=>{
    let newUrl;
    if(page === 1){
      newUrl =`https://api.themoviedb.org/3/movie/popular?api_key=5ccb4dc1331390ae3d3382eb5aacbd75&language=en-US&page=${page}`
    } else{
      newUrl =`https://api.themoviedb.org/3/movie/popular?api_key=5ccb4dc1331390ae3d3382eb5aacbd75&language=en-US&page=${page}`
    }
    setPage(page + 1)
    //fetch api
      const data = await fetch(newUrl)
      const movies = await data.json()
      console.log(movies)
      setPopular(movies.results)
      setFiltered(filter.concat(movies.results))
  }
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
     <motion.div layout className="popularMovies">
      {filter.map((movie)=>{
        return <Movie key={movie.id} movie={movie}/>;
      })}
     </motion.div>
     <div className="morePicture">
       <button onClick={moreMoives} className='more'>Load More</button>
     </div>
    </div>
  );
}

export default App;
