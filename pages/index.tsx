import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import MessageCard from "../components/MessageCard";
import Navbar from "../components/Navbar";
import TextAreaInput from "../components/TextAreaInput";
import { supabase } from "../libs/supabase";
import { User } from "../types/user";

const Home: NextPage = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const [data, setData] = React.useState<any[] | null>([]);
  const [errorText, setErrorText] = React.useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    const user = supabase.auth.user();

    if (!user) {
      router.push("/signin");
    }

    setCurrentUser({ ...currentUser, id: user?.id, email: user?.email });
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase.from("went_well").select();

    if (error) {
      setErrorText(error.message);
    }

    setData(data);
  };

  React.useEffect(() => {
    fetchData();
    const mySubscription = supabase
      .from("went_well")
      .on("*", () => fetchData())
      .subscribe();

    return () => supabase.removeSubscription(mySubscription);
  }, []);

  const fetchLastestMessages = useMemo(() => {
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        await supabase
          .from("went_well")
          .insert({ message: inputValue, user_id: currentUser?.id });
      } catch (error) {
        console.log(error);
        if (error instanceof Error) {
          setErrorText(error.message);
        }
      }

      setInputValue("");
    };

    if (errorText) return <p>Oh no... {errorText}</p>;

    return (
      <Container maxW='6xl'>
        <Navbar user={currentUser} />
        <Flex>
          <Box w='350px' h='1000' bg='gray.100'>
            <Text fontSize='2xl'>Went Well</Text>
            <TextAreaInput
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              inputValue={inputValue}
            />
            {!data?.length
              ? null
              : data?.map((item: any) => (
                  <MessageCard key={item.id} message={item.message} />
                ))}
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
  }, [currentUser, data, errorText, inputValue]);

  return fetchLastestMessages;
};

export default Home;
