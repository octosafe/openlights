import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

const homeImages = [
  {
    img: "/images/beacon/openlights_beacon_1.jpeg",
    title: "Beacon",
  },
  {
    img: "/images/beacon/openlights_beacon_2.jpeg",
    title: "Beacon",
  },
  {
    img: "/images/beacon/openlights_beacon_3.jpeg",
    title: "Beacon",
  },
  {
    img: "/images/peacecube/openlights_cube_1.jpeg",
    title: "Peace Cube",
  },
  {
    img: "/images/mirrorcube/openlights_mirrorcube_1.jpeg",
    title: "Mirror Cube",
  },
  {
    img: "/images/silhouette/openlights_silhouette_1.jpeg",
    title: "Silhouette",
  },
  {
    img: "/images/silhouette/openlights_silhouette_2.jpeg",
    title: "Silhouette",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
];

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Typography fontSize={16}>
        Welcome to the OpenLights
        <br />
        You are viewing a page under construction
        <br />
        It is entirely possible that what you see here might change shortly
      </Typography>
      <Box height="40px"></Box>
      <Typography>
        "In the long history of humankind (and animal kind, too) those who
        learned to collaborate and improvise most effectively have prevailed."
      </Typography>
      <Typography fontStyle={"italic"}>- Charles Darwin</Typography>
      <ImageList sx={{ width: 1000, height: 450 }} cols={3} rowHeight={350}>
        {homeImages.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
              srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ height: "250px" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
