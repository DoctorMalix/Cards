
import Image from 'next/image'
export default function Home() {
return (

    <div>

{/* ====================================[ MENU ]============================================= */}

<div className="container my-24 mx-auto md:px-6">
  
  <section className="mb-32">
    

    <div className="background-radial-gradient text-center text-white lg:h-[400px] h-[300px] lg:pt-[80px] pt-[55px]">
      <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>
    </div>

    <div className="grid px-6 md:px-12 lg:grid-cols-3 xl:px-32 margin-top: -200px">
      <div className="p-0 py-12">
        <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none">
          <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
            <p className="mb-4 text-sm uppercase">
              <strong>Basic</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>$ 129</strong>
              <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
            </h3>

            <button type="button" className="inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-ripple-init data-te-ripple-color="light">
              Buy
            </button>
          </div>
          <div className="p-6">
            <ol className="list-inside">
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Unlimited
                updates
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Git
                repository
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>npm
                installation
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 z-index: 1">
          <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
            <p className="mb-4 text-sm uppercase">
              <strong>Enterprise</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>$ 499</strong>
              <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
            </h3>

            <button type="button" className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
              Buy
            </button>
          </div>
          <div className="p-6">
            <ol className="list-inside">
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Unlimited
                updates
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Git
                repository
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>npm
                installation
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Code examples
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Premium
                snippets
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Premium
                support
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Drag&amp;Drop
                builder
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tl-none lg:rounded-bl-none">
          <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
            <p className="mb-4 text-sm uppercase">
              <strong>Advanced</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>$ 299</strong>
              <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
            </h3>

            <button type="button" className="inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-ripple-init data-te-ripple-color="light">
              Buy
            </button>
          </div>
          <div className="p-6">
            <ol className="list-inside">
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Unlimited
                updates
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Git
                repository
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>npm
                installation
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Code examples
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>Premium
                snippets
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>


{/* ====================================[ MENU ENDs Here===================================== */}
<div className="container my-24 mx-auto md:px-6 bg-red-300 rounded-3xl shadow-2xl">
    <section className="mb-32">
    <div className="flex flex-wrap bg-blue-300 rounded-3xl">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 bg-green-300">
        <div className="flex lg:py-12 bg-purple-300">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/033.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" alt="image bg-red" />
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




{/* =========================CARD ========================================= */}

{/*  */}
<div className="container my-24 mx-auto md:px-6">

  <section className="py-10 px-10 mb-32 text-center md:text-left bg-white rounded-3xl shadow-2xl">
    <div className="block rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/126.jpg" alt="Trendy Pants and Shoes"
            className="w-full rounded-lg lg:rounded-tr-none" />
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
          <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/126.jpg" alt="Trendy Pants and Shoes"
            className="w-full rounded-full lg:rounded-tr-none lg:rounded-bl-lg" />
            <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/126.jpg" alt="Trendy Pants and Shoes"
            className="w-full rounded-full lg:rounded-tl-none lg:rounded-br-lg" />
            <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/126.jpg" alt="Trendy Pants and Shoes"
            className="w-full rounded-full" />
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


{/* ================================================================ */}
<div className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
  <img
    src="/baba.jpg"
    className="max-w-xs" />
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-l from-white  to-black opacity-70"></div>
</div>
        
 {/* ========================[RIPLE EFFECT ON CLICK] ni hoa. check later======================================== */}
 <div className="grid grid-cols-2 gap-4">
  <div>
    <div
      className="relative w-full overflow-hidden bg-cover bg-no-repeat"
      data-te-ripple-init
      data-te-ripple-color="light">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg"
        className="w-full" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        
        ></div>
    </div>
  </div>
  <div>
    <div
      className="relative w-full overflow-hidden bg-cover bg-no-repeat"
      data-te-ripple-init>
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg"
        className="w-full" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{backgroundColor: "hsla(0, 0%, 98%, 0.6)"}}
        ></div>
    </div>
  </div>
</div>





</div>




    
   

    

    
  )
  
  }