import React, { lazy, Suspense } from 'react';

const LazyLandingFooter = lazy(() => import('./LandingFooter'));

const LandingFooter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLandingFooter {...props} />
  </Suspense>
);

export default LandingFooter;
