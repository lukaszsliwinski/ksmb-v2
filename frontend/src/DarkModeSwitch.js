// https://letsbuildui.dev/articles/building-a-dark-mode-theme-toggle

import { useState } from 'react';
import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as SunIcon } from './sun.svg';

function DarkModeSwitch() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
        console.log('dark mode: ', darkMode);
    };

    return (
        <div onClick={toggleMode}>
            {/* ::before - toggle wheel */}
            <div className={`
                w-[3.75rem] h-8 bg-[#333333] rounded-[16px] p-1 relative cursor-pointer
                before:content-[''] before:block before:h-6 before:w-6 before:rounded-[12px]
                before:bg-[#f5f5f5] before:absolute before:z-[2] before:translate-x-0
                before:transition-transform before:duration-100 before:ease-linear
                ${darkMode ? 'before:translate-x-7' : ''}
            `}>
                <div className="flex justify-between items-center h-full">
                    {/* wykorzystać jako wzór renderowania svg dla logo, w logo użyć drop-shadow z tailwind */}
                    <SunIcon className="fill-[#f5f5f5] h-6 w-6 z-0" />
                    <MoonIcon className="fill-[#f5f5f5] h-6 w-6 z-0" />
                </div>
            </div>
        </div>
    );
};

export default DarkModeSwitch;