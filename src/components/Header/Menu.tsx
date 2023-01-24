import React from 'react';
import {
  HStack,
  IconButton,
  useColorMode
} from '@chakra-ui/react';
import {
  MdPersonOutline,
  MdOutlineDarkMode
} from 'react-icons/md';

const Menu: React.FC = () => {
  const colorMode = useColorMode();

  return (
    <HStack gap={2}>
      <IconButton
        aria-label='Toggle theme'
        borderRadius='50%'
        as={MdOutlineDarkMode}
        onClick={() => colorMode.toggleColorMode()}
      />
      <IconButton
        aria-label='Login'
        borderRadius='50%'
        as={MdPersonOutline}
      />
    </HStack>
  );
};

export default Menu;
