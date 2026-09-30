import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function DashboardCards({
  totalStudents,
  totalCourses,
  showingStudents
}) {
  const cards = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: "👨‍🎓"
    },
    {
      title: "Total Courses",
      value: totalCourses,
      icon: "📚"
    },
    {
      title: "Showing Students",
      value: showingStudents,
      icon: "👀"
    }
  ];

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
        marginTop: 4,
        marginBottom: 5,
      }}
    >

      {cards.map((card, index) => (

        <Card
          key={card.title}
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: "visible",
            background:
              "linear-gradient(145deg, #ffffff, #dfeaf1)",

            boxShadow:
              "0 10px 30px rgba(30, 80, 110, 0.12)",

            animation: `cardAppear 0.6s ease ${index * 0.15}s both`,

            transition:
              "transform 0.3s ease, box-shadow 0.3s ease",

            "&:hover": {
              transform:
                "translateY(-10px) scale(1.02)",

              boxShadow:
                "0 18px 40px rgba(30, 80, 110, 0.22)",
            },

            "@keyframes cardAppear": {
              from: {
                opacity: 0,
                transform: "translateY(30px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >

          <CardContent
            sx={{
              padding: 3,
              position: "relative",
            }}
          >

            {/* Icon */}
            <Box
              sx={{
                fontSize: "32px",
                marginBottom: 1,

                transition:
                  "transform 0.3s ease",

                ".MuiCard-root:hover &": {
                  transform:
                    "scale(1.2) rotate(5deg)",
                },
              }}
            >
              {card.icon}
            </Box>

            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="500"
            >
              {card.title}
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: "#16324f",
                marginTop: 1,
              }}
            >
              {card.value}
            </Typography>

          </CardContent>

        </Card>

      ))}

    </Box>
  );
}

export default DashboardCards;