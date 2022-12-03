import { ReactComponent as Mail } from '../assets/svg/mail.svg';
import { ReactComponent as Facebook } from '../assets/svg/facebook.svg';
import { ReactComponent as Youtube } from '../assets/svg/youtube.svg';
import DownloadBtn from '../components/DownloadBtn';

function Footer({ verticalScreen }) {
  return (
    <section
      className={`
        flex mx-auto w-full max-w-7xl flex-col justify-between bg-white pb-4 text-outer-space transition-colors dark:bg-outer-space dark:text-white
        ${verticalScreen ? 'min-h-screen pt-28' : 'lg:h-1/3s pt-16'}
      `}
      id="footer"
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full justify-center lg:w-1/3 mb-16 md:mb-0">
          <div className="flex items-start">
            <div className="flex mx-3 h-14 w-14 items-center justify-center rounded-md bg-supernova p-4 shadow-md">
              <Mail className="w-6 text-white dark:text-outer-space" />
            </div>

            <div className="ml-3">
              <p className="mb-1 font-bold">adres kontakowy</p>
              <p className="select-text text-outer-space/60 dark:text-white/60">
                ksmicroband@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-start lg:w-1/3 mb-16 md:mb-0">
          <p className="mb-1 font-bold">dokumenty do pobrania</p>
          <div className="flex flex-col">
            <DownloadBtn label="oferta koncertowa" file="oferta" download="ksmicroband_oferta_koncertowa" />
            <DownloadBtn label="rider techniczny" file="rider" download="ksmicroband_rider_techniczny" />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-start lg:w-1/3 mb-16 md:mb-0">
          <p className="mb-1 font-bold">jesteśmy również na</p>
          <div className="flex items-start">
            <a
              href="https://www.facebook.com/ksmicroband"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="mx-2 inline-block rounded bg-fb-btn px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md focus:shadow-lg focus:outline-none hover:shadow-lg"
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
              className="mx-2 inline-block rounded bg-yt-btn px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md focus:shadow-lg focus:outline-none hover:shadow-lg"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex mt-10 mb-2 w-full justify-center">
        <p className="text-sm">&copy; 2021-2022 KSMICROBAND</p>
      </div>
    </section>
  );
}

export default Footer;
