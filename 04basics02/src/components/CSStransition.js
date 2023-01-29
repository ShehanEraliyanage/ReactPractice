import React, { Component } from 'react';
import {CSSTransition} from "react-transition-group"

class CssTr extends Component{

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
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout = {5000}
                >
                    <div className='cssSq' >
                        hellow!
                    </div>

                </CSSTransition>

                 <button onClick={this.showDiv}>
                    Toggle
                </button>
            </div>
        )
    }
}


export default CssTr;