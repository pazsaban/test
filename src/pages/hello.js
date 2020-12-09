import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";

import { Container } from "../components/Container";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
