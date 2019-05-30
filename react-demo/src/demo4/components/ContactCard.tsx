import React, { Component } from 'react';

class ContactCard extends Component<any> {

    render() {
        const { contact, deleteContact } = this.props;
        return (
            <div className="card col-md-3" >
                <img src={contact.picture} alt={contact.name}
                    className="card-img-top" />

                <div className="card-body">
                    <h5 className="card-title">
                        {contact.name}
                        <button
                            onClick={() => { 
                                if(window.confirm('Are you sure?')) {
                                    deleteContact(contact.id);
                                }
                            }}
                            className="btn btn-link text-danger">x</button>
                    </h5>
                    <p className="card-text">{contact.email}</p>
                    <p className="card-text">{contact.phone}</p>
                </div>
            </div>
        );
    }
}

export default ContactCard;