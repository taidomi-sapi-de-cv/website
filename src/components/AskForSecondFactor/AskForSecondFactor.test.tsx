import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AskForSecondFactor from './AskForSecondFactor';

describe('<AskForSecondFactor />', () => {
  test('it should mount', () => {
    render(<AskForSecondFactor />);
    
    const askForSecondFactor = screen.getByTestId('AskForSecondFactor');

    expect(askForSecondFactor).toBeInTheDocument();
  });
});