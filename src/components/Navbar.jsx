import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="bg-telegram border-gray-200 absolute top-0 left-0 right-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li>
                    <a href="#" className="block py-2 px-3 rounded md:bg-transparent text-white md:p-0 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-start md:p-0 md:w-auto transition-all duration-75">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul className="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                            </li>
                            </ul>
                            <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">Sign out</a>
                            </div>
                        </div>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-start md:p-0 transition-all duration-75">Services</a>
                    </li>
                    <li>
                    <Link to="/login" className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-start border-solid border border-white hover:border-primary-start  rounded-navbar pl-5 pr-5 pt-0 pb-0 transition-all duration-75">Sign in</Link>
                    </li>
                    <li>
                    <Link to="/login?signup=true" className="block py-2 px-3 text-white bg-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-start border-solid border border-black  hover:border-primary-start rounded-navbar pl-5 pr-5 pt-0 pb-0 transition-all duration-100">Sign up</Link>
                    </li>
                </ul>
                </div>
            </div>
            {/* line */}
            {/* <div className="h-1 w-screen bg-gradient-to-r from-primary-start to-primary-end"></div> */}
        </nav>

     );
}

export default Navbar;