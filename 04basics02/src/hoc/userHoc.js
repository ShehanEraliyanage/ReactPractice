import React from "react";

const UserHOC = (WrappedComponent,arg1) => {
    
    return (props) => {
        <>
            {console.log(props)}
            <arg1/>
            <WrappedComponent />
            <div>Hi there!</div>
        </>
    }
}

export default UserHOC;