import Image from 'next/image'

export default function Home() {
  return (
 <div>

        <div className="main">
            <svg viewBox="60 60 1000 170">
                <path fill="#a2d9ff" fill-opacity="0.5" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,256C672,256,768,256,864,245.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#0099cc" fill-opacity="0.5" d="M0,32L48,74.7C96,117,192,203,288,229.3C384,256,480,224,576,213.3C672,203,768,213,864,186.7C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,192L48,165.3C96,139,192,85,288,101.3C384,117,480,203,576,234.7C672,267,768,245,864,213.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,32L48,42.7C96,53,192,75,288,117.3C384,160,480,224,576,218.7C672,213,768,139,864,122.7C960,107,1056,149,1152,192C1248,235,1344,277,1392,298.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
            {/* ===================================================================================== */}
  <div className="main">
    <div className="py-10 px-20 flex rounded-2xl shadow-2xl flex-wrap gap-6 bg-gray-100 justify-center"> 
        <div className="py-10 px-20 flex rounded-2xl shadow-2xl gam-6 flex-wrap gap-6  bg-white justify-center"> 

            <div className="order-last bg-white">
                <Image src= "/baba1.jpg" className="rounded-full center py-3 px-3 flex-auto  h-40 w-40 shadow-2xl"  alt="" width="200" height="200" ></Image>
                <h2>Muhammad Rauf</h2>
                <h4>Managing Director</h4>
            </div>    

            <div className="order-last bg-white">
                <Image src= "/kaka2.jpg" className="rounded-full center py-3 px-3 flex-auto  h-40 w-40 shadow-2xl"  alt="" width="200" height="200" ></Image>
                <h2>Farzand Rauf</h2>
                <h4>Front-End Developer</h4>
            </div>    

            <div className="order-last bg-white">
                <Image src= "/kaki.jpg" className="rounded-full center py-3 px-3 flex-auto  h-40 w-40 shadow-2xl"  alt="" width="200" height="200" ></Image>
                <h2>Dukhtar Rauf</h2>
                <h4>Chief Executive Officer</h4>
            </div>    

            <div className="order-last bg-white">
                <Image src= "/kaka1.jpg" className="rounded-full center py-3 px-3 flex-auto  h-40 w-40 shadow-2xl"  alt="" width="200" height="200" ></Image>
                <h2>Farzand Rauf</h2>
                <h4>Front-End Developer</h4>
            </div>    
        </div>
      </div>
    </div>

    <div className="flexmain  ">
        <h1> Using Flex Split</h1>
        {/* ======================================================== */}
        
<section className="container flex-col">
<div className="top rounded-t-3xl shadow-2xl">
    
                
                    <h1>Join Our Community</h1>
                    <h2>30-days, hassle-free money back guarantee</h2>
                    <h4>Gain access to our full library of tutorials along with expert code reviews.</h4>
                    <h4>Perfect for any developers who are serious about honing their skills</h4>
                
</div>
    <section className="container flex-row">
            <div className="left-half  rounded-bl-3xl shadow-2xl">
                <article>
                    <h1>Monthly Subscription</h1>
                    <h1>$29</h1> 
                    <h3>Per month</h3>
                    <h3>Full Access for less than $1 a day</h3> 
                    <button> Signup </button>
                </article>
            </div>
            
  <div className="right-half rounded-br-3xl shadow-2xl">
        <article>
            <h1> Why Us</h1>
            <h3>Tutorials by industry experts</h3>
            <h3>Peer to expert code review</h3>
            <h3>Codeing easness</h3>
            <h3>Access to our GitHub repos</h3>
            <h3>Community forum</h3>
            <h3>Flashcard Decks</h3>
            <h3>Expert Videos every week</h3>
        </article>
  </div>
</section>

</section>


        {/* ========================================================== */}
    

    <h1> Using GRID Split</h1>
        {/* ======================================================== */}



 </div>




</div>
  )
}