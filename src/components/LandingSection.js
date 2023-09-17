import React from "react";
import { Heading, Text, VStack, Stack, Button, Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import wedddingHall from "../images/decorated-wedding-hall-with-candles.jpg";
import GuestInput from "./GuestInput";


const text1 = "Book Your Next Event!";
const text2 = "Looking for exicting place visit? Your are in the right place. Explore a world of possibilities and make the unforgettable memories with us.";

const LandingSection = () => {

    const scrollToPopularEvent= () => {
        const PopularEvent = document.getElementById('popular-event');  // Get the "popularevent" section element
        if (PopularEvent) {
            PopularEvent.scrollIntoView({ behavior: 'smooth' });  // Scroll to the "popularevent" section with smooth animation
        }
    };

    return (
        <FullScreenSection
            isDarkBackground
            justifyContent="center"
            alignItems="center"
            bgGradient="linear(to-r, #0d1b2a, transparent)"
            minWidth="100%"
            position="relative"
            py={16}
            p={8}
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                zIndex="-1"
                style={{ backgroundImage:`url(${wedddingHall})` }}
                backgroundImage="url('{wedddingHall}')"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
            ></Box>
            <Stack 
                maxW="1024px" 
                spacing={{base: "8", md: "8"}} 
                justifyContent={{base: "center", md: "space-between" }} 
                alignItems="center" 
                direction={{ base: "column", md: "row" }}
            >

                <VStack spacing={8} textAlign="left" align={{base: "center", md: "start"}} flex="3" >
                    <VStack align={{base: "center", md: "start"}}>
                        <Heading as="h1" size={{base: "xl", md: "3xl"}} noOfLines={3}>
                                {text1}
                        </Heading>
                        
                        <Text as="p" size="md" textAlign={{base: "justify", md: "left"}} textShadow="md">
                            {text2}
                        </Text>
                    </VStack>
                    <VStack align="start">
                    <Link to="#popular-event" onClick={scrollToPopularEvent}>
                        <Button
                            backgroundColor="#6b5b95"
                            color="#fff"
                            display="flex"
                            alignItems="center"
                            _hover={{ backgroundColor: "#00a896", color: "#fff" }}
                        >
                            Book Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
                        </Button>
                    </Link>

                    </VStack>
                </VStack>
                    <GuestInput />
            </Stack>
        </FullScreenSection>
    );
}

export default LandingSection;
