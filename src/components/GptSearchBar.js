
import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import groq from "../utils/groqAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/GptSlice";

const GptSearchBar = () => {

  const dispatch = useDispatch()

  console.log("ENV KEY 👉", process.env.REACT_APP_GROQ_API_KEY);

  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);


const searchMovie = async (movie) => {

  const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)

  const json = await data.json()
  console.log(json)

  return json.results

}




  const handleGPTSearchClick = async () => {
    const query = searchText.current.value;
    if (!query) return;

    console.log("User Query 👉", query);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me names of 5 movies, comma separated.";

    try {
      const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: gptQuery }],
      });



      if (
        !response.choices ||
        response.choices.length === 0
      ) {
        console.log("No GPT response");
        return;
      }

      const movieNames =
        response.choices[0].message.content;

      // console.log("GPT RESULT 👉", movieNames);

      // OPTIONAL: convert to array
      const moviesArray = movieNames
        .split(",")
        .map((m) => m.trim());

      // console.log("Movies Array 👉", moviesArray);



const promiseArray = moviesArray.map((movie) => searchMovie(movie))

console.log(promiseArray)

const searchMovieResult =  await Promise.all(promiseArray)

dispatch(
  addGptMovies({
    movieNames: moviesArray,
    movieResults: searchMovieResult
  })
);



console.log(searchMovieResult)



    } catch (error) {
      console.error("Groq Error 👉", error);
    }






  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceHolder}
        />

        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;





