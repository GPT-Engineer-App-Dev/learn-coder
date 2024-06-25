import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Heading, Text, Button, VStack } from "@chakra-ui/react";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    // Fetch course details from an API or a static file
    fetch(`/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course details:", error));
  }, [id]);

  const handleEnrollment = () => {
    // Update enrollment status (this could be an API call)
    setEnrolled(true);
  };

  if (!course) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading>{course.title}</Heading>
        <Text>{course.description}</Text>
        <Button colorScheme="teal" onClick={handleEnrollment} disabled={enrolled}>
          {enrolled ? "Enrolled" : "Enroll"}
        </Button>
      </VStack>
    </Container>
  );
};

export default CourseDetails;