
import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useNowPopularMovies from "../Hooks/useNowPopularMovies"
import useTopRatedMovies from "../Hooks/useTopRatedMovies"
import useUpcomingMovies from "../Hooks/useUpcomingMovies"





const Browse = () => {

  useNowPlayingMovies()
  useNowPopularMovies()
  useTopRatedMovies()
 useUpcomingMovies()








  return (

    <div>

  <Header/>
  <MainContainer/>
<SecondaryContainer/>

    </div>




 




  )
}

export default Browse