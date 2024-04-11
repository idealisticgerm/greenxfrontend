import React from 'react'

const Pagination = ({ handleNext, handlePrevious, page, pageCount, setPage }) => {
  return (
    <div className=''>

      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex gap-5">
          <li>
            <button
              className="cursor-pointer relative block rounded-full  px-3 py-3 text-sm text-black bg-[#73e329] hover:bg-[#b3e568]"
              onClick={handlePrevious}>Previous</button>
          </li>

          <li aria-current="page">
            <a
              className="relative block rounded-full bg-primary-100 px-3 py-3 text-sm font-medium text-primary-700 transition-all duration-300 bg-green-400"

            >{page}
              <span
                className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
              >(current)</span
              >
            </a>
          </li>

          <li>
            <button
              className="relative block rounded-full  px-5  py-3 text-sm cursor-pointer bg-[#73e329] hover:bg-[#b3e568]"
              onClick={handleNext}>Next</button>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Pagination