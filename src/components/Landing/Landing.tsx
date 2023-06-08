import React, { FC } from 'react';
import LandingHeader from "../LandingHeader/LandingHeader.lazy";
import LandingFooterLazy from "../LandingFooter/LandingFooter.lazy";


interface LandingProps {}

const Landing: FC<LandingProps> = () => (
  <div data-testid="Landing">
      <LandingHeader/>
      Esta es la landing page
      <LandingFooterLazy/>
  </div>
);

export default Landing;
