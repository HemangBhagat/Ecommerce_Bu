import React from 'react';
import { Menu, MenuItem, MenuButton, MenuList, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function FilterGroups({ setResults, searchProduct }) {
  console.log('XXX', searchProduct);

  const handleSortByPrice = order => {
    // Copy the products array to avoid mutating the original data
    const sortedProducts = [...searchProduct];

    // Sort the products based on the price
    searchProduct.sort((a, b) => {
      const priceA = parseInt(a.price);
      const priceB = parseInt(b.price);

      if (order === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    // Update the results using the prop function
    setResults(sortedProducts);
  };

  return (
    <Menu padding="10px">
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        marginTop="10px"
        width="100px"
      >
        Price
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleSortByPrice('desc')}>
          High to Low
        </MenuItem>
        <MenuItem onClick={() => handleSortByPrice('asc')}>
          Low to High
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default FilterGroups;
