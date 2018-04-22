import React, {Component } from 'react';

import '../Cta/Cta.sass'
import './ContactForm.sass'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


export default class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        console.log(e);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { name, email, message } = this.state;

        return (
            <form
                className="contact-form"
                name="contact"
                onSubmit={this.handleSubmit}
                autoComplete="on"
                netlify="true">
                <div className="contact-form__name">
                    <label htmlFor="name">
                        Your Name: 
                    </label>
                        <input
                            placeholder="Name"
                            id="name" 
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            autoComplete="name"
                            value={name} />
                </div>
                <div className="contact-form__email">
                    <label htmlFor="email">
                        Your Email: 
                    </label>
                    <input
                        placeholder="Email"
                        id="email"
                        type="email"
                        onChange={this.handleChange}
                        autoComplete="email"
                        name="email" />
                </div>
                <div className="contact-form__message">
                    <label htmlFor="message">
                        Message: 
                    </label>
                    <textarea 
                        rows="5"
                        placeholder="Message"
                        id="message"
                        onChange={this.handleChange}
                        autoComplete="off"
                        name="message" />
                </div>
                <div style={{ textAlign: 'right' }}>
                    <input className="cta cobalt" type="submit" value="Send" />
                </div>
            </form>
        )
    }
}