import React, { Component } from 'react';


class App extends Component {

    // member variable
    title: string;
    subHeading: string;

    constructor(props: any) {
        super(props); // a must when a class inherits from another
        this.title = 'Hello, World!';
        this.subHeading = 'Powered by React; Developed by Vinod.';
    }

    // class based component must define a function called render
    // which must return a JSX representing it's UI
    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <hr />
                <p>{this.subHeading}</p>
            </div>
        );
    }
}

export default App;