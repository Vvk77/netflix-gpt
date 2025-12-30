
import { IMAGE_CDN } from "../utils/constants"




const Moviecard = ({posterPath}) => {




  return (
    <div className="w-40 pr-6 ">
        <img alt="movie-card"
        src={IMAGE_CDN + posterPath}/>
    </div>
  )
}

export default Moviecard