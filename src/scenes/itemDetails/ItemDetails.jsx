import {
  Box,
  Button,
  IconButton,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
  Chip,
  Grid,
  Rating,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Find the item by ID
    const foundItem = products.find((product) => product.id === parseInt(itemId));
    if (foundItem) {
      setItem(foundItem);
      setSelectedImage(foundItem.images?.[0] ?? null);
    }

    // Get related items (different from current item)
    const relatedItems = products
      .filter((product) => product.id !== parseInt(itemId))
      .slice(0, 4);
    setItems(relatedItems);
  }, [itemId]);

  // reset selected image whenever item changes
  useEffect(() => {
    setSelectedImage(item?.images?.[0] ?? null);
  }, [item]);

  const formatPrice = (priceCents) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
      (priceCents || 0) / 100
    );

  return (
    <Box width="85%" m="48px auto">
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <MuiLink component={Link} to="/" underline="hover" color="inherit">
          Home
        </MuiLink>
        <MuiLink component={Link} to="/" underline="hover" color="inherit">
          Shop
        </MuiLink>
        <Typography color="text.primary">{item?.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: `1px solid ${shades.neutral[300]}`,
              borderRadius: 2,
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              background: "#fff",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <img
                alt={item?.name}
                src={selectedImage ?? item?.images?.[0]}
                style={{ maxWidth: "100%", maxHeight: 420, objectFit: "contain" }}
              />
            </Box>

            <Box display="flex" gap={1} justifyContent="center" flexWrap="wrap">
              {(item?.images || []).map((src, idx) => {
                const isSelected = src === selectedImage;
                return (
                  <Box
                    key={idx}
                    onClick={() => setSelectedImage(src)}
                    sx={{
                      width: 72,
                      height: 72,
                      border: isSelected ? `2px solid ${shades.primary[500]}` : `1px solid ${shades.neutral[200]}`,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      background: "#fafafa",
                      cursor: "pointer",
                      boxShadow: isSelected ? "0 0 0 2px rgba(25,118,210,0.08)" : "none",
                    }}
                  >
                    <img src={src} alt={`${item?.name}-${idx}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h4" fontWeight={700}>
              {item?.name}
            </Typography>

            <Box display="flex" alignItems="center" gap={2}>
              <Typography variant="h5" color="primary" fontWeight={700}>
                {formatPrice(item?.price)}
              </Typography>
              <Rating value={item?.rating || 4} precision={0.5} readOnly size="small" />
              <Chip label={item?.category} size="small" />
            </Box>

            <Typography color="text.secondary">{item?.shortDescription}</Typography>

            <Box display="flex" alignItems="center" gap={2}>
              <Box
                display="flex"
                alignItems="center"
                border={`1px solid ${shades.neutral[300]}`}
                p="2px 6px"
                borderRadius={1}
              >
                <IconButton size="small" onClick={() => setCount(Math.max(count - 1, 1))}>
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ px: 1 }}>{count}</Typography>
                <IconButton size="small" onClick={() => setCount(count + 1)}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: 0, minWidth: 160, px: 3 }}
                onClick={() =>
                  addToCart({
                    ...item,
                    count,
                    // include a single image property for the cart UI (use currently selected big image)
                    image: selectedImage ?? item?.images?.[0] ?? null,
                  })
                }
              >
                Add to cart
              </Button>

              
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item?.longDescription}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* INFORMATION */}
      <Box m="28px 0">
        <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>

      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <Box sx={{ width: "100%" }}>{item?.longDescription || item?.shortDescription}</Box>
        )}
        {value === "reviews" && (
          <Box sx={{ width: "100%" }}>
            <Typography>No reviews yet. This is a demo version.</Typography>
          </Box>
        )}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h5" fontWeight="bold">
          Related Products
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {items.map((related, i) => (
            <Grid key={`${related.name}-${i}`} item xs={12} sm={12} md={6} lg={3}>
              <Item item={related} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ItemDetails;