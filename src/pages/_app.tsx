import '@/styles/globals.css';
import Theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={Theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;