import { Flex, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={3}
      px={6}
      position="sticky"
      top="0"
      backgroundColor="rgba(0, 0, 0, 0.6)"
      backdropFilter="blur(4px)"
      zIndex="1"
    >
      <Link to="/">
        <Flex align="center" cursor="pointer" gap={"1px"}>
          {/* <Image src="logo.png" boxSize="48px" /> */}
          <Heading size="lg" fontWeight={"extrabold"}>
            eth-tools
          </Heading>
        </Flex>
      </Link>
      <Flex align="flex-end" gap={"12px"}>
      </Flex>
    </Flex>
  );
};

export default Header;