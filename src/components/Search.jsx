import React, { useState } from 'react';

const Search = (props) => {
  const [searchCriteria, setSearchCriteria] = useState({
    name: '',
    specialization: '',
    location: '',
    experience: ''
  });

  const handleChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = async () => {
    await props.fetchDoctors(searchCriteria);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-600 to-indigo-900 flex p-14 gap-4 justify-center px-10">
      <p className="font-bold overflow-hidden text-white">Find your Doctor</p>
      <input
        type="text"
        placeholder="Doctor's Name"
        name="name"
        value={searchCriteria.name}
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md"
      />
      <select
        onChange={handleChange}
        name="specialization"
        value={searchCriteria.specialization}
        className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md cursor-pointer"
      >
        <option value="" disabled hidden>
          Select Specialization
        </option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Neurologist">Neurologist</option>
        {/* Add more options as needed */}
      </select>
      <select
        onChange={handleChange}
        name="location"
        value={searchCriteria.location}
        className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md cursor-pointer"
      >
        <option value="" disabled hidden>
          Select Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        onChange={handleChange}
        name="experience"
        value={searchCriteria.experience}
        className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md cursor-pointer"
      >
        <option value="" disabled hidden>
          Select Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button onClick={handleSearch} className="w-64 bg-blue-600 text-white py-3 rounded-md">
        Search
      </button>
    </div>
  );
};

export default Search;
