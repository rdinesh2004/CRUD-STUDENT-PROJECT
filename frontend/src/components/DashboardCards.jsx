import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function DashboardCards({
  totalStudents,
  totalCourses,
  showingStudents
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)"
        },
        gap: 3,
        marginBottom: 4
      }}
    >

      <Card
        elevation={3}
        sx={{
          borderRadius: 3
        }}
      >
        <CardContent>

          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
          >
            Total Students
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            {totalStudents}
          </Typography>

        </CardContent>
      </Card>


      <Card
        elevation={3}
        sx={{
          borderRadius: 3
        }}
      >
        <CardContent>

          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
          >
            Total Courses
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            {totalCourses}
          </Typography>

        </CardContent>
      </Card>


      <Card
        elevation={3}
        sx={{
          borderRadius: 3
        }}
      >
        <CardContent>

          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
          >
            Showing Students
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            {showingStudents}
          </Typography>

        </CardContent>
      </Card>

    </Box>
  );
}

export default DashboardCards;