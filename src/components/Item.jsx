import { useState } from "react";
import { IconButton, Box, Typography, useTheme, Button, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const { category, price, name, images } = item;
  const showControls = isHovered || isMobile;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box
          component="img"
          alt={item.name}
          src={images?.[0]}
          onClick={() => navigate(`/item/${item.id}`)}
          sx={{
            width: "100%",
            height: { xs: 240, sm: 320, md: 400 },
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: 1,
            display: "block",
          }}
        />
        <Box
          display={showControls ? "block" : "none"}
          position="absolute"
          bottom={{ xs: "4%", sm: "10%" }}
          left="0"
          width="100%"
          px={{ xs: 2, sm: "5%" }}
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
              <Button
              onClick={() => {
                addToCart({ ...item, count, image: images[0] });
              }}
              sx={{
                backgroundColor: shades.primary[300],
                color: "white",
                "&:hover": { backgroundColor: "#000" },
                px: { xs: 1.5, sm: 2.5 },
                py: { xs: 0.5, sm: 1 },
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${(price / 100).toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
