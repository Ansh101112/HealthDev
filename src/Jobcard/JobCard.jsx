import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import { isLoggedIn } from "../Firebase/authUtils.jsx";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const JobCard = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(dayjs(props.postedOn), 'day');

  useEffect(() => {
    const fetchUserData = async () => {
      const db = getFirestore();
      const usersCollection = collection(db, 'doctors');
      const usersSnapshot = await getDocs(usersCollection);
      const usersData = usersSnapshot.docs.map(doc => doc.data());
      setUserData(usersData);
    };
    fetchUserData();
  }, []);

  const handleApplyClick = () => {
    if (!isLoggedIn()) {
      navigate('/login');
    } else {
      let link = props.link;
      if (!/^https?:\/\//i.test(link)) {
        link = `https://${link}`;
      }
      window.open(link);
    }
  };

  return (
    <div className="mb-4 mx-24">
      <div className="flex justify-between items-center px-2 py-4 bg-zinc-200 rounded-md border-black shadow-lg hover:border-blue-500 hover: translate-y-5">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">{props.name} - {props.specialization}</h1>
          <p>{props.experience} &#x2022; {props.location} &#x2022; {props.contact}</p>
        </div>
        <div className="flex items-center gap-2">
          {Array.isArray(props.qualifications) && props.qualifications.map((qualification, index) =>
            <p key={index} className="text-grey-500 py-1 px-2 rounded-md border border-black">{qualification}</p>
          )}
        </div>
        <div className="flex items-center gap-4">
          <p className="text-grey-500 ">Joined {diffInDays > 0 ? `${diffInDays} days ago` : 'today'}.</p>
          <button onClick={handleApplyClick} className="text-black-500 bg-green-400 border border-blue-500 px-10 py-2 rounded-md">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
