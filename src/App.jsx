import './fonts.css';
import './App.css';
import './general.css';

import React, { Suspense } from 'react';
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
      </Suspense>
  )
}

export default App