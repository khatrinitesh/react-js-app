import React, { useState } from 'react';

const CloseAbleListItemApp = () => {
  return (
    <>
      <ClosableList />
    </>
  )
}

export default CloseAbleListItemApp

const ClosableList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1', isOpen: true },
    { id: 2, text: 'Item 2', isOpen: true },
    { id: 3, text: 'Item 3', isOpen: true },
  ]);


  const toggleItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span> {" "}
          <button onClick={() => toggleItem(item.id)}>
            {item.isOpen ? 'Close' : 'Open'}
          </button>
          {item.isOpen && <p>Additional content for {item.text}</p>}
        </li>
      ))}
    </ul>
  );
};