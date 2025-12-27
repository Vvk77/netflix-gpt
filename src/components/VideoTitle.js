

const VideoTitle = ({title,description}) => {
  return (


    <div className=" w-screen aspect-video pt-[20%] px-24  absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-4xl font-bold "> {title}</h1>
        <p className="py-6 text-xl w-1/4 ">{description.slice(0,180)}.</p>
        <div className="">
            <button className="p-4 bg-white px-12 text-black text-xl  rounded-lg hover:bg-opacity-100 ">   ▶️ Play </button>
            <button className=" mx-2 p-4  bg-white px-12 text-black text-xl  rounded-lg "> More Info</button>

        </div>
        
    </div>
  )
}

export default VideoTitle