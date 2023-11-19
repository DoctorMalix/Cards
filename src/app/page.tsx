import Image from 'next/image'

export default function Home() {
  return (
 <div>

{/* ===================================================================================== */}
  <div className="main">
    <div className="py-10 px-20 flex rounded-2xl shadow-2xl flex-wrap gap-6 bg-gray-100 justify-center"> 
        <div className="py-10 px-20 flex rounded-2xl shadow-2xl gam-6 flex-wrap gap-6  bg-white justify-center"> 

            <div className="sm: order-last bg-white">
                <Image src= "/baba1.jpg" className="sm: rounded-full center py-3 px-3 flex-auto  h-40 w-40 shadow-2xl"  alt="" width="200" height="200" ></Image>
                <h2>Muhammad Rauf</h2>
                <h4>Managing Director</h4>
            </div>    

            <div className="sm: order-last bg-white">
                <Image src= "/kaka2.jpg" className="sm: rounded-full center py-3 px-3 flex-auto  h-40 w-40 shadow-2xl"  alt="" width="200" height="200" ></Image>
                <h2>Farzand Rauf</h2>
                <h4>Front-End Developer</h4>
            </div>    

            <div className="sm: order-last bg-white">
                <Image src= "/kaki.jpg" className="sm: rounded-full center py-3 px-3 flex-auto  h-40 w-40 shadow-2xl"  alt="" width="200" height="200" ></Image>
                <h2>Dukhtar Rauf</h2>
                <h4>Chief Executive Officer</h4>
            </div>    

            <div className="sm: order-last bg-white">
                <Image src= "/kaka1.jpg" className="sm: rounded-full center py-3 px-3 flex-auto  h-40 w-40 shadow-2xl"  alt="" width="200" height="200" ></Image>
                <h2>Farzand Rauf</h2>
                <h4>Front-End Developer</h4>
            </div>    
        </div>
      </div>
    </div>

   
</div>
  )
}
