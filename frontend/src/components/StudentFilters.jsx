import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

function StudentFilters({
  search,
  setSearch,
  courseFilter,
  setCourseFilter,
  courses
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        marginBottom: 4,
        flexWrap: "wrap",
        padding: 2.5,
        borderRadius: 4,
        background: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 25px rgba(30,80,110,0.08)",
        animation: "filterAppear 0.6s ease",
        "@keyframes filterAppear": {
          from: {
            opacity: 0,
            transform: "translateY(15px)"
          },
          to: {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      }}
    >

      <TextField
        label="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          minWidth: 250,
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            transition: "all 0.25s ease",
            "&:hover": {
              boxShadow: "0 5px 15px rgba(30,80,110,0.10)"
            },
            "&.Mui-focused": {
              boxShadow: "0 5px 20px rgba(30,80,110,0.15)"
            }
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              🔍
            </InputAdornment>
          )
        }}
      />

      <Select
        value={courseFilter}
        onChange={(e) => setCourseFilter(e.target.value)}
        sx={{
          minWidth: 250,
          borderRadius: 3,
          background: "white",
          transition: "all 0.25s ease",
          "&:hover": {
            boxShadow: "0 5px 15px rgba(30,80,110,0.10)"
          }
        }}
      >
        <MenuItem value="All">
          All Courses
        </MenuItem>

        {courses.map((course) => (
          <MenuItem
            key={course}
            value={course}
          >
            {course}
          </MenuItem>
        ))}
      </Select>

    </Box>
  );
}

export default StudentFilters;