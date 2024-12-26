import React, { useState } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { MdEmail, MdPassword } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/ui/form/Input'
import Or from '../components/ui/form/Or'
import { APIROUTES } from '../configs/ApiRoutes'
import toast, { Toaster } from 'react-hot-toast';
import { useAppContext } from '../context/AuthContext'

const Login = () => {

  const { storeToken } = useAppContext();
  const nevigate = useNavigate();



  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })


  const changeInput = e => setFormData({ ...formData, [e.target.name]: e.target.value })


  const [validInput, setValidInput] = useState({
    email: true,
    password: true
  })





  const [loading, setLoading] = useState(false);
  const [isRecieveErr, setIsRecieveErr] = useState(false);
  const [recieveErr, setRecieveErr] = useState("");
  const [recResponse, setRecResponse] = useState("")


  const submitFrom = async e => {
    e.preventDefault();

    if (formData.email.length < 6 && formData.password.length < 8) {
      setValidInput({ password: false, email: false })
      return false;
    }

    if (formData.email.length < 6) {
      setValidInput({ email: false, password: true })
      return false;
    }
    else if (formData.password.length < 8) {
      setValidInput({ password: false, email: true })
      return false;
    }

    else {
      setValidInput({ email: true, password: true })
      setLoading(true)

      try {
        const request = await fetch(`${APIROUTES.BASE_URL}${APIROUTES.AUTH_SIGNIN}`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          credentials:"include",
          body: JSON.stringify(formData)
        })

        const response = await request.json();

        if (response.success) {
          setIsRecieveErr(false);
          setRecResponse(response);
          setRecieveErr("");
          setFormData({ email: "", password: "" })
          toast.success("Login successfull");
          storeToken(response.data?.token);
          nevigate("/profile/")
        }
        else {
          setIsRecieveErr(true);
          setRecResponse(response);
          setRecieveErr(response.message);
          toast.error("Login failed "+recieveErr);
        }
      } catch (error) {
        setIsRecieveErr(true);
        setRecResponse("");
        setRecieveErr(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

  }

    return (
      <main className='min-h-screen px-2 md:px-0' >
        <Toaster />
        <div className="container mx-auto md:w-[400px] w-full bg-white shadow-lg shadow-gray-400 rounded-md">

          <div className="login-heading my-3 w-full p-2">
            <h2 className="text-3xl font-bold my-1"> Login    </h2>
            <p className="text-gray-600">Please login to your account to acces our features etc easily </p>
            <p className='px-3 text-gray-800'>Not have an account  <Link className=' text-blue-600' to={'/register'}>Register</Link> </p>
          </div>

          <form onSubmit={submitFrom} className="mt-2 w-full py-2 px-4">
            {validInput.email ? "" : <span className='text-red-600 text-center block mb-[-20px] w-full'>Email is not valid </span>}
            {/* email  */}
            <Input name={'email'} disable={loading} onchange={changeInput} value={formData.email} type={'email'} Icon={MdEmail} placeholder={"Enter email"} message={"Email"} required={true} />
            {validInput.password ? "" : <span className='text-red-600 text-center block mb-[-20px] w-full'>Password must be more than 8 characters  </span>}
            {/* password  */}
            <Input name={'password'} disable={loading} onchange={changeInput} value={formData.password} type={'password'} Icon={MdPassword} placeholder={"Password"} message={"Password"} required={true} />

            <button className={`hover:bg-white hover:text-orange-700 transition-all duration-300 hover:border-black text-lg w-full p-2 rounded-md text-center font-bold text-white bg-orange-700 my-3 outline-none border border-1 border-orange-400`}>
              Login
            </button>

            <Or />


          </form>


          <button className="flex items-center justify-center gap-2 transition-all duration-300  text-lg w-full p-2 rounded-md text-center font-bold text-white bg-blue-700 my-3 outline-none border border-1 border-blue-400 hover:bg-blue-500">
            Continue with <BsGoogle />
          </button>
          {/* <button className="flex items-center justify-center gap-2 transition-all duration-300  text-lg w-full p-2 rounded-md text-center font-bold text-white bg-black my-3 outline-none border border-1 border-gray-700 hover:bg-gray-700">
            Continue with <BsGithub />
          </button> */}




        </div>

      </main>
    )
  }
  export default Login
