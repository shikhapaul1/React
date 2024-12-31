import React, {Component} from 'react';

class UserGreeting extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedin: true
        }
    }
    render()
    {
        return this.state.isLoggedin ? (
            <div>Hello Shikha</div>
        ) : (
            <div>Hello Guest</div>
        )
        // let message
        // if(this.state.isLoggedin)
        // {
        //     message = <div>Hello Shikha</div>
        // }
        // else
        // {
        //     message = <div>Hello Guest</div>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedin)
        // {
        //     return(
        //         <div>Hello Shikha</div>
        //     )
        // }
        // else
        // {
        //     return (
        //         <div>Hello Guest</div>
        //     )
        // }

        // return(
        //     <div>
        //         <div>Hello Shikha</div>
        //         <div>Hello Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting