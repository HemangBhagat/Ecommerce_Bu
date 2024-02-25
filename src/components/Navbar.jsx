'use client';
import React, { useContext, useEffect } from 'react';
import Profilepic from '../components/Profilepic';
import SearchFiled from '../components/SearchFiled';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { displaySearchSuggText } from '../utils/functions';
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
import {
  ProductListContext,
  ProductListContextCopy,
} from '../screens/HomePage';
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
  const { searchProduct, setSearchProduct } = useContext(ProductListContext);
  const { searchCProductCopy, setSearchProductCopy } = useContext(
    ProductListContextCopy
  );

  const {
    isOpen: isIconOpen,
    onOpen: onIconOpen,
    onClose: onIconClose,
  } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isIconOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isIconOpen ? onIconClose : onIconOpen}
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
          <Box
            width={400}
            id="searchBarWithResults"
            bg="white"
            borderRadius="12px"
            position="relative"
          >
            {/* searchbar */}
            <Box className="searchInput">
              <SearchFiled
                setSearchProduct={setSearchProduct}
                searchCProductCopy={searchCProductCopy}
              ></SearchFiled>
            </Box>

            {/* results */}

            <Box
              className="searchResults"
              position="absolute"
              top="100%"
              left="0"
              right="0"
              zIndex="30"
              background="white"
              height="100px"
              overflowY="scroll"
            >
              <Box>{displaySearchSuggText(searchProduct)}</Box>
            </Box>
          </Box>
          <Flex alignItems={'center'} gap="20px">
            <FaShoppingCart color="#3182ce" size="1.5rem" />
            <Profilepic />
          </Flex>
        </Flex>

        {isIconOpen ? (
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
