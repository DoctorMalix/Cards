import Image from "next/image";
import React from "react";
// import button from "@components/button"
export default function Home() {
  return (
    <div>
      <div className=" relative h-screen w-screen">
        <div className="w-[1440px] h-[400px] bg-green-400 ">
          <div className=" w-[1440px] h-[200px] bg-purple-700 rounded-3xl"></div>
          <div className="w-[1440px] h-[397px]"></div>
          <div className="flex flex-rows-2  absolute px-5 py-5  rounded-2xl top-[80px] left-[120px]  shadow-2xl bg-gray-200 rounded-3xl">
            {/* <h1>This is text of H1</h1> */}
            <div>
            <Image
              src="/kaka2.jpg"
              className="w-full rounded-t-full w-100 h-100"
              alt=""
              width="100"
              height="200"
            ></Image>
            </div>
            
            <div className="container flex flex-wrap:wrap">Muhammad Ahmed Afrasiab is a Senior Frontend developer in FADAOST.com
                 and working on very complicated projects. He is not only the coder, but a website designer also. And has strong esthatic sense.  </div>
          </div>
        </div>
      </div>
    </div>
  );
}
