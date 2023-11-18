
import Image from 'next/image'
export default function Home() {
return (

  <div className="my-custom-bg-class h-screen">








<div className="text-5xl font-extrabold ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Buttons Background and Text Background Colors
  </span>
</div>


<button type="button"
              className=" bg-sky-500 rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-sky-200 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="dark">
  Sign up now
</button>


<button type="button"
              className=" bg-sky-500 rounded-full border-2 hover:bg-sky-600 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-1000 ease-in-out"
              data-te-ripple-init data-te-ripple-color="dark">
  Sign up now
</button>


 
{/* <div className="h-screen 
bg-[url(/AM.jpg)] bg-repeat">
</div> */}











{/* <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
<div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
<div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
 */}
{/* <div className="bg-scroll ..." style="background-image: url(/AM.jpg)"></div> */}



 
</div>

    
  )
  
  }