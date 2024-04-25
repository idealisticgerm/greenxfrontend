import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import toast from 'react-hot-toast';


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://greenxbackend.onrender.com/api/auth/register`, { name, email, password });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message)
            }
            else {
                // toast.error("Something went wrong")
                toast.error(res.data && res.data.message)
                console.log(error)
            }



        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-[#a2fb79] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <input type="text" name="name" id="name" className=" outline-none sm:text-sm rounded-lg block w-full p-2.5 focus:drop-shadow-xl" placeholder="Enter your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <input type="email" name="email" id="email" className=" outline-none sm:text-sm rounded-lg block w-full p-2.5 focus:drop-shadow-xl" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Password" className=" outline-none sm:text-sm rounded-lg focus:drop-shadow-xl focus: block w-full p-2.5 " required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>


                            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[green] hover:bg-[#1f551f] text-white dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light ">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}

export default Register