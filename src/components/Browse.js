
import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useNowPopularMovies from "../Hooks/useNowPopularMovies"
import useTopRatedMovies from "../Hooks/useTopRatedMovies"
import useUpcomingMovies from "../Hooks/useUpcomingMovies"
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"





const Browse = () => {


  const gptSearch  = useSelector((store) => store.gpt.showGptSearch)

  useNowPlayingMovies()
  useNowPopularMovies()
  useTopRatedMovies()
 useUpcomingMovies()








  return (

    <div>

  <Header/>
  {

gptSearch ? <GptSearch/> : <>

 <MainContainer/>
<SecondaryContainer/>

</>

  }


    </div>




 




  )
}

export default Browse