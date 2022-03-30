import { useRouter } from "next/router"
import Comment from '../../../../components/comment'

// just navigate to product/1/review/1 to see expected result
export  async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/')
    const data = await response.json()    
    const paths = data.slice(0, 30).map((curElement)=>{
        if(curElement.id <= 10){
            return {
                params:{
                    productId:'1',
                    reviewId: curElement.id.toString(), // key name should be same as file name
                }
            }
        } else if(curElement.id > 10 && curElement.id <= 20){
            return {
                params:{
                    productId:'2',
                    reviewId: curElement.id.toString(), // key name should be same as file name
                }
            }
        } else {
            return {
                params:{
                    productId:'3',
                    reviewId: curElement.id.toString(), // key name should be same as file name
                }
            }
        }
    })
    return {
        paths,
        fallback: true,
    }
}
export  async function getStaticProps(context) {
    const id = context.params.reviewId;
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const data = await response.json()
    if(!data.id) {
        return{
            notFound: true,
        }        
    }
    return{
        props:{
            comment : data,
        }
    }
}
const Review = ({ comment }) =>{
const router = useRouter()
const { productId, reviewId }  = router.query;

if(router.isFallback){
    return <h1>Loading...</h1>
}
return(
    <>
    <h1> Review {reviewId} for product {productId}</h1>
    <Comment comment={comment} />
    </>
)
}

export default Review

