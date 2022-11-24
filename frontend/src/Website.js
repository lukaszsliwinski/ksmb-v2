import { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import 'tw-elements';
import './Website.css';

// import svg
import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as Events } from './svg/events.svg';
import { ReactComponent as Mail } from './svg/mail.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';
import { ReactComponent as Youtube } from './svg/youtube.svg';

// import photos
import kuba from './photos/kuba.jpg';
import lukasz from './photos/lukasz.jpg';
import microband from './photos/microband.jpg';
import concert from './photos/concert.jpg';

// import components
import DarkModeSwitch from './DarkModeSwitch';
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

function Website() {
  // state
  const [darkMode, setDarkMode] = useState(false);
  const [windowTop, setWindowTop] = useState(true);

  // ref to html element
  const html = document.documentElement;

  useEffect(() => {
    html.classList.add('scroll-smooth', 'scrollbar-thin', 'scrollbar-thumb-buttered-rum');
  }, []);

  useEffect(() => {
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => (window.scrollY === 0 ? setWindowTop(true) : setWindowTop(false));
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowTop]);

  return (
    <div className="select-none" id="main">
      <nav
        className={`fixed z-20 flex h-16 w-full px-5 ${
          windowTop ? 'bg-transparent' : 'bg-outer-space/80 backdrop-blur-md'
        } duration-300 ease-in-out`}
      >
        <div className="flex basis-1/3 items-center text-[1.8rem]">
          <a className="nav-link text-white" href="#main">
            KSMicroband
          </a>
        </div>
        <div className="flex h-full basis-1/3 items-center justify-center">
          <Scrollspy
            className="flex space-x-6"
            items={['landing', 'about', 'music', 'concerts', 'footer']}
            currentClassName="text-supernova"
            offset={-100}
          >
            {[
              ['', '#landing'],
              ['o nas', '#about'],
              ['muzyka', '#music'],
              ['koncerty', '#concerts'],
              ['kontakt', '#footer']
            ].map(([title, href]) => (
              <li className="text-[1.8rem] text-white first-of-type:hidden hover:text-silver">
                <a href={href}>{title}</a>
              </li>
            ))}
          </Scrollspy>
        </div>
        <div className="flex h-full basis-1/3 items-center justify-end">
          <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} windowTop={windowTop} />
        </div>
      </nav>
      <div className="top-0 bg-photo-1 bg-100% bg-fixed bg-center" id="landing">
        <div className="h-screen w-full bg-black/60 p-20 backdrop-blur-sm">
          <div className="flex h-full items-center justify-center border-2 border-supernova/60">
            <Logo className="h-[25rem] fill-silver/50" />
          </div>
        </div>
      </div>

      <section className="h-full min-h-screen w-full bg-white p-28 dark:bg-outer-space" id="about">
        <div className="container mx-auto text-center lg:text-left 2xl:max-w-screen-xl">
          <div className="grid items-center lg:grid-cols-3 xl:grid-cols-7">
            <div className="mx-auto -mb-6 w-11/12 md:w-3/4 lg:mb-0 lg:w-full xl:col-span-2">
              <img src={kuba} className="w-full rounded-lg shadow-lg" alt="bio photo" />
            </div>

            <div className="mb-14 lg:col-span-2 lg:mb-0 xl:col-span-5">
              <div className="mt-0 block select-text rounded-lg bg-silver/20 p-6 text-outer-space shadow-lg backdrop-blur-xl dark:text-white md:px-12 lg:-translate-x-6 xl:mt-32">
                <h2 className="mb-2 w-fit border-b-2 border-b-supernova text-xl font-bold">
                  Kuba Kołodziejczyk
                </h2>
                <p className="mb-0 text-justify text-[.9rem]">
                  Skrzypek zajmujący się muzyką klasyczną, rozrywkową oraz uczący rzemiosła. Gra od
                  7&nbsp;roku życia. Na co dzień pracuje jako skrzypek w&nbsp;Filharmonii Śląskiej.
                  Zagrał około 600&nbsp;koncertów na scenach Śląska i&nbsp;reszty kraju,
                  a&nbsp;także w&nbsp;Niemczech, Austrii, Włoszech, Hiszpanii oraz Japonii.
                  Występował z&nbsp;licznymi gwiazdami muzyki rozrywkowej, m.in.:&nbsp;Kuba Badach,
                  Krzesimir Dębski, Waldemar Malicki, Leszek Możdzer, Grzegorz Turnau i&nbsp;inni.
                  Muzyka to dla niego podróż, odkrywanie nowych horyzontów i&nbsp;barw -&nbsp;takim
                  właśnie muzycznym podróżowaniem jest granie z&nbsp;Łukaszem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center lg:text-left 2xl:max-w-screen-xl">
          <div className="grid grid-flow-row-dense items-center lg:grid-cols-3 xl:grid-cols-7">
            <div className="mx-auto -mb-6 block w-11/12 md:w-3/4 lg:mb-0 lg:hidden lg:w-full xl:col-span-2">
              <img src={lukasz} className="w-full rounded-lg shadow-lg" alt="bio photo" />
            </div>
            <div className="mb-14 lg:col-span-2 lg:mb-0 xl:col-span-5">
              <div className="mt-0 block select-text rounded-lg bg-silver/20 p-6 shadow-lg backdrop-blur-xl dark:text-white md:px-12 lg:translate-x-6 xl:mt-32">
                <h2 className="mb-2 w-fit border-b-2 border-b-supernova text-xl font-bold">
                  Łukasz Śliwiński
                </h2>
                <p className="mb-0 text-justify text-[.9rem]">
                  Gitarzysta samouk, rozpoczął swoją gitarową podróż w&nbsp;wieku 15&nbsp;lat.
                  Doświadczenie sceniczne i&nbsp;studyjne zdobywał w&nbsp;zespołach rockowych. Od
                  kilku lat rozszerza spektrum zainteresowań czerpiąc z&nbsp;gatunków muzycznych
                  o&nbsp;różnej estetyce, kierując swoją uwagę głównie w&nbsp;stronę muzyki
                  improwizowanej. Stawia na nieprzewidywalność, spontaniczność i&nbsp;przestrzeń.
                  Potrzebę muzycznej wolności zaspokaja grając w&nbsp;Microbandzie.
                </p>
              </div>
            </div>
            <div className="mx-auto -mb-6 hidden w-11/12 md:w-3/4 lg:mb-0 lg:block lg:w-full xl:col-span-2">
              <img src={lukasz} className="w-full rounded-lg shadow-lg" alt="bio photo" />
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center lg:text-left 2xl:max-w-screen-xl">
          <div className="grid items-center lg:grid-cols-3 xl:grid-cols-7">
            <div className="mx-auto -mb-6 w-11/12 md:w-3/4 lg:mb-0 lg:w-full xl:col-span-2">
              <img src={microband} className="w-full rounded-lg shadow-lg" alt="bio photo" />
            </div>

            <div className="mb-14 lg:col-span-2 lg:mb-0 xl:col-span-5">
              <div className="mt-0 block select-text rounded-lg bg-silver/20 p-6 text-outer-space shadow-lg backdrop-blur-xl dark:text-white md:px-12 lg:-translate-x-6 xl:mt-32">
                <h2 className="mb-2 w-fit border-b-2 border-b-supernova text-xl font-bold">
                  Microband
                </h2>
                <p className="text-justify text-[.9rem] ">
                  Duet KSMicroband gra autorską muzykę, która łączy korzenie rockowych oraz
                  klasycznych dźwięków. Z&nbsp;połączenia różnych, pozornie odmiennych temperamentów
                  muzycznych, powstała nową jakość. Zespół nie wspomaga się sekcją basu
                  i&nbsp;perkusji, więc wszystkie warstwy brzmienia aranżuje i&nbsp;wykonuje
                  samodzielnie - dla wzbogacenia brzmienia na koncertach wykorzystywany jest looper.
                  Element improwizacji oparty na źródłach muzyki folkowej i&nbsp;jazzowej jest
                  również obecny. Oprócz bazowego zderzenia gitarowej muzyki rockowej
                  i&nbsp;klasycznego, śpiewnego brzmienia skrzypiec inspiracje przyszły ze świata
                  muzyki folkowej, jazzowej, filmowej, bałkańskiej i&nbsp;hebrajskiej. Materiał
                  z&nbsp;improwizowanych sesji został uporządkowany w&nbsp;autorskie kompozycje
                  instrumentalne. Wykorzystując czas pandemii i&nbsp;niemożności koncertowania,
                  muzycy zarejestrowali utwory we własnych domach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="m-auto flex h-[66vh] items-center justify-center bg-photo-2 bg-100% bg-fixed bg-center">
        <div className="h-full w-full bg-black/60"></div>
      </div>

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
      <div className="m-auto flex h-[66vh] items-center justify-center bg-photo-3 bg-100% bg-fixed bg-center">
        <div className="h-full w-full bg-black/60"></div>
      </div>

      <section
        className="h-full min-h-screen w-full bg-white py-28 px-16 dark:bg-outer-space xl:px-28"
        id="concerts"
      >
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src={concert}
                className="z-10 w-full rounded-lg shadow-lg md:ml-12"
                id="cta-img-nml-50"
                alt="concert photo"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-silver/20 p-6 text-center text-outer-space shadow-lg dark:text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-6 w-fit select-text border-b-2 border-b-supernova text-3xl font-bold">
                  Microband na żywo
                </h2>
                <p className="mb-6 select-text pb-2 text-justify text-[.9rem] lg:pb-0">
                  Repertuar duetu tworzą kompozycje autorskie. Na przestrzeni każdego utworu łączą
                  się motywy muzyczne inspirowane różnymi stylami. W&nbsp;repertuarze znajdują się
                  utwory energiczne, sprawdzające się zarówno na początku jak i&nbsp;na końcu
                  występu, inspirowane muzyką rockową, bałkańskimi rytmami czy hiszpańskim
                  folklorem. Dopełnieniem są utwory spokojniejsze, gdzie folkowa żywiołowość łączy
                  się z&nbsp;amerykańską psychodelią i&nbsp;bluesem. Koncert jest częściowo
                  improwizowany dlatego każdy brzmi nieco inaczej. Oprócz koncertu autorskiego
                  zespół oferuje połączenie wykonania muzyki na żywo z&nbsp;wernisażem malarstwa,
                  grafiki, fotografii czy innych działań artystycznych. Muzyka KSMicroband
                  w&nbsp;zamierzeniu ma być artystycznie kolorowa, z&nbsp;odniesieniami do różnych
                  przestrzeni artystycznych i&nbsp;duchowych. Technicznie melodyjna
                  i&nbsp;jednocześnie ambitna, o&nbsp;ciekawej strukturze. To wszystko wskazuje na
                  możliwość łączenia jej z&nbsp;innymi działaniami artystycznymi dla jeszcze
                  ciekawszego efektu.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.facebook.com/KSMicroband/events"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    className="my-1 flex items-end rounded border-2 border-outer-space px-6 py-2 text-xs font-medium uppercase leading-tight text-outer-space transition duration-150 ease-in-out focus:outline-none focus:ring-0 hover:border-supernova hover:text-supernova dark:border-white dark:text-white dark:hover:border-supernova dark:hover:text-supernova"
                  >
                    najbliższe koncerty <Events className="ml-1 inline-block h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="m-auto flex h-[66vh] items-center justify-center bg-photo-4 bg-100% bg-fixed bg-center">
        <div className="h-full w-full bg-black/60"></div>
      </div>

      <section
        className="flex h-[34vh] w-full flex-col justify-between bg-white pt-16 pb-4 text-outer-space dark:bg-outer-space dark:text-white"
        id="footer"
      >
        <div className="flex">
          <div className="flex w-full justify-center lg:w-1/3">
            <div className="flex items-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-supernova p-4 shadow-md">
                <Mail className="w-6 text-white dark:text-outer-space" />
              </div>

              <div className="ml-6">
                <p className="mb-1 font-bold">kontakt w sprawie koncertów</p>
                <p className="select-text text-outer-space/60 dark:text-white/60">
                  ksmicroband@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-start lg:w-1/3">
            <p className="mb-1 font-bold">dokumenty do pobrania</p>
            <div className="flex flex-col">
              <button
                type="button"
                className="my-1 inline-block rounded border-2 border-outer-space px-6 py-2 text-xs font-medium uppercase leading-tight text-outer-space transition duration-150 ease-in-out focus:outline-none focus:ring-0 hover:border-supernova hover:text-supernova dark:border-white dark:text-white dark:hover:border-supernova dark:hover:text-supernova"
              >
                oferta koncertowa
              </button>
              <button
                type="button"
                className="my-1 inline-block rounded border-2 border-outer-space px-6 py-2 text-xs font-medium uppercase leading-tight text-outer-space transition duration-150 ease-in-out focus:outline-none focus:ring-0 hover:border-supernova hover:text-supernova dark:border-white dark:text-white dark:hover:border-supernova dark:hover:text-supernova"
              >
                rider techniczny
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-start lg:w-1/3">
            <p className="mb-1 font-bold">jesteśmy również na</p>
            <div className="flex items-start">
              <a
                href="https://www.facebook.com/ksmicroband"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="mx-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md focus:shadow-lg focus:outline-none hover:shadow-lg"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCVo9xMX2P-y9wdHLdP29xqQ"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="mx-2 inline-block rounded bg-[#ff0000] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md focus:shadow-lg focus:outline-none hover:shadow-lg"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <p>&copy; 2021-2022 KSMICROBAND</p>
        </div>
      </section>
    </div>
  );
}

export default Website;
