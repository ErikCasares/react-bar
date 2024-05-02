import React from 'react';
import { items} from './productsData';

const ProductList = () => {
    const itemsFood = items.filter(items => items.categoryId == "food")
    const itemsDrinks = items.filter(items => items.categoryId == "drink")
    const itemsCocktails = items.filter(items => items.categoryId == "cocktail")
return (
<div>
    <h2>Carta completa simple</h2>
    <h3>foods</h3>
    <ul>
        {itemsFood.map(item => (
        <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
    </ul>
    <h3>drinks</h3>
    <ul>
        {itemsDrinks.map(item => (
        <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
    </ul>
    <h3>cocktails</h3>
    <ul>
        {itemsCocktails.map(item => (
        <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
    </ul>
</div>
);
};

export default ProductList;