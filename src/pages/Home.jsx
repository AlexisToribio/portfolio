import React from 'react';
import { Layout, Hero, About, Skills, Contact, Portfolio } from '../components';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default Home;
