import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../utils/functions';
import { HStack, SimpleGrid } from '@chakra-ui/react';
import {
  ProductListContext,
  ProductListContextCopy,
} from '../screens/HomePage';

function ProductList() {
  const { searchProduct, setSearchProduct } = useContext(ProductListContext);

  const { searchCProductCopy, setSearchProductCopy } = useContext(
    ProductListContextCopy
  );

  React.useEffect(() => {
    (async function () {
      let result = await getProducts();
      setSearchProduct(result.data);
      setSearchProductCopy(result.data);
      // majorProductList = result.data;
      console.log('in useEffect');
    })();
  }, [setSearchProduct]);

  return (
    <HStack w="100%" alignItems={'center'}>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {searchProduct.map((product, id) => {
          return <ProductCard key={id} product={product} />;
        })}
      </SimpleGrid>
    </HStack>
  );
}

export default ProductList;
