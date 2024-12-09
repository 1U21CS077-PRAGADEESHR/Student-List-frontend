import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import StudentCard from '../components/StudentCard';
import BooksTable from '../components/StudentTable';
import { MdOutlineAddBox } from 'react-icons/md';

function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:5959/students/');
        console.log('Response:', res.data);
        setStudents(res.data.data || []);
      } catch (err) {
        console.error('Error fetching students:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);;
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType('table')}
        >
          Show Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType('card')}
        >
          Show Cards
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Student List</h1>
        <Link to="students/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable students={students} />
      ) : (
        students.map((student) => <StudentCard key={student.id} student={student} />)
      )}
    </div>
  );
}

export default Home;
