import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function StudentTable({
  filteredStudents,
  viewStudent,
  editStudent,
  deleteStudent
}) {
  return (
    <Box
      sx={{
        marginTop: 3,
        animation: "tableAppear 0.7s ease",
        "@keyframes tableAppear": {
          from: {
            opacity: 0,
            transform: "translateY(20px)"
          },
          to: {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      }}
    >

      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: "#16324f",
          marginBottom: 2
        }}
      >
        Student List
      </Typography>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          boxShadow:
            "0 10px 30px rgba(30,80,110,0.12)"
        }}
      >

        <Table>

          <TableHead>

            <TableRow
              sx={{
                background:
                  "linear-gradient(135deg, #16324f, #2f668f)"
              }}
            >

              <TableCell sx={{ color: "white" }}>
                <strong>ID</strong>
              </TableCell>

              <TableCell sx={{ color: "white" }}>
                <strong>Name</strong>
              </TableCell>

              <TableCell sx={{ color: "white" }}>
                <strong>Course</strong>
              </TableCell>

              <TableCell sx={{ color: "white" }}>
                <strong>Actions</strong>
              </TableCell>

            </TableRow>

          </TableHead>


          <TableBody>

            {filteredStudents.map((student, index) => (

              <TableRow
                key={student.id}
                sx={{
                  animation:
                    `rowAppear 0.4s ease ${index * 0.08}s both`,

                  transition:
                    "all 0.25s ease",

                  "&:hover": {
                    backgroundColor: "#edf6fb",
                    transform: "scale(1.005)"
                  },

                  "@keyframes rowAppear": {
                    from: {
                      opacity: 0,
                      transform: "translateX(-15px)"
                    },
                    to: {
                      opacity: 1,
                      transform: "translateX(0)"
                    }
                  }
                }}
              >

                <TableCell>
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: "#dbe9f3",
                      color: "#16324f",
                      fontWeight: "bold"
                    }}
                  >
                    {student.id}
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography fontWeight="600">
                    {student.name}
                  </Typography>
                </TableCell>

                <TableCell>
                  {student.course}
                </TableCell>

                <TableCell>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap"
                    }}
                  >

                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => viewStudent(student.id)}
                      sx={{
                        borderRadius: 2,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow:
                            "0 5px 12px rgba(30,80,110,0.2)"
                        }
                      }}
                    >
                      View
                    </Button>


                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => editStudent(student)}
                      sx={{
                        borderRadius: 2,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-2px)"
                        }
                      }}
                    >
                      Edit
                    </Button>


                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => deleteStudent(student.id)}
                      sx={{
                        borderRadius: 2,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-2px)"
                        }
                      }}
                    >
                      Delete
                    </Button>

                  </Box>

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </Box>
  );
}

export default StudentTable;