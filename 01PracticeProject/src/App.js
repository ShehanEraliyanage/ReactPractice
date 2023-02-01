import React, { useState } from "react";

import AddUSer from "./components/Users/addUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUSer onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
