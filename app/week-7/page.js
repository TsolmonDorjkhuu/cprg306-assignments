"use client";

import { useState } from 'react';
import itemsData from './items.json';
import ItemList from './item-list';
import NewItem from './new-item';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    // Event handler for adding a new item
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}
