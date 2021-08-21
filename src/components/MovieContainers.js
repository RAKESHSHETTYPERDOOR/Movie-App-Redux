import React from 'react'
import MovieForm from './MovieForm'
import MovieList from  './MovieList'
import MovieState from  './MovieState'
import MovieCards from './MovieCards'


const MovieContainers = () => {
    return( 
        <div >
           
              <MovieCards/>
              <MovieForm style={{'marginBottom':'200px','position':'fixed'}}/>
              <MovieState/>

                          


             
           

         
          
          
         
           
        
        
        </div>
    )
}

export default MovieContainers