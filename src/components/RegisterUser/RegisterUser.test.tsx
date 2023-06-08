import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterUser from './RegisterUser';

describe('<RegisterUser />', () => {
  test('it should mount', () => {
    render(<RegisterUser />);
    
    const registerUser = screen.getByTestId('RegisterUser');

    expect(registerUser).toBeInTheDocument();
  });
});