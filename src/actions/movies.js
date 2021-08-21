export const addmovie = (movie)=>{

    return {
        type:'ADD_MOVIE',
        payload:movie
    }
    
}

export const search = (movie) =>{
    return {
        type:'SEARCH',
        payload:movie
    }
}

export const sortname =()=>{
    return {
        type:'SORTNAME'
    }
}

export const sortimdb = () =>{
    return{
        type:'SORTIMDB'
    }
}


export const deleted = (id) =>{
    return{
        type:'DELETE',
        payload:id

    }
}


