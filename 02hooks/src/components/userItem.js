import React,{useContext} from "react";
import { myContext } from "../context";

const UserItem = () => {
    const context = useContext(myContext);    
    return (
        <>
            {
                context.active ? 
                    context.users.map((item) => (
                        <div key={item.id}>
                            Name: {item.name}
                        </div>
                    )) 
                    :null
            }
        </>
    )
}
export default UserItem