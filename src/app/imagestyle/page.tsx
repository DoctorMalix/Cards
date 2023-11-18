
import Image from 'next/image'
export default function Home() {
return (

    <div>
{/* ================================================================ */}

    <p> Hover Effect on Allah Muhammad pics </p>


      <img  className="hover:scale-110 transition duration-1000 ease-in-out" src="/AM.jpg" alt="Allah Muhammad"/>
      <img  className="hover:scale-y-150 hover:scale-x-150 transition duration-1000 ease-in-out" src="/AM.jpg" alt="Allah Muhammad"/>
      <img  className="hover:-scale-y-50 hover:-scale-x-50 transition duration-1000 ease-in-out" src="/AM.jpg" alt="Allah Muhammad"/>
      <img  className="hover:rotate-6 transition duration-1000 ease-in-out" src="/AM.jpg" alt="Allah Muhammad"/>
      <img  className="hover:-rotate-6 transition duration-1000 ease-in-out" src="/AM.jpg" alt="Allah Muhammad"/>
      <img  className="hover:translate-y-6 hover:-translate-x-6 transition duration-1000 ease-in-out" src="/AM.jpg" alt="Allah Muhammad"/>
      <img  className="hover:skew-y-6 origin-top-right  transition duration-1000 ease-in-out" src="/AM.jpg" alt="Allah Muhammad"/>
  

{/* ===================================================================== */}

</div>

)}