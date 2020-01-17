import * as React from 'react';
import useIngredient from '@providers/hooks/useIngredient';
import { Layout } from 'antd';

const IngredientIndex: React.FC = () => {
    const [ ingredients, load ] = useIngredient();

    React.useEffect( () => {
        load(); // trigger first data fetch
    }, [] );

    return (
        <Layout>
            Ingredient home page
        </Layout>
    );
};

export default IngredientIndex;
