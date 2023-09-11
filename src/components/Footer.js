import React from "react";
import {
  Box,
  Heading,
  HStack,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link} from 'react-router-dom';

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:Alaozubair@example.com", // Updated the email address
  },
  {
    icon: faGithub,
    url: "https://github.com/ZubairAlao",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/zubairAlao",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/Zubair_Coder",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.me/08130030894",
  },
  {
    icon: faPhone,
    url: "tel:08130030894",
  },
];

const Footer = () => {
  return (
    <Box backgroundColor="#2c3e50">
      <footer>
        <VStack
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          py={6} // Adjusted padding for better spacing
        >
          <Heading as="h2" fontSize="2xl" fontWeight="bold">
            EventNaija
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "16", md: "48" }}// Adjusted spacing between sections
            py={4} // Adjusted padding for better spacing
          >
            <VStack>
              <Heading as="h3" fontSize="lg" fontWeight="bold">
                Planning an Event? 
              </Heading>
              <Link to="/book-event" fontSize="sm">
                Book a Venue
              </Link>
              <Link to="/gallery" fontSize="sm">
                Gallery
              </Link>
              <Link to="/about" fontSize="sm">
                How It Works
              </Link>
            </VStack>

            <VStack>
              <Heading as="h3" fontSize="lg" fontWeight="bold">
                Discover
              </Heading>
              <Link to="/about" fontSize="sm" >
                About Us
              </Link>
              <Link to="/contact-us" fontSize="sm" >
                Contact Us
              </Link>
              <Link to="/faqs" fontSize="sm" >
                Venue FAQs
              </Link>
            </VStack>

            <HStack spacing={4} justifyContent="center">
              {socials.map(({ icon, url }) => (
                <Link
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                  />
                </Link>
              ))}
            </HStack>
          </Stack>
          <Text fontSize="sm" color="gray.400">
            &copy; 2023 EventNaija | View our{" "}
            <Link
              color="blue.500"
              to="/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              color="blue.500"
              to="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
          </Text>
        </VStack>
      </footer>
    </Box>
  );
};

export default Footer;
