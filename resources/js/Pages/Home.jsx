import React from 'react';
import Gallery from "@/Pages/Gallery.jsx";
import Landing from "@/Pages/Landing.jsx";
import 'boxicons/css/boxicons.min.css';


const Home = () => {
    return (
    <div className={"home-page"}>
        <Landing/>
        <div className={"home-gallery"}>
             <Gallery/>
         </div>
    </div>
)
    ;
};

export default Home;
