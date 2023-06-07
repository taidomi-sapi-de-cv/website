import React, { lazy, Suspense } from 'react';

const LazyAskForSecondFactor = lazy(() => import('./AskForSecondFactor'));

const AskForSecondFactor = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAskForSecondFactor {...props} />
  </Suspense>
);

export default AskForSecondFactor;
