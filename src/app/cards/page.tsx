import Image from 'next/image'
export default function Home() {
return (

    <div>

{/* ====================================[ Wavy Cards ]============================================= */}
<div className="container my-24 mx-auto md:px-6 bg-white">
  
  <section className="mb-32 text-center lg:text-left">
    <h2 className="mb-12 text-center text-3xl font-bold">
      Projects we are proud of
    </h2>

    <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12 bg-white">
      <div className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0" data-te-ripple-init data-te-ripple-color="light">
        <div className="relative overflow-hidden bg-white bg-cover bg-no-repeat">
          <Image src="/126.jpg" 
            className="w-full rounded-t-lg"
              alt=""
              width="100"
              height="100"
          ></Image>
          
          <svg viewBox="60 60 1000 170">
                <path fill="#a2d9ff" fill-opacity="0.5" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,256C672,256,768,256,864,245.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#0099cc" fill-opacity="0.5" d="M0,32L48,74.7C96,117,192,203,288,229.3C384,256,480,224,576,213.3C672,203,768,213,864,186.7C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,192L48,165.3C96,139,192,85,288,101.3C384,117,480,203,576,234.7C672,267,768,245,864,213.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,32L48,42.7C96,53,192,75,288,117.3C384,160,480,224,576,218.7C672,213,768,139,864,122.7C960,107,1056,149,1152,192C1248,235,1344,277,1392,298.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          {/* <a href="#!">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a> */}
          
                    
          <svg className="absolute left-0 bottom-0 text-black dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>


        </div>
        <div className="p-6">
          <h5 className="mb-4 text-lg font-bold">Nostalgic waves</h5>
          <p className="mb-6">
            1111111111111 Ut pretium ultricies dignissim. Sed sit amet mi eget urna
            placerat vulputate. Ut vulputate est non quam dignissim
            elementum. Donec a ullamcorper diam.
          </p>
          <a href="#!" data-te-ripple-init data-te-ripple-color="light"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Learn
            more</a>
        </div>
      </div>

      <div className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
        <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
        <Image src="/126.jpg" 
            className="w-full rounded-t-lg"
              alt=""
              width="100"
              height="100"
          ></Image>

          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
          <svg className="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor"
              d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
        <div className="p-6">
          <h5 className="mb-4 text-lg font-bold">Winter wildlife</h5>
          <p className="mb-6">
            22222222222222 Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
            orci, nec ornare metus semper sed. Integer volutpat ornare erat
            sit amet rutrum.
          </p>
          <a href="#!" data-te-ripple-init data-te-ripple-color="light"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Learn
            more</a>
        </div>
      </div>

      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
          <Image src="/126.jpg" 
            className="w-full rounded-t-lg"
              alt=""
              width="100"
              height="100"
          ></Image>
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
          <svg className="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor"
              d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
        <div className="p-6">
          <h5 className="mb-4 text-lg font-bold">Camping travel</h5>
          <p className="mb-6">
            3333333333 Curabitur tristique, mi a mollis sagittis, metus felis mattis
            arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
            massa volutpat feugiat.
          </p>
          <a href="#!" data-te-ripple-init data-te-ripple-color="light"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Learn
            more</a>
        </div>
      </div>
    </div>
  </section>
  
</div>
{/* ====================================[ Wavy Cards Ends here ]============================================= */}
<div className="container my-24 mx-auto md:px-6 bg-red-300 rounded-3xl shadow-2xl">
    <section className="mb-32">
    <div className="flex flex-wrap bg-blue-300 rounded-3xl">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 bg-green-300">
        <div className="flex lg:py-12 bg-purple-300">
        <Image src="/126.jpg" 
            className="w-full rounded-t-lg"
              alt=""
              width="100"
              height="100"
          ></Image>
        </div>
      </div>
      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 bg-teal-400">
        <div className="flex h-full items-left rounded-lg bg-primary p-6 text-center text-white lg:pl-12 lg:text-left">
          <div className="lg:pl-12 bg-purple-700">
            <h2 className="mb-6 text-3xl font-bold">
              What are you waiting for?
            </h2>
            <p className="mb-6 pb-2 lg:pb-0">
            Thank you very much.
              Most of all, let them be, repulse or by which we accuse anyone in whom at
              for to some she is laborious to him. So work on it
              distinction him neither!
            </p>
            <button type="button"
              className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="light">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>




{/* =========================CARD 1========================================= */}

{/*  */}
<div className="container my-24 mx-auto md:px-6">

  <section className="py-10 px-10 mb-32 text-center md:text-left bg-white rounded-3xl shadow-2xl">
    <div className="block rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
        <Image src="/126.jpg" 
            className="w-full rounded-t-full"
              alt=""
              width="100"
              height="100"
          ></Image>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-6 pb-2 text-3xl font-bold">
              Top Quality Product
            </h2>
            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              soluta corporis voluptate ab error quam dolores doloremque,
              quae consectetur.
            </p>
            <div className="mb-6 flex flex-wrap border-s-emerald-300">
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Support 24/7
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Analytics
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Components
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Updates
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Reports
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Mobile
                </p>
              </div>
            </div>
            <button type="button"
              className="inline-block rounded bg-neutral-800 px-12 pt-3.5 pb-3 text-sm font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-50 dark:text-neutral-800 dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
              data-te-ripple-init data-te-ripple-color="light">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>


  </div>
{/* ==================================== [ CARD 2] ================================================== */}

{/*  */}
<div className="container my-24 mx-auto md:px-6">

  <section className="py-10 px-10 mb-32 text-center md:text-left bg-white rounded-3xl shadow-2xl">
    <div className="block rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
        <Image src="/126.jpg" 
            className="w-full rounded-t-full rounded-bl-2xl"
              alt=""
              width="100"
              height="100"
          ></Image>

          <Image src="/126.jpg" 
            className="w-full rounded-full rounded-tr-2xl"
              alt=""
              width="100"
              height="100"
          ></Image>

          
<Image src="/126.jpg" 
            className="w-full rounded-full rounded-bl-2xl"
              alt=""
              width="100"
              height="100"
          ></Image>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-6 pb-2 text-3xl font-bold">
              Top Quality Product
            </h2>
            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              soluta corporis voluptate ab error quam dolores doloremque,
              quae consectetur.
            </p>
            <div className="mb-6 flex flex-wrap border-s-emerald-300">
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Support 24/7
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Analytics
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Components
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Updates
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Reports
                </p>
              </div>
              <div className="mb-4 w-full md:w-4/12">
                <p className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Mobile
                </p>
              </div>
            </div>
            <button type="button"
              className="inline-block rounded bg-neutral-800 px-12 pt-3.5 pb-3 text-sm font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-50 dark:text-neutral-800 dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
              data-te-ripple-init data-te-ripple-color="light">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
{/* ==================================== [ CARD 2 ends here] ================================================== */}



 
</div>

    
  )
  
  }