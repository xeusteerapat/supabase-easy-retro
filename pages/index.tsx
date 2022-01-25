import {
  Box,
  Center,
  Container,
  Flex,
  Spacer,
  Text,
  Input,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { supabase } from "../libs/supabase";

const Home: NextPage = () => {
  return (
    <Container maxW='6xl'>
      <Center>
        <Text fontSize='4xl'>(Not) EazyRetro</Text>
      </Center>
      <Flex>
        <Box w='350px' h='1000' bg='gray.100'>
          <Text fontSize='2xl'>Went Well</Text>
          <Input
            placeholder='Basic usage'
            variant='outline'
            backgroundColor='white'
          />
        </Box>
        <Spacer />
        <Box w='350px' h='1000' bg='gray.100'>
          <Text fontSize='2xl'>To Improve</Text>
        </Box>
        <Spacer />
        <Box w='350px' h='1000' bg='gray.100'>
          <Text fontSize='2xl'>Action Items</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
