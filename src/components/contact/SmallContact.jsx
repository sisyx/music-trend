import { Button } from "@mui/material";
import GlassyButton from "../GlassyButton";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiTelegramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./SmallContact.module.css";

function SmallContact() {
    return ( 
        // outer container
        <div className="flex w-screen justify-center bg-gray-100">
            <div className={`flex justify-between items-center overflow-hidden p-4 md:px-36 flex-col gap-3 sm:flex-row w-full max-w-7xl bg-white rounded-2xl ${styles.container}`} dir="rtl">
                <div className={styles.bg}>
                    <svg width="404" height="484" viewBox="0 0 404 484" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_6)">
                        <path d="M220.687 15.9936L225.623 44.659L259.456 68.3486L264.398 97.0498L240.437 130.691L250.303 187.985L284.135 211.675L289.077 240.376L265.116 274.017L274.983 331.313L308.815 355.002L313.757 383.703L289.797 417.344L294.726 445.974M177.15 23.4903L182.086 52.1557L215.918 75.8453L220.86 104.547L196.9 138.188L206.765 195.482L240.598 219.172L245.54 247.873L221.579 281.514L231.445 338.809L265.278 362.499L270.22 391.2L246.259 424.841L251.189 453.471M307.762 1L312.698 29.6653L346.531 53.355L351.473 82.0562L327.512 115.697L337.378 172.992L371.21 196.682L376.152 225.383L352.191 259.024L362.057 316.319L395.89 340.009L400.832 368.71L376.871 402.351L381.801 430.98M264.225 8.49678L269.161 37.1621L302.993 60.8518L307.935 89.5529L283.975 123.194L293.84 180.489L327.672 204.178L332.615 232.88L308.654 266.521L318.52 323.816L352.353 347.505L357.295 376.207L333.334 409.848L338.264 438.477M46.5373 45.9804L51.4732 74.6457L85.3056 98.3354L90.2477 127.037L66.2871 160.678L76.1527 217.972L109.985 241.662L114.927 270.363L90.9666 304.004L100.833 361.299L134.665 384.989L139.607 413.69L115.647 447.331L120.576 475.961M3 53.4772L7.93591 82.1425L41.7683 105.832L46.7104 134.533L22.7498 168.174L32.6153 225.469L66.4477 249.159L71.3898 277.86L47.4292 311.501L57.2955 368.796L91.1279 392.486L96.07 421.187L72.1094 454.828L77.0391 483.458M133.612 30.987L138.548 59.6523L172.381 83.3419L177.323 112.043L153.362 145.684L163.227 202.979L197.06 226.668L202.002 255.37L178.041 289.011L187.908 346.306L221.74 369.996L226.682 398.697L202.722 432.338L207.651 460.967M90.0748 38.4836L95.0107 67.1489L128.843 90.8386L133.785 119.54L109.825 153.181L119.69 210.476L153.523 234.165L158.465 262.866L134.504 296.507L144.37 353.803L178.203 377.492L183.145 406.193L159.184 439.835L164.114 468.464" stroke="url(#paint0_linear_1_6)" stroke-width="5"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_1_6" x1="401" y1="141.524" x2="151.775" y2="396.8" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#518DFD"/>
                        <stop offset="1" stop-color="#518DFD" stop-opacity="0"/>
                        </linearGradient>
                        <clipPath id="clip0_1_6">
                        <rect width="404" height="484" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center md:items-start gap-2 z-10">
                    <span className="text-gray-800 text-xl font-extrabold">
                        راه های ارتباطی با ما
                    </span>
                    <span className="text-sm text-gray-500">
                        از طریق تلگرام و یا برقراری تماس می‌توانید با تیم پشتیبانی ما در ارتباط باشید. 
                    </span>
                </div>
                <div className="flex gap-3 items-center">
                    <Link to="tel:+989032635596">
                        <Button variant="contained" sx={{borderRadius: "50px", boxShadow: "none", border: "1px #444 solid", backgroundColor: "white", color: "#444", "&:hover": {
                            backgroundColor: "white",
                            color: "#444"
                        }}}>
                            <span className="text-sm flex items-center gap-1">
                                09032635596
                                <BiSolidPhoneCall />
                            </span>
                        </Button>
                    </Link>
                    <GlassyButton to="tg://user?id=lyxo6xoxo6">
                        <div className="text-sm flex items-center gap-1">
                            پشتیبانی تلگرام
                            <PiTelegramLogoFill />
                        </div>
                    </GlassyButton>
                </div>
            </div>
        </div>
     );
}

export default SmallContact;