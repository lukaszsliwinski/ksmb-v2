import { useState, useRef, useEffect } from 'react';

import { ReactComponent as Play } from './svg/play.svg';
import { ReactComponent as Pause } from './svg/pause.svg';
import { ReactComponent as Next } from './svg/next.svg';
import { ReactComponent as Prev } from './svg/prev.svg';
import { ReactComponent as Vinyl } from './svg/vinyl.svg';

function AudioPlayer() {
  // state
  const [songId, setSongId] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  // ref
  const audio = useRef();
  const progress = useRef();
  // const currentTime = useRef();

  const songs = [
    ['Dziki zwierz', 'api/mp3/zwierz'],
    ['Sangria', 'api/mp3/sangria'],
    ['Hague', 'api/mp3/hague'],
    ['Kwarantanna', 'api/mp3/kwarantanna'],
    ['Swinger Dance', 'api/mp3/swinger'],
    ['Hawai', 'api/mp3/hawai'],
    ['Motyw', 'api/mp3/motyw'],
    ['Czwarty', 'api/mp3/czwarty'],
    ['7 na 7', 'api/mp3/7na7']
  ];

  let timer;

  useEffect(() => {
    if (playing) {
      timer = setInterval(() => {
        updateRangeValue();
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [playing]);

  const calculateTime = (s) => {
    const minutes = Math.floor(s / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(s % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const playByTitle = (id) => {
    if (!playing) {
      setPlaying(true);
    }

    audio.current.src = songs[id][1];
    audio.current.play();

    setSongId(id);
  };

  const playPauseCurrent = () => {
    playing ? audio.current.pause() : audio.current.play();
    setPlaying(!playing);
  };

  const previousSong = () => {
    let id = songId;
    id === 0 ? (id = songs.length - 1) : (id -= 1);

    audio.current.src = songs[id][1];
    playing ? audio.current.play() : (progress.current.value = 0);
    setSongId(id);
    setCurrentTime(calculateTime(audio.current.currentTime));
  };

  const nextSong = () => {
    let id = songId;
    id < songs.length - 1 ? (id += 1) : (id = 0);

    audio.current.src = songs[id][1];
    playing ? audio.current.play() : (progress.current.value = 0);
    setSongId(id);
    setCurrentTime(calculateTime(audio.current.currentTime));
  };

  const updateRangeValue = () => {
    let position = 0;
    if (!isNaN(audio.current.duration)) {
      position = audio.current.currentTime * (100 / audio.current.duration);
      progress.current.value = position;
      setCurrentTime(calculateTime(audio.current.currentTime));
    }
  };

  const changeRangeValue = () => {
    audio.current.currentTime = parseInt((audio.current.duration * progress.current.value) / 100);
    setCurrentTime(calculateTime(audio.current.currentTime));
  };

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
    <div className="mx-auto max-w-md">
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
            <Prev className="h-7 w-7" />
          </button>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mx-6 inline-block h-12 w-12 rounded-full bg-outer-space text-play-light transition duration-150 ease-in-out dark:bg-white dark:text-play-dark"
            onClick={() => playPauseCurrent()}
          >
            {playing ? <Pause className="m-auto h-7 w-7" /> : <Play className="ml-3 h-7 w-7" />}
          </button>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block rounded-full text-outer-space transition duration-150 ease-in-out dark:text-white"
            onClick={() => nextSong()}
          >
            <Next className="h-7 w-7" />
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
                {id === songId && playing ? <Vinyl className="h-6 w-6" /> : <Play className="mr-1.5 h-3 w-3" />}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AudioPlayer;
