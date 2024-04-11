import React, { useState, useEffect } from 'react'
import { cropgetfunc } from '../services/Api'
import Crop from '../components/Crop'
import Pagination from '../components/Pagination'




const Explore = ({ simplified }) => {
    const [cropData, setCropData] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [homepageCrops, setHomepageCrops] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sendsearch, setSendSearch] = useState("")



    const Loading = () => {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    };


    const CropGet = async () => {
        setIsLoading(true); // Set isLoading to true before fetching data
        const response = await cropgetfunc(search, page);
        if (response.status === 200) {
            setCropData(response.data.allcps);
            setPageCount(response.data.Pagination.pageCount);

            // Check if cropData is not empty before slicing
            if (response.data.allcps.length > 0) {
                setHomepageCrops(response.data.allcps.slice(0, 4));
                console.log(homepageCrops);
            } else {
                setHomepageCrops([]); // Set homepageCrops to an empty array if cropData is empty
            }
        } else {
            alert("Error");
        }
        setIsLoading(false); // Set isLoading to false after fetching data
    };

    //pagination
    //previous button
    const handlePrevious = () => {
        setPage(() => {
            if (page === 1) return page;
            return page - 1

        }
        )
    }

    //handle next button
    const handleNext = () => {
        setPage(() => {
            if (page === pageCount) return page;
            return page + 1
        })
    }

    useEffect(() => {
        CropGet()

    }, [search, page])

    return (
        <div className="bg-[]">
            {/* Search bar */}
            <div className={`flex flex-1 items-center justify-center p-6 ${simplified ? 'hidden' : 'block'}`}>
                <div className="w-full max-w-lg">
                    <form className="mt-5 sm:flex sm:items-center"
                        onSubmit={(e) => {
                            e.preventDefault(); // Prevent default form submission behavior
                            CropGet(); // Call CropGet function to fetch data
                        }}>
                        <input
                            className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Search"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                        <button type='submit'> </button>
                    </form>
                </div>
            </div>
            {isLoading ? (
                <Loading /> // Render the Loading component when isLoading is true
            ) : (
                <>
                    <div className="flex justify-center ">
                        <h1 className="text-5xl font-semibold my-4">{simplified ? "Featured Crops" : "Crops"}</h1>
                    </div>

                    <div className={` flex justify-center items-center gap-5  flex-wrap  ${simplified ? '' : ''}`}>
                        {(simplified ? homepageCrops : cropData).map((crop) => {
                            return (
                                <Crop
                                    key={crop._id}
                                    name={crop.Crop}
                                    image={crop.Image}
                                    RequiredNutrients={crop["Required Nutrients"]}
                                    ClimaticSeason={crop["Climatic Season"]}
                                    SuitableRegions={crop["Suitable Regions"]}
                                    PreferredSoilType={crop["Preferred Soil Type"]}
                                    Info={crop.Info}
                                />
                            );
                        })}
                    </div>
                    <div className={`flex justify-center my-5 ${simplified ? "hidden" : "block"}`}>
                        <Pagination
                            handleNext={handleNext}
                            handlePrevious={handlePrevious}
                            page={page}
                            pageCount={pageCount}
                            setPage={setPage}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Explore