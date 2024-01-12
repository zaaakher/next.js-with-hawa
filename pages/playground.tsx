import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Breadcrumb,
  Button,
  Checkbox,
  CodeBlock,
  Switch,
  // Toaster,
} from "@sikka/hawa";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@sikka/hawa/dialog";
import Link from "next/link";
import { Textarea } from "@sikka/hawa/textarea";
import { Toaster } from "@sikka/hawa/toaster";
import { useToast } from "@sikka/hawa/hooks";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { toast } = useToast();
  return (
    <div className="flex flex-col w-full h-screen p-4 bg-blue-300 md:bg-red-200">
      <Breadcrumb
        breadcrumbLinks={[
          { href: "/", label: "Home" },
          { href: "/playground", label: "Playground" },
        ]}
      />

      <h1 className="mb-3"></h1>
      <div className="flex max-w-sm">
        <CodeBlock code="npm i @sikka/hawa" />
      </div>

      <div>
        <Switch />
      </div>
      <div className="mt-4">
        <Checkbox
          id="deded"
          label={"This is the label"}
          sublabel={"This is the sublabel"}
        />
      </div>
      <Button onClick={() => toast({ title: "test" })}>Make Toast</Button>
      <div className="bg-red-400">
        <Toaster />
      </div>
      <Textarea placeholder="This is the placeholder" label={"testing label"} />
      <div className="mt-4">
        <Dialog>
          <DialogTrigger>
            <Button>Open Dialog</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                if you click yes the action will be done and you can't reverse
                it.
                {/* {t("are-you-sure-description")} */}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant={"destructive"}>Yes</Button>
              <Button variant={"outline"}>Cancel</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
