import { ReactComponent as Events } from '../assets/svg/events.svg';
import concert from '../assets/photos/concert.jpg';

function Concerts() {
  return (
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
                  className="
                    my-1 flex items-end rounded border-2 border-outer-space px-6 py-2 text-xs font-medium uppercase leading-tight text-outer-space transition duration-150 ease-in-out
                    focus:outline-none focus:ring-0 hover:border-supernova hover:text-supernova dark:border-white dark:text-white dark:hover:border-supernova dark:hover:text-supernova"
                >
                  najbliższe koncerty <Events className="ml-1 inline-block h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Concerts;
