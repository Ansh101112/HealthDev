import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import dayjs from 'dayjs';
import DoctorCard from './DoctorCard';
import { isLoggedIn } from "../Firebase/authUtils.jsx";

const DoctorListing = () => {
  const [doctorPostings, setDoctorPostings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorPostings = async () => {
      try {
        const doctorPostingsCollection = collection(db, 'doctors');
        const snapshot = await getDocs(doctorPostingsCollection);
        const doctorPostingsData = snapshot.docs.map(doc => doc.data());
        setDoctorPostings(doctorPostingsData);
      } catch (error) {
        console.error('Error fetching doctor postings: ', error);
      }
    };

    fetchDoctorPostings();
  }, []);

  return (
    <div>
      {doctorPostings.map((doctor, index) => (
        <JobCard
          key={index}
          title={doctor.title}
          specialization={doctor.specialization}
          experience={doctor.experience}
          location={doctor.location}
          qualifications={doctor.qualifications}
          postedOn={doctor.postedOn}
          link={doctor.link}
        />
      ))}
    </div>
  );
};

export default DoctorListing;
