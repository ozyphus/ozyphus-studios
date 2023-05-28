import React, { useState, useEffect } from 'react';
import { ThreeCanvas } from '../components/ThreeCanvas';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';

const Header = () => <h1 className={styles.title}>Ozyphus Studios</h1>;

const Description = () => (
  <p className={styles.description}>
    Discover | Imagine | Create | Iterate
  </p>
);

const LandingPage = () => {
  const [theme, setTheme] = useState('light');  // 'light' is the initial state

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <Header />
      <Description />
      <div className={styles.cubeContainer}>
        <ThreeCanvas />
      </div>
    </div>
  );
};

export default LandingPage;
