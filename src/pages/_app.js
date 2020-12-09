import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
