import React, {useEffect, useState} from 'react'
import { Youtube_Api } from '../utils/constants.js';
import VideoCard, { AdvideoCard } from './VideoCard.js';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos(); 
  },[]);

  const getVideos= async () => {
    const data = await fetch(Youtube_Api);
    const json = await data.json();
    //console.log(json.items);
    setvideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
    {videos[0] && <AdvideoCard info={videos[0]}/>}
     {videos.map(video => <Link to={"/watch?v=" + video.id}> 
     <VideoCard key={video.id} info={video} />
     </Link>
     )} 
    </div>
  )
}

export default VideoContainer
