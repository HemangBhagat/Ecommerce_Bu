import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
function HomePage() {
  return (
    <div>
      <Navbar />
      <ProductList></ProductList>
    </div>
  );
}

export default HomePage;
