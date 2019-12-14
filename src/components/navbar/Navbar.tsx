import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100% ;
    background-color: ${(props) => props.theme.navbar.background};
`;

const Navbar: React.FC = () => {
    return (
        <Container>
            Brand
        </Container>
    );
};

export default Navbar;
