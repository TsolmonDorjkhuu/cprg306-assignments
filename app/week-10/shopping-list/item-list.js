import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    const [groupByCategory, setGroupByCategory] = useState(false);

    let sortedItems = [...items];

    if (groupByCategory) {
        sortedItems = Object.entries(
            sortedItems.reduce((acc, item) => {
                if (!acc[item.category]) acc[item.category] = [];
                acc[item.category].push(item);
                return acc;
            }, {})
        )
        .sort((a, b) => a[0].localeCompare(b[0]))
        .flatMap(([category, items]) =>
            [{ isCategoryHeader: true, category }, ...items.sort((a, b) => a.name.localeCompare(b.name))]
        );
    } else {
        sortedItems.sort((a, b) =>
            sortBy === "name"
                ? a.name.localeCompare(b.name)
                : a.category.localeCompare(b.category)
        );
    }

    return (
        <div>
            <div className="buttons">
                <button
                    onClick={() => {
                        setGroupByCategory(false);
                        setSortBy("name");
                    }}
                    style={{
                        backgroundColor: sortBy === "name" && !groupByCategory ? "lightblue" : "white",
                    }}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => {
                        setGroupByCategory(false);
                        setSortBy("category");
                    }}
                    style={{
                        backgroundColor: sortBy === "category" && !groupByCategory ? "lightblue" : "white",
                    }}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setGroupByCategory(true)}
                    style={{
                        backgroundColor: groupByCategory ? "lightblue" : "white",
                    }}
                >
                    Group by Category
                </button>
            </div>
            <ul>
                {sortedItems.map((item) =>
                    item.isCategoryHeader ? (
                        <li key={`header-${item.category}`} className="category-header">
                            <strong>{item.category}</strong>
                        </li>
                    ) : (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={onItemSelect}
                        />
                    )
                )}
            </ul>
        </div>
    );
}
