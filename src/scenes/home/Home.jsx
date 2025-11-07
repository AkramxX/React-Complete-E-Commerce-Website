import { Box, Alert } from "@mui/material";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";

function Home() {
  return (
    <Box className="home">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </Box>
  );
}

export default Home;
