import React, { Component } from 'react';
import {Transition} from "react-transition-group"

class TransitionComp extends Component{

    state = {
        show: true,
    }

    showDiv = () =>{
        this.setState({
            show: !this.state.show ,
        })
    }

    render(){
        return(
            <>
                <Transition
                    in = {this.state.show}
                    timeout = {2000}
                >
                    {state => (
                        <div
                            style={{
                                background: "red", height: "100px", transition: "all 2s ease",
                                opacity: state === 'entering' || state === 'exited' ? 0 : 1
                            }}
                        >
                            {state}
                        </div>
                    ) }
                </Transition>
                
                <button onClick={this.showDiv}>
                    Toggle
                </button>
            </>
        )
    }
}


export default TransitionComp;