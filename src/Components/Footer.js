import { socialData } from "../data/references.js";
import {
  Flex,
  Icon,
  Link,
  Text,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  /*   const iconSize = useBreakpointValue({ base: '10px', md: '25px', lg: '30px' }) */

  return (
    <Flex
      as="footer"
      direction="column"
      align="center"
      justify="center"
      /* bg="gray.800" color="white"  */ py={3}
    >
      <Flex justify="center" direction="row" gap={3}>
        <Link href={socialData.TWITTER} isExternal>
          <Icon
            as={FaTwitter}
            color="gray.500"
            /* boxSize={iconSize} */ transition="color 0.2s"
            _hover={{ color: "#1DA1F2" }}
          />
        </Link>
        <Link href={socialData.GITHUB} isExternal>
          <Icon
            as={FaGithub}
            color="gray.500"
            /* boxSize={iconSize} */ transition="color 0.2s"
            _hover={{ color: "lightgray" }}
          />
        </Link>
        <Link href={socialData.EMAIL} isExternal>
          <Icon
            as={IoMail}
            color="gray.500"
            /* boxSize={iconSize} */ transition="color 0.2s"
            _hover={{ color: "#FF9966" }}
          />
        </Link>
      </Flex>
      {/*       <Box mt={1}>
        <Text fontSize="xx-small" color="gray.600">
          © 2023 All rights reserved.
        </Text>
      </Box> */}
    </Flex>
  );
};

export default Footer;