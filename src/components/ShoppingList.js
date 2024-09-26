import React, { useState } from 'react';
import Filter from './Filter';
import ItemForm from './ItemForm';
import Item from './Item';

function ShoppingList({ items }) {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
  const [itemList, setItemList] = useState(items);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleItemFormSubmit = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  const filteredItems = itemList.filter((item) => {
    return item.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (category === 'All' || item.category === category);
  });

  return (
    <div>
      <h1>Shopping List</h1>
      <Filter 
        onSearchChange={handleSearchChange} 
        onCategoryChange={handleCategoryChange}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
            
          
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;