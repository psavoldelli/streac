import * as React from 'react';
import useTodos from '@providers/hooks/useTodos';

const Dashboard: React.FC = () => {
    const [ todos, load ] = useTodos();

    return (
        <div>
            <button onClick={ load }>Refresh</button>
            <div>
                { todos.map( (item) => {
                    return (<div key={ item.id }>{ item.title } </div>);
                }) }
            </div>
        </div>
    );
};

export default Dashboard;
