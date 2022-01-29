import { Button, Flex, Textarea } from "@chakra-ui/react";
import React from "react";

interface TextAreaInputProps {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  inputValue: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  handleChange,
  handleSubmit,
  inputValue,
}) => {
  return (
    <Flex pt='2' w='full' alignItems='center' justifyContent='center'>
      <Textarea
        placeholder='Describe your thought'
        variant='outline'
        backgroundColor='white'
        onChange={handleChange}
        value={inputValue}
        w='275px'
      />
      <Button onClick={handleSubmit} colorScheme='blue' mx='2' type='submit'>
        ADD
      </Button>
    </Flex>
  );
};

export default TextAreaInput;
