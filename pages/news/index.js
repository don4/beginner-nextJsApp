import Link from 'next/link'

//server-side-data fetching for static url
export const getServerSideProps = async () =>{
    console.log('pre-rendering Article List')
    const response = await fetch('http://localhost:4000/news/')
    const data = await response.json();
    return{
        props:{
            articles: data,
        },
    }
}

const News = ({ articles }) =>{
    return(
        <>
        <h1>List of News Articles</h1>
        {
            articles.map((article)=>{
                return (
                    <>
                    <h2>{article.title}</h2>
                    <Link href={`/news/${article.category}`}><a>{article.category}</a></Link>
                    </>
                )
            })
        }
        </>
    )
}
export default News

