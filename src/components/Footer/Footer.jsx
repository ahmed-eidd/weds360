import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #000;
  width: 100%;
  direction: ltr !important;
`;

const FooterLeft = styled.div`
  display: inline-block;
  width: 33%;
  font-size: 8px;
  color: #fff;
  margin-left: 1%;

  .socialMediaLinks {
    font-size: 15px;
    letter-spacing: 3px;
  }
`;

const FooterCenter = styled.div`
  display: inline-block;
  width: 33%;
  font-size: 10px;
  font-weight: 100;
  color: #fff;
  position: relative;
  margin: auto;
  text-align: center;
`;

const FooterRight = styled.div`
  display: inline-block;
  width: 31%;
  color: #fff;
  font-size: 10px;
  text-decoration: none;
  padding-right: 80px;
  .text-right {
    text-align: right;
    list-style-type: none;
  }
  .text-right li {
    padding-bottom: 4px;
  }
  .text-right a {
    text-decoration: none;
    color: #fff;
  }
`;

const CompanyName = styled.h1`
  font-size: 20px;
`;

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <FooterLeft>
          <CompanyName>Weds360</CompanyName>
          <div className="socialMediaLinks">
            <span>
              <a href="https://www.facebook.com/Weds360/" target="_blank"></a>
              <i class="fab fa-facebook-f"></i>
            </span>
            <span>
              <a href="https://www.instagram.com/weds360/"></a>
              <i class="fab fa-instagram"></i>
            </span>
          </div>
        </FooterLeft>
        <FooterCenter>
          © Copyright
          <a target="_blank" href="http://plus360.xyz/">
            <strong>Plus360</strong>.
          </a>
          All Rights Reserved
        </FooterCenter>
        <FooterRight>
          <ul className="text-right">
            <li>
              <a href="/pages/terms-conditions?locale=en">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="/pages/privacy-policy?locale=en">Privacy Policy</a>
            </li>
          </ul>
        </FooterRight>
      </FooterWrapper>
    </footer>
  );
};

export default Footer;
