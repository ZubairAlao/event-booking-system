import React from "react";
import { Avatar, Heading, Text, VStack, Stack, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import avatarImage from "../images/lanre4b.png";


const bio1 = "I'm a Front-End Developer";
const bio2 = "I'm a Front-End Web Developer with experience in HTML, CSS and JavaScript. I specialize in building and designing interactive and dynamic web pages that provide an engaging user experience.";

const LandingSection = () => {

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');  // Get the "about" section element
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });  // Scroll to the "about" section with smooth animation
        }
    };

    return (
        <FullScreenSection
            isDarkBackground
            justifyContent="center"
            alignItems="center"
            backgroundColor="#141b3d"
            px={{base: "8", md: "24"}}
            pt={110}
            pb={24}
        >
            <Stack spacing={{base: "8", md: "8"}} justifyContent={{base: "center", md: "space-between" }} alignItems="center" direction={{ base: "column", md: "row" }}>

                {/* <Avatar 
                    display={{ base: 'block', md: 'none' }}
                    src={avatarImage}
                    size="2xl" 
                    name="Alao Zubair Lanre" 
                /> */}

                <VStack spacing={8} textAlign="left" align={{base: "center", md: "start"}}  >
                    <VStack align={{base: "center", md: "start"}}>
                        <Heading as="h1" size={{base: "xl", md: "3xl"}} noOfLines={3}>
                                {bio1}
                        </Heading>
                        
                        <Text as="p" size="md" textAlign={{base: "justify", md: "left"}}>
                            {bio2}
                        </Text>
                    </VStack>
                    <VStack align="start">
                        <Button 
                            as="a"
                            href="#about"
                            backgroundColor="#f39c12" display="flex" alignItems="center"
                            _hover={{backgroundColor: "#9b59b6", color: "#fff"}}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToAbout();  // Call the scrollToAbout function on click
                            }}
                            >
                                About me <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
                        </Button>

                    </VStack>
                </VStack>

                <Avatar 
                    // display={{ base: 'none', md: 'block' }}
                    src={avatarImage}
                    size={{base: "3xl", md:"3xl"}}
                    name="Alao Zubair Lanre" 
                />
            </Stack>
        </FullScreenSection>
    );
}

export default LandingSection;
