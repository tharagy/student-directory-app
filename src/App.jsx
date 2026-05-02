import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import Home from "./pages/Home";

function App() {
  const students = [
    {
      id: 1,
      name: "Amal Perera",
      age: 21,
      course: "Information Technology",
      isActive: true,
    },

    {
      id: 2,
      name: "Dilani Ranasinghe",
      age: 23,
      course: "Information Technology",
      isActive: true,
    },

    {
      id: 3,
      name: "Kasun Fernando",
      age: 20,
      course: "Engineering",
      isActive: true,
    },

    {
      id: 4,
      name: "Nimesha Silva",
      age: 22,
      course: "Business Management",
      isActive: false,
    },

    {
      id: 5,
      name: "Sanduni Jayawardena",
      age: 22,
      course: "Engineering",
      isActive: true,
    },

    {
      id: 6,
      name: "Tharindu Wijesinghe",
      age: 21,
      course: "Business Management",
      isActive: false,
    },
  ];

  return (
    <>
      <Header />
      <div className="container">
        {/* <StudentList students={students}/> */}

        <Home />
       
        <StudentCard students={students} />
      </div>
      <Footer />
    </>
  );
}

export default App;
