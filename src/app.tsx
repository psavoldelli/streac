import * as React from 'react';
import { Router } from '@reach/router';
import Loadable from 'react-loadable';

import Theme from './theme';

import Navbar from '@components/navbar/Navbar';
import Content from '@components/layout/Content';
import Home from '@components/home/Home';
import NotFound from '@components/error/NotFound';
import Layout from '@components/layout/Layout';

const Lazy = ( loader: Promise<any> ) => {
    return Loadable({
        loader: () => loader, loading() {
          return <div>Loading...</div>;
        }
    });
};

const Dashboard = Lazy( import('@components/dashboard/Dashboard') );
const About     = Lazy( import('@components/home/About') );

const App: React.FC = () => {

    return (
        <Theme>
            <Layout>
                <Navbar />

                <Content >
                    <Router>
                        <Home path='/' />
                        <About path='about' />
                        <Dashboard path='dashboard' />

                        <NotFound default />
                    </Router>
                </Content>
            </Layout>
        </Theme>
    );
};

export default App;
