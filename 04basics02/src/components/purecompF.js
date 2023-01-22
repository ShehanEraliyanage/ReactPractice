import React, { useState } from "react";

const PureCompF = () => {
    const [name, setName] = useState("Shehan")
    console.log('render')

    return (
        <>
            <h3>{name}</h3>
            <button
                onClick={
                    ()=>setName('Shehan')
                }
            >
                click here
            </button>
        </>
    )
}
export default PureCompF;