import React, { Component } from 'react';


const ContactCard = ({ contact, deleteContact }: { contact: any, deleteContact: any }) => (
    <div className="card col-md-4" >
        <img src={contact.picture} alt={contact.name}
            className="card-img-top" />

        <div className="card-body">
            <h5 className="card-title">
                {contact.name}
                <button
                    onClick={() => {
                        if (window.confirm('Are you sure?')) {
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


export default ContactCard;