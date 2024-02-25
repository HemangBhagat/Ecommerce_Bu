import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../utils/functions';
import { HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import {
  ProductListContext,
  ProductListContextCopy,
} from '../screens/HomePage';

import FilterGroups from './FilterGroups';
import ColorFilter from './ColorFilter';
function ProductList() {
  const { searchProduct, setSearchProduct } = useContext(ProductListContext);

  const { searchCProductCopy, setSearchProductCopy } = useContext(
    ProductListContextCopy
  );
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      let result = await getProducts();
      setResults(result.data);
      setSearchProduct(result.data);
      setSearchProductCopy(result.data);
      console.log('in useEffect xx');
    })();
  }, [setSearchProduct]);

  // React.useEffect(() => {
  //   console.log('Updated Results:', results);
  // }, [results]);

  const handleFilterChange = filteredResults => {
    // Update the state with the filtered results

    setSearchProduct(filteredResults);
    console.log('Filtered Results: ', results);
  };

  return results && results.length > 0 ? (
    <Stack>
      <HStack align="center">
        <Text>Filter By:</Text>
        <FilterGroups
          // setResults={}
          // searchProduct={searchProduct}
          setSearchProduct={handleFilterChange}
          searchCProductCopy={searchCProductCopy}
        />
        <ColorFilter
          setSearchProduct={handleFilterChange}
          searchCProductCopy={searchCProductCopy}
        />
      </HStack>
      <HStack w="100%" alignItems={'center'}>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {searchProduct.map((product, id) => {
            console.log(product);
            return <ProductCard key={id} product={product} />;
          })}
        </SimpleGrid>
      </HStack>
    </Stack>
  ) : (
    <div>Hello World</div>
  );
}

export default ProductList;
