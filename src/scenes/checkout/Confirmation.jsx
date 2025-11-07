import { Box, Typography, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success!</AlertTitle>
        This is a demo confirmation page. In a real application, your order would be processed here.
      </Alert>
      
      <Box mt={4}>
        <Typography variant="h5" mb={2}>
          Demo Mode Information:
        </Typography>
        <Typography paragraph>
          • No actual payment was processed
        </Typography>
        <Typography paragraph>
          • This is a portfolio demonstration
        </Typography>
        <Typography paragraph>
          • All data is stored locally in your browser
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{ mt: 3 }}
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default Confirmation;
