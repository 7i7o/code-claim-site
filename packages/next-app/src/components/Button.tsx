import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  return (
    <ChakraButton
      type="button"
      backgroundColor={primary ? "#fff" : "#08010d"}
      color={primary ? "#000" : "#fff"}
      fontSize={16}
      height="52px"
      lineHeight={24}
      fontWeight={500}
      border={"2px solid #fff"}
      borderRadius={primary ? 8 : "0.5rem"}
      padding="0 2rem"
      _hover={{
        transform:
          "translate3d(0px, -2px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      _active={{}}
      {...props}
    >
      {label}
    </ChakraButton>
  );
};
