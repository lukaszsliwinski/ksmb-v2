import { useState, useRef, useEffect } from 'react';

import { ReactComponent as Play } from '../assets/svg/play.svg';
import { ReactComponent as Pause } from '../assets/svg/pause.svg';
import { ReactComponent as Next } from '../assets/svg/next.svg';
import { ReactComponent as Prev } from '../assets/svg/prev.svg';
import { ReactComponent as Vinyl } from '../assets/svg/vinyl.svg';

// Audio player component
function AudioPlayer() {
  // State
  const [songId, setSongId] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  // Refs
  const audio = useRef();
  const progress = useRef();

  // Songs list with urls
  const songs = [
    ['Zapowiedź', 'api/mp3/zapowiedz'],
    ['Hawai', 'api/mp3/hawai'],
    ['Czwarty', 'api/mp3/czwarty'],
    ['Swinger Dance', 'api/mp3/swinger'],
    ['Hague', 'api/mp3/hague'],
    ['Motyw', 'api/mp3/motyw'],
    ['Kwarantanna', 'api/mp3/kwarantanna'],
    ['Sangria', 'api/mp3/sangria'],
    ['Dziki zwierz', 'api/mp3/zwierz'],
    ['Cordoba', 'api/mp3/cordoba'],
    ['7 na 7', 'api/mp3/7na7']
  ];

  // Update progress bar when playing
  useEffect(() => {
    let timer;
    if (playing) {
      timer = setInterval(() => {
        let position = 0;
        if (!isNaN(audio.current.duration)) {
          position = audio.current.currentTime * (100 / audio.current.duration);
          progress.current.value = position;
          setCurrentTime(calculateTime(audio.current.currentTime));
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [playing]);

  // Format time to 00:00
  const calculateTime = (s) => {
    const minutes = Math.floor(s / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(s % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // Play song when press title on playlist
  const playByTitle = (id) => {
    if (!playing) {
      setPlaying(true);
    }

    audio.current.src = songs[id][1];
    audio.current.play();

    setSongId(id);
  };

  // Play/pause current song
  const playPauseCurrent = () => {
    playing ? audio.current.pause() : audio.current.play();
    setPlaying(!playing);
  };

  // Switch to previous song
  const previousSong = () => {
    let id = songId;
    id === 0 ? (id = songs.length - 1) : (id -= 1);

    audio.current.src = songs[id][1];
    playing ? audio.current.play() : (progress.current.value = 0);
    setSongId(id);
    setCurrentTime(calculateTime(audio.current.currentTime));
  };

  // Switch to next song
  const nextSong = () => {
    let id = songId;
    id < songs.length - 1 ? (id += 1) : (id = 0);

    audio.current.src = songs[id][1];
    playing ? audio.current.play() : (progress.current.value = 0);
    setSongId(id);
    setCurrentTime(calculateTime(audio.current.currentTime));
  };

  // Set current time by progress bar position
  const changeRangeValue = () => {
    audio.current.currentTime = parseInt((audio.current.duration * progress.current.value) / 100);
    setCurrentTime(calculateTime(audio.current.currentTime));
  };

  // Handle if song ends
  const handleEnd = () => {
    let id = songId;
    if (id < songs.length - 1) {
      id += 1;
      audio.current.src = songs[id][1];
      audio.current.play();
      setSongId(id);
    } else {
      audio.current.src = songs[0][1];
      progress.current.value = 0;
      setSongId(0);
      setPlaying(false);
      setCurrentTime(calculateTime(audio.current.currentTime));
    }
  };

  return (
    <div className="mx-auto max-w-md text-sm">
      <div className="mx-auto rounded-lg bg-silver/20 pt-4 text-outer-space shadow-lg dark:text-white">
        <audio
          ref={audio}
          src={`${songs[0][1]}`}
          preload="metadata"
          onEnded={() => handleEnd()}
          onLoadedMetadata={(e) => setDuration(calculateTime(e.target.duration))}
        ></audio>
        <div className="w-100 flex justify-between">
          <small className="px-3">{currentTime}</small>
          <input
            className="w-full cursor-pointer accent-supernova"
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            ref={progress}
            onInput={() => changeRangeValue()}
          />
          <small className="px-3">{duration}</small>
        </div>
        <div className="flex items-center justify-center pt-2">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block rounded-full text-outer-space transition duration-150 ease-in-out dark:text-white"
            onClick={() => previousSong()}
          >
            <Prev className="h-6 w-6" />
          </button>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mx-6 inline-block h-8 w-8 rounded-full bg-outer-space text-play-light transition duration-150 ease-in-out dark:bg-white dark:text-play-dark"
            onClick={() => playPauseCurrent()}
          >
            {playing ? <Pause className="m-auto h-5 w-5" /> : <Play className="ml-2 h-5 w-5" />}
          </button>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block rounded-full text-outer-space transition duration-150 ease-in-out dark:text-white"
            onClick={() => nextSong()}
          >
            <Next className="h-6 w-6" />
          </button>
        </div>

        <ul className="mt-2 p-2">
          {songs.map((song, id) => (
            <li
              key={id}
              onClick={() => playByTitle(id)}
              id={`song${id}`}
              className={`
                my-1 flex cursor-pointer items-center justify-between rounded py-2 px-4 hover:bg-boulder hover:text-white
                ${id === songId ? 'font-bold' : ''}
              `}
            >
              <span>{song[0]}</span>
              <span>
                {id === songId && playing ? (
                  <Vinyl className="rotating h-5 w-5" />
                ) : (
                  <Play className="mr-1.5 h-3 w-3" />
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AudioPlayer;
