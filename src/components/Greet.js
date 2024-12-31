import React from "react";

// function Greet()
// {
//     return <h1>Hello Shikha</h1>;
// }

// const Greet = () => <h1>Hello Shikha!</h1>

const Greet = porps => {
    console.log(porps)
    return (
        <h1>Hello {porps.name} a.k.a. {porps.heroName}</h1> 
    )
}
export default Greet