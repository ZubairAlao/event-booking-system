import React from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Link,
  Button,
  Center,
} from "@chakra-ui/react";

const Card = ({ imageSrc, title, partyNum, amount, extras, bookNow }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageSrc} alt={title} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Party Size of {partyNum} People
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {title}
        </Box>

        <Box>
          ${amount}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
        
        <Text fontSize="sm" color="gray.600">
          Extras: {extras}
        </Text>

        <Center mt="2"> {/* Center the "Book Now" button */}
          <Link href={bookNow} target="_blank" rel="noopener noreferrer">
            <Button
              colorScheme="teal"
              size="md"
              borderRadius="lg"
              _hover={{ bgColor: "teal.600" }}
            >
              Book Now
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default Card;
