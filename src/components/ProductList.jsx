import React from 'react';
import ProductCard from './ProductCard';
import SearchFiled from './SearchFiled';
import { getProducts } from '../utils/functions';
import {
  Box,
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
    <Box>
      <Box>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Box>
              <SearchFiled> </SearchFiled>
            </Box>
          </PopoverTrigger>
          <PopoverContent w="100">
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>

      <SimpleGrid columns={2} spacing={10}>
        {searchProduct.map(product => {
          return <ProductCard product={product} />;
        })}
      </SimpleGrid>
    </Box>
  );
}

export default ProductList;
