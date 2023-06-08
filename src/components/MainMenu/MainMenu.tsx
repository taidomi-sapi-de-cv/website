import React, { FC } from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import routes from "../../config/routes";


interface MainMenuProps {}

const MainMenu: FC<MainMenuProps> = () => (
  <div data-testid="MainMenu">
      <AppBar position='static'>
          <Toolbar color='inherit'>
              <Button color='inherit' component={NavLink} to={routes.wallet}>Mis Activos</Button>
              <Button color='inherit' component={NavLink} to={routes.me}>Perfil</Button>
              <Button color='inherit' component={NavLink} to={routes.home}>Salir</Button>
          </Toolbar>
      </AppBar>
  </div>
);

export default MainMenu;
