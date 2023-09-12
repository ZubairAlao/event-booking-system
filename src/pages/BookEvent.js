import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Card from "../components/Card";

const events = [
    {
        imageSrc: () => require("../images/event1.jpg"),
        title: "Enchanted Garden Gala",
        partyNum: 6,
        amount: "99.99",
        extras: "Includes catering and entertainment",
        bookNow: () => "#",
    },
    {
        imageSrc: () => require("../images/event2.jpg"),
        title: "Sapphire Soiree: A Night of Elegance",
        partyNum: 8,
        amount: "149.99",
        extras: "Includes venue and photography",
        bookNow: "#",
    },
    {
        imageSrc: () => require("../images/event3.jpg"),
        title: "Festival of Lights: A Cultural Celebration",
        partyNum: 10,
        amount: "199.99",
        extras: "All-inclusive package",
        bookNow: "#",
    },
    {
        imageSrc: () => require("../images/event4.jpg"),
        title: "Summer Sunset Beach Party",
        partyNum: 6,
        amount: "99.99",
        extras: "Includes catering and entertainment",
        bookNow: "#",
    },
    {
        imageSrc: () => require("../images/event5.jpg"),
        title: "Tech Innovators Symposium",
        partyNum: 8,
        amount: "149.99",
        extras: "Includes venue and photography",
        bookNow: "#",
    },
    {
        imageSrc: () => require("../images/event6.jpg"),
        title: "Masquerade Ball: Unmask the Night",
        partyNum: 10,
        amount: "199.99",
        extras: "All-inclusive package",
        bookNow: "#",
    },
];


const BookEventSection = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            backgroundColor="#c7d55e0"
            spacing={8}
            p={8}
            
        >
            <Heading as="h1" id="book-event" color="#000"
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
                Book Event
            </Heading>

            <VStack>
                <Text fontSize="xl" fontWeight="semibold" textAlign="center">
                    Start Your Event Journey Here
                </Text>
                <Text fontSize="lg" color="gray.600" textAlign="center">
                    Popular Events
                </Text>
            </VStack>

            <Box
                display="grid"
                gridTemplateColumns={{base: "1fr", lg: "repeat(3,minmax(0,1fr))"}}
                gridGap={8}
                mt={8}
            >
                {events.map((event, index) => (
                    <Card 
                        key={index}
                        imageSrc={event.imageSrc()}
                        title={event.title}
                        partyNum={event.partyNum}
                        amount={event.amount}
                        extras={event.extras}
                        bookNow={event.bookNow}
                    />
                ))}
            </Box>
        </FullScreenSection>
    )
}

export default BookEventSection;