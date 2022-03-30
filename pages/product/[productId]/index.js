import Link from 'next/link'

export  async function getStaticPaths() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()    
    const paths = data.map((curElement)=>{
        return {
            params:{
                productId: curElement.id.toString(), // key name should be same as folder name
            }
        }
    })
    return {
        paths,
        fallback: true,
    }
}
export  async function getStaticProps(context) {
    const id = context.params.productId;
    console.log(`Generating/ Regenerating Product ${id}`)
    const response = await fetch(`http://localhost:4000/products/${id}`)
    const data = await response.json()
    if(!data.id) {
        return {
            notFound: true,
        }        
    }
    return {
        props:{
            data,
        },
        revalidate: 10 // to revalidate the data change and generate HTML for latest data
    }
}

const ProductDetails = ({ data }) =>{
    if(!data){
        return null
    }
    return (
        <>
        <h1>{`Details for product ${data.id} having Price ${data.price}`}</h1>
        <h2>{`Title: ${data.title}`}</h2>
        <h2>{`Price: ${data.price}`}</h2>
        <h2>{`Description: ${data.description}`}</h2>
        <h3><Link href={`/product/${data.id}/review`}><a>Review</a></Link></h3>
        </>
    )
}

export default ProductDetails