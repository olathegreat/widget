import React,{useState, useEffect} from 'react';
import axios from 'axios';

// https://www.en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming

const Search = () => {
    const[term, setTerm] = useState("programming");
    const[result, setResult] = useState([]);


    useEffect(() => {
     const search = async()=>{
       const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
         params:{
           action:"query",
           list:"search",
           origin:"*",
           format:"json",
           srsearch:term
         },
       });
       setResult(data.query.search);
     }

     if(term &&!result.length){
       search();
     }else{

      const timeOutid = setTimeout(() => {
        if(term){
          search();
         }
       }, 1000);
         
       return ()=>{
         clearTimeout(timeOutid);
       };

     }
    
     
    
    },[term]);

    const renderedResult = result.map((result)=>{
      return(
        <div key={result.pageid} className='item'>
         <div className='right floated content'>
           <a 
             className='ui button'
             href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
             GO
           </a>
         </div>
          <div className='content'>
            <div className='header'>
              {result.title}
            </div>
            <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
           
          </div>
        </div>
      )
    }

    )


  return (
    <div>
      <div className='ui form'>
          <div className='field'>
              <label>Enter search term:</label>
              <input 
                  value={term}
                   className='input'
                   onChange={(e)=>setTerm(e.target.value)} 
                   type="text"/>
          </div>

      </div>
      <div className='ui celled list'>
        {renderedResult}
      </div>
    </div>
  );
}

export default Search;
