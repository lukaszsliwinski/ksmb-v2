import { useState, useEffect } from 'react';
import 'tw-elements';

import { ReactComponent as Logo } from './logo.svg';
import DarkModeSwitch from './DarkModeSwitch';
import './Website.css';

function Website() {
    const [darkMode, setDarkMode] = useState(false);
    const [windowTop, setWindowTop] = useState(true);

    useEffect(() => {
        darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }, [darkMode])

    useEffect(() => {
        const handleScroll = () => window.scrollY === 0 ? setWindowTop(true) : setWindowTop(false);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [windowTop]);



    return (
        <div className="all-inside:transition-colors all-inside:ease-in-out all-inside:duration-200">
            <nav className={`fixed z-10 flex w-full h-16 px-5 ${windowTop ? 'bg-transparent' : 'bg-temp-dark/80 backdrop-blur-md'} ease-in-out duration-300`}>
                <div className="basis-1/3 flex items-center text-[1.8rem] text-temp-light">
                    <span>KSMicroband</span>
                </div>
                <div className="basis-1/3 flex justify-center items-center h-full">
                    <ul className="flex flex-row space-x-6 list-style-none">
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#">o nas</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#">muzyka</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#">koncerty</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#">kontakt</a>
                        </li>
                    </ul>
                </div>


                <div className="basis-1/3 flex justify-end items-center h-full">
                    <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode}/>
                </div>

            </nav>
            <section className="top-0 bg-fixed bg-center bg-photo-1 bg-100%">
                <div className="w-screen h-screen bg-black/60 backdrop-blur-sm p-20">
                    <div className="flex items-center justify-center border-4 border-temp-light/70 h-full">
                        <Logo className="fill-temp-light/70 h-[25rem]" />
                    </div>
                </div>
            </section>
            <div className="w-full h-full min-h-screen bg-temp-light dark:bg-temp-dark">
                <p className="text-temp-dark dark:text-temp-light">o nas</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-2 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="w-full h-full min-h-screen bg-temp-light dark:bg-temp-dark">
                <p className="text-temp-dark dark:text-temp-light">nagrania</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-3 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="w-full h-full min-h-screen bg-temp-light dark:bg-temp-dark">
                <p className="text-temp-dark dark:text-temp-light">koncerty</p>
            </div>
            <section className="flex items-center justify-center h-[65vh] m-auto bg-fixed bg-center bg-photo-4 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="w-full h-[35vh] bg-temp-light dark:bg-temp-dark">
                <p className="text-temp-dark dark:text-temp-light">kontakt</p>
            </div>
        </div>
    );
}

export default Website;