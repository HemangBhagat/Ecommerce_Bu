'use client';
import React, { useContext } from 'react';
import Profilepic from '../components/Profilepic';
import SearchFiled from '../components/SearchFiled';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
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
  List,
  ListItem,
} from '@chakra-ui/react';
import { ProductListContext } from '../screens/HomePage';
import { FaShoppingCart } from 'react-icons/fa';

const Links = ['Mobiles', 'Laptop'];

const test = ['abcdefg', 'hello', 'hemag bhagat'];

const NavLink = props => {
  const { children } = props;
  return (
    <Box
      padding="50px"
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
      {console.log('HELLO')}
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
            <Box bg="gray" height="50px" width="80px">
              Logo
            </Box>
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
          <Box width={400} bg="white" borderRadius="12px">
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <SearchFiled
                  setResults={setResults}
                  searchProduct={searchProduct}
                />
              </PopoverTrigger>
              <PopoverContent w="100">
                <PopoverBody maxH={300} overflowY="scroll">
                  {searchSuggText(results)}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Flex alignItems={'center'} gap="20px">
            <FaShoppingCart color="#3182ce" size="1.5rem" />
            <Profilepic />
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
