import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";


import ShowStudent from "./pages/ShowStudent";
import DeleteStudent from "./pages/DeleteStudent";
import EditStudents from "./pages/EditStudent";
import CreateStudents from "./pages/CreateStudent";
function App() {
  return (
    <BrowserRouter>
        <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/students/create' element={<CreateStudents/>} />
      <Route path='/students/details/:id' element={<ShowStudent/>} />
      <Route path='/students/edit/:id' element={<EditStudents/>} />
      <Route path='/students/delete/:id' element={<DeleteStudent/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
