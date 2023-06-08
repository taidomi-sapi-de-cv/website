import React, { lazy, Suspense } from 'react';

const LazyPage = lazy(() => import('./Page'));

const Page = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPage {...props} />
  </Suspense>
);

export default Page;
