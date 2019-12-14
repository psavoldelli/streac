import * as React from 'react';
import { Router } from '@reach/router';

import Theme from './theme';

import Navbar from '@components/navbar/Navbar';
import Sidebar from '@components/sidebar/Sidebar';
import Content from '@components/layout/Content';
import Home from '@components/home/Home';
import About from '@components/home/About';
import SidebarLogo from '@components/sidebar/SidebarLogo';
import SidebarMenu from '@components/sidebar/SidebarMenu';
import NotFound from '@components/error/NotFound';

import Loadable from 'react-loadable';

const Dashboard = Loadable({
    loader: () => import('@components/dashboard/Dashboard'),
    loading() {
      return <div>Loading...</div>;
    }
});

const App: React.FC = () => {

    return (
        <Theme>
            <Navbar />
            <Sidebar>
                <SidebarLogo />
                <Router>
                    <SidebarMenu path='/*' />
                </Router>
            </Sidebar>

            <Content >
                <Router>
                    <Home path='/' />
                    <About path='about' />
                    <Dashboard path='dashboard' />

                    <NotFound default />
                </Router>
            </Content>
        </Theme>
    );
};

export default App;
