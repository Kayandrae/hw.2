import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            url: ""

        }
    }

    /*The name on line 42 and line 18,
     the property value has a value of the name of the input*/  
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value });
    
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();

        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {
        console.log(this.state)
        return (

            <form onSubmit={this.onFormSubmit}>
                <label>
                    Name
            <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    Url
            <input
                        name="URL"
                        type="url"
                        value={this.state.URL}
                        placeholder="http://exampe.com"
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>

        )

    }
}

export default Form;
