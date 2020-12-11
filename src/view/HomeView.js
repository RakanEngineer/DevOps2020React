import React ,{useEffect, useState} from 'react'
import Axios from 'axios'


export const HomeView = () => {
    const [data,setData] = useState()
    
    const fetchDatafromPekemonAPI = () => {
        Axios.get('https://pokeapi.co/api/v2/pokemon/charizard')
        .then((response)=> {setData(response.data)})
        .catch((error)=>{console.log(error)})
    }
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
                    <br/>
                    <button onClick={() => fetchDatafromPekemonAPI()}>fetch data from Pekemon API</button>
                    <button onClick = {() => console.log(data)}>dispaly state data</button>
                    <h1>name: {data?.name}</h1>
                    <h1>weight: {data?.weight} lb</h1>
                    <h1>height: {data?.height}</h1>
        </div>
    )
}
