import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetailsPage from "./pages/StudentDetailsPage";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");

  const [course, setCourse] = useState("");

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  const [courseFilter, setCourseFilter] = useState("All");

  const [totalStudents, setTotalStudents] = useState(0);

  const [totalCourses, setTotalCourses] = useState(0);

  const [selectedStudent, setSelectedStudent] = useState(null);

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false);


  // Courses

  const courses = [
    "BCA",
    "BSc IT",
    "BSc Computer Science",
    "MCA"
  ];


  // Load Students

  const loadStudents = () => {

    fetch("http://localhost:3000/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });

  };


  // Load Dashboard

  const loadDashboard = () => {

    fetch("http://localhost:3000/api/dashboard")
      .then((res) => res.json())
      .then((data) => {

        setTotalStudents(data.totalStudents);

        setTotalCourses(data.totalCourses);

      });

  };


  // Page Load

  useEffect(() => {

    loadStudents();

    loadDashboard();

  }, []);


  // Add Student

  const addStudent = () => {

    if (
      name.trim() === "" ||
      course.trim() === ""
    ) {

      alert("Please enter name and course");

      return;

    }


    fetch("http://localhost:3000/api/students", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: name,
        course: course
      })

    })
      .then((res) => res.json())
      .then((newStudent) => {

        setStudents((currentStudents) => [
          ...currentStudents,
          newStudent
        ]);

        setName("");

        setCourse("");

        loadDashboard();

      });

  };


  // Edit Student

  const editStudent = (student) => {

    setEditId(student.id);

    setName(student.name);

    setCourse(student.course);

    setSelectedStudent(null);

  };


  // Update Student

  const updateStudent = () => {

    if (
      name.trim() === "" ||
      course.trim() === ""
    ) {

      alert("Please enter name and course");

      return;

    }


    fetch(
      `http://localhost:3000/api/students/${editId}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name: name,
          course: course
        })
      }
    )
      .then((res) => res.json())
      .then((updatedStudent) => {

        setStudents((currentStudents) =>
          currentStudents.map((student) => {

            if (
              student.id === updatedStudent.id
            ) {

              return updatedStudent;

            }

            return student;

          })
        );

        setEditId(null);

        setName("");

        setCourse("");

        loadDashboard();

      });

  };


  // Delete Student

  const deleteStudent = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );


    if (!confirmDelete) {

      return;

    }


    fetch(
      `http://localhost:3000/api/students/${id}`,
      {
        method: "DELETE"
      }
    )
      .then((res) => res.json())
      .then(() => {

        setStudents((currentStudents) =>
          currentStudents.filter(
            (student) => student.id !== id
          )
        );


        if (
          selectedStudent &&
          selectedStudent.id === id
        ) {

          setSelectedStudent(null);

        }


        loadDashboard();

      });

  };


  // View Student

  const viewStudent = (id) => {

    navigate(`/students/${id}`);

  };


  // Close Details

  const closeDetails = () => {

    setSelectedStudent(null);

  };


  // Cancel Edit

  const cancelEdit = () => {

    setEditId(null);

    setName("");

    setCourse("");

  };


  // Search + Filter

  const filteredStudents = students.filter(
    (student) => {

      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(search.toLowerCase());


      const matchesCourse =
        courseFilter === "All" ||
        student.course === courseFilter;


      return (
        matchesSearch &&
        matchesCourse
      );

    }
  );


  return (

    <div
      className={`app ${
        darkMode ? "dark-mode" : ""
      }`}
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      <Routes>

        <Route
          path="/"
          element={
            <Dashboard
              totalStudents={totalStudents}
              totalCourses={totalCourses}
              showingStudents={filteredStudents.length}
            />
          }
        />


        <Route
          path="/students"
          element={
            <Students
              search={search}
              setSearch={setSearch}
              courseFilter={courseFilter}
              setCourseFilter={setCourseFilter}
              courses={courses}
              filteredStudents={filteredStudents}
              viewStudent={viewStudent}
              editStudent={editStudent}
              deleteStudent={deleteStudent}
            />
          }
        />


        <Route
          path="/students/add"
          element={
            <AddStudent
              editId={editId}
              name={name}
              course={course}
              setName={setName}
              setCourse={setCourse}
              addStudent={addStudent}
              updateStudent={updateStudent}
              cancelEdit={cancelEdit}
            />
          }
        />


        <Route
          path="/students/:id"
          element={<StudentDetailsPage />}
        />

      </Routes>

    </div>

  );
}

export default App;