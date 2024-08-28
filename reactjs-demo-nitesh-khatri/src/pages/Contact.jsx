import React, { useState } from 'react';
import List from '../components/List';

const Contact = () => {
  const [items,setItems] = useState(['item1','item2','item3']);
  const [newItem,setNewItem] = useState('');

  const handleAdd = () => {
    if(newItem.trim()){
      setItems([...items,newItem]);
      setNewItem('')
    }
  }


  return (
    <div className="content py-4">
      <div className="container mx-auto">
        <h3 className="font-bold text-[24px]">Contact</h3>
      <h1>Item List</h1>
      <List items={items}/>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder='add a new item' />
      <button onClick={handleAdd}>Add Item</button>
      </div>
    </div>
  );
}

export default Contact;
