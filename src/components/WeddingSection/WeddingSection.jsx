import React from 'react';
import styled from 'styled-components';
import { container } from '../../styled/sharedStyles';
import WeddingItem from './WeddingItem/WeddingItem';
import Icon1 from '../../assests/WeddingSection/icon-1.png';
import Icon2 from '../../assests/WeddingSection/icon-2.png';
import Icon3 from '../../assests/WeddingSection/icon-3.png';
import Icon4 from '../../assests/WeddingSection/icon-4.png';
import Icon5 from '../../assests/WeddingSection/icon-5.png';
import Icon6 from '../../assests/WeddingSection/icon-6.png';

const Wrapper = styled.div`
  ${container}
  padding: 0;
  margin-top: 100px;
  max-width: 1100px;
  position: relative;
`;

const Title = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: 900;
`;

const WrapperTool = styled.div`
  margin: 30px auto 25px;
`;

const WeddingSection = () => {
  return (
    <Wrapper>
      <Title>
        Wedding Planning is a piece of cake with Weds360.We know what matters
        most and you can count on us every step of the way.
      </Title>
      <WrapperTool>
        <WeddingItem
          title="WEDDING WEBISTE"
          icon={Icon1}
          text="Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you."
          linkText="Create your website"
          link="#"
        />
        <WeddingItem
          title="BUDGETER"
          icon={Icon2}
          text="Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of."
          linkText="Create and manage your budget"
          link="#"
        />
        <WeddingItem
          title="CHECK LIST"
          icon={Icon3}
          text="Set your tasks, create your priority list and never forget any wedding detail."
          linkText="Get your check list"
          link="#"
        />
        <WeddingItem
          title="GUEST LIST"
          icon={Icon4}
          text='Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.'
          linkText="Create your guest list"
          link="#"
        />
        <WeddingItem
          title="VENDORS"
          icon={Icon5}
          text="Meet your service providers, view their profiles and make all the perfect choice for your wedding night."
          linkText="Start your tour"
          link="#"
        />
        <WeddingItem
          title="REGISTRY LIST"
          icon={Icon6}
          text="Escape the awkward moments and receiving the same gift twice by listing everything yohought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents."
          linkText="Create your dream list"
          link="#"
        />
      </WrapperTool>
    </Wrapper>
  );
};

export default WeddingSection;
