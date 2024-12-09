import React, { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/Backbutton'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditStudents = () => {
    const [rollnumber,setRollnumber]=useState("")
  const[name,setName]=useState('')
  const[dbms,setDbms]=useState('')
  const[python,setPython]=useState('')
  const[cgpa,setCgpa]=useState('')
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`https://localhost:5959/students${id}`)
    .then((res)=>{
      setRollnumber(res.data.rollnumber)
      setName(res.data.name)
      setDbms(res.data.dbms)
      setPython(res.data.python)
      setCgpa(res.data.cgpa)
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  },[])
  const handleEditBook=()=>{
    const data={
        rollnumber,
        name,
        dbms,
        python,
        cgpa,
    }
    setLoading(true)
    axios.put(`http://localhost:5959/students/${id}`,data)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Student</h1>
      {
        loading?<Spinner/>:""
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-44 text-gray-500'>Roll Number</label>
          <input
          type='text'
          value={rollnumber}
          onChange={(e)=>setRollnumber(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-44 text-gray-500'>Name</label>
          <input
          type='text'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>


        <div className='my-4'>
          <label className='text-xl mr-44 text-gray-500'>DBMS</label>
          <input
          type='text'
          value={dbms}
          onChange={(e)=>setDbms(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-44 text-gray-500'>Python</label>
          <input
          type='text'
          value={python}
          onChange={(e)=>setPython(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-44 text-gray-500'>CGPA</label>
          <input
          type='text'
          value={cgpa}
          onChange={(e)=>setCgpa(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>


        
        <button className='p-2 bg-sky-400 m-8' onClick={handleEditBook}>
          Save
        </button>


      </div>
    </div>
  )
}

export default EditStudents
