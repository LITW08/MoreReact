import React from 'react';

class Reversed extends React.Component {

    state = {
        reversedText: ''
    }

    onTextChange = e => {
        const text = e.target.value;
        this.setState({ reversedText: text.split('').reverse().join('') });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" onChange={this.onTextChange} className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <h2>{this.state.reversedText}</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default Reversed;