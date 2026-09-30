import express from "express";
import cors from "cors";

const app = express();


// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());

app.use(express.json());


// ========================================
// STUDENTS DATA
// ========================================

const students = [

    {
        id: 1,
        name: "Dinesh",
        course: "BSc Computer Science"
    },

    {
        id: 2,
        name: "Arun",
        course: "BCA"
    },

    {
        id: 3,
        name: "Karthik",
        course: "BSc IT"
    }

];


// ========================================
// MESSAGE API
// ========================================

app.get("/api/message", (req, res) => {

    res.json({
        message: "Hello from StudentHub"
    });

});


// ========================================
// GET ALL STUDENTS
// ========================================

app.get("/api/students", (req, res) => {

    res.json(students);

});


// ========================================
// GET SINGLE STUDENT
// ========================================

app.get("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);


    const student = students.find(
        (student) => student.id === id
    );


    if (!student) {

        return res.status(404).json({

            message: "Student not found"

        });

    }


    res.json(student);

});


// ========================================
// ADD STUDENT
// ========================================

app.post("/api/students", (req, res) => {

    const newStudent = {

        id:
            students.length > 0
                ? Math.max(
                    ...students.map(
                        (student) => student.id
                    )
                ) + 1
                : 1,

        name: req.body.name,

        course: req.body.course

    };


    students.push(newStudent);


    res.status(201).json(newStudent);

});


// ========================================
// UPDATE STUDENT
// ========================================

app.put("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);


    const student = students.find(
        (student) => student.id === id
    );


    if (!student) {

        return res.status(404).json({

            message: "Student not found"

        });

    }


    student.name = req.body.name;

    student.course = req.body.course;


    res.json(student);

});


// ========================================
// DELETE STUDENT
// ========================================

app.delete("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);


    const studentIndex = students.findIndex(
        (student) => student.id === id
    );


    if (studentIndex === -1) {

        return res.status(404).json({

            message: "Student not found"

        });

    }


    const deletedStudent =
        students.splice(studentIndex, 1);


    res.json({

        message: "Student deleted successfully",

        student: deletedStudent[0]

    });

});


// ========================================
// DASHBOARD API
// ========================================

app.get("/api/dashboard", (req, res) => {

    const totalStudents = students.length;


    const courses = [
        ...new Set(
            students.map(
                (student) => student.course
            )
        )
    ];


    const totalCourses = courses.length;


    res.json({

        totalStudents: totalStudents,

        totalCourses: totalCourses

    });

});


// ========================================
// START SERVER
// ========================================

app.listen(3000, () => {

    console.log(
        "Backend running on port 3000"
    );

});