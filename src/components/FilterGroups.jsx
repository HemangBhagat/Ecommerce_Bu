import React, { useContext } from 'react';
import { Menu, MenuItem, MenuButton, MenuList, Button } from '@chakra-ui/react';
import { ProductListContext } from '../screens/HomePage';
import { ChevronDownIcon } from '@chakra-ui/icons';
function FilterGroups() {
  const { searchProduct, setSearchProduct } = useContext(ProductListContext);

  const setAscending = () => {
    // console.log(searchProduct);

    const filterData = searchProduct.sort(
      (a, b) => parseInt(a.price) - parseInt(b.price)
    );
    console.log("Updating state variable", filterData)
    setSearchProduct(filterData);
  };

  const setDescending = () => {
    const filterData = searchProduct
      .sort((a, b) => parseInt(a.price) - parseInt(b.price))
      .reverse();

    setSearchProduct(filterData);
  };

  return (
    <Menu padding="10px">
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop="10px">
        Filter
      </MenuButton>
      <MenuList>
        <MenuItem onClick={setDescending}>Price: High to Low</MenuItem>
        <MenuItem onClick={setAscending}>Price: Low to High</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default FilterGroups;
