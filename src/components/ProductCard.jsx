import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Image,
  Stack,
  HStack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { MdStars } from 'react-icons/md';

function ProductCard({ product }) {
  return (
    <Card marginTop="10px">
      <CardBody>
        <Container bg="red">
          <Image
            src={product.images}
            alt={product.title}
            borderRadius="lg"
            maxH="250px"
          />
        </Container>
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <HStack>
            <MdStars size="1.5rem" color="green" />
            <Text color="green" fontWeight="600" fontSize="1.2rem">
              {product.rating}
            </Text>
          </HStack>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider color="gray.300" />
      <CardFooter>
        <ButtonGroup spacing="5">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
export default ProductCard;
