import Image from 'next/image'
export default function Home() {
return (

    <div>
{/* ================================================================ */}

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        {/* <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a> */}
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
            <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
                    </button>
                    <div id="mega-menu-dropdown" className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Pro Version
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Playground
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
{/* ===================================================================== */}




<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        {/* <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a> */}
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
            <button data-collapse-toggle="mega-menu-icons" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div id="mega-menu-icons" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Company 
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
                    </button>
                    <div id="mega-menu-icons-dropdown" className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul className="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">About us</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                        </svg>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Library</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z"/>
                                            <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z"/>
                                            <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z"/>
                                        </svg>
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Resources</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                            <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z"/>
                                            <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                                        </svg>
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Pro Version</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z"/>
                                        </svg>
                                        Pro Version
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Blog</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"/>
                                            <path d="M6 5H5v1h1V5Z"/>
                                        </svg>
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Newsletter</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                                        </svg>
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Playground</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"/>
                                        </svg>
                                        Playground
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">License</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                            <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                        </svg>
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 text-gray-900 dark:text-white">
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Contact Us</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                            <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z"/>
                                        </svg>
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Support Center</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                                            <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z"/>
                                        </svg>
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                        <span className="sr-only">Terms</span>
                                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                        </svg>
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


{/* ===================================================================== */}


{/* <body
    className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
  >
  <header>
     <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
       <div>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="32.125"
              viewBox="0 0 150 32.125"
            >
              <g
                id="Group_330"
                data-name="Group 330"
                transform="translate(-251.1 457.654)"
              >
                <g
                  id="Group_329"
                  data-name="Group 329"
                  transform="translate(251.1 -457.654)"
                >
                  <path
                    id="Path_121"
                    data-name="Path 121"
                    d="M257.887-454.034a12.084,12.084,0,0,1,3.505-3.62,11.811,11.811,0,0,1,3.46,3.549,17.887,17.887,0,0,1,3.362,11.216c.73.589,1.482,1.154,2.2,1.754a3.969,3.969,0,0,1,1.266,3.659c-.347,1.672-.679,3.347-1.045,5.015a1.393,1.393,0,0,1-2.12.7c-1.178-.946-2.326-1.925-3.5-2.872a5.373,5.373,0,0,1-3.316,1.44,5.365,5.365,0,0,1-3.882-1.4c-.844.621-1.628,1.367-2.453,2.033a6.315,6.315,0,0,1-1.2.924,1.393,1.393,0,0,1-1.839-.9c-.377-1.631-.771-3.257-1.136-4.89a3.96,3.96,0,0,1,1.335-3.81c.641-.517,1.29-1.025,1.943-1.527.182-.092.091-.3.1-.46a17.915,17.915,0,0,1,3.326-10.806m1.156,5.049a2.748,2.748,0,0,0,.24,3.641,3.024,3.024,0,0,0,4.134.085,2.75,2.75,0,0,0,.729-3.021,2.924,2.924,0,0,0-2.454-1.825,2.984,2.984,0,0,0-2.65,1.119"
                    transform="translate(-251.1 457.654)"
                    fill="#764abc"
                  />
                  <path
                    id="Path_122"
                    data-name="Path 122"
                    d="M260.3-419.746a.693.693,0,0,1,1.027-.557,6.628,6.628,0,0,0,5.77,0,.7.7,0,0,1,1.029.516q.008,1.532,0,3.064a.691.691,0,0,1-1.079.5c-.306-.26-.582-.552-.876-.825-.467.874-.905,1.76-1.375,2.631a.7.7,0,0,1-1.161.007c-.472-.873-.908-1.764-1.384-2.637-.29.275-.566.566-.873.825a.692.692,0,0,1-1.078-.506c-.008-1.007,0-2.015,0-3.022"
                    transform="translate(-253.92 446.225)"
                    fill="#764abc"
                  />
                  <path
                    id="Path_123"
                    data-name="Path 123"
                    d="M265.28-441.9a1.4,1.4,0,0,0,1.432-1.376,1.4,1.4,0,0,0-1.432-1.377,1.4,1.4,0,0,0-1.431,1.377,1.4,1.4,0,0,0,1.431,1.376"
                    transform="translate(-255.01 453.668)"
                    fill="#764abc"
                  />
                  <path
                    id="Path_124"
                    data-name="Path 124"
                    d="M288.561-448.233H290.8v15.127h9.357v2.036h-11.6Zm13.563,11.211a5.99,5.99,0,0,1,.546-2.557,6.4,6.4,0,0,1,1.479-2.037,6.769,6.769,0,0,1,4.751-1.818,6.592,6.592,0,0,1,4.666,1.733,5.891,5.891,0,0,1,1.891,4.521,5.9,5.9,0,0,1-2.024,4.544,6.767,6.767,0,0,1-4.751,1.807A6.582,6.582,0,0,1,304-432.549a5.832,5.832,0,0,1-1.879-4.472m2.3-.133a4.517,4.517,0,0,0,.339,1.757A4.36,4.36,0,0,0,305.7-434a4.381,4.381,0,0,0,3.2,1.235,4.1,4.1,0,0,0,3.03-1.235,4.107,4.107,0,0,0,1.224-3.043,4.325,4.325,0,0,0-1.273-3.188,4.335,4.335,0,0,0-3.2-1.26,4.074,4.074,0,0,0-3.03,1.249,4.213,4.213,0,0,0-1.224,3.091m16.677,1.078a2.077,2.077,0,0,0-.582,1.3.918.918,0,0,0,.413.849,3.845,3.845,0,0,0,1.1.413q.692.157,1.564.266t1.794.218q.909.121,1.782.315a6.957,6.957,0,0,1,1.575.509,2.345,2.345,0,0,1,1.516,2.158,4.306,4.306,0,0,1-1.9,3.563,6.821,6.821,0,0,1-4.157,1.321,7.745,7.745,0,0,1-3.806-.873,3.147,3.147,0,0,1-1.831-2.861,3.762,3.762,0,0,1,.9-2.315,5.143,5.143,0,0,1,.558-.606,2.3,2.3,0,0,1-1.758-2.17,4.315,4.315,0,0,1,1.6-3.321,3.385,3.385,0,0,1-.557-1.878,3.7,3.7,0,0,1,.424-1.806,4.118,4.118,0,0,1,1.152-1.321,5.62,5.62,0,0,1,3.5-1.115,5.436,5.436,0,0,1,3.466,1.115,4.661,4.661,0,0,1,2.5-1.043,6.619,6.619,0,0,1,.945-.072l-.1,1.879a6.307,6.307,0,0,0-2.218.569,3.709,3.709,0,0,1,.412,1.721,3.4,3.4,0,0,1-.436,1.7,4.025,4.025,0,0,1-1.14,1.31,5.554,5.554,0,0,1-3.405,1.091,5.887,5.887,0,0,1-3.309-.91m.582-4.253a2.143,2.143,0,0,0-.231,1.017,2.221,2.221,0,0,0,.231,1.031,2.275,2.275,0,0,0,.654.739,3.493,3.493,0,0,0,2.085.582,2.688,2.688,0,0,0,2.594-1.285,2.074,2.074,0,0,0,.231-1.006,2.135,2.135,0,0,0-.243-1.03,2.124,2.124,0,0,0-.642-.751,3.446,3.446,0,0,0-2.085-.594,2.682,2.682,0,0,0-2.594,1.3m.024,8.944a3.151,3.151,0,0,0-.837,2.194,1.783,1.783,0,0,0,1.2,1.611,4.619,4.619,0,0,0,1.975.473,7.943,7.943,0,0,0,1.6-.134,3.885,3.885,0,0,0,1.139-.4,1.942,1.942,0,0,0,1.176-1.769q0-1.079-2.085-1.443-.9-.157-2.194-.279t-1.975-.254m27.052-11.563a5.27,5.27,0,0,1-3.515,5.273l3.261,6.606H345.9l-2.945-5.976a16.725,16.725,0,0,1-2.509.182h-4.461v5.793h-2.241v-17.163h7.042a12.082,12.082,0,0,1,5.684,1.042,4.451,4.451,0,0,1,2.291,4.242m-8.012,4.048a8.338,8.338,0,0,0,4.024-.752,3.344,3.344,0,0,0,1.612-3.151q0-2.885-3.733-3.273a19.936,19.936,0,0,0-2.218-.121h-4.449v7.3Zm10.7,1.879a5.99,5.99,0,0,1,.546-2.557,6.4,6.4,0,0,1,1.479-2.037,6.77,6.77,0,0,1,4.751-1.818A6.591,6.591,0,0,1,362.9-441.7a5.894,5.894,0,0,1,1.891,4.521,5.9,5.9,0,0,1-2.024,4.544,6.767,6.767,0,0,1-4.751,1.807,6.582,6.582,0,0,1-4.678-1.721,5.831,5.831,0,0,1-1.879-4.472m2.3-.133a4.517,4.517,0,0,0,.34,1.757,4.37,4.37,0,0,0,.933,1.394,4.383,4.383,0,0,0,3.2,1.235,4.1,4.1,0,0,0,3.03-1.235,4.107,4.107,0,0,0,1.224-3.043,4.325,4.325,0,0,0-1.273-3.188,4.336,4.336,0,0,0-3.2-1.26,4.073,4.073,0,0,0-3.03,1.249,4.214,4.214,0,0,0-1.224,3.091m23.344,3.491.424,1.709a7.408,7.408,0,0,1-4.46,1.127,5.729,5.729,0,0,1-4.412-1.721,6.409,6.409,0,0,1-1.563-4.557,6.234,6.234,0,0,1,1.757-4.509,5.974,5.974,0,0,1,4.448-1.818,6.431,6.431,0,0,1,3.9,1.1l-.8,1.805a5.411,5.411,0,0,0-3.321-1.017,3.3,3.3,0,0,0-2.7,1.284,4.622,4.622,0,0,0-.982,3.006,4.82,4.82,0,0,0,1.03,3.175,3.638,3.638,0,0,0,2.969,1.309,8.3,8.3,0,0,0,3.708-.9m3.066-16.326h2.3v12.133l5.442-5.333h2.69l-5.7,5.575,3.394,3.66a3.824,3.824,0,0,0,2.569,1.249l-.352,1.636a3.724,3.724,0,0,1-2.981-.678,6.8,6.8,0,0,1-.691-.667l-4.375-4.728v6.073h-2.3Zm22.108,7.866a4.441,4.441,0,0,1,1.006,1.624,5.626,5.626,0,0,1,.376,2.049,15.688,15.688,0,0,1-.243,2.533h-8.436a4.022,4.022,0,0,0,1.188,2.315,3.741,3.741,0,0,0,2.606.836,10.169,10.169,0,0,0,4.133-.824l.388,1.733a8.96,8.96,0,0,1-3.564.958,15.618,15.618,0,0,1-1.672.073,6.288,6.288,0,0,1-2.158-.412,4.692,4.692,0,0,1-1.866-1.212,6.631,6.631,0,0,1-1.466-4.654,6.234,6.234,0,0,1,1.757-4.509,5.974,5.974,0,0,1,4.448-1.818,4.733,4.733,0,0,1,3.5,1.309m-.812,4.425.049-.655a2.885,2.885,0,0,0-1.66-2.945,3.332,3.332,0,0,0-1.334-.242,3.368,3.368,0,0,0-1.43.3,3.514,3.514,0,0,0-1.114.825,4.376,4.376,0,0,0-1.091,2.715Zm5.358-3.624h-1.3v-1.5l2.982-2.242h.618v1.879h3.466v1.866h-3.466v4.9a5.311,5.311,0,0,0,.521,2.812,2.747,2.747,0,0,0,2.036.91l-.351,1.636q-3.636.46-4.3-2.873a10.568,10.568,0,0,1-.206-2.144Z"
                    transform="translate(-262.589 455.303)"
                    fill="#764abc"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg> */}
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Features</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Pricing</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Customers</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Blog</a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
                >Sign Up</a>
            </li>
          </ul>
        </div>
    {/* </nav> */}
  {/* </header> */}
  
  
  <div className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-2xl
          rounded-lg
          my-16
          p-16
        "
      >
        <h1 className="text-2xl font-medium">Responsive Navbar with TailwindCSS</h1>
      </div>
    </div>
{/* </body> */}







{/* ====================================================================== */}
</div>
)
}

