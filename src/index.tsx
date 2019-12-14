import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const render = (Application: React.FC) => {
    const app = (
        <AppContainer>
            <Application />
        </AppContainer>
    );
    ReactDOM.render(app, document.getElementById('root'));
};

render(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        render(
            require('./app').default // get the updated code :)
        );
    });
}
