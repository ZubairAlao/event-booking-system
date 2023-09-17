import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  Flex,
  VStack,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import Card from "../components/Card";
import FullScreenSection from "../components/FullScreenSection";
import { useEvent } from "../components/context/EventContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BookEventSection = () => {
    const { events } = useEvent();
    const [guestCount, setGuestCount] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);

    // Initialize filteredEvents with all events when the component mounts
    useEffect(() => {
        setFilteredEvents(events);
    }, [events]);

    const handleInputChange = (e) => {
        const inputGuestCount = e.target.value.trim(); // Remove leading and trailing spaces
        setGuestCount(inputGuestCount !== "" ? parseInt(inputGuestCount) : ""); 
        
      };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!guestCount || isNaN(guestCount) || guestCount <= 0) {
        setFilteredEvents([]); // Reset filteredEvents
        } else {
        // Filter events based on the number of guests
        const filteredEvents = events.filter(
            (event) => event.guestCount <= guestCount
        );
        setFilteredEvents(filteredEvents);
        }
    };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor="#c7d55e0"
      spacing={8}
      p={8}
      maxW="1024px"
    >
      <Heading as="h1" id="book-event" color="#000" position="relative">
        Book Event
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

      <VStack>

      <Flex as="form" onSubmit={handleFormSubmit} alignItems="center" justifyContent="center">
        <FormControl spacing={4}>
          <FormLabel htmlFor="guestnumber">Enter The Number of Guests</FormLabel>
          <InputGroup>
            <Input
              id="guestnumber"
              type="number"
              min={1}
              max={500}
              value={guestCount}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <InputRightElement width="4.5rem">
              <Button type="submit" color="teal" h="1.75rem" size="sm">
                <FontAwesomeIcon icon={faSearch} /> 
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>

      </VStack>

      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "repeat(3,minmax(0,1fr))" }}
        gridGap={8}
        mt={8}
      >
        {filteredEvents.map((event) => (
            <Card
              key={event.id}
              imageSrc={event.imageSrc}
              title={event.title}
              guestCount={event.guestCount}
              amount={event.amount}
              extras={event.extras}
              bookNow={event.bookNow}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default BookEventSection;
