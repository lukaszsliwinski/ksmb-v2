import { XyzTransition } from '@animxyz/react';

import AudioPlayer from '../components/AudioPlayer';
import VideoPlayer from '../components/VideoPlayer';

function Music({ verticalScreen }) {
  return (
    <section
      className={`
        flex mx-auto w-full max-w-7xl flex-col bg-white pt-28 px-6 transition-colors dark:bg-outer-space lg:flex-row xl:px-28
        ${verticalScreen ? '' : 'min-h-screen'}
      `}
      id="music"
    >
      <div className="flex justify-center lg:w-1/3 lg:px-4">
        <XyzTransition
          xyz="fade left ease-in-out duration-6"
          appearVisible={{ threshold: .5, rootMargin: '0px' }}
        >
          <div className="mb-12 w-full lg:mb-0">
            <AudioPlayer />
          </div>
        </XyzTransition>
      </div>
      <div className="flex justify-center lg:w-2/3 lg:px-4">
        <XyzTransition
          xyz="fade right ease-in-out duration-6"
          appearVisible={{ threshold: .5, rootMargin: '0px' }}
        >
          <div className="w-full">
            <VideoPlayer />
          </div>
        </XyzTransition>
      </div>
    </section>
  );
}

export default Music;
