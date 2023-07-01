import { ReactComponent as MoonIcon } from '../assets/svg/moon.svg';
import { ReactComponent as SunIcon } from '../assets/svg/sun.svg';

function DarkModeSwitch({ darkMode, setDarkMode, windowTop }) {
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      <div
        className={`
          relative mx-2 h-[23.5px] w-[2.8rem] cursor-pointer rounded-[12px] border border-white bg-transparent p-0.5 sm:h-8 sm:w-[3.75rem] sm:rounded-[16px] sm:p-1
          dark:border-0 dark:bg-white
          before:absolute before:z-[2] before:block before:h-[18px] before:w-[18px] before:translate-x-0 before:rounded-[10px] before:bg-white before:transition-transform before:duration-100 before:ease-linear before:content-[''] before:sm:h-[1.375rem] before:sm:w-[1.375rem] before:sm:rounded-[12px]
          before:dark:h-[1.2rem] before:dark:w-[1.2rem] before:dark:rounded-[10px] before:dark:sm:h-[1.5rem] before:dark:sm:w-[1.5rem] before:dark:sm:rounded-[12px]
          ${windowTop ? 'before:dark:bg-black' : 'before:dark:bg-outer-space'}
          ${darkMode ? 'before:translate-x-[1.375rem] before:sm:translate-x-7' : ''}
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
