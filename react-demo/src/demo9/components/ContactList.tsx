import React from 'react';
import ContactCard from './ContactCard';
import loading from './loading';
import { connect } from 'react-redux';
import { getAllContacts } from '../actions/contactActions';

class ContactList extends React.Component<any> {
    componentDidMount() {
        this.props.getAllContacts();
    }
    render() {
        const contactCards = this.props.contacts.map(
            (c: any) => <ContactCard key={c.id} contact={c} />)

        return (
            <div className="row">
                {contactCards}
            </div>
        );
    }
}

// export default loading('contacts')(ContactList);

// the 'connect' HOC takes 2 parameters
// 1. list of all required state from the redux store (injected as props)
// 2. list of all required thunk actions (contactActions.ts), injected as props

const stateAsProps = (rootReducer: any) => ({
    contacts: rootReducer.contactsReducer
});
const actionsAsProps = {
    getAllContacts
}

let Cmp = connect(stateAsProps, actionsAsProps)(loading('contacts')(ContactList));
export default (Cmp);