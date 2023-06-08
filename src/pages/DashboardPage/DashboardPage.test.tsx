import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardPage from './DashboardPage';

describe('<DashboardPage />', () => {
  test('it should mount', () => {
    render(<DashboardPage />);
    
    const dashboardPage = screen.getByTestId('DashboardPage');

    expect(dashboardPage).toBeInTheDocument();
  });
});