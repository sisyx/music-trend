import { Button, TextField } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";
import { GrGooglePlus } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();
    const { toggleTheme, darkMode } = useTheme();
    const [isSigningUp, setIsSigningUp] = useState(!!params?.get("signup"));
    const [forgotPass, setForgotPass] = useState(false);

  function selectSignUp() {
    setForgotPass(false);
    setIsSigningUp(true);
  }

  return (
    <div className={`w-screen h-screen flex items-center justify-center noto-sans-kr ${darkMode ? "bg-darkbg" : "bg-lightbg"}`}>
        <div className={`relative rounded-3xl overflow-hidden grid grid-cols-2 grid-rows-1 backdrop-blur-sm shadow-lg shadow-orange-200 min-h-login`}>
            <div className={`w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${(!isSigningUp || forgotPass) ? '-translate-x-full absolute' : ""} transition-500 ease-in-out`}>
                <h1 className="text-white text-4xl font-black">
                    Wellcome Back
                </h1>
                <p className="text-white text-center">Login With Your Personal Details To Use All Of Site Features!</p>
            <Button sx={{background: "transparent", border: "1px white solid", color: "white", paddingInline: "50px", paddingBlock: "10px"}} onClick={() => setIsSigningUp(false)}>Sign In</Button>
            </div>
            <div className={`w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${isSigningUp ? "-translate-y-full absolute" : forgotPass ? "-translate-y-full absolute" : ''} transition-500 ease-in-out`}>
                {/* Sign In */}
                <h1 className="text-4xl font-bold">Sign In</h1>
                {/* icons */}
                <div className="flex gap-2 justify-between w-46 text-darkbg">
                    <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                        <GrGooglePlus className=" text-3xl" />
                    </div>
                    <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                        <FaFacebookF className=" text-3xl" />
                    </div>
                    <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                        <FaLinkedinIn className=" text-3xl" />
                    </div>
                    <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                        <FaGithub className=" text-3xl" />
                    </div>
                </div>
                {/* inputs */}
                <div className="flex flex-col gap-5 w-full">
                    <p>or use your email and password</p>
                    <TextField label="Username" variant="filled" />
                    <TextField label="Password" variant="filled" />
                </div>
                {/* buttons */}
                <div className="flex flex-col gap-7 items-center">
                    <div>
                        Forgot Your Email or <a onClick={() => setForgotPass(true)} className="cursor-pointer">Password?</a>
                    </div>
                    <Button sx={{backgroundColor: "red", color: "white", width: "fit-content", paddingInline: "40px", borderRadius: "10px", "&:hover": {
                        backgroundColor: "red"
                    }}}>Sign In</Button>
                </div>
            </div>
            <div className={`w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${forgotPass ? "" : 'absolute -translate-x-full'} transition-500 ease-in-out`}>
                {/* Sign In */}
                <h1 className="text-4xl font-bold">Forgot Your Password?</h1>
                {/* inputs */}
                <div className="flex flex-col gap-5 w-full">
                    <p>Enter your Email Here To Recover Your Password</p>
                    <TextField label="Username" variant="filled" />
                </div>
                {/* buttons */}
                <div className="flex flex-col gap-7 items-center">
                    <Button sx={{backgroundColor: "red", color: "white", width: "fit-content", paddingInline: "40px", borderRadius: "10px", "&:hover": {
                        backgroundColor: "red"
                    }}}>Send New Password</Button>
                </div>
            </div>
            <div className={`h-full w-96 overflow-hidden z-10`}>
                    <div className={`w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${isSigningUp ? "" : 'translate-y-full absolute'} transition-500 ease-in-out`}>
                    {/* Sign In */}
                    <h1 className="text-4xl font-bold">Sign Up</h1>
                    {/* icons */}
                    <div className="flex gap-2 justify-between w-46 text-darkbg">
                        <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                            <GrGooglePlus className=" text-3xl" />
                        </div>
                        <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                            <FaFacebookF className=" text-3xl" />
                        </div>
                        <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                            <FaLinkedinIn className=" text-3xl" />
                        </div>
                        <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                            <FaGithub className=" text-3xl" />
                        </div>
                    </div>
                    {/* inputs */}
                    <div className="flex flex-col gap-5 w-full">
                        <p>or use your email for registration</p>
                        <TextField label="Username" variant="filled" />
                        <TextField label="email" type="email" variant="filled" />
                        <TextField label="Password" type="password" variant="filled" />
                    </div>
                    {/* buttons */}
                    <div className="flex flex-col gap-7 items-center">
                        <Button sx={{backgroundColor: "red", color: "white", width: "fit-content", paddingInline: "40px", borderRadius: "10px", "&:hover": {
                            backgroundColor: "red"
                        }}}>Sign Up</Button>
                    </div>
                </div> 
                <div className={`h-full flex flex-col items-center justify-center gap-5 ${isSigningUp ? "translate-x-full absolute" : ''} transition-500 ease-in-out`}>
                    <h1 className="text-white text-4xl font-black">Hello, User!</h1>
                    <p className="text-white text-center">Register With Your Personal Details To Use All Of Site Features!</p>
                    <Button sx={{background: "transparent", border: "1px white solid", color: "white", paddingInline: "50px", paddingBlock: "10px"}} onClick={selectSignUp}>Sign Up</Button>
                </div>
            </div>

            {/* Moving Bg */}
            <div className={`absolute bg-gradient-to-r top-0 h-full w-1/2 z-0 transition-500 ease-in-out ${isSigningUp ? 'translate-x-0 rounded-r-login from-login-lgradientstart to-primary-start ' : "translate-x-full rounded-l-login from-primary-start to-primary-end "}`}>
            </div>
        </div>
    </div>
  );
};

export default Home;