import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Box,
} from '@chakra-ui/react';

function SearchFiled({ handleFocus, setResults, searchProduct, handleBlur }) {
  const inputRef = React.useRef(null);

  // const handleClick = () => {
  //   console.log('Inside HandleClick');
  //   handleInputClick();
  // };

  function filterSearch(value) {
    const res = searchProduct.filter(item => {
      return (
        value &&
        item &&
        item.title &&
        item.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(res);
  }

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputRightElement>

        <Input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          onChange={e => {
            filterSearch(e.target.value);
            // handleClick();
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </InputGroup>
    </Stack>
  );
}

export default SearchFiled;
