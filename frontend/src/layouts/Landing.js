import { ReactComponent as Logo } from '../assets/svg/logo.svg';

function Landing() {
  return (
    <div className="top-0 bg-photo-1 bg-100% bg-fixed bg-center" id="landing">
      <div className="h-screen w-full bg-black/60 p-20 backdrop-blur-sm">
        <div className="flex h-full items-center justify-center border-2 border-supernova/60">
          <Logo className="h-[25rem] fill-silver/50" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
