import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [verify, setVerify] = useState(false);

  const { checkToken } = useAppContext();

  const check = async () => {
    const res = await checkToken();
    if (res) setVerify(true)
    else {
      setVerify(false)
      navigate("/checkemailverification");
    }
  }

  useEffect(() => { check(), [] })


  return (
    <div>
      this is profile
    </div>
  )
}

export default Profile
