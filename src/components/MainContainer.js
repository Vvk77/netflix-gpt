
import { useSelector } from "react-redux"
import VideoBackgorund from "./VideoBackgorund";
import VideoTitle from "./VideoTitle";





const MainContainer = () => {

const movies = useSelector((store) => store.movies?.nowPlayingMovies)


if(!movies) return ;

const mainMovies = movies[6]
// console.log(mainMovies)


const {original_title , overview , id  } = mainMovies
  return (
    <div>

 <VideoTitle  title={original_title} description={overview} />
        <VideoBackgorund  movieID={id}/>
       
      
        
        
    
    
    </div>
  )
}

export default MainContainer