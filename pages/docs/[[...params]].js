import { useRouter } from "next/router"

const Docs = () => {
    const router = useRouter()
    const { params =[]} = router.query
    if(params.length === 2){
        return (
            <>
            <h1>Docs feature {params[0]}  Page and concept  {params[1]} </h1>
            </>
        )
    } else if(params.length === 1){
        return (
            <>
            <h1>Docs feature {params[0]} Page</h1>
            </>
        )
    } else {
        return (
            <>
            <h1>Docs Home Page</h1>
            </>
        )
    }
}
export default Docs