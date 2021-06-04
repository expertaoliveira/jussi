import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Banner from '../../Banner.component';
import { Solutions } from '../../Solutions.component';
import About from '../../About.component';
import Commercial from '../../Commercial.component';
import Newsletter from '../../Newsletter.component';
import Footer from '../../Footer.component';
import './index.css';

export default function Home() {
  const history = useHistory();
  const location = useLocation();

  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(history.location.hash);
    const el = hash && document.getElementById(hash.substr(1));
    console.log(document.getElementById(hash.substr(1)));
    if (el) {
      el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [history, hash]);

  return (
    <>
      <Banner />
      <Solutions />
      <About />
      <Commercial />
      <Newsletter />
      <Footer />
    </>
  );
}
