import React from 'react'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { MdEmail, MdPassword } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Input from '../components/ui/form/Input'
import Or from '../components/ui/form/Or'

const Login = () => {
  return (
    <main className='min-h-screen px-2 md:px-0' >

      <div className="container mx-auto md:w-[400px] w-full bg-white shadow-lg shadow-gray-400 rounded-md">

        <div className="login-heading my-3 w-full p-2">
          <h2 className="text-3xl font-bold my-1"> Login    </h2>
          <p className="text-gray-600">Please login to your account to acces our features etc easily </p>
          <p className='px-3 text-gray-800'>Already have an account <Link className=' text-blue-600' to={'/register'}>Register</Link> </p>
        </div>

        <form action="" className="mt-2 w-full py-2 px-4">
          {/* email  */}
          <Input name={'email'} type={'email'} Icon={MdEmail} placeholder={"Enter email"} message={"Email"} required={true} />
          {/* password  */}
          <Input name={'password'} type={'password'} Icon={MdPassword} placeholder={"Password"} message={"Password"} required={true} />

          <button className="hover:bg-white hover:text-orange-700 transition-all duration-300 hover:border-black text-lg w-full p-2 rounded-md text-center font-bold text-white bg-orange-700 my-3 outline-none border border-1 border-orange-400">
            Login
          </button>

          <Or />


          <button className="flex items-center justify-center gap-2 transition-all duration-300  text-lg w-full p-2 rounded-md text-center font-bold text-white bg-blue-700 my-3 outline-none border border-1 border-blue-400 hover:bg-blue-500">
            Continue with <BsGoogle />
          </button>
          <button className="flex items-center justify-center gap-2 transition-all duration-300  text-lg w-full p-2 rounded-md text-center font-bold text-white bg-black my-3 outline-none border border-1 border-gray-700 hover:bg-gray-700">
            Continue with <BsGithub />
          </button>


        </form>


      </div>

    </main>
  )
}

export default Login
