import React, {FC} from 'react';
import {Button, AppBar, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";

import routes from '../../config/routes';

interface LandingHeaderProps {
}

const LandingHeader: FC<LandingHeaderProps> = () => (
    <div data-testid="LandingHeader">
        <AppBar position='static'>
            <Toolbar color='inherit'>
                <Button color='inherit' component={NavLink} to={routes.dashboard}>Me</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default LandingHeader;
