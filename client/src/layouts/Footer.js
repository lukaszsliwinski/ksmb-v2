import { ReactComponent as Mail } from '../assets/svg/mail.svg';
import { ReactComponent as Facebook } from '../assets/svg/facebook.svg';
import { ReactComponent as Youtube } from '../assets/svg/youtube.svg';
import DownloadBtn from '../components/DownloadBtn';
import moment from 'moment';

function Footer({ verticalScreen, isMobile }) {
  const year = moment().year();

  return (
    <section
      className="mx-auto flex w-full flex-col justify-between bg-white pb-6 text-outer-space transition-colors dark:bg-outer-space dark:text-white h-1/3s"
      id="footer"
    >
      <div className="flex w-full flex-col items-center justify-center my-auto">
        <p className="mb-2 font-bold">znajdziesz nas na</p>
        <div className="flex items-start">
          <a
            href="https://www.facebook.com/ksmicroband"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mx-3 inline-block rounded bg-fb-btn px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md focus:shadow-lg focus:outline-none hover:shadow-lg"
          >
            <Facebook className="h-6 lg:h-8 w-6 lg:w-8" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCVo9xMX2P-y9wdHLdP29xqQ"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mx-3 inline-block rounded bg-yt-btn px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md focus:shadow-lg focus:outline-none hover:shadow-lg"
          >
            <Youtube className="h-6 lg:h-8 w-6 lg:w-8" />
          </a>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <p className="text-sm">&copy; 2021-{year} KSMICROBAND</p>
      </div>
    </section>
  );
}

export default Footer;
