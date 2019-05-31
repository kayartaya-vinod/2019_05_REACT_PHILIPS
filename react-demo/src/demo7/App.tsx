import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactCard from './components/ContactCard';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import AppContext from './AppContext';


const baseUrl = 'http://localhost:4000/contacts/';

class App extends Component {
    state = { contacts: Array<any>() }

    addContact = async (contact: any) => {
        const resp = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const newContact = await resp.json();
        // should not do this: direct state mutation
        this.state.contacts.unshift(newContact);
        this.forceUpdate(); // explicit re-render of this component
    }

    async componentDidMount() {
        const resp = await fetch(baseUrl + '?_sort');
        const contacts = await resp.json();
        contacts.sort((c1: any, c2: any) => c2.id - c1.id);
        this.setState({ contacts });
    }

    deleteContact = async (id: number) => {
        await fetch(baseUrl + id, { method: 'DELETE' });
        let contacts = [...this.state.contacts];
        const index = contacts.findIndex((c: any) => c.id === id);
        if (index !== -1) {
            contacts.splice(index, 1);
            this.setState({ contacts });
        }
    }

    render() {

        const store = {
            contacts: this.state.contacts,
            addContact: this.addContact,
            deleteContact: this.deleteContact
        };

        return (
            <AppContext.Provider value={store}>
                <div className="container">
                    <Header />
                    <div className="row">
                        <div className="col-md-3">
                            <ContactForm />
                        </div>
                        <div className="col-md-9">
                            <ContactList />
                        </div>
                    </div>
                    <Footer />
                </div>
            </AppContext.Provider >
        );
    }
}



export default App;