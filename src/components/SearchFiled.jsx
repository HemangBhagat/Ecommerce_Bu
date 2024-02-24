import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Stack, InputGroup, Input, InputRightElement } from '@chakra-ui/react';

function SearchFiled({ searchProduct, setResults }) {
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
          type="text"
          placeholder="Search..."
          onChange={e => {
            filterSearch(e.target.value);
          }}
        />
      </InputGroup>
    </Stack>
  );
}

export default SearchFiled;
