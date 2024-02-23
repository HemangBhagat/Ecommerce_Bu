import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Stack, InputGroup, Input, InputRightElement } from '@chakra-ui/react';

function SearchFiled() {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputRightElement>
        <Input type="tel" placeholder="Search..." />
      </InputGroup>
    </Stack>
  );
}

export default SearchFiled;
