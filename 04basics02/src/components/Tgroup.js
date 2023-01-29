import React, { Component } from 'react';


class Tgroup extends Component{
    state = {
        items:[]
    }
    
    addElements () {
      
    }

    generateNumber(){
       
    }

    removeNumber(){
      
    }

    render(){
        return(
            <div>
                {this.addElements()}
             
                <div className="btns">
                    <button onClick={()=> this.generateNumber()}>Add Elements</button>
                    <button onClick={()=> this.removeNumber()}>Remove Elements</button>
                </div>
            </div>
        )
    }



}


export default Tgroup;