import { Text, ListItem } from '@chakra-ui/react';
import axios from 'axios';

export function searchData() {
  console.log('in the searchData function');
}
export async function getProducts() {
  const products = await axios.get(
    'https://hemangbhagat.github.io/product_api/product.json'
  );
  return products;
}
export function searchSuggText(results) {
  results.map((prod, id) => {
    console.log('product Title: ' + prod.title);
    return <ListItem key={id}>{prod.title}</ListItem>;
  });
}
