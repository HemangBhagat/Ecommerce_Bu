import axios from 'axios';

export function searchData() {
  console.log('in the searchData function');
}
export async function getProducts() {
  let products = await axios.get(
    'https://hemangbhagat.github.io/product_api/product.json'
  );
  return products;
}
