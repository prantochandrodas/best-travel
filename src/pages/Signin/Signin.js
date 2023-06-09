import React, { useContext, useState } from 'react';
import './Signin.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import image from "../../assets/istockphoto-1285301614-612x612.jpg" 
const Signin = () => {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const imageApiKey=process.env.REACT_APP_image_api_key;
    console.log(imageApiKey);
    const {createUser,userUpdata}=useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        setLoading(true);
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
          
            console.log(user);
        })
        .catch(err=>console.log(err))
        const image=data.image[0];
        const formData = new FormData();
        formData.append("image",image);
        const url=`https://api.imgbb.com/1/upload?expiration=600&key=${imageApiKey}`;
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imageData=>{
            console.log(imageData);
            if(imageData.success){

                const userInfo={
                    displayName:data.name,
                    photoURL:imageData.data.url
                }
                userUpdata(userInfo)
                .then(()=>{
                    navigate('/');
                    setLoading(false);
                })
                .catch(error=>{
                    console.log(error);
                    setLoading(false);
                });
                
            }
        })
        .catch(error=>console.log(error))
        
    }
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div className='lg:py-20 py-10 signin-bg'>
            <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div class="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage:`url(${image})`,backgroundPosition:'center'}}></div>

                <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div class="flex justify-center mx-auto">
                        <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/>
                    </div>

                    <p class="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}> 
                    {/* name  */}
                    <div class="mt-4">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Name</label>
                        <input
                        {...register("name", { required: true })}
                        id="Name" name='name' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                        <p className='text-red'>{errors.name && <span>This field is required</span>}</p>
                    </div>
                    <div class="mt-4">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                        <input
                        {...register("email", { required: true })}
                        id="LoggingEmailAddress" name='email' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                         <p className='text-red'>{errors.email && <span className='text-red-600'>This field is required</span>}</p>
                    </div>
                {/* password      */}
                    <div class="mt-4">
                        <div class="flex justify-between">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                        </div>

                        <input
                         {...register("password", { required: 'Password is required' ,minLength: { value: 6, message: "Password mustbe 6 characters" }})} 
                        id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                    </div>
        {/* image */}
                    <div class="mt-4">
                        <div class="flex justify-between">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Image</label>
                        </div>

                        <input
                         {...register("image", { required: 'Password is required'})} 
                        id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="file" />
                        {errors.image && <span className='text-red-600'>{errors.image.message}</span>}
                    </div>

                    <div class="mt-6">
                        <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>
                    <div class="flex items-center justify-between mt-4">
                        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link to='/login' class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or go to login</Link>

                        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;