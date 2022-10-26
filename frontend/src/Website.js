import { useState, useEffect } from 'react';
import 'tw-elements';

import { ReactComponent as Logo } from './logo.svg';
import DarkModeSwitch from './DarkModeSwitch';
import './Website.css';

function Website() {
    const [darkMode, setDarkMode] = useState(false);
    const [windowTop, setWindowTop] = useState(true);

    const html = document.documentElement;
    
    useEffect(() => {
        html.classList.add('scroll-smooth');
    }, []);

    useEffect(() => {
        darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => window.scrollY === 0 ? setWindowTop(true) : setWindowTop(false);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [windowTop]);



    return (
        <div className="all-inside:transition-colors all-inside:ease-in-out all-inside:duration-200" id="main">
            <nav className={`fixed z-10 flex w-full h-16 px-5 ${windowTop ? 'bg-transparent' : 'bg-temp-dark/80 backdrop-blur-md'} ease-in-out duration-300`}>
                <div className="basis-1/3 flex items-center text-[1.8rem] text-temp-light">
                    <a className="nav-link text-temp-light" href="#main">KSMicroband</a>
                </div>
                <div className="basis-1/3 flex justify-center items-center h-full">
                    <ul className="flex flex-row space-x-6 list-style-none">
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#about">o nas</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#music">muzyka</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#concerts">koncerty</a>
                        </li>
                        <li className="text-[1.8rem]">
                            <a className="nav-link text-temp-light" href="#footer">kontakt</a>
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
            <div className="w-full h-full min-h-screen bg-temp-light dark:bg-temp-dark" id="about">
                <p className="text-temp-dark dark:text-temp-light">o nas</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-2 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="w-full h-full min-h-screen bg-temp-light dark:bg-temp-dark" id="music">
                <p className="text-temp-dark dark:text-temp-light">muzyka</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-3 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="w-full h-full min-h-screen bg-temp-light dark:bg-temp-dark" id="concerts">
                <p className="text-temp-dark dark:text-temp-light">koncerty</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto bg-fixed bg-center bg-photo-4 bg-100%">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="w-full h-[34vh] bg-temp-light dark:bg-temp-dark" id="footer">
                <p className="text-temp-dark dark:text-temp-light">kontakt</p>
            </div>
        </div>
    );
}

export default Website;