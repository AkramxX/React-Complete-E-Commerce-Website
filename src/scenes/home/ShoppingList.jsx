import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setItems, useCartStore } from "../../state";
import { products } from "../../data/products";

const ShoppingList = () => {
  // using Zustand store
  const [value, setValue] = useState("all");
  const items = useCartStore((state) => state.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Load static products data
    setItems(products);
  }, []);

  const accessoriesItems = items.filter((item) => item.category === "accessories");
  const bagsItems = items.filter((item) => item.category === "bags");
  const electronicsItems = items.filter((item) => item.category === "electronics");
  const clothingItems = items.filter((item) => item.category === "clothing");
  const otherItems = items.filter(
    (item) => !["accessories", "bags", "electronics", "clothing"].includes(item.category)
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Add items to your cart — click the bag icon in the navbar to view your cart.
        </Typography>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="ACCESSORIES" value="accessories" />
        <Tab label="BAGS" value="bags" />
        <Tab label="ELECTRONICS" value="electronics" />
        <Tab label="CLOTHING" value="clothing" />
        <Tab label="OTHER" value="other" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "accessories" &&
          accessoriesItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bags" &&
          bagsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "electronics" &&
          electronicsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "clothing" &&
          clothingItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "other" &&
          otherItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
