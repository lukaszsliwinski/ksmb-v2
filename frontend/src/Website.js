import { useState, useEffect } from 'react';
import 'tw-elements';

import logo from './logo.svg';
import DarkModeSwitch from './DarkModeSwitch';
import './Website.css';

function Website() {
    const [windowTop, setWindowTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => window.scrollY === 0 ? setWindowTop(true) : setWindowTop(false);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [windowTop]);

    return (
        <>
            <nav className={`fixed z-50 flex justify-between w-full h-16 ${windowTop ? 'bg-transparent' : 'bg-black/80 backdrop-blur-md'}`}>  {/* dobrać właściwy z-index */}
                <div className="flex text-[1.8rem] py-1.5 px-3 text-gray-300"><img src={logo} className="h-[2.5rem]"/>KSMicroband</div>
                <ul className="flex flex-row list-style-none">
                    <li className="text-[1.8rem] py-1.5 px-3 pl-6">
                        <a className="nav-link text-gray-300 hover:text-gray-500 focus:text-gray-500 p-0" href="#">o nas</a>
                    </li>
                    <li className="text-[1.8rem] py-1.5 px-3">
                        <a className="nav-link text-gray-300 hover:text-gray-500 focus:text-gray-500 p-0" href="#">muzyka</a>
                    </li>
                    <li className="text-[1.8rem] py-1.5 px-3">
                        <a className="nav-link text-gray-300 hover:text-gray-500 focus:text-gray-500 p-0" href="#">koncerty</a>
                    </li>
                    <li className="text-[1.8rem] py-1.5 px-3">
                        <a className="nav-link text-gray-300 hover:text-gray-500 focus:text-gray-500 p-0" href="#">kontakt</a>
                    </li>
                </ul>
                <div className="m-4">
                    <DarkModeSwitch />
                </div>

            </nav>
            <section className="top-0 h-screen mb-12 bg-fixed bg-center bg-cover bg-photo-1">
                <div className="w-screen h-screen bg-black/60 backdrop-blur-sm p-20">
                    <div className="flex items-center justify-center border-4 border-white/70 h-full">
                        <img src={logo} className="h-[25rem]" />
                    </div>
                </div>
            </section>
            <div className="max-w-lg m-auto h-full min-h-screen">
                <p>o nas</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto mb-12 bg-fixed bg-center bg-cover bg-photo-2">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="max-w-lg m-auto h-full min-h-screen">
                <p>nagrania</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto mb-12 bg-fixed bg-center bg-cover bg-photo-3">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="max-w-lg m-auto h-full min-h-screen">
                <p>koncerty</p>
            </div>
            <section className="flex items-center justify-center h-[75vh] m-auto mb-12 bg-fixed bg-center bg-cover bg-photo-4">
                <div className="w-screen h-full bg-black/60"></div>
            </section>
            <div className="max-w-lg m-auto h-[25vh]">
                <p>kontakt</p>
            </div>
        </>
    );
}

export default Website;