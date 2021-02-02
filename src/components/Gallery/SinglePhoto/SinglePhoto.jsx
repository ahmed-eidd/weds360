import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 5px;
  width: 50%;
  float: left;
  @media (min-width: 992px) {
    width: 33.3333333333%;
  }
`;

const PhotoContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const Img = styled.img`
  height: 230px;
  object-fit: contain;
  background-size: cover !important;
  background-position: center !important;
`;

const Title = styled.h3`
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
`;

const SinglePhoto = ({ link, title, photo }) => {
  return (
    <Wrapper>
      <Link to={link}>
        <PhotoContainer>
          <Img src={photo} />
          <Title>{title}</Title>
        </PhotoContainer>
      </Link>
    </Wrapper>
  );
};

export default SinglePhoto;
