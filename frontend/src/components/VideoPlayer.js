import { useState } from 'react';

function VideoPlayer() {
    // videos list with urls
    const videos = [
      ['Hague (Home Sessions #1)', 'TPnMZWR_2To'],
      ['Sangria (In The Nature #2)', '4IErWZv3MCE'],
      ['Swinger Dance (In The Nature #1)', '_xKkcRnJPlc']
    ];

  // state
  const [url, setUrl] = useState(videos[0][1]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mx-auto rounded-lg bg-silver/20 text-outer-space shadow-lg dark:text-white">
        <div className="p-4">
          <div className="embed-responsive embed-responsive16by9 relative w-full overflow-hidden rounded-lg pt-[56.25%]">
            <object
              title="KSMicroband Youtube Video Player"
              className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
              data={`https://www.youtube.com/embed/${url}`}
            ></object>
          </div>
        </div>

        <ul className="p-2">
          {videos.map((video, id) => (
            <li
              key={id}
              onClick={() => setUrl(video[1])}
              className={`
                my-1 cursor-pointer rounded py-2 px-4 hover:bg-boulder hover:text-white
                ${video[1] === url ? 'font-bold' : ''}
              `}
            >
              {video[0]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VideoPlayer;
