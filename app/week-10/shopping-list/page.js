"use client";

import React, { useEffect, useState } from "react";
import { getItems, addItem } from "../shopping-list-service"; 
import { useUserAuth } from "../_utils/auth-context"; 
import NewItem from "./new-item";
import ItemList from "./item-list";

const ShoppingList = () => {
    const { user } = useUserAuth(); 
    const [items, setItems] = useState([]); 
    const loadItems = async () => {
        if (user?.uid) {
            try {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems); 
            } catch (error) {
                console.error("Error loading items:", error);
            }
        }
    };

 
    const handleAddItem = async (newItem) => {
        if (user?.uid) {
            try {
                const newItemId = await addItem(user.uid, newItem); 
                setItems((prevItems) => [
                    ...prevItems,
                    { id: newItemId, ...newItem }, 
                ]);
            } catch (error) {
                console.error("Error adding item:", error);
            }
        }
    };

    useEffect(() => {
        loadItems();
    }, [user?.uid]); 

    return (
        <div>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} /> {}
            <ItemList items={items} /> {}
        </div>
    );
};

export default ShoppingList;
