import { useState, useEffect } from 'react';
import 'tw-elements';

import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as Mail } from './svg/mail.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';
import { ReactComponent as Youtube } from './svg/youtube.svg';

import kubaBio from './photos/kubaBio.jpg';
import lukaszBio from './photos/lukaszBio.jpg';
import microbandBio from './photos/microbandBio.jpg';

import DarkModeSwitch from './DarkModeSwitch';
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';
import './Website.css';

function Website() {
    const [darkMode, setDarkMode] = useState(false);
    const [windowTop, setWindowTop] = useState(true);

    const html = document.documentElement;
    
    useEffect(() => {
        html.classList.add('scroll-smooth');
    }, []);

    useEffect(() => {
        darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => window.scrollY === 0 ? setWindowTop(true) : setWindowTop(false);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [windowTop]);



    return (
        <div className="all-inside:transition-colors all-inside:ease-in-out all-inside:duration-200" id="main">
 
            <nav className={`fixed z-10 flex w-full h-16 px-5 ${windowTop ? 'bg-transparent' : 'bg-temp-dark/80 backdrop-blur-md'} ease-in-out duration-300`}>
                <div className="basis-1/3 flex items-center text-[1.8rem] text-temp-light">
                    <a className="nav-link text-temp-light" href="#main">KSMicroband</a>
                </div>
                <div className="basis-1/3 flex justify-center items-center h-full">
                    <ul className="flex flex-row space-x-6 list-style-none">
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#about">o nas</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#music">muzyka</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#concerts">koncerty</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#footer">kontakt</a>
                        </li>
                    </ul>
                </div>


                <div className="basis-1/3 flex justify-end items-center h-full">
                    <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode}/>
                </div>

            </nav>
            <div className="top-0 bg-fixed bg-center bg-photo-1 bg-100%">
                <div className="w-screen h-screen bg-black/60 backdrop-blur-sm p-20">
                    <div className="flex items-center justify-center border-4 border-temp-light/70 h-full">
                        <Logo className="fill-temp-light/70 h-[25rem]" />
                    </div>
                </div>
            </div>


            <section className="w-full h-full min-h-screen p-28 bg-temp-light dark:bg-temp-dark" id="about">

                    <div className="block mb-10 rounded-lg shadow-lg max-w-6xl bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                <img src={kubaBio} alt="img" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg slopedframe" />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-3 py-6 md:px-6">
                                    <h2 className="text-3xl font-bold mb-2 ">Kuba Kołodziejczyk</h2>
                                    <p className="font-semibold mb-4">skrzypce</p>
                                    <p className="text-justify text-gray-500 mb-6">
                                        Skrzypek zajmujący się muzyką klasyczną, rozrywkową oraz uczący rzemiosła. Gra od 7&nbsp;roku życia. 
                                        Na co dzień pracuje jako skrzypek w&nbsp;Filharmonii Śląskiej. Zagrał około 600&nbsp;koncertów na scenach Śląska 
                                        i&nbsp;reszty kraju, a&nbsp;także w&nbsp;Niemczech, Austrii, Włoszech, Hiszpanii oraz Japonii. Występował z&nbsp;licznymi 
                                        gwiazdami muzyki rozrywkowej, m.in.:&nbsp;Kuba Badach, Krzesimir Dębski, Waldemar Malicki, Leszek Możdzer, 
                                        Grzegorz Turnau i&nbsp;inni. Muzyka to dla niego podróż, odkrywanie nowych horyzontów i&nbsp;barw -&nbsp;takim właśnie 
                                        muzycznym podróżowaniem jest granie z&nbsp;Łukaszem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block ml-auto mb-10 rounded-lg shadow-lg max-w-6xl bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-3 py-6 md:px-6">
                                    <h2 className="text-3xl font-bold mb-2 ">Łukasz Śliwiński</h2>
                                    <p className="font-semibold mb-4">gitara</p>
                                    <p className="text-justify text-gray-500 mb-6">
                                        Gitarzysta samouk, rozpoczął swoją gitarową podróż w&nbsp;wieku 15&nbsp;lat. Doświadczenie sceniczne i&nbsp;studyjne 
                                        zdobywał w&nbsp;zespołach rockowych. Od kilku lat rozszerza spektrum zainteresowań czerpiąc z&nbsp;gatunków muzycznych 
                                        o&nbsp;różnej estetyce, kierując swoją uwagę głównie w&nbsp;stronę muzyki improwizowanej. Stawia na nieprzewidywalność, 
                                        spontaniczność i&nbsp;przestrzeń. Potrzebę muzycznej wolności zaspokaja grając w&nbsp;Microbandzie.
                                    </p>
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                <img src={lukaszBio} alt="img" className="w-full rounded-t-lg lg:rounded-tl-none lg:rounded-br-lg slopedframe2" />
                            </div>
                        </div>
                    </div>

                    <div className="block mb-10 rounded-lg shadow-lg max-w-6xl bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                <img src={microbandBio} alt="img" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg slopedframe" />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-3 py-6 md:px-6">
                                    <h2 className="text-3xl font-bold mb-2 ">Microband</h2>
                                    <p className="text-justify text-gray-500 mb-6">
                                        Duet KSMicroband gra autorską muzykę, która łączy korzenie rockowych oraz klasycznych dźwięków. Z&nbsp;połączenia różnych, 
                                        pozornie odmiennych temperamentów muzycznych, powstała nową jakość. Zespół nie wspomaga się sekcją basu i&nbsp;perkusji, 
                                        więc wszystkie warstwy brzmienia aranżuje i&nbsp;wykonuje samodzielnie - dla wzbogacenia brzmienia na koncertach wykorzystywany jest looper. 
                                        Element improwizacji oparty na źródłach muzyki folkowej i&nbsp;jazzowej jest również obecny. Oprócz bazowego zderzenia gitarowej muzyki 
                                        rockowej i&nbsp;klasycznego, śpiewnego brzmienia skrzypiec inspiracje przyszły ze świata muzyki folkowej, jazzowej, filmowej, bałkańskiej 
                                        i&nbsp;hebrajskiej. Materiał z&nbsp;improwizowanych sesji został uporządkowany w&nbsp;autorskie kompozycje instrumentalne. Wykorzystując czas pandemii 
                                        i&nbsp;niemożności koncertowania, muzycy zarejestrowali utwory we własnych domach.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


            </section>

            <div className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-2 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </div>

            <section className="flex w-full h-full min-h-screen p-28 bg-temp-light dark:bg-temp-dark" id="music">
                <div className="flex justify-center w-1/2">
                    <div className="block rounded-lg shadow-lg w-9/12 max-w-6xl bg-white">
                        <AudioPlayer />
                    </div>
                </div>
                <div className="flex justify-center w-1/2">
                    <div className="block rounded-lg shadow-lg w-9/12 max-w-6xl bg-white">
                        <VideoPlayer />
                    </div>
                </div>
                
                


            </section>
            <div className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-3 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </div>
            <section className="w-full h-full min-h-screen bg-temp-light dark:bg-temp-dark" id="concerts">
                <p className="text-temp-dark dark:text-temp-light">koncerty</p>
            </section>
            <div className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-4 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </div>


            <section className="flex flex-col justify-between w-full h-[34vh] pt-16 pb-4 bg-temp-light dark:bg-temp-dark" id="footer">
                <div className="flex">
                    <div className="flex justify-center w-full lg:w-1/3">

                        <div className="flex items-start">
                            <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                <Mail className="w-6 text-white" />
                            </div>

                            <div className="ml-6">
                                <p className="font-bold mb-1">kontakt w sprawie koncertów</p>
                                <p className="text-gray-500">ksmicroband@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full lg:w-1/3">
                        <p className="font-bold mb-1">dokumenty do pobrania</p>
                        <div className="flex flex-col">
                            <button type="button" className="inline-block px-6 py-2 my-1 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                oferta koncertowa
                            </button>
                            <button type="button" className="inline-block px-6 py-2 my-1 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                rider techniczny
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full lg:w-1/3">
                        <p className="font-bold mb-1">jesteśmy również na</p>
                        <div className="flex items-start">
                            <a href="https://www.facebook.com/ksmicroband" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light"  className="inline-block px-6 py-2.5 mx-2 bg-[#1877f2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCVo9xMX2P-y9wdHLdP29xqQ" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 mx-2 bg-[#ff0000] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center w-full">
                    <p>&copy; 2021-2022 KSMICROBAND</p>
                </div>
            </section>
        </div>
    );
}

export default Website;