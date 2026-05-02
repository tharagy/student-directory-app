import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";

function App() {
  const students = [
    { id: 1,
      name: "Thara",
      age: 20, 
      course: "IT",
      isActive: true },
      { id: 2,
      name: "Lia",
      age: 21, 
      course: "Business",
      isActive: true },
      { id: 3,
      name: "Maya",
      age: 22, 
      course: "Engineering",
      isActive: true },
      { id: 4,
      name: "Alex",
      age: 22, 
      course: "IT",
      isActive: false },
      { id: 5,
      name: "Alia",
      age: 21, 
      course: "Business",
      isActive: true },
  ];

  return (
    <>
     {/* <StudentCard students={students}/>
     <StudentList students={students}/> */}
<Header />
<Footer/>
    </>
  );
}

export default App;
