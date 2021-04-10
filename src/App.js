import { Component } from 'react';

import { connect } from 'react-redux';
import Form from './Components/Form';
import Filter from './Components/Filter';
import * as actions from './redux/contacts/contacts-actions';
import Container from './Components/Container';
import s from './form.module.css';

class App extends Component {
  render() {
    return (
      <Container className={s.form__container} title="Phonebook">
        <Form onSubmit={this.props.onSubmit} />

        <Container className={s.list__container} title="Contacts">
          <Filter />
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactsData: state.contactsApp.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(actions.addContact(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
