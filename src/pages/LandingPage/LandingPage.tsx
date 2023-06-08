import React, { FC } from 'react';
import LandingHeader from "../../components/LandingHeader/LandingHeader";


interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (
  <div data-testid="LandingPage">
      <LandingHeader />
  </div>
);

export default LandingPage;
