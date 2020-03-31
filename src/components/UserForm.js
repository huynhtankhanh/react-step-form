import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails.js';
import FormPersonalDetails from './FormPersonalDetails.js';
import Confirm from './Confirm.js';
import Success from './Success.js';

export class UserForm extends Component {
state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
}

//Proceed to next step
nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    })
}

//Go beck to previous step
prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    })
}

//Handle input change
handleChange = input => e  => {
    this.setState({[input] : e.target.value});
}

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio} = this.state;
        const values = { firstName, lastName, email, occupation, city, bio};

        switch(step) {
            case 1:
                return (
                    <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                )
            case 2: 
                return (
                    <FormPersonalDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                )
            case 3:
                return (
                    <Confirm nextStep={this.nextStep} values={values}/>
                )
            case 4:
                return (
                    <Success />
                )               
        }
    }
}

export default UserForm;
