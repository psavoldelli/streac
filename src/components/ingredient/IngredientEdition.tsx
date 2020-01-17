import * as React from 'react';
import useIngredient from '@providers/hooks/useIngredient';
import { Layout } from 'antd';

const IngredientEdition: React.FC = () => {
    const [ _ingredient, load ] = useIngredient();

    React.useEffect( () => {
        load(); // trigger first data fetch
    }, [] );

    return (
        <Layout>
            Ingredient edition page
        </Layout>
    );
};

export default IngredientEdition;
