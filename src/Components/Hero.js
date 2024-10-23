import React, { useState } from "react";
import {
  VStack, Text, Flex, Box, Input,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Select, useClipboard, Button
} from "@chakra-ui/react";
import { ethers } from "ethers";

const Hero = () => {
  // Unit conversion states
  const [unitValue, setUnitValue] = useState("");
  const [fromUnit, setFromUnit] = useState("ether");
  const [toUnit, setToUnit] = useState("wei");
  const [convertedValue, setConvertedValue] = useState("");
  
  // String to bytes32 states
  const [inputString, setInputString] = useState("");
  const [bytes32Result, setBytes32Result] = useState("");
  const { hasCopied: hasCopiedBytes, onCopy: onCopyBytes } = useClipboard(bytes32Result);
  const { hasCopied: hasCopiedUnit, onCopy: onCopyUnit } = useClipboard(convertedValue);

  // Available units for conversion
  const units = [
    "wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"
  ];

  // Convert units
  const convertUnits = () => {
    try {
      if (!unitValue) return;
      
      // Convert to wei first
      const valueInWei = ethers.utils.parseUnits(unitValue, fromUnit);
      
      // Then format to target unit
      const converted = ethers.utils.formatUnits(valueInWei, toUnit);
      setConvertedValue(converted);
    } catch (error) {
      setConvertedValue("Invalid input");
    }
  };

  // Convert string to bytes32
  const convertToBytes32 = () => {
    try {
      if (!inputString) return;
      const bytes32 = ethers.utils.formatBytes32String(inputString);
      setBytes32Result(bytes32);
    } catch (error) {
      setBytes32Result("Invalid input");
    }
  };

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" minH="48vh">
            <VStack p={6} mb={12}>
              <Box>
          <Flex justifyContent="center" alignItems="center">
            <Text
              fontSize={["1xl", "4xl", "5xl"]}
              fontWeight="bold"
              letterSpacing="-0.02em"
              textShadow="sm"
              lineHeight={["initial", "2rem", "5rem"]}
              as="h1"
              bgGradient="linear(to-tr, gray.100, purple.600)"
              bgClip="text"
            >
              eth-tools
            </Text>
          </Flex>
        </Box>
        </VStack>
      <Box
        w={["100%", "360px", "600px"]}
        /* bg="white" */
        boxShadow="xl"
        borderRadius="lg"
        overflow="hidden"
        border="1px"
        borderColor="gray.800"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab fontWeight="bold">Units</Tab>
            <Tab fontWeight="bold">String to Bytes32</Tab>
          </TabList>

          <TabPanels>
            {/* Units Conversion Panel */}
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">ETH Unit Converter</Text>
                
                <Input
                  placeholder="Enter value"
                  value={unitValue}
                  onChange={(e) => setUnitValue(e.target.value)}
                  focusBorderColor="gray.600"
                />
                
                <Flex w="100%" gap={4}>
                  <Select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                    {units.map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </Select>
                  
                  <Select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                    {units.map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </Select>
                </Flex>

                <Button colorScheme="gray" onClick={convertUnits} w="60%" borderRadius="lg">
                  Convert
                </Button>

                {convertedValue && (
                  <Box w="100%" p={4} borderRadius="md" borderWidth="1px">
                    <Flex justify="space-between" align="center">
                      <Text fontSize="lg">{convertedValue}</Text>
                      <Button size="sm" onClick={onCopyUnit}>
                        {hasCopiedUnit ? "Copied!" : "Copy"}
                      </Button>
                    </Flex>
                  </Box>
                )}
              </VStack>
            </TabPanel>

            {/* String to Bytes32 Panel */}
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">String to Bytes32</Text>
                
                <Input
                  placeholder="Enter string"
                  value={inputString}
                  onChange={(e) => setInputString(e.target.value)}
                  focusBorderColor="gray.600"
                />

                <Button colorScheme="gray" onClick={convertToBytes32} w="100%">
                  Convert
                </Button>

                {bytes32Result && (
                  <Box w="100%" p={4} borderRadius="md" borderWidth="1px">
                    <Flex justify="space-between" align="center">
                      <Text fontSize="sm" wordBreak="break-all">{bytes32Result}</Text>
                      <Button size="sm" onClick={onCopyBytes}>
                        {hasCopiedBytes ? "Copied!" : "Copy"}
                      </Button>
                    </Flex>
                  </Box>
                )}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Hero;
