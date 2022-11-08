import { useState } from 'react';


function VideoPlayer() {
    const videos = [
        ['Hague (Home Sessions #1)', 'TPnMZWR_2To'],
        ['Sangria (In The Nature #2)', '4IErWZv3MCE'],
        ['Swinger Dance (In The Nature #1)', '_xKkcRnJPlc']
    ];

    // state
    const [url, setUrl] = useState(videos[0][1]);

    return (
        <>
            <div className="embed-responsive embed-responsive16by9 relative w-full pt-[56.25%] overflow-hidden">
                <iframe
                    className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${url}?enablejsapi=1&amp;origin=https%3A%2F%2Fksmicroband.pl`}
                    allowFullScreen="1"
                    data-gtm-yt-inspected-2340190_699="true"
                ></iframe>
            </div>
            <ul>
                {videos.map((video, id) => 
                    <li key={id} onClick={() => setUrl(video[1])}
                    className={`cursor-pointer ${video[1] === url ? 'font-bold' : ''}`}
                    >{video[0]}</li>)}
            </ul>
        </>
    );
};

export default VideoPlayer;