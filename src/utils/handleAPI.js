import axios from 'axios';
const baseUrl='https://movie-backend-95du.onrender.com';

const getAllMovies=(setMovie)=>{
    
     axios.get(baseUrl)
    .then(({data})=>{
        
        setMovie(data);
    })
    .catch((err)=>console.log(err))

}
const AddMovie=(name,setName,genre,setGenre,leadstudio,setLeadstudio,audiencescore,setAudiencescore,profitability,setProfitability,rottentomatoes,setRottentomatoes,worldwidegross,setWorldwidegross,year,setYear,setMovie)=>{
    
     axios.post(`${baseUrl}/add`,{name,genre,leadstudio,audiencescore,profitability,rottentomatoes,worldwidegross,year})
    .then(()=>{
        
        getAllMovies(setMovie);
        setName("");
        setYear("");
        setAudiencescore("");
        setGenre("");
        setLeadstudio("");
        setProfitability("");
        setRottentomatoes("");
        setWorldwidegross("");
      
      

    })
    .catch((err)=>alert(err.response.data.msg))

}
const updateMovie=(movieid,name,setName,genre,setGenre,leadstudio,setLeadstudio,audiencescore,setAudiencescore,profitability,setProfitability,rottentomatoes,setRottentomatoes,worldwidegross,setWorldwidegross,year,setYear,setMovie,setIsupdate)=>{
    axios.post(`${baseUrl}/update`,{_id:movieid,name,genre,leadstudio,audiencescore,profitability,rottentomatoes,worldwidegross,year})
    .then(()=>{
        
        getAllMovies(setMovie);
        setName("");
        setYear("");
        setAudiencescore("");
        setGenre("");
        setLeadstudio("");
        setProfitability("");
        setRottentomatoes("");
        setWorldwidegross("");
        setIsupdate(false);
     
        
    })
    .catch((err)=>alert(err.response.data.msg))

}
const deleteMovie=(_id,setMovie)=>{
    axios.post(`${baseUrl}/delete`,{_id})
    .then(()=>{
        getAllMovies(setMovie)
    
    })
    .catch((err)=>alert(err.response.data.msg))

}
export{getAllMovies,AddMovie,deleteMovie,updateMovie}