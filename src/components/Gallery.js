import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Image } from "@chakra-ui/react";
import axios from "axios";



const ACCESS_KEY = "tMMgtrhW8kNuFn4HQB8qBqF8ZLGyf4xrIN6VWcziWlg"; // Replace with your Unsplash public access key

async function getUnsplashImages() {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: ACCESS_KEY,
        query: "event",
        per_page: 12, // Number of event-related images to fetch
      },
    });

    const unsplashImages = response.data.results.map((photo) => ({
      image: photo.urls.thumb,
      alt: photo.alt_description,
    }));

    return unsplashImages;
  } catch (error) {
    console.error("Error fetching Unsplash event images:", error);
    return [];
  }
}

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch Unsplash event images when the component mounts
    getUnsplashImages().then((unsplashImages) => {
      setImages(unsplashImages);
    });
  }, []);

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor="#F5F5F5"
      spacing={8}
      px={{ base: "8", md: "24" }}
      py={16}
    >
      <Heading
        position="relative"
        as="h1"
        id="gallery"
        _before={{
          content: '""',
          position: "absolute",
          width: "100%",
          height: "2px",
          bottom: "0",
          left: "0",
          backgroundColor: "#9b59b6",
        }}
      >
        Gallery
      </Heading>

      <Box
        display="grid" // Change display to grid
        gridTemplateColumns={{base: "1fr", md: "repeat(4,minmax(0,1fr))"}}
        gridGap={8}
      >
        {images.map((image, index) => (
          <Box key={index}>
            <Image src={image.image} alt={image.alt} boxSize="200px" loading="lazy" /> 
          </Box>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Gallery;
