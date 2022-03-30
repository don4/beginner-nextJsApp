
import { useRouter } from 'next/router';
// useRouter hooks is used for dynamic route for pages

export const getStaticPaths= async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json()
    const paths = data.slice(0, 5).map((currElem)=>{
                  return {
                        params:{
                          pageNo: currElem.id.toString()
                          }
                      }
                  })
    return {
    paths,
    fallback: false
    }
}

export const getStaticProps= async(context) =>{
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.pageNo}`);
  const data = await response.json()
  return{
    props:{
      data,
    }
  }
}
const PageNo = ({ data }) => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <>
        <h1> My blog {pageNumber} content </h1>
        <h2>{data.id} {data.title}</h2>
        <p>{data.body}</p>
        </>
    );
};
export default PageNo;
