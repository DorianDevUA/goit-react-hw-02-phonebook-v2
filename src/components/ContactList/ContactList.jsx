import { Contact } from '../Contact';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
}
