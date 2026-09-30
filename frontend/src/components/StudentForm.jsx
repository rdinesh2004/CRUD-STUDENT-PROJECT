import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function StudentForm({
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
    <Paper
      elevation={0}
      sx={{
        padding: 4,
        marginBottom: 4,
        borderRadius: 4,
        background:
          "linear-gradient(145deg, #ffffff, #dfeaf1)",
        boxShadow:
          "0 10px 30px rgba(30, 80, 110, 0.12)",

        animation: "formAppear 0.7s ease",

        "@keyframes formAppear": {
          from: {
            opacity: 0,
            transform: "translateY(25px) scale(0.98)"
          },
          to: {
            opacity: 1,
            transform: "translateY(0) scale(1)"
          }
        }
      }}
    >

      {/* Form Title */}

      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          color: "#16324f",
          marginBottom: 3
        }}
      >
        {editId === null
          ? "Add New Student"
          : "Edit Student"}
      </Typography>


      {/* Form Fields */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 500
        }}
      >

        <TextField
          label="Student Name"
          variant="outlined"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.7)",

              transition: "all 0.25s ease",

              "&:hover": {
                boxShadow:
                  "0 5px 15px rgba(30,80,110,0.10)"
              },

              "&.Mui-focused": {
                boxShadow:
                  "0 5px 20px rgba(30,80,110,0.15)"
              }
            }
          }}
        />


        <TextField
          label="Course"
          variant="outlined"
          value={course}
          onChange={(e) =>
            setCourse(e.target.value)
          }
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.7)",

              transition: "all 0.25s ease",

              "&:hover": {
                boxShadow:
                  "0 5px 15px rgba(30,80,110,0.10)"
              },

              "&.Mui-focused": {
                boxShadow:
                  "0 5px 20px rgba(30,80,110,0.15)"
              }
            }
          }}
        />


        {/* Buttons */}

        {editId === null ? (

          <Button
            variant="contained"
            onClick={addStudent}
            sx={{
              alignSelf: "flex-start",
              paddingX: 4,
              paddingY: 1.2,
              borderRadius: 3,
              fontWeight: "bold",

              transition:
                "all 0.25s ease",

              "&:hover": {
                transform:
                  "translateY(-3px) scale(1.02)",

                boxShadow:
                  "0 8px 20px rgba(30,80,110,0.25)"
              }
            }}
          >
            Add Student
          </Button>

        ) : (

          <Box
            sx={{
              display: "flex",
              gap: 2
            }}
          >

            <Button
              variant="contained"
              onClick={updateStudent}
              sx={{
                paddingX: 3,
                borderRadius: 3,
                fontWeight: "bold",

                transition:
                  "all 0.25s ease",

                "&:hover": {
                  transform:
                    "translateY(-3px)",

                  boxShadow:
                    "0 8px 20px rgba(30,80,110,0.25)"
                }
              }}
            >
              Update Student
            </Button>


            <Button
              variant="outlined"
              onClick={cancelEdit}
              sx={{
                paddingX: 3,
                borderRadius: 3,
                fontWeight: "bold",

                transition:
                  "all 0.25s ease",

                "&:hover": {
                  transform:
                    "translateY(-3px)"
                }
              }}
            >
              Cancel
            </Button>

          </Box>

        )}

      </Box>

    </Paper>
  );
}

export default StudentForm;