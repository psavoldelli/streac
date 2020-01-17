import * as React   from 'react';
import { Router }   from '@reach/router';
import Loadable     from 'react-loadable';
import Navbar       from '@components/navbar/Navbar';
import Home         from '@components/home/Home';
import NotFound     from '@components/error/NotFound';

import { Layout } from 'antd';

const Lazy = ( loader: Promise<any> ) => {
    return Loadable({
        loader: () => loader, loading() {
          return <div>Loading...</div>;
        }
    });
};

// import module component
const $Ingredient   = Lazy( import('@components/ingredient/$Ingredient') );
const About         = Lazy( import('@components/home/About') );

const App: React.FC = () => {
    return (
        <Layout>
            <Layout.Header style={ { position: 'fixed', zIndex: 1, width: '100%' } } >
                <Navbar />
            </Layout.Header>
            <Layout.Content style={ { marginTop: 64 } }>
                <Router /*component={ Box }*/ primary={ false } >
                    <Home path='/' />
                    <About path='about' />

                    <$Ingredient path='ingredient/*' />

                    <NotFound default />
                </Router>
            </Layout.Content>
        </Layout>
    );
};

export default App;
