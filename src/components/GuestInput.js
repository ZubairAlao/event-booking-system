import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Text,
  VStack,
  Button,
  FormLabel,
  FormControl,
  Input,
  Card,
  CardBody,
  CardFooter,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEvent } from '../components/context/EventContext'; // Import useEvent

function GuestInput() {
  // State variables
  const [guestCount, setGuestCount] = useState("");
  const [error, setError] = useState("");
  const [eventFound, setEventFound] = useState(""); // Initialize with an empty string
  const navigate = useNavigate();
  const { events } = useEvent(); // Get the events from useEvent

  // Handle guest count input change
  const handleInputChange = (e) => {
    const inputGuestCount = e.target.value;
    setGuestCount(inputGuestCount);
    setError(""); // Clear any previous error message when the user starts typing.

    if (!inputGuestCount || isNaN(inputGuestCount) || parseInt(inputGuestCount, 10) <= 0) {
      setError("Please enter a valid number greater than zero.");
      setEventFound(""); // Reset eventFound if there's an error
    } else {
      const guests = parseInt(inputGuestCount, 10);
      // Filter events based on the number of guests
      const filteredEvents = events.filter(
        (event) => event.guestCount <= guests // Compare guestCount with entered guests
      );

      if (filteredEvents.length === 0) {
        setEventFound("No matching events found");
      } else {
        setEventFound(`${filteredEvents.length} matching events found`);
      }
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!guestCount || isNaN(guestCount) || parseInt(guestCount, 10) <= 0) {
      setError("Please enter a valid number greater than zero.");
      setEventFound(""); // Reset eventFound if there's an error
    } else {
      const guests = parseInt(guestCount, 10);
      navigate('/eventlist/' + guests);
    }
  };

  return (
    <VStack flex="2" align="end">
      <Card maxW="md" borderWidth="1px" borderRadius="lg" boxShadow="md">
        <CardBody>
          <VStack spacing={2} align="start">
            <Text as="p" fontSize="xl">
              Pick your Event
            </Text>
                  <form onSubmit={handleFormSubmit}>
                    <FormControl spacing={4}>
                      <FormLabel htmlFor="guessnumber">Enter The Number of Guests</FormLabel>
                      <InputGroup>
                        <Input
                          id="guessnumber"
                          type="number"
                          min={1}
                          max={500}
                          value={guestCount}
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                        <InputRightElement width="4.5rem">
                          <Button type="submit" color="teal" h="1.75rem" size="sm">
                            <FontAwesomeIcon icon={faSearch} /> 
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    {error && <Text color="red" marginTop={1}>{error}</Text>}
                  </form>
          </VStack>
        </CardBody>
        <CardFooter>
          {eventFound && <Text color="green">{eventFound}</Text>}
        </CardFooter>
      </Card>
    </VStack>
  );
}

export default GuestInput;
