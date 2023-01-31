import React from "react";

import User from "./components/user";
import { MyProvider } from "./context";
import Form from "./forms/forms";

const App = () => {
  return (
    <>
      <MyProvider>
        {/* <User  /> */}
        <Form />
      </MyProvider>
    </>
  );
};

export default App;
