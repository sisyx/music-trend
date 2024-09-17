import './fonts.css';
import './App.css';
import './general.css';

import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';
import Loading from './components/loadings/Loading';
import Logout from './components/login/Logout';
import { isLoggedin } from './functions';
import Payment from './pages/payment/Payment';
const Admin = React.lazy(() => import('./pages/admin/Admin'));
const InstagramReport = React.lazy(() => import('./pages/report/InstagramReport'));
const TelegramReport = React.lazy(() => import('./pages/report/TelegramReport'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const Start = React.lazy(() => import("./pages/start/Start"));
const AboutUsPage = React.lazy(() => import("./pages/other/AboutUsPage"));
const Login = React.lazy(() => import('./pages/login/Login'));
const Home = React.lazy(() => import('./pages/home/Home'));

function App() {

  return (
    <ThemeProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index exact element={<Home />} />
            <Route path='/admin' exact element={<Admin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/start' element={<Start />} />
            <Route path='/reports/instagram' element={<InstagramReport />} />
            <Route path='/reports/telegram' element={<TelegramReport />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App