import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
function MyInputGroup({ name, icon, placeholder, value, setValue, ...rest }) {
  return (
    <FormControl id={name} {...rest}>
      <InputGroup
        backgroundColor={"#F0F0F0"}
        w={"400px"}
        h={"52px"}
        rounded={"24px"}
      >
        <InputLeftElement
          pointerEvents="none"
          children={icon}
          h={"full"}
          color={"grey"}
          ml={"6px"}
        />
        <Input
          name={name}
          type='text'
          size='md'
          placeholder={placeholder}
          border={"none"}
          h={"full"}
          w={"full"}
          rounded={"24px"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputGroup>
    </FormControl>
  )
}

export default MyInputGroup
