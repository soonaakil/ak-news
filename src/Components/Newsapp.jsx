import React, { useState } from 'react'
import Card from './Card'
import { useEffect } from 'react';

const Newsapp = () => {

  
const [search,setSearch] = useState("india");
const  [newsData, setNewsData] = useState (null)

    const API_KEY = "461d7f87adc3468f9205a30c813ce293";

    const getData = async() =>{
        const response = await fetch (`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData =  await response.json();
        console.log(jsonData.articles);
        setNewsData (jsonData.articles)
    }

    const handleInput = (e)=>{
      console.log(e.target.value);
      setSearch(e.target.value)
   }

   useEffect (()=>{
    getData()

   }, []);

   const userInput = (event)=>{
    setSearch(event.target.value)

   }
    

  
  return (
    <div>
        
      <nav>
        <div>
            <h1>Trendy News</h1>
        </div>

        <ul>
            <a>All News</a>
            <a>Trending</a>
        </ul>

        <div className='searchbar'>
            <input type="text" placeholder='Search News' value={search} onChange={handleInput}/>
            <button onClick={getData}>Search</button>

        </div>
      </nav>

      <div>
        <p className='para'>Stay update With TrendyNews</p>
      </div>

      <div className='catagoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>

      </div>
      {newsData?  <Card  data = {newsData}/> :null }


      <div>

      </div>

       </div>
  )
}

export default Newsapp
