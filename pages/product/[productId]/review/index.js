import Link from "next/link"

// just navigate to product/1/review/1 to see expected result
export async function getStaticPaths() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()    
    const paths = data.map((curElement)=>{
        return {
            params:{
                productId: curElement.id.toString(), // key name should be same as folder name
            }
        }
    })
    return{
        paths,
        fallback: 'blocking', // it will work same as true except Loading screen  but taking extra milli second.
    }
}
export  async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/`)
    const data = await response.json()
    if(params.productId === '1'){
        return {
            props:{
                productId: params.productId,
                comments : data.slice(0, 10),
            }
        }
    } else if(params.productId === '2') {
        return {
            props:{
                productId: params.productId,
                comments : data.slice(10, 20),
            }
        }
    } else if(params.productId === '3') {
        return {
            props:{
                productId: params.productId,
                comments : data.slice(20, 30),
            }
        }
    } else {
        return {
            notFound: true,
        }
    }    
}
const Reviews = ({ comments, productId }) =>{
return(
    <>
    <h1> Reviews for product {productId}</h1>
    <h3>Comments:</h3>
    {
        comments.map((comment)=>{
            return(
                <>
                <h2>
                <Link href={`/product/${productId}/review/${comment.id}`}>
                    <a>{`${comment.id} comment by ${comment.name} and user's email : ${comment.email}`}</a>
                </Link>
                </h2>
                </>
            )
        })
    }
    </>
)
}

export default Reviews