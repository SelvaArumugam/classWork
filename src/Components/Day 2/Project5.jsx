import { useState } from "react";

export default function BasicForm()
{
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [message,setMessage] = useState("");
    return(
        <>
        <input type = "text" placeholder="name" onChange={(event) => {
            setName(event.target.value);
        }}></input><br/>
        <input type = "text" placeholder="email" onChange={(event) => {
            setEmail(event.target.value);
        }}></input><br/>
        <input type = "text" placeholder="message" onChange={(event) => {
            setMessage(event.target.value);
        }}></input><br/>
        <button onClick={() =>{
            console.log({name});
            console.log({email});
            console.log({message});
        }
        }>Submit</button>
        </>
    );
}