import React from 'react'
import {useEffect} from 'react'

export const Filter = ({popular,activeGenre,setActiveGenre,setFiltered}) => {

  useEffect(()=>{
   if(activeGenre === 0){
     setFiltered(popular)
     return; 
   }
   const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre))
   setFiltered(filtered)
  },[activeGenre])
   
  return (
    <div className="Filter-container">
        <button className={activeGenre === 0 ? "active" : ''} onClick={()=> setActiveGenre(0)}>Popular</button>
        <button className={activeGenre === 35 ? "active" : ''} onClick={()=>setActiveGenre(35)}>Comedy</button>
        <button className={activeGenre === 28 ? "active" : ''} onClick={()=>setActiveGenre(28)}>Action</button>
        <button className={activeGenre === 12 ? "active" : ''} onClick={()=>setActiveGenre(12)}>Adventure</button>
        
    </div>
  )
}
