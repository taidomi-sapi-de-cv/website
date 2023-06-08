import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingHeader from './LandingHeader';

describe('<LandingHeader />', () => {
  test('it should mount', () => {
    render(<LandingHeader />);
    
    const landingHeader = screen.getByTestId('LandingHeader');

    expect(landingHeader).toBeInTheDocument();
  });
});