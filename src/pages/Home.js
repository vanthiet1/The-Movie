import React from 'react';
import HeaderPage from '../layouts/components/header';
import Section from '../layouts/components/home/section';
import Article from '../layouts/components/home/article'
import Footer from '../layouts/components/footer';


const Home = () => {

  return (
    <div>
      <HeaderPage />
      <Section />
     <Article />
     <Footer />
    </div>
  );
};

export default Home;
