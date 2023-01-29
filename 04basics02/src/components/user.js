import React from "react";

import UserHOC from "../hoc/userHoc";

const User = (props) => {
    console.log(props)
    return (
        <div>
            User
        </div>
    )
}

export default UserHOC(User, "hepw") ;