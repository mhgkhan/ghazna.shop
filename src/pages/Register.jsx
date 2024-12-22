import React from 'react'
import { BsGoogle } from 'react-icons/bs'
import Or from '../components/ui/form/Or'
import Input from '../components/ui/form/Input'
import { MdEmail, MdPassword } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <main className='min-h-screen px-2 md:px-0' >

      <div className="container mx-auto md:w-[400px] w-full bg-white shadow-lg shadow-gray-400 rounded-md">

        <div className="login-heading my-3 w-full p-2">
          <h2 className="text-3xl font-bold my-1"> Create new account!    </h2>
          <p className="text-gray-600"> Register your to acces your dashboard. </p>
          <p className='px-3 text-gray-800'>Already have an account <Link className=' text-blue-600' to={'/login'}>Login </Link> </p>
        </div>

        <form action="" className="mt-2 w-full py-2 px-4">
          {/* email  */}
          <Input name={'email'} type={'email'} Icon={MdEmail} placeholder={"Enter email"} message={"Email"} required={true} />
          {/* password  */}
          <Input name={'password'} type={'password'} Icon={MdPassword} placeholder={"Password"} message={"Password"} required={true} />

          <button className="hover:bg-white hover:text-orange-700 transition-all duration-300 hover:border-black text-lg w-full p-2 rounded-md text-center font-bold text-white bg-orange-700 my-3 outline-none border border-1 border-orange-400">
            Register
          </button>

          <Or />

        </form>

        <button type='button' className="flex items-center justify-center gap-2 transition-all duration-300  text-lg w-full p-2 rounded-md text-center font-bold text-white bg-blue-700 my-3 outline-none border border-1 border-blue-400 hover:bg-blue-500">
          Continue with <BsGoogle />
        </button>
        {/* <button className="flex items-center justify-center gap-2 transition-all duration-300  text-lg w-full p-2 rounded-md text-center font-bold text-white bg-black my-3 outline-none border border-1 border-gray-700 hover:bg-gray-700">
          Continue with <BsGithub />
        </button> */}




      </div>

    </main>
  )
}

export default Register
