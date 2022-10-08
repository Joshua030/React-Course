import { useContext } from "react"
import { UserContext } from "./Context/UserContext.JSX"

export const HomePage= () => {
    const{user}=useContext(UserContext)
    return (  
     <>
     <h1>Home Page <small>{user?.name}</small></h1>
     <hr />
     <pre>
        {JSON.stringify(user,null,3)}
     </pre>
     </>
    )
  }