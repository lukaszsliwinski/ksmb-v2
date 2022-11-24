import Scrollspy from 'react-scrollspy';
import DarkModeSwitch from '../components/DarkModeSwitch';

function Navbar({ darkMode, setDarkMode, windowTop }) {
  return (
    <nav
      className={`
        fixed z-20 flex h-16 w-full px-5 duration-300 ease-in-out
        ${windowTop ? 'bg-transparent' : 'bg-outer-space/80 backdrop-blur-md'}
      `}
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
  );
}

export default Navbar;
