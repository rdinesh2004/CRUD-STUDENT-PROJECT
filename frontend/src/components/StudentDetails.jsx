import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function StudentDetails({ selectedStudent, closeDetails }) {
  return (
    <Box
      sx={{
        marginTop: 3,
        animation: "detailsAppear 0.6s ease",

        "@keyframes detailsAppear": {
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
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          color: "#16324f",
          marginBottom: 2
        }}
      >
        Student Details
      </Typography>

      <Card
        elevation={0}
        sx={{
          maxWidth: 550,
          borderRadius: 4,
          overflow: "hidden",

          background:
            "linear-gradient(145deg, #ffffff, #dfeaf1)",

          boxShadow:
            "0 12px 35px rgba(30, 80, 110, 0.15)",

          transition:
            "transform 0.3s ease, box-shadow 0.3s ease",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow:
              "0 18px 40px rgba(30, 80, 110, 0.22)"
          }
        }}
      >
        {/* Top Section */}

        <Box
          sx={{
            padding: 3,
            background:
              "linear-gradient(135deg, #16324f, #2f668f)",
            color: "white"
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
          >
            👨‍🎓 {selectedStudent.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              marginTop: 0.5
            }}
          >
            Student Information
          </Typography>
        </Box>

        {/* Details */}

        <CardContent sx={{ padding: 3 }}>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
              marginBottom: 2,
              borderRadius: 3,
              backgroundColor:
                "rgba(255,255,255,0.7)"
            }}
          >
            <Typography fontWeight="bold">
              ID
            </Typography>

            <Typography color="text.secondary">
              {selectedStudent.id}
            </Typography>
          </Box>


          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
              marginBottom: 2,
              borderRadius: 3,
              backgroundColor:
                "rgba(255,255,255,0.7)"
            }}
          >
            <Typography fontWeight="bold">
              Name
            </Typography>

            <Typography color="text.secondary">
              {selectedStudent.name}
            </Typography>
          </Box>


          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
              marginBottom: 3,
              borderRadius: 3,
              backgroundColor:
                "rgba(255,255,255,0.7)"
            }}
          >
            <Typography fontWeight="bold">
              Course
            </Typography>

            <Typography color="text.secondary">
              {selectedStudent.course}
            </Typography>
          </Box>


          {/* Back Button */}

          <Button
            variant="contained"
            onClick={closeDetails}
            sx={{
              borderRadius: 3,
              paddingX: 3,
              paddingY: 1.2,
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
            ← Back to Students
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
}

export default StudentDetails;