import StudentForm from "../components/StudentForm";

function AddStudent({
  editId,
  name,
  course,
  setName,
  setCourse,
  addStudent,
  updateStudent,
  cancelEdit
}) {
  return (
    <div>

      <h1>Student Form</h1>

      <StudentForm
        editId={editId}
        name={name}
        course={course}
        setName={setName}
        setCourse={setCourse}
        addStudent={addStudent}
        updateStudent={updateStudent}
        cancelEdit={cancelEdit}
      />

    </div>
  );
}

export default AddStudent;