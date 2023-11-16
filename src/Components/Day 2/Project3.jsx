export default function InlineStyling()
{
    return(
        <div>
            <h1 style={{color : "green"}}>Hello</h1>
            <div style = {{
                backgroundColor:"lightblue",
                color:"darkblue",
                padding:"10px",
                border:"10px",
                borderColor:"blue",
                borderRadius:"5px"}}>
                <p style = {{
                    color:"darkblue",
                    fontSize: "16px",  
                }}>This is a paragraph with Inline Styles Applied</p>
            </div>
        </div>
    );
}