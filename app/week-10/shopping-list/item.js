export default function Item({ name, quantity, category, onSelect }) {
  return (
      <li onClick={() => onSelect && onSelect(name)} style={{ cursor: "pointer" }}>
          {name} - {quantity} ({category})
      </li>
  );
}
