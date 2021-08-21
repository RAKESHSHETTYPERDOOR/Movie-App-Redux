import React, { useState } from 'react'
import { useSelector } from 'react-redux'



const MovieState =() =>{
   

const movie = useSelector((state)=>{
   return state.movie
})

let name =''
 
const topmovie = movie.map((ele,i,value)=>{
   // console.log('imdb',ele.imdb[i-1])
    
   let imdb =value[0].imdb
   
   console.log('name',name)
    if (movie.length === 0){
        name =''
    }
    else if (movie.length ===1){
        name =value[0].name
    }else if (movie.length >1){
        if (ele.imdb <=imdb){
            name = ele.name
        }
    }   
})

    const style ={ 
    'marginLeft':'800px',
    height:'300px',
    width:'400px',
    backgroundColor:'white',
    'border':"2px solid blue",
    'border-radius':'white',
    'marginTop':"-900px"
    
}



     return (
        <div style={style}>
            <h1 style={{color:"blue",paddingTop:"40px"}}>Total-Movies-{movie.length}</h1>
            <h3 style={{color:'blue'}}>#Top-ranked-movie-{name}</h3>
            


        </div>
    )
}
export default MovieState