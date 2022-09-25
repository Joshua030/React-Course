import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
       username: 'strider',
       email: 'fernando@google.com' 
    });

    const {username,email} = formState ;

    const onInputChange = ({target}) => {
        const {name,value} = target ;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
    //  console.log('useEffect called')
    }, []);

    useEffect(() => {
        // console.log('formState Changed')
       }, [formState]);
         
    useEffect(() => {
        // console.log('email Changed')
       }, [email]);
    

  return (
    <>
    <h1>SimpleForm</h1>
    <hr />

    <input
    type="text"
    className="form-control"
    placeholder="username"
    name="username"
    value={username}
    onChange={onInputChange}
    />
    <input
    type="email"
    className="form-control mt-2"
    placeholder="fernando@google.com"
    name="email"
    value={email}
    onChange={onInputChange}
    />
    {
       ( username==='strider2') && <Message />
    }
    </>
  )
}
