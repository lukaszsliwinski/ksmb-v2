import { useState, useRef, useEffect } from 'react';

import { ReactComponent as Play } from './svg/play.svg';
import { ReactComponent as Pause } from './svg/pause.svg';
import { ReactComponent as Next } from './svg/next.svg';
import { ReactComponent as Prev } from './svg/prev.svg';
import { ReactComponent as Vinyl } from './svg/vinyl.svg';

function AudioPlayer() {
    // state
    const [songId, setSongId] = useState(0)
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState('00:00')
    const [duration, setDuration] = useState('00:00')

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
        };
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
        };

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
        id === 0 ? id = songs.length - 1 : id -= 1;
        
        audio.current.src = songs[id][1];
        playing ? audio.current.play() : progress.current.value = 0;
        setSongId(id);
        setCurrentTime(calculateTime(audio.current.currentTime));
    };

    const nextSong = () => {
        let id = songId;
        id < songs.length - 1 ? id += 1 : id = 0;

        audio.current.src = songs[id][1];
        playing ? audio.current.play() : progress.current.value = 0;
        setSongId(id);
        setCurrentTime(calculateTime(audio.current.currentTime));
    };

    const updateRangeValue = () => {
        let position = 0;
        if (!isNaN(audio.current.duration)) {
            position = audio.current.currentTime * (100 / audio.current.duration);
            progress.current.value = position;
            setCurrentTime(calculateTime(audio.current.currentTime));
        };
    };

    const changeRangeValue = () => {
        audio.current.currentTime = parseInt(audio.current.duration * progress.current.value / 100);
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
            setCurrentTime(calculateTime(audio.current.currentTime))
        };
    };

    return (
            <div className="mx-auto max-w-md">
                <div className="rounded-lg shadow-lg mx-auto pt-4 bg-silver/20 text-outer-space dark:text-white">
                    <audio ref={audio} src={`${songs[0][1]}`} preload="metadata" 
                        onEnded={() => handleEnd()}
                        onLoadedMetadata={e => setDuration(calculateTime(e.target.duration))}
                    ></audio>
                    <div className="flex w-100 justify-between">
                        <small className="px-3">{currentTime}</small>
                        <input className="w-full cursor-pointer accent-supernova" type="range" min="0" max="100" defaultValue="0" ref={progress} onInput={() => changeRangeValue()}/>
                        <small className="px-3">{duration}</small>
                    </div>
                    <div className="flex justify-center items-center pt-2">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block text-outer-space dark:text-white rounded-full transition duration-150 ease-in-out"
                            onClick={() => previousSong()}><Prev className="w-7 h-7"/></button>
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block mx-6 w-12 h-12 text-play-light dark:text-play-dark bg-outer-space dark:bg-white rounded-full transition duration-150 ease-in-out"
                            onClick={() => playPauseCurrent()}>{playing ? <Pause className="w-7 h-7 m-auto"/> : <Play className="w-7 h-7 m-auto"/>}</button>
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block text-outer-space dark:text-white rounded-full transition duration-150 ease-in-out"
                            onClick={() => nextSong()}><Next className="w-7 h-7"/></button>
                    </div>

                    <ul className="mt-2 p-2">
                        {songs.map((song, id) => 
                            <li key={id} onClick={() => playByTitle(id)} id={`song${id}`}
                            className={`
                                flex
                                justify-between
                                items-center
                                py-2
                                px-4
                                my-1
                                rounded
                                hover:bg-boulder
                                hover:text-white
                                cursor-pointer
                                ${id === songId ? 'font-bold' : ''}
                            `}
                            >
                                <span>{song[0]}</span>
                                <span>
                                    {id === songId && playing ? <Vinyl className="w-6 h-6" /> : <Play className="w-3 h-3 mr-1.5" />}
                                </span>    
                            </li>
                        )}
                    </ul>
                </div>
                

            </div>
    );
};

export default AudioPlayer;