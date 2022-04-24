import { Button, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, useWhyDidYouUpdate } from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection='column'
      width='100wh'
      height='100vh'
      backgroundColor='gray.200'
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        flexDir='column'
        mb='2'
        justifyContent='center'
        alignItems='center'
      >
      <Heading>Bem vindo ao MYSYS!</Heading>
      <form>
        <Stack
          spacing={4}
          p='1rem'
          bg='whiteAlpha.900'
          boxShadow='md'
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<FaUserAlt color="gray.300" />}
              />
              <Input
                type='email'
                placeholder='Digite seu melhor email'
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<FaLock color="gray.300" />}
              />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Senha'
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Stack>
      </form>
      </Stack>
    </Flex>
  )
}
