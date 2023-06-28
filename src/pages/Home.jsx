import React, { useContext } from 'react';
import { Layout, Hero, About, Skills, Contact, Portfolio } from '../components';
import ThemeContext from '../context/ThemeContext';
import { ArrowUpProvider } from '../context/ArrowUpContext';

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <ArrowUpProvider>
      <Layout theme={theme}>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Layout>
    </ArrowUpProvider>
  );
}

export default Home;
