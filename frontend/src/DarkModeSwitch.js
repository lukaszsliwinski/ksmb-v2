import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as SunIcon } from './sun.svg';

function DarkModeSwitch({ darkMode, setDarkMode }) {
    return (
        <div onClick={() => setDarkMode(!darkMode)}>
            <div className={`
                w-[3.75rem] h-8 bg-temp-dark dark:bg-temp-light dark:border-0 rounded-[16px] p-1 relative cursor-pointer
                before:content-[''] before:block before:h-6 before:w-6 before:rounded-[12px]
                before:bg-temp-light before:dark:bg-temp-dark before:absolute before:z-[2] before:translate-x-0
                before:transition-transform before:duration-100 before:ease-linear
                ${darkMode ? 'before:translate-x-7' : ''}
            `}>
                <div className="flex justify-between items-center h-full">
                    <SunIcon className="fill-temp-dark h-6 w-6 z-0" />
                    <MoonIcon className="fill-temp-light h-6 w-6 z-0" />
                </div>
            </div>
        </div>
    );
};

export default DarkModeSwitch;