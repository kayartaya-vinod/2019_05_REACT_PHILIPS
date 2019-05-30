import React, { Component } from 'react';
import ContactCard from './ContactCard';

class ContactList extends Component<any> {

    render() {
        const { contacts, deleteContact } = this.props;
        const contactCards = contacts.map(
            (c: any) => <ContactCard
                key={c.id} contact={c} deleteContact={deleteContact} />)

        return (
            <div className="row">
                {contactCards}
            </div>
        );
    }
}

export default ContactList;