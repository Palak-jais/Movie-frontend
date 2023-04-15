import React from "react";

function Pages({MoviePerPage,totalMovie,paginate}){
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalMovie/MoviePerPage);i++){
        pageNumber.push(i);
    }
return(
    <div className="pages">
    <ul className='pagination'>
    {
        pageNumber.map(number=>(
            <li key={number} className='page-item'>
            <a href="#" className='page-link' onClick={()=>paginate(number)}>
                {number}
            </a>
            </li>
        ))
    }

    </ul>
    </div>
)
    

}
export default Pages;
