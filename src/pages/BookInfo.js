import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEvent } from '../components/context/EventContext';
import FullScreenSection from '../components/FullScreenSection';
import Card from '../components/Card';
import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace, } from "@fortawesome/free-solid-svg-icons";

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
      alignItems="center"
      backgroundColor="#c7d55e0"
      spacing={8}
      p={8}
      maxW="1024px"
    >
      <HStack>
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
          
        <Link to="/book-event">
        <FontAwesomeIcon icon={faBackspace} /> Back to Book Event
        </Link>
      </HStack>
      <VStack spacing={4} align="start" mt={4}>
        <Box w="100%">
          <Image src={event.imageSrc} alt={event.title} maxW="100%" />
        </Box>
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
        <Button colorScheme="teal" size="lg">
          Confirm Now
        </Button>
      </VStack>
    </FullScreenSection>
  );
}

export default BookInfo;
