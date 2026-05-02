import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

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

  useEffect(() => {
    console.log("Students Directory Loaded");
    document.title = `${students.length} Students | Directory`;
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home students={students} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
