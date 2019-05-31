import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contactActions';


class ContactForm extends Component<any> {
    state = {
        name: '', gender: 'Male', email: '', phone: '',
        city: 'Bangalore', picture: '/assets/images/default.png'
    }

    inputHandler = ({ target }: { target: any }) => {
        this.setState({ [target.name]: target.value });
    }

    submitHandler = (e: any) => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            name: '', gender: 'Male', email: '', phone: '',
            city: 'Bangalore', picture: '/assets/images/default.png'
        });
    }

    render() {

        return (
            <Fragment>
                <h3 className="text-center">Enter contact details</h3>
                <form className="form" onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name"
                            value={this.state.name}
                            onChange={this.inputHandler}
                            className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input id="email" type="text" name="email"
                            value={this.state.email}
                            onChange={this.inputHandler}
                            className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone number</label>
                        <input id="phone" type="text" name="phone"
                            value={this.state.phone}
                            onChange={this.inputHandler}
                            className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city"
                            value={this.state.city}
                            onChange={this.inputHandler}
                            className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="picture">Picture URL</label>
                        <input id="picture" type="text" name="picture"
                            value={this.state.picture}
                            onChange={this.inputHandler}
                            className="form-control" />
                    </div>                    <br />
                    <button className="btn btn-primary">Save details</button>
                </form>

            </Fragment>
        );
    }
}

export default connect(null, { addContact })(ContactForm);