import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to CodeMaster</Heading>
        <Text fontSize="xl" textAlign="center">Your ultimate platform to learn coding online</Text>
        <Flex justifyContent="center" alignItems="center" wrap="wrap" spacing={8}>
          <Box textAlign="center" p={5} m={2} borderWidth="1px" borderRadius="lg">
            <FaCode size="3em" />
            <Text mt={4} fontSize="lg">Learn to Code</Text>
          </Box>
          <Box textAlign="center" p={5} m={2} borderWidth="1px" borderRadius="lg">
            <FaLaptopCode size="3em" />
            <Text mt={4} fontSize="lg">Practice Projects</Text>
          </Box>
          <Box textAlign="center" p={5} m={2} borderWidth="1px" borderRadius="lg">
            <FaChalkboardTeacher size="3em" />
            <Text mt={4} fontSize="lg">Expert Mentors</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;