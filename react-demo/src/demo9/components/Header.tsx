import React from 'react';
import { connect } from 'react-redux';

const Header = ({ contacts = [] }: { contacts: Array<any> }) => (
    <div>
        <h1 className="alert alert-info">Addressbook App - V1.0</h1>
        <hr />
        <p>There are {contacts.length} contacts.</p>
    </div>
);

const stateAsProps = (rootReducer: any) => ({
    contacts: rootReducer.contactsReducer
})
export default connect(stateAsProps)(Header);