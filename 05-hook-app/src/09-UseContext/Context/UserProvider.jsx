import { useState } from "react"
import { UserContext } from "./UserContext.JSX"

export const UserProvider = ({children}) => {
//     const user = {
// id:123,
// name: 'Jose Ceballos',
// emails: 'fernando@google.com'
 const [user, setUser]= useState()
     
  return (
    <UserContext.Provider value = {{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
