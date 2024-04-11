import React, { useEffect, useState } from 'react';
import gsap from 'gsap'


const Crop = (props) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleModal = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('overflow-hidden'); // Disable scrolling
        } else {
            document.body.classList.remove('overflow-hidden'); // Enable scrolling
        }
        // const modal = document.querySelector('.modal');

        // if (!isOpen) {
        //     gsap.fromTo(
        //         modal,
        //         { y: '-100%', opacity: 0 },
        //         { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
        //     );
        // } else {
        //     gsap.to(modal, {
        //         y: '-100%',
        //         opacity: 0,
        //         duration: 0.5,
        //         ease: 'power2.in',
        //         onComplete: () => {
        //             document.body.classList.remove('overflow-hidden');
        //         }
        //     });
        // }
    };





    return (


        <section className=''>

            <div className=" w-[80%] mx-auto md:mx-0 md:max-w-sm md:w-full rounded-lg shadow-[gray] shadow-lg  mt-5 ">

                <div className='flex justify-center '>

                    <img className="rounded-t-lg flex object-contain" src={props.image} alt="" />
                </div>

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">{props.name}</h5>

                    <p className="mb-3 font-normal text-black-700 dark:text-black-300"><span className='text-black text-xl font-semibold'>Required Nutrients: </span>{props.RequiredNutrients}</p>
                    <p className="mb-3 font-normal text-black-700 dark:text-black-300"><span className='text-black text-xl font-semibold'>Climatic Season: </span>{props.ClimaticSeason}</p>
                    <p className="mb-3 font-normal text-black-700 dark:text-black-300"><span className='text-black text-xl font-semibold'>Suitable Regions: </span>{props.SuitableRegions}</p>
                    <p className="mb-3 font-normal text-black-700 dark:text-black-300"><span className='text-black text-xl font-semibold'>Preferred Soil Type: </span>{props.PreferredSoilType}</p>

                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#73e329] rounded-lg hover:bg-[#7cca48] focus:ring-4 focus:outline-none  cursor-pointer" onClick={toggleModal} >
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>


                {/* Modal */}
                <div
                    className={`modal fixed top-16 left-[10%] md:top-60 z-50 overflow-y-scroll transition-all duration-15000 ease-linear ${isOpen
                        ? 'w-[80%] h-[80vh] md:h-[60vh] bg-[#77c852] text-black rounded-2xl block '
                        : 'hidden'
                        }`}
                >                    <div className="wrapper mx-8 my-4">
                        {/* heading */}
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-medium'>{props.name}</h1>
                            <button className='' onClick={toggleModal}>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>


                        <div className=' my-6 '>
                            <hr />
                        </div>

                        {/* image  */}
                        <div className='md:absolute md:right-32 md:w-60 flex justify-center'>
                            <img className='object-contain rounded-2xl w-52 md:w-full' src={props.image} alt="" />
                        </div>

                        {/* Related info */}
                        <div className='mt-10 md:mx-4 mx-1'>
                            <p className="mb-3 font-normal text-black-700 dark:text-black-300"><span className='text-black text-lg md:text-xl font-semibold'>Required Nutrients: </span>{props.RequiredNutrients}</p>
                            <p className="mb-3 font-normal text-black-700 dark:text-black-300"><span className='text-black text-lg md:text-xl font-semibold'>Climatic Season: </span>{props.ClimaticSeason}</p>
                            <p className="mb-3 font-normal text-black-700 dark:text-black-300"><span className='text-black text-lg md:text-xl font-semibold'>Suitable Regions: </span>{props.SuitableRegions}</p>
                            <p className="mb-3 font-normal text-black-700 dark:text-black-300"><span className='text-black text-lg md:text-xl font-semibold'>Preferred Soil Type: </span>{props.PreferredSoilType}</p>
                        </div>

                        {/* Detailed info */}
                        <div className='max-h-56 overflow-y-scroll text-justify mt-5 md:mt-16'>
                            <h3 className=' mx-1 md:mx-4 mb-2 text-xl font-semibold'>About Crop</h3>
                            {props.Info ? (
                                <p className='mx-1 md:mx-4'>{props.Info}</p>
                            ) : (
                                <p className='mx-1 md:mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repudiandae recusandae minima ad maxime nostrum ratione nihil iusto, beatae ea nesciunt architecto reprehenderit fugit, voluptate nobis pariatur ut enim ipsum aut consequatur modi ipsam molestias totam repellat. Consectetur deleniti cupiditate error sapiente eaque. Nobis, aliquid veniam. Numquam, cumque illum repudiandae eveniet velit quo repellat fugit ullam porro enim neque reiciendis iste! Nulla sit alias voluptas recusandae fuga officia rerum hic quasi incidunt id ipsum molestiae, molestias perspiciatis esse debitis illum qui, deserunt, vitae libero ipsam quidem aperiam fugiat. Officia rem voluptatem excepturi aliquam assumenda, dicta eveniet suscipit alias atque repellat!</p>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default Crop