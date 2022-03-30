import Link from 'next/link'


export  async function getStaticProps() {
    console.log('Generating/ Regenerating Product lists')
    const response = await fetch(`http://localhost:4000/products`)
    const data = await response.json()
    if(!data.length) {
        return {
            notFound: true,
        }        
    }
    return {
        props:{
            data,
        },
        revalidate: 10
    }
}

const ProductList = ({ data }) => {
    return (
        <> 
            <h1>List of Products</h1>
            {data.map((product)=>{
                if(!product){
                    return null
                }
                return(
                    <>            
                    <h1><Link href = {`/product/${product.id}`}>
                    <a>{`${product.title} having price ${product.price}`}</a>
                    </Link></h1>
                    {/* <h1><Link href = '/product/2' replace>
                    replace props of Link compomnent has deleted immediate Previous history of page
                    <a> Product 2</a>
                    </Link></h1> */}
                    </>
                )
            })}
        </>
    )
}

export default ProductList