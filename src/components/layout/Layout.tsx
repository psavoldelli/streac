import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100% ;
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    font-family: -apple-system, ".SFNSText-Regular", "San Francisco", "Aria", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
`;

const Layout: React.FC = ( props ) => {

    return (
        <Container>
            { props.children }
        </Container>
    );
};

export default Layout;
