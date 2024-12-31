import React from "react"

const Hello = () => {
    // return (
    //     <div className="dummyContent">
    //         <h1>using JSX</h1>
    //     </div>
    // )

  
    return React.createElement(
    
        'div',
        {id: 'Hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Shikha')
        )
    
} 

export default Hello