import React from 'react';
import { Button, ButtonGroup, Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
function HomePage() {
  return (
    <div>
      <Navbar />
      <Container>
        <ProductList></ProductList>
      </Container>
    </div>
  );
}

export default HomePage;
