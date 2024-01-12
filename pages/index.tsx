import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@sikka/hawa";
import Link from "next/link";
import { Toast, ToastProvider } from "@sikka/hawa/toast";
import { useToast } from "@sikka/hawa/hooks";
import { Toaster } from "@sikka/hawa/toaster";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { toast } = useToast();
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-blue-500 md:bg-red-500">
      <Toaster />
      <h1 className="mb-3">
        This is a next.js application starter with Hawa UI Kit
      </h1>
      <div className="flex flex-row gap-2">
        <Link href={"https://github.com/sikka-software/hawa"}>
          <Button>Discover Hawa</Button>
        </Link>
        <Link href={"https://github.com/zaaakher/next.js-with-hawa"}>
          <Button variant={"outline"}>Source Code</Button>
        </Link>
        <Link href={"/playground"}>
          <Button variant={"outline"}>Playground</Button>
        </Link>
        <Link href={"/login"}>
          <Button variant={"outline"}>Login</Button>
        </Link>
        <Link href={"/layout_test"}>
          <Button variant={"outline"}>Layout Test</Button>
        </Link>
        <Button
          variant={"outline"}
          onClick={() => {
            toast({
              title: "test",
            });
            // console.log("making toast");
          }}
        >
          Toast
        </Button>
      </div>
    </div>
  );
}
