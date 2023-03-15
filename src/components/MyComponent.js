// class component
// function component
import React from 'react';
import DisplayInfo from './DisplayInfor';
import UserInfor from './UserInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Minh", age: 16 },
            { id: 2, name: "Mo", age: 20 },
            { id: 3, name: "MoBlue", age: 69 },

        ]
    }


    //JXS
    render() {
        //DRY: don't repeat yourself
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfo listUsers={this.state.listUsers} />


            </div>
        );
    }
}

export default MyComponent;