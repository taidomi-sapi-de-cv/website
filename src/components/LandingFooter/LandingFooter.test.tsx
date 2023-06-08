import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingFooter from './LandingFooter';

describe('<LandingFooter />', () => {
  test('it should mount', () => {
    render(<LandingFooter />);
    
    const landingFooter = screen.getByTestId('LandingFooter');

    expect(landingFooter).toBeInTheDocument();
  });
});