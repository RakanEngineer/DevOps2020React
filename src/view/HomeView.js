import React ,{useEffect, useState} from 'react'

export const HomeView = () => {
    const[count, setcount] = useState(0)
    useEffect(() => {
        alert("Copmonent is being rendered")
        return () => {
            alert("Component is being removed")
        }
    },[count] )
    return (
        <div>
            <h1>This is the HomeView</h1>
                <h2>{count}</h2>
                    <button onClick={() => setcount(count+1)} > Increment with 1</button>
        </div>
    )
}
