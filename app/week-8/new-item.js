import { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            name,
            quantity: parseInt(quantity, 10),
            category,
        };

        onAddItem(newItem);

        // Clear the form fields
        setName('');
        setQuantity('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button type="submit">Add Item</button>
        </form>
    );
}
