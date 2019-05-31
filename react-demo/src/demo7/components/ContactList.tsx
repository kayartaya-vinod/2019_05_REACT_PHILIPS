import React, { Component } from 'react';
import ContactCard from './ContactCard';
import loading from './loading';
import consume from './consume';

const ContactList = ({ contacts }: { contacts: Array<any> }) => {
    const contactCards = contacts.map(
        (c: any) => <ContactCard key={c.id} contact={c}  />)

    return (
        <div className="row">
            {contactCards}
        </div>
    );
}

export default consume('contacts')(loading('contacts')(ContactList));