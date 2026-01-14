import { useParams, useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const MovieTrailer = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  console.log("movieId:", movieId);

  const [trailerKey, setTrailerKey] = useState(null);

  const movieData = async () => {
    if (!movieId) return; 

    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );

      const json = await data.json();

      if (!json.results || json.results.length === 0) return;

      const filterTrailer = json.results.filter(
        (movie) => movie.type === "Trailer"
      );

      const trailerVideo =
        filterTrailer.length > 0
          ? filterTrailer[0]
          : json.results[0];

      setTrailerKey(trailerVideo);
    } catch (error) {
      console.error("Trailer fetch error 👉", error);
    }
  };

  useEffect(() => {
    movieData();
  }, [movieId]); // 🔥 DEPENDENCY FIX

  return (
    <div className="relative w-screen h-screen bg-black flex justify-center items-center">
      <button
        onClick={() => navigate("/browse")}
        className="
          absolute top-6 left-6
          z-50
          bg-black/70
          text-white
          px-4 py-2
          rounded-lg
          border border-white/20
          hover:bg-black/90
          transition
        "
      >
        Home
      </button>

      {trailerKey && (
        <iframe
          className="w-[92%] max-w-6xl aspect-video rounded-2xl shadow-2xl border border-white/10 z-10"
          src={`https://www.youtube.com/embed/${trailerKey.key}?autoplay=1&mute=1`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

export default MovieTrailer;
