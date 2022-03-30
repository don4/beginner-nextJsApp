import Link from 'next/link';
// we can use Link or LINK here.
const NavHeader = () =>{
return (
<>
<header>
  <nav>
    <ul>
      <li>
        <Link href='/home'>
        <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/contact'>
        <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href='/blog'>
        <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href='/product'>
        <a>Product</a>
        </Link>
      </li>
      <li>
        <Link href='/docs'>
        <a>Docs</a>
        </Link>
      </li>
      <li>
        <Link href='/news'>
        <a>News</a>
        </Link>
      </li>
    </ul>
  </nav>
</header>
</>
);
};
const HelloWorld = () => {
  return (
  <>
  <NavHeader/>
  <h1>Hello World !</h1>
  </>
  );
};

export default HelloWorld;