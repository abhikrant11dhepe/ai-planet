import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
import { ArrowRight, LogIn } from "lucide-react";
import Link from "next/link";
import FileUpload from "@/components/FileUpload";


export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-teal-200 to-lime-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-bold">Get Smart with Your PDFs</h1>
          </div>

          <div className="flex mt-4">
            {isAuth && (
              
                  <Button>
                    Go to Chats <ArrowRight className="ml-2" />
                  </Button>
              
            )}
          </div>

          <p className="max-w-xl mt-4 font-semibold text-lg text-slate-600">
          Elevate your research alongside millions. Our AI-powered PDF reader empowers you to instantly find answers, decipher intricate documents, and propel your research forward.
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload/>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
