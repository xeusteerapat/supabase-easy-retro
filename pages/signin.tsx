import React from "react";
import { useRouter } from "next/router";
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
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });

      router.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Container maxW='xl' centerContent mt={10}>
      <Heading>Welcome Back!</Heading>
      <Box minWidth='700px'>
        <form action='' onSubmit={handleSubmit}>
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
            Sign in
          </Button>
        </form>
        Not have account, <Link href='/signup'>Register</Link>
      </Box>
    </Container>
  );
};

export default SignIn;
