import { useState } from "react";

export default function SignUp(){
    const [name, setName] = useState()

    const handlechangeName = (e) =>{
        setName(e.target.value)
    }
    const handleSubmit = (e) =>{
        alert(`이름 : ${name}`)
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name} onChange={handlechangeName} />
            </label>
            <button type="submit">제출</button>
        </form>
        
    )
}