// class component
// function component
import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Minh',
        address: 'Da Nang',
        age: '19',
    };

    //JXS
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;