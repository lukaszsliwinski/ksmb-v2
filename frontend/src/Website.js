import { useState, useEffect } from 'react';
import 'tw-elements';
import '@animxyz/core';
import './assets/global.css';

import useWindowDimensions from './hooks/useWindowDimensions';
import Navbar from './layouts/Navbar';
import Landing from './layouts/Landing';
import Background from './components/Background';
import About from './layouts/About';
import Music from './layouts/Music';
import Concerts from './layouts/Concerts';
import Footer from './layouts/Footer';

function Website() {
  // state
  const [darkMode, setDarkMode] = useState(false);
  const [windowTop, setWindowTop] = useState(true);
  const [verticalScreen, setVerticalScreen] = useState(false);

  // get screen size
  const { screenHeight, screenWidth } = useWindowDimensions();

  // ref to html element
  const html = document.documentElement;

  useEffect(() => {
    html.classList.add('scroll-smooth', 'scrollbar-thin', 'scrollbar-thumb-buttered-rum');
  }, []);

  useEffect(() => {
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => (window.scrollY === 0 ? setWindowTop(true) : setWindowTop(false));
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowTop]);

  useEffect(() => {
    setVerticalScreen(screenHeight > screenWidth);
  }, [screenHeight, screenWidth]);

  return (
    <div className="select-none overflow-hidden" id="main">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} windowTop={windowTop} />
      <Landing verticalScreen={verticalScreen} />
      <About />
      {!verticalScreen && <Background bgPhoto="bg-photo-3" />}
      <Music verticalScreen={verticalScreen} />
      {!verticalScreen && <Background bgPhoto="bg-photo-4" />}
      <Concerts verticalScreen={verticalScreen} />
      {!verticalScreen && <Background bgPhoto="bg-photo-5" />}
      <Footer />
    </div>
  );
}

export default Website;
