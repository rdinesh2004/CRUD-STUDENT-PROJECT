import StudentFilters from "../components/StudentFilters";
import StudentTable from "../components/StudentTable";

function Students({
  search,
  setSearch,
  courseFilter,
  setCourseFilter,
  courses,
  filteredStudents,
  viewStudent,
  editStudent,
  deleteStudent
}) {
  return (
    <div>

      <h1>Students</h1>

      <StudentFilters
        search={search}
        setSearch={setSearch}
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter}
        courses={courses}
      />

      <StudentTable
        filteredStudents={filteredStudents}
        viewStudent={viewStudent}
        editStudent={editStudent}
        deleteStudent={deleteStudent}
      />

    </div>
  );
}

export default Students;