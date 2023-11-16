import { useState } from "react";

export default function DragonBall()
{
    let [name,setName] = useState("Kaioken");
    let [cnt,setCnt] = useState(0);
    function IamClicked()
    {
        setCnt(cnt+1);
        if(cnt == 3)
        {
            setCnt(0);
            name == "Kaioken" ? setName("SuperSaiyan") : setName("Kaioken");
        }
    }
    return(
        <>
        {console.log(cnt)}
        <h1>My Current State : {name}</h1>
        <h1>Click : {cnt}</h1>
        <button onClick={IamClicked}>Click Me Four Times To Change</button>
        </>
    );
}