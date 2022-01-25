import React from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { supabase } from "../libs/supabase";

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log({ user, session, error });
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Container maxW='xl' centerContent mt={10}>
      <Heading>Sign Up to Eazy Retro</Heading>
      <Box minWidth='700px'>
        <form action='' onSubmit={handleSubmit}>
          <FormControl id='fullname' isRequired>
            <FormLabel>Fullname</FormLabel>
            <Input
              type='text'
              value={fullname}
              onChange={e => setFullname(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id='email' isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme='teal'
            // isLoading={props.isSubmitting}
            type='submit'
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
