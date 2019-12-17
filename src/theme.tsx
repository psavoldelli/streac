import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

const colors = {
    primary: '#DA866F',
    secondary: '#E1DBDF',
    accent: '#E6CFC2',
    light: '#EFF1F3',
    dark: '#223843'
};

const theme = {
    colors
};

const Theme: React.FC = ({ children}) =>  (
    <Fragment>
        <Reset />
        <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
    </Fragment>
);

export default Theme;
