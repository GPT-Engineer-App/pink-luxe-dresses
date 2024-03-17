import React from "react";
import { Box, Heading, Text, Image, Grid, Button, Container, Stack, Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const dresses = [
  {
    id: 1,
    name: "Elegant Pink Gown",
    price: "$499.99",
    image: "https://images.unsplash.com/photo-1675881149252-a2e3d0e57e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGluayUyMGx1eHVyeSUyMGRyZXNzfGVufDB8fHx8MTcxMDcwNDIyNXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Blush Pink Sequin Dress",
    price: "$299.99",
    image: "https://images.unsplash.com/photo-1586809764311-090bc6068916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibHVzaCUyMHBpbmslMjBzZXF1aW4lMjBsdXh1cnklMjBkcmVzc3xlbnwwfHx8fDE3MTA3MDQyMjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Soft Pink Chiffon Dress",
    price: "$399.99",
    image: "https://images.unsplash.com/photo-1559762705-2123aa9b467f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwcGluayUyMGNoaWZmb24lMjBsdXh1cnklMjBkcmVzc3xlbnwwfHx8fDE3MTA3MDQyMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Fuchsia Pink Silk Gown",
    price: "$599.99",
    image: "https://images.unsplash.com/photo-1586809764311-090bc6068916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdWNoc2lhJTIwcGluayUyMHNpbGslMjBsdXh1cnklMjBnb3dufGVufDB8fHx8MTcxMDcwNDIyNnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box bg="pink.50" minHeight="100vh">
      <Container maxW="container.lg" py={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="pink.600" mb={8}>
          Pink Luxury Dresses
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {dresses.map((dress) => (
            <Box key={dress.id} bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Image src={dress.image} alt={dress.name} borderRadius="md" mb={4} />
              <Heading as="h2" size="lg" color="pink.700" mb={2}>
                {dress.name}
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="pink.500" mb={4}>
                {dress.price}
              </Text>
              <Button colorScheme="pink" size="lg" width="100%" leftIcon={<Icon as={FaShoppingCart} />}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </Grid>
      </Container>
      <Box bg="pink.100" py={12}>
        <Container maxW="container.lg">
          <Stack spacing={8} direction={["column", "row"]} align="center">
            <Box flex={1}>
              <Heading as="h2" size="xl" color="pink.700" mb={4}>
                Embrace Your Inner Princess
              </Heading>
              <Text fontSize="lg" color="pink.600">
                Shop our collection of stunning pink luxury dresses and make a statement at your next special occasion.
              </Text>
            </Box>
            <Image src="https://images.unsplash.com/photo-1473286835901-04adb1afab03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGluJTIwcGluayUyMGx1eHVyeSUyMGRyZXNzfGVufDB8fHx8MTcxMDcwNDIyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Woman in Pink Dress" borderRadius="lg" boxSize={["100%", "400px"]} objectFit="cover" />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
