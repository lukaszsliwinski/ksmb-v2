import Scrollspy from 'react-scrollspy';
import DarkModeSwitch from '../components/DarkModeSwitch';

function Navbar({ darkMode, setDarkMode, windowTop }) {
  return (
    <nav
      className={`
        fixed z-20 flex h-16 w-full justify-between px-2 duration-300 ease-in-out sm:px-5
        ${windowTop ? 'bg-transparent' : 'bg-outer-space/80 backdrop-blur-md'}
      `}
    >
      <div className="hidden basis-1/6 items-center text-3xl md:flex">
        <a className="nav-link text-white" href="#main">
          KSMicroband
        </a>
      </div>
      <div className="flex h-full items-center md:basis-2/3 md:justify-center">
        <Scrollspy
          className="flex space-x-2 sm:space-x-6"
          items={['landing', 'about', 'music', 'concerts', 'footer']}
          currentClassName="text-supernova hover:text-supernova"
          offset={-100}
        >
          {[
            ['', '#landing'],
            ['o nas', '#about'],
            ['muzyka', '#music'],
            ['koncerty', '#concerts'],
            ['linki', '#footer']
          ].map(([title, href]) => (
            <li
              key={href}
              className="text-md text-white first-of-type:hidden sm:text-xl md:text-2xl"
            >
              <a className="hover:text-silver" href={href}>
                {title}
              </a>
            </li>
          ))}
        </Scrollspy>
      </div>
      <div className="flex h-full items-center justify-end md:basis-1/6">
        <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} windowTop={windowTop} />
      </div>
    </nav>
  );
}

export default Navbar;
