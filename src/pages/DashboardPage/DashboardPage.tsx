import React, { FC } from 'react';
import {Outlet} from 'react-router-dom';
import MainMenu from "../../components/MainMenu/MainMenu";


interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = () => (
  <div data-testid="DashboardPage">
      <MainMenu/>
      <Outlet />
  </div>
);

export default DashboardPage;
