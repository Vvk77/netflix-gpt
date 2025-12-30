import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"





const useTrailerVideo = (movieID) => {

       const dispatch = useDispatch()

    const getVideoBackground =  async () => {

     

   

    

   

console.log("movieID:", movieID);

    const  data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`,API_OPTIONS)

    const json = await data.json()
    // console.log(json)

    const filterTrailer = json.results.filter((movie) => movie.type === "Trailer")
    const trailerVideo = filterTrailer.length ? filterTrailer[0] : json.results[0]
    // console.log("Trailer"  , trailerVideo)
    dispatch(addTrailerVideo(trailerVideo))
 } 

useEffect(() => {
    getVideoBackground()
},[])






 
}

export default useTrailerVideo