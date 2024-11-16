import './styles/fonts.css';
import './styles/general.css';
import 'aos/dist/aos.css';

import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/loadings/Loading';


import Home from"./pages/home/Home";
import Admin from"./pages/admin/Admin";
import Login from"./pages/login/Login";
import Logout from'./components/login/Logout';
import AboutUsPage from'./pages/other/AboutUsPage';
import Start from"./pages/start/Start";
// import InstagramReport from'./pages/report/InstagramReport';
import Contact from'./pages/contact/Contact';
import Payment from'./pages/payment/Payment';
import Report from'./pages/report/Report';



import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import UserPaenel from './pages/userPanel/UserPaenel';
import ProfilePage from './pages/userPanel/ProfilePage';
import Campaigns from './pages/userPanel/Campaigns';

export const notify = (text, xtype) => toast[xtype](text, {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  className: "bg-black",
  transition: Slide,
})


function App() {

  useEffect(() => {
    Aos.init();
  })

  return (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index exact element={<Home />} />
            <Route path='/admin' exact element={<Admin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/start' element={<Start />} />
            <Route path='/report' element={<Report />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/uPanel' element={<UserPaenel />} />
            <Route path='/uPanel/profile' element={<ProfilePage />} />
            <Route path='/uPanel/camps' element={<Campaigns />} />
          </Routes>
          <ToastContainer
            position="borrom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
      </Suspense>
  )
}

export default App