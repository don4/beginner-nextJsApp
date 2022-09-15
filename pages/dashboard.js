import { useState, useEffect } from "react"
//clint-side data fetching with react Hooks in next js
const DashBoard =() =>{
    const [isLoading, setLoading] = useState(true)
    const [dashBoardData, setDashBoardData] = useState({})
    useEffect(()=>{
        const fetchDashBoardData = async () =>{
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json();
            setDashBoardData(data)
            setLoading(false)
        }
        fetchDashBoardData()
    }, [])

    if(isLoading){
        return(
            <h2>Loading...</h2>
        )
    }
    return(
        <>
        <h1>Dashboard</h1>
        <h2>{`Posts : ${dashBoardData.posts}`}</h2>
        <h2>{`Likes : ${dashBoardData.likes}`}</h2>
        <h2>{`Comments : ${dashBoardData.comments}`}</h2>
        <h2>{`Followers : ${dashBoardData.followers}`}</h2>
        <h2>{`Following : ${dashBoardData.following}`}</h2>
        </>
    )
}

export default DashBoard