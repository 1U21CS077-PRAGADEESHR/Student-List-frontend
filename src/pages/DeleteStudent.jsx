import React from 'react'
import { useState,useEffect } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import BackButton from '../components/Backbutton'

function DeleteStudent() {
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()
  const handleDeleteBook=()=>{
    setLoading(true)
    axios.delete(`http://localhost:5959/students/${id}`)
    .then(()=>{
      setLoading(false)
      navigate("/")
    })
    .catch((error)=>{
      setLoading(false)
      alert('An error happend.Please check Console')
      console.log(error)
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Student</h1>
      {
        loading?<Spinner/>:""      }
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8'>
          <h3 className='text-2xl'>Are You Sure Youwant to delete this Student?</h3>
          <button
          className='p-4 bg-red-500 text-white m-8 w-full'
          onClick={handleDeleteBook}
          >
            Yes,Delete it !
          </button>
        </div>
    </div>
  )
}

export default DeleteStudent
