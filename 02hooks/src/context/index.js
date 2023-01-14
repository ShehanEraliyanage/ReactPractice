import React, { Component } from "react";

const myContext = React.createContext();

class MyProvider extends Component{
    
    state = {
          users : [
            { id: 1, name: 'Shehan' },
            { id: 2, name: 'Eranda' },
            { id: 3, name: 'Liyanage' },
        ],
        active: true

    }

    render() {
        return (
            <>
                <myContext.Provider value={this.state}>
                    {this.props.children}
            </myContext.Provider>
            </>
        )
    }
}

export {myContext,MyProvider}