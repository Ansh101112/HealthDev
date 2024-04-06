import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { db } from '../Firebase/FirebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const DoctorPosting = () => {
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    specialization: '',
    experience: '',
    location: '',
    contact: '',
    qualifications: [],
    hospital: '',
    postedOn: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorDetails({
      ...doctorDetails,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, 'doctors'), doctorDetails); // Change 'doctors' to 'users'
      console.log('Document written with ID: ', docRef.id);
      toast.success('Doctor posting successful!');
      alert("Doctor posting successful!");
      // Clear the form after submission
      setDoctorDetails({
        name: '',
        specialization: '',
        experience: '',
        location: '',
        contact: '',
        qualifications: [],
        hospital: '',
        postedOn: '',
        link: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error posting doctor. Please try again.');
      alert("Try again after sometime.");
    }
  };

  const handleQualificationChange = (e) => {
    const qualifications = e.target.value.split(',').map(qualification => qualification.trim());
    setDoctorDetails({
      ...doctorDetails,
      qualifications: qualifications
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 flex items-center justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-300 to-yellow-500">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">Post Doctor Here</h2>
            <p className="text-gray-500 mb-6">Please fill out all the fields.</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                {/* Doctor details form */}
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                    <div>
                      <label htmlFor="name">Doctor's Name</label>
                      <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.name} onChange={handleChange} required />
                    </div>
                    {/* Remaining input fields */}
                    <div>
                      <label htmlFor="specialization">Specialization</label>
                      <input type="text" name="specialization" id="specialization" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.specialization} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="experience">Experience</label>
                      <input type="text" name="experience" id="experience" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.experience} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="location">Location</label>
                      <input type="text" name="location" id="location" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.location} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="contact">Contact</label>
                      <input type="text" name="contact" id="contact" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.contact} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="hospital">Hospital</label>
                      <input type="text" name="hospital" id="hospital" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.hospital} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="hospital">Appointment Link</label>
                      <input type="text" name="link" id="link" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.link} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="qualifications">Qualifications (comma separated)</label>
                      <input type="text" name="qualifications" id="qualifications" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.qualifications.join(', ')} onChange={handleQualificationChange} required />
                    </div>
                    <div>
                      <label htmlFor="postedOn">Apply By</label>
                      <input type="date" name="postedOn" id="postedOn" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={doctorDetails.postedOn} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorPosting;
