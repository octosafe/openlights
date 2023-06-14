import { Box, ImageList, ImageListItem } from "@mui/material";
import { Heading } from "../components/Heading";
import { QuoteBox } from "../components/QuoteBox";
import { shuffle } from "../util";

const homeImages = shuffle([
  {
    img: "/images/beacon/openlights_beacon_1.jpeg",
    title: "Beacon",
    link: "/designs/beacon",
  },
  {
    img: "/images/beacon/openlights_beacon_2.jpeg",
    title: "Beacon",
    link: "/designs/beacon",
  },
  {
    img: "/images/beacon/openlights_beacon_3.jpeg",
    title: "Beacon",
    link: "/designs/beacon",
  },
  {
    img: "/images/peacecube/openlights_peacecube_1.jpeg",
    title: "Peace Cube",
    link: "/designs/peacecube",
  },
  {
    img: "/images/mirrorcube/openlights_mirrorcube_1.jpeg",
    title: "Mirror Cube",
    link: "/designs/mirrorcube",
  },
  {
    img: "/images/silhouette/openlights_silhouette_1.jpeg",
    title: "Silhouette",
    link: "/designs/silhouette",
  },
  {
    img: "/images/silhouette/openlights_silhouette_2.jpeg",
    title: "Silhouette",
    link: "/designs/silhouette",
  },
]);

export const Home = () => {
  return (
    <>
      <QuoteBox
        quote="In the long history of humankind (and animal kind, too) those who learned to collaborate and improvise most effectively have prevailed."
        author="Charles Darwin"
      />
      <Heading
        title="Welcome"
        subtitle="This is the OpenLights Art Project. We are still setting up, it is entirely possible that what you see here might change shortly."
      />
      <Box display="flex" width="100%" justifyContent={"center"}>
        <ImageList cols={3} rowHeight={350}>
          {homeImages.map((item) => (
            <ImageListItem
              key={item.img}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                justifyItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
                srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ height: "250px", content: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};
