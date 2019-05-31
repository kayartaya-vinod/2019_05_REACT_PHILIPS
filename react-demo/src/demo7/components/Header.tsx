import React from 'react';
import AppContext from '../AppContext';

/*
const Header (props:any) => (
    <AppContext.Consumer>
        {
            (context)=>(
                <Some-JSX></Some-JSX>
            )
        }
    </AppContext.Consumer>
)
*/
const Header = () => (
    <AppContext.Consumer>
        {
            (context:any) => (
                <div>
                    <h1 className="alert alert-info">Addressbook App - V1.0</h1>
                    <hr />
                    <p>There are {context.contacts.length} contacts.</p>
                </div>
            )
        }
    </AppContext.Consumer>
);

export default Header;