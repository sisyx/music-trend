import './fonts.css';
import './App.css';
import './general.css';

import React, { Suspense, useEffect } from 'react';
// import { TbBrandVite } from "react-icons/tb";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';
import Loading from './components/loadings/Loading';
// import { getInfoXXX } from './funcs';
// import Home from './pages/home/Home.jsx';
  // import Login from './pages/login/Login';
  // import AboutUsPage from './pages/other/AboutUsPage';
  // import Start from './pages/start/Start';
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
            <Route path='login' element={<Login />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/start' element={<Start />} />
          </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App