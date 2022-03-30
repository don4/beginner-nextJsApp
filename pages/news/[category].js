//server-side-data fetching dynmic url
export const getServerSideProps = async (context) =>{
    const { params, req, res, query } = context
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',['name=Praveen'])
    console.log(query)
    const { category } = params
    console.log(`pre-rendering Article List by category ${category}`)
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return{
        props:{
            articles: data,
            category,
        },
    }
    

}
const ArticleListByCategory = ({ articles, category }) =>{
    return(
        <>
        <h1>{`Article List of category ${category}`}</h1>
        {
            articles.map((article)=>{
                return(
                    <>
                    <h2>{article.title}</h2>
                    <h3>{article.category}</h3>
                    <p>{article.description}</p>
                    </>
                )
            })
        }
        </>
    )
}

export default ArticleListByCategory