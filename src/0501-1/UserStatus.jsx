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
    if(isOnline === null){
        return '대기중...'
    }
    return isOnline ? '온라인' : '오프라인'
}