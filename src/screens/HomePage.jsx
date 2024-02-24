import React, { createContext } from 'react';
import { Button, ButtonGroup, Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

export const ProductListContext = createContext();

function HomePage() {
  const [searchProduct, setSearchProduct] = React.useState([]);
  // let majorProductList = [];

  return (
    <ProductListContext.Provider
      value={{ searchProduct, setSearchProduct }}
    >
      <Navbar />
      <Container>
        <ProductList></ProductList>
      </Container>
    </ProductListContext.Provider>
  );
}

export default HomePage;
