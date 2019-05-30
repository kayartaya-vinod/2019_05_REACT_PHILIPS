import React, { Component } from 'react';

class App extends Component {

    isUpper = true;
    state = { name: 'VINOD KUMAR K' };

    toggleCase = () => {
        if (this.isUpper) {
            // direct mutation is not going to affect lifecycle
            // this.state.name = this.state.name.toLowerCase();
            this.setState({name: this.state.name.toLowerCase()});
        }
        else {
            // this.state.name = this.state.name.toUpperCase();
            this.setState({name: this.state.name.toUpperCase()});
        }
        this.isUpper = !this.isUpper;
        console.log('name is', this.state.name);
    }

    render() {
        console.log('App.render() called')
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={this.toggleCase}>Toggle case</button>
            </div>
        );
    }
}

export default App;