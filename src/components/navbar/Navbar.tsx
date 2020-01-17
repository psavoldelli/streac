import * as React from 'react';
import { Link } from '@reach/router';

// library import
import { Typography, Menu } from 'antd';

const Navbar: React.FC = (props) => {

    return (
       <React.Fragment>

            <Menu theme='dark' mode='horizontal' style={ { lineHeight: '64px' } }>
                <Menu.Item key='home' style={ { color: 'white', margin: '0 30px' } }>
                    <Link to='' >BRAND</Link>
                </Menu.Item>

                <Menu.Item style={ { float: 'right'  } } key='ingredient'><Link to='ingredient' >Ingredients</Link></Menu.Item>
                <Menu.Item style={ { float: 'right'  } } key='equipments'><Link to='equipments' >Equipments</Link></Menu.Item>
                { /* <Nav.Drowpdown>
                    <Nav.Drowpdown.Group label='Administrations' >
                        <Link to='ingredient' >Ingredients</Link>
                        <Link to='equipment' >Equipments</Link>
                    </Nav.Drowpdown.Group>
                    <Nav.Drowpdown.Group label='Recipe' >
                        <Link to='recipe'>Search recipe</Link>
                        <Link to='recipe/new'>Create new recipe</Link>
                    </Nav.Drowpdown.Group>
                </Nav.Drowpdown> */ }
            </Menu>
       </React.Fragment>
    );
};

export default Navbar;
