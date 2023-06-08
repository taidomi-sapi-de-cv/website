import React, { lazy, Suspense } from 'react';

const LazyWallet = lazy(() => import('./Wallet'));

const Wallet = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWallet {...props} />
  </Suspense>
);

export default Wallet;
