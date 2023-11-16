import { useState } from "react";

export default function ToggleMessage()
{
    let [hide,setHide] = useState(true);
    let [btn,setbtn] = useState("Show Message")


    return(
        <p>
            <button onClick={() =>{
                setHide(!hide);
            }}>{btn}</button>
            {console.log(hide)}
            {hide == true ? <p></p> : <p>Show me</p>}
        </p>
    );
}