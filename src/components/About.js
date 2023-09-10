import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Text, VStack, Avatar, Box, HStack } from "@chakra-ui/react";
import officeWorker from "../images/office-coworkers-celebrating.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCogs,
  faShieldAlt,
  faClock,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

const whyChooseUs = [
  {
    title: "Ease of Use",
    description:
      "Our platform's user-friendly interface ensures booking is simple and hassle-free.",
    getIcon: faUser,
  },
  {
    title: "Variety of Options",
    description:
      "We provide a wide selection of booking categories to cater to your diverse needs.",
    getIcon: faCogs,
  },
  {
    title: "Security",
    description:
      "Rest easy knowing that your valuable data is in safe and secure hands with us.",
    getIcon: faShieldAlt,
  },
  {
    title: "24/7 Accessibility",
    description:
      "Book your appointments and reservations at any time, from anywhere.",
    getIcon: faClock,
  },
  {
    title: "Dedicated Support",
    description:
      "Our dedicated support team is always ready to assist you when you require help.",
    getIcon: faHandsHelping,
  },
];

const greeting =
  "Welcome to Event Naija Your Trusted Booking Partner!";
const paragraph1 = `At Event Naija, we are passionate about simplifying the booking process for you. 
                    Our mission is to provide a seamless and convenient way for you to book your appointments, reservations, and services with ease.`;
const paragraph2 = `Founded in 2008, Event Naija has been on a journey to revolutionize how people schedule and manage their bookings. We understand that your time is valuable, and that's why we've dedicated ourselves to creating a user-friendly platform that saves you time and hassle.`;
const paragraph3 = `We are committed to delivering the highest level of customer satisfaction. Our platform is designed to be reliable, secure, and user-centric. Whether you're booking a spa appointment, reserving a table at your favorite restaurant, or scheduling a business meeting, we've got you covered.`;

const About = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor="#fff"
      spacing={16}
      px={{ base: "8", md: "24" }}
      py={16}
    >
      <Heading
        position="relative"
        as="h1"
        id="about"
        _before={{
          content: '""',
          position: "absolute",
          width: "100%",
          height: "2px",
          bottom: "0",
          left: "0",
          backgroundColor: "#6b5b95",
        }}
      >
        About Us
      </Heading>

      <VStack
        spacing={{ base: 8, md: 12 }}
        textAlign={{ base: "center", md: "left" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <VStack>
          <Heading as="h3" size="lg" flex="1" textAlign={{ base: "left", md: "right" }}>
            {greeting}
          </Heading>

          <VStack>
            <Text as="p" fontSize="md" flex="2" textAlign={{ base: "justify", md: "left" }}>
              {paragraph1}
            </Text>
          </VStack>

          <HStack spacing={8} flexDirection={{ base: "column", md: "row" }}>
            <VStack flex="1">
              <Heading as="h3" size="lg" flex="1" textAlign={{ base: "left", md: "right" }}>
                Our Story
              </Heading>
              <Text as="p" fontSize="md" flex="2" textAlign={{ base: "justify", md: "left" }}>
                {paragraph2}
              </Text>

              <Heading as="h3" size="lg" flex="1" textAlign={{ base: "left", md: "right" }}>
                Our Commitment
              </Heading>
              <Text as="p" fontSize="md" flex="2" textAlign={{ base: "justify", md: "left" }}>
                {paragraph3}
              </Text>
            </VStack>

            <VStack flex="1">
              <Avatar
                src={officeWorker}
                size={{ base: "3xl", md: "3xl" }}
                name="office-coworkers-celebrating"
              />
            </VStack>
          </HStack>
        </VStack>

        <VStack spacing={8}>
          <Heading as="h3" size="lg" mt={2}>
            Why Choose Us
          </Heading>

          <Box display="flex" flexWrap="wrap" gridGap={8}>
            {whyChooseUs.map((reason, index) => (
              <Box
                key={index}
                borderWidth="3px"
                borderColor="#6b5b95"
                p={4}
                textAlign="left"
                background="#f7f7f7"
                flex="1"
                borderRadius="10px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <FontAwesomeIcon icon={reason.getIcon} color="#6b5b95" size="3x" />
                <HStack>
                  <Heading as="h3" size="sm" mt={2}>
                    {reason.title}
                  </Heading>
                </HStack>

                <Text color="#64748b" fontSize="lg" mt={2}>
                  {reason.description}
                </Text>
              </Box>
            ))}
          </Box>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default About;
