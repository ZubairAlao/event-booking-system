import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import Card from "./Card";
import { useEvent } from "../components/context/EventContext";
import { Link} from 'react-router-dom';

const PopularEventSection = () => {

    const { events } = useEvent();
    // Sort the events by amount in descending order
    const sortedEvents = events.slice().sort((a, b) => b.amount - a.amount);

    // Take the top three highest-paid events
    const topThreeEvents = sortedEvents.slice(0, 3);

    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            backgroundColor="#c7d55e0"
            spacing={8}
            p={8}
            maxW="1024px"
        >
            <Heading as="h1" id="popular-event" color="#000"
                position="relative"
                _before={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: "0",
                    left: "0",
                    backgroundColor: "#9b59b6",
                }}
            >
                Popular Event
            </Heading>

            <VStack>
                <Text fontSize="xl" fontWeight="semibold" textAlign="center">
                    Start Your Event Journey Here With Popular Events
                </Text>
            </VStack>

            <Box
                display="grid"
                gridTemplateColumns={{base: "1fr", md: "repeat(3,minmax(0,1fr))"}}
                gridGap={8}
                mt={8}
            >
                {topThreeEvents.map((event, index) => (
                    <Card 
                        key={index}
                        imageSrc={event.imageSrc}
                        title={event.title}
                        guestCount={event.guestCount}
                        amount={event.amount}
                        extras={event.extras}
                        bookNow={event.bookNow}
                    />
                ))}
            </Box>
            <Center>
                {/* <Button colorScheme="teal">Find More Event</Button> */}
                <Link to="/book-event">
                    <Button
                    colorScheme="teal"
                    size="md"
                    borderRadius="lg"
                    _hover={{ bgColor: "teal.600" }}
                    >
                    Find More Event
                    </Button>
                </Link>
            </Center>
        </FullScreenSection>
    )
}

export default PopularEventSection;