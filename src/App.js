import { Box } from "@chakra-ui/react";
import Header from "./components/0-Header/Header";
import About from './components/1-About/About'
import Benefits from "./components/2-Benefits/Benefits";

function App() {
  return (
    <Box>
      <Header />
      <About />
      <Benefits />
    </Box>
  );
}

export default App;
