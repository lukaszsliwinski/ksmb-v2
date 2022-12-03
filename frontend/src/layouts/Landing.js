import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { XyzTransition } from '@animxyz/react';

function Landing({ verticalScreen }) {
  return (
    <div
      className={`
        top-0 h-screen-mobile bg-cover bg-fixed bg-center
        ${verticalScreen ? 'bg-photo-1' : 'bg-photo-2'}
      `}
      id="landing"
    >
      <div className="h-screen-mobile w-full bg-black/60 p-8 pt-20 backdrop-blur-sm sm:p-8 sm:pt-20 md:p-12 md:pt-20 lg:p-16 lg:pt-20 xl:p-20 xl:pt-20">
        <div className="flex h-full flex-col items-center justify-center border-2 border-supernova/60">
          <XyzTransition xyz="fade small ease-out duration-8" appear>
            <Logo
              className={`
                fill-silver/30
                ${!verticalScreen ? 'h-5/12s' : 'w-5/12s'}
              `}
            />
          </XyzTransition>
          <div className="font-weigh-bold text-2xl text-silver/30 md:hidden">KSMicroband</div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
