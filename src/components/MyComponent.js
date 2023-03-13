// class component
// function component
import React from 'react';
import DisplayInfo from './DisplayInfor';
import UserInfor from './UserInfor';

class MyComponent extends React.Component {



    //JXS
    render() {
        const myInfor = ["ab", "c", "a"];
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfo name="Hoi Dan IT" age="30" />
                <hr />
                <DisplayInfo name="Hoi Dan IT" age={26} myInfor={myInfor} />

            </div>
        );
    }
}

export default MyComponent;