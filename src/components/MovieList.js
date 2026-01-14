


import Moviecard from "./Movicard";

const MovieList = ({ title, movies }) => {





  return (
    <div className="px-6 py-6">
      <h1 className=" text-lg md:text-3xl text-white mb-4 relative z-30">
        {title}
      </h1>

      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <Moviecard
              key={movie.id}
              posterPath={movie.poster_path}
               movieID={movie.id} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
