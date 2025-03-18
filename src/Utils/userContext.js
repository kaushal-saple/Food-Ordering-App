import { createContext } from "react";

const userContext = createContext({
    loggedInUser : "Dummy user"
})

export default userContext;