import * as React from 'react';
import { Link } from '@reach/router';

const SidebarMenu: React.FC = (props) => {

    return (
        <div>
            <Link to="/">Home</Link>{" "}
            <Link to="dashboard">Dashboard</Link>{" "}
            <Link to="about">about</Link>
        </div>
    );
};

export default SidebarMenu;
