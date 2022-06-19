import Image from "next/image";
import Link from "next/link";

export default function MyImg() {
  return (
    // <Image
    //   npmclassName={style.homeBgImg}
    //   src={bgImg}
    //   layout="fill"
    //   objectFit="cover"
    //   objectPosition="center"
    //   quality={65}
    //   priority={true}
    //   placeholder="blur"
    //   blurDataURL={DEFAULT_BASE64}
    //   alt="img"
    // />
    <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
        <a>this page!</a>
        </Link>
    </h1>
  );
}