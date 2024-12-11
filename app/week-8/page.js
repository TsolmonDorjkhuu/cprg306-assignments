"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName
            .split(",")[0] // Remove size/quantity
            .replace(/[^\w\s]/g, "") // Remove emojis
            .trim(); // Trim whitespace
        setSelectedItemName(cleanedName);
    };

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div>
                <h1>Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
        </div>
    );
}
