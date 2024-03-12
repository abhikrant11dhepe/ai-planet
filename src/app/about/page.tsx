export default function Page() {
    return (
      <div className="w-screen min-h-screen bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
            <div className="flex flex-col items-center text-center absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center">
                    <h1 className="text-5xl font-bold pt-60"><span className="text-emerald-500">ai</span> planet</h1>
                    
                </div>

                <div className="flex items-center">
                    <h1 className=" mt-3 text-4xl font-bold">Revolutionizing PDFs with AI</h1>
                    </div>

                <div className="flex items-center ">
                    <h1 className=" mt-3 text-2xl font-semibold">What we do?</h1>
                </div>

                <div className="flex items-center font-lightbold text-lg mt-3 justify-center">
                <p>We are passionate about transforming the way you interact with documents. Our website harnesses the power of cutting-edge AI to breathe life into static PDFs, making them dynamic, interactive, and effortlessly understandable. 
                    Our AI will analyze the content and provide concise answers, saving you valuable time and effort.</p>
                </div>

            </div>
        </div>
    );
  }