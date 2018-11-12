import React, { Component } from 'react';
import './App.css';
import ItemTable from './components/ItemTable';
import ItemList from './components/ItemList';
import shoppingItems from './data/shoppingItems.json';

class App extends Component {
  state = {
    view: 'main',
    shoppingList: {}
  }

  render() {
    return (
      <div className="App">
        <h1>My Shopping List</h1>
        <ItemTable addToShoppingList={this.addToShoppingList} shoppingItems={shoppingItems}/>
        <ItemList shoppingListItems={this.state.shoppingList}/>
      </div>
    );
  }

  addToShoppingList = (itemToAdd) => {
    const updatedShoppingList = {...this.state.shoppingList};

    if (!updatedShoppingList[itemToAdd]) {
      updatedShoppingList[itemToAdd] = 1;
    } else {
      updatedShoppingList[itemToAdd]++;
    }

    this.setState({
      shoppingList: updatedShoppingList
    });
  }
}

export default App;
