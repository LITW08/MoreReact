import React from 'react';
import NumberForm from './NumberForm';
import NumberListDisplay from './NumberListDisplay';

class NumberLister extends React.Component {

    state = {
        number: '',
        numbers: []
    }

    onTextChange = e => {
        this.setState({ number: e.target.value });
    }

    onAddClick = () => {
        const { number, numbers } = this.state;
        const numbersCopy = [...numbers, number];
        this.setState({ numbers: numbersCopy, number: '' });
    }

    render() {
        return (
            <div className="container mt-5">
                <NumberForm 
                    onTextChange={this.onTextChange} 
                    onAddClick={this.onAddClick}
                    number={this.state.number} />
                <NumberListDisplay numbers={this.state.numbers} />
            </div>
        )
    }
}

export default NumberLister;