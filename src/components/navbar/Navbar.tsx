import * as React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import * as Icons from 'styled-icons/feather';
import NavbarSearch from '@components/navbar/NavbarSearch';
import Button from '@library/buttons/Button';
import NavbarSelection from './NavbarSelection';

import useNavbar from '@providers/hooks/useNavbar';
import { Link } from '@reach/router';

const Container = styled.div<{large: boolean} & React.HTMLAttributes<HTMLDivElement>>`
    background-color: ${(props) => props.theme.colors.light};
    color: ${ (props) => darken(0.5, props.theme.colors.primary) };
    box-shadow: 0px 1px 10px #999;

    display: flex;
    justify-content: space-between;
    width: 100% ;
    height: ${ (props) => props.large ? '200px' : '48px'};
    align-items: start;
    flex-wrap: wrap;
    position:fixed;
    top: 0;
    transition: height ease 0.7s;
    overflow: hidden;
    outline: 0;
`;

const Divider = styled.span`
    width: 1px;
    background-color: ${(props) => lighten(0.1, props.theme.colors.primary) };
    background-clip: content-box;
    box-sizing: content-box;
`;

const Brand = styled.span`
    padding: 0 40px 0 40px;
    text-transform: uppercase;
`;

const Branding = styled.div`
    display: flex;
    font-size: 20px;

    background: ${(props) => props.theme.colors.primary };
    color: ${(props) => props.theme.colors.light};
    padding:  12px 24px;
    min-width: 180px;
    height: 48px;
    box-sizing: border-box;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    padding-right:12px;
    align-items: center;
    ${Divider} {
        padding: 14px 10px;
        align-self: stretch;
    }
`;

const Submenu = styled.div`
    width: 100%;
    height: 152px;
    background: #22384357;
`;

const Navbar: React.FC = (props) => {
    const [ state, open, close, toogle ] = useNavbar();

    return (
        <Container large={ state } onBlur={ close } tabIndex={ 0 }>
            <Left>
                <Branding>
                    <Brand >Brand</Brand>
                </Branding>
                <NavbarSelection />
            </Left>
            <Right>
                <NavbarSearch  />
                <Divider/>
                <Button rounded icon={ Icons.Bell } label='notification panel' />
                <Button rounded icon={ Icons.User } label='user menu panel' />
                <Divider/>
                <Button rounded icon={ Icons.Grid } label='general menu panel' onClick={ toogle } />
            </Right>
            <Submenu>
                <ul>
                    <h1> Dashboard</h1>
                    <li><Link to='dashboard' >First dashboard</Link></li>
                </ul>
            </Submenu>
        </Container>
    );
};

export default Navbar;
