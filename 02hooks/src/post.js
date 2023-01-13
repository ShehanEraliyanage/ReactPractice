import React,{useEffect} from "react";

const Post = ({ item }) => {
    
    useEffect(() => {
        console.log('new post added');

        return () => {
            console.log('removed')
        }
    },[])
    return (
            <div >
                <div>
                    Name : {item.name}
                    <br></br>
                    Body : {item.body}
                    <hr/>
                    </div>
            </div>
    )
}

export default Post