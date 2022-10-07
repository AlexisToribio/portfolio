import React, { useContext } from 'react';
import { Layout, Hero, About, Skills, Contact, Portfolio } from '../components';
import ThemeContext from '../context/ThemeContext';

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout theme={theme}>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default Home;
