import React, {Component} from "react";
import {Link} from 'react-router-dom';

// const errorStyle = {
//     color: red
// };

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            topic: 'contactRequest',
            message: '',
            isChecked: false,
            errors:{
                name:"",
                email:"",
                message:""
            }
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    };

    handleSelectChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    };

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    };

    handleCheckbox = (event) => {

        this.setState({
            isChecked: !this.state.isChecked
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, topic, message, errors} = this.state;
        if (this.state.name.length < 1) {
            errors.name = "Pole imię i nazwisko musi zostać uzupełnione";
            this.setState({
                errors
            });

        }
        if (!this.state.email.includes("@")) {
            errors.email = "Pole email musi zostać uzupełnione i zawierać znak @";
            this.setState({
                errors
            });

        }
        if (this.state.message.length < 10) {
            errors.message = "Pole wiadomość musi zostać uzupełnione";
            this.setState({
                errors
            });
            return;
        }

        Email.send(email,
            "krzysztof.z.koziol@gmail.com",
            topic,
            message,
            "smtp.elasticemail.com",
            "krzysztof.z.koziol@gmail.com",
            "fa1dffc8-6f6e-4d18-bbca-f7ec65890316");

    };

    render() {
        const errorStyle = {
            color: "tomato",
            fontSize: "0.8em"
        };
        return <div>
            <div id="contact"/>
            <section className="container" id="contactSection">
                <h2>Kontakt</h2>
                <hr/>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h4>Agnieszka Kozioł</h4>
                        <h6>
                            <i className="far fa-envelope"/>
                            <a id="email" href="mailto:agnieszka.m.koziol@gmail.com">
                                agnieszka.m.koziol@gmail.com
                            </a>
                        </h6>
                        <h5><i className="fas fa-phone"/> 606 34 18 99</h5>
                        <hr/>
                        <h5><i className="fas fa-location-arrow"/> Skrzyszów 332B</h5>
                        <h5>33-156 Skrzyszów</h5>
                        <h5>Pn.-Pt. 9-16</h5>
                    </div>
                    <div className="col-12 col-md-8">
                        <form>
                            <fieldset>
                                <legend>
                                    <h2>Zadaj mi pytanie</h2>
                                </legend>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">
                                        Imię i nazwisko
                                        <span style={ errorStyle }>    {this.state.errors.name} </span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="formGroupExampleInput"
                                        value={this.state.name}
                                        onChange={this.handleNameChange.bind(this)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">
                                        Email
                                        <span style={ errorStyle }>   { this.state.errors.email}</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange.bind(this)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">
                                        Temat
                                    </label>
                                    <select
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                        value={this.state.topic}
                                        onChange={this.handleSelectChange.bind(this)}>
                                        <option value={'contactRequest'}>Prośba o kontakt</option>
                                        <option value={'inquiry'}>Zapytanie</option>
                                        <option value={'job'}>Praca</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">
                                        Wiadomość
                                        <span style={ errorStyle }>  {this.state.errors.message}</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={this.state.message}
                                        onChange={this.handleMessageChange.bind(this)}
                                        required>
                                    </textarea>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={this.state.isChecked} onChange={this.handleCheckbox.bind(this)}/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            Akceptuję{' '}
                                            <Link to='/policy' className="navbar-text"> Politykę prywatnosci</Link>
                                        </label>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-dark"
                                    value={"Submit"}
                                    onClick={ (e) => { this.handleSubmit(e); }}
                                    disabled={!this.state.isChecked} >
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </div>;
    }
}

export default Contact;