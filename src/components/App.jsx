import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import storage from './storage';

const CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (storage.load(CONTACTS_KEY)) {
      this.setState({ contacts: storage.load(CONTACTS_KEY) });
    }
  }

  changeContacts = ({ name, number }) => {
    for (const cont of this.state.contacts) {
      if (cont.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    this.setState(
      prev => {
        return {
          contacts: [...prev.contacts, { id: nanoid(), name, number }],
        };
      },
      () => {
        storage.save(CONTACTS_KEY, this.state.contacts);
      }
    );
  };

  deleteContact = id => {
    this.setState(
      prev => {
        return {
          contacts: prev.contacts.filter(cont => cont.id !== id),
        };
      },
      () => {
        storage.save(CONTACTS_KEY, this.state.contacts);
      }
    );
  };

  setFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.changeContacts} />
        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter onChangeFilter={this.setFilter} />
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </>
        )}
      </>
    );
  }
}
