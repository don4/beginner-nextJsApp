import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// file name must be 404.js for custom file not found error.
const handleInput = (router) => {
    router.push('/home');
};

const ErrorPage = () => {    
    const router = useRouter();  
    // without user intevention, user redirect to Home page after 3 Secs.
    useEffect(() =>{
        setTimeout(()=>{
            handleInput(router);
        }, 3000);
    }, [router]);
    return (
        <>
        <p>We are sorry, page not found</p>        
        {/* <p><a href="/home">Back to home page with refresh</a></p> */}
        <p><a onClick={handleInput}>Back to home page without refresh by next router and react hooks</a></p>
        <p><Link href="/home"><a>Back to home page without refresh</a></Link></p>
        </>
    );
};

export default ErrorPage;