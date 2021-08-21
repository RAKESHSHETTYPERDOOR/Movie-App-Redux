import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { sortname,sortimdb } from '../actions/movies'


const MovieCard = () =>{
   const [name,setName]=useState('')
   const [sort,setSort]=useState('') 
   
   const dispatch =useDispatch() 

    const movie =useSelector((state)=>{
        return state.movie.filter((ele)=>{
            if (ele.name.includes(name)){
                return {...ele.name}
            }    
           })
    })
    

   

    const handlechange=(e)=>{
        setName(e.target.value)
      
     
    
      }
      
      const handleClick =(e)=>{
         if (e.target.value === 'Sort-By-Name'){
             dispatch(sortname())
             setSort(e.target.value)
         }
         if(e.target.value === 'Sort-By-Imdb'){
           dispatch(sortimdb())
           setSort(e.target.value)
         }
      }
    
    const cardstyle={
      minHeight:'100%',
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap'
    }

    const arr= [
      {id:1,name:'rakesh'},
      {id:2,name:'koushik'},
      {id:3,name:'manoj'},
      {id:4,name:'ani'}
      
      ]

    
    return(
       <div  style={{cardstyle}} >
{/*          
            <input
            type= 'text'
            placeholder='search the movie'
            onChange ={handlechange}
            value={name}
            />  
            <select value={sort} onChange={handleClick}>
                <option>SORY-BY</option>
                <option value='Sort-By-Name'>Sort-By-Name</option>
                <option value='Sort-By-Imdb' >Sort-By-Imdb</option>

            </select>
                         */}
                          {
                 arr.map((ele)=>{

                   return   <div class="card " style={{margin:'20px',width:"200px"}}>
                       <div class="card-body ">
                         <h5 class="card-title">Special title treatment</h5>
                         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                         <a href="#" class="btn btn-primary">Go somewhere</a>
                       </div>
                     </div>
                  

                 })
              


             }

                         
              
                   
            


          
       </div>
        






    )
}

export default MovieCard