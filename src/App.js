import "./App.css";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const modifiedTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode === "dark" ? "black" : "white",
      },
    }),
  },
  shadows: {
    whiteShadow: "0px 30px 90px rgba(255, 255, 255, 0.12)",
  },
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            color: "purple.400",
            borderColor: "gray.600",
            borderBottomWidth: "2px"
          },
          _hover: {
            color: "purple.300"
          }
        }
      }
  },
  Select: {
    baseStyle: {
      field: {
        _focus: {
          borderColor: "purple.400",
          boxShadow: "0 0 0 1px gray.600"
        }
      }
    },
    defaultProps: {
      focusBorderColor: "purple.400"
}
    }
  }
});

function App() {
  return (
    <Router>
      <ChakraProvider theme={modifiedTheme}>
        <div className="App">
          <Header />
          <Flex alignItems="center" justifyContent="center" width="100%">
            {/* <Hero /> */}
          </Flex>
          <Flex alignItems="center" justifyContent="center" width="100%">
            <Routes>
              <Route path="/" element={<Hero />} />
              {/*               <Route path="/inventory" element={<Inventory />} />
              <Route path="/claim2" element={<Hero />} />
              <Route path="/claim3" element={<Hero />} /> */}
            </Routes>
          </Flex>
          <Footer />
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
