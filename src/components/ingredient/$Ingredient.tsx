import * as React from 'react';
import { Router } from '@reach/router';

import IngredientIndex from './IngredientIndex';
import IngredientEdition from '@components/ingredient/IngredientEdition';

import useIngredient from '@providers/hooks/useIngredient';

const $Ingredient: React.FC = () => {
    const [, load ] = useIngredient();

    React.useEffect( () => {
        load(); // trigger first data fetch
    }, [] );

    return (
        <Router height='100%' primary={ false }>
            <IngredientIndex path='/'  />
            <IngredientEdition path=':id' />
        </Router>
    );
};

export default $Ingredient;
