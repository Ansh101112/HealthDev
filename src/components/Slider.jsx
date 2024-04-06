import React, { useRef, useEffect } from 'react';

const Slider = () => {
  
  // Define an array of company logo URLs
  const LOGOS = [
    "https://th.bing.com/th/id/R.519f7062f77ca3e42e918bb1881804f2?rik=poMR0%2fwZZK3fcQ&riu=http%3a%2f%2fwww.aimscollegesambalpur.com%2fContent%2fFend%2fupload%2fLOGO1.png&ehk=RfWWCi79jdc6kfoYpNdDwk8IEMIpSCPl2Ieg2IWGXNQ%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.ae86186f816fcc2547e458a0d98ee62b?rik=F5iKNAj0kE0BVg&riu=http%3a%2f%2fehealth.eletsonline.com%2fwp-content%2fuploads%2f2015%2f02%2fmedanta.jpg&ehk=toKx3191DrpsmKZrS4iJLLCxQhaIosjChnHxOaU0OZM%3d&risl=&pid=ImgRaw&r=0",
    "https://genymedium.com/geny-app/geny-data/uploads/2017/12/APOLLO-HOSPITALS-LOGO.jpg",
    "https://companieslogo.com/img/orig/MAXHEALTH.NS_BIG-bf20d59a.png?t=1685089747",
    "https://th.bing.com/th/id/OIP.5AVdFszb5w-eoCVqNO8m2AHaBy?rs=1&pid=ImgDetMain",
    "https://i0.wp.com/aimth.ac.in/wp-content/uploads/2019/09/logo-only.png",
    "https://kimsburdwan.in/public/images/logos/logo.png",
    "https://hbgmedicalassistance.com/wp-content/uploads/2019/10/Nanavati-Super-Speciality-Hospital_11zon.jpg",
    "https://www.dial24hour.com/image/cache/catalog/customer/2566/Dark-Logo-Rubby-w-820x500.gif",
    "https://th.bing.com/th/id/R.519f7062f77ca3e42e918bb1881804f2?rik=poMR0%2fwZZK3fcQ&riu=http%3a%2f%2fwww.aimscollegesambalpur.com%2fContent%2fFend%2fupload%2fLOGO1.png&ehk=RfWWCi79jdc6kfoYpNdDwk8IEMIpSCPl2Ieg2IWGXNQ%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.ae86186f816fcc2547e458a0d98ee62b?rik=F5iKNAj0kE0BVg&riu=http%3a%2f%2fehealth.eletsonline.com%2fwp-content%2fuploads%2f2015%2f02%2fmedanta.jpg&ehk=toKx3191DrpsmKZrS4iJLLCxQhaIosjChnHxOaU0OZM%3d&risl=&pid=ImgRaw&r=0",
  ];

  return (
    <>
      <p className='py-3 px-4 flex m-3 font-semibold'>Our Trustors and Mentors</p>
      <div className="relative m-auto w-[900px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[200px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div className="slide flex w-[155px] items-center justify-center" key={index}>
              <img src={logo} alt={`Company ${index}`} className="w-full h-auto gap-3" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
