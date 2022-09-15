import Link from 'next/link'

// index.js must be needed for blog.
// default page means index.js will pick after hiiting /blog in url
export const getStaticProps = async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json()
  return{
    props:{
      data : data.slice(0,5),
    }
  }
}
const PostList = ({ data }) => {
    return (
    <>
    <h1>List of Posts</h1>
    {
      data.map((post)=>{
        return(
        <>
        <Link href={`/blog/${post.id}`}><a>{post.id}. {post.title}</a></Link>
        <hr/>
        </>
        )
      })
    }
    </>
    );
  };
  
  export default PostList;