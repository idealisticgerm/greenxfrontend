
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from '../context/auth';

const NavbarItem = ({ title, classProps, path, id }) => {
    const handleClick = (event) => {
        if (id === "leaf") {
            event.preventDefault(); // Prevent the default link behavior
            window.open(path, '_blank'); // Open the URL in a new tab
        }
    };

    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            <Link to={path} onClick={handleClick} >{title}</Link>
        </li>
    );
}
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const { auth, setAuth } = useAuth()

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    };

    return (
        <nav className="w-full sticky top-0 flex md:justify-center justify-between items-center p-4 bg-[#87e25d] z-50">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to="/"><img src={logo} alt="" className='w-[150px] cursor-pointer' /></Link>
            </div>
            <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
                <NavbarItem title="Home" path="/" />
                <NavbarItem title="Explore" path="/explore" />
                <NavbarItem title="Leaf Disease" path='http://localhost:8501' classProps={"my-2"} id="leaf" />
                <NavbarItem title="Statistics" path="/statistics" classProps={"my-2"} />
                {/* <NavbarItem title="News" path="/news" /> */}
                {/* <NavbarItem title="About us" path="/about" /> */}

                {!auth?.user ? (
                                    <>
                                        <Link to="/login" className='bg-[#4b8623] py-2 px-7 mx-4 my-5 rounded-full cursor-pointer hover:bg-[#b3e568] hover:text-black'>
                                            Login
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className='bg-[#4b8623] py-2 px-7 mx-4 my-5 rounded-full cursor-pointer hover:bg-[#b3e568] hover:text-black' onClick={handleLogout}>
                                            Logout
                                        </Link>
                                    </>
                                )}
            </ul>

            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className='text-black md:hidden cursor-pointer' onClick={() => { setToggleMenu(false) }} />
                    : <HiMenuAlt4 fontSize={28} className='text-black md:hidden cursor-pointer' onClick={() => { setToggleMenu(true) }} />}
                {
                    toggleMenu && (
                        <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white text-xl animate-slide-in'>
                            <li className='text-xl w-full my-2'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />
                            </li>
                            <div className=''>
                                <NavbarItem title="Home" path="/" classProps={"my-2"} />
                                <NavbarItem title="Explore" path="/explore" classProps={"my-2"} />
                                {/* <NavbarItem title="About us" path="/about" classProps={"my-2"} />
                                <NavbarItem title="News" path="/news" classProps={"my-2"} /> */}
                                <NavbarItem title="Leaf Disease" path="http://localhost:8501" classProps={"my-2"} />
                                <NavbarItem title="Statistics" path="/statistics" classProps={"my-2"} />




                                {!auth?.user ? (
                                    <>
                                        <Link to="/login" className='bg-[#4b8623] py-2 px-7 mx-4 my-5 rounded-full cursor-pointer hover:bg-[#b3e568] hover:text-black'>
                                            Login
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className='bg-[#4b8623] py-2 px-7 mx-4 my-5 rounded-full cursor-pointer hover:bg-[#b3e568] hover:text-black' onClick={handleLogout}>
                                            Logout
                                        </Link>
                                    </>
                                )}
                            </div>
                        </ul>
                    )
                }
            </div>


        </nav>
    )
}

export default Navbar