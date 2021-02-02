import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImgResponsive, LinkStyle } from '../../styled/sharedStyles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 92.5%;
  max-width: 1100px;
  margin: 15px auto 50px;
`;

const ImgContainer = styled.div`
  width: 63%;
  @media (max-width: 767px) {
    padding: 0 10px;
    width: 100%;
  }
  img {
    ${ImgResponsive}
  }
`;

const Description = styled.div`
  width: 37%;
  padding: 15px 20px;
  @media (max-width: 767px) {
    padding-right: 10px;
    padding-left: 10px;
    width: 100%;
  }
  h2 {
    margin: 0;
    margin-bottom: 35px;
    font-size: 35.1px;
    font-weight: 700;
    color: #000;
    line-height: 1.2;
    @media (max-width: 991px) {
      font-size: 25px;
    }
  }

  h5 {
    display: block;
    margin: 0;
    margin-bottom: 20px;
    font-size: 23.6px;
    line-height: 1.42;
    color: #000;
    @media (max-width: 991px) {
      font-size: 18px;
    }
  }
`;

const RelatedPhotosWrapper = styled.div`
  width: 92.5%;
  margin: 0 auto;
  max-width: 1100px;
  h2 {
    font-size: 35.1px;
    line-height: 0.92;
    font-weight: 700;
    color: #000;
    margin-bottom: 35px;
  }
  .photos--container {
    margin: 0 -5px;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
  .icon--wrapper {
  }
`;

const PhotoIdPage = ({children}) => {
  return (
    <Wrapper>
      <ImgContainer>
        <img src={photo} />
      </ImgContainer>
      <Description>
        <h2></h2>
        <h5></h5>
        <h5>
          <Link as={a} to={link}>
            {}
          </Link>
        </h5>
        <SocialMediaLinks>
          <div className="icon--wrapper">
            <a
              target="_blank"
              href="http://www.facebook.com/sharer.php?u=https://weds360.com/en/photos/428"
            >
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/share?url=https://weds360.com/en/photos/428"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </SocialMediaLinks>
      </Description>
      <RelatedPhotosWrapper>
        <h2>Related Photos</h2>
        <div className="photos--container">
          {children}
        </div>
      </RelatedPhotosWrapper>
    </Wrapper>
  );
};

export default PhotoIdPage;
