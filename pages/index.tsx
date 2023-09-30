import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@sikka/hawa";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="mb-3">This is a next.js application starter with Hawa UI Kit</h1>
      <div className="flex flex-row gap-2">
        <Link href={"https://github.com/sikka-software/hawa"}>
          <Button>Discover Hawa</Button>
        </Link>
        <Link href={"https://github.com/zaaakher/next.js-with-hawa"}>
          <Button variant={"outline"}>Source Code</Button>
        </Link>
      </div>
    </div>
  );
}
