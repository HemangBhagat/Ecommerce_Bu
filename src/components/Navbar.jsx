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

  // const [suggVisible, setSuggVisible] = React.useState(false);

  const { searchProduct, setSearchProduct } = useContext(ProductListContext);

  const {
    isOpen: isIconOpen,
    onOpen: onIconOpen,
    onClose: onIconClose,
  } = useDisclosure();

  const {
    isOpen: isPopOpen,
    onOpen: onPopOpen,
    onClose: onPopClose,
  } = useDisclosure();

  const popoverRef = React.useRef(null);

  // const handleInputClick = () => {
  //   // if (!onPopOpen) {
  //   console.log('in handleInputClick Before(isPopOpen)' + isPopOpen);
  //   onPopOpen();
  //   console.log('in handleInputClick After(isPopOpen)' + isPopOpen);
  //   // }
  // };

  // const handleFocus = () => {
  //   // if (!onPopOpen) {
  //   console.log('in handleFocusClick Before(isPopOpen)' + isPopOpen);
  //   onPopOpen();
  //   console.log('in handleFocusClick After(isPopOpen)' + isPopOpen);
  //   // }
  // };

  //checks if popoverRef.current is not null or undefined, indicating a valid reference to the popover element in the DOM.

  //!popoverRef.current.contains(event.target): Checks if the click target (event.target) is not within the popover element or any of its children.
  //contains is a method that checks if an element is contained within another element's DOM tree.
  // const handleOutsideClick = event => {
  //   if (
  //     popoverRef.current &&
  //     !popoverRef.current.contains(event.target) &&
  //     isPopOpen
  //   ) {
  //     console.log('in handleOutsideClick Before(isPopOpen)' + isPopOpen);
  //     onPopClose();
  //     console.log('in handleOutsideClick After(isPopOpen)' + isPopOpen);
  //   }
  // };

  //document.addEventListener('click', handleOutsideClick);: Adds a click event listener to the entire document.
  //When a click occurs anywhere on the page, the handleOutsideClick function will be called.

  //return () => document.removeEventListener('click', handleOutsideClick);:
  //This part returns a cleanup function that will be executed when the component unmounts or the suggVisible state variable changes.

  //It removes the click event listener to prevent memory leaks or unexpected behavior.
  // React.useEffect(() => {
  //   console.log('IN USEEFFECT (isPopOpen)' + isPopOpen);
  //   document.addEventListener('click', handleOutsideClick);
  //   return () => document.removeEventListener('click', handleOutsideClick);
  // }, []);

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
            ref={popoverRef}
            position="relative"
          >
            {/* searchbar */}
            <Box className="searchInput">
              <SearchFiled
                // handleInputClick={handleInputClick}
                // handleFocusClick={handleFocus}
                // handleFocus={()=>{
                //   console.log("Focussing");
                //   onPopOpen()
                // }}
                // handleBlur={()=>{
                //   console.log("Blurring");
                //   onPopClose()
                // }}
                setResults={setResults}
                searchProduct={searchProduct}
              />
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
            >
              <Box>{searchSuggText(results)}</Box>
            </Box>

            {/* Old Logic */}
            {/* <Popover placement="bottom-end" isPopOpen={isPopOpen}>
              <Box>
                <PopoverTrigger>
                  <Box>
                    <SearchFiled
                      // handleInputClick={handleInputClick}
                      // handleFocusClick={handleFocus}
                      handleFocus={()=>{
                        console.log("Focussing");
                        onPopOpen()
                      }}
                      handleBlur={()=>{
                        console.log("Blurring");
                        onPopClose()
                      }}
                      setResults={setResults}
                      searchProduct={searchProduct}
                    />
                  </Box>
                </PopoverTrigger>
              </Box>
              <PopoverContent w="100">
                <PopoverBody maxH={300} overflowY="scroll">
                  {searchSuggText(results)}
                </PopoverBody>
              </PopoverContent>
            </Popover> */}
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
