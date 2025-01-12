import { useState } from 'react';
import { useAppContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const Profile = () => {

  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const { verified } = useAppContext();


  if (!verified) {
    navigate("/checkemailverification");
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="container mx-auto md:px-auto px-2">

        <section className="header w-full bg-orange-800 relative h-[200px] rounded-md shadow-md shadow-gray-300 md:block flex items-center justify-center">
          <div className="relative w-full h-full"><img src="/images/large/imageblog.jpg" alt="" className='w-full h-full object-cover rounded-md' /></div>
          <div className="user-area absolute bottom-[-70px] md:left-0 w-[200px] h-[200px] md:h-[150px] bg-orange-700 rounded-full md:w-[150px] border border-8 border-white">
          </div>
        </section>

        <section className='md:mt-2 mt-[70px] md:mx-0 mx-auto md:ml-[170px] flex items-center justify-center flex-col md:float-left'>
          <h1 className='text-3xl text-orange-700'>MHGKHAN TEAM</h1>
          <p className='text-center my-1'>User Role (Web Developer) </p>
          <div className="button flex md:w-full items-center justify-start mt-2 gap-3">
            <button className="bg-orange-700 rounded-md p-2 text-white fong-bold">Edit profile</button>
            <button className="bg-orange-700 rounded-full p-3 text-white fong-bold"><FaEye /></button>
          </div>
        </section>




      </div>
    </main>
  );
};

export default Profile;
