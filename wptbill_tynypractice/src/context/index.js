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
            this.setState({
                stage: 2
            }, () => {
                setTimeout(() => {
                    this.genarateLooser();
                },2000)
            })
        }
    }

    genarateLooser = () => {
        const { players } = this.state;
        this.setState({
            results: players[Math.floor(Math.random() * players.length)]
        })
    }
    resetGame = () => {
        this.setState = ({
        stage: 1,
        players: [],
        results:''
        })
    }

    render() {
        return (
            <>
            <MyContext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayerHandler,
                removePlayer: this.removePlayerHandler,
                next: this.nexthandler,
                checkLosser: this.genarateLooser,
                resetGame:this.resetGame
            }}>
                {this.props.children}
            </MyContext.Provider>
                <ToastContainer/>
            </>    
        );
    }
}

export {MyContext,MyProvider}