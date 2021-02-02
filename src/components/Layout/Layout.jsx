import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import WeddingSection from '../WeddingSection/WeddingSection';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <WeddingSection/>
      <Footer />
    </div>
  );
};

export default Layout;
