import Image from 'next/image'

export default function Home() {
  return (
    <div>
{/* ============================================================================= */}

{/* ============================================================================= */}

{/* ============================================================================= */}

<div className="main">
<svg viewBox="60 60 1000 170">
    <path fill="#e7008a" fill-opacity="0.3" d="M0,224L80,192C160,160,320,96,480,85.3C640,75,800,117,960,112C1120,107,1280,53,1360,26.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    <path fill="#e7008a" fill-opacity="0.1" d="M0,224L80,192C160,160,320,196,480,96C640,96,800,192,960,202.7C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    <path fill="#e7008a" fill-opacity="0.2" d="M0,32L60,74.7C120,117,240,203,360,224C480,245,600,203,720,170.7C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>

{/* ===================================================================================== */}
<div className="py-10 flex gam-6 flex-wrap gap-6 justify-center"> 

  <div className="order-last bg-pink-200   rounded-2xl shadow-2xl hover:bg-pink-400 transition-all duration-1000">
      <Image src= "/perfume.webp"   alt="" width="200" height="200" className="profile-image center py-3 px-3 flex-auto rounded-2xl h-40 w-40"></Image>
      <h3>ALLURI</h3>
  </div>    

  <div className="order-last bg-pink-200   rounded-2xl shadow-2xl hover:bg-pink-400 transition-all duration-1000">
      <Image src= "/perfumeJ.webp"  alt="" width="200" height="200"  className="profile-image center py-3 px-3 flex-auto rounded-2xl h-40 w-40"></Image>
      <h3>POEM</h3>
  </div>

  <div className="order-last bg-pink-200   rounded-2xl shadow-2xl hover:bg-pink-400 transition-all duration-1000">
      <Image src= "/perfume2.jpeg" alt=""  width="200" height="200" className="profile-image center py-3 px-3 flex-auto rounded-2xl h-40 w-40"></Image>
      <h3>CHANNEL</h3>
  </div>

  <div className="order-last bg-pink-200   rounded-2xl shadow-2xl hover:bg-pink-400 transition-all duration-1000">
      <Image src="/perfume3.jpeg"  alt=""   width="200" height="200" className="profile-image center py-3 px-3 flex-auto rounded-2xl h-40 w-40"></Image>
      <h3>ARTY</h3>
  </div>

  <div className="order-last bg-pink-200   rounded-2xl shadow-2xl hover:bg-pink-400 transition-all duration-1000">
      <Image src= "/perfume4.jpeg"  alt=""  width="200" height="200" className="profile-image center py-3 px-3 flex-auto rounded-2xl h-40 w-40"></Image>
      <h3>VALENTINES DAY</h3>
  </div>

  <div className="order-last bg-pink-200   rounded-2xl shadow-2xl hover:bg-pink-400 transition-all duration-1000">
      <Image src= "/perfume4.webp"  alt="" width="200" height="200" className="w-auto profile-image center py-3 px-3 flex-auto rounded-2xl h-40"></Image>
      <h3>BLOOM</h3>
  </div>


</div>
 
</div>



{/* // ====================================================== */}





{/* // ====================================================== */}

</div>
  )
}