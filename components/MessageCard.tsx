import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const MessageCard: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Flex pt='2' w='full' alignItems='center' justifyContent='center'>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW='275px'
        borderWidth='1px'
        rounded='lg'
        shadow='lg'
      >
        <Box p='6'>
          <Flex mt='1' justifyContent='space-between' alignContent='center'>
            <Box maxW='275px' fontSize='md' lineHeight='tight'>
              {message}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default MessageCard;
