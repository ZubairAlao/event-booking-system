import { Heading, HStack, VStack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, codeSrc, demo }) => {
  return (
    <VStack
      color="#fff"
      border="2px solid #9b59b6"
      background="#0d1432"
      cursor="pointer"
      borderRadius="xl"
    >
      <Image borderRadius="xl" src={imageSrc} alt={title} />
      <VStack direction="column" spacing={4} p={4} >
        <HStack direction="row" justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>

        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>

        <HStack spacing={2} alignItems="center" justifyContent="center">
            <Button onClick={() => window.open(demo(), '_blank')} 
                backgroundColor="#f39c12" display="flex" alignItems="center"
                _hover={{backgroundColor: "#9b59b6", color: "#fff"}}
            >
                Demo
            </Button>
            <Button onClick={() => window.open(codeSrc(), '_blank')}
                backgroundColor="#f39c12" display="flex" alignItems="center"
                _hover={{backgroundColor: "#9b59b6", color: "#fff"}}
            >
                View Code
            </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
