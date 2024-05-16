export function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li>
      <p>
        <span>{name}: </span>
        <span>{number}</span>
        <button type="submit" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </p>
    </li>
  );
}
