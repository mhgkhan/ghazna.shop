import { BsGoogle } from 'react-icons/bs'
import Or from '../components/ui/form/Or'
import Input from '../components/ui/form/Input'
import { MdEmail, MdPassword } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast';
import { useAppContext } from '../context/AuthContext'
import { useState } from 'react'
import { APIROUTES } from '../configs/ApiRoutes'

const Register = () => {

  const { storeToken } = useAppContext();
  const nevigate = useNavigate();



  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })


  const changeInput = e => setFormData({ ...formData, [e.target.name]: e.target.value })


  const [validInput, setValidInput] = useState({
    email: true,
    password: true,
    confirmPassword: true
  })





  const [loading, setLoading] = useState(false);
  const [isRecieveErr, setIsRecieveErr] = useState(false);
  const [recieveErr, setRecieveErr] = useState("");
  const [recResponse, setRecResponse] = useState("")


  const submitFrom = async e => {
    e.preventDefault();

    if (formData.email.length < 6 && formData.password.length < 8 && formData.confirmPassword.length < 8) {
      setValidInput({ password: false, email: false, confirmPassword: false })
      return false;
    }

    if (formData.email.length < 6) {
      setValidInput({ email: false, password: true, confirmPassword: true })
      return false;
    }
    else if (formData.password.length < 8) {
      setValidInput({ password: false, email: true, confirmPassword: true })
      return false;
    }
    else if (formData.confirmPassword.length < 8 || formData.confirmPassword !== formData.password) {
      setValidInput({ password: true, email: true, confirmPassword: false })
      return false;
    }

    else {
      setValidInput({ email: true, password: true, confirmPassword: true })
      setLoading(true)

      try {
        const request = await fetch(`${APIROUTES.BASE_URL}${APIROUTES.AUTH_REGISTER}`, {
          // const request = await fetch(`http://localhost:3090/api/auth/users/signin`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData)
        })

        const response = await request.json();

        if (response.success) {
          setIsRecieveErr(false);
          setRecResponse(response);
          setRecieveErr("");
          setFormData({ email: "", password: "", confirmPassword: "" })
          toast.success("Registration successfull");
          storeToken(response.data?.token);
          nevigate('/profile')
        }
        else {
          setIsRecieveErr(true);
          setRecResponse(response);
          setRecieveErr(response.message);
          toast.error("Registration failed " + recieveErr);
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

      <div className="container mx-auto md:w-[400px] w-full bg-white shadow-lg shadow-gray-400 rounded-md">

        <div className="login-heading my-3 w-full p-2">
          <h2 className="text-3xl font-bold my-1"> Create new account!    </h2>
          <p className="text-gray-600"> Register your account to acces your dashboard. </p>
          <p className='px-3 text-gray-800'>Already have an account <Link className=' text-blue-600' to={'/login'}>Login </Link> </p>
        </div>

        <form onSubmit={submitFrom} className="mt-2 w-full py-2 px-4">
          {validInput.email ? "" : <span className='text-red-600 text-center block mb-[-20px] w-full'>Email is not valid </span>}
          {/* email  */}
          <Input name={'email'} type={'email'} Icon={MdEmail} placeholder={"Enter email"} message={"Email"} onchange={changeInput} value={formData.email} required={true} />
          {validInput.password ? "" : <span className='text-red-600 text-center block mb-[-20px] w-full'>Password must be atleast 8 chahracters </span>}
          {/* password  */}
          <Input name={'password'} disable={loading} type={'password'} Icon={MdPassword} placeholder={"Password"} message={"Password"} onchange={changeInput} value={formData.password} required={true} />
          {validInput.confirmPassword ? "" : <span className='text-red-600 text-center block mb-[-20px] w-full'>Confirm password not matched </span>}
          {/* Confirm password  */}
          <Input name={'confirmPassword'} disable={loading} type={'password'} Icon={MdPassword} placeholder={"Confirm password"} message={"Confirm password"} onchange={changeInput} value={formData.confirmPassword} required={true} />

          <button disabled={loading} className={`disabled:bg-orange-200 hover:bg-orange-600 active:bg-orange-400 hover:border-orange-300 transition-all duration-300 hover:border-black text-lg w-full p-2 rounded-md text-center font-bold text-white bg-orange-700 my-3 outline-none border border-1 border-orange-400`}>
            Register
          </button>

          <Or />

        </form>

        <button type='button' className="flex items-center justify-center gap-2 transition-all duration-300  text-lg w-full p-2 rounded-md text-center font-bold text-white bg-blue-700 my-3 outline-none border border-1 border-blue-400 hover:bg-blue-500">
          Continue with <BsGoogle />
        </button>


      </div>

    </main>
  )
}

export default Register
