import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Sorter from './components/Sorter';

class App extends PureComponent {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    sortBy: 'id',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (currentContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
      completed: false,
    };

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(({ contacts }) => {
      return { contacts: [...contacts, contact] };
    });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== contactId),
      };
    });

    this.setState({
      filter: '',
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleRadioChange = event => {
    const { value } = event.target;

    this.setState({
      sortBy: value,
    });
  };

  getSortedContacts = () => {
    const { contacts, sortBy } = this.state;

    if (sortBy === 'abc') {
      return contacts.sort((a, b) => a.name - b.name);
    }

    if (sortBy === 'id') {
      return contacts.sort((a, b) => a.id - b.id);
    }
  };

  render() {
    const { filter, contacts, sortBy } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const sortedContacts = this.getSortedContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <>
            <Filter value={filter} onChangeFilter={this.changeFilter} />
            <Sorter value={sortBy} onRadioChange={this.handleRadioChange} />
          </>
        )}
        <ContactList
          contacts={visibleContacts ?? sortedContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
