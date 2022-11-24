import AudioPlayer from '../components/AudioPlayer';
import VideoPlayer from '../components/VideoPlayer';

function Music() {
  return (
    <section
      className="flex h-full min-h-screen w-full bg-white p-28 dark:bg-outer-space"
      id="music"
    >
      <div className="flex w-1/2 justify-center">
        <div className="w-9/12 max-w-6xl">
          <AudioPlayer />
        </div>
      </div>
      <div className="flex w-1/2 justify-center">
        <div className="w-9/12 max-w-6xl">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
}

export default Music;
