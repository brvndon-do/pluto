import React from 'react';
import {
  Box,
  Text
} from '@chakra-ui/react';
import Menu from './Menu';

const Header: React.FC = () => (
  <Box
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    p={2}
    borderBottom='2px'
    borderColor='gray.100'
  >
    <Text fontSize='2xl'>Pluto</Text>
    <Menu />
  </Box>
);

export default Header;
