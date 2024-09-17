import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Wave from "../../components/Wave";
import OurServices from "../../components/aboutus/OurServices";
import { getOffsetTop } from "../../funcs";
import FlowbiteChart from "../../components/aboutus/FlowbiteChart";
import Chart from "../../components/home/Chart";
import AboutusChart from "../../components/aboutus/AbourusChart";
import AboutUsMain from "../../components/aboutus/AboutUsMain";
import SmallContact from "../../components/contact/SmallContact";

function AboutUsPage() {
    return ( 
        <>
        <Navbar />
        <AboutUsMain />
        <SmallContact />
        <Footer  />
        </>
     );
}

export default AboutUsPage;