import { useState, useEffect } from "react";
import { youtube_api } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetch(youtube_api);
    const response = await data.json();
    setVideos(response.items);
  };

  return (
    <div className = "flex flex-wrap">
      {videos.map(video => <Link key={video.id} to={"watch?v="+video.id}><VideoCard info={video} /></Link>)}
    </div>
  );
};

export default VideoContainer;
