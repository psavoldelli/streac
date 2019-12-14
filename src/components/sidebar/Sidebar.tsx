import * as React from 'react';

const Sidebar: React.FC = (props) => {

    return (
        <div>
            { props.children }
        </div>
    );
};

export default Sidebar;
