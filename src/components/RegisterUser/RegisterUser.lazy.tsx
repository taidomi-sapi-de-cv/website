import React, { lazy, Suspense } from 'react';

const LazyRegisterUser = lazy(() => import('./RegisterUser'));

const RegisterUser = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRegisterUser {...props} />
  </Suspense>
);

export default RegisterUser;
