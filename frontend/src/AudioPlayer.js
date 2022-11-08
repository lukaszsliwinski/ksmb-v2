import { useState, useRef, useEffect } from 'react';



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
        };
    };

    return (
            <>
                <ul>
                    {songs.map((song, id) => 
                        <li key={id} onClick={() => playByTitle(id)} id={`song${id}`}
                        className={`cursor-pointer ${id === songId ? 'font-bold' : ''}`}
                        >{song[0]}</li>
                    )}
                </ul>
                <audio ref={audio} src={`${songs[0][1]}`} preload="metadata" 
                    onEnded={() => handleEnd()}
                    onLoadedMetadata={e => setDuration(calculateTime(e.target.duration))}
                ></audio>

                <div>
                    <button onClick={() => previousSong()}>{'<prev>'}</button>
                    <button onClick={() => playPauseCurrent()}>&nbsp;{`${playing ? '<pause>' : '<play>'}`}&nbsp;</button>
                    <button onClick={() => nextSong()}>{'<next>'}</button>
                </div>
                <input className="w-full cursor-pointer" type="range" min="0" max="100" defaultValue="0" ref={progress} onInput={() => changeRangeValue()}/>
                <div>{currentTime} / {duration}</div>
            </>
    );
};

export default AudioPlayer;