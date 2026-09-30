import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentDetails from "../components/StudentDetails";

function StudentDetailsPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);


  useEffect(() => {

    fetch(`http://localhost:3000/api/students/${id}`)
      .then((res) => res.json())
      .then((data) => {

        setStudent(data);

      });

  }, [id]);


  const closeDetails = () => {

    navigate("/students");

  };


  if (!student) {

    return <p>Loading student...</p>;

  }


  return (

    <div>

      <h1>Student Details</h1>

      <StudentDetails
        selectedStudent={student}
        closeDetails={closeDetails}
      />

    </div>

  );

}

export default StudentDetailsPage;