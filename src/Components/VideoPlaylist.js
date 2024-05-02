import React from 'react'


const VideoPlaylist = () => {
  // const playlist = [{
  //   name: 'videoName', videoLink: 'https://www.youtube.com/watch?v=75p-N9YKqNo'
  // }]
  return <div className="flex-tb">
    <div className="m-1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/75p-N9YKqNo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
    </div>
    <div className="m-1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ezmsrB59mj8"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>
    <div className="m-1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BELlZKpi1Zs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>
    <div className="m-1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FlF5MCykyZg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>
  </div>

}

export default VideoPlaylist