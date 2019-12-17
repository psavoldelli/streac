import * as React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import * as Icons from 'styled-icons/feather';
import FormInput from '@library/forms/FormInput';

const Container = styled.div`
    display: flex;
`;

const NavbarSearch: React.FC = (props) => {
    return (
        <Container>
            <FormInput search placeholder="Search..." />
        </Container>
    );
};

export default NavbarSearch;
