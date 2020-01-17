
import * as React from 'react';
import IngredientService from '@services/ingredients/IngredientService';

/**
 * Custom Hook to manage Todos
 */
const useIngredient = (trigger?: boolean): [ IngredientItem[], () => void ] => {
    const [data, setData] = React.useState<IngredientItem[]>([]);

    const refresh = IngredientService.refresh;

    React.useEffect(() => {
        // create subscription
        const subscriptions = [
            IngredientService.todos$.subscribe( (value) => setData( value ) ),
        ];

        // trigger first data load
        if(trigger) {
            IngredientService.load();
        }

        return () => { // release subscriptions - unmount
            subscriptions.forEach( (sub) => sub.unsubscribe() );
        };

    },[]);

    return [ data, refresh ];
};

export default useIngredient;
