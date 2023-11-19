// generate a 404 page
import React from 'react';
import {Link} from "react-router-dom";
import {FaChevronLeft} from "react-icons/fa6";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import './index.css';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen my-auto">
            <h1 className="text-4xl font-bold pb-32 bg-gradient-to-br from-pink-500 via-purple-600 to-red-900 text-transparent bg-clip-text filter drop-shadow-2xl
            ">404 - Page Not Found</h1>
            <div className={""}>
                <Link to="/" className="flex items-center justify-center text-white hover:text-gray-300 animate-bounce hover:underline hover:decoration-cyan-500 transition duration-100">
                    <div className="pr-2">
                        <FaChevronLeft/>
                    </div>
                    <p>Get back to Safety</p>
                </Link>
            </div>

        </div>
    );
};

export default NotFoundPage;