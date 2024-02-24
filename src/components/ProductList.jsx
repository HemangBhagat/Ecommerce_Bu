import React from 'react';
import ProductCard from './ProductCard';
import SearchFiled from './SearchFiled';
import { getProducts } from '../utils/functions';
import {
  Box,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
} from '@chakra-ui/react';
function ProductList() {
  const [searchProduct, setSearchProduct] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      let result = await getProducts();
      setSearchProduct(result.data);
    })();
  }, [setSearchProduct]);

  console.log(searchProduct);
  return (
    <HStack w="100%" alignItems={'center'}>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {searchProduct.map(product => {
          return <ProductCard product={product} />;
        })}
      </SimpleGrid>
    </HStack>
  );
}

export default ProductList;
