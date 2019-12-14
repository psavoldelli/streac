import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

const theme = {
    navbar: {
        background: 'blue',
        color: 'grey'
    }
};

const Theme: React.FC = ({ children}) =>  (
    <Fragment>
        <Reset />
        <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
    </Fragment>
);

export default Theme;
