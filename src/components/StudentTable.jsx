import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete,MdOutlineAdd} from 'react-icons/md'
import { Link } from 'react-router-dom'
function StudentTable({students}) {
  return (
    <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Roll Number</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Name</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'> DBMS</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'> Python</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'> CGPA</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student,index)=>{
                  return (<tr key={student._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center'>{index+1}</td>
                    <td className='border border-slate-700 rounded-md text-center'>{student.rollnumber}</td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{student.name}</td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{student.dbms}</td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{student.python}</td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{student.cgpa}</td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      <div className='flex justify-center gap-x-4'>
                      <Link to={`/students/details/${student._id}`}>
                      <BsInfoCircle className='text-2xl text-green-800'/>
                      </Link>
                      <Link to={`/students/edit/${student._id}`}>
                      <AiOutlineEdit className=' text-2xl text-yellow-600'/>
                      </Link>
                      <Link to={`/students/delete/${student._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-500'/>
                      </Link>
                      </div>                  
                    </td>
                  </tr>)
                })
              }   
            </tbody>
        </table>
  )
}

export default StudentTable
