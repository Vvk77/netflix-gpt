
import { useDispatch } from "react-redux"
import { addNowPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useNowPopularMovies = () => {

     const dispatch = useDispatch()

  const getNowPopularMovies =  async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)

    const json =  await  data.json()
    // console.log(json.results)
    dispatch(addNowPopularMovies(json.results))



  }

  useEffect(() => {
getNowPopularMovies()
  },[])
  
}

export default useNowPopularMovies