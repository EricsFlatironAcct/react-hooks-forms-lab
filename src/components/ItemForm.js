import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce",
    id: uuid(),
  });

  function handleItemFormSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(newItem);
  }
  function handleNewItemChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  }
  return (
    <form className="NewItem" onSubmit={handleItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemChange} value={newItem.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItemChange} value={newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleItemFormSubmit}>
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
