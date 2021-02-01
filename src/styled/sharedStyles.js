import { css } from 'styled-components';

export const LinkStyle = css`
  text-transform: uppercase;
  font-family: lato, sans-serif;
  font-size: 13.4px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  text-decoration: none;
`;

export const ImgResponsive = css`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const container = css`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
