import {
  Box,
  Button,
  Container,
  Flex,
  ListItem,
  Spacer,
  Text,
  Textarea,
  UnorderedList,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { EventHandler } from "react";
import Navbar from "../components/Navbar";
import { Message } from "../types/message";

const sampleList = [
  {
    id: 1,
    message: "Hi, there",
  },
  {
    id: 2,
    message: "Tower",
  },
  {
    id: 3,
    message: "Long time no see",
  },
  {
    id: 4,
    message: "I don't know",
  },
];

const Home: NextPage = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [myList, setMyList] = React.useState(sampleList);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMyList([...myList, { id: Date.now(), message: inputValue }]);
    setInputValue("");
  };

  return (
    <Container maxW='6xl'>
      <Navbar />
      <Flex>
        <Box w='400px' h='1000' bg='gray.100'>
          <Text fontSize='2xl'>Went Well</Text>
          <Textarea
            placeholder='Describe your thought'
            variant='outline'
            backgroundColor='white'
            onChange={handleChange}
            value={inputValue}
          />
          <Button onClick={handleSubmit}>ADD</Button>
          <UnorderedList>
            {!myList.length
              ? null
              : myList.map((item: Message) => (
                  <ListItem key={item.id}>{item.message}</ListItem>
                ))}
          </UnorderedList>
        </Box>
        <Spacer />
        <Box w='400px' h='1000' bg='gray.100'>
          <Text fontSize='2xl'>To Improve</Text>
        </Box>
        <Spacer />
        <Box w='400px' h='1000' bg='gray.100'>
          <Text fontSize='2xl'>Action Items</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
