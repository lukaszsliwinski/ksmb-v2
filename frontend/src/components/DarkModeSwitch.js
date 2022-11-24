import { ReactComponent as MoonIcon } from '../assets/svg/moon.svg';
import { ReactComponent as SunIcon } from '../assets/svg/sun.svg';

function DarkModeSwitch({ darkMode, setDarkMode, windowTop }) {
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      <div
        className={`
          relative h-8 w-[3.75rem] cursor-pointer rounded-[16px] border border-white bg-transparent p-1 dark:border-0 dark:bg-white
          before:block before:h-[1.375rem] before:w-[1.375rem] before:rounded-[12px] before:bg-white before:content-[''] before:absolute before:z-[2] before:translate-x-0 before:transition-transform before:duration-100 before:ease-linear
          dark:before:h-6 dark:before:w-6
          ${windowTop ? 'before:dark:bg-black' : 'before:dark:bg-outer-space'} ${darkMode ? 'before:translate-x-7' : ''}
        `}
        >
        <div className="flex h-full items-center justify-between">
          <SunIcon className={`${windowTop ? 'fill-black' : 'fill-outer-space'} z-0 h-6 w-6`} />
          <MoonIcon className="z-0 h-6 w-6 fill-white" />
        </div>
      </div>
    </div>
  );
}

export default DarkModeSwitch;
