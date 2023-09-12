import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Flex, } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'


  const eventFAQs = [
    {
      question: "What is the date and time of the event?",
      answer: "The event is scheduled for time  and date you picked."
    },
    {
      question: "Where will the event take place?",
      answer: "The event will be held at various places on our booking event list, check address of each event."
    },
    {
      question: "Is there an age restriction for attendees?",
      answer: "The event is open to all ages unless otherwise specified. Please check the event details for any age restrictions."
    },
    {
      question: "How can I purchase tickets for the event?",
      answer: "You can purchase tickets on our website [Website URL] or at the venue's box office."
    },
    {
      question: "Are there any discounts available for students or seniors?",
      answer: "Yes, we offer discounts for students and seniors. Please check the ticketing page for pricing details and eligibility."
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, there is parking available at the venue. Additional parking information can be found on our website."
    },
    {
      question: "Can I bring outside food and drinks to the event?",
      answer: "Outside food and drinks may not be allowed at the event. Please check the event's policies for specific details."
    },
    {
      question: "Is there a refund policy for tickets?",
      answer: "Refund policies may vary depending on the event. Please review the ticketing page or contact our customer support for refund information."
    },
    {
      question: "Are cameras and recording devices allowed?",
      answer: "The use of cameras and recording devices may be restricted. Please refer to the event's policies for more information."
    },
    {
      question: "How can I contact the event organizers for further inquiries?",
      answer: "You can reach out to our customer support team at [Email Address] or [Phone Number] for any additional questions or concerns."
    }
  ];

  
const Faqs = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            backgroundColor="#F5F5F5"
            spacing={8}
            p={8}
        >
            <Heading as="h1" id="#faq" color="#000"
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
                Frequently Asked Questions
            </Heading>

            <Flex justify="center"> {/* Center the accordion */}
              <Accordion allowMultiple width="100%" maxWidth="1200px"> {/* Set a max width */}
                {eventFAQs.map((faq, index) => (
                  <AccordionItem key={index}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontSize="xl" pr={{lg: "60"}}>
                          {faq.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Flex>

            
        </FullScreenSection>
    )
}

export default Faqs;