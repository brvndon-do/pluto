import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import Theme from '../theme';


const Document = () => (
  <Html lang="en">
    <Head />
    <body>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

