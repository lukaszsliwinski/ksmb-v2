import AudioPlayer from '../components/AudioPlayer';
import VideoPlayer from '../components/VideoPlayer';

function Music({ verticalScreen }) {
  return (
    <section
      className={`
        flex h-full w-full flex-col bg-white py-28 px-6 dark:bg-outer-space md:flex-row xl:px-28
        ${verticalScreen ? '' : 'min-h-screen'}
      `}
      id="music"
    >
      <div className="flex justify-center md:w-1/2">
        <div className="mb-12 w-11/12 max-w-6xl md:mb-0 xl:w-9/12">
          <AudioPlayer />
        </div>
      </div>
      <div className="flex justify-center md:w-1/2">
        <div className="w-11/12 max-w-6xl xl:w-9/12">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
}

export default Music;
