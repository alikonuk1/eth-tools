import { Flex, Image, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Header = () => {
  const [blockNumber, setBlockNumber] = useState("...");
  const headingSize = useBreakpointValue({ base: "md", md: "lg" });
  const blockTextSize = useBreakpointValue({ base: "sm", md: "md" });
  const padding = useBreakpointValue({ base: 2, md: 3 });
  const paddingX = useBreakpointValue({ base: 3, md: 6 });

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");
    
    const updateBlockNumber = async () => {
      try {
        const number = await provider.getBlockNumber();
        setBlockNumber(number.toLocaleString());
      } catch (error) {
        console.error("Failed to fetch block number:", error);
        setBlockNumber("Error");
      }
    };

    updateBlockNumber();
    const interval = setInterval(updateBlockNumber, 12000); // Update every 12 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={padding}
      px={paddingX}
      position="sticky"
      top="0"
      backgroundColor="rgba(0, 0, 0, 0.6)"
      backdropFilter="blur(4px)"
      zIndex="1"
    >
      <Link to="/">
        <Flex align="center" cursor="pointer" gap={"1px"}>
          <Heading size={headingSize} fontWeight={"extrabold"}>
            eth-tools
          </Heading>
        </Flex>
      </Link>
      <Flex align="center" gap={"12px"}>
        <Flex
          direction="column"
          align={{ base: "flex-end", md: "flex-end" }}
          display={{ base: "flex", md: "flex" }}
        >
          <Text fontSize={blockTextSize} color="gray.400">Block</Text>
          <Text fontSize={blockTextSize} fontWeight="bold" color="green.400">
            #{blockNumber}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
