import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
const {formState,onInputChange,onResetForm ,username,password,email}= useForm({
        username: '',
       email: '',
       password: "" 
    });

    // const {username,email,password} = formState ;
    // const [formState, setFormState] = useState({
    //    username: '',
    //    email: '',
    //    password: "" 
    // });

    // const {username,email,password} = formState ;

    // const onInputChange = ({target}) => {
    //     const {name,value} = target ;
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //     });
    // }

    // useEffect(() => {
    // //  console.log('useEffect called')
    // }, []);

    // useEffect(() => {
    //     // console.log('formState Changed')
    //    }, [formState]);
         
    // useEffect(() => {
    //     // console.log('email Changed')
    //    }, [email]);
    

  return (
    <>
    <h1>FormWithCustomHook</h1>
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
    <input
    type="password"
    className="form-control mt-2"
    placeholder="Contraseña"
    name="password"
    value={password}
    onChange={onInputChange}
    />
    <hr />
    <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    {/* {
       ( username==='strider2') && <Message />
    } */}
    </>
  )
}
