import React from 'react'

const Disease = () => {
  const diseases = [{
    "Image": "https://study.com/cimages/multimages/16/320px-black_spot4587998358143907183.jpeg",
    "Name": "Black Spot Fungus",
    "Description": "Black spot disease is specific to roses, but is such a widespread disease that it can be found across the United States. Black spot fungus only attacks the top of the leaf. This leaf fungus is identified by dark, round leaf spots on the top of the leaf with irregular, feathered margins. Although this type of fungus does not directly kill the plant, it will cause the plant to become weakened and susceptible to cold temperatures, insects, and other diseases. Black spot thrives in wet conditions"
  },
  {
    "Image": "https://study.com/cimages/multimages/16/320px-coltsfoot_lower_epidermis_with_rust_puccinia_poarum6025925767158764808.jpeg",
    "Name": "Rust",
    "Description": "Rust is a fungal disease caused by over 5,000 different species of fungi. Common rust affects roses, hollyhocks, snapdragons, daylilies, beans, and tomatoes. The fungi first present as white raised spots on the underside of the leaves and stems. These spots become rust-orange bumps or pustules that turn yellow-green and eventually black. Rust fungi cause leaves to yellow and drop on the underside of the leaf. The fungus will eventually spread to the top of the leaf, causing leaves to fall from the branches. Spores of many rust species are able to become dormant (inactive) during winter. Most rust spores thrive in high moisture environments."
  },
  {
    "Image": "https://earthsally.com/wp-content/uploads/2021/03/canker-plant-disease.jpg",
    "Name": "Canker",
    "Description": "Canker is often identified by an open wound that has been infected by fungal or bacterial pathogens.  Some cankers are not serious while others can be lethal.  Canker occurs primarily on woody landscape plants. Symptoms may include sunken, swollen, cracked or dead areas found on stems, limbs or trunk.  Cankers can girdle branches, and kill foliage. Cankers are most common on stressed plants that have been weakened by cold, insects, drought conditions, nutritional imbalances or root rot.  Rodents can also spread the pathogens."
  },
  {
    "Image": "https://www.familyhandyman.com/wp-content/uploads/2020/05/Downy-Mildew-GettyImages-517519389.jpg?fit=700,700",
    "Name": "Downy Mildew",
    "Description": "Downy mildew is caused by fungus-like organisms and affects many ornamentals and edibles, such as impatiens, pansies, columbine, grapevines, lettuce and cole crops such as broccoli and cauliflower. Often occurring during wet weather, downy mildew causes the upper portion of leaves to discolor, while the bottoms develop white or gray mold."
  }]
  return (
    <>
      <h1 className='text-5xl font-semibold text-center'>Disease Type</h1>
      <div className='flex flex-wrap justify-center items-center gap-x-5'>
        {diseases.map((disease) => (
          <div className="w-[80%] h-[450px] mx-auto md:mx-0 md:max-w-sm md:w-full rounded-lg shadow-[gray] shadow-lg  mt-5 overflow-hidden">


            <div className='flex justify-center items-center  '>
              <img className="rounded-t-lg flex object-cover  w-60 h-60" src={disease.Image} alt="" />
            </div>

            <div className="p-5 ">

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">{disease.Name}</h5>

              <div className='overflow-y-scroll h-[15vh]'>
                <p className='text-justify px-2'>{disease.Description}</p>
              </div>


            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Disease