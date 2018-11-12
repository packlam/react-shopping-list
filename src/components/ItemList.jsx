import React from 'react';

function ItemList({ shoppingListItems }) {
  return (
    <ul>
      {Object.entries(shoppingListItems).map(([item, quantity]) => {
        return (
          <li key={item}>
            <span>{item} x{quantity}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default ItemList;