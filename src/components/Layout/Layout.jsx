import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import WeddingSection from '../WeddingSection/WeddingSection';

const Layout = ({ chidlren }) => {
  return (
    <div>
      <Nav />
      {chidlren}
      <WeddingSection/>
      <Footer />
    </div>
  );
};

export default Layout;
