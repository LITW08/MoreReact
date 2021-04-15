import React from 'react';

class NumberForm extends React.Component {

    render() {

        return (
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control" value={this.props.number} onChange={this.props.onTextChange} />
                </div>
                <div className="col-md-6">
                    <button style={{fontSize: 30}} className="btn btn-danger" onClick={this.props.onAddClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default NumberForm;