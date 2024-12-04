// import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styles from './Timeline.module.css';
import { MdManageAccounts } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa6";
import { MdDoneAll } from "react-icons/md";
// import { FcLike } from "react-icons/fc";
// import { FaHeart } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";
function Timeline({ data, className = "hidden md:flex items-center", itemWidth = 48 }) {
    return ( 
        <ol className={`${className}`}>
            {
                data.map((item, index) => 
                    <li key={`timeline-${index}`} className={`relative ${index < data.length - 1 ? `` : "max-w-fit"} w-full flex flex-col items-center justify-center ${styles.item}`} style={{
                        animationDelay: `${index * 200}ms`
                    }}>
                        <div className="group w-full flex items-center">
                            <div className="z-10 flex items-center justify-center bg-blue-100 rounded-full ring-0 ring-white shrink-0 p-2 group-hover:scale-90 transition-all duration-200">
                                {
                                    item.active ? 
                                    <BsBagHeartFill className="text-telegram text-sm md:text-2xl" />
                                    :
                                    index === 1 ? <MdManageAccounts className='text-sm md:text-2xl' /> :
                                    index === 2 ? <FaGooglePay className='text-sm md:text-2xl' /> : 
                                    index === 3 ? <MdDoneAll className='text-sm md:text-2xl' /> :
                                    <svg className="w-2.5 h-2.5 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                }
                            </div>
                            {
                                index < data.length - 1 ? 
                                <div className={`flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 ${styles.line} min-w-${itemWidth}`} style={{
                                    animationDelay: `${index * 1000}ms`
                                }}></div>
                                : ""
                            }
                        </div>
                    </li>
                )
            }
        </ol>
     );
}

export default Timeline;

// ${index < data.length - 1 ? `min-w-${itemWidth}` : "w-fit"}