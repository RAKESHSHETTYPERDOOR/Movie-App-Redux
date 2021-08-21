

const initialstate =[]

const movieReducer = (state=initialstate,action)=>{
  
    switch (action.type){

        case 'ADD_MOVIE':{
            return [...state, {...action.payload}]
        }

        case 'SEARCH' :{
             if(action.payload !=''){
                return   state.filter((ele)=>{
                    if (ele.name.includes(action.payload)){
                        return {...ele.name}
                    }          

                        
                })
                
             }
             else {
                 return [...state]
             }
             
                
            
        }

        case 'SORTNAME':{
            return state.sort((a,b)=>{
                if (a.name.toLowerCase() < b.name.toLowerCase())return -1;
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
            })
            
        }
        case 'SORTIMDB':{
            return state.sort((a,b)=>{
                return a.imdb - b.imdb
            })
        }
        case 'DELETE' :{
            return state.filter ((ele)=>{
                return ele.id != action.payload
            })
        }
    


        default:{
            return [...state]
        }
    }


}

export default movieReducer