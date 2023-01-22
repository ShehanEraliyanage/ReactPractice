import React, { Component } from "react";


class PureComp extends Component {

    state = {
        name:"Shehan",
    }

    shouldComponentUpdate(nextprops,nextstate) {
        if (nextstate.name === this.state.name) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        console.log('Render')
        return (
            <>
                <h3>{this.state.name}</h3>
                <button
                    onClick={
                        ()=>this.setState({name:'sa'})
                    }
                >
                    click here
                </button>
            </>
        )
    }
}

export default PureComp;

// const PureComp = () => {
//     return (
//         <>  
 
//         test
//         </>
//     )
// }

// export default PureComp;