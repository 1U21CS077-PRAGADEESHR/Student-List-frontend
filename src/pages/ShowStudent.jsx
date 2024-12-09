import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import BackButton from '../components/Backbutton'

function ShowStudent() {
  const [student,setStudent]=useState({})
  const [loading,setLoading]=useState(false)
  const {id}=useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5959/students/${id}`)
    .then((res)=>{
        setStudent(res.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  },[])
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Student</h1>
      {
        loading?<Spinner/>:(
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>ID</span>
              <span>{student._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
                Roll Number
              </span>
              <span>
                {student.rollnumber}
              </span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
                Name
              </span>
              <span>
                {student.name}
              </span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
                Class
              </span>
              <span>
                MCA
              </span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
                DBMS
              </span>
              <span>
                {student.dbms}
              </span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
                Python
              </span>
              <span>
                {student.python}
              </span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
                cgpa
              </span>
              <span>
                {student.cgpa}
              </span>
            </div>
         
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
                Create Time
              </span>
              <span>
                {new Date(student.createdAt).toString()}
              </span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
                Last Updated Time
              </span>
              <span>
              {new Date(student.updatedAt).toString()}
              </span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ShowStudent
