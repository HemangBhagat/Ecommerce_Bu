import React, { createContext } from 'react';
import { Container, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import FilterGroups from '../components/FilterGroups';

export const ProductListContext = createContext();
export const ProductListContextCopy = createContext();

function HomePage() {
  const [searchProduct, setSearchProduct] = React.useState([]);
  const [searchCProductCopy, setSearchProductCopy]=React.useState([]);
  // let majorProductList = [];

  return (
    <ProductListContext.Provider value={{ searchProduct, setSearchProduct }}>
      <ProductListContextCopy.Provider value={{searchCProductCopy, setSearchProductCopy}}>
        <Navbar />
        <FilterGroups />
        <Container maxW="100vw" padding="10px">
          <ProductList />
        </Container>
      </ProductListContextCopy.Provider>
    </ProductListContext.Provider>
  );
}

export default HomePage;
