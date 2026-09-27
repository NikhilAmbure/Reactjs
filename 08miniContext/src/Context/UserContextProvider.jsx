import React from "react";
import UserContext from "./UserContext.js";

// Wrap the tags with provider
// children => may contain the different component (<Login /> , etc.)

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return (
        // value should be passed with provider
        // So these values can be accessed by the {children}
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider