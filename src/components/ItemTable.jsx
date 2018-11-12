import React from 'react';

function ItemTable({ addToShoppingList, shoppingItems }) {
  
  const handleClick = event => {
    const item = event.target.value;
    addToShoppingList(item);
  };

  return (
    <div className="grid">
      {shoppingItems.map(({ item, emoji }) => {
        return (
          <button key={item} value={item} onClick={handleClick}><span role="img" aria-label={item}>{emoji}</span></button>
        );
      })}
    </div>
  )
}

export default ItemTable;