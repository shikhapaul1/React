import React, {Component} from 'react';

class EventBind extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            message: 'Hello Kitty'
        }
        this.EventHandler = this.EventHandler.bind(this)
    }

    EventHandler() {
        this.setState ({
            message: 'GoodBye Kitty'
        })
        console.log(this)
    }   

    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.EventHandler.bind(this)}>Click Here</button> */} 
                {/* <button onClick={() => this.EventHandler()}>Click Here</button> */}
                <button onClick={this.EventHandler}>Click Here</button>
            </div>
        )
    }
}

export default EventBind