import { Component } from 'react';
import { v4 as randomID } from 'uuid';
import { connect } from 'react-redux';
import Form from './Components/Form';
import Filter from './Components/Filter';
import * as actions from './redux/actions';

import Container from './Components/Container';
import s from './form.module.css';

class App extends Component {
  state = {
    // contacts: [],
    filter: '',
  };

  randomID = randomID();

  componentDidMount() {
    console.log('ComponentisMounted');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      console.log(parsedContacts);
      this.props.onSubmit(parsedContacts);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.setState.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    console.log(this.props);
    const filteredContacts = this.props.getFilteredContats() || this.getFilteredNumbers();
    return (
      <Container className={s.form__container} title="Phonebook">
        <Form onSubmit={this.props.onSubmit} />

        <Container className={s.list__container} title="Contacts">
          <Filter
            onFilter={this.props.onFilter}
            filteredContacts={filteredContacts}
            onDeleteContact={this.props.onDeleteContact}
          />
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactsData: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(actions.addContact(data)),
    onDeleteContact: id => dispatch(actions.deleteContact(id)),
    getFilteredContats: () => dispatch(actions.getFilteredContact()),
    getFilter: value => dispatch(actions.getFilter(value)),
  };
};
console.log(App.props);
export default connect(mapStateToProps, mapDispatchToProps)(App);
