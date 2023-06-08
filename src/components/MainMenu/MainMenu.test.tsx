import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainMenu from './MainMenu';

describe('<MainMenu />', () => {
  test('it should mount', () => {
    render(<MainMenu />);
    
    const mainMenu = screen.getByTestId('MainMenu');

    expect(mainMenu).toBeInTheDocument();
  });
});