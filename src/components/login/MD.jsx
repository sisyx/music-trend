import { Button } from "@mui/material";
import { CButton, CTextField } from "../../pages/login/Login";
import { GrGooglePlus } from "react-icons/gr";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function MD({ isSigningUp, setIsSigningUp, forgotPass, setForgotPass, selectSignUp }) {
    return ( 
        <>
        <div className={`w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${(!isSigningUp || forgotPass) ? '-translate-x-full absolute' : ""} transition-500 ease-in-out`}>
                <h1 className="text-white text-4xl font-black">
                    خوش برگشتید
                </h1>
                <p className="text-white text-center">با وارد شدن از طریق اطلاعات شخصی خودتان، به همه قابلیت های سایت دسترسی داشته باشید</p>
            <Button sx={{background: "transparent", border: "1px white solid", color: "white", paddingInline: "50px", paddingBlock: "10px"}} onClick={() => setIsSigningUp(false)}>ورود</Button>
            </div>
            <div className={`w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${isSigningUp ? "-translate-y-full absolute" : forgotPass ? "-translate-y-full absolute" : ''} transition-500 ease-in-out`}>
                {/* Sign In */}
                <h1 className="text-4xl font-bold">ورود به حساب</h1>
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
                    <p className="text-right">یا از طریق ایمیل و رمز حسابتان وارد شوید</p>
                    <CTextField label="ایمیل" type="email" variant="filled" />
                    <CTextField label="رمز ورود" variant="filled" />
                </div>
                {/* buttons */}
                <div className="flex flex-col gap-7 items-center">
                    <div>
                        <a onClick={() => setForgotPass(true)} className="cursor-pointer">
                            ایمیل یا رمز حسابتان را فراموش کرده اید؟
                        </a>
                    </div>
                    <Button sx={{backgroundColor: "red", fontFamily: "vazir", color: "white", width: "fit-content", paddingInline: "40px", borderRadius: "10px", "&:hover": {
                        backgroundColor: "red"
                    }}}>ورود</Button>
                </div>
            </div>
            <div className={`w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${forgotPass ? "" : 'absolute -translate-x-full'} transition-500 ease-in-out`}>
                {/* Sign In */}
                <h1 className="text-4xl font-bold">بازیابی رمز عبور</h1>
                {/* inputs */}
                <div className="flex flex-col gap-5 w-full text-right">
                    <p>برای بازیابی رمز ایمیلتان را وارد کنید</p>
                    <CTextField label="ایمیل" type="email" variant="filled" />
                </div>
                {/* buttons */}
                <div className="flex flex-col gap-7 items-center">
                    <Button sx={{backgroundColor: "red", color: "white", fontFamily: "vazir", width: "fit-content", paddingInline: "40px", borderRadius: "10px", "&:hover": {
                        backgroundColor: "red"
                    }}}>بازیابی رمز</Button>
                </div>
            </div>
            <div className={`h-full w-96 overflow-hidden z-10`}>
                    <div className={`w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${isSigningUp ? "" : 'translate-y-full absolute'} transition-500 ease-in-out`}>
                    {/* Sign In */}
                    <h1 className="text-4xl font-bold">ثبت نام</h1>
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
                    <div className="flex flex-col gap-5 w-full text-right">
                        <p>یا از ایمیل برای ثبت نام استفاده کنید</p>
                        <CTextField label="نام کاربری" type="text" variant="filled" />
                        <CTextField label="ایمیل" type="email" variant="filled" />
                        <CTextField label="رمز ورود" type="password" variant="filled" />
                    </div>
                    {/* buttons */}
                    <div className="flex flex-col gap-7 items-center">
                        <CButton sx={{backgroundColor: "red", color: "white", width: "fit-content", paddingInline: "40px", borderRadius: "10px", "&:hover": {
                            backgroundColor: "red"
                        }}}>ایجاد حساب</CButton>
                    </div>
                </div> 
                <div className={`h-full flex flex-col items-center justify-center gap-5 ${isSigningUp ? "translate-x-full absolute" : ''} transition-500 ease-in-out`}>
                    <h1 className="text-white text-4xl font-black">سلام، کاربر گرامی</h1>
                    <p dir="rtl" className="text-white text-center">با ایجاد حساب از طریق اطلاعات شخصی خودتان به تمام قابلیت های دسترسی پیدا! </p>
                    <Button sx={{background: "transparent", border: "1px white solid", color: "white", paddingInline: "50px", paddingBlock: "10px"}} onClick={selectSignUp}>ثبت نام</Button>
                </div>
            </div>

            {/* Moving Bg */}
            <div className={`absolute bg-gradient-to-r top-0 h-full w-1/2 z-0 transition-500 ease-in-out ${isSigningUp ? 'translate-x-0 rounded-r-login from-login-lgradientstart to-primary-start ' : "translate-x-full rounded-l-login from-primary-start to-primary-end "}`}>
            </div>
        </>
     );
}

export default MD;