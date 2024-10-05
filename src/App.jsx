import './fonts.css';
import './App.css';
import './general.css';

import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/loadings/Loading';

const Home = React.lazy(() => import("./pages/home/Home"));
const Admin = React.lazy(() => import("./pages/admin/Admin"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Logout = React.lazy(() => import('./components/login/Logout'));
const AboutUsPage = React.lazy(() => import('./pages/other/AboutUsPage'));
const Start = React.lazy(() => import("./pages/start/Start"));
const InstagramReport = React.lazy(() => import('./pages/report/InstagramReport'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const Payment = React.lazy(() => import('./pages/payment/Payment'));


import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (text) => toast(text, {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  progressClassName: "bg-none bg-white",
  className: "bg-telegram",
  transition: Slide,
})


function App() {
  return (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index exact element={<Home />} />
            <Route path='/admin' exact element={<Admin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/start' element={<Start />} />
            <Route path='/reports/instagram' element={<InstagramReport />} />
            {/* // <Route path='/reports/telegram' element={<TelegramReport />} /> */}
            <Route path='/contact' element={<Contact />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
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