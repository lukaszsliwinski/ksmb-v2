import { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import 'tw-elements';

import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as Events } from './svg/events.svg';
import { ReactComponent as Mail } from './svg/mail.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';
import { ReactComponent as Youtube } from './svg/youtube.svg';

import kuba from './photos/kuba.jpg';
import lukasz from './photos/lukasz.jpg';
import microband from './photos/microband.jpg';
import concert from './photos/concert.jpg';

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
 
            <nav className={`fixed z-20 flex w-full h-16 px-5 ${windowTop ? 'bg-transparent' : 'bg-outer-space/80 backdrop-blur-md'} ease-in-out duration-300`}>
                <div className="basis-1/3 flex items-center text-[1.8rem]">
                    <a className="nav-link text-white" href="#main">KSMicroband</a>
                </div>
                <div className="basis-1/3 flex justify-center items-center h-full">
                    <Scrollspy
                        className="flex space-x-6"
                        items={ ['landing', 'about', 'music', 'concerts', 'footer'] }
                        currentClassName="text-supernova"
                        offset={ -300 } // dobrać połowę wysokości strony
                    >
                        {[
                            ['', '#landing'],
                            ['o nas', '#about'],
                            ['muzyka', '#music'],
                            ['koncerty', '#concerts'],
                            ['kontakt', '#footer']
                        ].map(([title, href]) =>
                            <li className="first-of-type:hidden text-white hover:text-silver text-[1.8rem]">
                                <a href={href}>{title}</a>
                            </li>)}
                    </Scrollspy>
                </div>
                <div className="basis-1/3 flex justify-end items-center h-full">
                    <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} windowTop={windowTop}/>
                </div>

            </nav>
            <div className="top-0 bg-fixed bg-center bg-photo-1 bg-100%" id="landing">
                <div className="w-full h-screen bg-black/60 backdrop-blur-sm p-20">
                    <div className="flex items-center justify-center border-2 border-supernova/60 h-full">
                        <Logo className="fill-silver/50 h-[25rem]" />
                    </div>
                </div>
            </div>


            <section className="w-full h-full min-h-screen p-28 bg-white dark:bg-outer-space" id="about">


                    <div className="container mx-auto 2xl:max-w-screen-xl text-center lg:text-left">
                        <div className="grid lg:grid-cols-3 xl:grid-cols-7 items-center">
                            <div className="xl:col-span-2 mx-auto -mb-6 w-11/12 md:w-3/4 lg:mb-0 lg:w-full">
                                <img src={kuba} className="w-full rounded-lg shadow-lg" alt="bio photo" />
                            </div>

                            <div className="lg:col-span-2 xl:col-span-5 mb-14 lg:mb-0">
                                <div className="block xl:mt-32 mt-0 rounded-lg shadow-lg p-6 md:px-12 lg:-translate-x-6 bg-silver/20 backdrop-blur-xl text-outer-space dark:text-white">
                                    <h2 className="w-fit text-xl font-bold mb-2 border-b-2 border-b-supernova">Kuba Kołodziejczyk</h2>
                                    <p className="text-[.9rem] text-justify mb-0">
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

                    <div className="container mx-auto 2xl:max-w-screen-xl text-center lg:text-left">
                        <div className="grid grid-flow-row-dense lg:grid-cols-3 xl:grid-cols-7 items-center">
                            <div className="block lg:hidden xl:col-span-2 mx-auto -mb-6 w-11/12 md:w-3/4 lg:mb-0 lg:w-full">
                                <img src={lukasz} className="w-full rounded-lg shadow-lg" alt="bio photo" />
                            </div>
                            <div className="lg:col-span-2 xl:col-span-5 mb-14 lg:mb-0">
                                <div className="block xl:mt-32 mt-0 rounded-lg shadow-lg p-6 md:px-12 lg:translate-x-6 bg-silver/20 backdrop-blur-xl dark:text-white">
                                    <h2 className="w-fit text-xl font-bold mb-2 border-b-2 border-b-supernova">Łukasz Śliwiński</h2>
                                    <p className="text-[.9rem] text-justify mb-0">
                                        Gitarzysta samouk, rozpoczął swoją gitarową podróż w&nbsp;wieku 15&nbsp;lat. Doświadczenie sceniczne i&nbsp;studyjne 
                                        zdobywał w&nbsp;zespołach rockowych. Od kilku lat rozszerza spektrum zainteresowań czerpiąc z&nbsp;gatunków muzycznych 
                                        o&nbsp;różnej estetyce, kierując swoją uwagę głównie w&nbsp;stronę muzyki improwizowanej. Stawia na nieprzewidywalność, 
                                        spontaniczność i&nbsp;przestrzeń. Potrzebę muzycznej wolności zaspokaja grając w&nbsp;Microbandzie.
                                    </p>
                                </div>
                            </div>
                            <div className="hidden lg:block xl:col-span-2 mx-auto -mb-6 w-11/12 md:w-3/4 lg:mb-0 lg:w-full">
                                <img src={lukasz} className="w-full rounded-lg shadow-lg" alt="bio photo" />
                            </div>


                        </div>
                    </div>

                    <div className="container mx-auto 2xl:max-w-screen-xl text-center lg:text-left">
                        <div className="grid lg:grid-cols-3 xl:grid-cols-7 items-center">
                            <div className="xl:col-span-2 mx-auto -mb-6 w-11/12 md:w-3/4 lg:mb-0 lg:w-full">
                                <img src={microband} className="w-full rounded-lg shadow-lg" alt="bio photo" />
                            </div>

                            <div className="lg:col-span-2 xl:col-span-5 mb-14 lg:mb-0">
                                <div className="block xl:mt-32 mt-0 rounded-lg shadow-lg p-6 md:px-12 lg:-translate-x-6 bg-silver/20 backdrop-blur-xl text-outer-space dark:text-white">
                                    <h2 className="w-fit text-xl font-bold mb-2 border-b-2 border-b-supernova">Microband</h2>
                                    <p className="text-[.9rem] text-justify ">
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
                <div className="w-full h-full bg-black/60"></div>
            </div>

            <section className="flex w-full h-full min-h-screen p-28 bg-white dark:bg-outer-space" id="music">
                <div className="flex justify-center w-1/2">
                    <div className="w-9/12 max-w-6xl">
                        <AudioPlayer />
                    </div>
                </div>
                <div className="flex justify-center w-1/2">
                <div className="w-9/12 max-w-6xl">
                        <VideoPlayer />
                    </div>
                </div>
                
                


            </section>
            <div className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-3 bg-100%">
                <div className="w-full h-full bg-black/60"></div>
            </div>


            <section className="w-full h-full min-h-screen py-28 px-16 xl:px-28 bg-white dark:bg-outer-space" id="concerts">

                <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                        <div className="flex lg:py-12">
                        <img src={concert} className="z-10 w-full md:ml-12 rounded-lg shadow-lg"
                            id="cta-img-nml-50" alt="concert photo" />
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                        <div className="bg-silver/20 text-outer-space dark:text-white h-full rounded-lg shadow-lg p-6 lg:pl-12 flex items-center text-center lg:text-left">
                            <div className="lg:pl-12">
                                <h2 className="w-fit text-3xl font-bold mb-6 border-b-2 border-b-supernova">Microband na żywo</h2>
                                <p className="mb-6 pb-2 lg:pb-0 text-[.9rem] text-justify">
                                Repertuar duetu tworzą kompozycje autorskie. Na przestrzeni każdego utworu łączą się
                                motywy muzyczne inspirowane różnymi stylami. W&nbsp;repertuarze znajdują się utwory
                                energiczne, sprawdzające się zarówno na początku jak i&nbsp;na końcu występu, inspirowane muzyką rockową, bałkańskimi rytmami czy hiszpańskim
                                folklorem. Dopełnieniem są utwory spokojniejsze, gdzie folkowa żywiołowość łączy się z&nbsp;amerykańską psychodelią i&nbsp;bluesem. Koncert jest częściowo
                                improwizowany dlatego każdy brzmi nieco inaczej. Oprócz koncertu autorskiego zespół oferuje połączenie wykonania muzyki na żywo z&nbsp;wernisażem malarstwa, grafiki,
                                fotografii czy innych działań artystycznych. Muzyka KSMicroband w&nbsp;zamierzeniu ma być
                                artystycznie kolorowa, z&nbsp;odniesieniami do różnych przestrzeni artystycznych i&nbsp;duchowych.
                                Technicznie melodyjna i&nbsp;jednocześnie ambitna, o&nbsp;ciekawej strukturze. To wszystko wskazuje na
                                możliwość łączenia jej z&nbsp;innymi działaniami artystycznymi dla jeszcze ciekawszego efektu.
                                </p>
                                <div className="flex justify-center">
                                    <a href="https://www.facebook.com/KSMicroband/events" target="_blank" rel="noopener noreferrer" role="button" className="flex items-end px-6 py-2 my-1 border-2 border-outer-space dark:border-white text-outer-space dark:text-white font-medium text-xs leading-tight uppercase rounded hover:border-supernova hover:text-supernova dark:hover:border-supernova dark:hover:text-supernova focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                        najbliższe koncerty <Events className="inline-block ml-1 w-4 h-4" />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-4 bg-100%">
                <div className="w-full h-full bg-black/60"></div>
            </div>


            <section className="flex flex-col justify-between w-full h-[34vh] pt-16 pb-4 bg-white dark:bg-outer-space text-outer-space dark:text-white" id="footer">
                <div className="flex">
                    <div className="flex justify-center w-full lg:w-1/3">

                        <div className="flex items-start">
                            <div className="p-4 bg-supernova rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                <Mail className="w-6 text-white dark:text-outer-space" />
                            </div>

                            <div className="ml-6">
                                <p className="font-bold mb-1">kontakt w sprawie koncertów</p>
                                <p className="text-outer-space/60 dark:text-white/60">ksmicroband@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full lg:w-1/3">
                        <p className="font-bold mb-1">dokumenty do pobrania</p>
                        <div className="flex flex-col">
                            <button type="button" className="inline-block px-6 py-2 my-1 border-2 border-outer-space dark:border-white text-outer-space dark:text-white font-medium text-xs leading-tight uppercase rounded 
                                hover:border-supernova hover:text-supernova dark:hover:border-supernova dark:hover:text-supernova focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                oferta koncertowa
                            </button>
                            <button type="button" className="inline-block px-6 py-2 my-1 border-2 border-outer-space dark:border-white text-outer-space dark:text-white font-medium text-xs leading-tight uppercase rounded 
                                hover:border-supernova hover:text-supernova dark:hover:border-supernova dark:hover:text-supernova focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
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