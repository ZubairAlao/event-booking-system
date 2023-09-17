import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useEvent } from '../components/context/EventContext';
import FullScreenSection from '../components/FullScreenSection';
import Card from '../components/Card';
import {
  Box,
  Heading,
  Text,
  Button,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function EventList() {
  const { events } = useEvent();
  const { guestCount } = useParams();

  // Convert guestCount to a number
  const guestCountAsNumber = parseInt(guestCount);

  const [searchGuests, setSearchGuests] = useState(guestCountAsNumber); 
 

  // Filter events based on the number of guests
  const filteredEvents = events.filter(
  (event) => event.guestCount <= searchGuests);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  
  console.log(filteredEvents);

  return (
    <FullScreenSection
      justifyContent="start"
      alignItems="center"
      backgroundColor="#c7d55e0"
      spacing={8}
      p={8}
      maxW="1024px"
    >
      <Heading as="h1" id="search-event" color="#000" position="relative">
        Search Event
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

      <form onSubmit={handleFormSubmit}>
        <FormControl spacing={4}>
          <FormLabel htmlFor="guestnumber">Enter The Number of Guests</FormLabel>
          <InputGroup>
            <Input
              id="guestnumber"
              type="number"
              min={1}
              max={500}
              value={searchGuests}
              autoComplete="off"
              onChange={(e) => setSearchGuests(e.target.value)} // Update the guestCount state
            />
            <InputRightElement width="4.5rem">
              <Button type="submit" color="teal" h="1.75rem" size="sm">
                <FontAwesomeIcon icon={faSearch} /> 
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

      </form>

      {filteredEvents.length === 0 ? (
        <Text fontSize="xl" fontWeight="semibold" textAlign="center">
          No events available for {searchGuests} guests.
        </Text>
      ) : (
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
      )}
    </FullScreenSection>
  );
}

export default EventList;
