import Image from "next/image";
// import button from "@components/button"
export default function Home() {
  return (
    <div>
      <div className=" relative h-screen w-screen">
        <div className="w-[1440px] h-[400px] bg-green-400 ">
          <div className=" w-[1440px] h-[200px] bg-purple-700 rounded-3xl"></div>
          <div className="w-[1440px] h-[397px]"></div>
          <div className="absolute top-[80px] left-[220px] w-[60%] h-[40%] shadow-2xl bg-white rounded-3xl">
            <h1>This is text of H1</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
