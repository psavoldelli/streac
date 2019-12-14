import * as React from 'react';

const Content: React.FC = ( props ) => {

    return (
        <div>
            { props.children }
        </div>
    );
};

export default Content;
