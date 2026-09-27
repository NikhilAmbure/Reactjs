// It should be .js file
import React from "react";

const UserContext = React.createContext()
// Every Context is a provider (Global variable)
// <UserContext>
        // <Login />
        // <Dashboard />
// <UserContext/>
// All the between components will gain the access to that provider's data

export default UserContext;