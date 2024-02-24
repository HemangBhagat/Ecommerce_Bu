import React, { useContext } from 'react';
import { Menu, MenuItem, MenuButton, MenuList, Button } from '@chakra-ui/react';
import { ProductListContext } from '../screens/HomePage';
import { ChevronDownIcon } from '@chakra-ui/icons';
function FilterGroups() {
  const [results, setResults] = React.useState([]);

  const { searchProduct, setSearchProduct } = useContext(ProductListContext);

  const setAscending = () => {
    console.log(searchProduct);

    const filterData = searchProduct.sort().reverse()

    setResults(filterData)
  };

  const setDescending = () => {
    console.log(searchProduct);

    const filterData = searchProduct.sort().reverse()

    setResults(filterData)
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
