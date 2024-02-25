import React, { createContext } from 'react';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

export const ProductListContext = createContext();

function HomePage() {
  const [searchProduct, setSearchProduct] = React.useState([]);
  // let majorProductList = [];

  return (
    <ProductListContext.Provider value={{ searchProduct, setSearchProduct }}>
      <Navbar />
      <Container maxW="100vw" padding="10px">
        <ProductList />
      </Container>
    </ProductListContext.Provider>
  );
}

export default HomePage;
