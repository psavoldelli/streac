import * as React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import * as Icons from 'styled-icons/feather';
import useNavbar from '@providers/hooks/useNavbar';

const Container = styled.div`
    display: flex;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;

    justify-content: flex-start;
    text-decoration: none;
    padding: 8px 16px;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
        opacity: 1;
        transform: scale(0.95);
    }
`;

const Avatar = styled.div`
    padding: 0 10px;
`;

const Content = styled.div`
    padding: 0 0px;
`;

const Title = styled.div`
    padding: 0 10px;
    color: ${ (props) => darken(0.2,props.theme.colors.primary)};
`;

const Description = styled.div`
    padding: 0 10px;
    color: ${ (props) => darken(0.4, props.theme.colors.secondary)};
`;

const NavbarSelection: React.FC = (props) => {
    const [state,,, toogle] = useNavbar();
    const chevron = state ? <Icons.ChevronUp size={ 24 } /> : <Icons.ChevronDown size={ 24 } />;

    return (
        <Container onClick={ toogle }>
            <Avatar>
                <Icons.Paperclip size={ 24 } />
            </Avatar>
            <Content>
                <Title>Main category</Title>
                <Description>Sub component name</Description>
            </Content>
            { chevron }
        </Container>
    );
};

export default NavbarSelection;
