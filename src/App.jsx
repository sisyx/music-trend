import './styles/fonts.css';
import './styles/general.css';
import 'aos/dist/aos.css';

import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/loadings/Loading';

// const Home = React.lazy(() => import('./pages/home/Home'));
// const Admin = React.lazy(() => import('./pages/admin/Admin'));
// const Login = React.lazy(() => import('./pages/login/Login'));
// const  
//  Logout = React.lazy(() => import('./components/login/Logout'));
// const AboutUsPage = React.lazy(() => import('./pages/other/AboutUsPage'));
// const Contact = React.lazy(() => import('./pages/contact/Contact'));
// const Payment = React.lazy(() => import('./pages/payment/Payment'));
// const Report = React.lazy(() => import('./pages/report/Report'));
// import { Slide, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Aos from 'aos';
// import InstagramStart from './pages/start/InstagramStart';
// const UserPaenel = React.lazy(() => import('./pages/userPanel/UserPaenel'));
// const ProfilePage = React.lazy(() => import('./pages/userPanel/ProfilePage'));
// const Campaigns = React.lazy(() => import('./pages/userPanel/Campaigns'));
// const StartSelectCampType = React.lazy(() => import('./components/start/StartSelectCampType'));
// const StartLayout = React.lazy(() => import('./layouts/StartLayout'));

import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';
import Logout from './components/login/Logout';
import AboutUsPage from './pages/other/AboutUsPage';
import Contact from './pages/contact/Contact';
import Payment from './pages/payment/Payment';
import Report from './pages/report/Report';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import InstagramStart from './pages/start/InstagramStart';
import UserPaenel from './pages/userPanel/UserPaenel';
import ProfilePage from './pages/userPanel/ProfilePage';
import Campaigns from './pages/userPanel/Campaigns';
import StartSelectCampType from './components/start/StartSelectCampType';
import StartLayout from './layouts/StartLayout';


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
  }, []);

  return (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index exact element={<Home />} />
            <Route path='/admin' exact element={<Admin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/start' element={
                <Suspense fallback={<h1>LOADING</h1>}>
                  <StartLayout />
                </Suspense>}>
              <Route path='' element={<StartSelectCampType />} />
              <Route path='telegram' element={<h1>Telegram Creating Campaign</h1>} />
              <Route path='instagram' element={<InstagramStart />} />
              <Route path='website' element={<h1>Website Creating Campaign</h1>} />
            </Route>
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