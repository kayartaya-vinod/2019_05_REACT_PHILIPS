import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
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
            </Provider>
        );
    }
}



export default App;