import useSWR from 'swr'

// clint side data fetching with swr custom hooks powered by Next Js
const fetcher = async () =>{
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json();
    return data
}
const DashBoardSWR = () =>{
    const {data, error} = useSWR('dashboard', fetcher)
    if(error) return "An error occurred"
    if(!data){
        return(
            <h2>Loading...</h2>
        )
    }
    return (
        <>
        <h1>Dashboard SWR</h1>
        <h2>{`Posts : ${data.posts}`}</h2>
        <h2>{`Likes : ${data.likes}`}</h2>
        <h2>{`Comments : ${data.comments}`}</h2>
        <h2>{`Followers : ${data.followers}`}</h2>
        <h2>{`Following : ${data.following}`}</h2>
        </>
    )
}

export default DashBoardSWR