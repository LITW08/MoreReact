import React from 'react';

class MySecondComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>From my Second Component</h2>
                <h3>The value passed down was: {this.props.number}</h3>
            </div>
        );
    }
}

export default MySecondComponent;