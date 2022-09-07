import { FormControl, InputGroup, InputLeftElement, Input, Center } from "@chakra-ui/react"
function MyInputGroup({ name, icon, ...rest }) {
  return (
    <FormControl id={name} {...rest}>
      <InputGroup backgroundColor={"#F0F0F0"} w={"400px"} h={"52px"} rounded={"24px"}>
        <InputLeftElement pointerEvents='none' children={icon} h={"full"} />
          <Input
            type='text'
            size='md'
            placeholder={name}
            border={"none"}
            h={"full"}
            w={"full"}
            rounded={"24px"}
          />
      </InputGroup>
    </FormControl>
  )
}

export default MyInputGroup
