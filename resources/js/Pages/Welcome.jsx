import { Link, Head } from '@inertiajs/react';
import Landing from "@/Pages/Landing.jsx";
import Gallery from "@/Pages/Gallery.jsx";
import React from "react";
import 'boxicons/css/boxicons.min.css';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
                <div className={"home-page"}>
                    <Landing/>
                    <div className={"home-gallery"}>
                        <Gallery/>
                    </div>
                </div>
        </>
    );
}
