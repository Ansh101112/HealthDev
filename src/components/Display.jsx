import React from 'react'

const Display = () => {
  return (
    <>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 transition duration-500 ease-in-out transform hover:scale-110">Welcome to HealthHub:  <br class="hidden lg:inline-block" />Your Comprehensive Healthcare Solution</h1>
      </h1>
      <p class="mb-8 leading-relaxed">HealthHub is a revolutionary healthcare platform designed to streamline and simplify your healthcare experience. Whether you're scheduling appointments, managing medical records, or seeking professional medical advice, HealthHub has you covered.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Know More</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img class="object-cover object-center rounded shadow-lg hover:shadow-xl transition duration-500" alt="hero" src="https://wallpaperaccess.com/full/3275630.jpg" />
    </div>
  </div>
        </section>
    
        <section class="text-gray-600 body-font m-0">
  <div class="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://www.sme.org/globalassets/sme.org/technologies/articles/2020/06---june/istock-1202232039_1920x1080.jpg" />
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Mission</h1>
      <p class="mb-8 leading-relaxed">At HealthHub, our mission is to empower individuals to take control of their health and well-being. We believe that access to quality healthcare services should be convenient, transparent, and personalized to meet the unique needs of each individual.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Meet Doctor</button>
       
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-14 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Patients</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Resviews</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">100+</h2>
        <p class="leading-relaxed">Doctors</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Display