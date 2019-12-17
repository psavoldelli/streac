
import * as React from 'react';
import TodosServices from '@services/todos/TodosServices';

/**
 * Custom Hook to manage Todos
 */
const useTodos = (): [ Todo[], () => void ] => {
    const [data, setData] = React.useState<Todo[]>([]);
    const refresh = TodosServices.refresh;

    React.useEffect(() => {
        // create subscription
        const sub = TodosServices.todos$.subscribe( (value) => setData( value ) );

        // trigger first load
        TodosServices.load();

        return () => {
            sub.unsubscribe();
        };

    },[]);

    return [ data, refresh ];
};

export default useTodos;
