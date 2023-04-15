import React, { useContext} from "react";
import { AddMovie,updateMovie } from './utils/handleAPI';
import { MovieContext } from './App';

function Body(){
  const{name,setName,genre,setGenre,leadstudio,setLeadstudio,audiencescore,setAudiencescore,profitability,setProfitability,rottentomatoes,setRottentomatoes,worldwidegross,setWorldwidegross,year,setYear,movie,setMovie,loading,setLoading,update,setIsupdate,movieid,setMovieid}=useContext(MovieContext);
  

  
    return(
     
        <div className="body-parent">   
             <div className="addmovie">
             
            <input type="text" placeholder="Enter movie name" value={name} required
                onChange={(e)=>setName(e.target.value)}
            />
              <input type="text" placeholder="Enter Genre" value={genre}  required 
                onChange={(e)=>setGenre(e.target.value)}
            />
             <input type="text" placeholder=" Lead Studio name" value={leadstudio}  required
                onChange={(e)=>setLeadstudio(e.target.value)}
            />
                        <input type="number" placeholder="Enter Audience Score %" value={audiencescore}  required 
                onChange={(e)=>setAudiencescore(e.target.value)}
            />
                        <input type="number" placeholder="Enter Profitability" value={profitability}  required
                onChange={(e)=>setProfitability(e.target.value)}
            />
            
            <input type="number" placeholder="Enter Rotten Tomatoes % " value={rottentomatoes}  required
                onChange={(e)=>setRottentomatoes(e.target.value)}
            />
             <input type="number" placeholder="Enter World WideGross" value={worldwidegross}  required 
                onChange={(e)=>setWorldwidegross(e.target.value)}
            />
            <input type="number" placeholder="Enter year" value={year}   required
                onChange={(e)=>setYear(e.target.value)}
            /> 

             </div>

            <div className="add"

              onClick={update?()=>updateMovie(movieid,name,setName,genre,setGenre,leadstudio,setLeadstudio,audiencescore,setAudiencescore,profitability,setProfitability,rottentomatoes,setRottentomatoes,worldwidegross,setWorldwidegross,year,setYear,setMovie,setIsupdate)
              :()=>AddMovie(name,setName,genre,setGenre,leadstudio,setLeadstudio,audiencescore,setAudiencescore,profitability,setProfitability,rottentomatoes,setRottentomatoes,worldwidegross,setWorldwidegross,year,setYear,setMovie)}>
               {update?"UPDATE":"ADD"}
             

        </div>
        </div>
    )
}
export default Body;