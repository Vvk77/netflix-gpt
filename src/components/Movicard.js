
import { Link } from "react-router-dom"
import { IMAGE_CDN } from "../utils/constants"




const Moviecard = ({posterPath , movieID}) => {

  console.log("Moviecard movieID:", movieID);

  if(!posterPath) return null 
 




  return (



   
    <div className="w-40 pr-6 ">
       <Link to={`/movietrailer/${movieID}`}>
        <img alt="movie-card"
        src={IMAGE_CDN + posterPath}/>
         </Link>
    </div>
  
  )
}

export default Moviecard