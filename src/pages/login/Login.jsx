import { Button, styled, TextField } from "@mui/material";
// import { useTheme } from "../../contexts/themeContext";
import { GrGooglePlus } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { root } from "../../constatnts";
import { customAlert } from "../../functions";
import CircleGradient from "../../components/loadings/CircleGradient";

const Home = () => {
    const [params] = useSearchParams();
    // const { toggleTheme, darkMode } = useTheme();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(!!params?.get("signup"));
    const [forgotPass, setForgotPass] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

  function selectSignUp() {
    setForgotPass(false);
    setIsSigningUp(true);
  }

  async function login() {
        setIsLoading(() => true)
        const xusername = username;
        const xpassword = password;

        if (!xpassword || !xusername) {
            setIsLoading(() => false);
            customAlert("لطفا اطلاعات را کامل وارد کنید")
            return
        }

        try {
            const req = await fetch(`${root}/Security/Login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": xusername,
                    "password": xpassword
                })
            })

            if (!req.ok) {
                throw new Error(req.statusText)
            }

            const res = await req.json();
            console.log(res)

            if (res.messageType === 0) {
                const date = new Date();
                date.setDate(date.getDate() + 1)

                document.cookie = "username=" + xusername + "; expires=" + date;
                document.cookie = "password=" + xpassword + "; expires=" + date;
                document.cookie = "role=" + res.objectResult.roles + "; expires=" + date;
                document.cookie = "id=" + res.objectResult.userId + "; expires=" + date;
                
                document.cookie = "token=" + res.objectResult.token + "; expires=" + date
                customAlert("با موفقیت وارد شدید");
                navigate("/");
            } else {
                customAlert(res.message)
            }
        } catch (error) {
            console.error(error)
        }

        setIsLoading(() => false)
  }

  async function resetPass() {
    setIsLoading(() => true);
    const xphone = newPhone;
    if (!validateIranPhoneNumber(xphone)) {
        customAlert("لطفا یک شماره تلفن معتبر وارد کنید")
        setIsLoading(() => false);
        return
    }

    try {
        const req = await fetch(`${root}​/api/MessageOTP/SendPhone?phone=${xphone}`, {
            method: "POST"
        });
        if (!req.ok) throw new Error("خطایی در ارسال کد رخ داده.");
        const res = await req.json();
        if (res.data.messageId) {
            setIsSigningUp(() => false);
            setForgotPass(() => false)
            customAlert(`<span dir="rtl">پیامکی حاوی رمز عبور جدید شما به شماره تلفن ${xphone} ارسال شده.</span>`)
        }
    } catch (error) {
        customAlert(error.message)
    }
    setIsLoading(() => false);
  }

  async function signup() {
    setIsLoading(() => true);
    const xusername = username;
    const xpassword = password;
    const xphone = newPhone;

    if (!xusername.length || !xpassword.length || !xphone.length) {
        if (!xusername && !xpassword.length && !xphone.length) {
            customAlert("لطفا نام کاربری و پسورد و شماره تلفن را وارد کنید")
        } else {
            if (!xusername) {
                customAlert("لطفا نام کاربری خودتان را وارد کنید")
            } else if (!xphone) {
                customAlert("لطفا یک شماره تلفن وارد کنید")
            } else if (!xpassword) {
                customAlert("لطفا رمز عبور را وارد کنید")
            } 
        }
        setIsLoading(() => false);
        return
    }

    if (!validateIranPhoneNumber(xphone)) {
        customAlert("لطفا یک شماره تلفن معتبر وارد کنید")
        setIsLoading(() => false);
        return
    }

    try {
        const req = await fetch(`${root}/user/insert`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": xusername,
                "password": xpassword,
                "password2": xpassword,
                "roles": "user",
                "pic": "none",
                "displayName": xusername,
                "campaignId": 0,
                "phoneNumber": xphone.toString()
            })
        })

        if (!req.ok) {
            throw new Error(req.statusText)
        }

        const res = await req.json();

        if (res.messageType === 0) {
            login()
        }

    } catch (error) {
        console.error(error)
    }
    setIsLoading(() => true);
  }

  return (
    <div className={`w-screen h-screen flex items-center justify-center noto-sans-kr vazirmatn bg-lightbg`}>
        <div className={`relative rounded-3xl overflow-hidden grid md:grid-cols-2 grid-rows-1 backdrop-blur-sm shadow-lg shadow-orange-200 min-h-login`}>
            <div className={`md:hidden ${isSigningUp ? "" : "absolute -translate-x-full"}`}>
                <Button sx={{width: "100%"}} onClick={() => setIsSigningUp(false)} >ورود به حساب</Button>
            </div>
            <div className={`w-full max-w-96 hidden md:flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 transition-all duration-500 z-10 ${(!isSigningUp || forgotPass) ? '-translate-x-full absolute' : ""} transition-500 ease-in-out`}>
                <h1 className="text-white text-4xl font-black">
                    خوش برگشتید
                </h1>
                <p className="text-white text-center">با وارد شدن از طریق اطلاعات شخصی خودتان، به همه قابلیت های سایت دسترسی داشته باشید</p>
                <Button sx={{background: "transparent", border: "1px white solid", color: "white", paddingInline: "50px", paddingBlock: "10px"}} onClick={() => setIsSigningUp(false)}>ورود</Button>
            </div>
            <div className={`w-full max-w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${isSigningUp ? "-translate-y-full absolute" : forgotPass ? "-translate-y-full absolute" : ''} transition-500 ease-in-out`}>
                {/* Sign In */}
                <h1 className="md:text-4xl font-bold">ورود به حساب</h1>
                {/* icons */}
                <div className="flex gap-2 justify-between text-darkbg md:text-3xl">
                    <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                        <GrGooglePlus />
                    </div>
                    <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                        <FaFacebookF />
                    </div>
                    <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                        <FaLinkedinIn />
                    </div>
                    <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                        <FaGithub />
                    </div>
                </div>
                {/* inputs */}
                <div className="flex flex-col gap-5 w-full">
                    <p className="text-right">یا از طریق ایمیل و رمز حسابتان وارد شوید</p>
                    <CTextField value={username} onChange={e => setUsername(e.target.value)} label="ایمیل" type="email" variant="filled" />
                    <CTextField value={password} onChange={e => setPassword(e.target.value)} type="password" label="رمز ورود" variant="filled" />
                </div>
                {/* buttons */}
                <div className="flex flex-col gap-7 items-center">
                    <div>
                        <a onClick={() => setForgotPass(true)} className="cursor-pointer">
                            ایمیل یا رمز حسابتان را فراموش کرده اید؟
                        </a>
                    </div>
                    <Button
                        disabled={isLoading}
                        onClick={login} 
                        sx={{backgroundColor: "red", fontFamily: "vazir", color: "white", width: "fit-content", paddingInline: "40px", borderRadius: "10px", "&:hover": {
                        backgroundColor: "red"
                    }}}>
                        {
                            isLoading 
                            ? <span>
                                در حال ورود
                            </span> 
                            : <span>
                                ورود
                            </span>
                        }
                    </Button>
                </div>
            </div>
            <div className={`w-full max-w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${forgotPass ? "" : 'absolute -translate-x-full'} transition-500 ease-in-out`}>
                {/* Sign In */}
                <h1 className="text-4xl font-bold">بازیابی رمز عبور</h1>
                {/* inputs */}
                <div className="flex flex-col gap-5 w-full text-right">
                    <p>برای بازیابی رمز ایمیلتان را وارد کنید</p>
                    <CTextField label="شماره تلفن" placeholder="ex: 0912 121 1212" type="text" variant="filled" value={newPhone} onChange={event => setNewPhone(event.target.value)} />
                </div>
                {/* buttons */}
                <div className="flex flex-col gap-7 items-center">
                    <Button 
                        sx={
                            {
                                backgroundColor: "red", color: "white", fontFamily: "vazir", width: "fit-content", paddingInline: "40px", borderRadius: "10px", 
                                "&:hover": {backgroundColor: "red"}
                            }
                        }
                        onClick={resetPass}
                        disabled={isLoading}
                    >بازیابی رمز</Button>
                </div>
            </div>
            <div className={`h-full w-full max-w-96 overflow-hidden z-10`}>
                    <div className={`w-full max-w-96 flex flex-col gap-10 items-center justify-center pt-12 pb-12 pr-5 pl-5 z-10 ${isSigningUp ? "" : 'translate-y-full absolute'} transition-500 ease-in-out`}>
                    {/* Sign In */}
                    <h1 className="text-4xl font-bold">ثبت نام</h1>
                    {/* icons */}
                    <div className="flex gap-2 justify-between text-darkbg md:text-3xl">
                        <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                            <GrGooglePlus />
                        </div>
                        <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                            <FaFacebookF />
                        </div>
                        <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                            <FaLinkedinIn />
                        </div>
                        <div className="border border-darkbg rounded-md p-2 hover:text-lightbg hover:bg-darkbg transition-all cursor-pointer">
                            <FaGithub />
                        </div>
                    </div>
                    {/* inputs */}
                    <div className="flex flex-col gap-5 w-full text-right">
                        <p>یا از ایمیل برای ثبت نام استفاده کنید</p>
                        <CTextField value={username} onChange={e => setUsername(e.target.value)} label="نام کاربری" type="text" variant="filled" />
                        <CTextField value={newPhone} onChange={e => setNewPhone(e.target.value)} label="شماره تلفن" type="text" variant="filled" placeholder="ex: 0912 121 1212" />
                        <CTextField value={password} onChange={e => setPassword(e.target.value)} label="رمز ورود" type="password" variant="filled" />
                    </div>
                    {/* buttons */}
                    <div className="flex flex-col gap-7 items-center">
                        <CButton
                            disabled={isLoading}
                            onClick={signup} 
                            sx={{backgroundColor: "red", color: "white", width: "fit-content", paddingInline: "40px", borderRadius: "10px", "&:hover": {
                            backgroundColor: "red"
                        }}}>
                            {
                                isLoading ? <span>در حال ایجاد</span>
                                : <span>ایجاد حساب</span>
                            }
                        </CButton>
                    </div>
                </div> 
                <div className={`w-full md:hidden transition-all duration-700 ${isSigningUp ? "absolute translate-y-full" : ""}`}>
                    <Button onClick={() => selectSignUp(true)} sx={{width: "100%"}}>ایجاد حساب</Button>
                </div>
                <div className={`h-full hidden md:flex flex-col items-center justify-center gap-5 ${isSigningUp ? "translate-x-full absolute" : ''} transition-all duration-500 ease-in-out`}>
                    <h1 className="text-white text-4xl font-black">سلام، کاربر گرامی</h1>
                    <p dir="rtl" className="text-white text-center">با ایجاد حساب از طریق اطلاعات شخصی خودتان به تمام قابلیت های دسترسی پیدا! </p>
                    <Button sx={{background: "transparent", border: "1px white solid", color: "white", paddingInline: "50px", paddingBlock: "10px"}} onClick={selectSignUp}>ثبت نام</Button>
                </div>
            </div>

            {/* Moving Bg */}
            <div className={`absolute hidden md:block  bg-gradient-to-r top-0 h-full w-1/2 z-0 transition-500 ease-in-out ${isSigningUp ? 'translate-x-0 rounded-r-login from-login-lgradientstart to-primary-start ' : "translate-x-full rounded-l-login from-primary-start to-primary-end "}`}>
            </div>
        </div>
    </div>
  );
};

export default Home;

const CButton = styled(Button)(() => ({
    fontFamily: "vazir",
}));

const CTextField = styled(TextField)(() => ({
fontFamily: "vazir",
}));

function validateIranPhoneNumber(number) {
    const xnumber = number.toString();
    if (!(xnumber.length === 11)) return false
    
    const firstTwoDigits = xnumber.slice(0, 2)
    console.log(firstTwoDigits)
    if (firstTwoDigits === "09" && isNumeric(xnumber))
        return true
}

function isNumeric(str) {
    const pattern = /^\d+$/; // Matches one or more digits
    return pattern.test(str);
}