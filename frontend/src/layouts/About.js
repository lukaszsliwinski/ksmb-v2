import { XyzTransition } from '@animxyz/react';

import kuba from '../assets/photos/kuba.jpg';
import lukasz from '../assets/photos/lukasz.jpg';
import microband from '../assets/photos/microband.jpg';

function About({ verticalScreen }) {
  return (
    <section
      className={`
        w-full bg-white px-6 transition-colors dark:bg-outer-space md:px-28
        ${verticalScreen ? 'pt-28' : 'min-h-screen py-28'}
      `}
      id="about"
    >
      <div className="container mx-auto text-center lg:text-left 2xl:max-w-screen-xl">
        <div className="grid items-center lg:grid-cols-3 xl:grid-cols-7">
          <XyzTransition
            xyz="fade left ease-in-out duration-6"
            appearVisible={{ threshold: .5, rootMargin: '0px' }}
          >
            <div className="mx-auto -mb-6 w-11/12 md:w-3/4 lg:mb-0 lg:w-full xl:col-span-2">
              <img
                src={kuba}
                className="mx-auto w-5/6 rounded-lg shadow-lg sm:w-2/3 lg:w-full"
                alt="kuba"
              />
            </div>
          </XyzTransition>
          <XyzTransition
            xyz="fade right ease-in-out duration-6"
            appearVisible={{ threshold: .5, rootMargin: '0px' }}
          >
            <div className="mb-14 lg:col-span-2 lg:mb-0 xl:col-span-5">
              <div className="mt-0 block select-text rounded-lg bg-silver/20 p-6 text-outer-space shadow-lg backdrop-blur-xl dark:text-white md:px-12 lg:-translate-x-6 xl:mt-32">
                <h2 className="mb-2 w-fit border-b-2 border-b-supernova text-xl font-bold">
                  Kuba Kołodziejczyk
                </h2>
                <p className="text-justify text-8 sm:text-9 leading-relaxed tracking-wide">
                  Skrzypek zajmujący się muzyką klasyczną, rozrywkową oraz uczący rzemiosła. Gra od
                  7&nbsp;roku życia. Na co dzień pracuje jako skrzypek w&nbsp;Filharmonii Śląskiej.
                  Zagrał około 600&nbsp;koncertów na scenach Śląska i&nbsp;reszty kraju, a&nbsp;także
                  w&nbsp;Niemczech, Austrii, Włoszech, Hiszpanii oraz Japonii. Występował
                  z&nbsp;licznymi gwiazdami muzyki rozrywkowej, m.in.:&nbsp;Kuba Badach, Krzesimir
                  Dębski, Waldemar Malicki, Leszek Możdzer, Grzegorz Turnau i&nbsp;inni. Muzyka to dla
                  niego podróż, odkrywanie nowych horyzontów i&nbsp;barw -&nbsp;takim właśnie
                  muzycznym podróżowaniem jest granie z&nbsp;Łukaszem.
                </p>
              </div>
            </div>
          </XyzTransition>
        </div>
      </div>

      <div className="container mx-auto text-center lg:text-left 2xl:max-w-screen-xl">
        <div className="grid grid-flow-row-dense items-center lg:grid-cols-3 xl:grid-cols-7">
          <XyzTransition
            xyz="fade right ease-in-out duration-6"
            appearVisible={{ threshold: .5, rootMargin: '0px' }}
          >
            <div className="mx-auto -mb-6 block w-11/12 md:w-3/4 lg:mb-0 lg:hidden lg:w-full xl:col-span-2">
              <img
                src={lukasz}
                className="mx-auto w-5/6 rounded-lg shadow-lg sm:w-2/3 lg:w-full"
                alt="lukasz"
              />
            </div>
          </XyzTransition>
          <XyzTransition
            xyz="fade left ease-in-out duration-6"
            appearVisible={{ threshold: .5, rootMargin: '0px' }}
          >
            <div className="mb-14 lg:col-span-2 lg:mb-0 xl:col-span-5">
              <div className="mt-0 block select-text rounded-lg bg-silver/20 p-6 shadow-lg backdrop-blur-xl dark:text-white md:px-12 lg:translate-x-6 xl:mt-32">
                <h2 className="mb-2 w-fit border-b-2 border-b-supernova text-xl font-bold">
                  Łukasz Śliwiński
                </h2>
                <p className="text-justify text-8 sm:text-9 leading-relaxed tracking-wide">
                  Gitarzysta samouk, rozpoczął swoją gitarową podróż w&nbsp;wieku 15&nbsp;lat.
                  Doświadczenie sceniczne i&nbsp;studyjne zdobywał w&nbsp;zespołach rockowych. Od
                  kilku lat rozszerza spektrum zainteresowań czerpiąc z&nbsp;gatunków muzycznych
                  o&nbsp;różnej estetyce, kierując swoją uwagę głównie w&nbsp;stronę muzyki
                  improwizowanej. Stawia na nieprzewidywalność, spontaniczność i&nbsp;przestrzeń.
                  Potrzebę muzycznej wolności zaspokaja grając w&nbsp;Microbandzie.
                </p>
              </div>
            </div>
          </XyzTransition>
          <XyzTransition
            xyz="fade right ease-in-out duration-6"
            appearVisible={{ threshold: .5, rootMargin: '0px' }}
          >
            <div className="mx-auto -mb-6 hidden w-11/12 md:w-3/4 lg:mb-0 lg:block lg:w-full xl:col-span-2">
              <img
                src={lukasz}
                className="w-full rounded-lg shadow-lg"
                alt="lukasz"
              />
            </div>
          </XyzTransition>
        </div>
      </div>

      <div className="container mx-auto text-center lg:text-left 2xl:max-w-screen-xl">
        <div className="grid items-center lg:grid-cols-3 xl:grid-cols-7">
          <XyzTransition
            xyz="fade left ease-in-out duration-6"
            appearVisible={{ threshold: .5, rootMargin: '0px' }}
          >
            <div className="mx-auto -mb-6 w-11/12 md:w-3/4 lg:mb-0 lg:w-full xl:col-span-2">
              <img
                src={microband}
                className="mx-auto w-5/6 rounded-lg shadow-lg sm:w-2/3 lg:w-full"
                alt="microband"
              />
            </div>
          </XyzTransition>
          <XyzTransition
            xyz="fade right ease-in-out duration-6"
            appearVisible={{ threshold: .5, rootMargin: '0px' }}
          >
            <div className="lg:col-span-2 lg:mb-0 xl:col-span-5">
              <div className="mt-0 block select-text rounded-lg bg-silver/20 p-6 text-outer-space shadow-lg backdrop-blur-xl dark:text-white md:px-12 lg:-translate-x-6 xl:mt-32">
                <h2 className="mb-2 w-fit border-b-2 border-b-supernova text-xl font-bold">
                  Microband
                </h2>
                <p className="text-justify text-8 sm:text-9 leading-relaxed tracking-wide">
                  Duet KSMicroband gra autorską muzykę, która łączy korzenie rockowych oraz
                  klasycznych dźwięków. Z&nbsp;połączenia różnych, pozornie odmiennych temperamentów
                  muzycznych, powstała nową jakość. Zespół nie wspomaga się sekcją basu
                  i&nbsp;perkusji, więc wszystkie warstwy brzmienia aranżuje i&nbsp;wykonuje
                  samodzielnie - dla wzbogacenia brzmienia na koncertach wykorzystywany jest looper.
                  Element improwizacji oparty na źródłach muzyki folkowej i&nbsp;jazzowej jest również
                  obecny. Oprócz bazowego zderzenia gitarowej muzyki rockowej i&nbsp;klasycznego,
                  śpiewnego brzmienia skrzypiec inspiracje przyszły ze świata muzyki folkowej,
                  jazzowej, filmowej, bałkańskiej i&nbsp;hebrajskiej. Materiał z&nbsp;improwizowanych
                  sesji został uporządkowany w&nbsp;autorskie kompozycje instrumentalne. Wykorzystując
                  czas pandemii i&nbsp;niemożności koncertowania, muzycy zarejestrowali utwory we
                  własnych domach.
                </p>
              </div>
            </div>
          </XyzTransition>
        </div>
      </div>
    </section>
  );
}

export default About;
