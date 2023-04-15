import React, { createContext, useState,useEffect} from 'react';
import { getAllMovies,deleteMovie} from './utils/handleAPI';
import Header from './Header';
import Body from './Body';
import Pages from './Pages';
import Search from './Search';


export  const MovieContext=createContext();
function App() {
  
  const[movie,setMovie]=useState("");
  const[loading,setLoading]=useState(false);
  const[update,setIsupdate]=useState(false);
  const[movieid,setMovieid]=useState("");
  const[name,setName]=useState("");
  const[year,setYear]=useState("");
  const[genre,setGenre]=useState("");
  const[leadstudio,setLeadstudio]=useState("");
  const[audiencescore,setAudiencescore]=useState("");
  const[profitability,setProfitability]=useState("");
  const[rottentomatoes,setRottentomatoes]=useState("");
  const[worldwidegross,setWorldwidegross]=useState("");
  const[value,setValue]=useState("");
  const[currentPage,setCurrentPage]=useState(1);
  const[MoviePerPage]=useState(8);

  useEffect(()=>{
    setLoading(true);
    getAllMovies(setMovie)
    setLoading(false);
  },[])
  console.log(movie);
  
  const updateMode=(_id,name,genre,audiencescore,leadstudio,profitability,rottentomatoes,worldwidegross,year)=>{
    setIsupdate(true)
    setName(name)
    setGenre(genre)
    setMovieid(_id)
    setAudiencescore(audiencescore)
    setLeadstudio(leadstudio)
    setProfitability(profitability)
    setRottentomatoes(rottentomatoes)
    setWorldwidegross(worldwidegross)
    setYear(year)
  
   }
 
   const indexofLastMovie=currentPage*MoviePerPage;
   const indexofFirstMovie=indexofLastMovie-MoviePerPage;
   const currentMovie=movie.slice(indexofFirstMovie,indexofLastMovie)
   const paginate=(pageno)=>{
    setCurrentPage(pageno)
   }
  
  return (
    
    <div className="App">
    <MovieContext.Provider value={{movie,setMovie,loading,setLoading,name,setName,genre,setGenre,year,setYear,
    leadstudio,setLeadstudio,audiencescore,setAudiencescore,profitability,setProfitability,rottentomatoes
    ,setRottentomatoes,worldwidegross,setWorldwidegross,update,setIsupdate,movieid,setMovieid,value,setValue}}>
    <Header/>
    <Body/>
    <Search/>

    
    <section>
    {
             (
              currentMovie&&currentMovie.filter(item=>{
        const searchTerm=value.toLowerCase();
        const name=item.name.toLowerCase().startsWith(searchTerm);
        return (name);
      })
         .map((item)  => { 
           return (
              <div className="item" key={item._id}>
              <div className="child-1">
              {item.name}
              </div>
              <div className="child-2">
              
              <span>Genre:{item.genre}</span>
              <span>Lead Studio:{item.leadstudio}</span>
              </div>
              <div className="child-3">
              <span>year:{item.year}</span>
              <span>Profitability:{item.profitability}</span>
              
              </div>
              <div className='child-5'>
              <span>Audience Score:{item.audiencescore}</span>
              <span>Rotten Tomatoes:{item.rottentomatoes}</span>
              <span >World Wide Gross:{item.worldwidegross}</span>
              </div>
              
              <div className="child-4">
              <span className='delete' onClick={()=>deleteMovie(item._id,setMovie)}>DELETE</span>
              <span className='update' onClick={()=>updateMode(item._id,item.name,item.genre,item.audiencescore,item.leadstudio,item.profitability,item.rottentomatoes,item.worldwidegross,item.year)}>UPDATE</span>
              </div>

              </div>
            
            )
          })
        )
        }
    </section>
    <Pages MoviePerPage={MoviePerPage} totalMovie={movie.length} paginate={paginate}/>
   

    </MovieContext.Provider>
    </div>

  );
}

export default App;
