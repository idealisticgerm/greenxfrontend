import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const NavbarItem = ({ title, classProps, path, id }) => {
        const handleClick = (event) => {
            if (id === "leaf") {
                event.preventDefault(); // Prevent the default link behavior
                window.open(path, '_blank'); // Open the URL in a new tab
            }
        };

        return (
            <li className={`mx-4 cursor-pointer ${classProps}`}>
                <Link to={path} onClick={handleClick}>{title}</Link>
            </li>
        );
    }
    return (


        <footer class="bg-[#87e25d] rounded-lg shadow text-black mt-10  w-full  ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black   "></span>
                    </a>
                    <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
                        <NavbarItem title="Home" path="/" />
                        <NavbarItem title="Explore" path="/explore" />
                        <NavbarItem title="Leaf Disease" path='http://localhost:8501' classProps={"my-2"} id="leaf" />
                        <NavbarItem title="Statistics" path="/statistics" classProps={"my-2"} />
                        {/* <NavbarItem title="News" path="/news" /> */}
                        {/* <NavbarItem title="About us" path="/about" /> */}
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-black sm:text-center">© 2024 GreenX. All Rights Reserved.</span>
            </div>
        </footer>

    )
}

export default Footer