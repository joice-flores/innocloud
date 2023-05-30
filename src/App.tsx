

import { Grid } from "@mui/material";
import About from "./pages/About";
import Contatos from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import ResponsiveAppBar from "./pages/Navbar";
import Services from "./pages/Services";
import './App.css'
import Why from "./pages/why";

function App() {
  return (
    <Grid
    container
    spacing={3}
    className="App">
      <ResponsiveAppBar />
      <Home />
      <About />
      <Services />
      <Why />
      <Contatos />
      <Footer />
    </Grid>
  );
}
export default App;
