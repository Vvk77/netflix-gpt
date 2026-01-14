
import { useSelector } from "react-redux"
import VideoBackgorund from "./VideoBackgorund";
import VideoTitle from "./VideoTitle";





  const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen ">
      {/* Title should be ABOVE video */}
      <VideoTitle
        title={original_title}
        description={overview}
      />

      {/* Background video */}
      <VideoBackgorund movieID={id} />
    </div>
  );
};



export default MainContainer