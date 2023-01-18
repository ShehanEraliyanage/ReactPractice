import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';


const MyContext = React.createContext();

class MyProvider  extends Component{
    
    state = {
        stage: 1,
        players: [],
        results:''
    }

    addPlayerHandler = (name)=> {
        this.setState((prevState) => ({
            players: [
                ...prevState.players,
                name
            ]
        }))
    }
    removePlayerHandler = (idx) => {
        let newPlyer = this.state.players;
        newPlyer.splice(idx, 1);
        this.setState({players: newPlyer})
    } 
    nexthandler = () => {
        const { players } = this.state;

        if (players.length < 2) {
            toast.error("You need More than one player", {
                position: toast.POSITION.TOP_LEFT,
                autoClose:2000
            })
        } else {
            console.log('move to stage two')
        }
    }


    render() {
        return (
            <>
            <MyContext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayerHandler,
                removePlayer: this.removePlayerHandler,
                next:this.nexthandler
            }}>
                {this.props.children}
            </MyContext.Provider>
                <ToastContainer/>
            </>    
        );
    }
}

export {MyContext,MyProvider}