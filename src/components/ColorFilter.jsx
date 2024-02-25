import React from 'react';
import {
  Radio,
  RadioGroup,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function ColorFilter({ setResults, searchProduct }) {
  console.log('XXX', searchProduct);

  //Gets a list of all available colors in data
  const getColors = () => {
    // Create a Set.A JavaScript Set is a collection of unique values.
    // Each value can only occur once in a Set. A Set can hold any value of any data type.
    const allColors = new Set();

    //go through the data and check if the color is in ur list of [allColors]. If not, append to the list
    searchProduct.forEach(product => {
      allColors.add(product.color);
    });

    allColors.add('all');

    //convert the set to an array and return the array of distinct colors
    return Array.from(allColors);
  };

  const colors = getColors();

  const setColorFilter = color => {
    console.log('Selected Color:', color);

    // Filter products based on the selected color
    if (color === 'all') {
      setResults(searchProduct);
    } else {
      const filteredResults = searchProduct.filter(
        product => product.color === color
      );

      // Update the results using the prop function
      setResults(filteredResults);
    }
  };

  return (
    <Menu padding="10px">
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        marginTop="10px"
        width="100px"
      >
        Color
      </MenuButton>
      <MenuList padding="5px">
        <RadioGroup>
          <Stack direction="row">
            {colors.map((color, index) => (
              <Radio
                key={index}
                value={color}
                onChange={() => setColorFilter(color)}
              >
                {color}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </MenuList>
    </Menu>
  );
}

export default ColorFilter;
