import { ReactComponent as Logo } from '../assets/svg/logo.svg';

function Landing({ verticalScreen }) {
  return (
    <div
      className={`
        top-0 h-screen bg-cover bg-fixed bg-center
        ${verticalScreen ? 'bg-photo-1' : 'bg-photo-2'}
      `}
      id="landing"
    >
      <div className="h-screen w-full bg-black/60 p-8 pt-20 backdrop-blur-sm sm:p-12 sm:pt-20 md:p-16 md:pt-20 lg:p-20 lg:pt-20">
        <div className="flex h-full flex-col items-center justify-center border-2 border-supernova/60">
          <Logo className="h-[10rem] fill-silver/30 sm:h-[15rem] md:h-[20rem] lg:h-[25rem]" />
          <div className="font-weigh-bold text-[2rem] text-silver/30 md:hidden">KSMicroband</div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
