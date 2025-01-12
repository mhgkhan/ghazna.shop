import React, { useState } from 'react'
import { FaEnvelope, FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { APIROUTES } from '../configs/ApiRoutes';

const CheckEmailVerification = () => {


    const { token } = useAppContext();

    const [loading,setLoading] = useState(false)


    const resendEmailVerification = async () => {
        if (!token) {
            toast.error("some error occured")
        }
        else {
            try {
                setLoading(true)
                const request = await fetch(`${APIROUTES.BASE_URL}api/auth/resendtoken`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ token })
                })


                const response = await request.json()

                if (response.success) {
                    setLoading(false)
                    toast.success("email resend sucessfully")
                }
                else {
                    toast.error("some error occured")
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
    }


    return (
        <main className='min-h-screen flex items-start mt-5 justify-center px-2 md:px-0 bg-gray-100'>
            <div className="container mx-auto text-center p-6 bg-white shadow-md rounded-md">
                <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-4" />
                <h1 className="text-2xl font-bold mb-2">Verify Your Email Address</h1>
                <p className="text-gray-700 mb-4">
                    Thank you for registering! To complete your registration, please check your email and verify your account.
                </p>
                <FaEnvelope className="text-blue-500 text-4xl mx-auto mb-4" />
                <p className="text-gray-700">
                    If you did not receive the email, please check your spam folder or <button disabled={loading} onClick={resendEmailVerification} className="disabled:bg-gray-300 bg-gray-700 text-blue-500 underline">click here</button> to resend the verification email.
                </p>
            </div>
        </main>
    )
}

export default CheckEmailVerification