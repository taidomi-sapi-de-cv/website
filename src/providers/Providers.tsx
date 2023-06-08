import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import {CssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material';
import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import {SWRConfig} from 'swr';

import swrConfig from '../config/swrConfig';
import theme from '../config/theme';

const Providers = ({children}: any) => (
    <EmotionThemeProvider theme={theme}>
        <CssBaseline/>
        <MuiThemeProvider theme={theme}>
            <SWRConfig value={swrConfig}>
                {children}
            </SWRConfig>
        </MuiThemeProvider>
    </EmotionThemeProvider>
);

export default Providers;
