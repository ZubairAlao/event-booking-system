import React from "react";
import { Avatar, Heading, Text, VStack, Stack, Button, Box, FormLabel, FormControl, Input } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import wedddingHall from "../images/decorated-wedding-hall-with-candles.jpg";
import officeWorker from "../images/office-coworkers-celebrating.jpg"
import { AspectRatio } from '@chakra-ui/react'


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
            px={{base: "8", md: "24"}}
            py={16}
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
                        
                        <Text as="p" size="md" textAlign={{base: "justify", md: "left"}}>
                            {text2}
                        </Text>
                    </VStack>
                    <VStack align="start">
                        <Button 
                            as="a"
                            href="#bookevent"
                            backgroundColor="#6b5b95" color= "#fff" display="flex" alignItems="center"
                            _hover={{backgroundColor: "#00a896", color: "#fff"}}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToPopularEvent();  // Call the scrollToPopularEvent  function on click
                            }}
                            >
                                Book Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
                        </Button>

                    </VStack>
                </VStack>

                <VStack flex="2">
                    <Box>
                        <VStack>
                        <Text as="p" fontSize="md">
                            Pick your Event
                        </Text>
                        <Text as="p" fontSize="md">
                            No event Picked
                        </Text>

                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                title="Map of Nigeria"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548123.144646325!2d3.513447251791694!3d9.082634869101681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd141ab8f67df%3A0xe35b8c0f4f2b9b95!2sNigeria!5e0!3m2!1sen!2sng!4v1631199139743!5m2!1sen!2sng"
                            />
                        </AspectRatio>
                        <FormControl spacing={2}>
                            <FormLabel>Estimated Number of Guests</FormLabel>
                            <Input type="number" min={1} max={10} />
                            <Button type="submit" colorScheme="teal" width="full"> 
                                Find Event 
                            </Button>
                        </FormControl>
                        </VStack>
                    </Box>
                </VStack>

                {/* <Avatar 
                    // display={{ base: 'none', md: 'block' }}
                    src={officeWorker}
                    size={{base: "3xl", md:"3xl"}}
                    name="office-coworkers-celebrating" 
                /> */}
            </Stack>
        </FullScreenSection>
    );
}

export default LandingSection;
