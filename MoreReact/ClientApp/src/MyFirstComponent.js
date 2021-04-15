import React from 'react';
import MySecondComponent from './MySecondComponent.js';

class MyFirstComponent extends React.Component {

    constructor() {
        super();

        // setInterval(() => {
        //     let { number } = this.state;
        //     number++;
        //     this.setState({ number });
        // }, 1000)
    }

    state = {
        number: 0,
        userInput: ''
    }

    onButtonClick = () => {
        let { number } = this.state;
        number++;
        this.setState({ number });
    }

    onTextboxChange = e => {
        const userInput = e.target.value;
        this.setState({ userInput });
    }

    render() {
        return (
            <div className="container">
                <h1>From my First Component</h1>
                <h1>The value in state is {this.state.number}</h1>
                <button className="btn btn-primary" onClick={this.onButtonClick}>Click me!!</button>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control" onChange={this.onTextboxChange} />
                    </div>
                    <div className="col-md-6">
                        <h2>User input: {this.state.userInput}</h2>
                    </div>
                </div>

                {/* <MySecondComponent number={this.state.number} /> */}
            </div>
        );
    }
}




export default MyFirstComponent;

//Create a react application that has a textbox and an H2 underneath. Whenever the user
//types into the textbox, the text should be displayed underneath, but in reverse!