import React from "react";
import { useForm } from "react-hook-form";
import useSignUp from './hooks';
import {
  Link
} from "react-router-dom";
export default function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [onSubmit] = useSignUp();
 
    return(
      <div className="flex justify-center" >
          <div className="w-full max-w-xs mt-60">
            
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input defaultValue="" {...register("username", { required: true })}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              <p className="text-red-500 text-xs italic mt-1">{errors.username?.type && "Username is required"}</p>
              <p className="text-red-500 text-xs italic mt-1">{errors.username?.message}</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input {...register("password", { required: true })}  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic mt-1">{errors.password?.type && "Passaword is required"}</p>
              <p className="text-red-500 text-xs italic">{errors.password?.message}</p>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                Sign Up
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
              <Link to="/login">Login</Link>
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2021 Hello build. All rights reserved.
          </p>
        </div>
      </div>
    )
}