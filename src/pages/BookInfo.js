import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEvent } from '../components/context/EventContext';
import FullScreenSection from '../components/FullScreenSection';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BookInfo() {
  const { events } = useEvent();
  const { info } = useParams();

  // Convert info to a number
  const eventId = parseInt(info);

  // Find the event with the matching "id" in the events array
  const event = events.find((event) => event.id === eventId);

  return (
    <FullScreenSection
      justifyContent="start"
      // alignItems="center"
      backgroundColor="#c7d55e0"
      spacing={8}
      p={8}
      maxW="1024px"
    >
      <Heading as="h1" id="search-event" color="#000" position="relative">
        Book Information
        <span
          style={{
            content: '""',
            position: "absolute",
            width: "100%",
            height: "2px",
            bottom: "0",
            left: "0",
            backgroundColor: "#9b59b6",
          }}
        ></span>
      </Heading>
      <VStack
        justifyItems="start"
        mb={6}
      >
        <Link to="/book-event">
          <FontAwesomeIcon icon={faArrowLeft} mr={4} /> Back to Book Event
        </Link>
      </VStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <Box w={{ base: "100%", md: "45%" }}> 
          <Image src={event.imageSrc} alt={event.title} maxW="100%" />
        </Box>

        <VStack spacing={4} alignItems="start" w={{ base: "100%", md: "50%" }}> 
          <Heading as="h2" fontSize="2xl" color="#000">
            {event.title}
          </Heading>
          <Text fontSize="lg" color="#333">
            Date: {event.date}
          </Text>
          <Text fontSize="lg" color="#333">
            Venue: {event.venue}
          </Text>
          <Text fontSize="lg" color="#333">
            Description: {event.eventDescription}
          </Text>
          <Text fontSize="lg" color="#333">
            Duration: {event.eventDuration}
          </Text>
          <Text fontSize="lg" color="#333">
            Availability: {event.availability}
          </Text>
          <Text fontSize="lg" color="#333">
            Payment Options: {event.paymentOptions.join(', ')}
          </Text>
          <Text fontSize="lg" color="#333">
            Price: ${event.amount}
          </Text>
          <Text fontSize="lg" color="#333">
            Extra Services: {event.extras}
          </Text>
          <Text fontSize="lg" color="#333">
            Extra Service Price: ${event.extraAmount}
          </Text>          
        </VStack>
      </Stack>
      <Center>
          <Button colorScheme="teal" size="lg">
                Confirm Now
              </Button>
      </Center>
    </FullScreenSection>
  );
}

export default BookInfo;
