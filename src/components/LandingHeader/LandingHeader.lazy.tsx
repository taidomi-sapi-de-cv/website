import React, { lazy, Suspense } from 'react';

const LazyLandingHeader = lazy(() => import('./LandingHeader'));

const LandingHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLandingHeader {...props} />
  </Suspense>
);

export default LandingHeader;
