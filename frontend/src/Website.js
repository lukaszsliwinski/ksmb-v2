import { useState, useEffect } from 'react';
import 'tw-elements';
import './assets/global.css';

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

  return (
    <div className="select-none" id="main">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} windowTop={windowTop} />
      <Landing />
      <About />
      <Background bgPhoto="bg-photo-2" />
      <Music />
      <Background bgPhoto="bg-photo-3" />
      <Concerts />
      <Background bgPhoto="bg-photo-4" />
      <Footer />
    </div>
  );
}

export default Website;
