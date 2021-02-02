import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 0 5px;

  @media (min-width: 992px) {
    width: 25%;
    float: left;
  }
  @media (min-width: 768px) {
    width: 33.3333333333%;
  }
  .photo--container {
    height: 100%;
    margin: 0 auto;
    position: relative;
    img {
      height: 230px;
      object-fit: contain;
      background-size: cover !important;
      background-position: center !important;
    }
    h3 {
      color: #000;
      font-size: 17.3px;
      line-height: 1.67;
      font-weight: 700;
      margin: 10px 0 15px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 25px;
      height: 50px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    @media (max-width: 767px) {
      font-size: 13px;
    }
  }
`;

const RelatedPhotos = ({ link,title,photo }) => {
  return (
    <Wrapper>
      <Link>
        <div className="photo--container">
          <img src={photo} alt="" />
        </div>
        <h3>{title}</h3>
      </Link>
    </Wrapper>
  );
};

export default RelatedPhotos;
