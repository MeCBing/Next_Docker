import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <p>Back to home</p>
        </Link>
      </h2>
    </>
  );
}

// 連結同時傳送參數
// <Link
//   href={{
//     pathname: "/about",
//     query: { name: "test" },
//   }}
//   passHref
// >
//   <p>about page</p>
// </Link>;