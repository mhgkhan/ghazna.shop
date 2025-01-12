import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const { verified } = useAppContext();

  // const check = async () => {
  //   const res = await checkToken();
  //   if (res) {
  //     return setVerify(true);
  //   } else {
  //     setVerify(false);
  //     navigate("/checkemailverification");
  //   }
  // };


  // useEffect(() => {



  // }, [verified]);
  if (!verified) {
    navigate("/checkemailverification");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg w-full">
        <div className="flex items-center mb-6">
          <img src="https://via.placeholder.com/150" alt="Profile" className="w-24 h-24 object-cover rounded-full mr-4" />
          <div>
            <h1 className="text-3xl font-bold text-orange-600">John Doe</h1>
            <p className="text-gray-700">johndoe@example.com</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-2">Username: johndoe</p>
          <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-700 mb-2">Address: 123 Main St, Anytown</p>
          <p className="text-gray-700 mb-2">Company: Example Corp</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
