import { BG_IMG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"







const GptSearch = () => {
  return (

    <>
    <div className="fixed -z-10">

        <img src={BG_IMG}/>
    </div>
    
      <div>


        <GptSearchBar/>
        <GptMovieSuggestion/>



    </div>
    
    
    
    
    
    </>
   
  )
}

export default GptSearch