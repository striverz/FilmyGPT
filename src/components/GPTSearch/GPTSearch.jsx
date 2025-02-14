import React, { useRef } from 'react'
import "./GPTSearch.css"
import {openai} from "../../utils/openai";
import { API_OPTIONS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addGPTMovies } from '../../redux/gptSlice';

const GPTSearch = () => {

  const dispatch=useDispatch();

  const searchText=useRef(null);

  const handleGPTMovies= async(movie)=>{

    const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
    const json=await data.json();
    return json.results;
    

  }

  const handleGPTSearch= async()=>{

    
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

   
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-4o',
      });

      const resultsArray=gptResults?.choices?.[0]?.message?.content.split(",");

      const promisedArray=resultsArray.map((movie)=>handleGPTMovies(movie));

      const promisifiedResults=await Promise.all(promisedArray);
      

      dispatch(addGPTMovies({movieNames:resultsArray,moviesInfo:promisifiedResults}));

     

    

  }
  return (
    <div className='gpt-search'>
        <div>
        <input  ref={searchText} type='text' placeholder='Search for you own movies Ai'></input>
        <button onClick={handleGPTSearch}>Search</button>
        </div>
        
    </div>
  )
}

export default GPTSearch