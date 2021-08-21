import {useState} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { sortname,sortimdb,deleted } from '../actions/movies'

const MovieCards = (props) =>{
  const [name,setName]=useState('')
   const [sort,setSort]=useState('') 

  const dispatch =useDispatch()


  

  const movie=useSelector((state)=>{
    return state.movie.filter((ele)=>{
      return (ele.name.includes(name))
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


  const handledelete =(id) =>{
    console.log(id)
    dispatch(deleted(id))

  }


  const cardstyle ={
    'minHeight':'100%',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
   marginRight:'200px'
    
    }

  const divstyle ={
    height:'100px',
    
    
  }  


    return(
         <div  style={divstyle}>
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
             <br/>
           <div style={cardstyle}>

             {
                 movie.map((ele)=>{

                   return   <div class="card " style={{margin:'0px',width:"350px",marginRight:'20px'}}>
                       <div class="card-body ">
                         <img src="someimage.png"></img>
                         <h5 class="card-title">Movie-{ele.name}</h5>
                         <p class="card-text"><b>IMDB-{ele.imdb}</b></p>
                         <button onClick={()=>handledelete(ele.id)}>Delete</button>
                         </div>
                     </div>
                  

                 })
              


             }
        
      </div>
      </div>
    )


}
export default MovieCards