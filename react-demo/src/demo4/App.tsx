import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactCard from './components/ContactCard';
import ContactList from './components/ContactList';

const baseUrl = 'http://localhost:4000/contacts/';

class App extends Component {
    state = { contacts: [] }

    async componentDidMount() {
        const resp = await fetch(baseUrl);
        const contacts = await resp.json();
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
        return (
            <div className="container">
                <Header />
                <ContactList
                    contacts={this.state.contacts}
                    deleteContact={this.deleteContact} />
                <Footer />
            </div>
        );
    }
}

export default App;