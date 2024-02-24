'use client';
import React, { useContext } from 'react';
import Profilepic from '../components/Profilepic';
import SearchFiled from '../components/SearchFiled';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { searchSuggText } from '../utils/functions';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from '@chakra-ui/react';
import { ProductListContext } from '../screens/HomePage';

const Links = ['Mobiles', 'Laptop'];

const NavLink = props => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const [results, setResults] = React.useState([]);

  const { searchProduct, setSearchProduct } = useContext(ProductListContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Box width={350}>
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Box>
                  <SearchFiled
                    setResults={setResults}
                    searchProduct={searchProduct}
                  ></SearchFiled>
                </Box>
              </PopoverTrigger>
              <PopoverContent w="100">
                <PopoverBody maxH={300} overflowY="scroll">
                  {searchSuggText(results)}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Flex alignItems={'center'}>
            <IconButton
              variant="none"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<AddIcon />}
            />
          </Flex>
          <Flex alignItems={'center'}>
            <Profilepic></Profilepic>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
