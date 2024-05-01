import { useState,useEffect } from "react";

export default function useState(props){
    const[isOnline, setIsOnLine] = useState(null)

    userEffect(()=>{
        function handleStatusChange(status){
            setIsOnLine(status.isOnline)
        }

        ServerAPI.subscibeUserStatus(props.user.id, handleStatusChange)
        return() =>{
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        }
    })
    
        return(
            <li style={{color: isOnline ? 'green' : 'black'}}>
            {props.user.name}
            </li>
        )
    }
    
