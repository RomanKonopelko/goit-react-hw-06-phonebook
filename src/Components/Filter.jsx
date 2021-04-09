import s from '../form.module.css'
import Contact from './Contact'
import { v4 as randomID } from 'uuid';
import { connect } from 'react-redux';
import * as actions from '../redux/contacts/contacts-actions'

const Filter = ({ getFilter, onDeleteContact, filteredContacts }) => {
    console.log(filteredContacts, 'f');

    return (<>
        <label htmlFor="filter">Search contact by number or name</label>
        <br />
        <input
            type="text"
            name="filter"
            id="filter"
            onChange={(e) => getFilter(e.currentTarget.value)} />
        <ul className={s.form}>
            {filteredContacts.map(({ id, name, number }) => {
                return <Contact key={randomID()} id={id} name={name} number={number} onDeleteContact={() => {
                    onDeleteContact(id)
                }} s={s} />
            })}
        </ul>
    </>
    )
}

const mapStateToProps = state => {
    console.log(state.contactsApp);
    const { contacts, filter } = state.contactsApp
    console.log(filter);
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter) || contact.number.includes(filter),
    );
    return { filteredContacts, }
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteContact: id => dispatch(actions.deleteContact(id)),
        getFilteredContacts: () => dispatch(actions.getFilteredContact()),
        getFilter: value => dispatch(actions.getFilter(value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
