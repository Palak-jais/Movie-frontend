import React,{ useContext} from 'react';
import { MovieContext } from './App';

function Search(){
    const{value,setValue}=useContext(MovieContext)
    return<div className='search'>
    
     <input type="text" placeholder='Search movie here' value={value}
        onChange={(e)=>setValue(e.target.value)}
     />
    </div>
}
export default Search;
