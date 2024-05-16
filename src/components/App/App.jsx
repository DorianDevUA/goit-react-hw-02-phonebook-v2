import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { SearchBox } from '../SearchBox';
import contacts from '../../contacts.json';

export class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  checkNameInContacts = name => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName,
    );
  };

  addContact = (name, number) => {
    const isNameExist = this.checkNameInContacts(name);

    if (isNameExist) {
      alert(`Контакт "${name}" вже існує!`);
      return;
    }

    const contactId = nanoid();
    const newContact = {
      id: contactId,
      name,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));

    console.log('Removed contact with ID:', contactId);
  };

  handleSearch = evt => {
    const { value } = evt.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <SearchBox value={filter} onChange={this.handleSearch} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
