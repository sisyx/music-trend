// import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styles from './Timeline.module.css';
import { MdManageAccounts } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa6";
import { MdDoneAll } from "react-icons/md";
// import { FcLike } from "react-icons/fc";
// import { FaHeart } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";
function Timeline({ data, className = "" }) {
    return ( 
        <ol className={`items-center sm:flex ${className}`}>
            {
                data.map((item, index) => 
                    <li key={`timeline-${index}`} className={`relative mb-6 sm:mb-0 ${index < data.length - 1 ? 'min-w-48' : "w-fit"} w-full flex flex-col items-center justify-center ${styles.item}`} style={{
                        animationDelay: `${index * 500}ms`
                    }}>
                        <div className="group w-full flex items-center">
                            <div className="z-10 flex items-center justify-center bg-blue-100 rounded-full ring-0 ring-white shrink-0 p-2 group-hover:scale-90 transition-all duration-200">
                                {
                                    item.active ? 
                                    <BsBagHeartFill className="text-telegram" fontSize="1.5rem" />
                                    :
                                    index === 1 ? <MdManageAccounts fontSize="1.5rem" /> :
                                    index === 2 ? <FaGooglePay fontSize="1.5rem" /> : 
                                    index === 3 ? <MdDoneAll fontSize="1.5rem" /> :
                                    <svg className="w-2.5 h-2.5 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                }
                            </div>
                            {
                                index < data.length - 1 ? 
                                <div className={`hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 ${styles.line}`} style={{
                                    animationDelay: `${index * 2000}ms`
                                }}></div>
                                    : ""
                            }
                        </div>
                            {/* <div className="mt-3 sm:pe-8 text-gray-900">
                                {
                                    !!item.title ?
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    : ""
                                }
                                {
                                    !!item.subtitle ?
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-40">{item.subtitle}</time>
                                    : ""
                                }
                                {
                                    !!item.description ?
                                    <p className="text-base font-normal text-gray-500 ">{item.description}</p>
                                    : ""
                                }
                            </div> */}
                    </li>
                )
            }
            {/* <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                    <h3 className="text-lg font-semibold text-gray-900 ">Flowbite Library v1.2.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-40">Released on December 23, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                    <h3 className="text-lg font-semibold text-gray-900 ">Flowbite Library v1.3.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-40">Released on January 5, 2022</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                </div>
            </li> */}
        </ol>
     );
}

export default Timeline;