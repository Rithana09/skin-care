import React from "react";
import Banner from "../partials/Banner";
import Story from "../partials/Story";
import Testimonials from "../partials/Testimonials";
import Process from "../partials/Process"
import Details from "../partials/Details";
import Footer from "../partials/Footer"



const Home = () =>{
    return(
        <div>
            <Banner />
            <Story />
            <Testimonials />
            <Process />
            <Details />
            <Footer />
            </div>
    )
}


export default Home