import React, { useEffect, useState } from 'react'
import { addmovie } from '../actions/movies'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const MovieForm = () =>{
  const [movie,setmovie]=useState([])
  const [name,setName] =useState('')
  const [imdb,setImdb] =useState('')
  const [submit,setSubmit]=useState(false)
  
  const dispatch =useDispatch()
   

  const handleChange = (e) =>{
        if(e.target.name === 'movie'){
            setName(e.target.value)
        }else if(e.target.name === 'imdb'){
            setImdb(e.target.value)
        }

  }

  const handelSubmit =(e)=>{
     e.preventDefault()
     const movies={
         id:Number (new Date()),
         name:name,
         imdb:Number(imdb)
     }
     setmovie([...movie,{...movies}])
    
    dispatch(addmovie(movies))
    setSubmit(!submit)
    localStorage.setItem('movie',JSON.stringify(movie))
   
  }


  const style={
    'marginLeft':'1100px',
    height:'300px',
    width:'400px',
    backgroundColor:'white',
    'marginBottom':"1000px",
    'marginTop':'-90px',
    'border':"2px solid blue",
     'border-radius':'white',
    'marginRight':'900px',
     'marginLeft':'800px'
   }
    


    


    return (
        <div style={style}>
           <form onSubmit={handelSubmit}>
             <h1 style={{color:'blue'}}>Add-Movie</h1>
             <input
             style={{color:'blue'}}
              type= 'text'
              placeholder='Enter the movie Name'
              onChange={handleChange}
              name='movie'
             />  <br/>

             <input
             style={{color:'blue'}}
              type ='text'
              placeholder='IMDB RANKING'  
              onChange={handleChange}
              name='imdb'
            />  <br/>

            <input
            type ='submit'
            value='add'
            />  <br/>
           </form>


        </div>
    )
}
export default MovieForm