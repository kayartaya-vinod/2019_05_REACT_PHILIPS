import React, { Component } from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, deleteContact }: { contacts: Array<any>, deleteContact: any }) => {
    const contactCards = contacts.map(
        (c: any) => <ContactCard
            key={c.id} contact={c} deleteContact={deleteContact} />)

    return (
        <div className="row">
            {contactCards}
        </div>
    );
}

export default ContactList;